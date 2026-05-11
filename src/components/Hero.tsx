import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex justify-center py-24 px-6">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col max-w-xl">
          <h1 className="font-serif text-6xl lg:text-[5rem] leading-[1.05] tracking-tight text-black mb-6">
            Discover your<br />beauty potential<br />with us.
          </h1>
          <p className="text-black/60 text-[1.05rem] mb-10 leading-relaxed pr-8">
            We believe that beauty is a form of art, and our mission is to make you feel like a masterpiece.
          </p>
          
          <div className="mb-16">
            <Link href="/appointment" className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest py-4 px-8 rounded-lg transition-all shadow-[0_5px_0_#752424] hover:bg-primary-hover hover:shadow-[0_5px_0_#5a1a1a] active:translate-y-[5px] active:shadow-none">
              Book a Appointment
            </Link>
          </div>

          {/* Bottom Video Thumbnail */}
          <div className="relative w-[240px] h-[140px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg mt-8">
            <Image 
              src="https://cdn.prod.website-files.com/66c429ccb7d3d92aa0a8475f/66c467fc8b3af72c04e1162e_hero-left.jpg"
              alt="Video Thumbnail"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-colors group-hover:bg-black/20">
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center backdrop-blur-sm shadow-md transition-transform group-hover:scale-110">
                <Image 
                  src="https://cdn.prod.website-files.com/66c429ccb7d3d92aa0a8475f/66c467ee5ea0603eb40dd041_play-btn.svg"
                  alt="Play"
                  width={16}
                  height={16}
                  className="ml-1 opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-[4/5] lg:aspect-[4.5/4] rounded-[2rem] overflow-hidden shadow-xl lg:-mt-4">
          <Image 
            src="https://cdn.prod.website-files.com/66c429ccb7d3d92aa0a8475f/66c467fd3623dc709d6c522e_hero-image.jpg"
            alt="Spa Treatment"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
