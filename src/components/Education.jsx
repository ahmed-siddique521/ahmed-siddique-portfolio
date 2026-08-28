const GraduationIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m22 10-10-5-10 5 10 5 10-5Z" />
    <path d="M6 12v5c3 2 9 2 12 0v-5" />
  </svg>
);

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-heading center">
          <p className="section-label">05 / EDUCATION</p>

          <h2>My academic journey.</h2>

          <p>
            My educational journey from pre-engineering to
            computer science.
          </p>
        </div>

        <div className="education-list">
          <div className="education-card">
            <div className="education-icon">
              <GraduationIcon />
            </div>

            <div className="education-content">
              <div className="education-top">
                <p className="education-label">
                  Bachelor of Science
                </p>

                <span className="education-year">
                  2024 – 2028
                </span>
              </div>

              <h3>Computer Science</h3>

              <p className="education-university">
                University of Management and Technology (UMT),
                Lahore
              </p>

              <p className="education-description">
                Building a strong foundation in programming,
                algorithms, data structures, software engineering,
                web development and computer science fundamentals.
              </p>
            </div>
          </div>

          <div className="education-card">
            <div className="education-icon">
              <GraduationIcon />
            </div>

            <div className="education-content">
              <div className="education-top">
                <p className="education-label">
                  Higher Secondary School Certificate
                </p>

                <span className="education-year">
                  2021 – 2023
                </span>
              </div>

              <h3>FSc Pre-Engineering</h3>

              <p className="education-university">
                KIPS College
              </p>

              <p className="education-description">
                Completed FSc Pre-Engineering with a focus on
                mathematics, physics and chemistry, providing a
                strong foundation for pursuing computer science
                and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;