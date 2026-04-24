import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import './App.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="reveal active"><Hero /></div>
      <div className="reveal"><Services /></div>
      <div className="reveal"><Process /></div>
      <div className="reveal"><About /></div>
      <div className="reveal"><Testimonials /></div>
      <div className="reveal"><Resources /></div>
      <div className="reveal"><FAQ /></div>
      <div className="reveal"><Booking /></div>
      
      <footer style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: '#F9F7F2', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
             <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.4rem', color: 'var(--primary)' }}>Bloom & Bridge</span>
          </div>
          <p style={{ color: 'var(--on-surface)', fontSize: '0.9rem', opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} Professional Practice Website. All rights reserved.
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.8rem', opacity: 0.6 }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
