import React from 'react';
import { Search, ClipboardList, TrendingUp } from 'lucide-react';

const processBackgrounds = [
  {
    image: '/assets/optimized/bg-eyes-vibrant.jpg',
    position: 'center 50%',
    origin: '38% 46%',
    fromX: '-1.8%',
    toX: '0.9%',
    fromY: '-1.2%',
    toY: '0.5%',
    fromScale: '1.04',
    toScale: '1.16',
  },
  {
    image: '/assets/optimized/bg-eyes-dreamy.jpg',
    position: 'center 75%',
    origin: '60% 54%',
    fromX: '1.2%',
    toX: '-0.9%',
    fromY: '0.8%',
    toY: '-0.4%',
    fromScale: '1.05',
    toScale: '1.15',
  },
  {
    image: '/assets/optimized/bg-eyes-intellectual.jpg',
    position: 'center 50%',
    origin: '52% 44%',
    fromX: '-0.8%',
    toX: '1.1%',
    fromY: '1.1%',
    toY: '-0.6%',
    fromScale: '1.03',
    toScale: '1.14',
  },
];

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
  const [activeBg, setActiveBg] = React.useState(0);

  React.useEffect(() => {
    processBackgrounds.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveBg((current) => (current + 1) % processBackgrounds.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="process" style={{
      padding: 'var(--space-lg) 0',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#f8fafc' 
    }}>
      <div className="process-backgrounds" aria-hidden="true">
        {processBackgrounds.map((background, index) => (
          <div
            key={background.image}
            className={`process-background ${index === activeBg ? 'active' : ''}`}
            style={{
              '--motion-origin': background.origin,
              '--from-x': background.fromX,
              '--to-x': background.toX,
              '--from-y': background.fromY,
              '--to-y': background.toY,
              '--from-scale': background.fromScale,
              '--to-scale': background.toScale,
            }}
          >
            <img
              src={background.image}
              alt=""
              style={{ objectPosition: background.position }}
            />
          </div>
        ))}
        <div className="process-background-overlay" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="process-heading" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--secondary)', marginBottom: '1.5rem', fontWeight: '800', textShadow: '0 2px 4px rgba(255,255,255,0.5)' }}>How We Work</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--on-background)', fontSize: '1.15rem', fontWeight: '600' }}>
            A structured, empathetic approach to ensuring your child reaches their full potential through evidence-based care.
          </p>
        </div>

        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', position: 'relative' }}>
          {steps.map((step, i) => (
            <div key={i} className="glass interactive-card process-card" style={{
              textAlign: 'center',
              position: 'relative',
              padding: '3rem 2rem',
              borderRadius: 'var(--radius-lg)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '1px solid rgba(18, 24, 31, 0.08)',
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(255, 255, 255, 0.78)'
            }}>
              {/* Step Number */}
              <span style={{
                position: 'absolute',
                top: '1rem',
                left: '1.5rem',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '3.5rem',
                fontWeight: 900,
                color: 'var(--primary)',
                opacity: 0.1,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                userSelect: 'none'
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(123, 158, 135, 0.12)',
                color: 'var(--primary)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                position: 'relative',
                boxShadow: '0 8px 16px -4px rgba(123, 158, 135, 0.1)'
              }}>
                {step.icon}
              </div>
              <h3 style={{ marginBottom: '1.25rem', color: 'var(--secondary)', fontSize: '1.5rem', fontWeight: '700' }}>{step.title}</h3>
              <p style={{ color: 'var(--on-background)', fontSize: '1rem', lineHeight: '1.7', fontWeight: 500 }}>{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="connector" style={{
                  position: 'absolute',
                  top: '50px',
                  right: '-50%',
                  width: '100%',
                  height: '2px',
                  borderTop: '2px dashed var(--primary)',
                  opacity: 0.2,
                  zIndex: 1
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-backgrounds {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .process-background {
          position: absolute;
          inset: 0;
          opacity: 0;
          overflow: hidden;
          transform: scale(1.04);
          filter: blur(12px) brightness(0.88) saturate(0.88);
          transition:
            opacity 1.55s cubic-bezier(0.16, 1, 0.3, 1),
            transform 1.55s cubic-bezier(0.16, 1, 0.3, 1),
            filter 1.55s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform, filter;
        }
        .process-background.active {
          opacity: 1;
          transform: scale(1);
          filter: blur(0) brightness(1) saturate(1);
        }
        .process-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: translate3d(var(--from-x), var(--from-y), 0) scale(var(--from-scale));
          transform-origin: var(--motion-origin);
          will-change: transform;
        }
        .process-background.active img {
          animation: processZoom 3s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        .process-background-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(248, 250, 252, 0.28), rgba(248, 250, 252, 0.2)),
            radial-gradient(circle at top, rgba(255, 255, 255, 0.18), transparent 54%),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05), transparent 26%, transparent 74%, rgba(18, 24, 31, 0.08));
        }
        @keyframes processZoom {
          0% {
            transform: translate3d(var(--from-x), var(--from-y), 0) scale(var(--from-scale));
          }
          100% {
            transform: translate3d(var(--to-x), var(--to-y), 0) scale(var(--to-scale));
          }
        }
        @media (max-width: 1024px) {
          .connector { display: none; }
        }
        @media (max-width: 768px) {
          #process {
            padding: 3rem 0 !important;
          }
          .process-heading {
            margin-bottom: 2rem !important;
            text-align: left !important;
          }
          .process-heading h2 {
            font-size: 2rem !important;
            margin-bottom: 1rem !important;
          }
          .process-heading p {
            font-size: 1rem !important;
            font-weight: 600 !important;
          }
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .process-card {
            padding: 1.45rem 1.2rem !important;
            text-align: left !important;
          }
          .process-card > div:first-child {
            width: 58px !important;
            height: 58px !important;
            margin: 0 0 1rem !important;
          }
          .process-card h3 {
            font-size: 1.2rem !important;
            margin-bottom: 0.7rem !important;
          }
          .process-card p {
            font-size: 0.95rem !important;
          }
          .process-background-overlay {
            background:
              linear-gradient(rgba(248, 250, 252, 0.5), rgba(248, 250, 252, 0.42)),
              linear-gradient(90deg, rgba(255, 255, 255, 0.16), transparent 72%);
          }
          .process-background {
            filter: blur(7px) brightness(0.9) saturate(0.9);
            transition:
              opacity 1.25s cubic-bezier(0.16, 1, 0.3, 1),
              transform 1.25s cubic-bezier(0.16, 1, 0.3, 1),
              filter 1.25s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .process-background.active img {
            animation: processZoomMobile 3s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          }
        }
        @keyframes processZoomMobile {
          0% {
            transform: translate3d(calc(var(--from-x) * 0.55), calc(var(--from-y) * 0.55), 0) scale(calc(var(--from-scale) - 0.02));
          }
          100% {
            transform: translate3d(calc(var(--to-x) * 0.55), calc(var(--to-y) * 0.55), 0) scale(calc(var(--to-scale) - 0.03));
          }
        }
      `}</style>
    </section>
  );
};


export default Process;
