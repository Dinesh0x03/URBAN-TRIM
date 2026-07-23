import React, { useState } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight, FaCamera } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = ['all', 'haircuts', 'beards', 'kids', 'interior'];

  const allImages = [
    {
      src: '/images/barber_action.png',
      title: 'Precision Fade',
      category: 'haircuts',
      size: 'normal',
    },
    {
      src: '/images/cut_2.png',
      title: 'Skin Fade & Beard',
      category: 'beards',
      size: 'tall',
    },
    {
      src: '/images/shop_interior_real.png',
      title: 'The Lounge',
      category: 'interior',
      size: 'normal',
    },
    {
      src: '/images/interior_1.jpg',
      title: 'Styling Area',
      category: 'interior',
      size: 'normal',
    },
    {
      src: '/images/interior_2.jpg',
      title: 'Reception & Neon',
      category: 'interior',
      size: 'normal',
    },
    {
      src: '/images/mock_1.png',
      title: 'Premium Chairs',
      category: 'interior',
      size: 'normal',
    },
    {
      src: '/images/cut_1.png',
      title: 'Fresh Burst Fade',
      category: 'haircuts',
      size: 'normal',
    },
    {
      src: '/images/client_fade.png',
      title: 'Sharp Side Part',
      category: 'haircuts',
      size: 'normal',
    },
  ];

  const filtered = activeFilter === 'all'
    ? allImages
    : allImages.filter(img => img.category === activeFilter);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="gallery-container container">

        {/* Header */}
        <div className="gallery-header">
          <h2 className="gallery-main-title">A Look Inside Urban Trim</h2>
          <p className="gallery-subtitle">Real cuts. Real craftsmanship. Real Urban Trim.</p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filters">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
              onClick={() => { setActiveFilter(f); setCurrentIndex(0); }}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery-masonry">
          {filtered.map((img, index) => (
            <div
              key={index}
              className={`gallery-card ${img.size === 'tall' ? 'card-tall' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <img src={img.src} alt={img.title} className="gallery-img" />
              {/* Category label at bottom-left (visible on hover) */}
              <div className="gallery-card-label">{img.title}</div>
              {/* Subtle dark overlay on hover */}
              <div className="gallery-card-overlay" />
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="gallery-cta">
          <button className="btn-view-gallery" onClick={() => openLightbox(0)}>
            <FaCamera size={15} style={{ marginRight: '0.5rem' }} />
            View Full Gallery
          </button>
        </div>

      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <FaTimes size={20} />
          </button>

          <button className="lightbox-arrow left" onClick={prevImage} aria-label="Previous">
            <FaArrowLeft size={18} />
          </button>

          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[currentIndex].src}
              alt={filtered[currentIndex].title}
              className="lightbox-img"
            />
            <div className="lightbox-info">
              <h4 className="lightbox-title">{filtered[currentIndex].title}</h4>
            </div>
          </div>

          <button className="lightbox-arrow right" onClick={nextImage} aria-label="Next">
            <FaArrowRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
