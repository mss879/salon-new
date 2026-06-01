"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Nails & Lashes",
      desc: "Indulgent classic manicures, luxury hot-towel pedicures, and masterfully mapped lash extensions.",
      icon: "/icons/icon_nails_v2.webp",
      delay: 0,
      link: "/services#manicure-pedicure"
    },
    {
      title: "Massage & Wellness",
      desc: "Restore physical equilibrium through signature full body massages, back recovery, and warm herbal oil scalp therapy.",
      icon: "/icons/icon_ayurveda_v2.webp",
      delay: 0.5,
      link: "/services#massage-services-ladies-only"
    },
    {
      title: "Hair Artistry",
      desc: "Transform your look with precision cuts, layers, butterfly cuts, and beautiful custom styles.",
      icon: "/icons/icon_hair_v2.webp",
      delay: 1,
      link: "/services#haircuts"
    },
    {
      title: "Facial & Skincare",
      desc: "Rejuvenate your skin with signature HydraFacials, cleanups, and precise threading services.",
      icon: "/icons/icon_facial_v2.webp",
      delay: 1.5,
      link: "/services#facials"
    }
  ];

  return (
    <section className="w-full bg-primary flex justify-center py-20 sm:py-32 px-4 sm:px-6 text-white border-b border-white/10">
      <div className="w-full max-w-7xl flex flex-col gap-16 sm:gap-24">
        
        {/* Top Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 text-center lg:text-left"
        >
          {/* Left Title */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <div className="uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4 sm:mb-6 text-white/70">
              OUR EXPERTISE
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.2] sm:leading-[1.1] tracking-tight">
              Signature Treatments<br />Curated for You
            </h2>
          </div>
          
          {/* Right Description */}
          <div className="flex-1 flex flex-col justify-end items-center lg:items-end lg:max-w-xl">
            <p className="text-white/80 text-sm sm:text-[1.1rem] font-light leading-relaxed mb-6 sm:mb-8 pr-0">
              Dive into our world of care at our renowned beauty salon. Our expert team is dedicated to providing exceptional, personalized treatments using the latest innovations in beauty services.
            </p>
            <div>
              <Link href="/services" className="group inline-flex flex-col relative overflow-hidden">
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
              <Link href={service.link} className="flex flex-col group items-center md:items-start text-center md:text-left relative h-full">
                <div className="mb-6 sm:mb-8 w-16 h-16 rounded-full border border-white/20 overflow-hidden relative transition-all duration-500 group-hover:border-white/60 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                  />
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:text-white/90 transition-colors">{service.title}</h4>
                <p className="text-white/70 font-light leading-relaxed text-sm sm:text-base mb-6 sm:mb-8 flex-1 pr-0 md:pr-4">
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
