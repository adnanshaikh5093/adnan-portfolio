import GlyphPortal from "../components/ui/glyph-portal";

const projects = [
  {
    number: "01",
    title: "E-Commerce Web Application",
    date: "Apr 2024 – Jul 2024",
    description:
      "Built a full-stack store with authentication, product management, cart, order processing, and an admin dashboard. Added protected routes, CRUD tools, pagination, search, and filtering.",
    tag: "E-COMMERCE",
    stack: "React · Node.js · Express · PostgreSQL · Prisma · Tailwind CSS",
  },
  {
    number: "02",
    title: "Billing & Invoice Management System",
    date: "Jul 2024 – Sep 2024",
    description:
      "Developed a GST-enabled billing system with automated tax and discount calculations, invoice generation, downloadable PDF reports, customer and product CRUD, and monthly sales reports.",
    tag: "BILLING",
    stack: "MERN Stack · PostgreSQL",
  },
  {
    number: "03",
    title: "Muslim Nikah – Matrimonial Platform",
    date: "Oct 2024 – Feb 2025",
    description:
      "Created an authentication-based profile management platform with secure backend validation, CRUD operations, and a responsive interface for mobile and desktop.",
    tag: "PLATFORM",
    stack: "React · Node.js · MongoDB",
  },
];

function Projects() {
  return (
    <main className="projects-page">
      <GlyphPortal
        word="PROJECT"
        enterLabel="Explore projects"
        className="projects-portal"
        style={{
          "--gp-paper": "#07111d",
          "--gp-ink": "#f7f9fc",
          "--gp-field": "#102d42",
          "--gp-foreground": "#f7f9fc",
        }}
        background={<div className="projects-portal-background" />}
      >
        <div className="projects-reveal">
          <p className="page-eyebrow">SELECTED WORK</p>
          <h1>Projects I’ve worked on</h1>
          <p className="page-intro">
            A selection of web applications built with a focus on useful
            features, secure systems, and responsive experiences.
          </p>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span>{project.number}</span>
                  <span className="project-tag">{project.tag}</span>
                </div>
                <h2>{project.title}</h2>
                <p className="project-date">{project.date}</p>
                <p>{project.description}</p>
                <p className="project-stack">{project.stack}</p>
              </article>
            ))}
          </div>
        </div>
      </GlyphPortal>
    </main>
  );
}

export default Projects;
