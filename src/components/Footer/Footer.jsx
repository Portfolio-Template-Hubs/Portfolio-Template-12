import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-description">
              Thank you for visiting my portfolio. I'm always excited to work on new projects 
              and meet interesting people. Let's create something amazing together!
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Frontend Development</a></li>
              <li><a href="#">Backend Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
            <div className="footer-contact">
              <p>📧 your.email@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
            <p>Made with ❤️ using React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
