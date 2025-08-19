document.addEventListener("DOMContentLoaded", function () {
    // Counters
    const counters = document.querySelectorAll('.stat-bg');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = Math.ceil(target / 100);

            if (current < target) {
                counter.innerText = `${current + increment}`;
                setTimeout(updateCounter, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });

    // Swiper Initialization
    if (typeof Swiper !== 'undefined') {
        new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                767: { slidesPerView: 2, spaceBetween: 20 },
                992: { slidesPerView: 4, spaceBetween: 30 },
            }
        });
    }

    function smoothScrollToTop(duration = 1000) {
        const start = window.scrollY;
        const startTime = performance.now();

        function scrollStep(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            window.scrollTo(0, start * (1 - ease));
            if (progress < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", function () {
            smoothScrollToTop(2000); // 2000ms = 2 seconds
        });
    }
});