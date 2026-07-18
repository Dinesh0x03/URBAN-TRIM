import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './MapLocation.css';

const MapLocation = () => {
  const handleGetDirections = () => {
    window.open("https://www.google.com/maps/dir//Urban+trim,+73-75+Northfield+Rd,+Sheffield+S2+3AH,+United+Kingdom/@53.371392,-1.4769576,17z", "_blank");
  };

  return (
    <section id="location" className="map-location-section">
      <div className="location-container container">
        <div className="section-header">
          <span className="badge-red">Location</span>
          <h2 className="location-title">Visit <span className="text-red">Us</span></h2>
          <p className="location-subtitle">Located in the heart of Sheffield. Stop by for a fresh trim.</p>
        </div>

        <div className="map-card animate-fade-in">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.088673752538!2d-1.4795325232717985!3d53.37139197229561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879830041393925%3A0x722bfe979d0e2!2sUrban%20trim!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
            width="100%" 
            height="380" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Urban Trim Location Google Map"
            className="location-iframe"
          />
          <div className="map-details-bar">
            <div className="map-address-info">
              <FaMapMarkerAlt className="detail-icon" />
              <span>73-75 Northfield Rd, Sheffield S2 3AH, United Kingdom</span>
            </div>
            <button className="btn btn-primary btn-get-dir" onClick={handleGetDirections}>
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
