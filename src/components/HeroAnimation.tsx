"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function HeroAnimation({ startAnimation = true }: { startAnimation?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // List of the 6 core beauty tools
  const tools = [
    { name: "Hair", img: "/images/tools/hairdryer-red.png" },
    { name: "Cut", img: "/images/tools/scissors-red.png" },
    { name: "Makeup", img: "/images/tools/brush-red.png" },
    { name: "Nails", img: "/images/tools/nailpolish-red.png" },
    { name: "Style", img: "/images/tools/comb-red.png" },
    { name: "Beauty", img: "/images/tools/mirror-red.png" },
  ];

  // Duplicate for seamless infinite marquee loop on mobile
  const marqueeTools = [...tools, ...tools, ...tools];

  useEffect(() => {
    if (!containerRef.current || !startAnimation) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // 1. Desktop & Medium Screens (min-width: 768px)
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({ delay: 0.2 });

        const entries = [
          { el: ".tool-dryer",    from: { x: 300, y: -200, rotation: 60, scale: 0.5, opacity: 0 } },
          { el: ".tool-scissors", from: { x: -300, y: -100, rotation: -120, scale: 1.5, opacity: 0 } },
          { el: ".tool-brush",    from: { x: 250, y: 250, rotation: 90, scale: 0.8, opacity: 0 } },
          { el: ".tool-polish",   from: { x: -250, y: 200, rotation: -60, scale: 1.2, opacity: 0 } },
          { el: ".tool-comb",     from: { x: 0, y: -300, rotation: 180, scale: 0.6, opacity: 0 } },
          { el: ".tool-mirror",   from: { x: 0, y: 300, rotation: -180, scale: 1.4, opacity: 0 } },
        ];

        // Cinematic slow fade-in for the center ring
        tl.fromTo(
          ".center-ring-outer",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
        );
        
        tl.fromTo(
          ".center-ring-inner",
          { scale: 1.2, opacity: 0, rotation: -45 },
          { scale: 1, opacity: 1, rotation: 0, duration: 2, ease: "power3.out" },
          "<"
        );

        tl.fromTo(
          ".center-text",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "-=1.5"
        );

        // Draw the orbital lines gracefully
        tl.fromTo(
          ".orbit-line-1",
          { strokeDashoffset: 264 },
          { strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut" },
          "-=1.8"
        );
        
        tl.fromTo(
          ".orbit-line-2",
          { strokeDashoffset: 220 },
          { strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut" },
          "-=2.2"
        );

        // Tools glide in cinematically
        entries.forEach((entry, i) => {
          const offset = i === 0 ? "-=1.5" : "-=1.3";
          tl.fromTo(
            entry.el,
            { ...entry.from, filter: "blur(8px)" },
            {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              duration: 2,
              ease: "expo.out",
            },
            offset
          );

          // Labels fade in slowly
          tl.fromTo(
            `${entry.el}-label`,
            { opacity: 0, y: 5 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=1.5"
          );
        });

        // Subtle, slow pulse on the center rings for breathing effect
        tl.to(".center-ring-outer", {
          scale: 1.02,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        
        tl.to(".center-ring-inner", {
          rotation: 15,
          scale: 0.98,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Slow continuous orbital float for tools
        entries.forEach((entry, i) => {
          const angle = (i / entries.length) * Math.PI * 2;
          const floatX = Math.cos(angle) * 8;
          const floatY = Math.sin(angle) * 8;

          tl.to(
            entry.el,
            {
              x: floatX,
              y: floatY,
              rotation: "random(-3, 3)",
              duration: "random(4, 6)",
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            },
            "-=2"
          );
        });

        // Ambient light flare
        tl.fromTo(
          ".ambient-flare",
          { opacity: 0, scale: 0.5 },
          { opacity: 0.6, scale: 1, duration: 3, ease: "power2.out" },
          "-=4"
        );
        
        tl.to(".ambient-flare", {
          opacity: 0.3,
          scale: 1.1,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

      // 2. Mobile Screens (max-width: 767px)
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({ delay: 0.1 });

        // Gentle scale-in entrance for the mobile row
        tl.fromTo(
          ".mobile-marquee-inner",
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
        );

        // Infinite smooth horizontal marquee loop
        gsap.to(".mobile-marquee-inner", {
          x: "-33.3333%", // since we have three sets of tools, shifting exactly by one full set ensures perfect seamless loops
          duration: 25,
          ease: "none",
          repeat: -1,
        });

        // Subtle organic float drift for individual marquee pills
        gsap.to(".mobile-pill", {
          y: "random(-3, 3)",
          rotation: "random(-2, 2)",
          duration: "random(2.5, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            each: 0.15,
            from: "random",
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, [startAnimation]);

  // Desktop circular positions
  const desktopRadius = 40;
  const desktopPositions = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
    return {
      left: `${50 + Math.cos(angle) * desktopRadius}%`,
      top: `${50 + Math.sin(angle) * desktopRadius}%`,
    };
  });

  const toolClass = "w-14 h-14 sm:w-18 sm:h-18 lg:w-24 lg:h-24 rounded-full bg-white/30 border border-white/60 shadow-[0_8px_32px_rgba(155,48,48,0.1)] flex items-center justify-center backdrop-blur-md relative overflow-hidden group p-1";
  const imgClass = "w-full h-full object-cover rounded-full relative z-10 shadow-sm";

  return (
    <div ref={containerRef} className="w-full relative">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP & MEDIUM VIEWPORT LAYOUT (Constellation Solar System)         */}
      {/* ========================================================================= */}
      <div className="hidden md:block w-full aspect-square max-w-[560px] mx-auto relative">
        {/* Cinematic ambient center glow */}
        <div className="ambient-flare absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />

        {/* Center circle with salon text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="center-ring-outer w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border border-primary/20 flex items-center justify-center relative bg-white/10 backdrop-blur-sm shadow-2xl" style={{ opacity: 0 }}>
            <div className="center-ring-inner absolute inset-2 sm:inset-3 rounded-full border border-dashed border-primary/30" />
            <div className="absolute inset-0 rounded-full border border-white/50 pointer-events-none" />
            <div className="center-text flex flex-col items-center justify-center z-10 w-full h-full" style={{ opacity: 0 }}>
              <Image 
                src="/logo.png"
                alt="Solano Logo"
                width={100}
                height={30}
                className="w-[75%] h-auto opacity-95"
              />
            </div>
          </div>
        </div>

        {/* Connecting orbital lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" fill="none">
          <circle className="orbit-line-1" cx="50" cy="50" r="40" stroke="#9b3030" strokeWidth="0.1" strokeDasharray="264" opacity="0.3" />
          <circle className="orbit-line-2" cx="50" cy="50" r="32" stroke="#9b3030" strokeWidth="0.05" strokeDasharray="220" opacity="0.15" />
        </svg>

        {/* Tool 0: Hair Dryer — top */}
        <div
          className="tool-dryer absolute -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: desktopPositions[0].left, top: desktopPositions[0].top, opacity: 0 }}
        >
          <div className="flex flex-col items-center">
            <div className={toolClass}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
              <Image src="/images/tools/hairdryer-red.png" alt="Hair Dryer" width={100} height={100} className={imgClass} />
            </div>
          </div>
        </div>
        <span 
          className="tool-dryer-label absolute text-[0.65rem] sm:text-[0.85rem] uppercase tracking-[0.25em] font-bold text-primary/75 -translate-x-1/2 whitespace-nowrap z-20 drop-shadow-sm" 
          style={{ left: desktopPositions[0].left, top: `${parseFloat(desktopPositions[0].top) + 11}%`, opacity: 0 }}
        >
          Hair
        </span>

        {/* Tool 1: Scissors — top right */}
        <div
          className="tool-scissors absolute -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: desktopPositions[1].left, top: desktopPositions[1].top, opacity: 0 }}
        >
          <div className="flex flex-col items-center">
            <div className={toolClass}>
               <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
               <Image src="/images/tools/scissors-red.png" alt="Scissors" width={100} height={100} className={imgClass} />
            </div>
          </div>
        </div>
        <span 
          className="tool-scissors-label absolute text-[0.65rem] sm:text-[0.85rem] uppercase tracking-[0.25em] font-bold text-primary/75 -translate-x-1/2 whitespace-nowrap z-20 drop-shadow-sm" 
          style={{ left: desktopPositions[1].left, top: `${parseFloat(desktopPositions[1].top) + 11}%`, opacity: 0 }}
        >
          Cut
        </span>

        {/* Tool 2: Makeup Brush — bottom right */}
        <div
          className="tool-brush absolute -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: desktopPositions[2].left, top: desktopPositions[2].top, opacity: 0 }}
        >
          <div className="flex flex-col items-center">
            <div className={toolClass}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
              <Image src="/images/tools/brush-red.png" alt="Makeup Brush" width={100} height={100} className={imgClass} />
            </div>
          </div>
        </div>
        <span 
          className="tool-brush-label absolute text-[0.65rem] sm:text-[0.85rem] uppercase tracking-[0.25em] font-bold text-primary/75 -translate-x-1/2 whitespace-nowrap z-20 drop-shadow-sm" 
          style={{ left: desktopPositions[2].left, top: `${parseFloat(desktopPositions[2].top) + 11}%`, opacity: 0 }}
        >
          Makeup
        </span>

        {/* Tool 3: Nail Polish — bottom */}
        <div
          className="tool-polish absolute -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: desktopPositions[3].left, top: desktopPositions[3].top, opacity: 0 }}
        >
          <div className="flex flex-col items-center">
            <div className={toolClass}>
               <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
               <Image src="/images/tools/nailpolish-red.png" alt="Nail Polish" width={100} height={100} className={imgClass} />
            </div>
          </div>
        </div>
        <span 
          className="tool-polish-label absolute text-[0.65rem] sm:text-[0.85rem] uppercase tracking-[0.25em] font-bold text-primary/75 -translate-x-1/2 whitespace-nowrap z-20 drop-shadow-sm" 
          style={{ left: desktopPositions[3].left, top: `${parseFloat(desktopPositions[3].top) + 11}%`, opacity: 0 }}
        >
          Nails
        </span>

        {/* Tool 4: Comb — bottom left */}
        <div
          className="tool-comb absolute -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: desktopPositions[4].left, top: desktopPositions[4].top, opacity: 0 }}
        >
          <div className="flex flex-col items-center">
            <div className={toolClass}>
               <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
               <Image src="/images/tools/comb-red.png" alt="Comb" width={100} height={100} className={imgClass} />
            </div>
          </div>
        </div>
        <span 
          className="tool-comb-label absolute text-[0.65rem] sm:text-[0.85rem] uppercase tracking-[0.25em] font-bold text-primary/75 -translate-x-1/2 whitespace-nowrap z-20 drop-shadow-sm" 
          style={{ left: desktopPositions[4].left, top: `${parseFloat(desktopPositions[4].top) + 11}%`, opacity: 0 }}
        >
          Style
        </span>

        {/* Tool 5: Hand Mirror — top left */}
        <div
          className="tool-mirror absolute -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: desktopPositions[5].left, top: desktopPositions[5].top, opacity: 0 }}
        >
          <div className="flex flex-col items-center">
            <div className={toolClass}>
               <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
               <Image src="/images/tools/mirror-red.png" alt="Hand Mirror" width={100} height={100} className={imgClass} />
            </div>
          </div>
        </div>
        <span 
          className="tool-mirror-label absolute text-[0.65rem] sm:text-[0.85rem] uppercase tracking-[0.25em] font-bold text-primary/75 -translate-x-1/2 whitespace-nowrap z-20 drop-shadow-sm" 
          style={{ left: desktopPositions[5].left, top: `${parseFloat(desktopPositions[5].top) + 11}%`, opacity: 0 }}
        >
          Beauty
        </span>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE VIEWPORT LAYOUT (Luxury Compact Horizontal Drifting Ribbon)     */}
      {/* ========================================================================= */}
      <div className="block md:hidden w-full overflow-hidden py-6 marquee-container relative my-2">
        {/* Soft elegant ambient glows for mobile row */}
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-32 h-16 bg-primary/5 blur-2xl rounded-full pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-32 h-16 bg-primary/5 blur-2xl rounded-full pointer-events-none" />

        <div className="mobile-marquee-inner flex gap-5 w-[300%] pl-2">
          {marqueeTools.map((tool, idx) => (
            <div 
              key={idx}
              className="mobile-pill flex items-center gap-3.5 bg-white/40 border border-white/70 px-4 py-2.5 rounded-full shadow-[0_4px_24px_rgba(155,48,48,0.04)] backdrop-blur-md flex-shrink-0"
            >
              {/* Circular Icon Frame */}
              <div className="w-10 h-10 rounded-full bg-white/50 border border-white/80 p-0.5 relative overflow-hidden flex items-center justify-center flex-shrink-0 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-40" />
                <Image 
                  src={tool.img} 
                  alt={tool.name} 
                  width={40} 
                  height={40} 
                  className="w-full h-full object-cover rounded-full relative z-10" 
                />
              </div>

              {/* Text Label */}
              <span className="font-mono text-[0.7rem] tracking-[0.25em] font-extrabold text-primary/80 uppercase pr-1.5">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
