import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title text-center">
          My <span className="gradient-text">Resume</span>
        </h2>
        
        <div className="resume-content-box glass">
          <div className="resume-icon">📄</div>
          <p className="resume-text">
            I am currently looking for an internship or junior developer role. 
            You can view or download my resume below to see my full technical 
            background and experience.
          </p>
          
          <div className="resume-actions">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary"
            >
              View Resume
            </a>
            <a 
              href="/resume.pdf" 
              download="Asinake_Hailie_Resume.pdf" 
              className="btn btn-outline"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
