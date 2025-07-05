import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';
import { FiBriefcase, FiCalendar, FiMapPin, FiTrendingUp, FiAward, FiUsers, FiTarget } from 'react-icons/fi';
import { BiRocket } from 'react-icons/bi';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeCard, setActiveCard] = useState(null);
  const [expandedCards, setExpandedCards] = useState(new Set());
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.dataset.itemId;
            if (itemId) {
              setVisibleItems(prev => new Set([...prev, parseInt(itemId)]));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Handle card expansion
  const handleCardClick = (expId) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(expId)) {
        newSet.delete(expId);
      } else {
        newSet.add(expId);
      }
      return newSet;
    });
  };

  const experiences = [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Led development of responsive web applications using React and modern JavaScript. Collaborated with design and backend teams to deliver high-quality user experiences.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 3 junior developers',
        'Implemented CI/CD pipelines',
        'Reduced bundle size by 35%'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS'],
      status: 'current',
      color: '#61DAFB'
    },
    {
      id: 2,
      position: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      period: '2021 - 2022',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Worked closely with clients to understand requirements and deliver solutions.',
      achievements: [
        'Built 15+ client websites',
        'Reduced load times by 50%',
        'Mentored intern developers',
        'Achieved 98% client satisfaction'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      status: 'completed',
      color: '#339933'
    },
    {
      id: 3,
      position: 'Junior Web Developer',
      company: 'StartUp Innovations',
      period: '2020 - 2021',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Started career developing responsive websites and learning modern web technologies. Focused on frontend development with React and CSS frameworks.',
      achievements: [
        'Completed 20+ projects',
        'Learned React and Node.js',
        'Contributed to open source projects',
        'Built reusable component library'
      ],
      technologies: ['React', 'CSS3', 'JavaScript', 'Git'],
      status: 'completed',
      color: '#F7DF1E'
    },
    {
      id: 4,
      position: 'Web Development Intern',
      company: 'Creative Web Studio',
      period: '2019 - 2020',
      location: 'Remote',
      type: 'Internship',
      description: 'Gained hands-on experience in web development, working on various client projects and learning industry best practices.',
      achievements: [
        'Built first commercial website',
        'Learned HTML, CSS, and JavaScript',
        'Worked in agile development environment',
        'Received outstanding intern award'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Photoshop'],
      status: 'completed',
      color: '#E34F26'
    }
  ];

  return (
    <section id="experience" className="exp-section" ref={sectionRef}>
      <div className="exp-container">
        {/* Floating Background Elements */}
        <div className="exp-bg-elements">
          <div className="exp-bg-orb exp-bg-orb-1"></div>
          <div className="exp-bg-orb exp-bg-orb-2"></div>
          <div className="exp-bg-orb exp-bg-orb-3"></div>
        </div>

        {/* Section Header */}
        <div className="exp-header">
          <div className="exp-header-icon">
            <BiRocket className="exp-rocket-icon" />
          </div>
          <h2 className="exp-title">Professional Journey</h2>
          <p className="exp-subtitle">Crafting digital experiences with passion and expertise</p>
          <div className="exp-title-decoration">
            <div className="exp-deco-line"></div>
            <div className="exp-deco-diamond"></div>
            <div className="exp-deco-line"></div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              ref={(el) => (itemRefs.current[index] = el)}
              data-item-id={exp.id}
              className={`exp-timeline-item ${
                index % 2 === 0 ? 'exp-timeline-left' : 'exp-timeline-right'
              } ${
                visibleItems.has(exp.id) ? 'exp-item-visible' : ''
              }`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
              onMouseEnter={() => setActiveCard(exp.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="exp-timeline-content">
                <div 
                  className={`exp-card ${activeCard === exp.id ? 'exp-card-active' : ''} ${expandedCards.has(exp.id) ? 'exp-card-expanded' : ''}`}
                  style={{ 
                    borderColor: exp.color,
                    '--exp-card-color': exp.color
                  }}
                  onClick={() => handleCardClick(exp.id)}
                >
                  {/* Card Header */}
                  <div className="exp-card-header">
                    <div className="exp-card-status" style={{ borderColor: exp.color, background: `${exp.color}11` }}>
                      <span className={`exp-status-indicator ${exp.status === 'current' ? 'exp-status-current' : 'exp-status-completed'}`} style={{ background: exp.color }}></span>
                      <span className="exp-status-text" style={{ color: exp.color }}>
                        {exp.status === 'current' ? 'Current' : 'Completed'}
                      </span>
                    </div>
                    <div className="exp-card-type">
                      <FiBriefcase className="exp-type-icon" style={{ color: exp.color }} />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  {/* Position and Company */}
                  <div className="exp-card-main">
                    <h3 className="exp-position">{exp.position}</h3>
                    <div className="exp-company-info">
                      <span className="exp-company">{exp.company}</span>
                      <div className="exp-meta-info">
                        <div className="exp-meta-item">
                          <FiCalendar className="exp-meta-icon" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="exp-meta-item">
                          <FiMapPin className="exp-meta-icon" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description - Always visible */}
                  <p className="exp-description">{exp.description}</p>

                  {/* Expandable Content */}
                  <div className={`exp-card-details ${expandedCards.has(exp.id) ? 'exp-details-expanded' : ''}`}>
                    {/* Technologies */}
                    <div className="exp-technologies">
                      <h4 className="exp-tech-title">
                        <FiTarget className="exp-tech-icon" style={{ color: exp.color }} />
                        Technologies
                      </h4>
                      <div className="exp-tech-list">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="exp-tech-tag"
                            style={{
                              animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s`,
                              borderColor: exp.color,
                              background: `${exp.color}11`,
                              color: exp.color
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="exp-achievements">
                      <h4 className="exp-achievements-title">
                        <FiAward className="exp-achievements-icon" style={{ color: exp.color }} />
                        Key Achievements
                      </h4>
                      <ul className="exp-achievements-list">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex} 
                            className="exp-achievement-item"
                            style={{
                              animationDelay: `${(index * 0.2) + (achIndex * 0.1)}s`
                            }}
                          >
                            <span className="exp-achievement-bullet" style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}` }}></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <div className="exp-expand-indicator">
                    <span className={`exp-expand-icon ${expandedCards.has(exp.id) ? 'exp-expanded' : ''}`}>
                      ▼
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Timeline Marker */}
              <div className="exp-timeline-marker" style={{ borderColor: exp.color }}>
                <div className="exp-marker-inner" style={{ background: exp.color }}></div>
                <div className="exp-marker-pulse" style={{ background: `${exp.color}33` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="exp-summary">
          <div className="exp-summary-header">
            <h3 className="exp-summary-title">
              <FiTrendingUp className="exp-summary-icon" />
              Career Highlights
            </h3>
            <p className="exp-summary-desc">A snapshot of my professional growth</p>
          </div>
          
          <div className="exp-stats-grid">
            <div className="exp-stat-card">
              <div className="exp-stat-icon">
                <FiCalendar />
              </div>
              <div className="exp-stat-content">
                <h4 className="exp-stat-number">4+</h4>
                <p className="exp-stat-label">Years Experience</p>
              </div>
              <div className="exp-stat-decoration"></div>
            </div>
            
            <div className="exp-stat-card">
              <div className="exp-stat-icon">
                <FiTarget />
              </div>
              <div className="exp-stat-content">
                <h4 className="exp-stat-number">50+</h4>
                <p className="exp-stat-label">Projects Delivered</p>
              </div>
              <div className="exp-stat-decoration"></div>
            </div>
            
            <div className="exp-stat-card">
              <div className="exp-stat-icon">
                <BiRocket />
              </div>
              <div className="exp-stat-content">
                <h4 className="exp-stat-number">15+</h4>
                <p className="exp-stat-label">Technologies Mastered</p>
              </div>
              <div className="exp-stat-decoration"></div>
            </div>
            
            <div className="exp-stat-card">
              <div className="exp-stat-icon">
                <FiUsers />
              </div>
              <div className="exp-stat-content">
                <h4 className="exp-stat-number">100%</h4>
                <p className="exp-stat-label">Client Satisfaction</p>
              </div>
              <div className="exp-stat-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
