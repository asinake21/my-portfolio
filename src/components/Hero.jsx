import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <p className="hero-intro">Hi, my name is</p>
          <h1 className="hero-title">Asinake Hailie.</h1>
          <h2 className="hero-subtitle">I build things for the web.</h2>
          <p className="hero-description">
            I'm a full-stack developer specialized in building (and occasionally designing) 
            exceptional digital experiences. Currently, I'm focused on finishing my CS degree 
            and building modern web applications.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Check out my work!</a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
