import { useEffect } from 'react';
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
      const existingLink = document.querySelector('link[href*="calendly.com"]');
      if (existingScript) document.body.removeChild(existingScript);
      if (existingLink) document.head.removeChild(existingLink);
    };
  }, []);

  const openBooking = () => {
    const bookingUrl = 'https://calendly.com/ahmadgousia/30min';
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: bookingUrl
      });
      return;
    }
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
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
      <div className="booking-background" style={{
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
        <div className="booking-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div className="booking-copy">
            <h2 style={{ fontSize: '3.2rem', marginBottom: '1.5rem', color: 'white', fontWeight: 700 }}>Start the Journey</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.96, lineHeight: '1.8', fontWeight: 500 }}>
              We invite you to schedule a dedicated 30-minute consultation. This is a secure space to discuss your child's needs and explore the best path forward.
            </p>

            <div className="booking-features" style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              <div className="booking-feature" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', fontSize: '1.1rem' }}>
                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)' }}>
                  <ShieldCheck size={28} />
                </div>
                <span>Secure & Confidential Session</span>
              </div>
              <div className="booking-feature" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', fontSize: '1.1rem' }}>
                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)' }}>
                  <Mail size={28} />
                </div>
                <a href="mailto:Ahmadgousia@gmail.com">Ahmadgousia@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="glass booking-card" style={{
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
            <p style={{ opacity: 0.92, marginBottom: '2.5rem', fontSize: '1.1rem', fontWeight: 500 }}>30 Minute Video/Phone Session</p>

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
            <p style={{ fontSize: '0.85rem', marginTop: '2rem', opacity: 0.78, letterSpacing: '0.05em', fontWeight: 500 }}>
              Powered by Calendly Automation
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .booking-layout { grid-template-columns: 1fr !important; text-align: center; gap: 3rem !important; }
          .booking-feature { align-items: center; justify-content: center; }
          #booking .glass { padding: 3rem 2rem !important; }
        }
        @media (max-width: 640px) {
          #booking { padding: 3.5rem 0 !important; }
          .booking-background {
            background-attachment: scroll !important;
          }
          .booking-layout {
            gap: 2rem !important;
            text-align: left !important;
          }
          .booking-copy h2 {
            font-size: 2rem !important;
            margin-bottom: 1rem !important;
          }
          .booking-copy > p {
            font-size: 1rem !important;
            line-height: 1.65 !important;
            margin-bottom: 1.75rem !important;
          }
          .booking-features {
            gap: 1rem !important;
          }
          .booking-feature {
            justify-content: flex-start !important;
            gap: 0.85rem !important;
            font-size: 0.98rem !important;
            align-items: flex-start !important;
          }
          .booking-feature a {
            overflow-wrap: anywhere;
          }
          .booking-card {
            padding: 1.5rem !important;
            border-radius: var(--radius-lg) !important;
          }
          .booking-card > div:first-child {
            width: 68px !important;
            height: 68px !important;
            margin-bottom: 1.5rem !important;
          }
          .booking-card h3 {
            font-size: 1.45rem !important;
          }
          .booking-card button {
            padding: 1rem !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Booking;
