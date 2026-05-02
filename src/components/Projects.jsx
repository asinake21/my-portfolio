import React from 'react';
import './Projects.css';
import toDoImg from '../assets/images/to-do.png';
import proctorImg from '../assets/images/Proctor.png';
import codeBridgeImg from '../assets/images/code-bridge.png';

const projects = [
  {
    title: 'React Todo App',
    desc: 'A powerful and intuitive todo application built with React, featuring task persistence and a clean user interface.',
    tech: ['React', 'CSS', 'JavaScript'],
    image: toDoImg,
    demo: 'https://reat-todo.vercel.app/',
    code: 'https://github.com/asinake21'
  },
  {
    title: 'BDU Proctor Work System',
    desc: 'A specialized management system for university proctors to track and manage student activities and work schedules.',
    tech: ['MERN Stack', 'Tailwind', 'Redux'],
    image: proctorImg,
    demo: 'https://bdu-proctor-work-system.vercel.app/',
    code: 'https://github.com/asinake21'
  },
  {
    title: 'Code Bridge for Programmers',
    desc: 'A collaborative platform designed to help programmers connect, share code, and solve problems together.',
    tech: ['React', 'Node.js', 'Socket.io'],
    image: codeBridgeImg,
    demo: 'https://code-bridge-for-programmers1.vercel.app/',
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
                    <a href={project.demo} target="_blank" rel="noreferrer" className="overlay-btn primary">Live</a>
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
