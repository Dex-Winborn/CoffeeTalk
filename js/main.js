/**
 * Coffee Talk - Main JavaScript
 * Handles mobile navigation toggle and dynamic year in footer
 */

// ==========================================================================
// Mobile Navigation Toggle
// ==========================================================================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  // Toggle mobile menu on button click
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    
    // Update ARIA attributes for accessibility
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
  });

  // Close mobile menu when a navigation link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// ==========================================================================
// Dynamic Year in Footer
// ==========================================================================
const yearElement = document.querySelector("#year");
if (yearElement) {
  // Set current year in footer copyright
  yearElement.textContent = new Date().getFullYear();
}