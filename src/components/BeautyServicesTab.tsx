"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BeautyServicesTab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Our Heritage",
      desc: "Located in the suburbs of Colombo 6, we are the city's most prestigious one-stop unisex salon. With years of expertise, we represent a commitment to true beauty transformations and a warm, welcoming signature experience.",
      img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "ISO 9001:2015",
      desc: "We are honored to be one of the very few salons in Sri Lanka to achieve the ISO 9001:2015 certification. From continuous improvement to risk-based thinking, we're raising the standard of professional salon care.",
      img: "https://images.unsplash.com/photo-1516975080661-460d3d5f9de3?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Master Craftsmanship",
      desc: "Technique can be taught, but soul is rare. Our team combines time-tested skills with soulful service. Trained in the latest techniques and cutting-edge tools, we deliver an experience unlike any other.",
      img: "https://images.unsplash.com/photo-1521590832167-7bfc17484d8d?q=80&w=1000&auto=format&fit=crop",
    }
  ];

  return (
    <section className="w-full bg-background flex justify-center py-32 px-6">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Sticky Image Gallery */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-[500px] lg:h-[700px] relative rounded-[2rem] overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={tabs[activeTab].img}
                alt={tabs[activeTab].title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Interactive Accordion */}
        <div className="w-full lg:w-1/2 flex flex-col pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-primary/80 mb-12"
          >
            THE ESSENCE OF BEAUTY
          </motion.div>

          <div className="flex flex-col gap-8 w-full">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                  className="w-full border-b border-foreground/10 pb-8 flex flex-col cursor-pointer group"
                  onClick={() => setActiveTab(idx)}
                >
                  <h3 className={`font-serif text-4xl lg:text-5xl transition-all duration-500 ease-out ${isActive ? "text-foreground" : "text-foreground/30 group-hover:text-foreground/50"}`}>
                    {tab.title}
                  </h3>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-foreground/70 text-[1.05rem] font-light leading-relaxed pt-8 pb-4">
                          {tab.desc}
                        </p>
                        <Link href="/about-us" className="group/link inline-flex items-center gap-4 mt-4 w-max">
                          <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-primary transition-colors hover:text-primary-hover">
                            DISCOVER OUR STORY
                          </span>
                          <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-500 ease-out group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:shadow-lg">
                            <svg className="w-4 h-4 text-primary transition-colors duration-500 group-hover/link:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
