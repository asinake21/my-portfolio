import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <div className="logo-box">AH</div>
            <h2 className="footer-brand-title">Full-Stack Dev</h2>
          </div>
          <p className="footer-description">
            Building modern, scalable applications with passion and precision.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Connect</h3>
          <div className="footer-socials-row">
            <a href="https://github.com/asinake21" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://t.me/asinake21" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Telegram">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="mailto:contact@asinake.com" className="social-icon-btn" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            © 2022-2026 Asinake Hailie:Full-Stack Developer Portfolio. All rights reserved.
          </p>
          <p className="footer-tech">
            Built with React js, vanilla css.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
