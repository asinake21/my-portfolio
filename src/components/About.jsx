import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I'm Asinake, a 3rd-year Computer Science student at Bahir Dar University. 
              My interest in web development started when I decided to try editing some 
              website templates — it turns out that tweaking code to see immediate results 
              on the screen was incredibly addictive!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of building a variety of 
              web applications using the MERN stack. My main focus these days is building 
              accessible, inclusive products and digital experiences.
            </p>
            <p>
              I am currently looking for an internship where I can apply my skills and 
              learn from professionals in the field. I'm hardworking, dedicated, and 
              always eager to learn more.
            </p>
          </div>
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80" 
                alt="My Workspace" 
                className="about-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
