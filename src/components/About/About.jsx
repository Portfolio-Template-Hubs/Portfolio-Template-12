import React from 'react';
import './About.css';

/* Original About Component */

const About = () => {
  return (
    <section id="about" className="about-black-enhanced">
      <div className="about-bg-pattern"></div>
      <div className="container">
        <div className="about-section-header">
          <div className="about-title-wrapper">
            <span className="about-title-accent">01.</span>
            <h2 className="about-section-title">About Me</h2>
          </div>
          <p className="about-section-subtitle">Crafting digital experiences with passion and precision</p>
          <div className="about-title-decoration"></div>
        </div>

        <div className="about-enhanced-content">
          <div className="about-text-section">
            <div className="about-intro-text">
              <h3 className="about-main-heading">
                <span className="about-gradient-text">Hello! I'm a passionate</span>
                <br />
                <span className="about-highlight-text">Full-Stack Developer</span>
              </h3>

              <div className="about-description">
                <p className="about-paragraph">
                  I specialize in creating <span className="about-inline-highlight">beautiful, functional, and user-centered</span> digital experiences. With expertise spanning both front-end and back-end technologies, I transform complex challenges into elegant, intuitive solutions.
                </p>
                <p className="about-paragraph">
                  My journey in web development began several years ago, and I've continuously evolved with the latest technologies. I'm passionate about <span className="about-inline-highlight">clean, maintainable code</span> and delivering exceptional user experiences.
                </p>
              </div>

              <div className="about-skills-preview">
                <div className="about-skill-tag">React</div>
                <div className="about-skill-tag">Node.js</div>
                <div className="about-skill-tag">TypeScript</div>
                <div className="about-skill-tag">Python</div>
                <div className="about-skill-tag">MongoDB</div>
              </div>
            </div>

            <div className="about-enhanced-stats">
              <div className="about-stat-card">
                <div className="about-stat-icon">🚀</div>
                <div className="about-stat-content">
                  <h4 className="about-stat-number">50+</h4>
                  <p className="about-stat-label">Projects Delivered</p>
                </div>
                <div className="about-stat-glow"></div>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-icon">⚡</div>
                <div className="about-stat-content">
                  <h4 className="about-stat-number">3+</h4>
                  <p className="about-stat-label">Years Experience</p>
                </div>
                <div className="about-stat-glow"></div>
              </div>

              <div className="about-stat-card">
                <div className="about-stat-icon">✨</div>
                <div className="about-stat-content">
                  <h4 className="about-stat-number">100%</h4>
                  <p className="about-stat-label">Client Satisfaction</p>
                </div>
                <div className="about-stat-glow"></div>
              </div>
            </div>
          </div>

          <div className="about-visual-section">
            <div className="profile-card">
              <div className="profile-card-inner" style={{ transformStyle: 'preserve-3d' }}>
                <div className="profile-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" 
                    alt="Developer Profile" 
                    className="profile-image"
                  />
                </div>
                <div className="profile-decoration top-left"></div>
                <div className="profile-decoration top-right"></div>
                <div className="profile-decoration bottom-left"></div>
                <div className="profile-decoration bottom-right"></div>
                
                <div className="profile-frame"></div>
                
                <div className="profile-stats">
                  <div className="profile-stat">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Years</span>
                  </div>
                  <div className="profile-stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                </div>
                
                <div className="profile-tags">
                  <span className="profile-tag">Developer</span>
                  <span className="profile-tag">Designer</span>
                  <span className="profile-tag">Problem Solver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
