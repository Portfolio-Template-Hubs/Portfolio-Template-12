import React from 'react';
import './Projects.css';
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiFirebase, SiStripe, SiExpress, SiPostgresql, SiSocketdotio, SiCss3, SiVite, SiMarkdown, SiHtml5, SiGithub } from 'react-icons/si';
import { FiEye } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A modern task management application with real-time collaboration features. Built with React, Firebase, and includes drag-and-drop functionality.',
      technologies: ['React', 'Firebase', 'CSS3', 'JavaScript'],
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts. Features location-based weather data and beautiful animations.',
      technologies: ['React', 'API Integration', 'CSS3', 'Charts.js'],
      imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A social media platform with real-time messaging, post sharing, and user profiles. Built with modern web technologies.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern design principles and smooth animations. Built with React and CSS3.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Vite'],
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A full-featured blog platform with markdown support, comment system, and SEO optimization.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Markdown'],
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const techIcons = {
    'React': <SiReact color="#61DAFB" size="1.2em" />,
    'Node.js': <SiNodedotjs color="#339933" size="1.2em" />,
    'MongoDB': <SiMongodb color="#47A248" size="1.2em" />,
    'JavaScript': <SiJavascript color="#F7DF1E" size="1.2em" />,
    'Firebase': <SiFirebase color="#FFCA28" size="1.2em" />,
    'Stripe': <SiStripe color="#008CDD" size="1.2em" />,
    'Express': <SiExpress color="#000000" size="1.2em" />,
    'PostgreSQL': <SiPostgresql color="#336791" size="1.2em" />,
    'Socket.io': <SiSocketdotio color="#010101" size="1.2em" />,
    'CSS3': <SiCss3 color="#1572B6" size="1.2em" />,
    'Vite': <SiVite color="#646CFF" size="1.2em" />,
    'Markdown': <SiMarkdown color="#000000" size="1.2em" />,
    'API Integration': <span style={{color: '#f39c12', fontSize: '1.2em'}}>🔌</span>,
    'Charts.js': <span style={{color: '#64b3f4', fontSize: '1.2em'}}>📊</span>
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Here are some of my recent works</p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="project-image-content"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link">
                      <SiGithub size="1.2em" style={{marginRight: '0.5rem'}} />
                      <span>GitHub</span>
                    </a>
                    <a href={project.liveLink} className="project-link">
                      <FiEye size="1.2em" style={{marginRight: '0.5rem'}} />
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
                    <span key={index} className="tech-tag">
                      {techIcons[tech] && <span style={{marginRight: '0.4rem', display: 'inline-flex', alignItems: 'center'}}>{techIcons[tech]}</span>}
                      {tech}
                    </span>
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
