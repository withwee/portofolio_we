const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const cursorGlow = document.querySelector("[data-cursor-glow]");
const parallaxItems = document.querySelectorAll("[data-parallax]");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  header.classList.toggle("is-open", isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("is-open");
  }
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

const revealTargets = document.querySelectorAll(
  ".intro .two-column > *, .section-heading, .timeline-item, .skill-card, .split-grid > *, .cert-grid article, .footer-grid > *"
);

revealTargets.forEach((target, index) => {
  target.dataset.reveal = "";
  target.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealTargets.forEach((target) => revealObserver.observe(target));

if (window.matchMedia("(pointer: fine)").matches) {
  document.body.classList.add("has-pointer");

  window.addEventListener(
    "pointermove",
    (event) => {
      cursorGlow.style.transform = `translate3d(${event.clientX - 170}px, ${event.clientY - 170}px, 0)`;

      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      parallaxItems.forEach((item) => {
        const depth = Number(item.dataset.parallax);
        item.style.translate = `${x * depth * 100}px ${y * depth * 70}px`;
      });
    },
    { passive: true }
  );
}
