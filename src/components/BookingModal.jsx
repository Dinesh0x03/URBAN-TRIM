import React, { useState, useEffect } from 'react';
import { FaTimes, FaCalendarAlt, FaUser, FaCut, FaCheckCircle, FaWhatsapp, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose, initialService, initialBarber }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('Any Barber');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Set initial selections when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      
      if (initialService) {
        setSelectedService(initialService);
        setStep(2); // Jump to barber selection
      } else {
        setSelectedService('');
        setStep(1);
      }
      
      if (initialBarber) {
        setSelectedBarber(initialBarber);
        if (initialService) {
          setStep(3); // Jump to date/time selection since service and barber are both selected
        } else {
          setStep(1); // Keep on service selection if service isn't selected yet
        }
      } else {
        setSelectedBarber('Any Barber');
      }
    }
  }, [initialService, initialBarber, isOpen]);

  if (!isOpen) return null;

  const servicesList = [
    "Skin Fade (£20)",
    "Haircut (£18)",
    "Beard Trim (£12)",
    "Full Package (£35)",
    "Buzz Cut (£12)",
    "Children's Cuts (£15)",
    "Shape Up (£10)",
    "Hot Towel Shave (£20)",
    "Face Steam & Mask (£20)",
    "Razor Cut (£20)",
    "Head Shave (£15)"
  ];

  const barbersList = [
    "Any Barber",
    "Sam - Fade Specialist",
    "Alex - Beard Expert",
    "Lee - Scissor Master"
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM"
  ];

  const nextStep = () => {
    if (step === 1 && !selectedService) {
      alert("Please select a service");
      return;
    }
    if (step === 2 && !selectedBarber) {
      alert("Please select a barber");
      return;
    }
    if (step === 3 && (!bookingDate || !bookingTime)) {
      alert("Please pick a date and time");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in your name and phone number");
      return;
    }
    setIsSuccess(true);
  };

  const sendWhatsAppBooking = () => {
    const message = `Hello Urban Trim! I would like to book a grooming appointment:
• Service: ${selectedService}
• Barber: ${selectedBarber}
• Date: ${bookingDate}
• Time: ${bookingTime}
• Client: ${name}
• Phone: ${phone}
${notes ? `• Special Notes: ${notes}` : ''}`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/447375983000?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
    handleResetClose();
  };

  const handleResetClose = () => {
    setStep(1);
    setSelectedService('');
    setSelectedBarber('Any Barber');
    setBookingDate('');
    setBookingTime('');
    setName('');
    setPhone('');
    setNotes('');
    setIsSuccess(false);
    onClose();
  };

  // Get current date string for input minimum (no booking in the past)
  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <div className="modal-backdrop" onClick={handleResetClose}>
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="booking-modal-header">
          <h3 className="booking-modal-title">
            {isSuccess ? "Appointment Scheduled" : `Book Appointment - Step ${step} of 4`}
          </h3>
          <button className="booking-close-btn" onClick={handleResetClose}>
            <FaTimes size={18} />
          </button>
        </div>

        {/* Step Indicator Bar */}
        {!isSuccess && (
          <div className="step-indicator-container">
            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
            <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
            <div className={`step-line ${step >= 4 ? 'active' : ''}`}></div>
            <div className={`step-dot ${step >= 4 ? 'active' : ''}`}>4</div>
          </div>
        )}

        {/* Form Body */}
        <div className="booking-modal-body">
          {isSuccess ? (
            /* Success Screen */
            <div className="booking-success-view">
              <FaCheckCircle className="success-icon text-green" size={60} />
              <h4 className="success-title">Ready for Your Fresh Trim!</h4>
              <p className="success-text">
                Your request has been captured locally. To secure and instantly lock your slot with the barber, send us a quick WhatsApp confirmation message!
              </p>
              
              <div className="booking-summary-card">
                <div className="summary-item">
                  <span className="summary-label">Service:</span>
                  <span className="summary-val">{selectedService}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Barber:</span>
                  <span className="summary-val">{selectedBarber}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Date & Time:</span>
                  <span className="summary-val">{bookingDate} @ {bookingTime}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Client Name:</span>
                  <span className="summary-val">{name}</span>
                </div>
              </div>

              <div className="success-actions">
                <button className="btn btn-primary btn-success-wa" onClick={sendWhatsAppBooking}>
                  <FaWhatsapp size={18} />
                  Send WhatsApp Booking
                </button>
                <button className="btn btn-secondary w-full" onClick={handleResetClose}>
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit}>
              {/* STEP 1: Select Service */}
              {step === 1 && (
                <div className="step-content animate-fade-in">
                  <label className="input-label">
                    <FaCut className="label-icon text-red" /> Select Grooming Service
                  </label>
                  <div className="services-select-grid">
                    {servicesList.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={`select-option-btn ${selectedService === item ? 'selected' : ''}`}
                        onClick={() => setSelectedService(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Choose Barber */}
              {step === 2 && (
                <div className="step-content animate-fade-in">
                  <label className="input-label">
                    <FaUser className="label-icon text-red" /> Choose Your Barber
                  </label>
                  <div className="barbers-select-list">
                    {barbersList.map((barber) => (
                      <div
                        key={barber}
                        className={`barber-option-card ${selectedBarber === barber ? 'selected' : ''}`}
                        onClick={() => setSelectedBarber(barber)}
                      >
                        <div className="barber-avatar-circle">
                          {barber.charAt(0)}
                        </div>
                        <div className="barber-option-info">
                          <span className="barber-option-name">{barber}</span>
                          <span className="barber-option-status">Available</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Choose Date & Time */}
              {step === 3 && (
                <div className="step-content animate-fade-in">
                  <label className="input-label">
                    <FaCalendarAlt className="label-icon text-red" /> Select Date
                  </label>
                  <input
                    type="date"
                    className="booking-date-input"
                    value={bookingDate}
                    min={getTodayDateString()}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                  />

                  <label className="input-label mt-4">
                    <FaCalendarAlt className="label-icon text-red" /> Select Time Slot
                  </label>
                  <div className="time-slots-grid">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`time-slot-btn ${bookingTime === time ? 'selected' : ''}`}
                        onClick={() => setBookingTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Contact Details */}
              {step === 4 && (
                <div className="step-content animate-fade-in">
                  <div className="form-group">
                    <label className="form-label" htmlFor="client-name">Your Full Name</label>
                    <input
                      type="text"
                      id="client-name"
                      className="form-input"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="client-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="client-phone"
                      className="form-input"
                      placeholder="e.g. +44 7123 456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-notes">Special Requirements / Notes (Optional)</label>
                    <textarea
                      id="booking-notes"
                      className="form-input text-area"
                      placeholder="Any details about your trim, fade preferences, skin sensitivities, etc."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="booking-modal-footer">
                {step > 1 ? (
                  <button type="button" className="btn btn-secondary btn-nav-step" onClick={prevStep}>
                    <FaArrowLeft /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button type="button" className="btn btn-primary btn-nav-step" onClick={nextStep}>
                    Next <FaArrowRight />
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary btn-nav-step">
                    Book & Request
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
