import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ paddingTop: '120px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div className="hero-content">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
            Empowering <span className="text-gradient">Growth</span>, Building Connections.
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--on-surface)', maxWidth: '500px' }}>
            Professional Rehabilitation Psychology & Special Education services tailored to neurodiverse children and young adults.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#booking" className="btn btn-primary">
              Book Appointment <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#services" className="btn btn-outline">
              View Services
            </a>
          </div>
        </div>
        
        <div className="hero-image" style={{ position: 'relative' }}>
          <div style={{ 
            width: '100%', 
            height: '500px', 
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden',
            boxShadow: 'var(--shadow)'
          }}>
            <img 
              src="/hero.png" 
              alt="Bloom & Bridge Healing" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Decorative Elements */}
          <div className="glass" style={{ 
            position: 'absolute', 
            bottom: '-20px', 
            left: '-20px', 
            padding: '1.5rem', 
            borderRadius: 'var(--radius-md)',
            maxWidth: '200px'
          }}>
            <p style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: '0.2rem' }}>8+ Years</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--on-surface)' }}>Professional Expertise</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero .container { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .hero-content p { margin-left: auto; margin-right: auto; }
          .hero-content h1 { font-size: 2.8rem; }
          .hero-content div { justify-content: center; }
          .hero-image { order: -1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
