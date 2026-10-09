// MOBILE MENU

const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
})

// CLOSE MOBILE MENU

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// CONTACT FORM

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name + "! Your message has been received."
    );

    contactForm.reset();

});


// SCROLL REVEAL

const sections = document.querySelectorAll(".section");

function revealSections() {

    sections.forEach(function (section) {

        const sectionTop = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// Back to Top Button

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    if (!backToTopButton) return;

    // Hide the button at the top of the page
    function toggleBackToTop() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    }

    window.addEventListener("scroll", toggleBackToTop, { passive: true });

    // Scroll smoothly to the top when clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Set the correct initial visibility
    toggleBackToTop();
});
