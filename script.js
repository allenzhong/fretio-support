const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.18,
        rootMargin: "0px 0px -6% 0px"
    });

    revealItems.forEach((item, index) => {
        item.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
        observer.observe(item);
    });
} else {
    document.querySelectorAll(".reveal").forEach((item) => {
        item.classList.add("is-visible");
    });
}
