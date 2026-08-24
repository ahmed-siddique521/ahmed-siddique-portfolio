const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>
          © {new Date().getFullYear()} Ahmed Siddique. All
          rights reserved.
        </p>

        <p>Built with React & passion.</p>
      </div>
    </footer>
  );
};

export default Footer;