import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Barbers from './components/Barbers';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ContactFooter from './components/ContactFooter';
import BookingModal from './components/BookingModal';
import { FaCalendarCheck, FaWhatsapp } from 'react-icons/fa';
import './App.css';

function App() {
  // Always dark mode — light theme removed
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  // Booking Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialService, setInitialService] = useState('');
  const [initialBarber, setInitialBarber] = useState('');

  // Scroll-reveal IntersectionObserver — triggers .reveal → .visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const targets = document.querySelectorAll('.reveal');
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  const openBooking = () => {
    setInitialService('');
    setInitialBarber('');
    setIsBookingOpen(true);
  };

  const openBookingWithService = (serviceName) => {
    setInitialService(serviceName);
    setInitialBarber('');
    setIsBookingOpen(true);
  };

  const openBookingWithBarber = (barberName) => {
    setInitialService('');
    setInitialBarber(barberName);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="app-wrapper">
      {/* Top Navbar — no theme prop needed anymore */}
      <Navbar openBooking={openBooking} />

      {/* Main Page Layout Sections */}
      <main className="main-content">
        <Hero openBooking={openBooking} />
        <About />
        <Services openBookingWithService={openBookingWithService} />
        <Barbers openBookingWithBarber={openBookingWithBarber} />
        <Gallery />
        <Reviews />
        <ContactFooter openBooking={openBooking} />
      </main>

      {/* Mobile Sticky Booking Action Bar */}
      <div className="mobile-sticky-footer">
        <div className="mobile-footer-container">
          <button className="btn btn-mobile-book" onClick={openBooking}>
            <FaCalendarCheck size={16} />
            <span>Book Appointment</span>
          </button>
          <button
            className="btn-mobile-wa"
            onClick={() => window.open("https://wa.me/447375983000", "_blank")}
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={20} />
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        initialService={initialService}
        initialBarber={initialBarber}
      />
    </div>
  );
}

export default App;
