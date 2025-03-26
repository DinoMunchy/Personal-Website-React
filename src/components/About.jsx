import React from 'react';
import '../styles/About.css';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Responsive Design', level: 90 }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate Web Developer based in Lansing, Michigan, with a keen eye for creating 
              engaging and user-friendly digital experiences. My journey in web development started with 
              a curiosity for building things that live on the internet, and has evolved into a 
              professional pursuit of crafting beautiful, functional websites.
            </p>
            <p className="about-description">
              I specialize in building responsive web applications using modern technologies like React 
              and Node.js. My approach combines clean code practices with creative problem-solving to 
              deliver solutions that not only work flawlessly but also provide exceptional user experiences.
            </p>
            <p className="about-description">
              When I'm not coding, I'm constantly learning new technologies and staying up-to-date with 
              the latest web development trends. I believe in writing clean, maintainable code and creating 
              intuitive user interfaces that make a difference.
            </p>
          </div>
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 