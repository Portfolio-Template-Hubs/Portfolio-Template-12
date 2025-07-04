import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ isOpen }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    const mobileView = window.innerWidth <= 768;
    if (mobileView && isOpen) {
      // This will be handled by the parent component through the event propagation
      // We're just indicating that a link was clicked in mobile view
    }
  };

  // Use SVG icons instead of emojis for more modern look
  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path d="M9 22V12h6v10" />
        </svg>
      )
    },
    {
      id: 'about',
      label: 'About',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      )
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
      )
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </svg>
      )
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      )
    }
  ];

  return (
    <nav className={`aurora-nav${isOpen ? ' aurora-nav-open' : ''}`}>
      <ul className="aurora-nav-list">
        {navigationItems.map((item) => (
          <li key={item.id} className="aurora-nav-item">
            <a 
              href={`#${item.id}`} 
              className={`aurora-nav-link${activeSection === item.id ? ' aurora-nav-link-active' : ''}`}
              data-section={item.id}
              onClick={handleNavLinkClick}
            >
              <span className="aurora-nav-icon">{item.icon}</span>
              <span className="aurora-nav-text">{item.label}</span>
              {/* Add active indicator element */}
              <span className="aurora-nav-indicator"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
