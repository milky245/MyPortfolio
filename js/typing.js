/* =========================================================
   TYPING ANIMATION
   ========================================================= */

const typingElement = document.querySelector(".typing-text");

if (typingElement) {

    const texts = [

        "AI Learner.",
        "Junior System Developer.",
        "Computer Vision Researcher.",
        "Generative AI Enthusiast.",
        "Junior Full Stack Builder."

    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentText = texts[textIndex];

        if (isDeleting) {

            typingElement.textContent =
                currentText.substring(0, charIndex--);

        } else {

            typingElement.textContent =
                currentText.substring(0, charIndex++);

        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {

            speed = 1800;
            isDeleting = true;

        } else if (isDeleting && charIndex === 0) {

            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 500;

        }

        setTimeout(typeEffect, speed);

    }

    typeEffect();

}