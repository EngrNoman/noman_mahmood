import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const nameLetters = "Noman Mahmood".split("");
  const nameLettersShort = "Noman".split(""); // FIXED ✅

  return (
    <nav className="navbar">
      {/* ===== Logo Section ===== */}
      <h1 className="logo">
        {/* Full logo for desktop */}
        <span className="logo-full">
          {nameLetters.map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.5}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        {/* Short logo for mobile */}
        <span className="logo-short">
          {nameLettersShort.map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.5}s` }}>
              {char}
            </span>
          ))}
        </span>
      </h1>

      {/* ===== Right Side: Links + Hamburger ===== */}
      <div className="navbar-right">
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
