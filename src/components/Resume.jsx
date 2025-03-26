import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-content">
          {/* Experience Section */}
          <div className="resume-section">
            <h3 className="resume-section-title">
              <i className="fas fa-briefcase"></i>
              Work Experience
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2024 - Present</div>
                <div className="timeline-content">
                  <h4>Web Developer</h4>
                  <p>
                    • Developed and maintained responsive web applications using React and Node.js<br />
                    • Collaborated with design team to implement user-friendly interfaces<br />
                    • Optimized application performance and implemented best practices
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <h3 className="resume-section-title">
              <i className="fas fa-graduation-cap"></i>
              Education
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2024 - 2025</div>
                <div className="timeline-content">
                  <h4>Promieo Tech</h4>
                  <h5>Lansing Community College</h5>
                  <p>
                    • Relevant coursework: Web Development, Database Systems, Software Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-section">
            <h3 className="resume-section-title">
              <i className="fas fa-code"></i>
              Technical Skills
            </h3>
            <div className="skills-container">
              <div className="skill-category">
                <h4>Frontend Development</h4>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Responsive Design</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools & Technologies</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">VS Code</span>
                  <span className="skill-tag">npm</span>
                  <span className="skill-tag">Webpack</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="resume-download">
            <a href="/path-to-your-resume.pdf" className="download-btn" download>
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 