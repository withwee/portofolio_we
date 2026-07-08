const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const cursorGlow = document.querySelector("[data-cursor-glow]");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const projectsContainer = document.querySelector("[data-projects]");

const projects = [
  {
    title: "Operations Management System",
    category: "Full Stack Development",
    description:
      "Web-based management system for real-time operational monitoring, recommendation logic, workflow tracking, and dashboard analytics.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Election Data Mining",
    category: "Machine Learning",
    description:
      "Data mining project using K-Means, Random Forest, PCA, and Streamlit to analyze electoral competitiveness and predict priority areas.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
  },
  {
    title: "Business Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Interactive dashboard for revenue, performance trends, operational metrics, and decision-ready business insights.",
    tech: ["Tableau", "Excel", "Data Analytics"],
  },
  {
    title: "QA Testing & UAT",
    category: "Software Quality Assurance",
    description:
      "Black box testing, positive-negative test cases, validation testing, business logic testing, and user acceptance testing.",
    tech: ["Test Case", "Bug Report", "UAT", "Black Box Testing"],
  },
];

const renderProjects = () => {
  if (!projectsContainer) {
    return;
  }

  projectsContainer.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <p class="project-category">${project.category}</p>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tech">
            ${project.tech.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
};

renderProjects();

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
  ".intro .two-column > *, .section-heading, .project-card, .timeline-item, .skill-card, .split-grid > *, .cert-grid article, .footer-grid > *"
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
