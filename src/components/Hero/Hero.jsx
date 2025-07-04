import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  
  const currentRole = roles[currentRoleIndex];
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !imageRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const moveX = mouseX * 0.01;
      const moveY = mouseY * 0.01;
      
      imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Typing animation with role rotation
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 80;
    const pauseTime = 2000;
    const deleteSpeed = 50;
    
    const typeWriter = () => {
      if (currentIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setIsTypingComplete(true);
        setTimeout(() => {
          deleteText();
        }, pauseTime);
      }
    };
    
    const deleteText = () => {
      if (currentIndex > 0) {
        setDisplayText(currentRole.slice(0, currentIndex - 1));
        currentIndex--;
        setTimeout(deleteText, deleteSpeed);
      } else {
        setIsTypingComplete(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };
    
    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, [currentRole, roles.length]);

  return (
    <section 
      id="home" 
      className="modern-hero" 
      ref={heroRef}
    >
      {/* Animated Background */}
      <div className="hero-bg-wrapper">
        <div className="hero-gradient-bg"></div>
        <div className="hero-pattern-overlay"></div>
<div className="hero-floating-shapes">
          <div className="hero-unique-shape hero-shape-1">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7L12 2z"/>
            </svg>
          </div>
          <div className="hero-unique-shape hero-shape-2">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <div className="hero-unique-shape hero-shape-3">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12,2 22,20 2,20"/>
            </svg>
          </div>
          <div className="hero-unique-shape hero-shape-4">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="3"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="modern-hero-container">
          {/* Content Section */}
          <div className="hero-content-section">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Available for new projects</span>
            </div>
            
            <div className="hero-greeting-section">
              <span className="greeting-emoji">👋</span>
              <p className="greeting-message">Hello there! I'm</p>
            </div>
            
            <div className="hero-title-section">
              <h1 className="hero-main-title">
                <span className="title-line title-line-1">
                  <span className="title-word">Nikhil</span>
                  <span className="title-highlight">Kumar</span>
                </span>
              </h1>
            </div>
            
            <div className="hero-role-section">
              <div className="role-container">
                <span className="role-prefix">I'm a</span>
                <div className="role-wrapper">
                  <span className="role-text">{displayText}</span>
                  <span className={`typing-cursor ${
                    isTypingComplete ? 'cursor-blink' : 'cursor-typing'
                  }`}>|</span>
                </div>
              </div>
            </div>
            
            <div className="hero-description-section">
              <p className="hero-main-description">
                I craft exceptional digital experiences through innovative web development.
                Passionate about creating clean, efficient code and building user-centric
                applications that solve real-world problems.
              </p>
            </div>
            
            {/* Enhanced Stats */}
            <div className="hero-stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🚀</div>
                <div className="stat-content">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Buttons */}
            <div className="hero-action-buttons">
              <a href="#projects" className="hero-btn hero-btn-primary">
                <span className="btn-content">
                  <span className="btn-text">View My Work</span>
                  <span className="btn-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M7 17l9.2-9.2M17 17V7H7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
                <div className="btn-bg"></div>
              </a>
              
              <a href="#contact" className="hero-btn hero-btn-secondary">
                <span className="btn-content">
                  <span className="btn-text">Let's Connect</span>
                  <span className="btn-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
                <div className="btn-bg"></div>
              </a>
            </div>
            
            {/* Enhanced Social Links */}
            <div className="hero-social-section">
              <p className="social-label">Connect with me</p>
              <div className="social-links-grid">
                <a href="#" className="social-link-modern" aria-label="GitHub">
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span className="social-tooltip">GitHub</span>
                </a>
                
                <a href="#" className="social-link-modern" aria-label="LinkedIn">
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="social-tooltip">LinkedIn</span>
                </a>
                
                <a href="#" className="social-link-modern" aria-label="Twitter">
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <span className="social-tooltip">Twitter</span>
                </a>
                
                <a href="#" className="social-link-modern" aria-label="Email">
                  <div className="social-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="22,6 12,13 2,6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="social-tooltip">Email</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="hero-image-section">
            <div className="hero-image-wrapper" ref={imageRef}>
              <div className="hero-image-main">
                <div className="image-placeholder-modern">
                  <div className="placeholder-avatar">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="placeholder-text">
                    <span className="placeholder-title">Professional Photo</span>
                    <span className="placeholder-subtitle">Add your image here</span>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="image-decorations">
                  <div className="decoration-ring decoration-ring-1"></div>
                  <div className="decoration-ring decoration-ring-2"></div>
                  <div className="decoration-dot decoration-dot-1"></div>
                  <div className="decoration-dot decoration-dot-2"></div>
                  <div className="decoration-dot decoration-dot-3"></div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="floating-icons">
                <div className="floating-icon floating-icon-1">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <div className="floating-icon floating-icon-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div className="floating-icon floating-icon-3">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-wrapper">
          <span className="scroll-text">Explore More</span>
          <div className="scroll-animation">
            <div className="scroll-line"></div>
            <div className="scroll-dot"></div>
          </div>
          <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
