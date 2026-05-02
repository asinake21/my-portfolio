import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    { label: 'Email Me', value: 'contact@asinake.com', icon: '✉️', link: 'mailto:contact@asinake.com' },
    { label: 'Telegram', value: '@asinake21', icon: '📱', link: 'https://t.me/asinake21' },
    { label: 'Location', value: 'Bahir Dar, Ethiopia', icon: '📍', link: '#' }
  ];

  return (
    <section id="contact" className="section contact-section-v2">
      <div className="container">
        <div className="contact-header-v2">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="contact-subtitle">
            I'm currently looking for new opportunities and collaborations. 
            Feel free to reach out to me through any of these channels!
          </p>
        </div>

        <div className="contact-cards-v2">
          {contactInfo.map((info, i) => (
            <a key={i} href={info.link} className="contact-card-v2 glass">
              <div className="contact-icon-v2">{info.icon}</div>
              <div className="contact-info-v2">
                <span className="contact-label-v2">{info.label}</span>
                <span className="contact-value-v2">{info.value}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="contact-cta-v2">
          <a href="mailto:contact@asinake.com" className="btn btn-primary lg">Start a Conversation</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
