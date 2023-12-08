# Sky Gallery

Sky Gallery is a static website made using HTML, CSS, JavaScript, and Bootstrap. It features interactive image galleries with descriptions of various cloud types. As well as a Memory Match Game that includes the same images found in the galleries.

## Table of Contents

- [Introduction](#sky-gallery)
- [Demo Video](#demo-video)
- [Installation](#installation)
- [File Structure and Descriptions](#file-structure-and-descriptions)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

## Demo Video

To be included later.

## Installation

To get started with Sky Gallery:
1. Clone the project repository to your local machine:
```bash
$ git clone https://github.com/Aninymous412/SkyGallery.git
```
2. Navigate to project directory:
```bash
$ cd SkyGallery
```

## File Structure and Descriptions

### File Structure

The project is organized as follows:

- **/images:** Contains image assets used in the website.
- **/scripts:** Contains JavaScript files for website functionality.
- **/styles:** Contains CSS files for styling the website.

### File Descriptions

| File Name             | Location    | Description                                   |
| --------------------- | ----------- | --------------------------------------------- |
| `index.html`          | /           | Main homepage of the website.                |
| `modal.html`          | /           | HTML modal template used in image galleries.       |
| `memoryMatch.html`    | /           | HTML page for the memory match game.          |
| `clouds.html`         | /           | HTML page for the basic cloud image gallery.  |
| `nonbasicclouds.html` | /           | HTML page for the non-basic cloud gallery.    |
| `styles.css`          | /styles     | CSS file for styling the website.             |
| `sections.js`         | /scripts    | Defines an array of objects representing different sections of the website. |
| `modalcontents.js`    | /scripts    | Contains dictionaries used for each modal's content. |
| `populatemodal.js`    | /scripts    | Script responsible for populating modals with their content. |
| `generateCloudHTML.js`| /scripts    | Generates the HTML that displays sections on the HTML pages. |
| `memoryMatchGame.js`  | /scripts    | JavaScript code for the memory match game.    |
| `navbarGenerator.js`  | /scripts    | Dynamically generates navbar HTML strings.    |

## Usage

### Navigation

To navigate Sky Gallery's different pages:

- Use the buttons on the navigation bar at the top of the page.
- On the home page, utilize the buttons on the carousel to access specific sections.

### Image Galleries

To view a cloud's image gallery:

1. Click on the button or image associated with the desired cloud.
2. A modal window will appear, allowing you to browse through the images.
3. Use the arrow keys or the navigation buttons on the side to slide through the images.

### Memory Match Game

To play the memory match game:

1. Navigate to the Memory Match Game page.
2. Click on any card to start the game.
3. Utilize the following game features:
   - **Reveal:** Click to reveal all images temporarily.
   - **Hint:** Use the hint button to find an unfound match; it works with one or no cards flipped.
   - **Reset:** End the current game and reset it.
   - **Difficulty:** Adjust the game's difficulty by adding rows and adjusting the number of hints per game.

## Features

### Responsive Design

Sky Gallery was built to scale to all screen sizes, ensuring a seamless experience on various devices.

### Generate Cloud HTML (generateCloudHTML.js)

The 'generateCloudHTML.js' script is a noteworthy feature of Sky Gallery. It uses JavaScript's `map` function to join HTML strings together, dynamically creating the different sections for both the basic and non-basic gallery pages. This approach allows for flexible and efficient generation of content, enhancing the user experience.

### Attractive Image Galleries

Here's what sets Sky Gallery's image galleries apart:

- **Bootstrap Integration:** Sky Gallery uses Bootstrap's carousel component inside their modal component to create a smooth image browsing experience.
- **Dynamic Content:** Every modal uses the template found in `modal.html` and is then populated dynamically using `populateModal.js` and the data stored in `modalContents.js`.
This ensures the user sees the content they were looking for.
- **Visual Appeal:** The modals are thoughtfully styled with CSS to enhance the user experience. Smooth transitions between images, rounded corners, and a dark background help make the image galleries visually appealing.

### In-Depth Information

Sky Gallery provides in-depth and informative descriptions for each section and image gallery, offering valuable insights into cloud types and their characteristics. The content has been thoughtfully curated to enhance the user experience, ensuring that visitors have access to a wealth of knowledge when exploring the site.

### Memory Match Game (memoryMatchGame.js)

Sky Gallery includes a Memory Match Game in `memoryMatchGame.js`. It offers several distinctive features:
- **Randomized Gameplay:** Each game of Memory Match is unique, thanks to the functions that select images based on difficulty levels and shuffle them using the Fisher-Yates algorithm.
- **Customizable Difficulty:** Users can tailor their gameplay experience by adjusting the game's difficulty, adding more rows, and setting the number of hints per game.
- **Breadth-First Search Hint Mechanism:** The Memory Match Game also features a BFS (Breadth-First Search) hint mechanism that intelligently finds an unfound match, with either one or no cards flipped. This unique hint system adds depth and challenge to the game, making it engaging for players of all skill levels.

Here is a snippet of the Breadth-First Search hint feature:
``` javascript
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
```

## Credits

Special thanks go to [National Weather Service](https://www.weather.gov/), [NOAA](https://www.noaa.gov/), and [Met Office](https://www.metoffice.gov.uk/) for sourcing of images, information, and inspiration.

## License

All images used in this project are provided under the [CC0 (Creative Commons Zero) license](https://creativecommons.org/publicdomain/zero/1.0/), which means they are in the public domain and free to use for any purpose without attribution. The images used in this project are credited under their respective images.

## Contact

For questions, feedback, or support contact:
* Email: adownie412@yahoo.com
* Github: [github.com/Aninymous412](https://github.com/Aninymous412)
