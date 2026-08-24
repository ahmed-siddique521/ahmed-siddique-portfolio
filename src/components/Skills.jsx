const skills = [
  {
    icon: "</>",
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Vite"],
  },
  {
    icon: "API",
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: "DB",
    title: "Database",
    skills: ["MongoDB", "SQL Server"],
  },
  {
    icon: "Git",
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    icon: "C++",
    title: "Programming",
    skills: ["C++", "JavaScript", "OOP", "DSA"],
  },
  {
    icon: "{}",
    title: "Concepts",
    skills: [
      "RESTful APIs",
      "CRUD",
      "Authentication",
      "Responsive Design",
    ],
  },
];

const Skills = () => {
  return (
    <section className="section section-dark" id="skills">
      <div className="container">
        <div className="section-heading center">
          <p className="section-label">02 / SKILLS</p>

          <h2>Technologies I work with.</h2>

          <p>
            A growing toolkit focused on building complete,
            scalable web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <div className="skill-icon-text">
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>

              <div className="skill-tags">
                {skill.skills.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;