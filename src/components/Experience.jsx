import React from 'react';
import './Experience.css';

const Experience = () => {
  const education = [
    {
      year: '2022- 2026',
      title: 'Bachelor of Science in Computer Science',
      institution: 'Bahirdar University',
      desc: 'Specialized in full-stack Development'
    }
  ];

  const experience = [
    {
      year: '2025- PRESENT',
      title: 'Full-Stack Developer',
      institution: 'Self-Employed / Freelance',
      desc: 'advance development of scalable web and mobile applications using React, Node.js, express, golang mysql, orm. Mentoring junior developers and implementing best practices.'
    },
    {
      year: '2024- 2025',
      title: 'junior Full-Stack Developer',
      institution: 'bahirdar university',
      desc: 'Developed and maintained multiple projects. Worked with various technologies including MongoDB, Express, React, and Node.js.'
    },
    {
      year: '2022- 2023',
      title: 'algorithm, prgogramming, machine language basics',
      institution: 'bairdar university',
      desc: 'Started my professional journey studying the logic of programming and learning industry best practices.'
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container experience-grid">
        <div className="experience-column">
          <div className="column-header">
            <div className="header-icon hat-icon">🎓</div>
            <h2 className="column-title">Education</h2>
          </div>
          <div className="timeline">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-institution">{item.institution}</p>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-column">
          <div className="column-header">
            <div className="header-icon bag-icon">💼</div>
            <h2 className="column-title">Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <div key={index} className={`timeline-item ${index === 1 ? 'highlighted' : ''}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-institution">{item.institution}</p>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
