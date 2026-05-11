"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingHighlights() {
  const prices = [
    { name: "Signature HydraFacial (45 min)", price: "Rs 30000/-" },
    { name: "Volume / Mink Lash Set", price: "Rs 15000/-" },
    { name: "Clean-up Facial (45 min)", price: "Rs 12000/-" },
    { name: "Shiroabhyanga Hair Oil Treatment", price: "Rs 7000/-" },
    { name: "Acrylic on Natural Nails", price: "Rs 6000/-" },
    { name: "Express Pedicure", price: "Rs 5000/-" },
    { name: "Express Manicure", price: "Rs 4300/-" },
  ];

  return (
    <section className="w-full bg-primary flex justify-center py-32 px-6 text-white border-b border-white/10">
      <div className="w-full max-w-5xl flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24 flex flex-col items-center"
        >
          <div className="uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-6 text-white/70">
            MENU HIGHLIGHTS
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-2xl">
            Exceptional Care,<br />Transparently Priced
          </h2>
        </motion.div>

        <div className="w-full flex flex-col gap-6 lg:gap-8">
          {prices.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              className="w-full flex items-end justify-between group"
            >
              <h4 className="font-serif text-xl lg:text-3xl font-light whitespace-nowrap group-hover:text-white/80 transition-colors">
                {item.name}
              </h4>
              <div className="flex-1 border-b border-dotted border-white/30 mx-4 lg:mx-8 mb-2 group-hover:border-white/50 transition-colors" />
              <span className="font-sans text-lg lg:text-xl tracking-wider font-semibold whitespace-nowrap">
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
          className="mt-20"
        >
          <Link href="/price-list" className="group inline-flex flex-col relative overflow-hidden">
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
