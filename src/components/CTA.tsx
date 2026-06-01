"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full bg-background flex justify-center py-20 lg:py-32 px-6 overflow-clip">
      <div className="w-full max-w-7xl relative rounded-[3rem] overflow-hidden bg-primary/95 text-white py-16 lg:py-24 px-8 lg:px-16 shadow-2xl border border-primary/20">
        
        {/* Abstract Glowing Accent Backdrops */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-black/20 to-transparent blur-3xl -ml-48 -mb-48 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[0.7rem] tracking-[0.3em] text-white/70 font-bold uppercase mb-4"
            >
              RESERVE YOUR EXPERIENCE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-wide mb-6 animate-glow"
            >
              Begin Your Journey <br />to Exquisite Radiance
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-[1.05rem] lg:text-[1.1rem] font-light leading-relaxed max-w-xl"
            >
              Step into a sanctuary of complete physical and spiritual rejuvenation. Our artisans are ready to craft a bespoke treatment tailored entirely to your unique essence.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[40%] flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 items-center justify-center lg:justify-end"
          >
            <Link 
              href="https://wa.me/94775201201" 
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-primary font-bold text-center uppercase tracking-widest text-[0.75rem] shadow-lg hover:bg-white/95 hover:scale-[1.03] transition-all duration-300 border border-white"
            >
              BOOK AN APPOINTMENT
            </Link>
            <Link 
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-white font-bold text-center uppercase tracking-widest text-[0.75rem] border border-white/30 hover:border-white hover:bg-white/5 hover:scale-[1.03] transition-all duration-300"
            >
              EXPLORE SERVICES
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
