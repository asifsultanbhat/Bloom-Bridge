import React from 'react';
import { FileText, Brain, Heart, Users, Microscope, Baby } from 'lucide-react';

const services = [
  {
    title: 'Early Intervention',
    desc: 'Critical support for children aged 0-6 to address developmental delays and ensure a strong foundation.',
    icon: <Baby size={32} />,
    tag: 'Highly Recommended'
  },
  {
    title: 'IEP & School Support',
    desc: 'Individualized Education Programs that bridge the gap between classroom challenges and student success.',
    icon: <FileText size={32} />
  },
  {
    title: 'Behavioral Management',
    desc: 'Evidence-based strategies to manage complex behaviors and promote emotional regulation.',
    icon: <Users size={32} />
  },
  {
    title: 'Rehabilitation Counseling',
    desc: 'Holistic support for neurodiverse individuals to navigate social, emotional, and physical transitions.',
    icon: <Heart size={32} />
  }
];

const assessments = [
  { name: 'IQ & Cognitive', tool: 'MISC, CPM, DST' },
  { name: 'Autism & ASD', tool: 'CARS, ISAA' },
  { name: 'Social Maturity', tool: 'VSMS' },
  { name: 'Behavioral', tool: 'Vanderbilt, CARS-2' }
];

const Services = () => {
  return (
    <section id="services" style={{ 
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url("/assets/bg-learning.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '1rem' }}>Expert Services</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--on-surface)' }}>
            Bridging clinical psychology with specialized education to provide a holistic support system.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {services.map((s, i) => (
            <div key={i} className="glass" style={{ 
              padding: '2.5rem', 
              borderRadius: 'var(--radius-lg)', 
              position: 'relative',
              transition: 'transform 0.3s ease'
            }}>
              {s.tag && (
                <span style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  right: '1rem', 
                  fontSize: '0.7rem', 
                  backgroundColor: 'var(--accent)', 
                  color: 'white', 
                  padding: '0.2rem 0.6rem', 
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700
                }}>
                  {s.tag}
                </span>
              )}
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: 'rgba(123, 158, 135, 0.1)', 
                borderRadius: 'var(--radius-md)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--primary)'
              }}>
                {s.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--on-surface)', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Microscope size={32} color="var(--secondary)" />
            <h3 style={{ fontSize: '1.8rem', color: "var(--secondary)" }}>The Assessment Suite</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {assessments.map((a, i) => (
              <div key={i} style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1.5rem' }}>
                <p style={{ fontWeight: 700, marginBottom: '0.3rem' }}>{a.name}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--on-surface)', opacity: 0.8 }}>{a.tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .glass:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Services;
