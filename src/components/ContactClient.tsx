"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CTA from "@/components/CTA";

export default function ContactClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqs = [
    {
      q: "Do I need to book an appointment in advance?",
      a: "While we welcome walk-ins based on availability, we highly recommend booking in advance to secure your preferred stylist, therapist, and timing."
    },
    {
      q: "What is your cancellation policy?",
      a: "We kindly ask that you notify us at least 24 hours in advance if you need to reschedule or cancel your appointment. This allows us to offer the slot to other guests on our waiting list."
    },
    {
      q: "Do you offer services for weddings and private events?",
      a: "Yes, we specialize in bespoke bridal styling, groom packages, and private VIP events. Please contact our events concierge at least 4-6 weeks in advance to customize your package."
    },
    {
      q: "Are your treatments suitable for sensitive skin?",
      a: "Absolutely. We use certified, hypoallergenic, and dermatologically tested premium products. Our experts conduct a detailed skin consultation before every treatment to tailor the products to your skin type."
    },
    {
      q: "Is there parking available at the lounge?",
      a: "Yes, we have secure, dedicated customer parking located right at our lounge entrance in Kolonnawa for your convenience."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const messageText = `Hello Lavendra Beauty Lounge,

I would like to get in touch with you. Here are my details:

Name: ${formState.name}
Email: ${formState.email}
Phone: ${formState.phone}
${formState.service ? `Selected Service: ${formState.service}\n` : ""}
Message:
${formState.message}`;

    const whatsappUrl = `https://wa.me/94775201201?text=${encodeURIComponent(messageText)}`;
    
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", phone: "", service: "", message: "" });
    }, 4000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 flex flex-col items-center w-full">
        
        {/* Contact Info & Form Two-Column Section */}
        <section className="w-full flex justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden relative">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-primary/3 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">
            
            {/* Left Column: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[45%] flex flex-col pt-4"
            >
              <span className="font-mono text-[0.65rem] tracking-[0.2em] text-primary font-bold uppercase mb-2">
                VISIT & REACH OUT
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl leading-[1.2] tracking-tight mb-8 text-foreground font-semibold">
                Our Sanctuary in Kolonnawa
              </h2>
              <p className="text-foreground/70 font-light text-[1rem] lg:text-[1.05rem] leading-relaxed mb-12 max-w-md">
                Experience unparalleled care in a space designed entirely for your luxury and peace of mind. Drop in, call us, or send an email and let us customize your experience.
              </p>
              
              <div className="flex flex-col gap-10">
                {/* Address */}
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/10 group-hover:border-primary/20 transition-all duration-300 shadow-sm group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-primary mb-1.5">OUR LOUNGE</span>
                    <Link 
                      href="https://maps.google.com" 
                      target="_blank"
                      className="text-foreground/80 font-serif text-lg lg:text-xl leading-relaxed hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <span>No. 59/1, Keppetipola Mawatha,<br />Kolonnawa, Sri Lanka</span>
                      <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/10 group-hover:border-primary/20 transition-all duration-300 shadow-sm group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.181-4.158-6.983-6.983l1.294-.97c.362-.273.528-.735.417-1.173L6.963 3.102a1.125 1.125 0 00-1.11-1.008H4.5a2.25 2.25 0 00-2.25 2.25v1.356z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-primary mb-1.5">TELEPHONE</span>
                    <Link href="tel:+94775201201" className="text-foreground/80 font-serif text-lg lg:text-xl hover:text-primary transition-colors flex items-center gap-1.5">
                      <span>0775 201 201</span>
                      <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/5 group-hover:bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-300 shadow-sm group-hover:scale-110">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.8 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-emerald-600 mb-1.5">WHATSAPP</span>
                    <Link 
                      href="https://wa.me/94775201201" 
                      target="_blank" 
                      className="text-foreground/80 font-serif text-lg lg:text-xl hover:text-emerald-600 transition-colors flex items-center gap-1.5"
                    >
                      Chat on WhatsApp
                      <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                    <span className="text-foreground/50 font-mono text-sm tracking-wider mt-1">
                      0775 201 201
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/10 group-hover:border-primary/20 transition-all duration-300 shadow-sm group-hover:scale-110">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-primary mb-1.5">EMAIL</span>
                    <Link href="mailto:hello@lavendra.lk" className="text-foreground/80 font-serif text-lg lg:text-xl hover:text-primary transition-colors flex items-center gap-1.5">
                      <span>hello@lavendra.lk</span>
                      <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Premium Form Card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-[55%] bg-white/40 backdrop-blur-md border border-foreground/5 p-8 lg:p-12 rounded-[2.5rem] shadow-xl relative"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50 ml-2">YOUR NAME</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-foreground/20 px-2 py-2.5 text-foreground font-light focus:outline-none focus:border-primary focus:placeholder-transparent transition-all duration-300" 
                    placeholder="Enter your full name" 
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                  <div className="flex flex-col gap-2">
                    <label className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50 ml-2">EMAIL ADDRESS</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b border-foreground/20 px-2 py-2.5 text-foreground font-light focus:outline-none focus:border-primary focus:placeholder-transparent transition-all duration-300" 
                      placeholder="your@email.com" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50 ml-2">PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-foreground/20 px-2 py-2.5 text-foreground font-light focus:outline-none focus:border-primary focus:placeholder-transparent transition-all duration-300" 
                      placeholder="+94 77 123 4567" 
                    />
                  </div>
                </div>

                 <div className="flex flex-col gap-2 mt-2">
                  <label className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50 ml-2">SELECT SERVICE (OPTIONAL)</label>
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

                <div className="flex flex-col gap-2 mt-2">
                  <label className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-foreground/50 ml-2">MESSAGE</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-foreground/20 px-2 py-2.5 text-foreground font-light focus:outline-none focus:border-primary focus:placeholder-transparent transition-all duration-300 resize-none" 
                    placeholder="Describe how we can craft your perfect lounge experience..."
                  ></textarea>
                </div>

                <div className="relative mt-6">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-white font-bold text-center uppercase tracking-widest text-[0.75rem] shadow-lg hover:bg-primary-hover hover:scale-[1.03] transition-all duration-300 border border-primary flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.8 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    SEND ON WHATSAPP
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
                          <span className="text-foreground/60 text-xs mt-1">Please send the pre-filled message to our concierge.</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </motion.div>
            
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-background flex justify-center py-20 lg:py-32 px-6 border-t border-foreground/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
          
          <div className="w-full max-w-4xl flex flex-col items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="font-mono text-[0.65rem] tracking-[0.25em] text-primary font-bold uppercase">
                COMMONLY ASKED
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground font-semibold leading-tight mt-3">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="w-full flex flex-col gap-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="w-full border-b border-foreground/10 pb-5"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left py-4 focus:outline-none group"
                    >
                      <span className={`font-serif text-lg lg:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                        {faq.q}
                      </span>
                      
                      <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/50 transition-all duration-300 group-hover:border-primary group-hover:text-primary relative shrink-0 ml-4">
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="font-light text-lg absolute"
                        >
                          +
                        </motion.span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-foreground/70 text-[0.98rem] lg:text-[1.02rem] font-light leading-relaxed pt-2 pb-4 pr-12">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Segment */}
        <CTA />
        
      </main>
    </div>
  );
}
