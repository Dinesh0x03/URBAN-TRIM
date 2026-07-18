import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaInstagram, FaFacebookF, FaWhatsapp, FaCalendarCheck } from 'react-icons/fa';
import './ContactFooter.css';

const ContactFooter = ({ openBooking }) => {
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleGetDirections = () => {
    window.open("https://www.google.com/maps/dir//Urban+trim,+73-75+Northfield+Rd,+Sheffield+S2+3AH,+United+Kingdom/@53.371392,-1.4769576,17z", "_blank");
  };

  const quickLinks = [
    { name: "Home", target: "home" },
    { name: "About Us", target: "about" },
    { name: "Services", target: "services" },
    { name: "Barbers", target: "barbers" },
    { name: "Gallery", target: "gallery" },
    { name: "Reviews", target: "reviews" },
    { name: "Contact", target: "contact" }
  ];

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact" className="contact-footer-section">
      {/* 1. Call to Action Banner */}
      <div className="cta-banner container">
        <div className="cta-banner-content">
          <div className="cta-icon-wrapper">
            <FaCalendarCheck size={28} />
          </div>
          <div className="cta-text-wrapper">
            <h3 className="cta-title">Ready for a fresh look?</h3>
            <p className="cta-desc">Book your appointment today and experience the Urban Trim difference.</p>
          </div>
        </div>
        <div className="cta-actions">
          <button className="btn btn-primary btn-cta-book" onClick={openBooking}>
            Book Appointment
          </button>
          <button className="btn btn-whatsapp" onClick={() => handleSocialClick("https://wa.me/447375983000")}>
            <FaWhatsapp size={16} />
            Whatsapp Us
          </button>
        </div>
      </div>

      {/* 2. Main Footer Grid */}
      <div className="footer-main container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src="/images/logo-transparent.png" alt="Urban Trim logo" className="footer-logo-img" />
              <div className="logo-text">
                <span className="logo-title">URBAN TRIM</span>
                <span className="logo-subtitle">PREMIUM BARBERS</span>
              </div>
            </div>
            <p className="brand-tagline">
              Premium cuts. Premium experience. Your style. Our expertise.
            </p>
            <div className="social-links">
              <button 
                className="social-btn" 
                onClick={() => handleSocialClick("https://instagram.com")}
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </button>
              <button 
                className="social-btn" 
                onClick={() => handleSocialClick("https://facebook.com")}
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </button>
              <button 
                className="social-btn" 
                onClick={() => handleSocialClick("https://wa.me/447375983000")}
                aria-label="Whatsapp"
              >
                <FaWhatsapp size={16} />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.target}`} onClick={(e) => handleLinkClick(e, link.target)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div className="footer-col hours-col">
            <h4 className="footer-col-title">Opening Hours</h4>
            <ul className="hours-list">
              <li>
                <span className="day">Monday - Thursday</span>
                <span className="time">9:00 AM - 7:00 PM</span>
              </li>
              <li>
                <span className="day">Friday</span>
                <span className="time">9:00 AM - 7:00 PM</span>
              </li>
              <li>
                <span className="day">Saturday</span>
                <span className="time">9:00 AM - 6:00 PM</span>
              </li>
              <li>
                <span className="day">Sunday</span>
                <span className="time">10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact/Map */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Find Us</h4>
            <div className="contact-details">
              <div className="contact-detail-item">
                <FaMapMarkerAlt className="detail-icon" />
                <span>
                  73-75 Northfield Rd,<br />
                  Sheffield S2 3AH, UK
                </span>
              </div>
              <div className="contact-detail-item">
                <FaPhoneAlt className="detail-icon" />
                <span>+44 7375 983000</span>
              </div>
            </div>
            
            <button className="btn btn-secondary btn-directions" onClick={handleGetDirections}>
              <FaMapMarkerAlt size={14} className="mr-1" />
              Get Directions
            </button>
          </div>
        </div>
      </div>

      {/* 4. Copyright Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-content container">
          <p>© {new Date().getFullYear()} Urban Trim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
