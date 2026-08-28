const BriefcaseIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18" />
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
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const Experience = () => {
  return (
    <section className="section section-dark" id="experience">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">04 / EXPERIENCE</p>

          <h2>Ready to gain real-world experience.</h2>

          <p>
            I'm currently looking for an opportunity to take my
            skills beyond the classroom and grow as a developer.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <BriefcaseIcon />
            </div>

            <div className="timeline-content">
              <div className="timeline-top">
                <div>
                  <p className="timeline-company">
                    Currently Seeking
                  </p>

                  <h3>Software Development Internship</h3>
                </div>

                <span className="timeline-date">
                  Open to Opportunities
                </span>
              </div>

              <p>
                As a Computer Science student and aspiring Full
                Stack MERN Developer, I'm looking for an internship
                where I can gain hands-on industry experience,
                contribute to real-world projects, and learn from
                experienced developers.
              </p>

              <p>
                I'm eager to apply my knowledge of React, Node.js,
                Express.js and MongoDB while continuing to improve
                my development and problem-solving skills in a
                professional environment.
              </p>

              <div className="experience-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
              </div>

              <a href="#contact" className="internship-btn">
                Let's Connect
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;