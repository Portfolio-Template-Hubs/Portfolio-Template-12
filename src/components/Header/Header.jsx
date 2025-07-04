import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.aurora-header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`aurora-header ${
      isScrolled ? 'aurora-header-scrolled' : ''
    } ${
      isMenuOpen ? 'aurora-header-menu-open' : ''
    }`}>
      {/* Background blur effect */}
      <div className="aurora-header-backdrop"></div>
      
      {/* Gradient border effect */}
      <div className="aurora-header-border"></div>
      
      <div className="container">
        <div className="aurora-header-content">
          {/* Logo Section */}
          <div className="aurora-logo-section">
            <a href="#home" className="aurora-logo">
              <div className="aurora-logo-icon">
                <div className="aurora-logo-ring aurora-logo-ring-1"></div>
                <div className="aurora-logo-ring aurora-logo-ring-2"></div>
                <div className="aurora-logo-symbol">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="7" r="4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="aurora-logo-text">
                <span className="aurora-logo-name">Nikhil</span>
                <span className="aurora-logo-title">Developer</span>
              </div>
            </a>
          </div>

          {/* Navigation Section */}
          <Navigation isOpen={isMenuOpen} />

          {/* Action Buttons */}
          <div className="aurora-header-actions">
            {/* CTA Button */}
            <a href="#contact" className="aurora-cta-btn aurora-action-btn">
              <span className="aurora-cta-text">Let's Talk</span>
              <div className="aurora-cta-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17l9.2-9.2M17 17V7H7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="aurora-cta-bg"></div>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className={`aurora-menu-toggle aurora-action-btn ${
                isMenuOpen ? 'aurora-menu-toggle-active' : ''
              }`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <div className="aurora-hamburger">
                <span className="aurora-hamburger-line aurora-hamburger-line-1"></span>
                <span className="aurora-hamburger-line aurora-hamburger-line-2"></span>
                <span className="aurora-hamburger-line aurora-hamburger-line-3"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`aurora-mobile-overlay ${
        isMenuOpen ? 'aurora-mobile-overlay-active' : ''
      }`} onClick={() => setIsMenuOpen(false)}></div>
    </header>
  );
};

export default Header;
