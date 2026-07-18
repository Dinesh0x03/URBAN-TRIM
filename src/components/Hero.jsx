import React from 'react';
import { FaCut, FaGem, FaSpa, FaShower, FaStar, FaWhatsapp, FaSmileBeam, FaCalendarAlt } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ openBooking }) => {
  const uspItems = [
    {
      icon: <FaCut size={22} />,
      title: "Expert Barbers",
      description: "Skilled in modern & classic styles"
    },
    {
      icon: <FaGem size={22} />,
      title: "Premium Service",
      description: "Relax in our massage chairs"
    },
    {
      icon: <FaSpa size={22} />,
      title: "Hot Towel",
      description: "Hot towel & skin care included"
    },
    {
      icon: <FaShower size={22} />,
      title: "Hair Wash",
      description: "Refreshing wash for every cut"
    },
    {
      icon: <FaSmileBeam size={22} />,
      title: "Beard Grooming",
      description: "Shape, trim & perfect your beard"
    },
    {
      icon: <FaStar size={22} />,
      title: "Top Rated",
      description: "Consistently 5-star experience"
    }
  ];

  const handleWhatsappChat = () => {
    // Open Whatsapp Link
    window.open("https://wa.me/447375983000", "_blank"); // Standard placeholder or real if we know it
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Image & Overlay */}
      <div className="hero-bg-image">
        <div className="hero-overlay overlay-gradient"></div>
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

          <div className="hero-actions">
            <button className="btn btn-primary btn-hero-book" onClick={openBooking}>
              <FaCalendarAlt size={14} className="mr-2" />
              Book Appointment
            </button>
            <button className="btn btn-whatsapp" onClick={handleWhatsappChat}>
              <FaWhatsapp size={18} />
              Whatsapp Us
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
