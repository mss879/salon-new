import ServicesClient from "@/components/ServicesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Beauty Services & Menu | Lavendra Beauty Lounge",
  description: "Explore the comprehensive services catalog at Lavendra Beauty Lounge, Colombo's ISO 9001:2015 certified luxury unisex salon. From signature hydrafacials and massages to professional bridal styling and precision waxing.",
  alternates: {
    canonical: "https://lavendrabeautylounge.com/services",
  },
  openGraph: {
    title: "Bespoke Beauty Services & Menu | Lavendra Beauty Lounge",
    description: "Explore our premium, ISO 9001:2015 certified luxury treatments and salon services in Colombo, including advanced Korean glass skin hydrafacials, bridal designs, and therapeutic massage care.",
    url: "https://lavendrabeautylounge.com/services",
    siteName: "Lavendra Beauty Lounge",
    images: [
      {
        url: "https://lavendrabeautylounge.com/images/services_hero.webp",
        width: 800,
        height: 600,
        alt: "Services Menu | Lavendra Beauty Lounge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Beauty Services & Menu | Lavendra Beauty Lounge",
    description: "Explore our premium, ISO 9001:2015 certified luxury treatments and salon services in Colombo.",
    images: ["https://lavendrabeautylounge.com/images/services_hero.webp"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
