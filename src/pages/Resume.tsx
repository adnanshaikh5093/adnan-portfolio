const skillGroups = [
  {
    label: "Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    label: "Databases & ORM",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
  },
  {
    label: "Authentication & security",
    skills: ["JWT Authentication", "RBAC", "Password Hashing", "Protected Routes"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
  {
    label: "Concepts",
    skills: [
      "MVC Architecture",
      "REST APIs",
      "CRUD Operations",
      "API Integration",
      "Pagination",
      "Search & Filtering",
      "Database Optimization",
      "Responsive Web Design",
    ],
  },
];

const responsibilities = [
  "Developed and maintained 5+ full-stack web applications using the MERN Stack and PostgreSQL over 2 years.",
  "Designed and implemented scalable RESTful APIs using Node.js and Express.js following MVC architecture.",
  "Designed and maintained RESTful APIs integrated with MySQL databases to handle dynamic data efficiently.",
  "Integrated JWT-based authentication and Role-Based Access Control (RBAC) to enhance application security.",
  "Optimized complex PostgreSQL queries using indexing and query restructuring, reducing API response time by up to 30%.",
  "Built reusable and responsive React components using Tailwind CSS and implemented state management with Redux and Context API.",
  "Participated in code reviews, optimized application performance, and followed best practices for secure and efficient development.",
  "Researched and adopted modern tools, libraries, and frameworks to enhance application performance and development efficiency.",
  "Collaborated with cross-functional teams using Git-based version control and Agile development practices.",
  "Worked well under pressure, consistently meeting deadlines and exceeding expectations on key project deliveries.",
];

const projects = [
  {
    name: "E-Commerce Web Application",
    date: "Apr 2024 – Jul 2024",
    stack: "React.js, Node.js, Express.js, PostgreSQL, Prisma ORM, Tailwind CSS",
    details: [
      "Built a full-stack e-commerce platform with authentication, product management, shopping cart, and order processing features.",
      "Implemented protected routes using JWT middleware for secure access control.",
      "Developed an admin dashboard with full CRUD operations for managing products, users, and orders.",
      "Implemented pagination, search, and filtering features for enhanced performance and scalability.",
      "Designed a fully responsive UI ensuring cross-device compatibility.",
    ],
  },
  {
    name: "Billing & Invoice Management System",
    date: "Jul 2024 – Sep 2024",
    stack: "MERN Stack, PostgreSQL",
    details: [
      "Developed a GST-enabled billing system with automated tax calculation and discount logic.",
      "Implemented dynamic invoice generation and downloadable PDF reports.",
      "Created customer and product management modules with complete CRUD functionality.",
      "Generated monthly sales reports for performance tracking and analytics.",
    ],
  },
  {
    name: "Muslim Nikah – Matrimonial Platform",
    date: "Oct 2024 – Feb 2025",
    stack: "React.js, Node.js, MongoDB",
    details: [
      "Developed an authentication-based user profile management system.",
      "Implemented secure backend validation and CRUD operations.",
      "Designed a responsive user interface optimized for both mobile and desktop devices.",
    ],
  },
];

function Resume() {
  return (
    <main className="page-content resume-content page-enter">
      <p className="page-eyebrow">EXPERIENCE &amp; EXPERTISE</p>
      <h1>Resume</h1>
      <a className="button-link" href="/resume.pdf" download>
        Download Resume
      </a>
      <section className="resume-section resume-summary">
        <h2>Adnan Shaikh</h2>
        <p className="resume-role">Full Stack Web Developer · MERN Stack · PostgreSQL</p>
        <div className="resume-contact">
          <span>Vadodara, Gujarat, India</span>
          <a href="mailto:adnanshaikh5093@gmail.com">
            adnanshaikh5093@gmail.com
          </a>
        </div>
        <p className="resume-summary-copy">
          Results-driven Full Stack Web Developer with 2 years of professional
          experience at AarkSoft WebTech, designing, developing, and deploying
          scalable web applications using the MERN Stack (MongoDB, Express.js,
          React.js, Node.js) and PostgreSQL. Proficient in building RESTful
          APIs, implementing JWT-based Authentication, and Role-Based Access
          Control (RBAC). Experienced in MVC architecture, Prisma ORM, API
          Integration, Pagination, Search &amp; Filtering, and responsive UI
          development with Tailwind CSS. Recognized for strong technical
          proficiency, problem-solving skills, and consistently meeting project
          deadlines.
        </p>
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Technical skills</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Professional experience</h2>
        <article className="resume-entry">
          <div className="resume-entry-heading">
            <div>
              <h3>MERN Stack Developer</h3>
              <p className="resume-company">AarkSoft WebTech · Vadodara, Gujarat</p>
            </div>
            <p className="resume-date">April 2024 – April 2026</p>
          </div>
          <p className="verified-label">Experience letter verified</p>
          <ul className="resume-bullets">
            {responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Projects</h2>
        <div className="resume-project-list">
          {projects.map((project) => (
            <article className="resume-entry" key={project.name}>
              <div className="resume-entry-heading">
                <h3>{project.name}</h3>
                <p className="resume-date">{project.date}</p>
              </div>
              <p className="resume-stack">{project.stack}</p>
              <ul className="resume-bullets">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section resume-bottom-grid">
        <div>
          <h2 className="resume-section-title">Education</h2>
          <article className="resume-entry">
            <h3>Bachelor of Science in Information Technology</h3>
            <p className="resume-company">Parul University · Vadodara, Gujarat</p>
            <p className="resume-stack">2021 – 2024 · CGPA: 7.33</p>
          </article>
        </div>
        <div>
          <h2 className="resume-section-title">Languages</h2>
          <ul className="language-list">
            <li>English</li>
            <li>Hindi</li>
            <li>Gujarati</li>
          </ul>
        </div>
      </section>

      <section className="resume-section resume-profile-links">
        <h2 className="resume-section-title">Find me online</h2>
        <a href="https://linkedin.com/in/adnanshaikh5093" target="_blank" rel="noreferrer">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a href="https://github.com/adnanshaikh5093" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href="https://adnan-shaikh.vercel.app" target="_blank" rel="noreferrer">
          Portfolio <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}

export default Resume;
