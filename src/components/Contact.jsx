import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    { label: 'Email', value: 'asinakehailie00@gmail.com', icon: '✉️', link: 'mailto:asinakehailie00@gmail.com' },
    { label: 'Phone', value: '+251 929 395 199', icon: '📞', link: 'tel:+251929395199' },
    { label: 'Location', value: 'Kirkos sub-city, Debre Zeit Road', icon: '📍', link: '#' }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="contact-desc">
            Have a project in your mind or want to collaborate? Reach out
            through any of the channels below I'd love to make real solution for
            your idea.
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((info, i) => (
            <div key={i} className={`contact-card ${i === 0 ? 'card-active' : ''}`}>
              <div className="contact-icon-wrapper">
                <div className="contact-icon-box">{info.icon}</div>
              </div>
              <h3 className="contact-card-label">{info.label}</h3>
              <p className="contact-card-value">{info.value}</p>
            </div>
          ))}
        </div>

        <div className="find-me-on">
          <div className="divider-line"></div>
          <span className="find-me-text">FIND ME ON</span>
          <div className="divider-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
