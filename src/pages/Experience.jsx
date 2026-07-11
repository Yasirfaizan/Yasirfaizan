import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    type: 'work',
    title: 'Web Developer',
    company: 'Sqodex Technologies',
    date: 'June 2026 - Present',
    description: 'Designing, developing, and deploying robust web applications and interactive systems, contributing to software logic and client satisfaction in Peshawar, Pakistan.'
  },
  {
    id: 2,
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'Government Superior Science College Peshawar (University of Peshawar Affiliation)',
    date: 'Aug 2025 - Aug 2029',
    description: 'Undergraduate student in Computer Science. Focus on computational thinking, data systems, and general software development.'
  },
  {
    id: 3,
    type: 'education',
    title: 'MERN Stack Development Certification',
    company: 'S.M.I.T (Saylani Mass I.T Training Center)',
    date: 'Nov 2024 - June 2026',
    description: 'Certified in MERN Stack Development. Extensive hands-on practice building responsive web interfaces, full-stack endpoints, and database models.'
  },
  {
    id: 4,
    type: 'education',
    title: '(DIT) Diploma in IT',
    company: 'Excellence Academy',
    date: 'Aug 2024 - Aug 2025',
    description: 'Learned graphic design concepts, document processing, basic computer structures, and fundamental IT configurations.'
  }
];

const certificationsData = [
  {
    title: 'What Is Generative AI?',
    issuer: 'Google / Coursera',
    description: 'Understanding the fundamentals of Generative AI, large language models, and their real-world applications.'
  },
  {
    title: 'Your Top AI Questions Answered: AI Literacy for Everyone',
    issuer: 'LinkedIn Learning / Microsoft',
    description: 'Comprehensive overview of artificial intelligence concepts, tools, and general AI literacy.'
  },
  {
    title: 'Generative AI: The Evolution of Thoughtful Online Search',
    issuer: 'LinkedIn Learning',
    description: 'Explored next-generation search systems, AI-powered semantic architectures, and advanced information retrieval.'
  },
  {
    title: 'Ethics in the Age of Generative AI',
    issuer: 'Microsoft',
    description: 'Studying the ethical design principles, safety guidelines, and responsible deployment of AI models.'
  },
  {
    title: 'Everyday AI Concepts',
    issuer: 'LinkedIn / Microsoft',
    description: 'Applying artificial intelligence tools, productivity automation, and prompt engineering in daily workflows.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header animate-fade-in">
        <h2 className="section-title">Where I\'ve Been</h2>
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

      {/* Certifications Subsection */}
      <div className="section-header animate-fade-in" style={{ marginTop: '5rem' }}>
        <h2 className="section-title">Certifications &amp; Credentials</h2>
        <div className="title-line"></div>
      </div>

      <div className="certifications-grid animate-fade-in delay-200">
        {certificationsData.map((cert, index) => (
          <div key={index} className="cert-card fashion-card">
            <div className="cert-icon-container">
              <Award size={24} className="cert-award-icon" />
            </div>
            <div className="cert-details">
              <h3 className="cert-title">{cert.title}</h3>
              <span className="cert-issuer">{cert.issuer}</span>
              <p className="cert-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
