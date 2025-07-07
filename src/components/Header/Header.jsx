import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  // Toggle mobile sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest('.aurora-header') && !event.target.closest('.aurora-sidebar')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isSidebarOpen]);

  // Close sidebar when clicking on navigation links
  const handleNavLinkClick = () => {
    setIsSidebarOpen(false);
  };

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className={`aurora-header ${
        isScrolled ? 'aurora-header-scrolled' : ''
      } ${
        isSidebarOpen ? 'aurora-header-sidebar-open' : ''
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

            {/* Desktop Navigation Section */}
            <Navigation isOpen={false} />

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

              {/* Mobile Sidebar Toggle */}
              <button 
                className={`aurora-sidebar-toggle aurora-action-btn ${
                  isSidebarOpen ? 'aurora-sidebar-toggle-active' : ''
                }`}
                onClick={toggleSidebar}
                aria-label="Toggle navigation sidebar"
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
      </header>

      {/* Mobile Sidebar */}
      <div className={`aurora-sidebar ${
        isSidebarOpen ? 'aurora-sidebar-open' : ''
      }`}>
        <div className="aurora-sidebar-content">
          {/* Sidebar Header */}
          <div className="aurora-sidebar-header">
            <div className="aurora-sidebar-logo">
              <div className="aurora-sidebar-logo-icon">
                <div className="aurora-sidebar-logo-ring aurora-sidebar-logo-ring-1"></div>
                <div className="aurora-sidebar-logo-ring aurora-sidebar-logo-ring-2"></div>
                <div className="aurora-sidebar-logo-symbol">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="7" r="4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="aurora-sidebar-logo-text">
                <span className="aurora-sidebar-logo-name">Nikhil</span>
                <span className="aurora-sidebar-logo-title">Developer</span>
              </div>
            </div>
            <button 
              className="aurora-sidebar-close"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <Navigation isOpen={isSidebarOpen} onNavLinkClick={handleNavLinkClick} />

          {/* Sidebar Footer */}
          <div className="aurora-sidebar-footer">
            <a href="#contact" className="aurora-sidebar-cta" onClick={() => setIsSidebarOpen(false)}>
              <span>Let's Talk</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M7 17l9.2-9.2M17 17V7H7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div className={`aurora-sidebar-overlay ${
        isSidebarOpen ? 'aurora-sidebar-overlay-active' : ''
      }`} onClick={() => setIsSidebarOpen(false)}></div>
    </>
  );
};

export default Header;
