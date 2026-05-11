"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sabrina Nissanka",
      text: "I love it! The parking space to the service provided is amazing. Everyone loves what they do and it can be seen from how their service is delivered. I'm definitely coming back for all the other services.",
      service: "Full Body Waxing"
    },
    {
      name: "Avanti Weerakoon",
      text: "I was really impressed with the manicure and pedicure. It's a very clean nail salon where all tools are disinfected. The salon has a chic vibe about it. They deliver a true quality service.",
      service: "Nail Care"
    },
    {
      name: "Laksisi de Silva",
      text: "A colourful place filled with friendly staff. The clear highlights of this place = stunning interior that just gives you a peaceful and relaxed feeling. Highly recommended!",
      service: "Salon Experience"
    }
  ];

  return (
    <section className="w-full bg-background flex justify-center py-32 px-6 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="w-full max-w-7xl flex flex-col gap-20 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-end gap-10"
        >
          <div className="flex-1">
            <div className="uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-6 text-primary">
              CLIENT LOVE
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex-1 lg:text-right text-foreground/60 font-light text-lg">
            Our clients absolutely trust and adore our services, from flawless waxing to exquisite nail artistry.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between transition-transform duration-500 hover:-translate-y-2 border border-foreground/5"
            >
              <div>
                <svg className="w-10 h-10 text-primary/20 mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-serif text-[1.35rem] leading-relaxed text-foreground mb-10">
                  &quot;{review.text}&quot;
                </p>
              </div>
              <div className="flex flex-col border-t border-foreground/10 pt-6">
                <span className="font-bold text-sm tracking-wider text-foreground uppercase mb-1">
                  {review.name}
                </span>
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                  {review.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
