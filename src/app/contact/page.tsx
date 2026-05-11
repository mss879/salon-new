"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center w-full">
        <section className="w-full bg-primary flex flex-col items-center justify-center py-32 px-6 text-white border-b border-white/10 pt-48">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-6 text-white/70">
              GET IN TOUCH
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight max-w-4xl text-center">
              We Would Love to <br /> Hear From You
            </h1>
          </motion.div>
        </section>
        
        <section className="w-full bg-background flex justify-center py-32 px-6 overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/4 pointer-events-none" />
          
          <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-8 text-foreground">
                Let&apos;s Talk Beauty
              </h2>
              <p className="text-foreground/70 font-light text-[1.05rem] leading-relaxed mb-12">
                Have a question or ready to book your next appointment? Reach out to our team of experts and let us help you achieve your beauty goals.
              </p>
              
              <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                  <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-primary mb-2">ADDRESS</span>
                  <span className="text-foreground/80 font-light text-lg">123 Beauty Blvd,<br />Colombo 6, Sri Lanka</span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-primary mb-2">PHONE</span>
                  <span className="text-foreground/80 font-light text-lg">+94 77 123 4567</span>
                </div>
                <div className="flex flex-col">
                  <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-primary mb-2">EMAIL</span>
                  <span className="text-foreground/80 font-light text-lg">hello@solanosalon.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-foreground/50 ml-4">NAME</label>
                  <input type="text" className="w-full bg-transparent border-b border-foreground/20 px-4 py-3 text-foreground font-light focus:outline-none focus:border-primary transition-colors" placeholder="Your full name" />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-foreground/50 ml-4">EMAIL</label>
                  <input type="email" className="w-full bg-transparent border-b border-foreground/20 px-4 py-3 text-foreground font-light focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-foreground/50 ml-4">MESSAGE</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-foreground/20 px-4 py-3 text-foreground font-light focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="mt-8 bg-primary text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all shadow-[0_4px_0_#752424] hover:bg-primary-hover hover:shadow-[0_4px_0_#5a1a1a] active:translate-y-[4px] active:shadow-none w-max">
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>
            
          </div>
        </section>
      </main>
    </div>
  );
}
