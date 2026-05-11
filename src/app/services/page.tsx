"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center w-full bg-background text-foreground">
        
        {/* Hero */}
        <section className="w-full bg-background flex flex-col items-center justify-center py-32 px-6 pt-48 relative overflow-hidden border-b border-foreground/10">
          <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center max-w-4xl"
          >
            <div className="uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-6 text-primary">
              OUR EXPERTISE
            </div>
            <h1 className="font-serif text-6xl md:text-8xl leading-[1.05] tracking-tight mb-8">
              Elevate Your <br /> Experience
            </h1>
            <p className="text-lg font-light text-foreground/70 max-w-2xl">
              We offer a curated menu of bespoke treatments, blending cutting-edge techniques with holistic wellness to reveal your ultimate potential.
            </p>
          </motion.div>
        </section>

        {/* Hair Artistry (Sticky Layout) */}
        <section className="w-full max-w-7xl px-6 py-32 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 self-start">
            <span className="text-primary font-bold tracking-[0.2em] text-[0.7rem] uppercase mb-4 block">01. THE SALON</span>
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Hair Artistry</h2>
            <p className="font-light text-foreground/70 text-lg leading-relaxed mb-8">
              Transform your identity with precision cuts and bespoke color alchemy. Our master stylists use only premium, ammonia-free products to ensure your hair remains as healthy as it is beautiful.
            </p>
            <Link href="/contact" className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-primary border-b border-primary pb-1 hover:text-primary-hover transition-colors">
              BOOK A CONSULTATION
            </Link>
          </div>
          <div className="w-full lg:w-7/12 flex flex-col gap-12">
            {[
              { title: "Bespoke Cut & Style", price: "From $85", desc: "A personalized consultation followed by a precision cut tailored to your face shape, lifestyle, and hair texture, finished with a signature blowout." },
              { title: "Color Alchemy", price: "From $150", desc: "From subtle balayage to transformative color corrections, our master colorists create multi-dimensional, vibrant hues that perfectly complement your skin tone." },
              { title: "Keratin & Restorative", price: "From $200", desc: "Deeply repairing treatments that smooth the cuticle, eliminate frizz, and restore youthful elasticity to damaged or aging hair." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group border-b border-foreground/10 pb-12"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="font-serif text-3xl group-hover:text-primary transition-colors">{item.title}</h3>
                  <span className="font-mono text-sm tracking-widest text-foreground/50">{item.price}</span>
                </div>
                <p className="font-light text-foreground/70 leading-relaxed pr-8">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skin & Facial (Full Width Image Break) */}
        <section className="w-full bg-primary text-white py-32 px-6 border-y border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-20 max-w-3xl">
              <span className="text-white/50 font-bold tracking-[0.2em] text-[0.7rem] uppercase mb-4 block">02. THE SPA</span>
              <h2 className="font-serif text-5xl md:text-6xl mb-6">Skin & Facial Sanctuary</h2>
              <p className="font-light text-white/80 text-lg leading-relaxed">
                Experience clinical precision enveloped in absolute luxury. Our facial therapies are customized at a cellular level to rejuvenate, clarify, and illuminate your complexion.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square relative rounded-2xl overflow-hidden"
              >
                <Image src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop" alt="Skin Care" fill className="object-cover" />
              </motion.div>
              <div className="flex flex-col justify-center px-0 md:px-12 py-8 gap-10">
                <div>
                  <h3 className="font-serif text-3xl mb-3">Signature HydraFacial</h3>
                  <p className="font-light text-white/60">A multi-step treatment that cleanses, exfoliates, and extracts impurities while quenching the skin with vital nutrients.</p>
                </div>
                <div className="w-12 h-px bg-white/20" />
                <div>
                  <h3 className="font-serif text-3xl mb-3">Cosmetic Embroidery</h3>
                  <p className="font-light text-white/60">Micro-precision enhancements for brows and lips, designed to perfectly frame your face with natural-looking, semi-permanent results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ayurvedic Rituals (Centered Editorial) */}
        <section className="w-full max-w-5xl mx-auto px-6 py-32 text-center flex flex-col items-center">
          <Image src="/icons/icon_ayurveda_v2.png" alt="Ayurveda" width={80} height={80} className="mb-8 rounded-full border border-primary/20 p-2" />
          <span className="text-primary font-bold tracking-[0.2em] text-[0.7rem] uppercase mb-4 block">03. HOLISTIC WELLNESS</span>
          <h2 className="font-serif text-5xl md:text-6xl mb-8">Ayurvedic Therapies</h2>
          <p className="font-light text-foreground/70 text-xl leading-relaxed max-w-3xl mb-16">
            Drawing from thousands of years of ancient wisdom, our authentic Ayurvedic rituals restore balance to the mind, body, and spirit using heated herbal oils and specialized rhythmic massage techniques.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            {[
              { title: "Shiroabhyanga", desc: "A deeply relaxing traditional Indian head massage that focuses on the shoulders, neck, and scalp to relieve tension." },
              { title: "Abhyanga", desc: "A full-body warm oil massage designed to nourish the skin, mobilize toxins, and deeply calm the nervous system." },
              { title: "Deep Tissue", desc: "Targeted pressure point therapy to release chronic muscle tension and restore optimal physical mobility." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary/5 p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-serif text-2xl mb-4 text-primary">{item.title}</h3>
                <p className="font-light text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
