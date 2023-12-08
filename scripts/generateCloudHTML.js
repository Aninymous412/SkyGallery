function generateSectionsHTML(sections) {
  // Function to generate HTML for a given section object
  function generateSectionHTML(section) {
      // Generate HTML for each modal in the section and concatenate
      const modalsHTML = section.modals
      .map(
        (modal) => `
          <div class="col">
            <div class="modal-name">${modalContent[modal.id].title}</div>
            <a href="#" data-bs-toggle="modal" data-bs-target="#customModal" id="${modal.id}">
              <img src="${modal.imgSrc}" alt="${modalContent[modal.id].title}" class="modal-img-button img-fluid">
            </a>
          </div>
        `
        )
    .join("");

      // Combine the section HTML and the modal HTML into one string
      return `
        <div class="gallery-section">
            <h2 class="fw-light" id="section-title">${section.title}</h2>
            <p id="section-description">${section.description}</p>
            <div class="row row-cols-2 ${section.cols} gy-4 mx-auto">
                ${modalsHTML}
            </div>
        </div>
        <hr class="cloud-divider">
        `;
    }

  // Generate HTML for all sections and concatenate into one string
  const sectionsHTML = sections.map(generateSectionHTML).join("");

  // Replace the cloudGallery element's HTML with the generated sections HTML
  const cloudGallery = document.getElementById("cloud-gallery");
  cloudGallery.innerHTML = sectionsHTML;
}

// When the page is loaded, add a click event listener to each modal image button
document.addEventListener("DOMContentLoaded", function() {
    const modalImages = document.querySelectorAll(".modal-img-button");
    modalImages.forEach((image) => {
      const id = image.parentElement.getAttribute("id");
      image.addEventListener("click", function() {
        populateModal(id);
      });
    });
  });
