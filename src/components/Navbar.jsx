import { Home as HomeIcon, FolderGit2, Code2, Briefcase, Compass } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="nav-brand">
          <span className="brand-text">Portfolio.</span>
        </a>
        
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="nav-link">
              <HomeIcon size={18} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }} className="nav-link">
              <Code2 size={18} />
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#exploration" onClick={(e) => { e.preventDefault(); scrollTo('exploration'); }} className="nav-link">
              <Compass size={18} />
              <span>Explore</span>
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} className="nav-link">
              <FolderGit2 size={18} />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }} className="nav-link">
              <Briefcase size={18} />
              <span>Experience</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
