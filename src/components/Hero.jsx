import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const titles = ['Full-Stack Developer', 'Problem Solver', 'Creative Coder'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentFullTitle = titles[currentTitleIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullTitle.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentFullTitle.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentFullTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <h1 className="hero-main-title">
            Hello, I'm <span className="gradient-text">Asinake Hailie</span>
          </h1>
          <h2 className="hero-typewriter">
            I craft as a <span className="typewriter-text">{currentText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-desc">
            Passionate developer focused on building modern, responsive, and 
            user-friendly web applications. I turn complex problems into 
            simple, elegant solutions.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
