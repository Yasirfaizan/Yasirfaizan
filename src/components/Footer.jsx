import { useState } from 'react';
import { Github, Linkedin, Facebook, MessageCircle, Send } from 'lucide-react';
import './Footer.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_g283rz7';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_y04z4y6';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'X2dqKDDVEnIBvJfMS';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSending, setIsSending] = useState(false);

  const isEmailJsConfigured = EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailJsConfigured) {
      setStatus({ type: 'error', text: 'Email service is temporarily unavailable. Please try again in a moment.' });
      setStatus({ type: 'error', text: 'Contact form is not configured yet. Add VITE_EMAILJS_* values in .env.local.' });
      return;
    }

    setIsSending(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
        }),
      });

      if (!response.ok) throw new Error('Failed to send message.');
      setStatus({ type: 'success', text: 'Message sent successfully. Thank you for reaching out!' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', text: 'Unable to send right now. Please use email/WhatsApp for now.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-content">
        <div className="footer-left">
          <a href="mailto:yasirfaizan680@gmail.com" className="attractive-email">yasirfaizan680@gmail.com</a>
        </div>

        <div className="footer-right">
          <div className="social-links-circle">
            <a href="https://github.com/Yasirfaizan" target="_blank" rel="noreferrer" className="social-icon-circle" aria-label="Github"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/yasir-faizan-shalmani/" target="_blank" rel="noreferrer" className="social-icon-circle" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="https://www.facebook.com/yasir.faizan.680078/" target="_blank" rel="noreferrer" className="social-icon-circle" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="https://wa.me/923341536579" target="_blank" rel="noreferrer" className="social-icon-circle whatsapp" aria-label="WhatsApp"><MessageCircle size={20} /></a>
          </div>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <p className="contact-kicker">Let&apos;s build something together</p>
        <h3>Contact Me</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Write your message..." rows="4" value={formData.message} onChange={handleChange} required />
          <button type="submit" className="contact-submit" disabled={isSending}>{isSending ? 'Sending...' : 'Send Message'} <Send size={16} /></button>
        </form>
        {status.text && <p className={`form-status ${status.type}`}>{status.text}</p>}
      </div>

      <div className="footer-bottom-info">
        <p className="copyright">© {currentYear} All rights reserved.</p>
      </div>

      <div className="footer-bg-name-container">
        <h1 className="jumping-bg-name">{'YASIR FAIZAN'.split('').map((char, index) => (<span key={index} style={{ animationDelay: `${index * 0.15}s` }}>{char === ' ' ? '\u00A0' : char}</span>))}</h1>
      </div>
    </footer>
  );
};

export default Footer;
