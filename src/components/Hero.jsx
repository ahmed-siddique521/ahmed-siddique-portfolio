const GithubIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.56 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 9h3.56v11.45H3.54V9z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot"></span>
            Available for opportunities
          </p>

          <h1>
            Hi, I'm <span>Ahmed Siddique</span>
          </h1>

          <h2>
            Full Stack <span>MERN</span> Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-focused web
            applications using React, Node.js, Express.js and
            MongoDB.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
              <ArrowIcon />
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
              <MailIcon />
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>Ahmed.jsx</p>
            </div>

            <div className="code-content">
              <div>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </div>

              <div className="code-indent">
                <span className="code-green">name</span>:{" "}
                <span className="code-orange">
                  "Ahmed Siddique"
                </span>
                ,
              </div>

              <div className="code-indent">
                <span className="code-green">role</span>:{" "}
                <span className="code-orange">
                  "MERN Developer"
                </span>
                ,
              </div>

              <div className="code-indent">
                <span className="code-green">skills</span>: [
              </div>

              <div className="code-indent-2">
                <span className="code-orange">"React"</span>,
              </div>

              <div className="code-indent-2">
                <span className="code-orange">"Node.js"</span>,
              </div>

              <div className="code-indent-2">
                <span className="code-orange">"MongoDB"</span>
              </div>

              <div className="code-indent">],</div>

              <div>
                <span className="code-green">passion</span>:{" "}
                <span className="code-orange">
                  "Building useful things"
                </span>
              </div>

              <div>{"}"}</div>

              <div className="code-cursor"></div>
            </div>
          </div>

          <div className="floating-card card-one">
            React
          </div>

          <div className="floating-card card-two">
            Node.js
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;