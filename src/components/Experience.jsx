const BriefcaseIcon = () => (
  <svg
    width="20"
    height="20"
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

const Experience = () => {
  return (
    <section className="section section-dark" id="experience">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">04 / EXPERIENCE</p>

          <h2>Where I've been learning.</h2>
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
                    MaqMinds
                  </p>

                  <h3>MERN Stack Intern</h3>
                </div>

                <span className="timeline-date">
                  Internship
                </span>
              </div>

              <p>
                Worked with modern web development technologies
                and strengthened practical skills in the MERN
                stack by developing and working on full-stack
                applications.
              </p>

              <div className="experience-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;