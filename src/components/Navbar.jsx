import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme, openBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'barbers', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
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
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container container">
          {/* Mobile Theme Toggle (Left) */}
          <button 
            className="mobile-theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FaSun className="theme-switch-icon text-amber-400" size={20} />
            ) : (
              <FaMoon className="theme-switch-icon text-slate-700" size={20} />
            )}
          </button>

          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, 'home')}>
            <img src="/images/logo-transparent.png" alt="Urban Trim Logo" className="logo-img" />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="navbar-menu">
            {['home', 'about', 'services', 'barbers', 'gallery', 'reviews', 'contact'].map((item) => (
              <li key={item} className="navbar-item">
                <a 
                  href={`#${item}`} 
                  className={`navbar-link ${activeSection === item ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions (Right) */}
          <div className="navbar-actions">
            <button 
              className="desktop-theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="theme-switch-icon text-amber-400" size={18} />
              ) : (
                <FaMoon className="theme-switch-icon text-slate-700" size={18} />
              )}
            </button>
            <button className="btn btn-secondary btn-nav-book" onClick={openBooking}>
              Book Appointment
            </button>
          </div>

          {/* Hamburger Menu Icon (Right) */}
          <button 
            className="navbar-hamburger" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <button 
            className="drawer-close" 
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="drawer-menu">
          {['home', 'about', 'services', 'barbers', 'gallery', 'reviews', 'contact'].map((item) => (
            <li key={item} className="drawer-item">
              <a 
                href={`#${item}`} 
                className={`drawer-link ${activeSection === item ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, item)}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="drawer-item pt-4">
            <button className="btn btn-primary w-full" onClick={() => { setIsOpen(false); openBooking(); }}>
              Book Appointment
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
