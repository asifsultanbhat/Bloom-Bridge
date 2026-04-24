import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ paddingTop: '120px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div className="hero-content">
          <p className="section-kicker" style={{ marginBottom: '1rem' }}>Rehabilitation Psychology & Special Education</p>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
            Empowering <span className="text-gradient">Growth</span>, Building Connections.
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--on-background)', fontWeight: 500, maxWidth: '500px' }}>
            Professional Rehabilitation Psychology & Special Education services tailored to neurodiverse children and young adults.
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#booking" className="btn btn-primary">
              Book Appointment <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#services" className="btn btn-outline">
              View Services
            </a>
          </div>
          <div className="hero-trust" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem', marginTop: '2rem', maxWidth: '560px' }}>
            {['IEP planning', 'ASD assessments', 'Behavior support'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--on-background)', fontSize: '0.92rem', fontWeight: 700 }}>
                <CheckCircle2 size={18} color="var(--primary)" />
                <span>{item}</span>
              </div>
            ))}
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
              alt="Child-centered therapy and learning support at Bloom & Bridge" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Decorative Elements */}
          <div className="glass hero-badge" style={{ 
            position: 'absolute', 
            bottom: '-20px', 
            left: '-20px', 
            padding: '1.5rem', 
            borderRadius: 'var(--radius-md)',
            maxWidth: '200px',
            backgroundColor: 'rgba(255,255,255,0.82)'
          }}>
            <p style={{ fontWeight: 800, color: 'var(--primary-dark)', marginBottom: '0.2rem' }}>8+ Years</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--on-background)', fontWeight: 600 }}>Professional Expertise</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero .container { grid-template-columns: 1fr; text-align: center; gap: 3rem; }
          .hero-content p { margin-left: auto; margin-right: auto; }
          .hero-content h1 { font-size: 2.8rem; }
          .hero-content div { justify-content: center; }
          .hero-trust { margin-left: auto; margin-right: auto; }
          .hero-image { order: 2; }
        }
        @media (max-width: 640px) {
          .hero {
            align-items: flex-start !important;
            min-height: auto !important;
            padding-top: 88px !important;
            padding-bottom: 2.5rem !important;
          }
          .hero .container { gap: 2rem !important; }
          .hero-content { text-align: left; }
          .hero-content p { margin-left: 0; margin-right: 0; }
          .hero-content h1 {
            font-size: 2.12rem !important;
            line-height: 1.08 !important;
            margin-bottom: 1rem !important;
          }
          .hero-content > p:not(.section-kicker) {
            font-size: 1.02rem !important;
            margin-bottom: 1.45rem !important;
          }
          .hero-actions {
            gap: 0.75rem !important;
            width: 100%;
          }
          .hero-content div { justify-content: flex-start; }
          .hero-trust {
            grid-template-columns: 1fr !important;
            gap: 0.65rem !important;
            margin-top: 1.25rem !important;
            text-align: left;
          }
          .hero-trust > div {
            justify-content: flex-start !important;
            padding: 0.72rem 0.85rem;
            border: 1px solid rgba(74, 99, 82, 0.14);
            border-radius: var(--radius-md);
            background: rgba(255, 255, 255, 0.68);
          }
          .hero-image > div:first-child {
            height: 260px !important;
            border-radius: var(--radius-lg) !important;
          }
          .hero-badge {
            position: relative !important;
            left: auto !important;
            bottom: auto !important;
            margin-top: 0.75rem;
            max-width: 100% !important;
            padding: 1rem !important;
          }
        }
        @media (max-width: 360px) {
          .hero-content h1 { font-size: 1.95rem !important; }
          .hero-image > div:first-child { height: 230px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
