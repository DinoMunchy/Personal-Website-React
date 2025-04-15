import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bgPosition, setBgPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
    
    // Update background position with a smoother movement for lava effect
    setBgPosition({
      x: 50 + (x - 50) * 0.05,
      y: 50 + (y - 50) * 0.05
    });
  };

  return (
    <section 
      className="hero"
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${bgPosition.x}%`,
        '--mouse-y': `${bgPosition.y}%`
      }}
    >
      <div className="lava-background">
        <div className="lava-blob blob-1"></div>
        <div className="lava-blob blob-2"></div>
        <div className="lava-blob blob-3"></div>
        <div className="lava-blob blob-4"></div>
        <div className="lava-blob blob-5"></div>
        <div className="lava-blob blob-6"></div>
        <div className="lava-blob blob-7"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <div 
              className="profile-picture"
              onMouseMove={handleMouseMove}
              style={{
                '--mouse-x': `${mousePosition.x}%`,
                '--mouse-y': `${mousePosition.y}%`
              }}
            >
              <img 
                src="/profile.jpeg"
                alt="Matthew Mireles" 
                className="profile-img fade-in"
              />
            </div>
          </div>
          <div className="hero-text">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-title">
              <span className="name">Matthew Mireles</span>
              <span className="title">Web Developer</span>
            </h1>
            <div className="hero-description">
              <TypeAnimation
                sequence={[
                  'I create beautiful and functional web experiences that make a difference.',
                ]}
                wrapper="span"
                speed={40}
                className="typed-text"
              />
            </div>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 