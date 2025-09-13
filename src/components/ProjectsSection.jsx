import React, { useState, useRef } from "react";
import "../styles/ProjectsSection.css";
import profilePic from "./profile.jpg"; // replace with your image

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    problem: "Needed a personal portfolio to showcase skills and projects.",
    tech: "React, CSS",
    img: profilePic,
    link: "case-study",
  },
  {
    id: 2,
    title: "E-commerce App",
    problem: "Small businesses lacked a platform to sell online.",
    tech: "MERN Stack",
    img: profilePic,
    link: "#",
  },
  {
    id: 3,
    title: "Dashboard",
    problem: "Clients needed real-time analytics for decision making.",
    tech: "React, Node.js",
    img: profilePic,
    link: "#",
  },
  {
    id: 4,
    title: "Chat App",
    problem: "Users wanted fast real-time communication.",
    tech: "Socket.io, Node.js",
    img: profilePic,
    link: "#",
  },
  {
    id: 5,
    title: "AI Tool",
    problem: "Automating tasks with machine learning.",
    tech: "Python, Flask",
    img: profilePic,
    link: "#",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Swipe Start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Swipe End
  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50 && currentIndex < projects.length - 1) {
      // swipe left
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < -50 && currentIndex > 0) {
      // swipe right
      setCurrentIndex((prev) => prev - 1);
    }

    touchStartX.current = null;
  };

  return (
    <section className="projects-section">
      <h2>My Projects</h2>

      <div
        className="projects-container"
        style={{
          transform: `translateX(calc(-${currentIndex * 89}% + 10% ))`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p className="problem">{project.problem}</p>
            <p className="tech">
              <strong>Tech:</strong> {project.tech}
            </p>
            <a href={project.link} target="_blank" rel="noreferrer">
              <button className="view-btn">View</button>
            </a>
          </div>
        ))}
      </div>

      <div className="dots-container">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
