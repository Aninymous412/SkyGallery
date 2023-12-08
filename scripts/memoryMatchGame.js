const gameData = {
  numRows: 4,
  numCols: 4,
  basicImagePaths: [],
  nonBasicImagePaths: [],
  cards: [],
  flippedCards: [],
  matchedCards: [],
  firstCardFlipped: false,
  moves: 0,
  timerInterval: null,
  timer: 0,
  hintCount: 0,
};


// Function to create the game
function createGame() {
  // Reset and update values displayed
  endGame();

  const cardCount = gameData.numRows * gameData.numCols;

  // Generate and Shuffle the card deck
  const cardValues = generateCardImgs(cardCount);
  const shuffledCards = shuffleCards(cardValues);

  // Create the card HTML elements and add them to the grid
  gameData.cards = createCards(shuffledCards);

  const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(flipCard => {
    flipCard.addEventListener('click', () => {
      flipCardClickHandler(flipCard, cardCount)
    });
  });
}

// Function to generate complete lists of image paths from scripts/modalContents.js
function generateImagePaths() {
  let isNonBasic = false;
  const keys = Object.keys(modalContent);
  for (let i = 0; i < keys.length; i++) {
    if (i === 10) {
      isNonBasic = true;
      continue;
    }

    const key = keys[i];
    const images = modalContent[key].images;
    const targetList = isNonBasic ? gameData.nonBasicImagePaths : gameData.basicImagePaths;
    targetList.push(...images);
  }
}

// Call function to generate image paths
generateImagePaths();

// Function to generate an array of card images
function generateCardImgs(cardCount) {
  const cardImgs = [];
  const totalImgs = cardCount / 2;
  const pairsPerFolder = totalImgs / 2;

  getPairs(cardImgs, pairsPerFolder, gameData.basicImagePaths);
  getPairs(cardImgs, pairsPerFolder, gameData.nonBasicImagePaths);

  return cardImgs;
}

// Function to get pairs of card images
function getPairs(cardImgs, pairsPerFolder, imgList) {
  let i = 0;
  while (i < pairsPerFolder) {
    const filename = getRandomFromArray(imgList);
    if (!cardImgs.includes(filename)) {
      cardImgs.push(filename, filename);
      i++;
    }
  }
}

// Function to get a random element from an array
function getRandomFromArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to get the filename from an image path
function getImageFilename(path) {
  const parts = path.split('/');
  return parts[parts.length - 1];
}

