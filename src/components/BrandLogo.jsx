import React from 'react';
import './BrandLogo.css';

const BrandLogo = ({ className = '', variant = 'default', showTagline = true }) => {
  return (
    <div className={`brand-logo ${variant} ${className}`.trim()}>
      <div className="brand-logo-mark" aria-hidden="true">
        <span className="brand-logo-mark__badge">UT</span>
      </div>
      <div className="brand-logo-text">
        <span className="brand-logo-title">URBAN TRIM</span>
        {showTagline && <span className="brand-logo-subtitle">PREMIUM BARBERS</span>}
      </div>
    </div>
  );
};

export default BrandLogo;
