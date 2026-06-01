"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DarkVeil from "@/components/DarkVeil";

interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
  experience?: string;
  tag?: string;
  isPopular?: boolean;
}

interface ServiceCategory {
  id: string;
  title: string;
  categoryGroup: string;
  description: string;
  isLadiesOnly?: boolean;
  services?: ServiceItem[];
  subcategories?: {
    title: string;
    services: ServiceItem[];
  }[];
}

const SERVICE_CATALOG: ServiceCategory[] = [
  {
    id: "waxing",
    title: "Waxing",
    categoryGroup: "threading-waxing",
    description: "Sleek, gentle, and long-lasting hair removal treatments using premium wax for complete skin comfort.",
    services: [
      { name: "Full Legs Wax", price: "Rs. 4,000", experience: "Silk-smooth hydration post-wax therapy", tag: "Essential" },
      { name: "Half Legs Wax", price: "Rs. 3,000", experience: "Precision wax for lower legs & knees" },
      { name: "Full Arms Wax", price: "Rs. 3,000", experience: "Complete arm exfoliation & hair removal" },
      { name: "Half Arms Wax", price: "Rs. 2,000", experience: "Gentle wax from elbow to wrist" },
      { name: "Underarms Wax", price: "Rs. 500", experience: "Quick, hygienic cooling strip method", isPopular: true },
      { name: "Stomach Wax", price: "Rs. 2,000", experience: "Soft wax suitable for sensitive skin" },
      { name: "Back Wax", price: "Rs. 2,500", experience: "Full back clearing & calming lotion application" },
      { name: "Chest Wax", price: "Rs. 2,000", experience: "Smoothing therapy for chest area" },
      { name: "Buttocks Wax", price: "Rs. 2,000", experience: "Private, premium hygiene standards assured" },
      { name: "Full Face Wax", price: "Price on Consultation", experience: "Hypoallergenic wax tailored to skin sensitivity" },
      { name: "Lip or Chin Wax", price: "Rs. 300", experience: "Precision fast-strip definition" },
      { name: "Lip & Chin Wax", price: "Rs. 500", experience: "Calming aloe vera finish included" },
      { name: "Sideburns Wax", price: "Rs. 1,000", experience: "Clean hairline framing & touchups" }
    ]
  },
  {
    id: "scrub-treatments",
    title: "Scrub Treatments",
    categoryGroup: "massages-scrubs",
    description: "Exfoliating and hydrating body masks designed to buff away dead cells and lock in deep moisture.",
    services: [
      { name: "Esthemax Full Body Scrub and Pack", duration: "1 hr 45m", price: "Rs. 15,000", experience: "Signature mineral exfoliation with premium organic mask", tag: "Signature", isPopular: true },
      { name: "Full Legs Scrub and Customized Treatment Mask", duration: "30 mins", price: "Rs. 7,000", experience: "Targeted cell buffing & intense nutrient infusion" },
      { name: "Full Arms Scrub and Customized Treatment Mask", duration: "30 mins", price: "Rs. 5,000", experience: "Smoothens, hydrates & refines skin texture" }
    ]
  },
  {
    id: "face-threading",
    title: "Face Threading",
    categoryGroup: "threading-waxing",
    description: "Precision framing and clean hair removal using ultra-fine organic thread.",
    services: [
      { name: "Full Face Threading", price: "Rs. 1,500", experience: "Complete facial contouring & hair removal", tag: "Best Value" },
      { name: "Forehead Threading", price: "Rs. 300", experience: "Clean upper brow and hairline mapping" },
      { name: "Chin & Upper Lip Threading", price: "Rs. 500", experience: "Flawless lower face mapping & threading" },
      { name: "Chin & Jawline Threading", price: "Rs. 500", experience: "Sculpts and frames jaw layout" },
      { name: "In-between Brows Threading", price: "Rs. 300", experience: "Quick brow bridge cleaning" },
      { name: "Sideburns Threading", price: "Rs. 800", experience: "Delicate hair removal on temple zones" },
      { name: "Upper Lip Threading", price: "Rs. 200", experience: "Fast precision upper lip shaping" },
      { name: "Eyebrows Shaping & Threading", price: "Rs. 300", experience: "Expert mathematical arch mapping & threading", isPopular: true }
    ]
  },
  {
    id: "massage-services-ladies-only",
    title: "Massage Services",
    categoryGroup: "massages-scrubs",
    isLadiesOnly: true,
    description: "A sanctuary of physical restoration. Deep muscle recovery and peaceful rhythmic tension release.",
    services: [
      { name: "Feet Massage", duration: "30 mins", price: "Rs. 2,000", experience: "Pressure-point stimulation & hot towel therapy" },
      { name: "Hands Massage", duration: "30 mins", price: "Rs. 2,500", experience: "Relaxing muscle release for hands and forearms" },
      { name: "Back Massage", duration: "30 mins", price: "Rs. 3,000", experience: "Targeted knots release & warm oil application" },
      { name: "Full Body Massage", duration: "75 mins", price: "Rs. 8,500", experience: "Comprehensive relaxation from neck to toe", tag: "Highly Rated", isPopular: true },
      { name: "Deep Tissue Massage (includes Face & Scalp)", duration: "105 mins", price: "Rs. 12,000", experience: "Intense muscular recovery & complete structural realignment" },
      { name: "Head Massage", duration: "Custom Tailored", price: "Rs. 3,000", experience: "Warm herbal oil massage for scalp & hair roots" },
      { name: "Face Massage", duration: "Custom Tailored", price: "Rs. 3,000", experience: "Lymphatic drainage massage to reduce puffiness" }
    ]
  },
  {
    id: "facials",
    title: "Facials",
    categoryGroup: "facials-skincare",
    description: "Advanced active nourishment to target aging, dryness, and reveal natural luminescence.",
    services: [
      { name: "Normal Facial", price: "Rs. 4,500", experience: "Classic deep cleanse, exfoliation & mask therapy" },
      { name: "Gold Gel Facial", price: "Rs. 5,500", experience: "Brightening treatment with premium active gold particles" },
      { name: "Collagen Gel Facial", price: "Rs. 5,500", experience: "Plumps skin & boosts natural cell elasticity" },
      { name: "Vampire Gel Facial", price: "Rs. 6,000", experience: "Advanced cell-regenerative gel serum infusion", tag: "Trending" },
      { name: "Vitamin C Facial", price: "Rs. 6,000", experience: "Antioxidant rich glow for sun-damaged skin" },
      { name: "Gold Facial with FOI", price: "Rs. 6,500", experience: "Ultra-luxury gold foil therapy for absolute radiance", isPopular: true },
      { name: "Seaweed Facial", price: "Rs. 7,000", experience: "Calming botanical detox & ocean minerals infusion" },
      { name: "Diamond Microdermabrasion Treatment", price: "Rs. 6,000", experience: "Non-invasive skin resurfacing & deep pore clearing" }
    ]
  },
  {
    id: "hydra-facial-treatments",
    title: "Hydra Facial Treatments",
    categoryGroup: "facials-skincare",
    description: "State-of-the-art non-invasive skin resurfacing, infusing premium serums under active vacuum pressure.",
    services: [
      { name: "Korean Glass Skin Hydra Facial", price: "Rs. 8,500", experience: "7-step high-gloss vacuum treatment for ultimate glass skin", tag: "Signature", isPopular: true },
      { name: "High Whitening Hydra Facial", price: "Rs. 9,500", experience: "Triple-strength brightener infusion & oxygen spray" },
      { name: "Pimple & Acne Control Treatment", price: "Rs. 8,000", experience: "Salicylic vacuum clearing & soothing blue-light LED therapy" },
      { name: "Aging & Fine Line Treatment", price: "Rs. 8,500", experience: "Red-light LED collagen boost & peptide micro-infusion" }
    ]
  },
  {
    id: "cleanup-treatments",
    title: "Cleanup Treatments",
    categoryGroup: "facials-skincare",
    description: "Quick pore extractions and calming customized packs for a clean canvas.",
    services: [
      { name: "Normal Cleanup", price: "Rs. 3,000", experience: "Pore-clearing scrub, steam extraction & soothing mask" },
      { name: "Cleanup with Peeling", price: "Rs. 3,500", experience: "Enzyme peel treatment for gentle resurfacing" },
      { name: "Gold Cleanup", price: "Rs. 4,000", experience: "Gilded cleanup scrub & gold glowing pack" },
      { name: "Collagen Cleanup", price: "Rs. 4,000", experience: "Firming collagen serum & hydrating moisture wrap" },
      { name: "Vitamin C Cleanup", price: "Rs. 4,500", experience: "Brightens dark spots & uneven skin tones" },
      { name: "Vampire Cleanup", price: "Rs. 4,500", experience: "Active cellular revitalization cleanup pack", isPopular: true }
    ]
  },
  {
    id: "manicure-pedicure",
    title: "Manicure & Pedicure",
    categoryGroup: "hair-nails",
    description: "Indulgent pampering for hands and feet, featuring exfoliating steps and fine cuticle care.",
    services: [
      { name: "Classic Manicure", price: "Rs. 3,000", experience: "Nail shaping, cuticle treatment, massage & polish" },
      { name: "Normal Pedicure", price: "Rs. 2,500", experience: "Relaxing foot soak, scrub, nail trim & polish" },
      { name: "Luxury Pedicure", price: "Rs. 4,000", experience: "Premium salt soak, custom scrub, mask, hot towel wrap & premium massage", tag: "Best Value", isPopular: true }
    ]
  },
  {
    id: "lash-extensions",
    title: "Lash Extensions",
    categoryGroup: "hair-nails",
    description: "Masterfully mapped lashes customized to frame your eyes with lightweight weightless volume.",
    services: [
      { name: "Lash Extension Set", price: "From Rs. 5,000", experience: "Expert individually-mapped extensions for seamless weightless length", tag: "Glamour", isPopular: true }
    ]
  },
  {
    id: "haircuts",
    title: "Haircuts",
    categoryGroup: "hair-nails",
    description: "Tailored hair styling, layering, and precision cuts curated to express your structural features.",
    services: [
      { name: "Baby Haircut", price: "Rs. 650", experience: "Soft, gentle and quick styling for infants" },
      { name: "Layers Cut", price: "Rs. 2,500", experience: "Flowing visual layers to boost natural body & motion" },
      { name: "Feather Cut (Feathers)", price: "Rs. 3,000", experience: "Framed layers adding sleek structural texture", isPopular: true },
      { name: "Butterfly Cut", price: "Rs. 3,500", experience: "High-volume elegant framed face contouring cut", tag: "Modern" }
    ]
  },
  {
    id: "normal-dressing-packages",
    title: "Normal Dressing Packages",
    categoryGroup: "bridal-makeup",
    description: "Perfectly balanced makeup styles for casual functions, evening galas, or party events.",
    subcategories: [
      {
        title: "Normal Makeup",
        services: [
          { name: "Normal Makeup Only", price: "Rs. 2,000", experience: "Fresh & elegant evening function face finish" },
          { name: "Normal Makeup and Wrapping", price: "Rs. 2,500", experience: "Flawless face finish with hijab/saree wrapping" },
          { name: "Normal Makeup and Hairstyle", price: "Rs. 3,000", experience: "Complete function makeup and expert styling", isPopular: true },
          { name: "Normal Makeup and Loose Hairstyle", price: "Rs. 3,500", experience: "Premium face styling and textured waves hair layout" },
          { name: "Normal Makeup and Hairstyle with Saree Draping", price: "Rs. 3,500", experience: "Traditional function drape, makeup & sleek styling" },
          { name: "Normal Makeup and Loose Hairstyle with Saree Draping", price: "Rs. 4,000", experience: "Traditional drape, makeup & premium loose hair waves" }
        ]
      },
      {
        title: "Advanced Shimmer Makeup",
        services: [
          { name: "Makeup Only", price: "Rs. 3,500", experience: "Gilded shimmer shadows & airbrush flawless look" },
          { name: "Makeup and Wrapping", price: "Rs. 4,000", experience: "Advanced airbrush styling with wrapping" },
          { name: "Makeup and Hairstyle", price: "Rs. 4,500", experience: "High-definition shimmers and advanced updos" },
          { name: "Makeup and Loose Hairstyle", price: "Rs. 5,000", experience: "High-definition shimmers and premium loose waves", tag: "Highly Rated" },
          { name: "Makeup and Hairstyle with Saree Draping", price: "Rs. 5,000", experience: "Premium saree drape, high-definition makeup & signature updos" },
          { name: "Makeup and Loose Hairstyle with Saree Draping", price: "Rs. 5,500", experience: "Signature saree draping, advanced makeup & premium textured curls" }
        ]
      }
    ]
  },
  {
    id: "bridal-packages",
    title: "Bridal Packages",
    categoryGroup: "bridal-makeup",
    description: "Your ultimate signature bridal look. Crafted in platinum, high-definition, or master-signature styles for your special day.",
    subcategories: [
      {
        title: "Platinum Bridal Packages (Makeup & Hair/Hijab)",
        services: [
          { name: "Platinum Bridal Package — One Function", price: "Rs. 28,500", experience: "Masterful makeup & styling for your main ceremony" },
          { name: "Platinum Bridal Package — Two Functions", price: "Rs. 47,000", experience: "Dual ceremony packages (Ceremony & Reception)" },
          { name: "Platinum Bridal Package — Three Functions", price: "Rs. 70,000", experience: "Full bridal trilogy (Nikkah/Engagement, Wedding, Homecoming)", tag: "Gold Value" }
        ]
      },
      {
        title: "HD Bridal Packages (Makeup & Hair/Hijab)",
        services: [
          { name: "HD Bridal Package — One Function", price: "Rs. 38,500", experience: "High-definition airbrush mapping for flawless camera looks" },
          { name: "HD Bridal Package — Two Functions", price: "Rs. 67,000", experience: "Double function High-Definition makeup & hijab styling", isPopular: true },
          { name: "HD Bridal Package — Three Functions", price: "Rs. 100,000", experience: "The ultimate three-day cinematic bridal mapping suite" }
        ]
      },
      {
        title: "Signature Bridal Packages (Makeup & Hair/Hijab)",
        services: [
          { name: "Signature Bridal Package — One Function", price: "Rs. 55,000", experience: "Designed entirely by our chief artist with premium global products" },
          { name: "Signature Bridal Package — Two Functions", price: "Rs. 100,000", experience: "Two-day chief artist private package, complete premium touchups" },
          { name: "Signature Bridal Package — Three Functions", price: "Rs. 150,000", experience: "The absolute crown-jewel bridal luxury portfolio package", tag: "Elite Signature" }
        ]
      }
    ]
  }
];



