import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">
          Ahmed<span>.</span>
        </a>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}

          <a
            className="nav-resume"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let's Talk
          </a>
        </nav>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;