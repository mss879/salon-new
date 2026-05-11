import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeautyServicesTab from "@/components/BeautyServicesTab";
import AboutUs from "@/components/AboutUs";
import PricingHighlights from "@/components/PricingHighlights";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <Services />
        <BeautyServicesTab />
        <AboutUs />
        <PricingHighlights />
        <Testimonials />
      </main>
    </div>
  );
}
