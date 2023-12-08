function populateModal(modalId) {
  const modal = document.getElementById("customModal");
  const modalTitle = modal.querySelector(".modal-body .modal-title");
  const modalCarousel = modal.querySelector(".modal-body .carousel-inner")
  const modalCarouselIndicators = modal.querySelector(".modal-body .carousel-indicators")
  const modalDescription = modal.querySelector(".modal-body p.modal-description");

  // Populate modal title and body
  modalTitle.textContent = modalContent[modalId].title;
  modalDescription.textContent = modalContent[modalId].description;

  // Clear existing carousel items and indicators
  modalCarousel.innerHTML = "";
  modalCarouselIndicators.innerHTML = "";

  // Populate Carousel
  modalContent[modalId].images.forEach((image, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    // Create container for image and credit
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    // Add Images
    const img = document.createElement("img");
    img.src = image;
    img.classList.add("d-block", "w-100", "h-100");
    imageContainer.appendChild(img);
    carouselItem.appendChild(imageContainer);

    // Add Image Credits
    const imageCredit = document.createElement("div");
    imageCredit.classList.add("img_credit");
    imageCredit.innerHTML = "Image credit: " + modalContent[modalId].image_credits[index];
    carouselItem.appendChild(imageCredit);
    modalCarousel.appendChild(carouselItem);

    // Add Carousel indicators
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.dataset.bsTarget = "#customModalCarousel";
    indicator.dataset.bsSlideTo = index;
    indicator.setAttribute("aria-label", `Slide ${index + 1}`)
    if (index === 0) {
      indicator.classList.add("active");
    }
    modalCarouselIndicators.appendChild(indicator);
  });
}
