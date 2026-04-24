import React from 'react';
import { Search, ClipboardList, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: "Initial Consultation",
    desc: "A focused discussion to understand your child's unique needs, challenges, and goals.",
    icon: <Search size={32} />
  },
  {
    title: "Detailed Assessment",
    desc: "Using industry-leading tools like MISC and CARS to create a comprehensive developmental profile.",
    icon: <ClipboardList size={32} />
  },
  {
    title: "Personalized Support",
    desc: "Implementation of IEPs and behavioral strategies designed for long-term success.",
    icon: <TrendingUp size={32} />
  }
];

const Process = () => {
  const [currentBg, setCurrentBg] = React.useState(0);
  const [nextBg, setNextBg] = React.useState(1);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  
  const backgrounds = [
    '/assets/bg-eyes-vibrant.png',
    '/assets/bg-eyes-dreamy.png',
    '/assets/bg-eyes-intellectual.png'
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      // Wait for blur to peak
      setTimeout(() => {
        setCurrentBg(nextBg);
        setNextBg((nextBg + 1) % backgrounds.length);
        setIsTransitioning(false);
      }, 1000);
      
    }, 5000);
    return () => clearInterval(timer);
  }, [nextBg]);

  return (
    <section id="process" style={{ 
      padding: 'var(--space-lg) 0', 
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#fff'
    }}>
      {/* Background Layer 1 (Current) */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url("${backgrounds[currentBg]}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 85%',
        backgroundAttachment: 'fixed',
        filter: isTransitioning ? 'blur(15px) scale(1.05)' : 'blur(0px) scale(1)',
        opacity: isTransitioning ? 0.8 : 1,
        transition: 'filter 1.2s ease-in-out, opacity 1.2s ease-in-out, transform 1.2s ease-in-out',
        zIndex: 1
      }} />

      {/* Background Layer 2 (Next - hidden until transition) */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url("${backgrounds[nextBg]}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 85%',
        backgroundAttachment: 'fixed',
        opacity: 0,
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '1rem' }}>How We Work</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--on-surface)' }}>
            A structured, empathetic approach to ensuring your child reaches their full potential.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', position: 'relative' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: 'var(--primary)', 
                color: 'white', 
                borderRadius: 'var(--radius-full)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: 'var(--shadow)',
                zIndex: 2,
                position: 'relative'
              }}>
                {step.icon}
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--on-surface)', fontSize: '0.95rem' }}>{step.desc}</p>
              
              {i < steps.length - 1 && (
                <div className="connector" style={{ 
                  position: 'absolute', 
                  top: '40px', 
                  right: '-50%', 
                  width: '100%', 
                  height: '2px', 
                  borderTop: '2px dashed var(--primary)', 
                  opacity: 0.3,
                  zIndex: 1
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .connector { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Process;
