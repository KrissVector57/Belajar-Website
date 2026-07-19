// ========================================
// DARK MODE
// ========================================

const darkModeButton =
    document.getElementById("darkModeBtn");


// Cek tema yang tersimpan

if (
    localStorage.getItem("theme") === "dark"
) {

    document.body.classList.add("dark-mode");

}


// Tombol Dark Mode

if (darkModeButton) {

    darkModeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

        }
    );

}


// ========================================
// SMOOTH SCROLL
// ========================================

document
    .querySelectorAll("nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function (e) {

                const href =
                    this.getAttribute("href");


                // Hanya smooth scroll
                // untuk link #

                if (
                    href &&
                    href.startsWith("#")
                ) {

                    e.preventDefault();


                    const target =
                        document.querySelector(
                            href
                        );


                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }
        );

    });


// ========================================
// TYPING EFFECT
// ========================================

const typingElement =
    document.getElementById("typing");


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


    const typingSpeed = 180;

    const deletingSpeed = 80;

    const pauseTime = 2500;


    function type() {

        const currentText =
            texts[textIndex];


        // MENGETIK

        if (!isDeleting) {

            typingElement.textContent =
                currentText.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;


            if (
                charIndex ===
                currentText.length
            ) {

                isDeleting = true;


                setTimeout(
                    type,
                    pauseTime
                );


                return;

            }


            setTimeout(
                type,
                typingSpeed
            );

        }


        // MENGHAPUS

        else {

            typingElement.textContent =
                currentText.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;


            if (
                charIndex === 0
            ) {

                isDeleting = false;


                textIndex =
                    (textIndex + 1)
                    % texts.length;

            }


            setTimeout(
                type,
                deletingSpeed
            );

        }

    }


    type();

}


// ========================================
// ACTIVE NAVBAR
// ========================================

const sections =
    document.querySelectorAll("section");


const navLinks =
    document.querySelectorAll("nav a");


if (
    sections.length > 0
) {

    window.addEventListener(
        "scroll",
        function () {

            let current = "";


            sections.forEach(
                section => {

                    const sectionTop =
                        section.offsetTop
                        - 150;


                    if (
                        window.scrollY
                        >= sectionTop
                    ) {

                        current =
                            section.getAttribute(
                                "id"
                            );

                    }

                }
            );


            navLinks.forEach(
                link => {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        )
                        ===
                        "#" + current
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }
    );

}


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


function revealOnScroll() {

    revealElements.forEach(
        element => {

            const elementTop =
                element.getBoundingClientRect()
                    .top;


            const windowHeight =
                window.innerHeight;


            if (
                elementTop <
                windowHeight - 80
            ) {

                element.classList.add(
                    "show"
                );

            }

        }
    );

}


// Jalankan langsung
// saat halaman dibuka

revealOnScroll();


// Jalankan saat scroll

window.addEventListener(
    "scroll",
    revealOnScroll
);