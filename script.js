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
                // untuk link section

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

                            behavior:
                                "smooth"

                        });

                    }

                }

            }

        );

    });


// ========================================
// DARK MODE
// ========================================

const darkModeButton =
    document.getElementById(
        "darkModeBtn"
    );


// Cek tema yang tersimpan

if (
    localStorage.getItem("theme")
    === "dark"
) {

    document.body.classList.add(
        "dark-mode"
    );

}


// Tombol Dark Mode

if (darkModeButton) {

    darkModeButton.addEventListener(
        "click",
        function () {


            document.body.classList.toggle(
                "dark-mode"
            );


            // Simpan tema

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
// TYPING EFFECT
// ========================================

const typingElement =
    document.getElementById(
        "typing"
    );


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


    // Kecepatan mengetik

    const typingSpeed = 180;


    // Kecepatan menghapus

    const deletingSpeed = 80;


    // Jeda setelah selesai mengetik

    const pauseTime = 2500;


    function type() {


        const currentText =
            texts[textIndex];


        // ================================
        // MENGETIK
        // ================================

        if (!isDeleting) {


            typingElement.textContent =
                currentText.substring(
                    0,
                    charIndex + 1
                );


            charIndex++;


            // Kalau selesai mengetik

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


        // ================================
        // MENGHAPUS
        // ================================

        else {


            typingElement.textContent =
                currentText.substring(
                    0,
                    charIndex - 1
                );


            charIndex--;


            // Kalau selesai menghapus

            if (
                charIndex === 0
            ) {


                isDeleting = false;


                textIndex =
                    (
                        textIndex + 1
                    )
                    %
                    texts.length;

            }


            setTimeout(
                type,
                deletingSpeed
            );

        }

    }


    // Mulai typing

    type();

}


// ========================================
// ACTIVE NAVBAR
// ========================================

const sections =
    document.querySelectorAll(
        "section"
    );


const navLinks =
    document.querySelectorAll(
        "nav a"
    );


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