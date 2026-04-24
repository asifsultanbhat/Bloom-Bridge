import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent of a 7-year-old",
    location: "Hyderabad",
    text: "The IEP consultation gave us language, structure, and confidence. For the first time, school meetings felt clear and focused on practical support."
  },
  {
    name: "Nisha R.",
    role: "Parent of a teenager",
    location: "Online Consultation",
    text: "The assessment process was calm and respectful. We understood our child's strengths better and left with a plan we could actually follow at home."
  },
  {
    name: "Aarav Learning Centre",
    role: "School Support Team",
    location: "Secunderabad",
    text: "The behavior support recommendations were specific, realistic, and easy for teachers to implement. The bridge between family and classroom became smoother."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: 'var(--space-lg) 0' }}>
      <div className="container">
        <div className="testimonials-heading" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-kicker" style={{ marginBottom: '0.75rem' }}>Parent Insights</p>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>Stories of Success</h2>
        </div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="glass interactive-card testimonial-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', position: 'relative', backgroundColor: 'rgba(255,255,255,0.82)', border: '1px solid rgba(18, 24, 31, 0.08)' }}>
              <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', opacity: 0.16, color: 'var(--primary)' }}>
                <Quote size={48} />
              </div>
              <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--accent)', marginBottom: '1rem' }} aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" />
                ))}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--on-background)', lineHeight: '1.8', fontWeight: 500 }}>
                "{t.text}"
              </p>
              <div>
                <p style={{ fontWeight: 800, color: 'var(--on-background)' }}>{t.name}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--primary-dark)', fontWeight: 700 }}>{t.role}</p>
                <p style={{ fontSize: '0.78rem', color: 'var(--on-background)', fontWeight: 600, marginTop: '0.25rem', opacity: 0.8 }}>{t.location}</p>
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
