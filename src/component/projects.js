import React from "react";
import "../CssComponent/projects.css";
import img from "../Images/becHomePage.png";
const Projects = () => {
  return (
    <div className="project-container">
    <h1>My projects</h1>
      <div className="project1-header">
        <h2>2. BEC</h2>
        <p className="subtitle">
          a Learning platform which connects chess academy and learners
        </p>
      </div>
      <div className="project1">
        <div className="project-content">
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
        </div>
        <div className="project-tech-wrapper">
          <div className="project-tech-stack">
            <p>Tech Stack Used</p>
            <div className="tech-tags">
              <span className="tag">React</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">Spring Security</span>
              <span className="tag">JWT</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>
          <div className="project-img">
            <img src={img}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
