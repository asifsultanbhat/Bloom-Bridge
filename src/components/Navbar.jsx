import React from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Flower2 size={28} color="var(--primary)" />
          <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.2rem', color: 'var(--on-background)' }}>
            Bloom & Bridge
          </span>
        </div>

        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
          <a href="#services" style={{ fontWeight: 500 }}>Services</a>
          <a href="#about" style={{ fontWeight: 500 }}>About</a>
          <a href="#booking" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Book Now</a>
        </div>

        <div className="mobile-toggle" style={{ display: 'none' }}>
          <Menu />
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
