// Fixed JavaScript code for mobile navigation

document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("open-sidebar-btn");
  const closeButton = document.getElementById("close-sidebar-btn");
  const navbar = document.getElementById("navbar");
  const overlay = document.getElementById("overlay");

  const media = window.matchMedia("(width < 700px)");

  media.addEventListener("change", (e) => updateNavbar(e));

  function updateNavbar(e) {
    const isMobile = e.matches;
    console.log(isMobile);
    if (isMobile) {
      navbar.setAttribute("inert", "");
    } else {
      // desktop device
      navbar.removeAttribute("inert");
    }
  }

  function openSidebar() {
    navbar.classList.add("show");
    overlay.classList.add("show");
    openButton.setAttribute("aria-expanded", "true");
    navbar.removeAttribute("inert");
  }

  function closeSidebar() {
    navbar.classList.remove("show");
    overlay.classList.remove("show");
    openButton.setAttribute("aria-expanded", "false");
    navbar.setAttribute("inert", "");
  }

  // Add event listeners
  openButton.addEventListener("click", openSidebar);
  closeButton.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // For Bookmark Links
  const navLinks = document.querySelectorAll(".NavBarNav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeSidebar();
    });
  });

  // Initialize navbar state
  updateNavbar(media);
});
