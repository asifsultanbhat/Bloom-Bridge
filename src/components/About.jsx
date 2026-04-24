import React from 'react';
import { Award, BookOpen, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
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
        </div>

        <div>
          <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontSize: '0.9rem' }}>
            The Expert Behind the Bridge
          </h4>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>
            Gousia Ahmad
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--on-surface)' }}>
            A dedicated Rehabilitation Psychologist and Special Educator with over 8 years of experience. Gousia specializes in supporting neurodiverse children and young adults through evidence-based psychological interventions and individualized education planning.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ color: 'var(--primary)' }}><Award size={24} /></div>
              <div>
                <p style={{ fontWeight: 700 }}>Certifications</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--on-surface)' }}>PGD in Rehab Psych, MA Clinical Psych, B.Ed</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ color: 'var(--primary)' }}><BookOpen size={24} /></div>
              <div>
                <p style={{ fontWeight: 700 }}>Expertise</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--on-surface)' }}>IEP, Behavior Support, Neurodiversity</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--on-surface)' }}>
              "My mission is to create a supportive bridge between clinical psychology and educational success, ensuring every child has the tools they need to bloom."
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #about .container { grid-template-columns: 1fr; }
          #about div:first-child { display: none; }
        }
      `}</style>
    </section>
  );
};

import { Users } from 'lucide-react'; // Ensure Users is imported
export default About;
