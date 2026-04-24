import { BookOpen, HelpCircle, Lightbulb } from 'lucide-react';

const resources = [
  {
    title: "Understanding ADHD",
    category: "Guide",
    icon: <Lightbulb size={24} />
  },
  {
    title: "Navigating IEPs",
    category: "Checklist",
    icon: <BookOpen size={24} />
  },
  {
    title: "Behavior Support at Home",
    category: "Tips",
    icon: <HelpCircle size={24} />
  }
];

const Resources = () => {
  return (
    <section id="resources" style={{ padding: 'var(--space-lg) 0' }}>
      <div className="container">
        <div className="resources-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>Parent Insights</h2>
            <p style={{ color: 'var(--on-background)', marginTop: '0.5rem', fontWeight: 500 }}>Practical resources for your family's journey.</p>
          </div>
          <a href="#" className="btn btn-outline" style={{ padding: '0.5rem 1.5rem' }}>View All Resources</a>
        </div>

        <div className="resources-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {resources.map((r, i) => (
            <div key={i} className="glass interactive-card resource-card" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1.5rem', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.82)', border: '1px solid rgba(18, 24, 31, 0.08)' }}>
              <div style={{ color: 'var(--primary)' }}>{r.icon}</div>
              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--primary-dark)', fontWeight: 800, letterSpacing: '1px' }}>{r.category}</span>
                <h4 style={{ fontSize: '1.1rem', marginTop: '0.2rem', color: 'var(--on-background)' }}>{r.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .resources-heading {
            align-items: stretch !important;
            flex-direction: column;
            margin-bottom: 2rem !important;
          }
          .resources-heading h2 {
            font-size: 1.85rem !important;
          }
          .resources-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .resource-card {
            align-items: flex-start !important;
            gap: 1rem !important;
            padding: 1.25rem !important;
          }
          .resource-card h4 {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Resources;
