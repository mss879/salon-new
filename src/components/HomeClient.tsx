"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeautyServicesTab from "@/components/BeautyServicesTab";
import AboutUs from "@/components/AboutUs";
import PricingHighlights from "@/components/PricingHighlights";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Preloader from "@/components/Preloader";

export default function HomeClient() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Preloader onComplete={() => setPreloaderFinished(true)} />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero startAnimation={preloaderFinished} />
        <Services />
        <BeautyServicesTab />
        <AboutUs />
        <PricingHighlights />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}
