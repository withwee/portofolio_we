const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const cursorGlow = document.querySelector("[data-cursor-glow]");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const projectsContainer = document.querySelector("[data-projects]");
const projectToggle = document.querySelector("[data-project-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const domainFilterLinks = document.querySelectorAll("[data-domain-filter]");
const caseModal = document.querySelector("[data-case-modal]");
const caseCloseButtons = document.querySelectorAll("[data-case-close]");

const projects = [
  {
    title: "Inventory Management System",
    category: "Featured - Full Stack",
    description:
      "Real-time inventory system with Moving Average purchasing recommendation, FEFO, Purchase Order, stock opname, dashboard, and export reports.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    tags: ["web", "dashboard"],
    caseStudy: {
      problem: "Manual operational tracking made it difficult to monitor stock movement, purchases, and reporting in one reliable place.",
      solution: "Designed a web-based system with dashboard analytics, recommendation logic, purchase order flow, and exportable reports.",
      process: "Mapped the operational flow, defined database entities, designed dashboard views, then tested core transactions and report exports.",
      result: "Created a clearer flow for monitoring, decision support, and report generation.",
      lessons: "Operational systems work best when rules, data structure, and user workflow are designed together.",
    },
  },
  {
    title: "Election Data Mining",
    category: "Featured - Machine Learning",
    description:
      "Data mining project using clustering and classification to analyze electoral competitiveness and predict priority areas.",
    tech: ["Python", "K-Means", "Random Forest", "PCA", "Streamlit"],
    tags: ["data", "ai"],
    caseStudy: {
      problem: "Electoral data needed a structured way to identify competitive areas and priority regions.",
      solution: "Applied clustering, classification, dimensionality reduction, and Streamlit to make the analysis explorable.",
      process: "Cleaned the dataset, explored features, applied clustering/classification, reduced dimensions, and wrapped the result in Streamlit.",
      result: "Helped surface patterns and priority areas from complex electoral datasets.",
      lessons: "A useful ML project is not only about model output, but also about explaining why the output matters.",
    },
  },
  {
    title: "by.U Competitor Analysis",
    category: "Internship - Data Analytics",
    description:
      "Competitor analysis comparing by.U with other telco providers based on pricing, package flexibility, network perception, and customer preferences.",
    tech: ["Python", "Tableau"],
    tags: ["data", "dashboard"],
    caseStudy: {
      problem: "Competitive positioning needed to be understood across pricing, package flexibility, and customer preference dimensions.",
      solution: "Compared market attributes, explored patterns with Python, and communicated findings through Tableau visuals.",
      process: "Compared package attributes, pricing, flexibility, and perception signals, then translated findings into visual analytics.",
      result: "Produced structured insight for understanding brand position and customer-facing opportunities.",
      lessons: "Competitor analysis needs clear dimensions so subjective market signals can still support decisions.",
    },
  },
  {
    title: "Telkomsel Outlet Sales Performance",
    category: "Internship - Business Analytics",
    description:
      "Sales performance analysis to identify revenue patterns, top cities, growth trends, and revenue gaps across outlets.",
    tech: ["Python", "Excel", "Tableau"],
    tags: ["data", "dashboard"],
    caseStudy: {
      problem: "Sales performance across locations needed clearer visibility to identify gaps and growth patterns.",
      solution: "Analyzed revenue trends, top cities, and outlet-level patterns using Python, Excel, and Tableau.",
      process: "Cleaned performance data, grouped revenue by location and period, then visualized trends and gaps for review.",
      result: "Supported better visibility into revenue patterns and business opportunities.",
      lessons: "Before making recommendations, performance metrics need consistent definitions and comparable slices.",
    },
  },
  {
    title: "Warganet Information System",
    category: "Web Development",
    description:
      "Community information system for managing citizen data, announcements, reports, and administrative information.",
    tech: ["Web App", "Database", "Information System"],
    tags: ["web"],
    caseStudy: {
      problem: "Community information and administration needed a more organized digital workflow.",
      solution: "Built an information system concept for managing citizen records, announcements, reports, and admin data.",
      process: "Defined user needs, separated admin and information flows, then structured database-backed modules for community records.",
      result: "Improved the structure of community data and information access.",
      lessons: "Information systems should reduce administrative friction, not add new layers of complexity.",
    },
  },
  {
    title: "Smartphone Rental Website",
    category: "Web Development",
    description:
      "Web-based rental system for smartphone catalog, booking, rental status, and transaction management.",
    tech: ["Web App", "Database", "CRUD"],
    tags: ["web"],
    caseStudy: {
      problem: "Rental transactions needed a web flow for catalog browsing, booking, and status tracking.",
      solution: "Created a CRUD-based rental website covering catalog, booking, rental status, and transaction data.",
      process: "Modeled catalog, booking, transaction, and rental status flows, then tested CRUD behavior across user actions.",
      result: "Produced a clearer rental workflow and manageable transaction records.",
      lessons: "State management is the core of rental systems because every transaction changes availability and responsibility.",
    },
  },
  {
    title: "Retail Dashboard",
    category: "Data Visualization",
    description:
      "Interactive dashboard to monitor revenue, payment methods, product performance, discounts, and transaction trends.",
    tech: ["Looker Studio", "Tableau", "Excel"],
    tags: ["data", "dashboard"],
    caseStudy: {
      problem: "Transaction data needed visual summaries for revenue, payment behavior, and performance trends.",
      solution: "Built dashboard views for revenue, payment methods, discount patterns, and transaction movement.",
      process: "Prepared transaction data, selected performance metrics, designed dashboard sections, and checked readability for quick scanning.",
      result: "Made business performance easier to monitor through visual reporting.",
      lessons: "A good dashboard prioritizes the few metrics that help people act faster.",
    },
  },
  {
    title: "Customer Retention Cohort Analysis",
    category: "Data Analytics",
    description:
      "Cohort analysis project to understand customer retention patterns and identify potential churn after onboarding.",
    tech: ["Python", "Pandas", "Data Visualization"],
    tags: ["data"],
    caseStudy: {
      problem: "Retention behavior after onboarding was difficult to interpret from raw customer activity.",
      solution: "Used cohort analysis to compare retention patterns across customer groups over time.",
      process: "Grouped customers by cohort, calculated retention movement over time, and visualized drop-off patterns.",
      result: "Helped identify retention patterns and possible churn risk points.",
      lessons: "Retention analysis becomes useful when time windows and user behavior are framed clearly.",
    },
  },
  {
    title: "QA Testing & UAT",
    category: "Software Quality Assurance",
    description:
      "Black box testing, positive-negative test cases, validation testing, business logic testing, and user acceptance testing.",
    tech: ["Test Case", "Bug Report", "UAT", "Black Box Testing"],
    tags: ["qa"],
    caseStudy: {
      problem: "Software behavior needed validation against expected flows, edge cases, and user acceptance needs.",
      solution: "Created positive-negative test cases, validation checks, business logic tests, and UAT notes.",
      process: "Translated requirements into test cases, executed positive/negative scenarios, logged findings, and validated fixes.",
      result: "Improved confidence in functional correctness and release readiness.",
      lessons: "QA is not only finding bugs; it is protecting the user from broken assumptions.",
    },
  },
  {
    title: "Java Cashier System",
    category: "Academic - Desktop App",
    description:
      "Java-based cashier application with login, product input, transaction processing, and monthly revenue report.",
    tech: ["Java", "NetBeans", "SQL"],
    tags: ["web"],
    caseStudy: {
      problem: "Cashier transactions needed a desktop app flow for login, product input, and revenue reporting.",
      solution: "Built a Java application with transaction processing and monthly revenue reporting.",
      process: "Built login, product input, transaction processing, and reporting flows, then checked data consistency with SQL.",
      result: "Demonstrated core desktop application logic and database-backed transactions.",
      lessons: "Even simple desktop apps need reliable validation, transaction flow, and reporting logic.",
    },
  },
];

let activeFilter = "all";
let projectsExpanded = false;
let revealObserver;

const getFilteredProjects = () =>
  activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter));

