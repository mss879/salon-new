"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Nail Enhancements",
      desc: "From classic manicures and lotus pedicures to bespoke nail artistry and acrylic enhancements, we perfect every detail.",
      icon: "/icons/icon_nails_v2.png",
      delay: 0,
      link: "/services/nails"
    },
    {
      title: "Ayurvedic Therapies",
      desc: "Discover holistic wellness through our signature Shiroabhyanga rituals, deep tissue massages, and restorative care.",
      icon: "/icons/icon_ayurveda_v2.png",
      delay: 0.5,
      link: "/services/ayurveda"
    },
    {
      title: "Hair Artistry",
      desc: "Transform your look with expert coloring, ammonia-free treatments, keratin, and precision styling by our master stylists.",
      icon: "/icons/icon_hair_v2.png",
      delay: 1,
      link: "/services/hair"
    },
    {
      title: "Facial & Skincare",
      desc: "Rejuvenate your skin with signature HydraFacials, precise threading, and bespoke cosmetic embroidery.",
      icon: "/icons/icon_facial_v2.png",
      delay: 1.5,
      link: "/services/skincare"
    }
  ];

  return (
    <section className="w-full bg-primary flex justify-center py-32 px-6 text-white border-b border-white/10">
      <div className="w-full max-w-7xl flex flex-col gap-24">
        
        {/* Top Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24"
        >
          {/* Left Title */}
          <div className="flex-1">
            <div className="uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-6 text-white/70">
              OUR EXPERTISE
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Signature Treatments<br />Curated for You
            </h2>
          </div>
          
          {/* Right Description */}
          <div className="flex-1 flex flex-col justify-end lg:max-w-xl">
            <p className="text-white/80 text-[1.1rem] font-light leading-relaxed mb-8">
              Dive into our world of care at our renowned beauty salon. Our expert team is dedicated to providing exceptional, personalized treatments using the latest innovations in beauty services.
            </p>
            <div>
              <Link href="/price-list" className="group inline-flex flex-col relative overflow-hidden">
                <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] pb-2 text-white relative z-10 transition-transform duration-300 group-hover:-translate-y-full">
                  VIEW PRICE LIST
                </span>
                <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] pb-2 text-white absolute top-0 left-0 w-full h-full translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  VIEW PRICE LIST
                </span>
                <div className="w-full h-[1px] bg-white/30 transition-colors duration-300 group-hover:bg-white" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            >
              <Link href={service.link} className="flex flex-col group items-start relative h-full">
                <div className="mb-8 w-16 h-16 rounded-full border border-white/20 overflow-hidden relative transition-all duration-500 group-hover:border-white/60 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                </div>
                <h4 className="font-serif text-3xl mb-4 group-hover:text-white/90 transition-colors">{service.title}</h4>
                <p className="text-white/70 font-light leading-relaxed mb-8 flex-1 pr-4">
                  {service.desc}
                </p>
                <div className="uppercase text-[0.7rem] font-bold tracking-widest text-white/50 transition-all duration-300 group-hover:text-white flex items-center gap-2 mt-auto">
                  DISCOVER 
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
