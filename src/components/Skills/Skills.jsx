import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 90, category: 'Frontend' },
    { name: 'CSS3', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 88, category: 'Frontend' },
    { name: 'React', level: 92, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 78, category: 'Database' },
    { name: 'SQL', level: 82, category: 'Database' },
    { name: 'Git', level: 88, category: 'Tools' },
    { name: 'Docker', level: 75, category: 'Tools' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My technical expertise</p>
        </div>

        <div className="skills-container">
          {categories.map(category => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <h4>Frontend Development</h4>
            <p>Modern, responsive web applications using React, JavaScript, and CSS3</p>
          </div>
          <div className="summary-item">
            <h4>Backend Development</h4>
            <p>Scalable server-side applications with Node.js, Python, and databases</p>
          </div>
          <div className="summary-item">
            <h4>Development Tools</h4>
            <p>Version control, containerization, and modern development workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
