import React from 'react';
import './projects.css';

const Projects = () => (
  <div id='projects'>
    <p>work</p>
    <div className='wrapper'>
    <div class="card">
          <div class="card-header">
            <h2 class="heading-2">Polished</h2>
            <p class="subtitle">Open Source mobile app connecting users with independent manicure artists in their area.</p>
          </div>
          <div class="card-description">
            <p>Empowering independent artists</p>
          </div>
          <div class="card-tech">
            <span class="tech">Angular 2</span>
            <span class="tech">SCSS</span>
            <span class="tech">Sequelize</span>
            <span class="tech">Node.js</span>
          </div>
          <div class="card-links">
            <a href="http://www.brianadacoscos.com/" target="_blank" class="button">Visit Live</a>
            <a href="https://github.com/jcpace/polished" target="_blank" class="button">GitHub Repo</a>
          </div>
        </div>
    
    </div>
  </div>
  );

export default Projects;
