"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full bg-background flex justify-center py-32 px-6">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Images */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center"
        >
          <div className="absolute top-0 right-10 w-[70%] aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl z-10 border-4 border-background">
            <Image 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop"
              alt="Salon Interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-10 left-0 w-[55%] aspect-square rounded-full overflow-hidden shadow-xl z-20 border-8 border-background">
            <Image 
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1000&auto=format&fit=crop"
              alt="Stylist working"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <div className="uppercase tracking-[0.2em] text-[0.7rem] font-bold mb-6 text-primary">
            A MILESTONE OF EXCELLENCE
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8 text-foreground">
            Where Skill Meets Soulful Service
          </h2>
          
          <div className="flex flex-col gap-6 text-foreground/70 font-light text-[1.05rem] leading-relaxed mb-10">
            <p>
              Behind the excellence of our luxury salon experience is a team nurtured by skill and passion for their craft. Every member of our team is trained with the latest techniques, cutting-edge tools, and premium products to deliver our signature standards.
            </p>
            <p>
              Technique can be taught, but soul is rare. At our salon, we are proud to have both. Guided by visionary leadership, our team combines time-tested skills with soulful service, creating a beauty experience unlike any other.
            </p>
            <p className="font-medium text-foreground">
              We are honored to be one of the very few salons to achieve the prestigious ISO 9001:2015 certification. For us, it’s much more than beauty care—it’s about raising the entire standard of professional salon care.
            </p>
          </div>

          <Link href="/about-us" className="group inline-flex items-center gap-4 w-max">
            <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] text-primary transition-colors hover:text-primary-hover">
              LEARN MORE ABOUT US
            </span>
            <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-500 ease-out group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg">
              <svg className="w-4 h-4 text-primary transition-colors duration-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
