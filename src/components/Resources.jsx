import React from 'react';
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>Parent Insights</h2>
            <p style={{ color: 'var(--on-surface)', marginTop: '0.5rem' }}>Practical resources for your family's journey.</p>
          </div>
          <a href="#" className="btn btn-outline" style={{ padding: '0.5rem 1.5rem' }}>View All Resources</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {resources.map((r, i) => (
            <div key={i} className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-md)', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ color: 'var(--primary)' }}>{r.icon}</div>
              <div>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>{r.category}</span>
                <h4 style={{ fontSize: '1.1rem', marginTop: '0.2rem' }}>{r.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
