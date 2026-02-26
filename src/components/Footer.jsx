import { Github, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        
        {/* Left Side: Attractive Email Text */}
        <div className="footer-left">
          <a href="mailto:yasirfaizan680@gmail.com" className="attractive-email">
            yasirfaizan680@gmail.com
          </a>
        </div>

        {/* Right Side: Social Circles */}
        <div className="footer-right">
          <div className="social-links-circle">
            <a href="https://github.com/Yasirfaizan" target="_blank" rel="noreferrer" className="social-icon-circle" aria-label="Github">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/yasir-faizan-shalmani/" target="_blank" rel="noreferrer" className="social-icon-circle" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.facebook.com/yasir.faizan.680078/" target="_blank" rel="noreferrer" className="social-icon-circle" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://wa.me/923341546579" target="_blank" rel="noreferrer" className="social-icon-circle whatsapp" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        
      </div>

      <div className="footer-bottom-info">
        <p className="copyright">© {currentYear} All rights reserved.</p>
      </div>

      {/* Massive Background Jumping Name */}
      <div className="footer-bg-name-container">
        <h1 className="jumping-bg-name">
          {"YASIR FAIZAN".split('').map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
