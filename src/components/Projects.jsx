import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Nexus Dashboard',
    description: 'A comprehensive management dashboard built with React and Node.js. Features real-time data visualization and user authentication.',
    tech: ['React', 'Node.js', 'Chart.js'],
    link: 'https://github.com/asinake21',
  },
  {
    title: 'EcoMarket',
    description: 'An e-commerce platform for sustainable products. Includes a shopping cart, payment integration, and an admin panel.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://github.com/asinake21',
  },
  {
    title: 'TaskFlow',
    description: 'A project management tool designed for small teams to track progress and collaborate effectively.',
    tech: ['React', 'Firebase', 'Tailwind'],
    link: 'https://github.com/asinake21',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-folder">📁</div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">🔗</a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <ul className="project-tech">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
