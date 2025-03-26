import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-picture">
          <img 
            src={process.env.PUBLIC_URL + '/profile.jpeg'}
            alt="Matthew Mireles" 
            className="profile-img"
          />
        </div>
        <h1 className="hero-title">
          <span className="greeting">Hello, I'm</span>
          <span className="name">Matthew Mireles</span>
          <span className="title">Web Developer</span>
        </h1>
        <p className="hero-description">
          I create beautiful and functional web experiences
          that make a difference.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
        <div className="hero-social">
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
      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero; 