import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Engr Noman Mahmood. All Rights Reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
