import './Exploration.css';

const explorations = [
  {
    id: 1,
    title: 'CSS Liquid Morphing',
    category: 'Animation',
    component: (
      <div className="experiment-blob"></div>
    )
  },
  {
    id: 2,
    title: 'Glassmorphism Hover',
    category: 'UI/UX',
    component: (
      <div className="experiment-glass">
        <div className="glass-glare"></div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Neon Pulse Loader',
    category: 'Components',
    component: (
      <div className="experiment-neon">
        <div className="neon-ring"></div>
        <div className="neon-ring"></div>
      </div>
    )
  }
];

const Exploration = () => {
  return (
    <section id="exploration" className="exploration-section">
      <div className="section-header animate-fade-in">
        <h2 className="section-title">Explorations</h2>
        <div className="title-line"></div>
      </div>
      
      <p className="explore-desc animate-fade-in delay-100">
        A playground for creative coding, micro-interactions, and experimental UI components.
      </p>

      <div className="explore-grid">
        {explorations.map((exp, index) => (
          <div 
            key={exp.id} 
            className="explore-card animate-fade-in"
            style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
          >
            <div className="explore-display">
              {exp.component}
            </div>
            <div className="explore-info">
              <span className="explore-category">{exp.category}</span>
              <h3 className="explore-title">{exp.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Exploration;
