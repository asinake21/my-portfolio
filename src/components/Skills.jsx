import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript (ES6+)', 'React', 'Node.js', 
  'Express', 'MongoDB', 'HTML & CSS', 
  'Git & GitHub', 'Tailwind CSS'
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <p className="skills-intro">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <span className="skill-icon">▹</span> {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