export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const sidebarRef = useRef<HTMLDivElement>(null);

  // Keep search inputs and category selection reactive in real-time
  const filteredCatalog = useMemo(() => {
    return SERVICE_CATALOG.map((cat) => {
      // Direct category filter: only display matches if not showing "all"
      if (selectedCategory !== "all" && cat.id !== selectedCategory) {
        return null;
      }

      if (!searchQuery.trim()) {
        return cat;
      }

      const query = searchQuery.toLowerCase();
      const categoryMatches =
        cat.title.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);

      if (cat.subcategories) {
        const filteredSub = cat.subcategories
          .map((sub) => {
            const matchingServices = sub.services.filter(
              (s) => s.name.toLowerCase().includes(query) || s.price.toLowerCase().includes(query)
            );
            if (matchingServices.length > 0 || sub.title.toLowerCase().includes(query)) {
              return { ...sub, services: matchingServices.length > 0 ? matchingServices : sub.services };
            }
            return null;
          })
          .filter((sub): sub is NonNullable<typeof sub> => sub !== null);

        if (filteredSub.length > 0 || categoryMatches) {
          return {
            ...cat,
            subcategories: filteredSub.length > 0 ? filteredSub : cat.subcategories
          };
        }
      } else if (cat.services) {
        const matchingServices = cat.services.filter(
          (s) => s.name.toLowerCase().includes(query) || s.price.toLowerCase().includes(query)
        );

        if (matchingServices.length > 0 || categoryMatches) {
          return {
            ...cat,
            services: matchingServices.length > 0 ? matchingServices : cat.services
          };
        }
      }

      return null;
    })
    .filter((cat): cat is NonNullable<typeof cat> => cat !== null);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center w-full bg-[#fdf8f3] text-foreground antialiased relative overflow-hidden">
        
        {/* Ambient Decorative Glows */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/4 z-0" />
        <div className="absolute top-[40vh] left-0 w-[40vw] h-[40vw] rounded-full bg-amber-500/3 blur-[100px] pointer-events-none -translate-x-1/4 z-0" />
        
        {/* =========================================
            IMMERSIVE LUXURY HERO SECTION
            ========================================= */}
        <section className="w-full relative py-40 pb-48 px-6 pt-56 flex justify-center bg-[#9b3030] text-white overflow-hidden min-h-[75vh] items-center">
          
          {/* Animated WebGL DarkVeil Backdrop */}
          <div 
            className="absolute inset-0 z-0 w-full h-full pointer-events-none"
            style={{ 
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0) 100%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0) 100%)' 
            }}
          >
            <DarkVeil 
              hueShift={15} 
              noiseIntensity={0.015} 
              scanlineIntensity={0}
              scanlineFrequency={0}
              speed={1.0}
              warpAmount={2.8}
              isDark={true}
            />
          </div>

          {/* Subtly animated overlay pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          <div className="w-full max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Editorial Title & Copy */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 flex items-center gap-3"
              >
                <div className="h-[1px] w-8 bg-[#e6c8a2]" />
                <span className="uppercase tracking-[0.3em] text-[0.65rem] font-bold text-[#e6c8a2]">
                  EST. COLOMBO 6 &bull; SRI LANKA
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8"
              >
                Bespoke Beauty <br />
                <span className="italic text-[#e6c8a2] font-light">Services & Menu</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg font-light text-white/80 max-w-xl leading-relaxed mb-10"
              >
                Welcome to a curated realm of ISO-certified aesthetic mastery. Experience transparently cataloged care and design your own personalized suite of services dynamically below.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center gap-6"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById("menu-anchor");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="bg-[#e6c8a2] text-primary text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-lg shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Treatment Catalog
                </button>
                <div className="hidden sm:flex flex-col text-xs font-mono tracking-wider text-[#e6c8a2]/80">
                  <span>12 Luxury Categories</span>
                  <span>Pure Organic Ingredients</span>
                </div>
              </motion.div>
            </div>

            {/* Premium 3D Showcase Spot Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 hidden lg:flex justify-end"
            >
              <div className="relative group w-full max-w-sm rounded-[2rem] p-8 border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl hover:border-[#e6c8a2]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e6c8a2]/20 to-transparent blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -inset-px rounded-[2rem] border border-white/10 group-hover:border-[#e6c8a2]/20 pointer-events-none transition-colors" />
                
                <span className="text-[0.6rem] font-mono tracking-[0.25em] text-[#e6c8a2] uppercase block mb-2">SIGNATURE SPOTLIGHT</span>
                <h3 className="font-serif text-3xl text-white mb-3">Korean Glass Skin Hydra Facial</h3>
                <p className="text-white/70 font-light text-xs leading-relaxed mb-6">
                  Experience our premium vacuum hydro-dermabrasion paired with specialized active nutrient serums and targeted LED cell regeneration.
                </p>

                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <div className="flex flex-col">
                    <span className="text-[0.55rem] font-mono text-[#e6c8a2] tracking-wider uppercase">PRICE</span>
                    <span className="text-xl font-mono font-semibold text-white">Rs. 8,500</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[0.55rem] font-mono text-[#e6c8a2] tracking-wider uppercase">DURATION</span>
                    <span className="text-sm font-mono text-white">7-Step Protocol</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link 
                    href="/appointment"
                    className="flex-1 bg-white text-primary text-center text-[0.65rem] font-bold uppercase tracking-widest py-3.5 px-4 rounded-lg hover:bg-[#e6c8a2] transition-colors"
                  >
                    Book Appointment
                  </Link>
                  <Link 
                    href="/appointment"
                    className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-lg hover:border-white transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Elegant Curved Boundary Divider (Blends seamlessly into the light cream bg of the menu section below) */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-[2px] pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[80px] lg:h-[100px] text-[#fdf8f3] fill-current">
              <path d="M0,120 C400,120 800,60 1200,60 L1200,120 L0,120 Z"></path>
            </svg>
          </div>
        </section>



        {/* =========================================
            MENU ANCHOR & UNIFIED DUAL-COLUMN LAYOUT
            ========================================= */}
        <div id="menu-anchor" className="scroll-mt-28 w-full max-w-7xl px-6" />

        <section className="w-full max-w-7xl px-6 py-8 flex flex-col lg:flex-row gap-16 relative items-start pb-32">
          
          {/* LEFT PANEL: Sticky Menu Directory (Adaptive mobile strip / desktop vertical list) */}
          <div ref={sidebarRef} className="w-full lg:w-72 lg:sticky lg:top-40 self-start flex-shrink-0 z-20">
            <div className="uppercase tracking-[0.25em] text-[0.6rem] font-bold text-primary mb-5 ml-1 lg:ml-2">
              MENU DIRECTORY
            </div>
            
            <nav className="flex lg:flex-col gap-3 lg:gap-5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x relative py-2 border-l-0 lg:border-l-2 lg:border-foreground/10 lg:pl-6">
              
              {/* Show All Option */}
              <button
                onClick={() => setSelectedCategory("all")}
                className={`group flex items-center gap-3 text-left relative transition-all duration-300 focus:outline-none whitespace-nowrap snap-center ${
                  selectedCategory === "all"
                    ? "text-primary font-bold px-4 py-2 bg-white lg:bg-transparent border border-primary/20 lg:border-0 rounded-full lg:rounded-none shadow-sm lg:shadow-none lg:-ml-[26px] lg:pl-[24px] lg:border-l-2 lg:border-primary lg:translate-x-0"
                    : "text-foreground/70 hover:text-primary px-4 py-2 lg:px-0 lg:py-0 border border-foreground/10 lg:border-0 rounded-full lg:rounded-none hover:bg-white lg:hover:bg-transparent lg:hover:translate-x-1.5"
                }`}
              >
                <span className="text-[0.7rem] sm:text-[0.75rem] uppercase tracking-wider">
                  Show All Services
                </span>
              </button>

              {/* Individual Category Buttons */}
              {SERVICE_CATALOG.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`group flex items-center gap-3 text-left relative transition-all duration-300 focus:outline-none whitespace-nowrap snap-center ${
                      isActive
                        ? "text-primary font-bold px-4 py-2 bg-white lg:bg-transparent border border-primary/20 lg:border-0 rounded-full lg:rounded-none shadow-sm lg:shadow-none lg:-ml-[26px] lg:pl-[24px] lg:border-l-2 lg:border-primary lg:translate-x-0"
                        : "text-foreground/70 hover:text-primary px-4 py-2 lg:px-0 lg:py-0 border border-foreground/10 lg:border-0 rounded-full lg:rounded-none hover:bg-white lg:hover:bg-transparent lg:hover:translate-x-1.5"
                    }`}
                  >
                    <span className="text-[0.7rem] sm:text-[0.75rem] uppercase tracking-wider">
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* RIGHT PANEL: Dynamic Menu Content Header & Active Category Sheets */}
          <div id="menu-content" className="flex-1 w-full flex flex-col z-10">
            
            {/* Main Content Header & Centered Premium Search */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-foreground/10 mb-12">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground">
                  {selectedCategory === "all" ? "All Treatment Services" : SERVICE_CATALOG.find(c => c.id === selectedCategory)?.title}
                </h3>
                <p className="text-xs text-foreground/45 mt-1 font-mono uppercase tracking-wider">
                  {selectedCategory === "all" ? "Showing all salon categories" : "Showing active category"}
                </p>
              </div>
              
              {/* Centered Premium Search Input */}
              <div className="relative w-full sm:max-w-xs group">
                <input
                  type="text"
                  placeholder="Search treatments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/70 border border-foreground/10 rounded-full px-5 py-3 pl-12 text-xs text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all duration-300 shadow-sm"
                />
                <svg 
                  className="w-4 h-4 text-foreground/30 absolute left-4.5 top-1/2 -translate-y-1/2 group-focus-within:text-primary transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground text-xs font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Animated Category Rendering */}
            <div className="flex flex-col gap-24">
              <AnimatePresence mode="wait">
                {filteredCatalog.length === 0 ? (
                  <motion.div 
                    key="no-results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-24 flex flex-col items-center bg-white/40 border border-foreground/5 p-12 rounded-[2.5rem] shadow-xl"
                  >
                    <span className="text-4xl mb-4">✨</span>
                    <h3 className="font-serif text-2xl mb-2">No matching treatments</h3>
                    <p className="text-foreground/50 font-light max-w-xs leading-relaxed text-sm">
                      We couldn't find any results matching "{searchQuery}" under this view.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                      className="mt-8 bg-primary text-white text-[0.65rem] font-bold uppercase tracking-widest py-3.5 px-8 rounded-lg shadow-lg hover:bg-primary-hover"
                    >
                      Reset Filter
                    </button>
                  </motion.div>
                ) : (
                  filteredCatalog.map((category, index) => {
                    if (!category) return null;
                    const isSpecialBg = category.id === "bridal-packages" || category.id === "normal-dressing-packages";
                    
                    return (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={`pb-20 border-b border-foreground/5 last:border-b-0 ${
                          isSpecialBg 
                            ? "bg-white p-8 sm:p-12 rounded-[2.5rem] border border-primary/10 shadow-xl shadow-primary/[0.01] relative overflow-hidden"
                            : ""
                        }`}
                      >
                        {/* Decorative background accent for bridal segment */}
                        {isSpecialBg && (
                          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/2 rounded-bl-full pointer-events-none z-0" />
                        )}

                        {/* Section Title Header Block */}
                        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-14 relative z-10">
                          <div className="max-w-2xl">
                            {category.isLadiesOnly && (
                              <div className="flex flex-wrap items-center gap-4 mb-4">
                                <span className="bg-rose-50 border border-rose-100 text-[#9b3030] text-[0.55rem] font-bold tracking-[0.2em] px-3.5 py-1 rounded-full uppercase flex items-center gap-1.5 shadow-sm">
                                  <span className="w-1 h-1.5 rounded-full bg-[#9b3030]" />
                                  Ladies Only Sanctuary
                                </span>
                              </div>
                            )}
                            <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-foreground mb-4">
                              {category.title}
                            </h2>
                            <p className="text-foreground/60 font-light text-sm sm:text-base leading-relaxed pr-8">
                              {category.description}
                            </p>
                          </div>
                          
                          <div className="self-start">
                            <Link 
                              href="/appointment" 
                              className="bg-primary text-white text-[0.65rem] font-bold uppercase tracking-widest py-3.5 px-6 rounded-lg transition-all shadow-[0_4px_0_#752424] hover:bg-primary-hover hover:shadow-[0_4px_0_#5a1a1a] active:translate-y-[4px] active:shadow-none inline-block z-10"
                            >
                              Book Segment
                            </Link>
                          </div>
                        </div>

                        {/* Service Items Content Mapping */}
                        {category.subcategories ? (
                          // Bridal / Dressing Subcategory Blocks
                          <div className="flex flex-col gap-12 mt-8 relative z-10">
                            {category.subcategories.map((sub, sIdx) => {
                              if (!sub) return null;
                              return (
                                <div key={sIdx} className="bg-[#fdf8f3] p-8 sm:p-10 rounded-[2.2rem] border border-foreground/5 shadow-sm group/sub relative overflow-hidden">
                                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/2 rounded-bl-full pointer-events-none" />
                                  
                                  <h3 className="font-serif text-xl sm:text-2xl mb-8 text-[#9b3030] pb-4 border-b border-foreground/5">
                                    {sub.title}
                                  </h3>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                                    {sub.services.map((item, itemIdx) => {
                                      return (
                                        <div 
                                          key={itemIdx} 
                                          className="flex flex-col gap-2 group/item p-4 rounded-2xl border border-transparent hover:bg-white hover:shadow-sm transition-all duration-300"
                                        >
                                          <div className="flex items-baseline justify-between gap-4 relative">
                                            
                                            {/* Selection check box indicators removed */}
                                            <div className="flex items-center gap-3 w-full overflow-hidden">
                                              <h4 className="font-serif text-base font-light text-foreground group-hover/item:text-primary transition-colors truncate">
                                                {item.name}
                                              </h4>
                                            </div>

                                            <div className="flex-1 border-b border-dotted border-foreground/15 group-hover/item:border-primary/30 transition-all duration-500 mb-1 mx-2" />
                                            <span className="font-mono text-sm tracking-wide font-semibold text-primary">
                                              {item.price}
                                            </span>
                                          </div>
                                          {item.experience && (
                                            <p className="text-[0.7rem] text-foreground/40 font-light line-clamp-2">
                                              {item.experience}
                                            </p>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          // Standard Grid Cards with advanced list-line hover animations
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mt-8 relative z-10">
                            {category.services?.map((item, itemIdx) => {
                              return (
                                <div 
                                  key={itemIdx} 
                                  className="flex flex-col justify-center py-4.5 px-5 rounded-2xl border border-transparent hover:bg-white hover:border-foreground/10 hover:shadow-xl hover:shadow-foreground/[0.02] transition-all duration-300 group/item"
                                >
                                  <div className="flex items-baseline justify-between gap-4">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                      <h4 className="font-serif text-base font-light text-foreground group-hover/item:text-primary transition-colors truncate">
                                        {item.name}
                                      </h4>
                                    </div>

                                    <div className="flex-1 border-b border-dotted border-foreground/15 group-hover/item:border-primary/30 transition-all duration-500 mb-1 mx-2" />
                                    <span className="font-mono text-sm tracking-wide font-semibold text-primary whitespace-nowrap">
                                      {item.price}
                                    </span>
                                  </div>
                                  
                                  {item.experience && (
                                    <p className="text-[0.7rem] text-foreground/45 font-light mt-1.5 line-clamp-1">
                                      {item.experience}
                                    </p>
                                  )}

                                  {/* Duration & Tag detail bar */}
                                  {(item.duration || item.tag || item.isPopular) && (
                                    <div className="flex flex-wrap items-center gap-3 mt-2">
                                      {item.duration && (
                                        <div className="flex items-center gap-1.5 text-foreground/40 font-mono text-[0.55rem] uppercase tracking-widest group-hover/item:text-primary/70 transition-colors">
                                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                          {item.duration}
                                        </div>
                                      )}
                                      {item.tag && (
                                        <span className="text-[0.5rem] font-mono uppercase font-bold tracking-widest text-[#9b3030] bg-[#9b3030]/5 px-2 py-0.5 rounded">
                                          {item.tag}
                                        </span>
                                      )}
                                      {item.isPopular && (
                                        <span className="text-[0.5rem] font-mono uppercase font-bold tracking-widest text-amber-600 bg-amber-500/5 px-2 py-0.5 rounded">
                                          POPULAR
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>

          </div>

        </section>

        {/* Bottom planner drawer removed */}

        {/* =========================================
            LUXURY FOOTER CTA
            ========================================= */}
        <section className="w-full bg-[#9b3030] text-white py-36 px-6 border-t border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-white/[0.02] radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.05),transparent) scale-150 pointer-events-none" />
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10">
            <span className="text-[#e6c8a2] font-bold tracking-[0.25em] text-[0.7rem] uppercase mb-6 block">
              INDULGENCE AWAITS
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl mb-8 leading-[1.05] tracking-tight">
              Ready to Discover Your <br />
              <span className="italic text-[#e6c8a2]">Beauty Potential?</span>
            </h2>
            <p className="text-white/80 font-light text-base sm:text-lg max-w-xl leading-relaxed mb-12">
              Book a bespoke treatment session or schedule a signature bridal design session with our master stylist.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/appointment" 
                className="bg-[#fdf8f3] text-primary text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-lg shadow-lg hover:bg-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Book an Appointment
              </Link>
              <Link 
                href="/contact" 
                className="border border-white/30 text-white text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Salon
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
