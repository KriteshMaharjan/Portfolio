import "./Navbar.css";
import { useState, useEffect } from "react";
export function Navbar() {
  // for dark and light theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-theme" : "";

    localStorage.setItem("theme", theme);
  }, [theme]);

  // for responsive nav
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Navigation */}
      <nav>
        <span className="nav-logo">KM</span>
        <button
          id="nav-toggle"
          className="nav-toggle"
          aria-label="Open navigation menu"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
        <button
          id="theme-toggle"
          className="theme-toggle mobile-theme-toggle"
          aria-label="Toggle dark mode"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {" "}
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </>
  );
}
