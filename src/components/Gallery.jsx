import React, { useState } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight, FaSearchPlus } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: "/images/interior_1.jpg",
      title: "Premium Lounge & Styling Area",
      desc: "Experience our state-of-the-art barbershop with blue neon lighting and sleek black barber chairs."
    },
    {
      src: "/images/interior_2.jpg",
      title: "Reception & Neon Wall",
      desc: "Welcome to Urban Trim! 'Every Barber has a story, our story begins here.'"
    },
    {
      src: "/images/mock_1.png",
      title: "Master Barber Chairs",
      desc: "Our premium red leather chairs with glowing mirrors and cobalt blue ambient lighting."
    },
    {
      src: "/images/interior_3.png",
      title: "Premium Barber Tools",
      desc: "Only the finest scissors, razors, and clippers used for every client — precision is our craft."
    },
    {
      src: "/images/cut_1.png",
      title: "Fresh Burst Fade Cut",
      desc: "A clean temple shape-up and textured crop with a modern skin fade."
    },
    {
      src: "/images/cut_2.png",
      title: "Sharp Skin Fade & Beard Trim",
      desc: "Classic razor-sharp edge line up, clean mid-skin fade, and groomed beard."
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="gallery-container container">
        <div className="section-header">
          <span className="badge-red">Our Lounge & Cuts</span>
          <h2 className="gallery-title">Inside The <span className="text-red">Shop</span></h2>
          <p className="gallery-subtitle">Take a look at our premium lounge space and fresh client haircuts</p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-card" onClick={() => openLightbox(index)}>
              <div className="gallery-img-wrapper">
                <img src={img.src} alt={img.title} className="gallery-img" />
                <div className="gallery-hover-overlay">
                  <FaSearchPlus className="zoom-icon" size={24} />
                  <h4 className="hover-title">{img.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            <FaTimes size={24} />
          </button>
          
          <button className="lightbox-arrow left" onClick={prevImage} aria-label="Previous image">
            <FaArrowLeft size={20} />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryImages[currentIndex].src} 
              alt={galleryImages[currentIndex].title} 
              className="lightbox-img" 
            />
            <div className="lightbox-info">
              <h4 className="lightbox-title">{galleryImages[currentIndex].title}</h4>
              <p className="lightbox-desc">{galleryImages[currentIndex].desc}</p>
            </div>
          </div>

          <button className="lightbox-arrow right" onClick={nextImage} aria-label="Next image">
            <FaArrowRight size={20} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
