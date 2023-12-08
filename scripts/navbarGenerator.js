function createNavbar() {
    const navItems = [
      { text: "Home", href: "index.html" },
      { text: "Ten Basic Clouds", href: "clouds.html" },
      { text: "Non-Basic Clouds", href: "nonbasicClouds.html" },
      { text: "Memory Game", href: "memoryMatch.html" },
    ];
  
    const currentPath = window.location.pathname;
  
    const navbar = `
      <header class="navbar navbar-expand-md navbar-dark fixed-top">
        <nav class="container-fluid">
          <span class="navbar-text">SkyGallery</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              ${navItems
                .map(
                  (item) => `
                    <li class="nav-item">
                      <a class="nav-link ${currentPath.endsWith(item.href) || (currentPath === "/" && item.href === "index.html") ? "active" : ""}" href="${item.href}">${item.text}</a>
                    </li>
                  `
                )
                .join("")}
            </ul>
          </div>
        </nav>
      </header>
    `;
  
    document.body.insertAdjacentHTML("afterbegin", navbar);
  }
  
  // Call the function to generate the navbar
  createNavbar();
  