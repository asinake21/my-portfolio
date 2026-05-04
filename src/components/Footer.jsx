import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          <a href="https://github.com/asinake21" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <div className="social-icon-box">📂</div>
          </a>
          <a href="https://t.me/asinake21" target="_blank" rel="noreferrer" className="social-link" aria-label="Telegram">
            <div className="social-icon-box">📱</div>
          </a>
          <a href="mailto:contact@asinake.com" className="social-link" aria-label="Email">
            <div className="social-icon-box">✉️</div>
          </a>
        </div>
        
        <div className="footer-info">
          <p className="footer-credit">Designed & Built by Asinake Hailie</p>
          <p className="footer-copy">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
