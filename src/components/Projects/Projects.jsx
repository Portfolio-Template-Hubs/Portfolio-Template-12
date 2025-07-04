import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'Project Image 1',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A modern task management application with real-time collaboration features. Built with React, Firebase, and includes drag-and-drop functionality.',
      technologies: ['React', 'Firebase', 'CSS3', 'JavaScript'],
      image: 'Project Image 2',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts. Features location-based weather data and beautiful animations.',
      technologies: ['React', 'API Integration', 'CSS3', 'Charts.js'],
      image: 'Project Image 3',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A social media platform with real-time messaging, post sharing, and user profiles. Built with modern web technologies.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      image: 'Project Image 4',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern design principles and smooth animations. Built with React and CSS3.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Vite'],
      image: 'Project Image 5',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A full-featured blog platform with markdown support, comment system, and SEO optimization.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Markdown'],
      image: 'Project Image 6',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Here are some of my recent works</p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.image}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link">
                      <span>GitHub</span>
                    </a>
                    <a href={project.liveLink} className="project-link">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for more projects and contributions</p>
          <a href="#" className="cta-button">View GitHub Profile</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
