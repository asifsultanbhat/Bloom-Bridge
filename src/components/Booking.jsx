import React, { useEffect } from 'react';
import { ShieldCheck, Mail, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';

const Booking = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="calendly.com"]');
      if (existingScript) document.body.removeChild(existingScript);
    };
  }, []);

  const openBooking = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/ahmadgousia/30min'
      });
    }
  };

  return (
    <section id="booking" style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', color: 'white' }}>Start the Journey</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: '1.7' }}>
              We invite you to schedule a dedicated 60-minute consultation. This is a secure space to discuss your child's needs and explore the best path forward.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <ShieldCheck size={24} />
                <span>Secure & Confidential Session</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Mail size={24} />
                <span>Ahmadgousia@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="glass" style={{
            padding: '4rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-xl)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'var(--primary)',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              <CalendarIcon size={40} color="white" />
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Initial Consultation</h3>
            <p style={{ opacity: 0.8, marginBottom: '2.5rem' }}>60 Minute Video/Phone Session</p>

            <button
              onClick={openBooking}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '1.2rem',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem'
              }}
            >
              Select Date & Time <ArrowRight size={20} />
            </button>
            <p style={{ fontSize: '0.8rem', marginTop: '1.5rem', opacity: 0.5 }}>
              Powered by Calendly Automation
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #booking .container { grid-template-columns: 1fr; text-align: center; }
          #booking div:first-child div { align-items: center; justify-content: center; }
          .glass { padding: 3rem 2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Booking;
