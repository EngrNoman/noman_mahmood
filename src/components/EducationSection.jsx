import React from "react";
import "../styles/EducationSection.css";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const educationData = [
  {
    type: "degree",
    title: "BSc in Computer Science",
    institution: "XYZ University",
    year: "2012 - 2016",
    note: "GPA 3.8/4.0",
  },
  {
    type: "certification",
    title: "Google Ads Certification",
    institution: "Google Skillshop",
    year: "2022",
    note: "Passed with distinction",
  },
  {
    type: "course",
    title: "Python for Data Analysis",
    institution: "Coursera",
    year: "2023",
    note: "Hands-on projects",
  },
  {
    type: "course",
    title: "Power BI Masterclass",
    institution: "Udemy",
    year: "2023",
    note: "Dashboard & automation",
  },
];

const EducationSection = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education & Certifications</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="edu-card">
            <div className="edu-icon">
              {edu.type === "degree" ? (
                <FaGraduationCap size={30} color="#00ffff" />
              ) : (
                <FaCertificate size={30} color="#FFD700" />
              )}
            </div>
            <div className="edu-info">
              <h3>{edu.title}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
              <p className="note">{edu.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
