import { useState } from 'react';
import { 
  Code2, 
  Paintbrush, 
  Sparkles, 
  Database, 
  FileText, 
  Layers, 
  Video, 
  MonitorSmartphone, 
  Bot, 
  Smile, 
  Compass, 
  TrendingUp 
} from 'lucide-react';
import './Skills.css';

const skillCategories = {
  web: {
    title: 'Languages & Frameworks',
    desc: 'Core stack for building full-stack web and database applications.',
    skills: [
      {
        name: 'JavaScript',
        color: '#F7DF1E',
        desc: 'Dynamic scripting language for frontend & backend.',
        icon: <svg viewBox="0 0 448 512" width="30" height="30" fill="currentColor"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-13.2-50.6-29.2-50.6-59.6 0-33.7 26.5-56.5 61.3-56.5 31.3 0 51.5 15.3 61.5 35.5l-32.8 20.2c-5.7-10.8-15.3-18.6-28.6-18.6-13.5 0-23.5 7.2-23.5 18 0 12.6 7.8 16.8 25.9 24.1l10.5 4.2c35.8 14.7 54.4 31.9 54.4 62.2 0 38.4-28.4 58.5-64.6 58.5z"/></svg>
      },
      {
        name: 'TypeScript',
        color: '#3178C6',
        desc: 'Typed superset of JavaScript for scalable systems.',
        icon: <svg viewBox="0 0 512 512" width="30" height="30" fill="currentColor"><path d="M37.6 49.3h436.8v413.5H37.6z"/><path d="M265.8 358.3v-194h42.1v194h-42.1zm84.5-94.8c-1.3-33-28.8-59-66.9-59-40.4 0-69.6 27.8-69.6 67 0 69.1 113.6 53 113.6 110.1 0 19-14 31.9-38.3 31.9-20.5 0-35.4-8.8-44.5-26.6l-37 22.6c13.7 29.5 41.6 43.1 81.3 43.1 42.1 0 78.4-23.9 78.4-70.1 0-70.1-114-55-114-111.4 0-16.7 12-29.6 33.6-29.6 18.2 0 29.2 7.7 34.9 23.3l38.5-21.3z" fill="#fff"/></svg>
      },
      {
        name: 'React',
        color: '#61DAFB',
        desc: 'Declarative component-based UI development.',
        icon: <svg viewBox="0 0 512 512" width="30" height="30" fill="currentColor"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-33.4 65.7-19.2 127.4 1 4.3 2.2 8.6 3.3 12.9-5.1 1.7-10.1 3.5-15 5.4-50.6 19.5-83.3 50.8-85.2 81.6-1.9 31.1 27.2 60 76.4 75.9 4.3 1.4 8.7 2.7 13.1 4-1.1 4.4-2.1 8.8-3 13.2-12.8 59.5-4.5 107.4 22.6 123 26 15 68.6-.5 111.6-37.9 4.6-4 9.1-8.1 13.4-12.3 2.8 2.5 5.6 5 8.5 7.4 45.4 39.5 90.7 55.6 117.8 39.8 25.9-15.1 32.7-65.4 18.8-126.9-1-4.7-2.3-9.5-3.6-14.2 4.9-1.6 9.8-3.3 14.6-5.2 50.4-19.6 82.9-51.1 84.8-82.6 1.8-31-27.1-59.6-76.1-75.3zM255.4 402.6c-48.4 0-87.6-39.2-87.6-87.6s39.2-87.6 87.6-87.6 87.6 39.2 87.6 87.6-39.2 87.6-87.6 87.6z"/></svg>
      },
      {
        name: 'Next.js',
        color: '#3b82f6',
        desc: 'React framework for production grade full-stack applications.',
        icon: <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.75 18.25l-7.797-9.873v9.873h-1.378v-12.5h1.378l7.797 9.873v-9.873h1.378v12.5h-1.378z"/></svg>
      },
      {
        name: 'Node.js',
        color: '#339933',
        desc: 'Server-side runtime ecosystem for JavaScript execution.',
        icon: <svg viewBox="0 0 448 512" width="30" height="30" fill="currentColor"><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-33.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-88.6zM286.2 60.4c0-29.4-25.2-53.4-53.4-53.4h-55.6c-27 0-51.4 18.7-53.4 53.4v40.7h106.8v33.6H70.4c-34.1 0-53.4 23.9-53.4 54.3v40.7c0 27.6 24.3 53.4 53.4 53.4h109c25.9 0 44.5-23.9 44.5-53.4V128h-31.2v94.8H81.6V128h204.6V60.4z"/></svg>
      },
      {
        name: 'MongoDB',
        color: '#47A248',
        desc: 'Flexible NoSQL document database for custom schemas.',
        icon: <svg viewBox="0 0 384 512" width="30" height="30" fill="currentColor"><path d="M375.1 230c-5.5-20.4-23.4-38.3-44.5-56-12.7-10.7-27.4-21.7-43.1-32.9l-22.3-16c-31.9-22.8-67.4-48.4-100-84.5-4.4-4.8-11.6-4.8-15.9 0-32.6 36.1-68.1 61.8-100 84.5l-22.3 16c-15.7 11.2-30.4 22.2-43.1 32.9-21.1 17.8-38.9 35.6-44.5 56-9.1 33.7 8.3 84.3 46 116.8 19.5 16.8 45.3 27.4 72 32.7v23.2c0 22.4 17.1 41 39.5 41h20.1c22.4 0 39.5-18.6 39.5-41v-23.2c26.7-5.3 52.4-15.9 72-32.7 37.7-32.5 55.1-83.1 46-116.8h.6zm-177 151.7c-8 6.5-17.5 11.1-27.4 12.8v-179c16.3 5.4 32.2 14.8 46.1 27.5 12.3 11.1 22.1 24.7 28.5 40 4.7 11 7 22.7 7 34.2 0 25.1-13.4 46.8-33 60.1l-21.2 4.4z"/></svg>
      },
      {
        name: 'Mongoose',
        color: '#880000',
        desc: 'Advanced database validation modeling for Node.js.',
        icon: <svg viewBox="0 0 448 512" width="30" height="30" fill="currentColor"><path d="M448 111.8c0 33-80.1 59.8-179 59.8s-179-26.8-179-59.8S170.1 52 269 52s179 26.8 179 59.8zm0 108.2c0 33-80.1 59.8-179 59.8s-179-26.8-179-59.8v-43.2c35 25.8 100.8 43.2 179 43.2s144-17.4 179-43.2v43.2zm0 108.2c0 33-80.1 59.8-179 59.8s-179-26.8-179-59.8v-43.2c35 25.8 100.8 43.2 179 43.2s144-17.4 179-43.2v43.2zm0 108.2c0 33-80.1 59.8-179 59.8s-179-26.8-179-59.8v-43.2c35 25.8 100.8 43.2 179 43.2s144-17.4 179-43.2v43.2z"/></svg>
      },
      {
        name: 'Firebase',
        color: '#FFCA28',
        desc: 'Cloud services for authentication, hosting, and data sync.',
        icon: <Database size={30} />
      },
      {
        name: 'SQL Databases',
        color: '#00758F',
        desc: 'Relational data query design and structure.',
        icon: <Database size={30} />
      }
    ]
  },
  design: {
    title: 'Design & Editing Tools',
    desc: 'Software suite used for graphic creations, asset layouts, and video rendering.',
    skills: [
      {
        name: 'Adobe Photoshop',
        color: '#31A8FF',
        desc: 'High-end layout framing, raster graphics, and image modifications.',
        icon: <Paintbrush size={30} />
      },
      {
        name: 'CorelDRAW',
        color: '#25D366',
        desc: 'Vector layouts, print graphics, and vector shape editing.',
        icon: <Layers size={30} />
      },
      {
        name: 'Adobe After Effects',
        color: '#9999FF',
        desc: 'Motion graphics, visual presets, and layout animations.',
        icon: <Video size={30} />
      },
      {
        name: 'Adobe Premiere Pro',
        color: '#EA77FF',
        desc: 'Pro timeline video layouts, editing, and sound integrations.',
        icon: <Video size={30} />
      },
      {
        name: 'CapCut / Filmora',
        color: '#00F0FF',
        desc: 'Rapid video layout rendering, cuts, transitions, and overlays.',
        icon: <Video size={30} />
      },
      {
        name: 'MS Office Suite',
        color: '#D83B01',
        desc: 'Document writing, spreadsheets, and database reports.',
        icon: <FileText size={30} />
      }
    ]
  },
  creative: {
    title: 'AI & Specialized Skills',
    desc: 'Modern techniques leveraging AI utilities, marketing design, and specialized UI rules.',
    skills: [
      {
        name: 'AI Cartoon & Avatars',
        color: '#db2777',
        desc: 'Creating custom cartoon faces, portraits, and sketches with AI.',
        icon: <Smile size={30} />
      },
      {
        name: 'AI Character Modeling',
        color: '#7c3aed',
        desc: 'Generating human models, assets, and virtual vectors using AI tools.',
        icon: <Bot size={30} />
      },
      {
        name: 'Visual Design UI',
        color: '#ec4899',
        desc: 'Selecting clean asset palettes, spacing rules, and sleek assets.',
        icon: <Sparkles size={30} />
      },
      {
        name: 'Responsive Structures',
        color: '#3b82f6',
        desc: 'Structuring websites to scale fluidly from watch screens to large panels.',
        icon: <MonitorSmartphone size={30} />
      },
      {
        name: 'Traffic Generator',
        color: '#10b981',
        desc: 'Applying core SEO rules to drive organic user visibility.',
        icon: <TrendingUp size={30} />
      },
      {
        name: 'Advertising Websites',
        color: '#f59e0b',
        desc: 'Structuring modern product pitches and landing setups.',
        icon: <Compass size={30} />
      }
    ]
  }
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('web');

  const activeCategory = skillCategories[activeTab];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header animate-fade-in">
        <h2 className="section-title">Skills &amp; Arsenal</h2>
        <div className="title-line"></div>
      </div>
      
      <p className="skills-desc animate-fade-in delay-100">
        Discover my capabilities across development languages, creative tools, and advanced AI technologies.
      </p>

      {/* Tabs Controller */}
      <div className="skills-tabs animate-fade-in delay-150">
        <button 
          className={`skills-tab-btn ${activeTab === 'web' ? 'active' : ''}`}
          onClick={() => setActiveTab('web')}
        >
          <Code2 size={16} />
          <span>Web &amp; Databases</span>
        </button>
        <button 
          className={`skills-tab-btn ${activeTab === 'design' ? 'active' : ''}`}
          onClick={() => setActiveTab('design')}
        >
          <Paintbrush size={16} />
          <span>Design &amp; Video Tools</span>
        </button>
        <button 
          className={`skills-tab-btn ${activeTab === 'creative' ? 'active' : ''}`}
          onClick={() => setActiveTab('creative')}
        >
          <Sparkles size={16} />
          <span>AI &amp; Creatives</span>
        </button>
      </div>

      <div className="category-intro animate-fade-in delay-200">
        <h3>{activeCategory.title}</h3>
        <p>{activeCategory.desc}</p>
      </div>

      {/* Interactive Skills Grid */}
      <div className="skills-grid-gallery animate-fade-in delay-300">
        {activeCategory.skills.map((skill, index) => (
          <div 
            className="skill-gallery-card fashion-card" 
            key={`${activeTab}-${skill.name}`}
            style={{ 
              '--skill-glow': skill.color,
              animationDelay: `${index * 0.05}s` 
            }}
          >
            <div className="skill-card-inner">
              <div className="skill-icon-wrap" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h4 className="skill-card-name">{skill.name}</h4>
              <p className="skill-card-desc">{skill.desc}</p>
            </div>
            {/* Gloss hover glow shine */}
            <div className="card-glare"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
