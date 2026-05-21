"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import CTA from "@/components/CTA";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
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
      a: "Yes, we specialize in bespoke bridal styling, groom packages, and private VIP events. Please contact our events concierge at least 4-6 weeks in advance to customize your ritual."
    },
    {
      q: "Are your treatments suitable for sensitive skin?",
      a: "Absolutely. We use certified, hypoallergenic, and dermatologically tested premium products. Our experts conduct a detailed skin consultation before every treatment to tailor the products to your skin type."
    },
    {
      q: "Is there parking available at the lounge?",
      a: "Yes, we have secure, dedicated customer parking located right at our lounge entrance in Colombo 6 for your convenience."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 3000);
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
                Our Sanctuary in Colombo
              </h2>
              <p className="text-foreground/70 font-light text-[1rem] lg:text-[1.05rem] leading-relaxed mb-12 max-w-md">
                Experience unparalleled care in a space designed entirely for your luxury and peace of mind. Drop in, call us, or send an email and let us customize your experience.
              </p>
              
              <div className="flex flex-col gap-10">
                {/* Address */}
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
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
                      className="text-foreground/80 font-serif text-lg lg:text-xl leading-relaxed hover:text-primary transition-colors"
                    >
                      No. 123, W.A. Silva Mawatha,<br />Colombo 00600, Sri Lanka
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.181-4.158-6.983-6.983l1.294-.97c.362-.273.528-.735.417-1.173L6.963 3.102a1.125 1.125 0 00-1.11-1.008H4.5a2.25 2.25 0 00-2.25 2.25v1.356z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-primary mb-1.5">TELEPHONE</span>
                    <Link href="tel:+94112345678" className="text-foreground/80 font-serif text-lg lg:text-xl hover:text-primary transition-colors">
                      +94 11 234 5678
                    </Link>
                    <Link href="https://wa.me/94777123456" target="_blank" className="text-primary font-mono text-sm tracking-wider font-semibold mt-1 hover:underline">
                      WhatsApp Chat: +94 77 712 3456
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-primary mb-1.5">EMAIL</span>
                    <Link href="mailto:hello@lavendra.lk" className="text-foreground/80 font-serif text-lg lg:text-xl hover:text-primary transition-colors">
                      hello@lavendra.lk
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
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-white font-bold text-center uppercase tracking-widest text-[0.75rem] shadow-lg hover:bg-primary-hover hover:scale-[1.03] transition-all duration-300 border border-primary"
                  >
                    SEND MESSAGE
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
                          <span className="font-serif text-lg text-foreground font-medium">Thank You!</span>
                          <span className="text-foreground/60 text-xs mt-1">Our concierge team will respond shortly.</span>
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
