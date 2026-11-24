
// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});
