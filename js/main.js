/* =========================================================
   MAIN INTERACTION SCRIPT
   Portfolio Website
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");
            menuButton.classList.toggle("active");

        });

    }


    /* =====================================================
       SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* =====================================================
       ACTIVE NAV LINK
       ===================================================== */

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });


    /* =====================================================
       PROJECT CARD LIGHT EFFECT
       ===================================================== */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);

        });

    });


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((anchor) => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const targetId = this.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       CUSTOM CURSOR
       ===================================================== */

    const cursor = document.querySelector(".custom-cursor");

    if (cursor) {

        window.addEventListener("mousemove", (e) => {

            cursor.style.transform =
                `translate(${e.clientX}px, ${e.clientY}px)`;

        });

    }


    /* =====================================================
       PARALLAX HERO
       ===================================================== */

    const heroGlow = document.querySelector(".hero-glow");

    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        if (heroGlow) {

            heroGlow.style.transform =
                `translateY(${scrollY * 0.2}px)`;

        }

    });


    /* =====================================================
       BUTTON RIPPLE EFFECT
       ===================================================== */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.classList.add("ripple");

            const rect = button.getBoundingClientRect();

            ripple.style.left =
                `${e.clientX - rect.left}px`;

            ripple.style.top =
                `${e.clientY - rect.top}px`;

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 700);

        });

    });


    /* =====================================================
       SCROLL PROGRESS BAR
       ===================================================== */

    const progressBar = document.querySelector(".scroll-progress");

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / height) * 100;

        if (progressBar) {

            progressBar.style.width = `${progress}%`;

        }

    });


    /* =====================================================
       IMAGE LAZY LOADING
       ===================================================== */

    const lazyImages = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const img = entry.target;

                img.src = img.dataset.src;

                img.removeAttribute("data-src");

                observer.unobserve(img);

            }

        });

    });

    lazyImages.forEach((img) => {

        imageObserver.observe(img);

    });

});