"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Master Craftsmanship",
      desc: "Technique can be taught, but soul is rare. Our team of master stylists and aestheticians are obsessed with the microscopic details of their craft. From the precise angle of a shear to the cellular level of skincare, we approach every service as a bespoke commission.",
    },
    {
      title: "The Sanctuary",
      desc: "We designed our environment to be an architectural exhale. Minimalist lines, warm amber lighting, and the subtle scent of bergamot greet you at the door. Every texture and sound is curated to bring you back to center.",
    },
    {
      title: "Our Commitment",
      desc: "We source only the world's most premium, ethically derived products. We are honored to be one of the very few salons to achieve the prestigious ISO 9001:2015 certification, ensuring our artistry is matched by unparalleled quality standards.",
    }
  ];

  return (
    <main className="flex-1 flex flex-col items-center w-full bg-background text-foreground overflow-hidden">
      
      {/* =========================================
          CHAPTER 1: THE STORY (OVERLAP COMPOSITION)
          ========================================= */}
      <section className="w-full bg-background flex justify-center pt-40 pb-32 px-6">
        <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-6 text-primary">
              OUR ORIGIN
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.05] tracking-tight mb-8 text-foreground">
              Not Just Beauty.<br/>
              <span className="italic text-foreground/60">An Art Form.</span>
            </h1>
            
            <div className="flex flex-col gap-6 text-foreground/70 font-light text-[1.1rem] leading-relaxed mb-10">
              <p>
                Since our inception, we have sought to redefine the salon experience. We believe that true elegance requires precision, passion, and an uncompromising commitment to the craft.
              </p>
              <p>
                This space was built to assemble the city's most talented artisans under one roof, fostering an environment where technical brilliance meets profound empathy.
              </p>
            </div>

            <Link href="/services" className="group inline-flex items-center gap-4 w-max">
              <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-primary transition-colors hover:text-primary-hover">
                DISCOVER OUR SERVICES
              </span>
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-500 ease-out group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg">
                <svg className="w-4 h-4 text-primary transition-colors duration-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </motion.div>

          {/* Right Side: Overlapping Images (Mirrors homepage AboutUs component) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] flex items-center justify-center"
          >
            {/* Main Arch Image */}
            <div className="absolute top-0 right-0 w-[80%] aspect-[3/4] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-background">
              <Image 
                src="/images/about_hero.png"
                alt="Salon Luxury Experience"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Overlapping Circle Image */}
            <div className="absolute bottom-10 left-0 w-[55%] aspect-square rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 border-[12px] border-background">
              <Image 
                src="/images/about_craft.png"
                alt="Master Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          CHAPTER 2: THE PHILOSOPHY (INTERACTIVE ACCORDION)
          ========================================= */}
      <section className="w-full bg-background flex justify-center py-32 px-6">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Sticky Image Frame */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-[500px] lg:h-[700px] relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-background">
            <motion.div
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image 
                src="/images/about_space.png"
                alt="The Sanctuary"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side: Interactive Accordion (Mirrors homepage BeautyServicesTab) */}
          <div className="w-full lg:w-1/2 flex flex-col pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-primary mb-12"
            >
              OUR PHILOSOPHY
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
                    <div className="flex items-center justify-between">
                      <h3 className={`font-serif text-3xl lg:text-5xl transition-all duration-500 ease-out ${isActive ? "text-foreground" : "text-foreground/30 group-hover:text-foreground/50"}`}>
                        {tab.title}
                      </h3>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? "border-primary bg-primary text-white" : "border-foreground/20 text-foreground/30"}`}>
                        <svg className={`w-4 h-4 transition-transform duration-500 ${isActive ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-foreground/70 text-[1.05rem] font-light leading-relaxed pt-8 pb-4 pr-12">
                            {tab.desc}
                          </p>
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

      {/* =========================================
          CHAPTER 3: THE VISIONARY (HIGH-CONTRAST)
          ========================================= */}
      <section className="w-full bg-primary flex justify-center py-32 px-6 text-white border-t border-white/10">
        <div className="w-full max-w-5xl flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-6 text-white/70">
              THE VISIONARY
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4">
              Guided by Passion
            </h2>
            <h3 className="text-xl font-light text-white/60 italic">
              Creative Director & Founder
            </h3>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl mb-16 border-8 border-white/10"
          >
            <Image 
              src="/images/about_founder.png" 
              alt="Creative Director" 
              fill 
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl flex flex-col gap-8 text-white/90 font-light text-xl leading-relaxed relative"
          >
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[8rem] font-serif text-white/5 leading-none">
              "
            </span>
            <p className="relative z-10 italic">
              "My philosophy has always been simple: beauty is an emotional experience, not just a physical one. When a client sits in my chair, I am not just looking at their hair or their skin—I am looking at their essence."
            </p>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
