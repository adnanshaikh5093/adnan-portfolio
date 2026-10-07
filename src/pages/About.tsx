function About() {
  return (
    <main className="page-content page-enter">
      <p className="page-eyebrow">A LITTLE ABOUT ME</p>
      <h1>Full Stack Web Developer · MERN Stack · PostgreSQL</h1>
      <p className="page-intro">
        I’m Adnan Shaikh, a results-driven Full Stack Web Developer based in
        Vadodara, Gujarat. I have two years of professional experience designing,
        developing, and deploying scalable web applications with the MERN Stack
        and PostgreSQL.
      </p>
      <div className="about-panel">
        <h2>How I build</h2>
        <p>
          I build RESTful APIs, secure authentication and role-based access,
          optimize database queries, and create responsive interfaces. I value
          thoughtful problem-solving, clear collaboration, and delivering
          dependable work on schedule.
        </p>
        <a className="text-link" href="#/resume">
          View my full resume <span aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  );
}

export default About;
