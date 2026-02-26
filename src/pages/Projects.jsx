import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header animate-fade-in">
        <h2 className="section-title">Some Things I've Built</h2>
        <div className="title-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            className={`project-card animate-fade-in`} 
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
            key={project.id}
          >
            <div className="project-image-container">
              <img 
                src={`https://api.microlink.io/?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&waitFor=2000&meta=false&embed=screenshot.url`}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop";
                }}
                alt={`${project.title} preview`} 
                className="project-image" 
              />
              <div className="project-overlay">
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-icon" aria-label="GitHub Repository">
                      <Github size={24} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link-icon" aria-label="Live Demo">
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag, i) => (
                  <li key={i} className="project-tag">{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
