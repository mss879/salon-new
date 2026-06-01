"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full flex justify-center py-4 md:py-6 px-4 md:px-6 sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-black/5">
      <div className="w-full max-w-7xl flex items-center justify-between relative">

        {/* Left Side: Desktop Links / Mobile Hamburger */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-widest text-primary">
          {links.map((link) => {
            const isActive = link.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`uppercase transition-colors hover:text-primary ${isActive ? "text-primary border-b-2 border-primary pb-1" : ""
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Button (Left-aligned on mobile) */}
        <div className="flex md:hidden items-center z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary focus:outline-none p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Center Logo */}
        <div className="absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center px-4 md:px-10 border-x border-[#d1a3a3]/40 h-8 md:h-10">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Lavendra Beauty Lounge Logo"
              width={140}
              height={40}
              priority
              className="w-[100px] sm:w-[120px] md:w-[140px] h-auto"
            />
          </Link>
        </div>

        {/* Right Side: Appointment CTA button */}
        <div className="flex items-center gap-4 md:gap-8 z-50">
          <Link
            href="/appointment"
            className="bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider py-2.5 px-4 sm:py-3 sm:px-6 rounded-lg transition-all shadow-[0_3px_0_#752424] sm:shadow-[0_4px_0_#752424] hover:bg-primary-hover hover:shadow-[0_3px_0_#5a1a1a] sm:hover:shadow-[0_4px_0_#5a1a1a] active:translate-y-[3px] sm:active:translate-y-[4px] active:shadow-none"
          >
            <span className="inline sm:hidden">Book</span>
            <span className="hidden sm:inline">Book an Appointment</span>
          </Link>
        </div>

        {/* Full-Screen Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 w-full h-[100dvh] bg-background/98 backdrop-blur-xl z-40 flex flex-col justify-between pt-24 pb-8 px-6 md:hidden overflow-y-auto"
            >
              {/* Centered Menu Links with stagger and spring physics */}
              <div className="flex flex-col gap-6 mt-4">
                <span className="font-mono text-[0.65rem] tracking-[0.25em] text-primary/60 uppercase pl-1">
                  Navigation
                </span>
                <div className="flex flex-col gap-5">
                  {links.map((link, idx) => {
                    const isActive = link.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(link.href);

                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.06, duration: 0.4 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`font-serif text-3xl sm:text-4xl uppercase tracking-[0.15em] block py-1 transition-all duration-300 ${isActive ? "text-primary font-medium" : "text-foreground/60 hover:text-primary"
                            }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Accent Divider */}
              <div className="w-full border-t border-[#d1a3a3]/15 my-6" />

              {/* Luxury Contact & Concierge Information at bottom */}
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-mono text-[0.6rem] tracking-[0.25em] text-primary/60 uppercase block mb-1">
                      Lounge Hours
                    </span>
                    <p className="text-foreground text-xs font-semibold">
                      Monday – Sunday
                    </p>
                    <p className="text-foreground/50 text-[0.75rem] font-light">
                      9:00 AM – 8:00 PM
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[0.6rem] tracking-[0.25em] text-primary/60 uppercase block mb-1">
                      Get In Touch
                    </span>
                    <p className="text-foreground text-xs font-semibold">
                      Tel & WhatsApp
                    </p>
                    <p className="text-foreground/50 text-[0.75rem] font-light">
                      0775 201 201
                    </p>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[0.6rem] tracking-[0.25em] text-primary/60 uppercase block mb-1">
                    Our Sanctuary
                  </span>
                  <p className="text-foreground/75 text-[0.8rem] font-light leading-relaxed">
                    No. 59/1, Keppetipola Mawatha, Kolonnawa, Sri Lanka
                  </p>
                </div>

                {/* Social Links inside Mobile Menu */}
                <div className="flex gap-4 mt-2">
                  <Link 
                    href="https://www.instagram.com/lavendra_beauty_lounge?igsh=MWl2djRyZjZuNTV5aA%3D%3D" 
                    target="_blank" 
                    className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </Link>
                  <Link 
                    href="https://www.facebook.com/share/1ATG5VerKF/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" 
                    target="_blank" 
                    className="w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}
