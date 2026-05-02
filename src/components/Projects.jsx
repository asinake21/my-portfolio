import React from 'react';
import './Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    title: 'Nexus AI Dashboard',
    desc: 'Real-time analytics with predictive insights.',
    tech: ['React', 'Node.js', 'Chart.js'],
    image: project1,
    demo: '#',
    code: 'https://github.com/asinake21'
  },
  {
    title: 'EcoMarket Platform',
    desc: 'Sustainable e-commerce for local artisans.',
    tech: ['MongoDB', 'Express', 'React'],
    image: project2,
    demo: '#',
    code: 'https://github.com/asinake21'
  },
  {
    title: 'TaskFlow Solutions',
    desc: 'Collaborative task management for teams.',
    tech: ['Firebase', 'React', 'Tailwind'],
    image: project3,
    demo: '#',
    code: 'https://github.com/asinake21'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="projects-grid-layout">
          {projects.map((project, i) => (
            <div key={i} className="project-card-v2 glass">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="p-img" />
                <div className="project-overlay">
                  <div className="overlay-btns">
                    <a href={project.code} target="_blank" rel="noreferrer" className="overlay-btn">Code</a>
                    <a href={project.demo} className="overlay-btn primary">Live</a>
                  </div>
                </div>
              </div>
              
              <div className="project-info-v2">
                <div className="project-tags">
                  {project.tech.map((t, j) => (
                    <span key={j} className="project-pill">{t}</span>
                  ))}
                </div>
                <h3 className="p-title-v2">{project.title}</h3>
                <p className="p-desc-v2">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
