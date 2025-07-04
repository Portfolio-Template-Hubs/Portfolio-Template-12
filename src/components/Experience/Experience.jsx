import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Led development of responsive web applications using React and modern JavaScript. Collaborated with design and backend teams to deliver high-quality user experiences.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 3 junior developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      id: 2,
      position: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      period: '2021 - 2022',
      description: 'Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Worked closely with clients to understand requirements and deliver solutions.',
      achievements: [
        'Built 15+ client websites',
        'Reduced load times by 50%',
        'Mentored intern developers'
      ]
    },
    {
      id: 3,
      position: 'Junior Web Developer',
      company: 'StartUp Innovations',
      period: '2020 - 2021',
      description: 'Started career developing responsive websites and learning modern web technologies. Focused on frontend development with React and CSS frameworks.',
      achievements: [
        'Completed 20+ projects',
        'Learned React and Node.js',
        'Contributed to open source projects'
      ]
    },
    {
      id: 4,
      position: 'Web Development Intern',
      company: 'Creative Web Studio',
      period: '2019 - 2020',
      description: 'Gained hands-on experience in web development, working on various client projects and learning industry best practices.',
      achievements: [
        'Built first commercial website',
        'Learned HTML, CSS, and JavaScript',
        'Worked in agile development environment'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <h3 className="position">{exp.position}</h3>
                    <div className="company-period">
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="description">{exp.description}</p>
                  
                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="timeline-marker"></div>
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <h3>4+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Technologies Used</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
