import React from 'react';
import './About.css';

const About = () => {
  const features = [
    { title: 'Fast & Scalable', desc: 'Optimized performance for modern users.' },
    { title: 'Clean Code', desc: 'Maintainable and standards-compliant.' },
    { title: 'Responsive', desc: 'Looks great on any screen size.' },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid-layout">
          <div className="about-visual">
            <div className="profile-img-container">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" 
                alt="Asinake" 
                className="profile-img"
              />
              <div className="dot-grid"></div>
            </div>
          </div>
          
          <div className="about-details">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="about-bio">
              <p>
                I'm currently a 3rd-year Computer Science student at 
                <span className="highlight"> Bahir Dar University</span>. My journey into web 
                development started with a deep curiosity about how digital products 
                are built and scaled.
              </p>
              <p>
                I specialize in the <span className="highlight">MERN stack</span> and have a 
                passion for building things that live on the internet. My goal is to 
                always provide clean, efficient, and user-centric solutions.
              </p>
            </div>

            <div className="feature-cards">
              {features.map((f, i) => (
                <div key={i} className="feature-card">
                  <h4 className="feature-title">{f.title}</h4>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
