const CodeIcon = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m8 9-4 3 4 3" />
    <path d="m16 9 4 3-4 3" />
    <path d="m14 5-4 14" />
  </svg>
);

const GraduationIcon = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m22 10-10-5-10 5 10 5 10-5Z" />
    <path d="M6 12v5c3 2 9 2 12 0v-5" />
  </svg>
);

const RocketIcon = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4.5 16.5c-1.5 1.5-2 3.5-2 3.5s2 0 3.5-2c1.5-1.5 1.5-3.5.5-4.5-1-1-2-1-2 3Z" />
    <path d="M12 15 9 12c.5-4 3-7 8-9 2 5-1 7.5-5 9Z" />
    <path d="M9 12 5 16" />
    <path d="M12 15 8 19" />
    <circle cx="15" cy="7" r="1" />
  </svg>
);

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">01 / ABOUT ME</p>

          <h2>Turning ideas into digital experiences.</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Ahmed Siddique, a Computer Science student and
              aspiring Full Stack Developer with a strong interest
              in modern web development.
            </p>

            <p>
              I enjoy creating complete web applications, from
              designing responsive interfaces with React to
              developing backend APIs using Node.js and Express.
            </p>

            <p>
              I'm constantly learning new technologies and
              improving my problem-solving and software development
              skills through academic and personal projects.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">
                <CodeIcon />
              </div>

              <div>
                <h3>Web Development</h3>

                <p>
                  Building responsive and interactive web
                  applications.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <GraduationIcon />
              </div>

              <div>
                <h3>Computer Science</h3>

                <p>
                  Studying CS with a focus on software development
                  and problem solving.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <RocketIcon />
              </div>

              <div>
                <h3>Continuous Learning</h3>

                <p>
                  Exploring technologies and building projects to
                  strengthen my skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="stats">
          <div>
            <strong>4+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>MERN</strong>
            <span>Stack</span>
          </div>

          <div>
            <strong>BS</strong>
            <span>Computer Science</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;