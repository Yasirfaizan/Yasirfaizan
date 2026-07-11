import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Exploration from './pages/Exploration';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all sections that we want to slide up when scrolled to
    document.querySelectorAll('.projects-section, .experience-section, .skills-section, .exploration-section').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <Home />
        <Skills />
        <Exploration />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
