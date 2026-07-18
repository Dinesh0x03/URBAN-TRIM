import React from 'react';
import { FaInstagram, FaStar, FaCalendarCheck } from 'react-icons/fa';
import './Barbers.css';

const Barbers = ({ openBookingWithBarber }) => {
  const barbersData = [
    {
      name: "Sam",
      role: "Founder & Master Barber",
      specialty: "Skin Fades & Custom Cuts",
      rating: "5.0",
      avatar: "S",
      instagram: "https://instagram.com"
    },
    {
      name: "Alex",
      role: "Senior Barber",
      specialty: "Beard Styling & Sculpting",
      rating: "4.9",
      avatar: "A",
      instagram: "https://instagram.com"
    },
    {
      name: "Lee",
      role: "Pro Barber",
      specialty: "Classic Scissor Cuts & Shaves",
      rating: "4.9",
      avatar: "L",
      instagram: "https://instagram.com"
    }
  ];

  return (
    <section id="barbers" className="barbers-section section-padding">
      <div className="barbers-container container">
        <div className="section-header">
          <span className="badge-red">Expert Crew</span>
          <h2 className="barbers-title">Meet Our Master <span className="text-red">Barbers</span></h2>
          <p className="barbers-subtitle">Highly skilled professionals dedicated to perfecting your style</p>
        </div>

        <div className="barbers-grid">
          {barbersData.map((barber, index) => (
            <div key={index} className="barber-card animate-fade-in">
              <div className="barber-avatar-box">
                {/* Styled initial avatar representing premium profiles */}
                <div className="barber-avatar-large">
                  {barber.avatar}
                </div>
                <div className="barber-rating">
                  <FaStar className="barber-star" size={12} />
                  <span>{barber.rating}</span>
                </div>
              </div>

              <div className="barber-info">
                <h3 className="barber-name">{barber.name}</h3>
                <span className="barber-role">{barber.role}</span>
                <p className="barber-spec">{barber.specialty}</p>
                
                <div className="barber-actions-row">
                  <button 
                    className="btn btn-primary btn-barber-book"
                    onClick={() => openBookingWithBarber(barber.name)}
                  >
                    <FaCalendarCheck size={12} className="mr-1" />
                    Book {barber.name}
                  </button>
                  
                  <a 
                    href={barber.instagram} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="barber-social"
                    aria-label={`${barber.name} Instagram`}
                  >
                    <FaInstagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
