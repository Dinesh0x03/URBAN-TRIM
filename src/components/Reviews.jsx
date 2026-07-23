import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './Reviews.css';

const Reviews = () => {
  const phrases = [
    "Clients Say",
    "Gentlemen Say",
    "Community Thinks",
    "Regulars Say"
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeoutId;

    if (!isDeleting) {
      if (displayedText.length < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, 110);
      } else {
        // Pause for 2.2 seconds when full phrase is typed out
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, phraseIndex]);

  const reviewsData = [
    {
      id: 1,
      author: "Ihtishaam Khan",
      location: "Sheffield",
      text: "Best barbers in Sheffield! Always leave with a fresh skin fade and sharp beard trim. Top tier service every single time.",
      rating: 5
    },
    {
      id: 2,
      author: "Danny M.",
      location: "Sheffield",
      text: "Exceptional precision fade. Clean atmosphere and the pool table is a brilliant touch while waiting. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      author: "Sarah Jenkins",
      location: "Rotherham",
      text: "Brought my son for a haircut. The barbers were incredibly patient, friendly, and did an outstanding job with his fade.",
      rating: 5
    },
    {
      id: 4,
      author: "Marcus V.",
      location: "Sheffield",
      text: "Been coming to Urban Trim for over a year. The beard conditioning and razor edge shape up is flawless. Hot towel feels amazing.",
      rating: 5
    },
    {
      id: 5,
      author: "Alex Mercer",
      location: "Doncaster",
      text: "Top-tier premium barbershop. The decor looks stunning with neon lighting and modern setup. 10/10 service and vibes.",
      rating: 5
    },
    {
      id: 6,
      author: "David S.",
      location: "Sheffield",
      text: "Friendly staff, zero waiting hassle, and attention to detail is unreal. Easily the best barbershop in the region.",
      rating: 5
    }
  ];

  // Duplicate list to create a seamless infinite marquee loop
  const tickerItems = [...reviewsData, ...reviewsData];

  return (
    <section id="reviews" className="reviews-section py-16 overflow-hidden">
      <div className="reviews-header-container container mb-10">
        <div className="reviews-header-flex">
          <h2 className="reviews-heading">
            What Our{" "}
            <span className="reviews-heading-accent">
              {displayedText}
            </span>
            <span className="reviews-cursor">|</span>
          </h2>
          <div className="google-rating-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="hsl(var(--accent-color))">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="rating-score">5.0</span>
            <span className="rating-label">
              <span>Google</span>
              <span className="rating-sub">Reviews</span>
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Ticker Track */}
      <div className="reviews-ticker-wrapper">
        {/* Left & Right Fade Gradients */}
        <div className="ticker-fade-left"></div>
        <div className="ticker-fade-right"></div>

        <div className="reviews-ticker-track">
          {tickerItems.map((review, idx) => (
            <div key={`${review.id}-${idx}`} className="review-ticker-card">
              <div className="review-stars-row">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="review-star-icon" />
                ))}
              </div>
              <p className="review-quote-text">“{review.text}”</p>
              <div className="review-author-box">
                <p className="review-author-name">{review.author}</p>
                <p className="review-author-location">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
