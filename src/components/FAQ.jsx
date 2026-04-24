import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "What is an IEP and why does my child need one?",
    a: "An Individualized Education Program (IEP) is a personalized plan designed for students with special needs to ensure they receive specific support and services to succeed in school."
  },
  {
    q: "How long does a psychological assessment take?",
    a: "Depending on the complexity, an assessment can take anywhere from 2 to 4 sessions, including initial screening, formal testing, and a detailed feedback meeting."
  },
  {
    q: "Do you offer remote consultations?",
    a: "Yes, we offer remote-friendly sessions for counseling and IEP consultations to support families regardless of their location."
  },
  {
    q: "What developmental tools do you use?",
    a: "We use globally recognized standards including MISC, VSMS, CARS, ISAA, and more, tailored to each child's specific age and symptoms."
  }
];

const FAQ = () => {
  const [active, setActive] = React.useState(null);

  return (
    <section id="faq" style={{ 
      backgroundImage: 'linear-gradient(rgba(249, 247, 242, 0.7), rgba(249, 247, 242, 0.7)), url("/assets/bg-faq.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="glass" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <button 
                onClick={() => setActive(active === i ? null : i)}
                style={{ 
                  width: '100%', 
                  padding: '1.5rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'Outfit',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--on-background)'
                }}
              >
                {faq.q}
                {active === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {active === i && (
                <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--on-surface)', lineHeight: '1.6' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
