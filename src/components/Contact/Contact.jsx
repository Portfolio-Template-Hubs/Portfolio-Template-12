import React, { useState } from 'react';
import './Contact.css';
// Import for icons
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaUser, FaPaperPlane, FaCheck, FaMagic, FaFileAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Enhanced contact items with more styling
  const contactItems = [
    { 
      type: 'email', 
      title: 'Email', 
      value: 'your.email@example.com', 
      icon: 'email',
      color: '#FF6B6B', // Vibrant coral red
      description: '💌 Send me a direct message',
      gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E53)'
    },
    { 
      type: 'phone', 
      title: 'Phone', 
      value: '+1 (555) 123-4567', 
      icon: 'phone',
      color: '#4ECDC4', // Teal
      description: '📞 Call me anytime',
      gradient: 'linear-gradient(135deg, #4ECDC4, #44A08D)'
    },
    { 
      type: 'location', 
      title: 'Location', 
      value: 'Your City, Country', 
      icon: 'location',
      color: '#45B7D1', // Sky blue
      description: '📍 Based in your area',
      gradient: 'linear-gradient(135deg, #45B7D1, #96C93D)'
    }
  ];

  // Enhanced social links with gradients
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: '#', 
      icon: 'github',
      color: '#A78BFA', // Purple
      description: '🚀 View my projects',
      gradient: 'linear-gradient(135deg, #A78BFA, #8B5CF6)'
    },
    { 
      name: 'LinkedIn', 
      url: '#', 
      icon: 'linkedin',
      color: '#06B6D4', // Cyan
      description: '💼 Professional profile',
      gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)'
    },
    { 
      name: 'Twitter', 
      url: '#', 
      icon: 'twitter',
      color: '#F59E0B', // Amber
      description: '🐦 Follow my updates',
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)'
    },
    { 
      name: 'Instagram', 
      url: '#', 
      icon: 'instagram',
      color: '#EF4444', // Red
      description: '📸 Behind the scenes',
      gradient: 'linear-gradient(135deg, #EF4444, #DC2626)'
    }
  ];

  // Enhanced form fields with better colors and icons
  const formFields = [
    { 
      name: 'name', 
      placeholder: 'Your Full Name', 
      type: 'text',
      color: '#10B981', // Emerald
      icon: FaUser,
      gradient: 'linear-gradient(135deg, #10B981, #059669)'
    },
    { 
      name: 'email', 
      placeholder: 'Your Email Address', 
      type: 'email',
      color: '#F59E0B', // Amber
      icon: FaEnvelope,
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)'
    },
          { 
        name: 'subject', 
        placeholder: 'Message Subject', 
        type: 'text',
        color: '#8B5CF6', // Violet
        icon: FaFileAlt,
        gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
      }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
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
    <section id="contact" className="contact-modern-ultimate">
      <div className="container">
        <div className="contact-modern-section-title">
          <h2 className="contact-modern-title">
            <FaMagic className="contact-title-icon" />
            Get In Touch
            <FaMagic className="contact-title-icon" />
          </h2>
          <p className="contact-modern-subtitle">Let's create something extraordinary together ✨</p>
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
                      background: item.gradient,
                      borderColor: item.color,
                      boxShadow: `0 8px 25px ${item.color}30`
                    }}
                  >
                    <div style={{ color: '#ffffff' }}>
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
                    className="contact-modern-social-link-ultimate"
                    style={{ 
                      background: social.gradient,
                      animationDelay: `${index * 0.1}s`,
                      boxShadow: `0 5px 20px ${social.color}30`
                    }}
                    title={social.description}
                  >
                    <span style={{ color: '#ffffff', marginRight: '8px' }}>
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
              {formFields.map((field, index) => {
                const IconComponent = field.icon;
                return (
                  <div 
                    key={field.name} 
                    className="contact-modern-form-group-ultimate"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="form-input-wrapper">
                      <IconComponent 
                        className="form-input-icon" 
                        style={{ color: field.color }}
                      />
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        required
                        style={{ 
                          borderColor: focusedField === field.name ? field.color : 'rgba(255, 255, 255, 0.1)',
                          boxShadow: focusedField === field.name ? `0 0 20px ${field.color}40` : 'none'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
              
              <div className="contact-modern-form-group-ultimate">
                <div className="form-input-wrapper">
                  <FaMagic 
                    className="form-input-icon" 
                    style={{ color: '#EC4899' }}
                  />
                  <textarea
                    name="message"
                    placeholder="Tell me about your amazing project ideas... ✨"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    style={{ 
                      borderColor: focusedField === 'message' ? '#EC4899' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: focusedField === 'message' ? '0 0 20px #EC489940' : 'none'
                    }}
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className={`contact-modern-submit-btn-ultimate ${isSubmitting ? 'submitting' : ''} ${submitted ? 'submitted' : ''}`}
                disabled={isSubmitting}
                style={{ 
                  background: submitted 
                    ? 'linear-gradient(135deg, #10B981, #059669)' 
                    : 'linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)',
                  backgroundSize: '200% 200%'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <FaCheck style={{ marginRight: '8px' }} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane style={{ marginRight: '8px' }} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
