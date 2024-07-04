import React from "react";
import "../CssComponent/projects.css";
import img from "../Images/becHomePage.png";
const Projects = () => {
  return (
    <div className="shogi">
      <h2>2. BEC</h2>
      <p className="subtitle">
        a Learning platform which connects chess academy and learners
      </p>
      <div className="content">
        <div className="description">
          <p>
            Welcome to our Chess Academy platform, streamlining connections
            between academies and learners efficiently.
          </p>
          <p>Features:</p>
          <ul>
            <li>Metrics Visualisation</li>
            <li>Academy Enrollment</li>
          </ul>
        </div>
        <div className="tech-stack">
          <p>Tech Stack Used</p>
          <div className="tech-tags">
            <span className="tag">React</span>
            <span className="tag">Spring Boot</span>
            <span className="tag">Spring Security</span>
            <span className="tag">JWT</span>
            <span className="tag">PostgreSQL</span>
          </div>
        </div>
        <div className="project-img"><img src={img}></img></div>
      </div>
      <div className="github-button">
        <button>Github</button>
      </div>
    </div>
  );
};

export default Projects;
