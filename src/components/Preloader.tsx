"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isCut, setIsCut] = useState(false);
  const [scissorsX, setScissorsX] = useState(180);
  const [scissorsRotateA, setScissorsRotateA] = useState(0);
  const [scissorsRotateB, setScissorsRotateB] = useState(0);
  const [scissorsOpacity, setScissorsOpacity] = useState(1);
  const [hairOpacity, setHairOpacity] = useState(1);
  const [particles, setParticles] = useState<{ id: number; tx: number; ty: number }[]>([]);

  // 12 naturally curved hair strands
  const hairStrands = Array.from({ length: 12 }, (_, i) => {
    const x = 91 + i * 1.6;
    // Curved styled locks that meet perfectly at y=70 (cut point)
    return {
      id: i,
      x,
      topPath: `M ${x} 15 Q ${x + (i - 5.5) * 0.15} 42, ${x} 70`,
      bottomPath: `M ${x} 70 Q ${x + (i - 5.5) * 0.3} 92, ${x + (i - 5.5) * 0.5} 115`,
    };
  });

  const triggerBurst = () => {
    const newParticles = Array.from({ length: 18 }, (_, i) => {
      const angle = (Math.random() * Math.PI) + Math.PI * 0.05; // explode mostly downwards/sideways
      const distance = 15 + Math.random() * 30;
      return {
        id: Date.now() + i,
        tx: Math.cos(angle) * distance,
        ty: 20 + Math.random() * 40,
      };
    });
    setParticles(newParticles);
  };

  useEffect(() => {
    let active = true;
    let cycleTimeout: NodeJS.Timeout;

    const runAnimationCycle = () => {
      if (!active) return;

      // 1. Reset state
      setIsCut(false);
      setParticles([]);
      setScissorsX(180);
      setScissorsOpacity(1);
      setScissorsRotateA(0);
      setScissorsRotateB(0);
      setHairOpacity(1);

      // 2. Scissors glide in and open
      setTimeout(() => {
        if (!active) return;
        setScissorsX(100);
        setScissorsRotateA(26);
        setScissorsRotateB(-26);
      }, 100);

      // 3. The Snip (close blades rapidly)
      setTimeout(() => {
        if (!active) return;
        setScissorsRotateA(-2);
        setScissorsRotateB(2);
      }, 1100);

      // 4. Trigger the cut, particle burst, and fall mechanics
      setTimeout(() => {
        if (!active) return;
        setIsCut(true);
        triggerBurst();
      }, 1250);

      // 5. Scissors withdraw to the left and fade
      setTimeout(() => {
        if (!active) return;
        setScissorsX(40);
        setScissorsOpacity(0);
      }, 1700);

      // 6. Settle and schedule next cycle
      cycleTimeout = setTimeout(runAnimationCycle, 2800);
    };

    runAnimationCycle();

    // Overall preloader duration (ends after 2 complete cuts for high-satisfaction look)
    const exitTimeout = setTimeout(() => {
      onComplete();
    }, 5600);

    return () => {
      active = false;
      clearTimeout(cycleTimeout);
      clearTimeout(exitTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#fdf8f3] flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Subtle luxury decorative ambient rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-primary animate-pulse" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-primary" />
      </div>

      <div className="flex flex-col items-center gap-6 sm:gap-8 z-10 w-full max-w-md px-6">
        
        {/* Core Hair Cutting Canvas */}
        <div className="relative w-full aspect-[4/3] max-w-[360px] bg-white/40 border border-primary/5 rounded-[2.5rem] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.015)] backdrop-blur-sm overflow-hidden">
          
          <svg viewBox="0 0 200 150" className="w-full h-full text-primary">
            {/* 1. Styled Locks of Hair (Top Half - Anchored) */}
            <g className="text-[#3b2a20] opacity-85">
              {hairStrands.map((hair) => (
                <path
                  key={`top-${hair.id}`}
                  d={hair.topPath}
                  stroke="currentColor"
                  strokeWidth="0.85"
                  fill="none"
                  strokeLinecap="round"
                />
              ))}
            </g>

            {/* 2. Styled Locks of Hair (Bottom Half - Cut/Severable) */}
            <AnimatePresence>
              {!isCut ? (
                <motion.g 
                  key="hair-uncut"
                  className="text-[#3b2a20] opacity-85"
                >
                  {hairStrands.map((hair) => (
                    <path
                      key={`bottom-uncut-${hair.id}`}
                      d={hair.bottomPath}
                      stroke="currentColor"
                      strokeWidth="0.85"
                      fill="none"
                      strokeLinecap="round"
                    />
                  ))}
                </motion.g>
              ) : (
                <motion.g
                  key="hair-cut"
                  initial={{ y: 0, opacity: 1, rotate: 0 }}
                  animate={{ 
                    y: 45, 
                    opacity: 0,
                    rotate: 8,
                    x: -5
                  }}
                  transition={{ duration: 0.85, ease: [0.36, 0.07, 0.19, 0.97] }}
                  className="text-[#3b2a20]"
                >
                  {hairStrands.map((hair) => (
                    <path
                      key={`bottom-cut-${hair.id}`}
                      d={hair.bottomPath}
                      stroke="currentColor"
                      strokeWidth="0.85"
                      fill="none"
                      strokeLinecap="round"
                    />
                  ))}
                </motion.g>
              )}
            </AnimatePresence>

            {/* 3. Hair Clippings Particle System Burst */}
            {isCut && particles.map((p) => (
              <motion.circle
                key={p.id}
                cx="100"
                cy="70"
                r="0.75"
                fill="#3b2a20"
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ x: p.tx, y: p.ty, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            ))}

            {/* 4. Luxury Professional Shears */}
            <motion.g
              animate={{ x: scissorsX, opacity: scissorsOpacity }}
              transition={{ 
                x: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
                opacity: { duration: 0.4 }
              }}
              style={{ y: 70, rotate: -18 }}
            >
              {/* Part A: Bottom-Left Handle & Top-Right Blade */}
              <motion.g
                style={{ transformOrigin: "0px 0px" }}
                animate={{ rotate: scissorsRotateA }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {/* Finger Loop */}
                <circle cx="-26" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="-26" cy="24" r="5" stroke="currentColor" strokeWidth="0.75" fill="none" className="opacity-30" />
                {/* Finger Tang */}
                <path d="M -34 24 C -38 24, -40 20, -38 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                {/* Shank */}
                <path d="M -26 15 C -22 8, -16 4, -12 0" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                {/* Sword Leaf Blade */}
                <path d="M 0 0 C 1 -10, 2 -25, 0 -35 C -1.5 -25, -1 -10, 0 0 Z" fill="currentColor" />
                <path d="M 0 0 L 0 -35" stroke="white" strokeWidth="0.4" className="opacity-40" />
              </motion.g>

              {/* Part B: Bottom-Right Handle & Top-Left Blade */}
              <motion.g
                style={{ transformOrigin: "0px 0px" }}
                animate={{ rotate: scissorsRotateB }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {/* Finger Loop */}
                <circle cx="26" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="26" cy="24" r="5" stroke="currentColor" strokeWidth="0.75" fill="none" className="opacity-30" />
                {/* Shank */}
                <path d="M 26 15 C 22 8, 16 4, 12 0" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                {/* Sword Leaf Blade */}
                <path d="M 0 0 C -1 -10, -2 -25, 0 -35 C 1.5 -25, 1 -10, 0 0 Z" fill="currentColor" />
                <path d="M 0 0 L 0 -35" stroke="white" strokeWidth="0.4" className="opacity-40" />
              </motion.g>

              {/* Central Pivot Pin */}
              <circle cx="0" cy="0" r="3" fill="#c2933f" stroke="currentColor" strokeWidth="1" />
              <circle cx="0" cy="0" r="1" fill="currentColor" />
              <circle cx="-0.8" cy="-0.8" r="0.6" fill="white" className="opacity-80" />
            </motion.g>
          </svg>
        </div>

        {/* Brand context and indicators */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-sans text-[0.75rem] font-bold uppercase tracking-[0.35em] text-primary animate-pulse">
            ARTISANAL CRAFTSMANSHIP
          </span>
          <span className="font-serif text-lg tracking-wider text-foreground/80 font-light italic">
            Lavendra Beauty Lounge
          </span>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-36 h-[2px] bg-primary/5 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5.6, ease: "linear" }}
            className="absolute h-full bg-primary"
          />
        </div>

      </div>
    </div>
  );
}
