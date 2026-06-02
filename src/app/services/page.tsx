import ServicesClient from "@/components/ServicesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Beauty Services & Menu | Lavendra Beauty Lounge",
  description: "Explore the comprehensive services catalog at Lavendra Beauty Lounge, an ISO 9001:2015 certified luxury unisex salon in Kolonnawa. From signature hydrafacials and massages to professional bridal styling and precision waxing.",
  alternates: {
    canonical: "https://www.lavendrabeauty.lk/services",
  },
  openGraph: {
    title: "Bespoke Beauty Services & Menu | Lavendra Beauty Lounge",
    description: "Explore our premium, ISO 9001:2015 certified luxury treatments and salon services in Kolonnawa, including advanced Korean glass skin hydrafacials, bridal designs, and therapeutic massage care.",
    url: "https://www.lavendrabeauty.lk/services",
    siteName: "Lavendra Beauty Lounge",
    images: [
      {
        url: "https://www.lavendrabeauty.lk/images/services_hero.webp",
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
    description: "Explore our premium, ISO 9001:2015 certified luxury treatments and salon services in Kolonnawa.",
    images: ["https://www.lavendrabeauty.lk/images/services_hero.webp"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
