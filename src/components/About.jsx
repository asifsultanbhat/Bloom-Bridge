import { Award, BookOpen, Clock, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>
        <div className="about-visual" style={{ position: 'relative' }}>
          <div style={{ 
            width: '100%', 
            height: '600px', 
            borderRadius: 'var(--radius-lg)', 
            backgroundColor: 'var(--primary)',
            overflow: 'hidden'
          }}>
            {/* Placeholder for Gousia's professional photo */}
            <div style={{ 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 600,
              flexDirection: 'column',
              gap: '1rem',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))'
            }}>
              <Users size={64} />
              Gousia Ahmad
            </div>
          </div>
          <div className="glass about-stat" style={{
            position: 'absolute',
            right: '-1.5rem',
            bottom: '2rem',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(255,255,255,0.72)',
            maxWidth: '220px'
          }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.35rem' }}>
              <Clock size={18} /> 8+ years
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--on-background)', fontWeight: 500 }}>Clinical and education support for growing families.</p>
          </div>
        </div>

        <div className="about-copy">
          <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>
            The Expert Behind the Bridge
          </h4>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
            Gousia Ahmad
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--on-background)', fontWeight: 500 }}>
            A dedicated Rehabilitation Psychologist and Special Educator with over 8 years of experience. Gousia specializes in supporting neurodiverse children and young adults through evidence-based psychological interventions and individualized education planning.
          </p>

          <div className="about-highlights" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ color: 'var(--primary)' }}><Award size={24} /></div>
              <div>
                <p style={{ fontWeight: 700 }}>Certifications</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--on-background)', fontWeight: 500 }}>PGD in Rehab Psych, MA Clinical Psych, B.Ed</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ color: 'var(--primary)' }}><BookOpen size={24} /></div>
              <div>
                <p style={{ fontWeight: 700 }}>Expertise</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--on-background)', fontWeight: 500 }}>IEP, Behavior Support, Neurodiversity</p>
              </div>
            </div>
          </div>

          <div className="about-quote" style={{ marginTop: '3rem', padding: '2rem', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.78)', border: '1px solid rgba(0,0,0,0.08)' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--on-background)', fontWeight: 500 }}>
              "My mission is to create a supportive bridge between clinical psychology and educational success, ensuring every child has the tools they need to bloom."
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #about .container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-visual > div:first-child {
            height: 340px !important;
          }
          .about-stat {
            right: 1rem !important;
            bottom: 1rem !important;
          }
        }
        @media (max-width: 640px) {
          #about .container {
            gap: 2rem !important;
          }
          .about-visual > div:first-child {
            height: 260px !important;
            border-radius: var(--radius-lg) !important;
          }
          .about-stat {
            position: relative !important;
            right: auto !important;
            bottom: auto !important;
            max-width: 100% !important;
            margin-top: 0.75rem;
            padding: 1rem !important;
            background-color: rgba(255,255,255,0.84) !important;
          }
          .about-copy h4 {
            font-size: 0.72rem !important;
            letter-spacing: 1.4px !important;
            margin-bottom: 0.75rem !important;
          }
          .about-copy h2 {
            font-size: 1.95rem !important;
            margin-bottom: 1rem !important;
          }
          .about-copy > p {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
          }
          .about-highlights { grid-template-columns: 1fr !important; }
          .about-quote {
            margin-top: 2rem !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
