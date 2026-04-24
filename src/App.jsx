import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import Footer from './components/Footer';
import ContactBar from './components/ContactBar';
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
      <Footer />
      <ContactBar />
    </div>
  );
}

export default App;
