"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  
  const words = ["HAIR ARTISTRY", "NAIL CARE", "SKIN THERAPY", "WELLNESS"];

  useEffect(() => {
    // Cycle through words
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        } else {
          clearInterval(wordInterval);
          // Elegant exit transition delay after the final word
          setTimeout(() => {
            setIsExiting(true);
            
            // Wait for panel slide-up to finish, then trigger homepage animations
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 1000);
          return prev;
        }
      });
    }, 850);

    return () => {
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-[#fdf8f3] flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Subtle floating luxury decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full border border-primary animate-pulse" />
            <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-primary" />
          </div>

          <div className="flex flex-col items-center gap-8 sm:gap-10 z-10 w-full max-w-md px-6">
            
            {/* Premium Slanted Scissors Motion Animation */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-36 h-36 flex items-center justify-center mb-2 text-primary"
            >
              {/* Outer soft glowing ring */}
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping opacity-25" style={{ animationDuration: '3.5s' }} />
              
              <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_6px_15px_rgba(155,48,48,0.18)]" style={{ transform: "rotate(-18deg)" }}>
                {/* Part A: Bottom-Left Handle & Top-Right Blade */}
                <motion.g
                  style={{ transformOrigin: "50px 50px" }}
                  animate={{ rotate: [0, 26, 26, -1.5, 3, 0, 0] }}
                  transition={{
                    duration: 2.0,
                    times: [0, 0.35, 0.45, 0.52, 0.60, 0.68, 1.0],
                    ease: [
                      "easeOut",
                      "linear",
                      "circIn",
                      "easeOut",
                      "easeInOut",
                      "linear"
                    ],
                    repeat: Infinity
                  }}
                >
                  {/* Finger Loop */}
                  <circle cx="34" cy="74" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
                  <circle cx="34" cy="74" r="6" stroke="currentColor" strokeWidth="1" fill="none" className="opacity-30" />
                  {/* Finger Rest Tang */}
                  <path d="M 27 78 C 23 79, 20 75, 23 71" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  {/* Shank */}
                  <path d="M 34 65 C 38 58, 44 54, 48 50" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                  {/* Sword Leaf Blade */}
                  <path d="M 50 50 C 51 40, 52 25, 50 12 C 48.5 25, 49 40, 50 50 Z" fill="currentColor" />
                  {/* Blade Edge Reflection Line */}
                  <path d="M 50 50 L 50 12" stroke="white" strokeWidth="0.5" className="opacity-40" />
                </motion.g>

                {/* Part B: Bottom-Right Handle & Top-Left Blade */}
                <motion.g
                  style={{ transformOrigin: "50px 50px" }}
                  animate={{ rotate: [0, -26, -26, 1.5, -3, 0, 0] }}
                  transition={{
                    duration: 2.0,
                    times: [0, 0.35, 0.45, 0.52, 0.60, 0.68, 1.0],
                    ease: [
                      "easeOut",
                      "linear",
                      "circIn",
                      "easeOut",
                      "easeInOut",
                      "linear"
                    ],
                    repeat: Infinity
                  }}
                >
                  {/* Finger Loop */}
                  <circle cx="66" cy="74" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
                  <circle cx="66" cy="74" r="6" stroke="currentColor" strokeWidth="1" fill="none" className="opacity-30" />
                  {/* Shank */}
                  <path d="M 66 65 C 62 58, 56 54, 52 50" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                  {/* Sword Leaf Blade */}
                  <path d="M 50 50 C 49 40, 48 25, 50 12 C 51.5 25, 51 40, 50 50 Z" fill="currentColor" />
                  {/* Blade Edge Reflection Line */}
                  <path d="M 50 50 L 50 12" stroke="white" strokeWidth="0.5" className="opacity-40" />
                </motion.g>

                {/* Central Gold Pivot Screw with reflection */}
                <circle cx="50" cy="50" r="4" fill="#c2933f" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="1.5" fill="currentColor" />
                <circle cx="48.8" cy="48.8" r="0.8" fill="white" className="opacity-80" />
              </svg>
            </motion.div>

            {/* Showcase words explaining what the business does */}
            <div className="h-10 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="font-sans text-[1.1rem] sm:text-[1.3rem] font-bold uppercase tracking-[0.3em] text-primary text-center"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Elegant loading progress line */}
            <div className="w-36 h-[2px] bg-primary/5 rounded-full overflow-hidden relative mt-2">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: (words.length * 0.85) + 1.0, ease: "linear" }}
                className="absolute h-full bg-primary"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
