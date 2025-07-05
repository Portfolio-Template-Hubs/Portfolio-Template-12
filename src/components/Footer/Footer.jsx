import React, { useState } from 'react';
import './Footer.css';
// Import for icons
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaHeart, FaRocket, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="footer-modern-elite">
      <div className="container">
        <div className="footer-modern-content">
          <div className="footer-modern-section">
            <h3 className="footer-modern-title">Portfolio <FaRocket style={{display: 'inline', marginLeft: '10px', fontSize: '1.5rem'}} /></h3>
            <p className="footer-modern-description">
              Thank you for visiting my portfolio. I'm passionate about creating innovative solutions 
              and building meaningful connections. Let's transform ideas into extraordinary experiences!
            </p>
            <div className="footer-modern-newsletter">
              <h5>Stay Updated</h5>
              <p style={{fontSize: '0.9rem', color: '#b3b3b3', marginBottom: '1rem'}}>Get notified about my latest projects and insights</p>
              <form className="footer-modern-newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  <FaPaperPlane style={{marginRight: '5px'}} />
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-modern-section">
            <h4>Quick Links</h4>
            <ul className="footer-modern-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-modern-section">
            <h4>Services</h4>
            <ul className="footer-modern-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Frontend Development</a></li>
              <li><a href="#">Backend Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-modern-section">
            <h4>Connect</h4>
            <div className="footer-modern-social">
              <a href="#" className="footer-social-link">
                <FaGithub />
                GitHub
              </a>
              <a href="#" className="footer-social-link">
                <FaLinkedin />
                LinkedIn
              </a>
              <a href="#" className="footer-social-link">
                <FaTwitter />
                Twitter
              </a>
              <a href="#" className="footer-social-link">
                <FaInstagram />
                Instagram
              </a>
            </div>
            <div className="footer-modern-contact">
              <p><FaEnvelope style={{color: '#DC143C'}} /> your.email@example.com</p>
              <p><FaPhone style={{color: '#4B0082'}} /> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="footer-modern-bottom">
          <div className="footer-modern-divider"></div>
          <div className="footer-modern-bottom-content">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
            <p>Made with <FaHeart style={{color: '#DC143C', margin: '0 5px'}} /> using React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
