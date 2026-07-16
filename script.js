// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Dark Mode
const button = document.getElementById("darkModeBtn");

button.onclick = function () {
    document.body.classList.toggle("dark-mode");
};