const openCaseStudy = (project) => {
  if (!caseModal) {
    return;
  }

  caseModal.querySelector("[data-case-category]").textContent = project.category;
  caseModal.querySelector("[data-case-heading]").textContent = project.title;
  caseModal.querySelector("[data-case-description]").textContent = project.description;
  caseModal.querySelector("[data-case-problem]").textContent = project.caseStudy.problem;
  caseModal.querySelector("[data-case-solution]").textContent = project.caseStudy.solution;
  caseModal.querySelector("[data-case-process]").textContent = project.caseStudy.process;
  caseModal.querySelector("[data-case-result]").textContent = project.caseStudy.result;
  caseModal.querySelector("[data-case-lessons]").textContent = project.caseStudy.lessons;
  caseModal.querySelector("[data-case-tech]").innerHTML = project.tech.map((item) => `<span>${item}</span>`).join("");
  caseModal.hidden = false;
  document.body.classList.add("is-modal-open");
};

const closeCaseStudy = () => {
  if (!caseModal) {
    return;
  }

  caseModal.hidden = true;
  document.body.classList.remove("is-modal-open");
};

const renderProjects = () => {
  if (!projectsContainer) {
    return;
  }

  const filteredProjects = getFilteredProjects();
  const visibleProjects = projectsExpanded || activeFilter !== "all" ? filteredProjects : filteredProjects.slice(0, 6);

  projectsContainer.innerHTML = visibleProjects
    .map(
      (project) => `
        <article class="project-card" data-project-title="${project.title}">
          <p class="project-category">${project.category}</p>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tech">
            ${project.tech.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <button class="case-link" type="button" data-case-project="${project.title}">View Case Study</button>
        </article>
      `
    )
    .join("");

  if (projectToggle) {
    const shouldShowToggle = activeFilter === "all" && filteredProjects.length > 6;
    projectToggle.hidden = !shouldShowToggle;
    projectToggle.setAttribute("aria-expanded", String(projectsExpanded));
    projectToggle.textContent = projectsExpanded ? "Show Fewer Projects" : "View More Projects";
  }

  document.querySelectorAll("[data-case-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = projects.find((item) => item.title === button.dataset.caseProject);
      if (project) {
        openCaseStudy(project);
      }
    });
  });

  refreshRevealTargets();
};

const refreshRevealTargets = () => {
  const revealTargets = document.querySelectorAll(
    ".about-console, .domain-card, .section-heading, .project-card, .timeline-item, .skill-card, .split-grid > *, .cert-grid article, .footer-grid > *"
  );

  revealTargets.forEach((target, index) => {
    target.dataset.reveal = "";
    target.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
    if (revealObserver) {
      revealObserver.observe(target);
    }
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    projectsExpanded = false;
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects();
  });
});

domainFilterLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activeFilter = link.dataset.domainFilter;
    projectsExpanded = false;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item.dataset.filter === activeFilter));
    renderProjects();
  });
});

projectToggle?.addEventListener("click", () => {
  projectsExpanded = !projectsExpanded;
  renderProjects();
});

caseCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCaseStudy);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCaseStudy();
  }
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

revealObserver = new IntersectionObserver(
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

renderProjects();
refreshRevealTargets();

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
