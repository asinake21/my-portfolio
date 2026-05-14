import React from 'react';
import './Skills.css';

const skills = [
  { name: 'React', level: '90%' },
  { name: 'Node.js', level: '80%' },
  { name: 'JavaScript', level: '85%' },
  { name: 'MongoDB', level: '75%' },
  { name: 'Bootstrap', level: '95%' },
  { name: 'Express', level: '80%' },
  { name: 'HTML/CSS', level: '95%' },
  { name: 'Git & GitHub', level: '90%' },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}</span>
              </div>
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
