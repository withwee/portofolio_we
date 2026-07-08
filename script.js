const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const cursorGlow = document.querySelector("[data-cursor-glow]");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const projectsContainer = document.querySelector("[data-projects]");
const projectToggle = document.querySelector("[data-project-toggle]");

const projects = [
  {
    title: "Inventory Management System",
    category: "Featured • Full Stack",
    description:
      "Real-time inventory system with Moving Average purchasing recommendation, FEFO, Purchase Order, stock opname, dashboard, and export reports.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Election Data Mining",
    category: "Featured • Machine Learning",
    description:
      "Data mining project using clustering and classification to analyze electoral competitiveness and predict priority areas.",
    tech: ["Python", "K-Means", "Random Forest", "PCA", "Streamlit"],
  },
  {
    title: "by.U Competitor Analysis",
    category: "Internship • Data Analytics",
    description:
      "Competitor analysis comparing by.U with other telco providers based on pricing, package flexibility, network perception, and customer preferences.",
    tech: ["Python", "Tableau"],
  },
  {
    title: "Telkomsel Outlet Sales Performance",
    category: "Internship • Business Analytics",
    description:
      "Sales performance analysis to identify revenue patterns, top cities, growth trends, and revenue gaps across outlets.",
    tech: ["Python", "Excel", "Tableau"],
  },
  {
    title: "Warganet Information System",
    category: "Web Development",
    description:
      "Community information system for managing citizen data, announcements, reports, and administrative information.",
    tech: ["Web App", "Database", "Information System"],
  },
  {
    title: "Smartphone Rental Website",
    category: "Web Development",
    description:
      "Web-based rental system for smartphone catalog, booking, rental status, and transaction management.",
    tech: ["Web App", "Database", "CRUD"],
  },
  {
    title: "Retail Dashboard",
    category: "Data Visualization",
    description:
      "Interactive dashboard to monitor revenue, payment methods, product performance, discounts, and transaction trends.",
    tech: ["Looker Studio", "Tableau", "Excel"],
  },
  {
    title: "Customer Retention Cohort Analysis",
    category: "Data Analytics",
    description:
      "Cohort analysis project to understand customer retention patterns and identify potential churn after onboarding.",
    tech: ["Python", "Pandas", "Data Visualization"],
  },
  {
    title: "QA Testing & UAT",
    category: "Software Quality Assurance",
    description:
      "Black box testing, positive-negative test cases, validation testing, business logic testing, and user acceptance testing.",
    tech: ["Test Case", "Bug Report", "UAT", "Black Box Testing"],
  },
  {
    title: "Java Cashier System",
    category: "Academic • Desktop App",
    description:
      "Java-based cashier application with login, product input, transaction processing, and monthly revenue report.",
    tech: ["Java", "NetBeans", "SQL"],
  },
];

const renderProjects = () => {
  if (!projectsContainer) {
    return;
  }

  projectsContainer.innerHTML = projects
    .map(
      (project, index) => `
        <article class="project-card${index >= 6 ? " is-extra-project" : ""}">
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

projectToggle?.addEventListener("click", () => {
  const isExpanded = projectToggle.getAttribute("aria-expanded") === "true";

  document.querySelectorAll(".is-extra-project").forEach((project) => {
    project.classList.toggle("is-visible-project", !isExpanded);
    project.classList.toggle("is-visible", !isExpanded);
  });

  projectToggle.setAttribute("aria-expanded", String(!isExpanded));
  projectToggle.textContent = isExpanded ? "View More Projects" : "Show Fewer Projects";
});

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
