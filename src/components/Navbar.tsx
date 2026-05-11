"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full flex justify-center pt-4 pb-2 px-6 sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-black/5">
      <div className="w-full max-w-7xl flex items-center justify-between pb-2 relative">
        <div className="flex items-center gap-8 text-sm font-semibold tracking-widest text-primary/60">
          {links.map((link) => {
            // Check if the current path matches the link
            // For the home page, it must be an exact match to avoid matching all routes
            const isActive = link.href === "/" 
              ? pathname === "/"
              : pathname?.startsWith(link.href);

            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`uppercase transition-colors hover:text-primary ${
                  isActive ? "text-primary border-b-2 border-primary pb-1" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center px-10 border-x border-[#d1a3a3]/40 h-10">
          <Link href="/">
            <Image 
              src="https://cdn.prod.website-files.com/66c429ccb7d3d92aa0a8475f/66c43855fea65f29af704f8b_main-logo.svg" 
              alt="Solano Logo" 
              width={140} 
              height={40} 
              priority
              className="w-[120px] sm:w-[140px] h-auto"
            />
          </Link>
        </div>

        {/* Right Links & Button */}
        <div className="flex items-center gap-8">
          <Link href="/appointment" className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-all shadow-[0_4px_0_#752424] hover:bg-primary-hover hover:shadow-[0_4px_0_#5a1a1a] active:translate-y-[4px] active:shadow-none">
            Book an Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
