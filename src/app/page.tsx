import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lavendra Beauty Lounge | Luxury Unisex Salon in Colombo 6",
  description: "Discover your beauty potential at Lavendra Beauty Lounge, Colombo's premier unisex salon. Offering ISO 9001:2015 certified hair styling, advanced facials, luxury waxing, massage wellness, and master bridal packages.",
  alternates: {
    canonical: "https://lavendrabeautylounge.com",
  },
  openGraph: {
    title: "Lavendra Beauty Lounge | Luxury Unisex Salon in Colombo 6",
    description: "Colombo's premier unisex luxury salon, offering custom-crafted beauty transformations, ISO 9001:2015 certified treatments, and a serene therapeutic experience in Sri Lanka.",
    url: "https://lavendrabeautylounge.com",
    siteName: "Lavendra Beauty Lounge",
    images: [
      {
        url: "https://lavendrabeautylounge.com/logo.webp",
        width: 800,
        height: 600,
        alt: "Lavendra Beauty Lounge Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavendra Beauty Lounge | Luxury Unisex Salon in Colombo 6",
    description: "Colombo's premier unisex luxury salon, offering custom-crafted beauty transformations, ISO 9001:2015 certified treatments, and a serene therapeutic experience.",
    images: ["https://lavendrabeautylounge.com/logo.webp"],
  },
};

export default function Home() {
  return <HomeClient />;
}
