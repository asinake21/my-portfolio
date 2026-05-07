import React from 'react';
import './Experience.css';

const Experience = () => {
  const education = [
    {
      year: '2024 – present',
      title: 'Bachelor of Science in Computer Science',
      institution: 'Bahir Dar University',
      desc: 'Gained a strong foundation in programming logic, algorithms, and core computer science concepts. Completed relevant certifications to support practical software engineering skills.'
    }
  ];

  const experience = [
    {
      year: '2024 – Present',
      title: 'Full-Stack Developer',
      institution: '',
      desc: 'Spearheading the development of scalable web and mobile applications. Leveraging React, Node.js, Express, MongoDB, and MySQL for web projects, while utilizing Flutter (Dart) for cross-platform mobile solutions.'
    },
    {
      year: '2024 – 2026',
      title: 'Junior Full-Stack Developer',
      institution: 'Bahir Dar University',
      desc: 'Contributed to multiple web projects utilizing the MERN stack. Collaborated closely with peers in team-based environments and actively participated in hackathons to solve technical challenges.'
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
