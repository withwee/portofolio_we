const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const cursorGlow = document.querySelector("[data-cursor-glow]");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const projectsContainer = document.querySelector("[data-projects]");
const projectToggle = document.querySelector("[data-project-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const perspectiveTabs = document.querySelectorAll("[data-perspective]");
const perspectiveCard = document.querySelector("[data-perspective-card]");
const caseModal = document.querySelector("[data-case-modal]");
const caseCloseButtons = document.querySelectorAll("[data-case-close]");

const perspectives = {
  data: {
    title: "Data Analyst",
    items: ["Python", "SQL", "Tableau", "Power BI", "Looker Studio"],
    summary: "I transform raw data into business insights that help teams understand patterns, risks, and opportunities.",
  },
  qa: {
    title: "QA Engineer",
    items: ["Black Box Testing", "UAT", "API Testing", "Business Logic Testing", "Bug Reports"],
    summary: "I make sure software works as expected before users rely on it.",
  },
  fullstack: {
    title: "Full Stack Builder",
    items: ["React", "TypeScript", "Node.js", "Express", "MySQL"],
    summary: "I build web systems that connect clean interfaces, usable workflows, and reliable data structures.",
  },
  solver: {
    title: "Problem Solver",
    items: ["Clarify", "Analyze", "Design", "Build", "Test", "Improve"],
    summary: "I break ambiguous problems into structured steps, then turn them into practical digital solutions.",
  },
};

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
      challenge: "Balancing multiple operational rules while keeping the workflow understandable for non-technical users.",
      impact: "Created a clearer flow for monitoring, decision support, and report generation.",
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
      challenge: "Turning statistical output into insights that are understandable for planning decisions.",
      impact: "Helped surface patterns and priority areas from complex electoral datasets.",
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
      challenge: "Making qualitative market perception and quantitative package data comparable.",
      impact: "Produced structured insight for understanding brand position and customer-facing opportunities.",
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
      challenge: "Cleaning and structuring performance data so comparisons stayed reliable.",
      impact: "Supported better visibility into revenue patterns and business opportunities.",
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
      challenge: "Designing simple flows for different administrative needs without overcomplicating the system.",
      impact: "Improved the structure of community data and information access.",
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
      challenge: "Keeping the transaction states consistent from booking to completion.",
      impact: "Produced a clearer rental workflow and manageable transaction records.",
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
      challenge: "Choosing metrics that were clear enough for quick scanning and comparison.",
      impact: "Made business performance easier to monitor through visual reporting.",
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
      challenge: "Structuring time-based activity into readable cohorts and churn signals.",
      impact: "Helped identify retention patterns and possible churn risk points.",
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
      challenge: "Finding defects that affect user trust before the system is relied on.",
      impact: "Improved confidence in functional correctness and release readiness.",
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
      challenge: "Connecting input validation, transaction logic, and report output into one flow.",
      impact: "Demonstrated core desktop application logic and database-backed transactions.",
    },
  },
];

let activeFilter = "all";
let projectsExpanded = false;
let revealObserver;

const getFilteredProjects = () =>
  activeFilter === "all" ? projects : projects.filter((project) => project.tags.includes(activeFilter));

const renderPerspective = (key = "data") => {
  if (!perspectiveCard) {
    return;
  }

  const perspective = perspectives[key];
  perspectiveCard.innerHTML = `
    <h3>${perspective.title}</h3>
    <ul>
      ${perspective.items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <p>${perspective.summary}</p>
  `;
};

const openCaseStudy = (project) => {
  if (!caseModal) {
    return;
  }

  caseModal.querySelector("[data-case-category]").textContent = project.category;
  caseModal.querySelector("[data-case-heading]").textContent = project.title;
  caseModal.querySelector("[data-case-description]").textContent = project.description;
  caseModal.querySelector("[data-case-problem]").textContent = project.caseStudy.problem;
  caseModal.querySelector("[data-case-solution]").textContent = project.caseStudy.solution;
  caseModal.querySelector("[data-case-challenge]").textContent = project.caseStudy.challenge;
  caseModal.querySelector("[data-case-impact]").textContent = project.caseStudy.impact;
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
    ".intro .section-heading, .about-lab, .insight-card, .section-heading, .project-card, .timeline-item, .skill-card, .split-grid > *, .cert-grid article, .footer-grid > *"
  );

  revealTargets.forEach((target, index) => {
    target.dataset.reveal = "";
    target.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
    if (revealObserver) {
      revealObserver.observe(target);
    }
  });
};

renderPerspective();

perspectiveTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    perspectiveTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderPerspective(tab.dataset.perspective);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    projectsExpanded = false;
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
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
