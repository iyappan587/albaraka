// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  // Add a background to the header when the user scrolls down
  if (window.scrollY > 50) {
    header.classList.add(
      "bg-gray-900",
      "bg-opacity-80",
      "backdrop-blur-sm",
      "shadow-lg"
    );
  } else {
    header.classList.remove(
      "bg-gray-900",
      "bg-opacity-80",
      "backdrop-blur-sm",
      "shadow-lg"
    );
  }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  // Toggle the 'hidden' class to show or hide the mobile menu
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu on link click
// This improves user experience on mobile devices
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Contact form submission handler
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Display a success message to the user
  formMessage.textContent =
    "Thank you for your message! We will get back to you shortly.";
  formMessage.className = "text-green-600";

  // Reset the form fields
  contactForm.reset();

  // Clear the message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = "";
  }, 5000);
});
