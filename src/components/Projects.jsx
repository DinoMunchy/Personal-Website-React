import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DinoMunchy/repos');
        const data = await response.json();
        
        // Sort by most recently updated
        const sortedProjects = data.sort((a, b) => 
          new Date(b.updated_at) - new Date(a.updated_at)
        );

        setProjects(sortedProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="projects-container">
          <h2 className="section-title">My Projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.name}</h3>
              {project.description && (
                <p className="project-description">{project.description}</p>
              )}
              <div className="project-meta">
                <div className="project-language">
                  <span className="project-language-dot"></span>
                  <span>{project.language || 'Various'}</span>
                </div>
                <div className="project-stats">
                  <span>
                    <i className="fas fa-star"></i> {project.stargazers_count}
                  </span>
                  <span>
                    <i className="fas fa-code-branch"></i> {project.forks_count}
                  </span>
                </div>
              </div>
              <div className="project-links">
                <a 
                  href={project.html_url} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> View on GitHub
                </a>
                {project.homepage && (
                  <a 
                    href={project.homepage}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 