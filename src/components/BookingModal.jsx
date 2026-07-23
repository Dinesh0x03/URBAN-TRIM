import React, { useState, useEffect } from 'react';
import {
  FaTimes,
  FaCalendarAlt,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaWhatsapp,
  FaCut,
  FaUser,
  FaArrowRight,
  FaArrowLeft,
  FaCheck
} from 'react-icons/fa';
import { GiBeard, GiRazor } from 'react-icons/gi';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose, initialService, initialBarber }) => {
  const today = new Date();
  const [step, setStep] = useState(1);
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("10:00 AM");
  
  const [selectedServices, setSelectedServices] = useState([initialService || "Skin Fade (£20)"]);
  const [selectedBarber, setSelectedBarber] = useState(initialBarber || "Any Barber");
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setStep(1);
      if (initialService) setSelectedServices([initialService]);
      if (initialBarber) setSelectedBarber(initialBarber);
    }
  }, [isOpen, initialService, initialBarber]);

  if (!isOpen) return null;

  const categorizedServices = {
    "Haircuts & Styling": [
      { name: "Skin Fade", price: "£20", desc: "High, mid or low skin fade" },
      { name: "Haircut", price: "£18", desc: "Classic tailored haircut" },
      { name: "Fade Cut", price: "£18", desc: "Blended gradient cut" },
      { name: "Buzz Cut", price: "£12", desc: "Uniform clipper cut" },
      { name: "Razor Cut", price: "£20", desc: "Precision razor styling" }
    ],
    "Beard & Shaving": [
      { name: "Beard Trim", price: "£12", desc: "Shape, trim & oil" },
      { name: "Hot Towel Shave", price: "£20", desc: "Relaxing steam & razor" },
      { name: "Straight Razor Shave", price: "£20", desc: "Traditional clean shave" },
      { name: "Beard Dyeing", price: "£15", desc: "Grey blending & color" }
    ],
    "Face & Packages": [
      { name: "Face Mask", price: "£10", desc: "Deep cleansing facial" },
      { name: "Face Steam", price: "£10", desc: "Warm pore relaxation" },
      { name: "Groom Package", price: "£35", desc: "Full cut, beard & hot towel" }
    ]
  };

  const barbersList = [
    { name: "Any Barber", role: "First Available" },
    { name: "Sam", role: "Fade Specialist" },
    { name: "Alex", role: "Beard Expert" },
    { name: "Lee", role: "Scissor Master" }
  ];

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM",
    "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM",  "1:30 PM",  "2:00 PM",
    "2:30 PM",  "3:00 PM",  "3:30 PM",
    "4:00 PM",  "4:30 PM",  "5:00 PM",
    "5:30 PM",  "6:00 PM",  "6:30 PM"
  ];

  const toggleServiceSelection = (serviceFullName) => {
    if (selectedServices.includes(serviceFullName)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== serviceFullName));
      }
    } else {
      setSelectedServices([...selectedServices, serviceFullName]);
    }
  };

  // Calendar Helpers
  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth();
  const monthName = currentMonthDate.toLocaleString('default', { month: 'long' });

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonthDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthDate(new Date(year, month + 1, 1));
  };

  const isSameDay = (d1, d2) => {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };

  const isPastDay = (dayNum) => {
    const checkDate = new Date(year, month, dayNum);
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return checkDate < startOfToday;
  };

  const handleSelectDay = (dayNum) => {
    const newSelected = new Date(year, month, dayNum);
    setSelectedDate(newSelected);
  };

  const goToStep = (targetStep) => {
    if (targetStep === 2 && selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }
    if (targetStep === 3 && (!selectedDate || !selectedTimeSlot)) {
      alert("Please pick a date and time slot.");
      return;
    }
    setStep(targetStep);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    setIsSuccess(true);
  };

  const sendWhatsAppBooking = () => {
    const formattedDate = selectedDate.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const message = `Hello Urban Trim! I would like to book an appointment:
• Services: ${selectedServices.join(', ')}
• Barber: ${selectedBarber}
• Date: ${formattedDate}
• Time Slot: ${selectedTimeSlot}
• Client: ${name}
• Phone: ${phone}
${note ? `• Special Requests: ${note}` : ''}`;

    window.open(`https://wa.me/447375983000?text=${encodeURIComponent(message)}`, '_blank');
    handleClose();
  };

  const handleClose = () => {
    setIsSuccess(false);
    setStep(1);
    setName('');
    setPhone('');
    setNote('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="book-appointment-dialog dark-theme-dialog" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="dialog-header">
          <div className="dialog-title-group">
            <h2 className="dialog-title">Book Appointment</h2>
            <p className="dialog-subtitle-step">
              {step === 1 && "Step 1 of 3: Select Services & Barber"}
              {step === 2 && "Step 2 of 3: Select Date & Time"}
              {step === 3 && "Step 3 of 3: Enter Your Details"}
            </p>
          </div>
          <button className="dialog-close-btn" onClick={handleClose} aria-label="Close">
            <FaTimes size={18} />
          </button>
        </div>

        {/* Step Indicator Tabs */}
        {!isSuccess && (
          <div className="dialog-step-tabs">
            <button
              className={`step-tab ${step >= 1 ? 'active' : ''}`}
              onClick={() => goToStep(1)}
            >
              <span className="step-num">1</span> Services
            </button>
            <div className={`step-connector ${step >= 2 ? 'active' : ''}`} />
            <button
              className={`step-tab ${step >= 2 ? 'active' : ''}`}
              onClick={() => goToStep(2)}
            >
              <span className="step-num">2</span> Date & Time
            </button>
            <div className={`step-connector ${step >= 3 ? 'active' : ''}`} />
            <button
              className={`step-tab ${step >= 3 ? 'active' : ''}`}
              onClick={() => goToStep(3)}
            >
              <span className="step-num">3</span> Details
            </button>
          </div>
        )}

        {/* Sliding Viewport */}
        <div className="dialog-body">
          {isSuccess ? (
            /* Success Screen */
            <div className="booking-success-container">
              <FaCheckCircle className="success-icon text-red" size={56} />
              <h3>Appointment Reserved!</h3>
              <p className="success-subtitle">
                Your appointment for <strong>{selectedServices.join(', ')}</strong> on{' '}
                <strong>{selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} at {selectedTimeSlot}</strong> has been saved.
              </p>
              
              <div className="summary-box">
                <div className="summary-row"><span>Client:</span> <strong>{name}</strong></div>
                <div className="summary-row"><span>Phone:</span> <strong>{phone}</strong></div>
                <div className="summary-row"><span>Barber:</span> <strong>{selectedBarber}</strong></div>
                {note && <div className="summary-row"><span>Notes:</span> <strong>{note}</strong></div>}
              </div>

              <div className="success-btn-group">
                <button className="btn-send-whatsapp" onClick={sendWhatsAppBooking}>
                  <FaWhatsapp size={18} /> Send WhatsApp Confirmation
                </button>
                <button className="btn-dialog-outline" onClick={handleClose}>
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <div className="sliding-viewport">
              <div
                className="sliding-track"
                style={{ transform: `translateX(-${(step - 1) * 33.3333}%)` }}
              >
                
                {/* ── SUBPAGE 1: SERVICES & BARBER ── */}
                <div className="slide-page">
                  
                  {/* Select Barber */}
                  <div className="section-block">
                    <label className="section-label">
                      <FaUser className="label-icon text-red" /> Select Barber
                    </label>
                    <div className="barbers-pill-grid">
                      {barbersList.map(b => (
                        <button
                          key={b.name}
                          type="button"
                          className={`barber-pill-card ${selectedBarber === b.name ? 'selected' : ''}`}
                          onClick={() => setSelectedBarber(b.name)}
                        >
                          <span className="barber-pill-name">{b.name}</span>
                          <span className="barber-pill-role">{b.role}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category-wise Services */}
                  <div className="section-block mt-4">
                    <label className="section-label">
                      <FaCut className="label-icon text-red" /> Choose Services
                    </label>

                    {Object.entries(categorizedServices).map(([category, items]) => (
                      <div key={category} className="category-group">
                        <h4 className="category-group-title">{category}</h4>
                        <div className="category-services-grid">
                          {items.map(service => {
                            const fullName = `${service.name} (${service.price})`;
                            const isSelected = selectedServices.includes(fullName);
                            return (
                              <div
                                key={service.name}
                                className={`service-selection-card ${isSelected ? 'selected' : ''}`}
                                onClick={() => toggleServiceSelection(fullName)}
                              >
                                <div className="service-card-check">
                                  {isSelected && <FaCheck size={10} />}
                                </div>
                                <div className="service-card-details">
                                  <span className="service-card-name">{service.name}</span>
                                  <span className="service-card-desc">{service.desc}</span>
                                </div>
                                <span className="service-card-price">{service.price}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Step 1 Footer */}
                  <div className="slide-footer">
                    <span className="selected-count-badge">
                      {selectedServices.length} service(s) selected
                    </span>
                    <button
                      type="button"
                      className="btn-dialog-primary"
                      onClick={() => goToStep(2)}
                    >
                      Next: Select Date & Time <FaArrowRight size={12} style={{ marginLeft: '0.4rem' }} />
                    </button>
                  </div>

                </div>

                {/* ── SUBPAGE 2: DATE & TIME (2-COLUMN MATCHING SCREENSHOT) ── */}
                <div className="slide-page">
                  <div className="booking-grid-layout">
                    
                    {/* LEFT COLUMN: Calendar */}
                    <div className="calendar-panel">
                      <div className="panel-section-title">
                        <FaCalendarAlt className="panel-icon text-blue" /> Select Date
                      </div>

                      <div className="calendar-box">
                        <div className="calendar-header-nav">
                          <button type="button" className="cal-nav-btn" onClick={handlePrevMonth}>
                            <FaChevronLeft size={12} />
                          </button>
                          <span className="cal-month-title">{monthName} {year}</span>
                          <button type="button" className="cal-nav-btn" onClick={handleNextMonth}>
                            <FaChevronRight size={12} />
                          </button>
                        </div>

                        <div className="calendar-weekdays-grid">
                          <span>Su</span><span>Mo</span><span>Tu</span>
                          <span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                        </div>

                        <div className="calendar-days-grid">
                          {[...Array(firstDayOfWeek)].map((_, i) => (
                            <span key={`prev-${i}`} className="cal-day-cell pad-day">
                              {prevMonthDays - firstDayOfWeek + i + 1}
                            </span>
                          ))}

                          {[...Array(daysInMonth)].map((_, i) => {
                            const dayNum = i + 1;
                            const thisDate = new Date(year, month, dayNum);
                            const isSelected = isSameDay(thisDate, selectedDate);
                            const disabled = isPastDay(dayNum);

                            return (
                              <button
                                key={`day-${dayNum}`}
                                type="button"
                                disabled={disabled}
                                className={`cal-day-cell ${isSelected ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
                                onClick={() => handleSelectDay(dayNum)}
                              >
                                {dayNum}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Time Slots */}
                    <div className="timeslots-panel">
                      <div className="panel-section-title">
                        <FaClock className="panel-icon text-blue" /> Select Time Slot
                      </div>

                      <div className="timeslots-grid">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            className={`timeslot-pill ${selectedTimeSlot === slot ? 'selected' : ''}`}
                            onClick={() => setSelectedTimeSlot(slot)}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Step 2 Footer */}
                  <div className="slide-footer">
                    <button
                      type="button"
                      className="btn-dialog-outline"
                      onClick={() => goToStep(1)}
                    >
                      <FaArrowLeft size={12} style={{ marginRight: '0.4rem' }} /> Back
                    </button>
                    <button
                      type="button"
                      className="btn-dialog-primary"
                      onClick={() => goToStep(3)}
                    >
                      Next: Enter Details <FaArrowRight size={12} style={{ marginLeft: '0.4rem' }} />
                    </button>
                  </div>

                </div>

                {/* ── SUBPAGE 3: CLIENT DETAILS ── */}
                <div className="slide-page">
                  <form onSubmit={handleSubmit}>
                    
                    {/* Summary Card */}
                    <div className="step3-summary-strip">
                      <div className="summary-chip">
                        <span className="chip-lbl">Service:</span> {selectedServices.join(', ')}
                      </div>
                      <div className="summary-chip">
                        <span className="chip-lbl">Barber:</span> {selectedBarber}
                      </div>
                      <div className="summary-chip">
                        <span className="chip-lbl">When:</span> {selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} @ {selectedTimeSlot}
                      </div>
                    </div>

                    <div className="client-inputs-stack">
                      <div className="input-group">
                        <label className="input-field-label">Full Name *</label>
                        <input
                          type="text"
                          className="dialog-input"
                          placeholder="e.g. John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="input-group">
                        <label className="input-field-label">Phone Number *</label>
                        <input
                          type="tel"
                          className="dialog-input"
                          placeholder="e.g. +44 7123 456789"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>

                      <div className="input-group">
                        <label className="input-field-label">Note / Special Requests (Optional)</label>
                        <textarea
                          className="dialog-textarea"
                          placeholder="Any preferences about your trim, fade height, beard oil..."
                          rows={3}
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Step 3 Footer */}
                    <div className="slide-footer">
                      <button
                        type="button"
                        className="btn-dialog-outline"
                        onClick={() => goToStep(2)}
                      >
                        <FaArrowLeft size={12} style={{ marginRight: '0.4rem' }} /> Back
                      </button>
                      <button type="submit" className="btn-dialog-primary">
                        Confirm & Book Appointment
                      </button>
                    </div>

                  </form>
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default BookingModal;
