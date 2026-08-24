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
        </div>

        <div className="education-card">
          <div className="education-icon">
            <GraduationIcon />
          </div>

          <div>
            <p className="education-label">
              Bachelor of Science
            </p>

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
      </div>
    </section>
  );
};

export default Education;