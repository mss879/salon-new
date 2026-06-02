"use client";
 
import Link from "next/link";
import Image from "next/image";
 
export default function Footer() {
  const currentYear = new Date().getFullYear();
 
  const serviceCategories = [
    { name: "Hair Care & Styling", href: "/services?cat=hair" },
    { name: "Premium Facials & Skin", href: "/services?cat=facial" },
    { name: "Luxury Waxing Care", href: "/services?cat=waxing" },
    { name: "Nails & Lash Artistry", href: "/services?cat=nails" },
    { name: "Massage & Wellness Therapy", href: "/services?cat=wellness" },
  ];
 
  const quickLinks = [
    { name: "About Lavendra", href: "/about" },
    { name: "Our Services Menu", href: "/services" },
    { name: "Contact & Location", href: "/contact" },
    { name: "Book Consultations", href: "https://wa.me/94775201201" },
  ];
 
  return (
    <footer className="w-full bg-[#f4ebe1] text-foreground/80 pt-20 pb-8 px-6 border-t border-foreground/5 flex flex-col items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-foreground/10">
        
        {/* Column 1: Brand Profile */}
        <div className="flex flex-col">
          <Link href="/" className="mb-6 inline-block">
            <Image 
              src="/logo.webp" 
              alt="Lavendra Beauty Lounge Logo" 
              width={155} 
              height={45} 
              priority
              className="h-auto w-[130px] md:w-[155px]"
            />
          </Link>
          <p className="text-foreground/60 text-[0.95rem] font-light leading-relaxed mb-8 max-w-sm">
            Colombo's premier unisex luxury salon, offering custom-crafted beauty transformations, ISO 9001:2015 certified treatments, and a serene therapeutic experience in the heart of Kolonnawa.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/lavendra_beauty_lounge?igsh=MWl2djRyZjZuNTV5aA%3D%3D" target="_blank" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </Link>
            <Link href="https://www.facebook.com/share/1ATG5VerKF/?utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </Link>
            <Link href="https://www.tiktok.com/@lavendra.beauty.lounge?_r=1&_t=ZS-96roySHN5Xe" target="_blank" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.14-.24-.22v6.23c.04 3.75-2.22 7.37-5.88 8.44-3.97 1.3-8.61-.92-9.84-4.88C1.29 13.78 3.16 8.84 7.23 7.63c1.17-.37 2.42-.4 3.61-.09v4.11c-.81-.25-1.7-.22-2.47.19-1.22.61-1.92 2.01-1.74 3.37.21 1.48 1.49 2.64 2.99 2.64 1.75.05 3.25-1.32 3.31-3.07V.02z"/></svg>
            </Link>
          </div>
        </div>
 
        {/* Column 2: Service Offerings */}
        <div className="flex flex-col">
          <h4 className="font-serif text-sm text-primary font-bold tracking-[0.15em] mb-6 uppercase">
            SERVICES
          </h4>
          <ul className="flex flex-col gap-4">
            {serviceCategories.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="text-foreground/60 text-[0.95rem] font-light hover:text-primary hover:translate-x-1.5 inline-block transition-all duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Column 3: The Lounge */}
        <div className="flex flex-col">
          <h4 className="font-serif text-sm text-primary font-bold tracking-[0.15em] mb-6 uppercase">
            THE LOUNGE
          </h4>
          <ul className="flex flex-col gap-4">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="text-foreground/60 text-[0.95rem] font-light hover:text-primary hover:translate-x-1.5 inline-block transition-all duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Column 4: Contact & Hours */}
        <div className="flex flex-col">
          <h4 className="font-serif text-sm text-primary font-bold tracking-[0.15em] mb-6 uppercase">
            HOURS & LOCATION
          </h4>
          <p className="text-foreground font-semibold text-[0.95rem] mb-1">
            Monday – Sunday
          </p>
          <p className="text-foreground/60 text-[0.9rem] font-light mb-6">
            9:00 AM – 8:00 PM
          </p>
          <p className="text-foreground font-semibold text-[0.95rem] mb-1">
            Address
          </p>
          <p className="text-foreground/60 text-[0.9rem] font-light leading-relaxed mb-4">
            No. 59/1, Keppetipola Mawatha,<br />Kolonnawa, Sri Lanka
          </p>
          <p className="text-foreground/60 text-[0.9rem] font-light">
            Tel: 0775 201 201 <br />
            WhatsApp: 0775 201 201
          </p>
        </div>
 
      </div>
 
      {/* Subfooter */}
      <div className="w-full max-w-7xl pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-foreground/40 text-[0.8rem] tracking-wider font-light">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <p>© {currentYear} LAVENDRA BEAUTY LOUNGE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-1.5 text-foreground/30">
            <span>BUILT AND DESIGNED BY</span>
            <Link 
              href="https://www.arcai.agency" 
              target="_blank" 
              rel="noopener"
              title="ARC AI Agency - Web Design, Development, and AI Solutions"
              className="flex items-center ml-1"
            >
              <span className="sr-only">ARC AI Agency - Web Design, Development, and AI Solutions</span>
              <Image 
                src="/arc-logo.webp" 
                alt="Built and Designed by ARC AI Agency" 
                width={65} 
                height={65} 
                className="h-auto w-[65px] opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
          </div>
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-primary transition-colors duration-300">PRIVACY POLICY</Link>
          <Link href="/terms" className="hover:text-primary transition-colors duration-300">TERMS OF SERVICE</Link>
        </div>
      </div>
    </footer>
  );
}
