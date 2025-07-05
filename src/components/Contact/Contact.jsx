import React, { useState } from 'react';
import './Contact.css';
// Import for icons
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Color-coded contact items similar to Skills component
  const contactItems = [
    { 
      type: 'email', 
      title: 'Email', 
      value: 'your.email@example.com', 
      icon: 'email',
      color: '#E34F26', // HTML5 red
      description: 'Send me a direct message'
    },
    { 
      type: 'phone', 
      title: 'Phone', 
      value: '+1 (555) 123-4567', 
      icon: 'phone',
      color: '#1572B6', // CSS3 blue
      description: 'Call me anytime'
    },
    { 
      type: 'location', 
      title: 'Location', 
      value: 'Your City, Country', 
      icon: 'location',
      color: '#F7DF1E', // JavaScript yellow
      description: 'Based in your area'
    }
  ];

  // Color-coded social links
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: '#', 
      icon: 'github',
      color: '#61DAFB', // React blue
      description: 'View my projects'
    },
    { 
      name: 'LinkedIn', 
      url: '#', 
      icon: 'linkedin',
      color: '#339933', // Node.js green
      description: 'Professional profile'
    },
    { 
      name: 'Twitter', 
      url: '#', 
      icon: 'twitter',
      color: '#3776AB', // Python blue
      description: 'Follow my updates'
    },
    { 
      name: 'Instagram', 
      url: '#', 
      icon: 'instagram',
      color: '#47A248', // MongoDB green
      description: 'Behind the scenes'
    }
  ];

  // Color-coded form fields
  const formFields = [
    { 
      name: 'name', 
      placeholder: 'Your Name', 
      type: 'text',
      color: '#4479A1', // SQL blue
      icon: 'user'
    },
    { 
      name: 'email', 
      placeholder: 'Your Email', 
      type: 'email',
      color: '#F05032', // Git orange
      icon: 'envelope'
    },
    { 
      name: 'subject', 
      placeholder: 'Subject', 
      type: 'text',
      color: '#2496ED', // Docker blue
      icon: 'subject'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Icon mapping
  const iconComponents = {
    email: <FaEnvelope />,
    phone: <FaPhone />,
    location: <FaMapMarkerAlt />,
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />
  };

  return (
    <section id="contact" className="contact-modern">
      <div className="container">
        <div className="contact-modern-section-title">
          <h2 className="contact-modern-title">Get In Touch</h2>
          <p className="contact-modern-subtitle">Let's work together on your next project</p>
        </div>

        <div className="contact-modern-content">
          <div className="contact-modern-info">
            <h3>Let's create something amazing together</h3>
            <p>
              Don't like forms? Send me an email directly. I'm always excited to collaborate on innovative projects 
              and connect with creative minds. Let's turn your ideas into reality!  
            </p>
            
            <div className="contact-modern-details">
              {contactItems.map((item, index) => (
                <div 
                  key={item.type} 
                  className="contact-modern-item"
                  style={{ 
                    borderColor: item.color,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div 
                    className="contact-modern-icon"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}11, ${item.color}22)`,
                      borderColor: item.color
                    }}
                  >
                    <div style={{ color: item.color }}>
                      {iconComponents[item.icon]}
                    </div>
                  </div>
                  <div className="contact-modern-text">
                    <h4 style={{ color: item.color }}>{item.title}</h4>
                    <p>{item.value}</p>
                    <small style={{ color: `${item.color}88` }}>{item.description}</small>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-modern-social">
              <h4>Connect with me:</h4>
              <div className="contact-modern-social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    className="contact-modern-social-link"
                    style={{ 
                      borderColor: social.color,
                      animationDelay: `${index * 0.1}s`
                    }}
                    title={social.description}
                  >
                    <span style={{ color: social.color, marginRight: '8px' }}>
                      {iconComponents[social.icon]}
                    </span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-modern-form-container">
            <form className="contact-modern-form" onSubmit={handleSubmit}>
              {formFields.map((field, index) => (
                <div 
                  key={field.name} 
                  className="contact-modern-form-group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    style={{ 
                      borderColor: field.color,
                      '--field-color': field.color
                    }}
                  />
                </div>
              ))}
              
              <div className="contact-modern-form-group">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ 
                    borderColor: '#8A2BE2',
                    '--field-color': '#8A2BE2'
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="contact-modern-submit-btn"
                style={{ 
                  background: 'linear-gradient(135deg, #8A2BE2, #00C9FF, #4B0082)',
                  backgroundSize: '200% 200%'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
