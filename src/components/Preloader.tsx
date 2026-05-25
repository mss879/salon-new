"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  
  const words = ["HAIR ARTISTRY", "NAIL CARE", "SKIN THERAPY", "WELLNESS"];

  useEffect(() => {
    // Check if the preloader has already been shown in this session to prevent interrupting returning users
    const hasShownPreloader = sessionStorage.getItem("hasShownPreloader");
    if (hasShownPreloader) {
      onComplete();
      return;
    }

    setShouldRender(true);

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
            sessionStorage.setItem("hasShownPreloader", "true");
            
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

  if (!shouldRender) return null;

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

          <div className="flex flex-col items-center gap-8 sm:gap-10 z-10">
            {/* Elegant Logo entrance zoom */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="px-6 py-4 border-b border-primary/10 mb-4"
            >
              <Image 
                src="/logo.png" 
                alt="Lavendra Logo" 
                width={180} 
                height={55} 
                priority
                className="h-auto w-[160px] sm:w-[190px]"
              />
            </motion.div>

            {/* Showcase words explaining what the business does */}
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="font-sans text-[0.75rem] sm:text-xs font-bold uppercase tracking-[0.35em] text-primary"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Elegant loading progress line */}
            <div className="w-40 h-[2px] bg-primary/5 rounded-full overflow-hidden relative mt-2">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: (words.length * 0.85) + 1.2, ease: "linear" }}
                className="absolute h-full bg-primary"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
