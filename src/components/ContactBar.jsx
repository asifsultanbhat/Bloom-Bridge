import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import { contact } from '../data/contact';

const ContactBar = () => {
  return (
    <div className="mobile-contact-bar" aria-label="Quick contact options">
      <a href={contact.whatsappHref} target="_blank" rel="noreferrer" aria-label="Message Bloom and Bridge on WhatsApp">
        <MessageCircle size={20} />
        WhatsApp
      </a>
      <a href={`tel:${contact.phoneHref}`} aria-label={`Call ${contact.practiceName}`}>
        <Phone size={20} />
        Call
      </a>
      <a href="#booking" aria-label="Book a consultation">
        <CalendarCheck size={20} />
        Book
      </a>
    </div>
  );
};

export default ContactBar;
