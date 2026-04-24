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

  const toggleFaq = (index) => {
    if (window.matchMedia('(hover: hover)').matches) {
      setActive(index);
      return;
    }

    setActive((current) => (current === index ? null : index));
  };

  const closeOnFocusLeave = (event, index) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActive((current) => (current === index ? null : current));
    }
  };

  return (
    <section id="faq" style={{ 
      backgroundImage: 'linear-gradient(rgba(249, 247, 242, 0.7), rgba(249, 247, 242, 0.7)), url("/assets/bg-faq.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="faq-heading" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={(event) => closeOnFocusLeave(event, i)}
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: 'rgba(255,255,255,0.84)',
                border: '1px solid rgba(18, 24, 31, 0.08)',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease'
              }}
            >
              <button 
                onClick={() => toggleFaq(i)}
                aria-expanded={active === i}
                aria-controls={`faq-answer-${i}`}
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
                  fontWeight: 700,
                  color: 'var(--on-background)',
                  transition: 'background 0.25s ease'
                }}
              >
                {faq.q}
                {active === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {active === i && (
                <div id={`faq-answer-${i}`} style={{ padding: '0 1.5rem 1.5rem', color: 'var(--on-background)', lineHeight: '1.6', fontWeight: 500 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #faq {
            background-attachment: scroll !important;
            background-position: center top !important;
          }
          .faq-heading {
            text-align: left !important;
            margin-bottom: 2rem !important;
          }
          .faq-heading h2 {
            font-size: 1.85rem !important;
          }
          .faq-list {
            gap: 0.8rem !important;
          }
          .faq-list button {
            align-items: flex-start !important;
            gap: 1rem;
            padding: 1.05rem !important;
            font-size: 1rem !important;
            line-height: 1.35;
          }
          .faq-list button svg {
            flex: 0 0 auto;
            margin-top: 0.1rem;
          }
          .faq-list div[id^="faq-answer"] {
            padding: 0 1.05rem 1.1rem !important;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
