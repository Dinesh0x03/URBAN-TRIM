import React, { useState } from 'react';
import { FaPlay, FaTimes, FaCheck } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    { value: "5+", label: "Years of Experience" },
    { value: "5★", label: "Customer Rating" },
    { value: "1000+", label: "Happy Clients" }
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="about-container container">
        <div className="about-grid">
          {/* Left Column: Content */}
          <div className="about-content reveal">
            <span className="badge-red anim-comb-slide">About Urban Trim</span>
            <h2 className="about-title">
              Where Style <br />
              Meets <span className="text-red">Precision</span>
            </h2>
            <p className="about-text">
              At Urban Trim, we blend precision with personality. From sharp fades to beard perfection, we deliver premium grooming in a modern, comfortable environment. Our skilled team is dedicated to crafting a look that complements your style and elevates your confidence.
            </p>
            <p className="about-text">
              Relax in our state-of-the-art space, enjoy a coffee or cold drink, and experience grooming redefined.
            </p>

            {/* Stats Row */}
            <div className="stats-row">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card reveal reveal-delay-${index + 2}`}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Grid Gallery */}
          <div className="about-gallery reveal reveal-delay-2">
            <div className="gallery-main-wrapper" onClick={() => setVideoOpen(true)}>
              <img 
                src="/images/interior_2.jpg" 
                alt="Urban Trim Reception Desk and Neon Sign" 
                className="gallery-main-img" 
              />
              <div className="play-button-overlay">
                <div className="play-button-circle">
                  <FaPlay className="play-icon" />
                </div>
              </div>
              <div className="gallery-main-label">
                <span>Every Barber has a story...</span>
              </div>
            </div>

            <div className="gallery-side-stack">
              <div className="gallery-side-item top">
                <div className="side-logo-wrapper">
                  <img src="/images/logo-transparent.png" alt="Urban Trim Badge" className="side-logo-img" />
                  <span className="side-logo-title">URBAN TRIM</span>
                </div>
              </div>
              <div className="gallery-side-item bottom">
                <img 
                  src="/images/mock_1.png" 
                  alt="Premium barber chairs with blue neon" 
                  className="gallery-side-img" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal (Popup) */}
      {videoOpen && (
        <div className="video-modal" onClick={() => setVideoOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setVideoOpen(false)}>
              <FaTimes size={24} />
            </button>
            <div className="video-iframe-container">
              {/* Styled Barbershop Promo Video Mockup */}
              <div className="video-placeholder-player">
                <video 
                  src="https://assets.mixkit.co/videos/preview/mixkit-barber-cutting-hair-of-a-man-40815-large.mp4" 
                  autoPlay 
                  loop 
                  controls 
                  className="promo-video-player"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
