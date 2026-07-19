import React from 'react';
import { FaCut, FaShower, FaStar, FaWhatsapp } from 'react-icons/fa';
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

  const handleWhatsappChat = () => {
    window.open("https://wa.me/447375983000", "_blank");
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Image & Overlay */}
      <div className="hero-bg-image">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container container">
        <div className="hero-content animate-fade-in">
          <span className="badge-red">Premium Barbershop Experience</span>
          
          <h1 className="hero-title">
            LOOK SHARP.<br />
            FEEL <span className="text-red">CONFIDENT.</span>
          </h1>
          
          <p className="hero-description">
            Urban Trim is more than a haircut — it's a lifestyle. Precision cuts, premium service and a modern experience.
          </p>

          {/* Glowing Red Neon Quote Block */}
          <div className="hero-quote-box">
            <span className="hero-quote-text">"Every Barber has a story, our story begins here"</span>
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary btn-hero-book" onClick={openBooking}>
              BOOK APPOINTMENT
            </button>
            <button className="btn btn-whatsapp-hero" onClick={handleWhatsappChat}>
              <FaWhatsapp size={18} />
              WHATSAPP US
            </button>
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
