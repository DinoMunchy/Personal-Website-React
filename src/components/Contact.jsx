import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: "XR3AV1H6jx9CrzF4C",
  limitRate: true
});

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
    error: false,
    errorMessage: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, errorMessage: '' });
    setMessage('');

    try {
      console.log('Attempting to send email...'); // Debug log
      console.log('Using service ID:', 'service_bv6cjyp'); // Debug log
      console.log('Using template ID:', 'template_zwfldkb'); // Debug log
      
      // Format the data according to EmailJS template variables
      const templateParams = {
        to_name: 'Matt',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      console.log('Template parameters:', templateParams);
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const result = await emailjs.send(
        'service_bv6cjyp',
        'template_zwfldkb',
        templateParams,
        'XR3AV1H6jx9CrzF4C'
      );

      console.log('EmailJS Response:', result); // Debug log
      
      if (result.status === 200) {
        setMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus({ loading: false, success: true, error: false, errorMessage: '' });
      } else {
        throw new Error(`Failed to send message: ${result.status}`);
      }
    } catch (error) {
      console.error('Detailed error:', error); // Debug log
      console.error('Error object:', JSON.stringify(error, null, 2)); // Debug log
      setMessage('Sorry, there was an error sending your message. Please try again.');
      console.error('Error details:', error.text || error.message);
      setStatus({ 
        loading: false, 
        success: false, 
        error: true,
        errorMessage: error.text || error.message || 'Unknown error occurred'
      });
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
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
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
                {message}
              </div>
            )}
            {status.error && (
              <div className="error-message">
                {message}
                <br />
                Error details: {status.errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 