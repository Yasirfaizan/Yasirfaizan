import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    type: 'work',
    title: 'MERN Stack Developer',
    company: 'S.M.I.T Mass IT Training Center',
    date: '2024 - 2026',
    description: 'Developing and maintaining responsive web applications using React and modern CSS frameworks. Collaborating with cross-functional teams to deliver high-quality products.'
  },
  {
    id: 2,
    type: 'education',
    title: 'Bachelor of Computer Science',
    company: 'University of Technology',
    date: '2025 - 2029',
    description: 'Under-Graduated. Coursework focused on software engineering, data structures, algorithms, and web technologies.'
  },
  {
    id: 4,
    type: 'education',
    title: 'Diploma in Information Technology (DIT)',
    company: 'IT Training Institute',
    date: '2024 - 2025',
    description: 'Learned video editing, MS Office applications, basic computer programming, and fundamental IT concepts.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header animate-fade-in">
        <h2 className="section-title">Where I've Been</h2>
        <div className="title-line"></div>
      </div>

      <div className="timeline-container">
        {experienceData.map((item, index) => (
          <div 
            key={item.id} 
            className={`timeline-item animate-fade-in`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="timeline-dot">
              {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
            </div>
            
            <div className="timeline-content fashion-card">
              <div className="timeline-header">
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-date">
                  <Calendar size={14} className="calendar-icon" />
                  {item.date}
                </span>
              </div>
              <h4 className="timeline-company">{item.company}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
