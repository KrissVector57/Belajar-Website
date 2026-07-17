// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // Kalau link menuju section (#about, #skills)
        if (href.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }

        // Kalau href bukan "#", biarkan browser pindah halaman
    });
});

// Dark Mode
// =========================
// DARK MODE
// =========================

const button = document.getElementById("darkModeBtn");

// Cek apakah sebelumnya user memilih dark mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

if (button) {
    button.onclick = function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    };
}
const texts = [
    "Future Software Developer",
    "Future Web Developer",
    "Future Front-End Developer",
    "Always Learning New Things"
];


//typing effect
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

if (typingElement) {

    const texts = [
        "Future Software Developer",
        "Future Web Developer",
        "Future Front-End Developer",
        "Always Learning New Things"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {

        const currentText = texts[textIndex];

        if (!isDeleting) {

            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 1500);
                return;
            }

        } else {

            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

        }

        setTimeout(type, isDeleting ? 60 : 120);
    }

    type();
}

type();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

if (sections.length > 0) {

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

}