import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// Initialize EmailJS with your public key
emailjs.init("XR3AV1H6jx9CrzF4C");

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Debug log
    setStatus({ loading: true, success: false, error: false });

    try {
      console.log('Attempting to send email...'); // Debug log
      const result = await emailjs.sendForm(
        'service_6af7p2l',
        'template_zwfldkb',
        form.current,
        'XR3AV1H6jx9CrzF4C'
      );
      
      console.log('Email sent successfully:', result); // Debug log
      setStatus({ loading: false, success: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Detailed error:', error); // Debug log
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>mattjmireles@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>517-242-7776</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Location</h3>
                <p>Lansing, MI</p>
              </div>
            </div>
            <div className="contact-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              disabled={status.loading}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
            {status.success && (
              <div className="success-message">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {status.error && (
              <div className="error-message">
                Sorry, there was an error sending your message. Please try again.
                <br />
                Error details: {status.error.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 