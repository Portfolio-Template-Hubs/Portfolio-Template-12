import React from 'react';
import './Skills.css';

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
    html5: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E34F26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3l1.67 19L12 22l5.33-1.5L19 3H5z"></path>
        <path d="M9 7.5h2v3.5h-2"></path>
        <path d="M15 7.5h-2v3.5h2"></path>
        <path d="M10 15l-1-2"></path>
        <path d="M14 15l1-2"></path>
      </svg>
    ),
    css3: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1572B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3l1.67 19L12 22l5.33-1.5L19 3H5z"></path>
        <path d="M7 7h10l-.7 8-4.3 2-4.3-2L7 7z"></path>
        <path d="M12 13.5v-3"></path>
        <path d="M9.5 10.5h5"></path>
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F7DF1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <path d="M9 17v-8"></path>
        <path d="M15 17s0-4-3-4"></path>
        <path d="M12 13h3"></path>
      </svg>
    ),
    react: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 9a9.01 9.01 0 0 0 0 6"></path>
        <path d="M12 3c5 0 9 3 9 9s-4 9-9 9-9-3-9-9 4-9 9-9z"></path>
      </svg>
    ),
    nodejs: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#339933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 8v8l9 6 9-6V8l-9-6z"></path>
        <path d="M12 19v-9"></path>
        <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3776AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-1.22 0-2.66.7-2.66 2.33V8H14a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 0-1 1v3.67C7 17.3 8.44 18 9.66 18c1.22 0 2.66-.7 2.66-2.33V14h-3"></path>
        <path d="M12 3c1.22 0 2.66.7 2.66 2.33V8H10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h6a1 1 0 0 1 1 1v3.67c0 1.63-1.44 2.33-2.66 2.33-1.22 0-2.66-.7-2.66-2.33V14h3"></path>
      </svg>
    ),
    mongodb: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#47A248" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l-7 4v10l7 4 7-4V6l-7-4z"></path>
        <path d="M12 6v10"></path>
        <path d="M12 6l7 4"></path>
        <path d="M5 10l7-4"></path>
      </svg>
    ),
    sql: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4479A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
        <path d="M4 6v8c0 1.657 3.582 3 8 3s8-1.343 8-3V6"></path>
        <path d="M4 14v4c0 1.657 3.582 3 8 3s8-1.343 8-3v-4"></path>
      </svg>
    ),
    git: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="1.05" y1="12" x2="7" y2="12"></line>
        <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
        <line x1="12" y1="1.05" x2="12" y2="7"></line>
        <line x1="12" y1="17.01" x2="12" y2="22.96"></line>
      </svg>
    ),
    docker: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2496ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12H4V8h4M12 12H8V8h4M16 12h-4V8h4M4 16V4h16v12"></path>
        <path d="M5 20h14a2 2 0 0 0 2-2v-6H3v6a2 2 0 0 0 2 2z"></path>
      </svg>
    )
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
          {categories.map(category => (
            <div key={category} className="skills-category-section">
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
            <div key={index} className="skills-grid-item" style={{ borderColor: skill.color }}>              
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
          <div className="skills-stat-card">
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
          <div className="skills-stat-card">
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
          <div className="skills-stat-card">
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
