import React, { useState } from 'react';
import { FaCut, FaShower, FaSpa, FaStar, FaSmile, FaSkull, FaTimes, FaCoffee, FaUser } from 'react-icons/fa';
import { GiRazor, GiBeard, GiTowel } from 'react-icons/gi';
import './Services.css';

const Services = ({ openBookingWithService }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const popularServices = [
    {
      id: 'skin-fade',
      name: "Skin Fade",
      desc: "High, mid or low skin fade blended to perfection.",
      price: "£20",
      icon: <FaUser size={22} />
    },
    {
      id: 'haircut',
      name: "Haircut",
      desc: "Classic cut tailored to your style and face shape.",
      price: "£18",
      icon: <FaCut size={22} />
    },
    {
      id: 'beard-trim',
      name: "Beard Trim",
      desc: "Expert beard shaping, lining and definition.",
      price: "£12",
      icon: <GiBeard size={22} />
    },
    {
      id: 'hot-towel',
      name: "Hot Towel",
      desc: "Relaxing hot towel treatment included with every cut.",
      price: "Included",
      icon: <GiTowel size={22} />
    },
    {
      id: 'hair-wash',
      name: "Hair Wash",
      desc: "Refreshing shampoo and condition for a clean finish.",
      price: "Included",
      icon: <FaShower size={22} />
    },
    {
      id: 'kids-cut',
      name: "Kids Cut",
      desc: "Stylish, fun cuts for the young gentlemen (0–12).",
      price: "£15",
      icon: <FaSmile size={22} />
    },
    {
      id: 'shape-up',
      name: "Shape Up",
      desc: "Crisp edge line up around hairline, temples and neck.",
      price: "£10",
      icon: <GiRazor size={22} />
    },
    {
      id: 'full-package',
      name: "Full Package",
      desc: "Complete groom package — cut, beard, hot towel & more.",
      price: "£35",
      icon: <FaStar size={22} />
    }
  ];

  const fullServices = {
    haircuts: [
      { name: "Haircut", price: "£18" },
      { name: "Skin Fade", price: "£20" },
      { name: "Fade Cut", price: "£18" },
      { name: "Buzz Cut", price: "£12" },
      { name: "Custom Cut", price: "£22" },
      { name: "Scissor Cut", price: "£20" },
      { name: "Razor Cut", price: "£20" },
      { name: "Long Haircut", price: "£25" },
      { name: "Hair Shape-up", price: "£10" },
      { name: "Children's Cuts", price: "£15" },
      { name: "Head Shave", price: "£15" },
      { name: "Perms", price: "£45" }
    ],
    beard: [
      { name: "Beard Trim", price: "£12" },
      { name: "Beard Conditioning", price: "£5" },
      { name: "Beard Dyeing", price: "£15" },
      { name: "Beard Maintenance", price: "£10" },
      { name: "Shave", price: "£15" },
      { name: "Hot Towel Shave", price: "£20" },
      { name: "Straight Razor Shave", price: "£20" }
    ],
    faceGrooming: [
      { name: "Eyebrow Trimming", price: "£5" },
      { name: "Waxing (Nose/Ears)", price: "£8" },
      { name: "Face Mask", price: "£10" },
      { name: "Ears Candle", price: "£15" },
      { name: "Face Steam", price: "£10" },
      { name: "Airbrush Gun Shape Up", price: "£15" }
    ],
    packages: [
      { name: "Groom Packages (Full)", price: "£35" }
    ],
    amenities: [
      { name: "Coffee", price: "Free" },
      { name: "Chill Drinks", price: "Free" },
      { name: "Snacks", price: "Free" },
      { name: "Pool Table Access", price: "Free" },
      { name: "Back Massages", price: "Free (Tip)" },
      { name: "Shampoo & Conditioning", price: "Free with cut" }
    ]
  };

  const handleBookService = (serviceName) => {
    setModalOpen(false);
    openBookingWithService(serviceName);
  };

  return (
    <section id="services" className="services-section section-padding">
      <div className="services-container container">
        <div className="services-two-column-layout">
          
          {/* Left Column: Heading & Action Button */}
          <div className="services-info-column reveal">
            <span className="badge-red">Our Services</span>
            <h2 className="services-title-new">
              Premium Grooming<br />
              Tailored For <span className="text-red">You</span>
            </h2>
            <div className="services-action-new">
              <button className="btn btn-secondary btn-view-all" onClick={() => setModalOpen(true)}>
                View All Services
              </button>
            </div>
          </div>

          {/* Right Column: Grid of Horizontal Cards */}
          <div className="services-grid-column">
            {popularServices.map((service) => (
              <div 
                key={service.id} 
                className="service-card-new"
                onClick={() => handleBookService(service.name)}
              >
                <div className="service-card-left">
                  <div className="service-icon-box-new">
                    {service.icon}
                  </div>
                </div>
                <div className="service-card-right">
                  <h3 className="service-name-new">{service.name}</h3>
                  <p className="service-desc-new">{service.desc}</p>
                  <span className="service-price-new">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Full Services Modal */}
      {modalOpen && (
        <div className="services-modal" onClick={() => setModalOpen(false)}>
          <div className="services-modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="services-modal-header">
              <h3 className="modal-header-title">Full Menu of Services</h3>
              <button className="services-modal-close" onClick={() => setModalOpen(false)}>
                <FaTimes size={20} />
              </button>
            </div>

            <div className="services-modal-body">
              {/* Category 1: Haircuts */}
              <div className="menu-category">
                <h4 className="category-title">Haircuts & Styling</h4>
                <div className="menu-list">
                  {fullServices.haircuts.map((item, idx) => (
                    <div key={idx} className="menu-item">
                      <div className="menu-item-info">
                        <span className="menu-item-name">{item.name}</span>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      {item.price !== "Free" && (
                        <button 
                          className="menu-item-book"
                          onClick={() => handleBookService(item.name)}
                        >
                          Book
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2: Beard & Shaving */}
              <div className="menu-category">
                <h4 className="category-title">Beard & Shaving</h4>
                <div className="menu-list">
                  {fullServices.beard.map((item, idx) => (
                    <div key={idx} className="menu-item">
                      <div className="menu-item-info">
                        <span className="menu-item-name">{item.name}</span>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <button 
                        className="menu-item-book"
                        onClick={() => handleBookService(item.name)}
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3: Face & Add-ons */}
              <div className="menu-category">
                <h4 className="category-title">Face & Add-ons</h4>
                <div className="menu-list">
                  {fullServices.faceGrooming.map((item, idx) => (
                    <div key={idx} className="menu-item">
                      <div className="menu-item-info">
                        <span className="menu-item-name">{item.name}</span>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <button 
                        className="menu-item-book"
                        onClick={() => handleBookService(item.name)}
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 4: Packages */}
              <div className="menu-category">
                <h4 className="category-title">Groom Packages</h4>
                <div className="menu-list">
                  {fullServices.packages.map((item, idx) => (
                    <div key={idx} className="menu-item">
                      <div className="menu-item-info">
                        <span className="menu-item-name">{item.name}</span>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <button 
                        className="menu-item-book"
                        onClick={() => handleBookService(item.name)}
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 5: Complimentary Amenities */}
              <div className="menu-category">
                <h4 className="category-title">Complimentary & Extras</h4>
                <div className="menu-list">
                  {fullServices.amenities.map((item, idx) => (
                    <div key={idx} className="menu-item amenity">
                      <div className="menu-item-info">
                        <span className="menu-item-name flex-align">
                          <FaCoffee className="mr-2 text-red" size={14} />
                          {item.name}
                        </span>
                        <span className="menu-item-price text-green">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
