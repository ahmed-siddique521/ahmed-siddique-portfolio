const GithubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.3-1.56 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 9h3.56v11.45H3.54V9z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 19 19 5" />
    <path d="M7 5h12v12" />
  </svg>
);

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-pattern"></div>

      <div className="container contact-container">
        <p className="section-label">06 / CONTACT</p>

        <h2>
          Let's build something
          <span> great.</span>
        </h2>

        <p className="contact-description">
          I'm always interested in discussing new projects,
          opportunities and ideas. Feel free to reach out.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="contact-email"
        >
          ahmedsiddique521@gmail.com
          <ArrowIcon />
        </a>

        <div className="contact-socials">
          <a
            href="https://github.com/ahmed-siddique521"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-siddique-127b04289/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
            LinkedIn
          </a>

          <a href="mailto:ahmedsiddique521@gmail.com">
            <MailIcon />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;