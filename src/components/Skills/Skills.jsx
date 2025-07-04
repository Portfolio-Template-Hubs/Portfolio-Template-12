import React from 'react';
import './Skills.css';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiPython, SiMongodb, SiMysql, SiGit, SiDocker } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 90, category: 'Frontend', color: '#E34F26', icon: 'html5' },
    { name: 'CSS3', level: 85, category: 'Frontend', color: '#1572B6', icon: 'css3' },
    { name: 'JavaScript', level: 88, category: 'Frontend', color: '#F7DF1E', icon: 'javascript' },
    { name: 'React', level: 92, category: 'Frontend', color: '#61DAFB', icon: 'react' },
    { name: 'Node.js', level: 80, category: 'Backend', color: '#339933', icon: 'nodejs' },
    { name: 'Python', level: 85, category: 'Backend', color: '#3776AB', icon: 'python' },
    { name: 'MongoDB', level: 78, category: 'Database', color: '#47A248', icon: 'mongodb' },
    { name: 'SQL', level: 82, category: 'Database', color: '#4479A1', icon: 'sql' },
    { name: 'Git', level: 88, category: 'Tools', color: '#F05032', icon: 'git' },
    { name: 'Docker', level: 75, category: 'Tools', color: '#2496ED', icon: 'docker' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  const categoryIcons = {
    Frontend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-4v4h4v-4z"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
        <line x1="16" y1="5" x2="22" y2="5"></line>
        <line x1="19" y1="2" x2="19" y2="8"></line>
      </svg>
    ),
    Backend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6" y2="6"></line>
        <line x1="6" y1="18" x2="6" y2="18"></line>
      </svg>
    ),
    Database: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    Tools: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  };

  // SVG icons for each skill
  const skillIcons = {
    html5: <SiHtml5 color="#E34F26" size="2.5em" className="icon-pulse icon-spin-hover" />,
    css3: <SiCss3 color="#1572B6" size="2.5em" className="icon-pulse icon-spin-hover" />,
    javascript: <SiJavascript color="#F7DF1E" size="2.5em" className="icon-pulse icon-spin-hover" />,
    react: <SiReact color="#61DAFB" size="2.5em" className="icon-pulse icon-spin-hover" />,
    nodejs: <SiNodedotjs color="#339933" size="2.5em" className="icon-pulse icon-spin-hover" />,
    python: <SiPython color="#3776AB" size="2.5em" className="icon-pulse icon-spin-hover" />,
    mongodb: <SiMongodb color="#47A248" size="2.5em" className="icon-pulse icon-spin-hover" />,
    sql: <SiMysql color="#4479A1" size="2.5em" className="icon-pulse icon-spin-hover" />,
    git: <SiGit color="#F05032" size="2.5em" className="icon-pulse icon-spin-hover" />,
    docker: <SiDocker color="#2496ED" size="2.5em" className="icon-pulse icon-spin-hover" />
  };

  return (
    <section id="skills" className="skills-dark-enhanced">
      <div className="skills-bg-pattern"></div>
      <div className="container">
        <div className="skills-section-header">
          <div className="skills-title-wrapper">
            <span className="skills-title-accent">⚡</span>
            <h2 className="skills-section-title">Skills & Expertise</h2>
          </div>
          <div className="skills-title-decoration"></div>
          <p className="skills-section-subtitle">Crafting digital experiences with cutting-edge technologies</p>
        </div>

        <div className="skills-all-categories">
          {categories.map((category, index) => (
            <div 
              key={category} 
              className="skills-category-section" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="skills-category-header">
                <div className="skills-category-icon">
                  {categoryIcons[category]}
                </div>
                <h3 className="skills-category-title">{category}</h3>
              </div>
              
              <div className="skills-category-description">
                {category === 'Frontend' && 'Building responsive and interactive user interfaces'}
                {category === 'Backend' && 'Developing robust server-side applications'}
                {category === 'Database' && 'Managing and optimizing data storage solutions'}
                {category === 'Tools' && 'Utilizing modern development tools and workflows'}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-grid-container">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skills-grid-item" 
              style={{ 
                borderColor: skill.color,
                animationDelay: `${index * 0.1}s`
              }}
            >              
              <div className="skills-grid-item-header" style={{ background: `linear-gradient(145deg, ${skill.color}11, ${skill.color}22)` }}>
                <div className="skills-grid-item-icon" style={{ color: skill.color }}>
                  {skillIcons[skill.icon]}
                </div>
                <div className="skills-grid-item-name">{skill.name}</div>
              </div>
              
              <div className="skills-grid-item-level">
                <div className="skills-circular-progress" style={{ background: `conic-gradient(${skill.color} ${skill.level * 3.6}deg, #222 0deg)` }}>
                  <div className="skills-circular-inner">
                    <span style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-stats-container">
          <div className="skills-stat-card" style={{ '--card-index': 0 }}>
            <div className="skills-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div className="skills-stat-content">
              <div className="skills-stat-number">4+</div>
              <div className="skills-stat-label">Years Experience</div>
            </div>
          </div>
          <div className="skills-stat-card" style={{ '--card-index': 1 }}>
            <div className="skills-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </div>
            <div className="skills-stat-content">
              <div className="skills-stat-number">50+</div>
              <div className="skills-stat-label">Projects Completed</div>
            </div>
          </div>
          <div className="skills-stat-card" style={{ '--card-index': 2 }}>
            <div className="skills-stat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <div className="skills-stat-content">
              <div className="skills-stat-number">15+</div>
              <div className="skills-stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
