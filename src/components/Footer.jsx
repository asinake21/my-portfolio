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
            Building modern, scalable application applications with passion and precision.
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
              <span>📂</span>
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <span>🔗</span>
            </a>
            <a href="https://t.me/asinake21" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Telegram">
              <span>📱</span>
            </a>
            <a href="mailto:contact@asinake.com" className="social-icon-btn" aria-label="Email">
              <span>✉️</span>
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
