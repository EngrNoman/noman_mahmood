// src/pages/ProjectDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "../styles/ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = projects.find((p) => p.id === projectId);
  const [index, setIndex] = useState(0);

  // Auto slideshow
  useEffect(() => {
    if (!project || !project.images || project.images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [project]);

  if (!project) {
    return (
      <div className="page-container">
        <p>Project not found.</p>
        <Link to="/">Back to portfolio</Link>
      </div>
    );
  }

  const prev = () =>
    setIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () => setIndex((i) => (i + 1) % project.images.length);

  return (
    <div className="page-container">
      {/* 🔹 Hero / Slider */}
      <section className="hero" style={{ height: "80vh" }}>
        <div
          className="slide"
          style={{
            backgroundImage: `url(${project.images[index]})`,
          }}
        >
          <div className="overlay">
            <h1 className="hero-title">{project.title}</h1>
            <p className="hero-sub">{project.subtitle}</p>
          </div>

          <button className="slide-btn left" onClick={prev} aria-label="Prev">
            ‹
          </button>
          <button className="slide-btn right" onClick={next} aria-label="Next">
            ›
          </button>

          <div className="indicators">
            {project.images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Overview + Objectives */}
      <section className="overview grid-2">
        <div>
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </div>
        <div>
          <h3>Objectives</h3>
          <ul className="list-inline">
            {project.objectives.map((o, i) => (
              <li key={i}>✅ {o}</li>
            ))}
          </ul>

          <h3>Challenges</h3>
          <ul className="list-inline">
            {project.challenges.map((c, i) => (
              <li key={i}>⚠️ {c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 🔹 Process */}
      <section className="process">
        <h2>Process</h2>
        <div className="timeline">
          {project.process.map((step, i) => (
            <div className="step" key={i}>
              <div className="step-circle">{i + 1}</div>
              <div className="step-title">{step}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Deliverables (icons only) */}
      <section className="deliverables">
        <h2>Deliverables</h2>
        <div className="deliver-grid">
          {project.deliverables.map((d, i) => (
            <div className="deliver-card" key={i}>
              <span className="deliver-icon">{d.icon}</span>
              <div className="deliver-caption">{d.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Key Insights */}
      <section className="insights">
        <h2>Key Insights</h2>
        <div className="insight-grid">
          {project.insights.map((ins, i) => (
            <div className="insight-card" key={i}>
              <div className="insight-value">{ins.value}</div>
              <div className="insight-sub">{ins.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Recommendations & Tools */}
      <section className="grid-2 rec-tools">
        <div>
          <h2>Recommendations</h2>
          <ul>
            {project.recommendations.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Tools Used</h2>
          <div className="tools">
            {project.tools.map((t, i) => (
              <span key={i} className="tool-pill">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Contact */}
      <section className="cta">
        <p>{project.contactCTA}</p>
        <a className="btn-primary" href="mailto:your-email@example.com">
          Contact Me
        </a>
      </section>
    </div>
  );
}
