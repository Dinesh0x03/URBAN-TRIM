import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaFacebookF, FaWhatsapp, FaCalendarCheck, FaCut, FaClock, FaChevronRight } from 'react-icons/fa';
import { GiRazor } from 'react-icons/gi';
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
    { name: "About", target: "about" },
    { name: "Services", target: "services" },
    { name: "Barbers", target: "barbers" },
    { name: "Gallery", target: "gallery" },
    { name: "Reviews", target: "reviews" },
    { name: "Book Appointment", target: "contact" }
  ];

  const hours = [
    { day: "Monday", time: "9:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 7:00 PM" },
    { day: "Thursday", time: "9:00 AM – 7:00 PM" },
    { day: "Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ];

  const today = new Date().toLocaleDateString('en-GB', { weekday: 'long' });

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = (elementRect - bodyRect) - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="contact-footer-section">

      {/* ── CTA BANNER ── */}
      <div className="cta-banner-outer">
        <div className="cta-banner container">
          <div className="cta-scissors-icon">
            <FaCut size={32} />
          </div>
          <div className="cta-text-wrapper">
            <p className="cta-eyebrow">Ready for a fresh look?</p>
            <h3 className="cta-title">Book Your Appointment Today</h3>
            <p className="cta-desc">Experience the Urban Trim difference — precision cuts, premium service.</p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary btn-cta-book" onClick={openBooking}>
              <FaCalendarCheck size={14} style={{ marginRight: '0.5rem' }} />
              BOOK APPOINTMENT
            </button>
            <button className="btn btn-wa-outline" onClick={() => handleSocialClick("https://wa.me/447375983000")}>
              <FaWhatsapp size={16} style={{ marginRight: '0.5rem' }} />
              WHATSAPP US
            </button>
          </div>
        </div>
      </div>

      {/* ── DECORATIVE DIVIDER ── */}
      <div className="footer-divider-bar">
        <div className="footer-divider-line"></div>
        <div className="footer-divider-badge">
          <FaCut size={12} />
          <span>URBAN TRIM</span>
          <FaCut size={12} style={{ transform: 'scaleX(-1)' }} />
        </div>
        <div className="footer-divider-line"></div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="footer-main container">
        <div className="footer-grid">

          {/* Column 1 – Brand */}
          <div className="footer-col brand-col">
            <div className="footer-brand-logo">
              <img src="/images/logo.png" alt="Urban Trim" className="footer-logo-img" />
            </div>
            <p className="brand-tagline">
              Premium cuts. Premium experience.<br />Your style. Our expertise.
            </p>
            <div className="social-links">
              <button className="social-btn insta" onClick={() => handleSocialClick("https://instagram.com")} aria-label="Instagram">
                <FaInstagram size={16} />
              </button>
              <button className="social-btn fb" onClick={() => handleSocialClick("https://facebook.com")} aria-label="Facebook">
                <FaFacebookF size={16} />
              </button>
              <button className="social-btn wa" onClick={() => handleSocialClick("https://wa.me/447375983000")} aria-label="WhatsApp">
                <FaWhatsapp size={16} />
              </button>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={`#${link.target}`} onClick={(e) => handleLinkClick(e, link.target)}>
                    <FaChevronRight size={10} className="link-arrow" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Opening Hours */}
          <div className="footer-col hours-col">
            <h4 className="footer-col-title">Opening Hours</h4>
            <ul className="hours-list">
              {hours.map((h, idx) => (
                <li key={idx} className={h.day === today ? 'today' : ''}>
                  <span className="day">
                    {h.day === today && <span className="today-dot"></span>}
                    {h.day}
                  </span>
                  <span className="time">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Find Us */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Find Us</h4>
            <div className="contact-details">
              <div className="contact-detail-item">
                <FaMapMarkerAlt className="detail-icon" size={14} />
                <span>73-75 Northfield Rd,<br />Sheffield S2 3AH, United Kingdom</span>
              </div>
              <div className="contact-detail-item">
                <FaPhoneAlt className="detail-icon" size={14} />
                <span>+44 7375 983000</span>
              </div>
              <div className="contact-detail-item">
                <FaClock className="detail-icon" size={14} />
                <span>Open 7 days a week</span>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="footer-map-container">
              <iframe
                title="Urban Trim Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.6!2d-1.4769576!3d53.371392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879830041393925%3A0x722bfe979d0e2!2sUrban+trim!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <button className="btn btn-directions" onClick={handleGetDirections}>
              <FaMapMarkerAlt size={13} style={{ marginRight: '0.4rem' }} />
              GET DIRECTIONS
            </button>
          </div>

        </div>
      </div>

      {/* ── COPYRIGHT BAR ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-content container">
          <div className="footer-bottom-left">
            <GiRazor size={14} className="razor-icon" />
            <p>© {new Date().getFullYear()} Urban Trim. All rights reserved.</p>
          </div>
          <p className="footer-crafted">73-75 Northfield Rd, Sheffield S2 3AH, United Kingdom</p>
        </div>
      </div>

    </footer>
  );
};

export default ContactFooter;
