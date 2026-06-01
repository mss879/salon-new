"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sabrina Nissanka",
      text: "I love it! The parking space to the service provided is amazing. Everyone loves what they do and it can be seen from how their service is delivered. I'm definitely coming back for all the other services.",
      service: "Full Body Waxing",
      rating: 5
    },
    {
      name: "Avanti Weerakoon",
      text: "I was really impressed with the manicure and pedicure. It's a very clean nail salon where all tools are disinfected. The salon has a chic vibe about it. They deliver a true quality service.",
      service: "Nail Care",
      rating: 5
    },
    {
      name: "Laksisi de Silva",
      text: "A colourful place filled with friendly staff. The clear highlights of this place = stunning interior that just gives you a peaceful and relaxed feeling. Highly recommended!",
      service: "Salon Experience",
      rating: 5
    },
    {
      name: "Dilani Perera",
      text: "The hair coloring and styling exceeded all my expectations! The stylist took the time to understand exactly what shade I wanted. My hair feels incredibly healthy, shiny, and the service was absolutely wonderful.",
      service: "Hair Artistry",
      rating: 5
    },
    {
      name: "Shenali de Alwis",
      text: "Absolutely love their facial treatments. It was the most relaxing 60 minutes of my week. My skin has a gorgeous, natural glow and the therapists are extremely professional. A top-tier luxury wellness experience!",
      service: "Facial Therapy",
      rating: 5
    },
    {
      name: "Priyantha Jayasinghe",
      text: "Came in for a hair cut and head massage. The attention to detail is remarkable and the staff are incredibly polite. The massage was so soothing, it completely melted away my stress. Will definitely recommend!",
      service: "Men's Styling & Care",
      rating: 5
    },
    {
      name: "Michelle Senanayake",
      text: "The eyelash extensions are beautiful, lightweight, and look incredibly natural. I've received so many compliments! The salon's hygienic standards and serene ambience are truly impressive.",
      service: "Lash & Brow Art",
      rating: 5
    },
    {
      name: "Ruwani Fernando",
      text: "Best bridal glow-up ever! They handled my hair and makeup for my big day, and I couldn't have asked for a better experience. They made me feel so comfortable and look absolutely stunning. Thank you team!",
      service: "Bridal Makeover",
      rating: 5
    }
  ];

  // Split reviews into two distinct rows for counter-scrolling marquees
  const row1 = reviews.slice(0, 4);
  const row2 = reviews.slice(4, 8);
  const renderCard = (review: typeof reviews[0], index: number, prefix: string) => (
    <div
      key={`${prefix}-${index}`}
      className="w-[260px] sm:w-[295px] md:w-[330px] shrink-0 bg-white p-5 md:p-6 rounded-[1.25rem] shadow-[0_4px_20px_rgb(0,0,0,0.01)] border border-foreground/5 flex flex-col justify-between pointer-events-none select-none"
    >
      <div>
        <div className="flex justify-between items-center mb-3 md:mb-4">
          {/* Star rating */}
          <div className="flex gap-0.5">
            {[...Array(review.rating)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-amber-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          {/* Subtle Quote Symbol */}
          <svg className="w-5 h-5 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="font-serif text-[0.85rem] md:text-[0.92rem] leading-relaxed text-foreground mb-4 md:mb-5 font-light">
          &quot;{review.text}&quot;
        </p>
      </div>
      <div className="flex flex-col border-t border-foreground/10 pt-3 mt-auto">
        <span className="font-bold text-[0.7rem] sm:text-[0.75rem] tracking-wider text-foreground uppercase mb-0.5">
          {review.name}
        </span>
        <span className="text-primary text-[0.6rem] sm:text-[0.65rem] font-semibold tracking-widest uppercase">
          {review.service}
        </span>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-background flex justify-center py-12 md:py-16 px-4 md:px-6 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="w-full max-w-[1200px] flex flex-col gap-8 md:gap-10 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-4 md:gap-6 px-4 text-center lg:text-left"
        >
          <div className="flex flex-col items-center lg:items-start flex-1">
            <div className="uppercase tracking-[0.2em] text-[0.65rem] font-bold mb-2 md:mb-3 text-primary">
              CLIENT LOVE
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight text-foreground">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex-1 text-center lg:text-right text-foreground/60 font-light text-xs md:text-sm max-w-md lg:max-w-none">
            Our clients absolutely trust and adore our services, from flawless haircuts to exquisite nail artistry and glowing facial therapies.
          </div>
        </motion.div>

        {/* Infinite Counter-Scrolling Marquee Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-3 md:gap-4 w-full"
        >
          {/* Row 1: Right-to-Left Scrolling */}
          <div className="w-full marquee-container overflow-hidden py-1">
            <div className="flex gap-3 md:gap-4 animate-marquee w-max">
              {/* Duplicated list of reviews for a seamless loop */}
              {row1.map((review, idx) => renderCard(review, idx, "r1-first"))}
              {row1.map((review, idx) => renderCard(review, idx, "r1-second"))}
            </div>
          </div>

          {/* Row 2: Left-to-Right Scrolling (Counter Direction) - Hidden on Mobile */}
          <div className="hidden sm:block w-full marquee-container overflow-hidden py-1">
            <div className="flex gap-3 md:gap-4 animate-marquee-reverse w-max">
              {/* Duplicated list of reviews for a seamless loop */}
              {row2.map((review, idx) => renderCard(review, idx, "r2-first"))}
              {row2.map((review, idx) => renderCard(review, idx, "r2-second"))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

