import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/1.jpg';
import './Home.css';

// -------------------------------------------------------------
// PASTE YOUR RESUME PDF LINK HERE (Google Drive, Dropbox, etc.)
// -------------------------------------------------------------
const RESUME_LINK = "https://example.com/your-resume.pdf";

const Home = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content animate-fade-in">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Yasir Faizan.</h1>
        <h2 className="hero-role">I build things for the web.</h2>
        
        <p className="hero-bio delay-100">
          I'm a passionate web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </p>

        <div className="hero-actions delay-200">
          <div className="btn-group">
            <a href="#projects" onClick={scrollToProjects} className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Download size={18} /> Resume
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Yasirfaizan" target="_blank" rel="noreferrer" className="social-icon"><Github /></a>
            <a href="https://www.linkedin.com/in/yasir-faizan-shalmani/" target="_blank" rel="noreferrer" className="social-icon"><Linkedin /></a>
            <a href="mailto:yasirfaizan680@gmail.com" className="social-icon"><Mail /></a>
          </div>
        </div>
      </div>

      <div className="hero-image-container animate-fade-in delay-300">
        <div className="image-wrapper">
          <img 
            src={profileImg} 
            alt="Yasir Faizan" 
            className="hero-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
