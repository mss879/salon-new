"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CTA from "@/components/CTA";

export default function AppointmentClient() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Calendar helpers
  const getDaysInMonth = (y: number, m: number) => {
    return new Date(y, m + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (y: number, m: number) => {
    return new Date(y, m, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayOfMonth(year, month);

  const handlePrevMonth = () => {
    if (year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth())) {
      setCurrentMonth(new Date(year, month - 1, 1));
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const selectDay = (day: number) => {
    const newDate = new Date(year, month, day);
    if (newDate >= today) {
      setSelectedDate(newDate);
      setSelectedTime(null); // Reset time slot when date changes
    }
  };

  // Time slots
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM",
    "05:30 PM", "06:30 PM", "07:30 PM"
  ];

  // Submit flow
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and time slot for your appointment.");
      return;
    }

    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const messageText = `Hello Lavendra Beauty Lounge,

I would like to book a resplendent beauty appointment. Here are my details:

Name: ${formState.name}
Phone: ${formState.phone}
Selected Service: ${formState.service || "General Inquiry / Consultation"}
Appointment Date: ${formattedDate}
Appointment Time: ${selectedTime}
${formState.message ? `\nSpecial Notes/Requests:\n${formState.message}` : ""}`;

    const whatsappUrl = `https://wa.me/94775201201?text=${encodeURIComponent(messageText)}`;
    
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", phone: "", service: "", message: "" });
      setSelectedDate(null);
      setSelectedTime(null);
    }, 4000);
  };

  // Render calendar days
  const renderCalendarDays = () => {
    const days = [];
    const prevMonthDays = getDaysInMonth(year, month - 1);
    
    // Fill offset from previous month
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push(
        <div 
          key={`prev-${i}`} 
          className="text-foreground/20 font-light text-center py-2.5 text-sm pointer-events-none select-none"
        >
          {prevMonthDays - i}
        </div>
      );
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const dateToCheck = new Date(year, month, d);
      const isPast = dateToCheck < today;
      const isSelected = selectedDate && 
                        selectedDate.getDate() === d && 
                        selectedDate.getMonth() === month && 
                        selectedDate.getFullYear() === year;

      days.push(
        <button
          key={`day-${d}`}
          type="button"
          disabled={isPast}
          onClick={() => selectDay(d)}
          className={`relative text-center py-2.5 text-sm font-light rounded-full transition-all duration-300 focus:outline-none ${
            isPast 
              ? "text-foreground/20 cursor-not-allowed" 
              : isSelected 
                ? "bg-primary text-white font-semibold scale-105 shadow-md shadow-primary/25"
                : "text-foreground hover:bg-primary/5 hover:text-primary hover:scale-105"
          }`}
        >
          {d}
          {isSelected && (
            <motion.span 
              layoutId="calendar-active-glow"
              className="absolute inset-0 rounded-full border border-primary/20 scale-110 pointer-events-none"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 flex flex-col items-center w-full">
        
        {/* Booking Hero / Intro */}
        <section className="w-full flex justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-primary/3 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">
            
            {/* Left Column: Visual Summary Ticket */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[40%] flex flex-col pt-4 sticky top-32"
            >
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-primary font-bold uppercase mb-2">
                RESERVE YOUR APPOINTMENT
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl leading-[1.2] tracking-tight mb-8 text-foreground font-semibold">
                Schedule Your Resplendent Session
              </h2>
              <p className="text-foreground/70 font-light text-[1rem] leading-relaxed mb-10 max-w-md">
                Select your preferred date, time slot, and details. Your resplendent lounge experience will be dynamically converted into a WhatsApp request.
              </p>

              {/* Dynamic Resplendence Ticket card */}
              <div className="w-full bg-[#fcf5eb] border border-primary/10 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col gap-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent blur-xl pointer-events-none" />
                <div className="absolute -inset-px rounded-[2.5rem] border border-primary/5 pointer-events-none" />
                
                {/* Ticket Header */}
                <div className="flex justify-between items-center pb-4 border-b border-primary/10">
                  <div className="flex flex-col">
                    <span className="font-serif text-sm tracking-widest text-primary font-semibold">LAVENDRA</span>
                    <span className="font-mono text-[0.55rem] tracking-[0.2em] text-foreground/40 uppercase">BEAUTY LOUNGE</span>
                  </div>
                  <span className="text-[0.6rem] font-mono tracking-widest text-[#9b3030] bg-[#9b3030]/5 px-2.5 py-1 rounded-full uppercase font-bold">
                    RESERVATION TICKET
                  </span>
                </div>

                {/* Ticket Body Details */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col">
                    <span className="text-[0.55rem] font-mono text-foreground/45 tracking-wider uppercase">SERVICE DE LUXE</span>
                    <span className="text-base font-serif text-foreground font-medium truncate mt-0.5">
                      {formState.service || "Not Selected Yet"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-[0.55rem] font-mono text-foreground/45 tracking-wider uppercase">DATE</span>
                      <span className="text-sm font-serif text-foreground font-medium mt-0.5 truncate">
                        {selectedDate 
                          ? selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) 
                          : "Not Selected"
                        }
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.55rem] font-mono text-foreground/45 tracking-wider uppercase">TIME SLOT</span>
                      <span className="text-sm font-serif text-foreground font-medium mt-0.5 truncate">
                        {selectedTime || "Not Selected"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col pt-4 border-t border-primary/5">
                    <span className="text-[0.55rem] font-mono text-foreground/45 tracking-wider uppercase">CLIENT NAME</span>
                    <span className="text-sm font-serif text-foreground font-medium mt-0.5 truncate">
                      {formState.name || "Enter your name"}
                    </span>
                  </div>
                </div>

                {/* Aesthetic Ticket Jagged Bottom Edge */}
                <div className="w-full flex justify-between absolute bottom-0 left-0 right-0 px-8 translate-y-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-background -translate-y-2 border border-primary/5" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Premium Selector Form Card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-[60%] bg-white/40 backdrop-blur-md border border-foreground/5 p-6 sm:p-10 lg:p-12 rounded-[2.5rem] shadow-xl relative"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                {/* 1. Custom Interactive Calendar */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center px-2">
                    <span className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50">
                      1. SELECT DATE
                    </span>
                    <div className="flex items-center gap-4">
                      <button 
                        type="button"
                        onClick={handlePrevMonth}
                        className="p-1.5 rounded-full hover:bg-primary/5 text-foreground/70 hover:text-primary transition-colors focus:outline-none"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </button>
                      <span className="font-serif text-base font-medium text-foreground select-none">
                        {monthNames[month]} {year}
                      </span>
                      <button 
                        type="button"
                        onClick={handleNextMonth}
                        className="p-1.5 rounded-full hover:bg-primary/5 text-foreground/70 hover:text-primary transition-colors focus:outline-none"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid Container */}
                  <div className="w-full bg-[#fcf8f3]/60 rounded-3xl p-4 sm:p-6 border border-primary/5">
                    {/* Weekday Labels */}
                    <div className="grid grid-cols-7 gap-2 mb-4 text-center">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <div key={day} className="text-foreground/40 font-mono text-[0.65rem] font-bold uppercase tracking-wider">
                          {day}
                        </div>
                      ))}
                    </div>
                    {/* Days Grid */}
                    <div className="grid grid-cols-7 gap-2">
                      {renderCalendarDays()}
                    </div>
                  </div>
                </div>

                {/* 2. Interactive Time Slot Selector (Revealed conditionally) */}
                <AnimatePresence>
                  {selectedDate && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col gap-4 overflow-hidden"
                    >
                      <span className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50 px-2">
                        2. SELECT TIME SLOT
                      </span>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 bg-[#fcf8f3]/60 rounded-3xl p-5 border border-primary/5">
                        {timeSlots.map((time) => {
                          const isSelected = selectedTime === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`py-3 px-2 text-xs font-mono text-center rounded-xl transition-all duration-300 focus:outline-none ${
                                isSelected 
                                  ? "bg-primary text-white font-semibold scale-105 shadow-md shadow-primary/20" 
                                  : "text-foreground/75 bg-transparent border border-foreground/10 hover:border-primary hover:text-primary hover:scale-[1.02]"
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 3. Dropdown Services Selection */}
                <div className="flex flex-col gap-2">
                  <label className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50 ml-2">
                    3. CHOOSE SERVICE (OPTIONAL)
                  </label>
                  <select 
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full bg-transparent border-b border-foreground/20 px-2 py-2.5 text-foreground font-light focus:outline-none focus:border-primary transition-all duration-300 cursor-pointer"
                  >
                    <option value="" className="text-foreground bg-background">Select a service...</option>
                    <optgroup label="Waxing" className="text-foreground bg-background font-semibold">
                      <option value="Full Legs Wax" className="font-light">Full Legs Wax</option>
                      <option value="Half Legs Wax" className="font-light">Half Legs Wax</option>
                      <option value="Full Arms Wax" className="font-light">Full Arms Wax</option>
                      <option value="Underarms Wax" className="font-light">Underarms Wax</option>
                      <option value="Full Face Wax" className="font-light">Full Face Wax</option>
                    </optgroup>
                    <optgroup label="Scrub Treatments" className="text-foreground bg-background font-semibold">
                      <option value="Esthemax Full Body Scrub" className="font-light">Esthemax Full Body Scrub</option>
                      <option value="Full Legs Scrub & Mask" className="font-light">Full Legs Scrub & Mask</option>
                      <option value="Full Arms Scrub & Mask" className="font-light">Full Arms Scrub & Mask</option>
                    </optgroup>
                    <optgroup label="Face Threading" className="text-foreground bg-background font-semibold">
                      <option value="Full Face Threading" className="font-light">Full Face Threading</option>
                      <option value="Eyebrows Shaping & Threading" className="font-light">Eyebrows Shaping & Threading</option>
                      <option value="Chin & Upper Lip Threading" className="font-light">Chin & Upper Lip Threading</option>
                    </optgroup>
                    <optgroup label="Massage & Wellness" className="text-foreground bg-background font-semibold">
                      <option value="Full Body Massage" className="font-light">Full Body Massage</option>
                      <option value="Deep Tissue Massage" className="font-light">Deep Tissue Massage</option>
                      <option value="Back Massage" className="font-light">Back Massage</option>
                      <option value="Feet Massage" className="font-light">Feet Massage</option>
                      <option value="Head Massage" className="font-light">Head Massage</option>
                    </optgroup>
                    <optgroup label="Premium Facials & Skincare" className="text-foreground bg-background font-semibold">
                      <option value="Korean Glass Skin Hydra Facial" className="font-light">Korean Glass Skin Hydra Facial</option>
                      <option value="High Whitening Hydra Facial" className="font-light">High Whitening Hydra Facial</option>
                      <option value="Gold Gel Facial" className="font-light">Gold Gel Facial</option>
                      <option value="Collagen Gel Facial" className="font-light">Collagen Gel Facial</option>
                      <option value="Vitamin C Facial" className="font-light">Vitamin C Facial</option>
                      <option value="Seaweed Facial" className="font-light">Seaweed Facial</option>
                      <option value="Diamond Microdermabrasion" className="font-light">Diamond Microdermabrasion</option>
                    </optgroup>
                    <optgroup label="Cleanup Treatments" className="text-foreground bg-background font-semibold">
                      <option value="Normal Cleanup" className="font-light">Normal Cleanup</option>
                      <option value="Gold Cleanup" className="font-light">Gold Cleanup</option>
                      <option value="Collagen Cleanup" className="font-light">Collagen Cleanup</option>
                      <option value="Vampire Cleanup" className="font-light">Vampire Cleanup</option>
                    </optgroup>
                    <optgroup label="Manicure & Pedicure" className="text-foreground bg-background font-semibold">
                      <option value="Classic Manicure" className="font-light">Classic Manicure</option>
                      <option value="Normal Pedicure" className="font-light">Normal Pedicure</option>
                      <option value="Luxury Pedicure" className="font-light">Luxury Pedicure</option>
                    </optgroup>
                    <optgroup label="Lash Extensions" className="text-foreground bg-background font-semibold">
                      <option value="Lash Extension Set" className="font-light">Lash Extension Set</option>
                    </optgroup>
                    <optgroup label="Haircuts & Styling" className="text-foreground bg-background font-semibold">
                      <option value="Layers Cut" className="font-light">Layers Cut</option>
                      <option value="Feather Cut" className="font-light">Feather Cut</option>
                      <option value="Butterfly Cut" className="font-light">Butterfly Cut</option>
                      <option value="Baby Haircut" className="font-light">Baby Haircut</option>
                    </optgroup>
                    <optgroup label="Dressing Packages" className="text-foreground bg-background font-semibold">
                      <option value="Normal Makeup and Hairstyle" className="font-light">Normal Makeup and Hairstyle</option>
                      <option value="Normal Makeup + Hairstyle + Saree Draping" className="font-light">Normal Makeup + Hairstyle + Saree Draping</option>
                      <option value="Advanced Shimmer Makeup + Hairstyle" className="font-light">Advanced Shimmer Makeup + Hairstyle</option>
                      <option value="Advanced Shimmer Makeup + Hairstyle + Saree Draping" className="font-light">Advanced Shimmer Makeup + Hairstyle + Saree Draping</option>
                    </optgroup>
                    <optgroup label="Bridal Packages" className="text-foreground bg-background font-semibold">
                      <option value="Platinum Bridal Package (1 Function)" className="font-light">Platinum Bridal Package (1 Function)</option>
                      <option value="Platinum Bridal Package (2 Functions)" className="font-light">Platinum Bridal Package (2 Functions)</option>
                      <option value="HD Bridal Package (1 Function)" className="font-light">HD Bridal Package (1 Function)</option>
                      <option value="HD Bridal Package (2 Functions)" className="font-light">HD Bridal Package (2 Functions)</option>
                      <option value="Signature Bridal Package (Chief Artist)" className="font-light">Signature Bridal Package (Chief Artist)</option>
                    </optgroup>
                  </select>
                </div>

                {/* 4. Customer Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50 ml-2">
                      4. YOUR NAME
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b border-foreground/20 px-2 py-2.5 text-foreground font-light focus:outline-none focus:border-primary focus:placeholder-transparent transition-all duration-300" 
                      placeholder="Enter your full name" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50 ml-2">
                      5. PHONE NUMBER
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-foreground/20 px-2 py-2.5 text-foreground font-light focus:outline-none focus:border-primary focus:placeholder-transparent transition-all duration-300" 
                      placeholder="+94 77 123 4567" 
                    />
                  </div>
                </div>

                {/* 5. Special Notes */}
                <div className="flex flex-col gap-2">
                  <label className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50 ml-2">
                    SPECIAL NOTES (OPTIONAL)
                  </label>
                  <textarea 
                    rows={3} 
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-foreground/20 px-2 py-2.5 text-foreground font-light focus:outline-none focus:border-primary focus:placeholder-transparent transition-all duration-300 resize-none" 
                    placeholder="Provide any allergies, stylist preferences, or extra requests..."
                  ></textarea>
                </div>

                {/* 6. Glowing WhatsApp Submit Button */}
                <div className="relative mt-6">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-white font-bold text-center uppercase tracking-widest text-[0.75rem] shadow-lg hover:bg-primary-hover hover:scale-[1.03] transition-all duration-300 border border-primary flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.8 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    BOOK ON WHATSAPP
                  </button>

                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#fdf8f3] rounded-2xl flex items-center justify-center text-center px-4"
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <span className="font-serif text-lg text-foreground font-medium">Opening WhatsApp...</span>
                          <span className="text-foreground/60 text-xs mt-1">Please send the pre-filled booking to our concierge.</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </motion.div>
            
          </div>
        </section>

        {/* Global CTA Segment */}
        <CTA />
        
      </main>
    </div>
  );
}
