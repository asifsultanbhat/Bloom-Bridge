import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent",
    text: "The IEP consultation was a game-changer for my son. We finally have a plan that the school understands and that actually helps him thrive."
  },
  {
    name: "David K.",
    role: "School Administrator",
    text: "Gousia's behavioral support plans are thorough and evidence-based. She bridges the gap between clinical needs and classroom reality perfectly."
  },
  {
    name: "Elena R.",
    role: "Parent",
    text: "The developmental assessment gave us the clarity we had been seeking for years. Her empathetic approach made a difficult process much easier."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: 'var(--space-lg) 0' }}>
      <div className="container">
        <div className="testimonials-heading" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>Stories of Success</h2>
        </div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="glass interactive-card testimonial-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', position: 'relative', backgroundColor: 'rgba(255,255,255,0.82)', border: '1px solid rgba(18, 24, 31, 0.08)' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', opacity: 0.16, color: 'var(--primary)' }}>
                <Quote size={48} />
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--on-background)', lineHeight: '1.8', fontWeight: 500 }}>
                "{t.text}"
              </p>
              <div>
                <p style={{ fontWeight: 800, color: 'var(--on-background)' }}>{t.name}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--primary-dark)', fontWeight: 700 }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .testimonials-heading {
            text-align: left !important;
            margin-bottom: 2rem !important;
          }
          .testimonials-heading h2 {
            font-size: 1.85rem !important;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .testimonial-card {
            padding: 1.35rem !important;
          }
          .testimonial-card p {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
