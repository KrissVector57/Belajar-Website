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

function type() {

    const currentText = texts[textIndex];

    if (!isDeleting) {

        typingElement.textContent = currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length){

            isDeleting = true;

            setTimeout(type,1500);

            return;

        }

    }else{

        typingElement.textContent = currentText.substring(0,charIndex - 1);

        charIndex--;

        if(charIndex===0){

            isDeleting=false;

            textIndex=(textIndex+1)%texts.length;

        }

    }

    setTimeout(type,isDeleting?50:100);

}

type();