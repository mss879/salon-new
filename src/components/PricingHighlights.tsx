"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingHighlights() {
  const prices = [
    { name: "Esthemax Full Body Scrub and Pack", price: "Rs. 15,000" },
    { name: "Deep Tissue Massage", price: "Rs. 12,000" },
    { name: "Signature Bridal Package (1 Function)", price: "Rs. 55,000" },
    { name: "Korean Glass Skin Hydra Facial", price: "Rs. 8,500" },
    { name: "Luxury Pedicure", price: "Rs. 4,000" },
    { name: "Butterfly Cut", price: "Rs. 3,500" },
    { name: "Full Face Threading", price: "Rs. 1,500" },
  ];

  return (
    <section className="w-full bg-primary flex justify-center py-20 sm:py-32 px-4 sm:px-6 text-white border-b border-white/10">
      <div className="w-full max-w-5xl flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-24 flex flex-col items-center"
        >
          <div className="uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-4 sm:mb-6 text-white/70">
            MENU HIGHLIGHTS
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.2] sm:leading-[1.1] tracking-tight max-w-2xl px-2">
            Exceptional Care,<br />Transparently Priced
          </h2>
        </motion.div>

        <div className="w-full flex flex-col gap-5 sm:gap-6 lg:gap-8">
          {prices.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              className="w-full flex items-start sm:items-end justify-between gap-4 py-2 border-b border-white/10 sm:border-none group"
            >
              <h4 className="font-serif text-lg sm:text-xl lg:text-3xl font-light text-left group-hover:text-white/80 transition-colors">
                {item.name}
              </h4>
              <div className="hidden sm:block flex-1 border-b border-dotted border-white/30 mx-4 lg:mx-8 mb-2 group-hover:border-white/50 transition-colors" />
              <span className="font-sans text-base sm:text-lg lg:text-xl tracking-wider font-semibold whitespace-nowrap text-right self-end sm:self-auto">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-12 sm:mt-20"
        >
          <Link href="/services" className="group inline-flex flex-col relative overflow-hidden">
            <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] pb-2 text-white relative z-10 transition-transform duration-300 group-hover:-translate-y-full">
              VIEW FULL PRICE LIST
            </span>
            <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] pb-2 text-white absolute top-0 left-0 w-full h-full translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              VIEW FULL PRICE LIST
            </span>
            <div className="w-full h-[1px] bg-white/30 transition-colors duration-300 group-hover:bg-white" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