// Function to shuffle the card deck (Fisher-Yates Algorithm)
function shuffleCards(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Function to create card HTML elements
function createCards(deck) {
  const htmlGrid = document.querySelector('#grid');
  htmlGrid.innerHTML = '';
  let cardElements = [];
  let index = 0;
  let row = [];

  for (let i = 0; i < gameData.numRows; i++) {
    for (let j = 0; j < gameData.numCols; j++) {
      const imgPath = deck[index];
      const imgName = getImageFilename(imgPath)
      const card = document.createElement('div');
      card.className = 'card flip-card';
      card.setAttribute('data-name', imgName);
      card.setAttribute('data-xPos', i);
      card.setAttribute('data-yPos', j);
      card.innerHTML = `
        <div class="card-body front"></div>
        <div class="card-body back">
          <img class="card-img" src="${imgPath}">
        </div>
      `;
      htmlGrid.appendChild(card);
      row.push(card);
      index++;
    }
    cardElements.push(row);
    row = [];
  }

  return cardElements;
}

// Event handler for flip card click
function flipCardClickHandler(flipCard, cardCount) {
  // If two cards are already flipped, do nothing
  if (gameData.flippedCards.length >= 2 || flipCard.classList.contains('clicked')) return;

  flipCard.classList.add('clicked');
  gameData.flippedCards.push(flipCard);

  // Increment moves
  gameData.moves++;
  document.querySelector('.moves').textContent = gameData.moves;

  // If first card flipped, start game
  if (!gameData.firstCardFlipped) {
    gameData.firstCardFlipped = true;
    startGame();
  }

  // If two cards are flipped, check if they match
  if (gameData.flippedCards.length === 2) {
    setTimeout(() => {
      gameData.flippedCards = checkForMatch();

      // If last match flipped, end game
      if (gameData.matchedCards.length === cardCount) {
        clearInterval(gameData.timerInterval);
        handleVictory(gameData.timer, gameData.moves);
      }
    }, 750);
  }
}

// Function to check if flipped cards match
function checkForMatch() {
  const value1 = gameData.flippedCards[0].getAttribute('data-name');
  const value2 = gameData.flippedCards[1].getAttribute('data-name');

  if (value1 === value2) {
    gameData.matchedCards.push(gameData.flippedCards[0]);
    gameData.matchedCards.push(gameData.flippedCards[1]);

    gameData.flippedCards[0].removeEventListener('click', flipCardClickHandler);
    gameData.flippedCards[1].removeEventListener('click', flipCardClickHandler);

    const hintedCards = document.querySelectorAll('.hinted');
    if (hintedCards.length > 0) {
      hintedCards.forEach(hintedCard => {
        hintedCard.classList.remove('hinted');
      });
    }
  } else {
    gameData.flippedCards.forEach(card => {
      card.classList.remove('clicked');
    });
  }

  return [];
}

// Function to display victory message
function handleVictory(time, moves) {
  const victoryMessage = document.getElementById('victory-message');
  const victoryTime = document.getElementById('victory-time');
  const victoryMoves = document.getElementById('victory-moves');
  const playAgainButton = document.getElementById('play-again-button');

  victoryTime.textContent = formatTime(time);
  victoryMoves.textContent = gameData.moves;
  victoryMessage.style.display = 'flex';

  playAgainButton.addEventListener('click', playAgain);
}

// Function to hide victory message and start a new game
function playAgain() {
  const victoryMessage = document.getElementById('victory-message');
  victoryMessage.style.display = 'none';

  createGame();
}

// Timer Functions
// Function to start timer
function startTimer() {
  gameData.timerInterval = setInterval(() => {
    gameData.timer++;
    updateTimerDisplay();
  }, 1000);
}

// Function to update the HTML timer display element
function updateTimerDisplay() {
  const timerElement = document.querySelector('.timer');
  timerElement.textContent = formatTime(gameData.timer);
}

// Function to format the time into minutes and seconds
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to reset the timer
function resetTimer() {
  clearInterval(gameData.timerInterval);
  gameData.timer = 0;
  updateTimerDisplay();
}

// Function to start game
function startGame() {
  startTimer();
  revealBtn.disabled = true;
}

// Function to end game
function endGame() {
  // Reset values
  gameData.matchedCards = [];
  gameData.flippedCards = [];
  gameData.firstCardFlipped = false;
  gameData.moves = 0;
  document.querySelector('.moves').textContent = gameData.moves;
  revealBtn.disabled = false;

  // Reset gameData.timer & timer display
  resetTimer();
  // Update settings
  checkSelectedBtn();
}

// Function to check the selected mode button and update game settings accordingly
function checkSelectedBtn() {
  const selectedModeBtn = document.querySelector('.mode-btn.selected');
  const defaultModeBtn = document.getElementById('default');

  if (selectedModeBtn) {
    // Get selectedModeBtn's value
    gameData.hintCount = parseInt(selectedModeBtn.getAttribute('data-hint-count'));
    gameData.numRows = parseInt(selectedModeBtn.getAttribute('data-num-rows'));
  } else {
    // Get defaultModeBtn's value
    gameData.hintCount = parseInt(defaultModeBtn.getAttribute('data-hint-count'));
    gameData.numRows = parseInt(defaultModeBtn.getAttribute('data-num-rows'));
  }

  document.getElementById('hint-count').textContent = gameData.hintCount;
}


// Event Listeners
// Event listener for mode buttons
const modeBtns = document.querySelectorAll('.mode-btn');
modeBtns.forEach(modeBtn => {
  modeBtn.addEventListener('click', () => {
    modeBtns.forEach(btn => {
      if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
      }
    });

    modeBtn.classList.add('selected');

    createGame();
  });
});

// Event listener for reveal button
const revealBtn = document.querySelector('.reveal-btn');
revealBtn.addEventListener('click', () => {
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(flipCard => {
    flipCard.classList.add('clicked');
    setTimeout(() => {
      flipCard.classList.remove('clicked');
    }, 5000);
  });
});

// Event listener for hint button
const hintBtn = document.querySelector('.hint-btn');
hintBtn.addEventListener('click', () => {
  if (gameData.hintCount > 0) {
    const grid = gameData.cards;
    const visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));
    let matchCard;

    if (gameData.flippedCards.length === 1) {
      matchCard = gameData.flippedCards[0];
    }

    if (gameData.flippedCards.length === 0) {
      const nonClickedCards = document.querySelectorAll('.flip-card:not(.clicked)');
      if (nonClickedCards.length > 0) {
        matchCard = getRandomFromArray(nonClickedCards);
      }
    }

    if (matchCard) {
      matchCard.classList.add('hinted');

      const matchValue = matchCard.getAttribute('data-name');
      const startRow = parseInt(matchCard.getAttribute('data-xPos'));
      const startCol = parseInt(matchCard.getAttribute('data-yPos'));

      breadthFirstSearch(grid, visited, matchValue, startRow, startCol);

      gameData.hintCount--;
      document.getElementById('hint-count').textContent = gameData.hintCount;
    }
  }
});

// Function for breadth-first search to find matching cards
function breadthFirstSearch(grid, visited, matchValue, startRow, startCol) {
  const queue = [[startRow, startCol]];
  visited[startRow][startCol] = true;

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    const currentValue = grid[row][col].getAttribute('data-name');

    if (currentValue === matchValue && !visited[row][col]) {
      const matchingCard = grid[row][col];
      matchingCard.classList.add('hinted');
      break;
    }

    visited[row][col] = true;

    if (row - 1 >= 0 && !visited[row - 1][col]) {
      queue.push([row-1, col]);
    }
    if (row + 1 < grid.length && !visited[row + 1][col]) {
      queue.push([row + 1, col]);
    }
    if (col - 1 >= 0 && !visited[row][col - 1]) {
      queue.push([row, col - 1]);
    }
    if (col + 1 < grid[0].length && !visited[row][col + 1]) {
      queue.push([row, col + 1]);
    }
  }
}

// Event listener for reset button
const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', () => {
    createGame();
});

createGame(); // initialize game
