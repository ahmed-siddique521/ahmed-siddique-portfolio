import { projects } from "../data/projects";

const ExternalIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
  </svg>
);

const GithubIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.56 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 19 19 5" />
    <path d="M7 5h12v12" />
  </svg>
);

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">03 / PROJECTS</p>

          <h2>Things I've built.</h2>

          <p>
            A selection of academic and personal projects I've
            worked on while developing my skills.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">
                <div className="project-heading">
                  <div>
                    <p>{project.subtitle}</p>
                    <h3>{project.title}</h3>
                  </div>

                  <ArrowIcon />
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live"
                    >
                      Live Demo
                      <ExternalIcon />
                    </a>
                  ) : (
                    <span className="project-live disabled">
                      Live Demo
                      <ExternalIcon />
                    </span>
                  )}

                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github"
                    >
                      GitHub
                      <GithubIcon />
                    </a>
                  ) : (
                    <span className="project-github disabled">
                      GitHub
                      <GithubIcon />
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;