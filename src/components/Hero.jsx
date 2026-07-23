import React from 'react';
import { FaCalendarCheck, FaCut, FaShower, FaStar } from 'react-icons/fa';
import { GiBeard, GiTowel } from 'react-icons/gi';
import './Hero.css';

const Hero = ({ openBooking }) => {
  const uspItems = [
    {
      icon: <FaCut size={28} />,
      title: "Expert Barbers",
      description: "Skilled in modern & classic styles"
    },
    {
      icon: <FaStar size={28} />,
      title: "Premium Service",
      description: "Relax in our massage chairs"
    },
    {
      icon: <GiTowel size={28} />,
      title: "Hot Towel",
      description: "Hot towel & skin care included"
    },
    {
      icon: <FaShower size={28} />,
      title: "Hair Wash",
      description: "Refreshing wash for every cut"
    },
    {
      icon: <GiBeard size={28} />,
      title: "Beard Grooming",
      description: "Shape, trim & perfect your beard"
    },
    {
      icon: <FaStar size={28} />,
      title: "Top Rated",
      description: "Consistently 5-star experience"
    }
  ];

  return (
    <section id="home" className="hero-section">
      {/* Background Image & Overlay */}
      <div className="hero-bg-image">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container container">
        <div className="hero-content animate-fade-in">
          <span className="hero-eyebrow">PRECISION CUTS. CLEAN FADES.</span>

          <h1 className="hero-title">
            MORE THAN<br />
            A <span className="text-red">HAIRCUT,</span><br />
            IT'S A <span className="text-blue">LIFESTYLE.</span>
          </h1>

          <p className="hero-description">
            Confidence that speaks for itself. Sheffield's<br />
            premium barbershop for the modern gentleman.
          </p>

          {/* Glowing Red Neon Quote Block */}
          <div className="hero-quote-box">
            <span className="hero-quote-text">"Every Barber has a story, our story begins here"</span>
          </div>

          <div className="hero-actions">
            <button className="btn btn-hero-book" onClick={openBooking}>
              <FaCalendarCheck size={15} style={{ marginRight: '0.5rem' }} />
              Book Your Appointment
            </button>
            <button className="btn btn-hero-services" onClick={() => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Our Services &nbsp;→
            </button>
          </div>

          {/* Barber Pole Scroll Indicator */}
          <div className="hero-scroll-wrapper">
            <a
              href="#about"
              className="barber-pole-scroll-link"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Scroll down to About section"
            >
              <div className="barber-pole-pill">
                <div className="barber-pole-stripes" />
              </div>
              <span className="scroll-label-text">SCROLL</span>
              <span className="scroll-down-arrow">∨</span>
            </a>
          </div>
        </div>

        {/* USP / Quick Info Grid */}
        <div className="hero-usp-grid">
          {uspItems.map((item, index) => (
            <div key={index} className="usp-card">
              <div className="usp-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="usp-title">{item.title}</h3>
              <p className="usp-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
