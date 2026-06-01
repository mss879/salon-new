import Link from "next/link";
import DarkVeil from "./DarkVeil";
import HeroAnimation from "./HeroAnimation";

export default function Hero({ startAnimation = true }: { startAnimation?: boolean }) {
  return (
    <section className="w-full relative flex justify-center pt-28 pb-28 sm:pt-24 sm:pb-44 lg:pb-48 px-4 sm:px-6 overflow-hidden">
      {/* Background Animation */}
      <div 
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, transparent 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,1) 70%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 20%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,1) 70%)' }}
      >
        <DarkVeil 
          hueShift={20} 
          noiseIntensity={0.02} 
          scanlineIntensity={0}
          scanlineFrequency={0}
          speed={1.2}
          warpAmount={3}
        />
      </div>

      {/* Elegant Curved Boundary Divider (Blends seamlessly with the next section's primary red bg) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-[2px] pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[80px] lg:h-[100px] text-primary fill-current">
          <path d="M0,120 C400,120 800,60 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content (Text and CTA) */}
        <div className="flex flex-col w-full max-w-2xl lg:max-w-[45rem] order-1 lg:order-1 items-center lg:items-start text-center lg:text-left">
          <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] sm:leading-[1.05] tracking-tight text-primary mb-6">
            <span className="block sm:inline sm:whitespace-nowrap">Discover your beauty</span><br className="hidden sm:inline" />
            <span className="block sm:inline sm:whitespace-nowrap">potential with us.</span>
          </h1>
          <p className="text-black/60 text-sm sm:text-[1.05rem] mb-8 sm:mb-10 leading-relaxed pr-0 sm:pr-8">
            We believe that beauty is a form of art, and our mission is to make you feel like a masterpiece.
          </p>
          
          <div>
            <Link href="/appointment" className="inline-block bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest py-3.5 px-6 sm:py-4 sm:px-8 rounded-lg transition-all shadow-[0_4px_0_#752424] sm:shadow-[0_5px_0_#752424] hover:bg-primary-hover hover:shadow-[0_4px_0_#5a1a1a] sm:hover:shadow-[0_5px_0_#5a1a1a] active:translate-y-[4px] active:shadow-none">
              Book an Appointment
            </Link>
          </div>

        </div>

        {/* Right Side: GSAP Animation */}
        <div className="w-full lg:pl-12 xl:pl-24 order-2 lg:order-2">
          <HeroAnimation startAnimation={startAnimation} />
        </div>

      </div>
    </section>
  );
}

