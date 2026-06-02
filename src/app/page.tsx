import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lavendra Beauty Lounge | Luxury Unisex Salon in Kolonnawa",
  description: "Discover your true beauty potential at Lavendra Beauty Lounge. A premier luxury unisex salon in Kolonnawa offering elite hair care, advanced active facials, wellness massages, and master bridal styling.",
  alternates: {
    canonical: "https://www.lavendrabeauty.lk",
  },
  openGraph: {
    title: "Lavendra Beauty Lounge | Luxury Unisex Salon in Kolonnawa",
    description: "Discover your true beauty potential at Lavendra Beauty Lounge. A premier luxury unisex salon in Kolonnawa offering elite hair care, advanced active facials, wellness massages, and master bridal styling.",
    url: "https://www.lavendrabeauty.lk",
    siteName: "Lavendra Beauty Lounge",
    images: [
      {
        url: "https://www.lavendrabeauty.lk/images/og-share.jpg",
        width: 1024,
        height: 536,
        alt: "Lavendra Beauty Lounge - Luxury Unisex Salon & Spa Stations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavendra Beauty Lounge | Luxury Unisex Salon in Kolonnawa",
    description: "Discover your true beauty potential at Lavendra Beauty Lounge. A premier luxury unisex salon in Kolonnawa offering elite hair care, advanced active facials, wellness massages, and master bridal styling.",
    images: ["https://www.lavendrabeauty.lk/images/og-share.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}
