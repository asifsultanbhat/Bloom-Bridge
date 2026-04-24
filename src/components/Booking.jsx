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
    <section id="booking" style={{ 
      position: 'relative',
      padding: '8rem 0',
      color: 'white',
      overflow: 'hidden',
      backgroundColor: 'var(--secondary)'
    }}>
      {/* Background Image Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/assets/bg-booking.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 70%',
        backgroundAttachment: 'fixed',
        filter: 'blur(3px) brightness(0.4)',
        transform: 'scale(1.1)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3.2rem', marginBottom: '1.5rem', color: 'white', fontWeight: 700 }}>Start the Journey</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: '1.8' }}>
              We invite you to schedule a dedicated 60-minute consultation. This is a secure space to discuss your child's needs and explore the best path forward.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', fontSize: '1.1rem' }}>
                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)' }}>
                  <ShieldCheck size={28} />
                </div>
                <span>Secure & Confidential Session</span>
              </div>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', fontSize: '1.1rem' }}>
                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)' }}>
                  <Mail size={28} />
                </div>
                <span>Ahmadgousia@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="glass" style={{
            padding: '4rem',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <div style={{
              width: '90px',
              height: '90px',
              backgroundColor: 'var(--primary)',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2.5rem',
              boxShadow: '0 0 30px rgba(123, 158, 135, 0.4)'
            }}>
              <CalendarIcon size={45} color="white" />
            </div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 600 }}>Initial Consultation</h3>
            <p style={{ opacity: 0.8, marginBottom: '2.5rem', fontSize: '1.1rem' }}>60 Minute Video/Phone Session</p>

            <button
              onClick={openBooking}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '1.4rem',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600
              }}
            >
              Select Date & Time <ArrowRight size={22} />
            </button>
            <p style={{ fontSize: '0.85rem', marginTop: '2rem', opacity: 0.6, letterSpacing: '0.05em' }}>
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
