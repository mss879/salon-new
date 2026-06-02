"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px (past the hero section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Except on the contact page
  if (pathname === "/contact") {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-6 z-50 flex flex-col gap-4"
        >
          {/* Phone Call Button */}
          <div className="relative group flex items-center justify-end">
            <span className="absolute mr-14 bg-foreground/90 backdrop-blur-sm text-background text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
              Call Us
            </span>
            <a
              href="tel:+94775201201"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary-hover text-white flex items-center justify-center shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/10"
              aria-label="Call Us"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.181-4.158-6.983-6.983l1.294-.97c.362-.273.528-.735.417-1.173L6.963 3.102a1.125 1.125 0 00-1.11-1.008H4.5a2.25 2.25 0 00-2.25 2.25v1.356z" />
              </svg>
            </a>
          </div>

          {/* WhatsApp Button */}
          <div className="relative group flex items-center justify-end">
            <span className="absolute mr-14 bg-foreground/90 backdrop-blur-sm text-background text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
              Chat on WhatsApp
            </span>
            <a
              href="https://wa.me/94775201201"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/10"
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.8 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
