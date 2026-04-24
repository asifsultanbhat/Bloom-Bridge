import React from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#resources', label: 'Resources' },
  { href: '#faq', label: 'FAQ' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, backgroundColor: 'rgba(249, 247, 242, 0.82)' }}>
      <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a className="nav-brand" href="#" aria-label="Bloom & Bridge home" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Flower2 size={28} color="var(--primary)" />
          <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.2rem', color: 'var(--on-background)' }}>
            Bloom & Bridge
          </span>
        </a>

        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ fontWeight: 500 }}>{link.label}</a>
          ))}
          <a href="#booking" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Book Now</a>
        </div>

        <button
          className="mobile-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          style={{
            display: 'none',
            color: 'var(--secondary)',
            background: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.6rem',
            cursor: 'pointer'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a href="#booking" onClick={closeMenu} className="btn btn-primary">Book Now</a>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          nav .container { height: 64px !important; }
          .nav-brand span { font-size: 1.05rem !important; }
          .desktop-menu { display: none !important; }
          .mobile-toggle {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            min-width: 44px;
            min-height: 44px;
          }
          .mobile-menu {
            display: grid;
            gap: 0.2rem;
            max-height: 0;
            overflow: hidden;
            padding: 0 1rem;
            background: rgba(249, 247, 242, 0.96);
            border-top: 1px solid rgba(0,0,0,0.06);
            transition: max-height 0.25s ease, padding 0.25s ease;
          }
          .mobile-menu.open {
            max-height: 420px;
            padding: 0.65rem 1rem 1rem;
          }
          .mobile-menu a:not(.btn) {
            min-height: 44px;
            padding: 0.75rem 0;
            font-weight: 700;
            color: var(--secondary);
          }
          .mobile-menu .btn {
            margin-top: 0.35rem;
          }
        }
        @media (max-width: 360px) {
          .nav-brand span { font-size: 0.95rem !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
