import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Reviews.css';

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" style={{ minWidth: '20px' }}>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      author: "Ihtishaam Khan",
      avatar: "IK",
      date: "1 week ago",
      text: "Best barbers in Sheffield! Always leave with a fresh look. Top service!",
      rating: 5
    },
    {
      id: 2,
      author: "Danny M",
      avatar: "DM",
      date: "3 weeks ago",
      text: "Exceptional precision fade. Clean atmosphere and the pool table is a brilliant touch while waiting. Highly recommend.",
      rating: 5
    },
    {
      id: 3,
      author: "Sarah Jenkins",
      avatar: "SJ",
      date: "1 month ago",
      text: "Brought my son for a children's cut. The barbers are incredibly patient, friendly, and did an outstanding job.",
      rating: 5
    },
    {
      id: 4,
      author: "Marcus V",
      avatar: "MV",
      date: "2 months ago",
      text: "Been coming here for a year. The beard conditioning and shape up is flawless. Hot towel feels amazing.",
      rating: 5
    },
    {
      id: 5,
      author: "Alex Mercer",
      avatar: "AM",
      date: "2 months ago",
      text: "Top-tier premium barber shop. The decor looks stunning with the red neon signs and ceiling light frames. 10/10 service.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="reviews-section section-padding">
      <div className="reviews-container container">
        <div className="section-header">
          <span className="badge-red">Customer Reviews</span>
          <h2 className="reviews-title">What Our Clients Say</h2>
          <p className="reviews-subtitle">
            Rated 5.0 out of 5 stars based on verified Google reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviewsData.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card-header">
                <div className="author-info">
                  <div className="author-avatar">{review.avatar}</div>
                  <div>
                    <h4 className="author-name">{review.author}</h4>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="google-badge">
                  <GoogleLogo />
                </div>
              </div>

              {/* Stars */}
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>

              <div className="review-text-container">
                <FaQuoteLeft className="quote-icon" />
                <p className="review-text">"{review.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
