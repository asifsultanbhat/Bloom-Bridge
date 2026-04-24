import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contact } from '../data/contact';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-brand">
          <span>{contact.practiceName}</span>
        </div>

        <p>
          &copy; {new Date().getFullYear()} {contact.practiceName}. Professional rehabilitation psychology and special education support.
        </p>

        <div className="footer-contact-grid" aria-label="Contact details">
          <a href={`mailto:${contact.email}`}>
            <Mail size={18} />
            {contact.email}
          </a>
          <a href={`tel:${contact.phoneHref}`}>
            <Phone size={18} />
            {contact.phoneDisplay}
          </a>
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <span>
            <MapPin size={18} />
            {contact.location}
          </span>
          <span>
            <Clock size={18} />
            {contact.hours}
          </span>
        </div>

        <div className="footer-links">
          <a href="#booking">Book Consultation</a>
          <a href="#faq">FAQs</a>
          <a href="#services">Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
