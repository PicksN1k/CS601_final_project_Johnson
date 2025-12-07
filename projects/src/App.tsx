import React from "react";
import { projectData } from "./projectData";

export default function App() {
  return (
    <section className="projects-section">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projectData.map((p, index) => (
          <div className="project-card" key={index}>
            <h3>{p.title}</h3>
            <p className="tech">{p.tech}</p>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}