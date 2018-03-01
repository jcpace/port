import React from 'react';
import './projects.css';

const Projects = () => (
  <div id="projects">
    <div className="wrapper">
      <div className="card">
        <div className="card-header">
          <h2 className="heading-2">Polished</h2>
          <p className="subtitle">
            Open Source mobile app connecting users with independent manicure
            artists in their area.
          </p>
        </div>
        <div className="card-description">
          <p>Empowering independent artists</p>
        </div>
        <div className="card-tech">
          <span className="tech">Angular 2</span>
          <span className="tech">SCSS</span>
          <span className="tech">Sequelize</span>
          <span className="tech">Node.js</span>
        </div>
        <div className="card-links">
          <a href="http://polished.tk/" className="button">
            Visit Live
          </a>
          <a href="https://github.com/jcpace/polished" className="button">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
