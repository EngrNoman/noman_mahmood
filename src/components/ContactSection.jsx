import React from "react";
import "../styles/ContactSection.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-pitch">
        I’m always open to discussing new projects, opportunities, or
        collaborations.
      </p>

      <div className="contact-cards">
        <a href="mailto:your.email@example.com" className="contact-card">
          <FaEnvelope size={28} color="#00ffff" />
          <span>Email Me</span>
        </a>

        <a href="tel:+1234567890" className="contact-card">
          <FaPhoneAlt size={28} color="#00ffff" />
          <span>Call Me</span>
        </a>

        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin size={28} color="#00ffff" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaWhatsapp size={28} color="#00ffff" />
          <span>WhatsApp</span>
        </a>
      </div>

      <p className="footer-note">I respond to messages within 24 hours.</p>
    </section>
  );
};

export default ContactSection;
