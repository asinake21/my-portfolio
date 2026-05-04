import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="resume-header">
          My <span className="gradient-text">Resume</span>
        </h2>
        <div className="resume-underline"></div>
        
        <div className="resume-download-wrapper">
          <a 
            href="/resume.pdf" 
            download="Asinake_Hailie_Resume.pdf" 
            className="btn-download"
          >
            <span className="download-icon">📥</span>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
