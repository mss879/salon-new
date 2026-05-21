"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BeautyServicesTab() {
  const [activeTab, setActiveTab] = useState(0);
  const isScrollingRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const tabs = [
    {
      title: "Our Heritage",
      desc: "Located in the suburbs of Colombo 6, we are the city's most prestigious one-stop unisex salon. With years of expertise, we represent a commitment to true beauty transformations and a warm, welcoming signature experience.",
      img: "/images/heritage_pillar.png",
    },
    {
      title: "ISO 9001:2015",
      desc: "We are honored to be one of the very few salons in Sri Lanka to achieve the ISO 9001:2015 certification. From continuous improvement to risk-based thinking, we're raising the standard of professional salon care.",
      img: "/images/certification_pillar.png",
    },
    {
      title: "Master Craftsmanship",
      desc: "Technique can be taught, but soul is rare. Our team combines time-tested skills with soulful service. Trained in the latest techniques and cutting-edge tools, we deliver an experience unlike any other.",
      img: "/images/craftsmanship_pillar.png",
    }
  ];

  useEffect(() => {
    // Only activate scroll spy observer on desktop (lg viewports)
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (!mediaQuery.matches) return;

    const elements = document.querySelectorAll(".scroll-section-card");
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -40% 0px",
      threshold: 0.15,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return; // Prevent flickering during programmatically initiated scrolls

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexStr = entry.target.getAttribute("data-index");
          if (indexStr !== null) {
            setActiveTab(parseInt(indexStr, 10));
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);
    observerRef.current = observer;
    elements.forEach((el) => observer.observe(el));

    // Handle dynamic viewport resize
    const listener = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        observer.disconnect();
      } else {
        elements.forEach((el) => observer.observe(el));
      }
    };
    mediaQuery.addEventListener("change", listener);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  const scrollToSection = (index: number) => {
    isScrollingRef.current = true;
    setActiveTab(index);

    const target = document.querySelector(`.scroll-section-card[data-index="${index}"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Reset scroll flag after smooth scroll is complete
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 850);
  };

  return (
    <section className="w-full bg-background flex justify-center py-20 lg:py-32 px-6 overflow-clip border-b border-foreground/5">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
        
        {/* Left Side: Sticky Editorial Header & Timeline */}
        <div className="w-full lg:w-[48%] lg:sticky lg:top-32 lg:h-[calc(100vh-14rem)] flex flex-col justify-between py-2">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="uppercase text-[0.7rem] font-bold tracking-[0.25em] text-primary/80 mb-6"
            >
              THE ESSENCE OF BEAUTY
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl lg:text-[2.6rem] xl:text-[3.2rem] text-foreground font-semibold leading-[1.15] tracking-wide"
            >
              Crafting Moments <br className="hidden xl:inline" />of Pure Indulgence
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-foreground/60 text-[1rem] lg:text-[1.05rem] font-light leading-relaxed mt-6 max-w-lg"
            >
              At Lavendra Beauty Lounge, we believe that true beauty is an experience of complete harmony. Explore the core pillars that define our relentless pursuit of cosmetic and therapeutic perfection.
            </motion.p>
          </div>

          {/* Timeline Indicators - visible only on desktop */}
          <div className="hidden lg:flex flex-col gap-1 mt-12 w-full max-w-xs relative pl-2">
            {/* Continuous Track Line connecting the centers of all dots exactly */}
            <div className="absolute left-[20px] top-[22px] bottom-[22px] w-[1px] bg-foreground/10" />

            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => scrollToSection(idx)}
                  className="group flex items-start text-left focus:outline-none py-2.5 relative pl-8"
                >
                  {/* Timeline Dot for each element */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6">
                    {/* The dot */}
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full"
                      animate={{
                        scale: isActive ? 2 : 1,
                        backgroundColor: isActive ? "#9b3030" : "rgba(0, 0, 0, 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className={`font-mono text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300 ${isActive ? "text-primary font-bold" : "text-foreground/30 group-hover:text-foreground/50"}`}>
                      PILLAR 0{idx + 1}
                    </span>
                    <span className={`font-serif text-lg lg:text-xl mt-0.5 transition-all duration-300 ${isActive ? "text-foreground font-medium translate-x-1" : "text-foreground/30 group-hover:text-foreground/50"}`}>
                      {tab.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Free Scrolling Visual Cards */}
        <div className="w-full lg:w-[52%] flex flex-col gap-20 lg:gap-28 pt-4">
          {tabs.map((tab, idx) => {
            return (
              <div
                key={idx}
                data-index={idx}
                className="scroll-section-card w-full flex flex-col"
              >
                {/* Visual Container - cropped to wider, cinematic aspect ratio */}
                <div className="relative w-full aspect-[16/10] lg:aspect-[1.9/1] rounded-[2rem] overflow-hidden shadow-xl bg-neutral-100 group border border-foreground/5">
                  <Image 
                    src={tab.img}
                    alt={tab.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority={idx === 0}
                  />
                  
                  {/* Elegant Glassmorphic Floating Pillar Badge */}
                  <div className="absolute top-5 left-5 bg-white/75 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full shadow-sm">
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-primary font-bold uppercase">
                      0{idx + 1} / 0{tabs.length}
                    </span>
                  </div>
                  
                  {/* Soft overlay gradient that highlights on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                {/* Text Content Block */}
                <div className="mt-6 flex flex-col pl-2">
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-primary font-bold uppercase">
                    OUR APPROACH
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground font-semibold mt-1">
                    {tab.title}
                  </h3>
                  <p className="text-foreground/70 text-[0.98rem] lg:text-[1.02rem] font-light leading-relaxed mt-3 max-w-2xl">
                    {tab.desc}
                  </p>
                  
                  <Link href="/about-us" className="group/link inline-flex items-center gap-3 mt-5 w-max">
                    <span className="uppercase text-[0.65rem] font-bold tracking-[0.2em] text-primary transition-colors hover:text-primary-hover">
                      DISCOVER OUR STORY
                    </span>
                    <div className="w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-300 ease-out group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:shadow-md">
                      <svg className="w-3 h-3 text-primary transition-colors duration-300 group-hover/link:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
