import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: '90%' },
      { name: 'JavaScript', level: '85%' },
      { name: 'Tailwind CSS', level: '95%' },
      { name: 'HTML/CSS', level: '95%' },
    ]
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', level: '80%' },
      { name: 'MongoDB', level: '75%' },
      { name: 'Express', level: '80%' },
      { name: 'Git & GitHub', level: '90%' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="skills-categories">
          {skillCategories.map((category, i) => (
            <div key={i} className="skill-category-card glass">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list-container">
                {category.skills.map((skill, j) => (
                  <div key={j} className="skill-item-row">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
