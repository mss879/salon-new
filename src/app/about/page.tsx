import AboutClient from "@/components/AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story & Heritage | Lavendra Beauty Lounge",
  description: "Discover the heritage and values of Lavendra Beauty Lounge, Colombo's ISO 9001:2015 certified luxury unisex salon. Led by our Creative Director and master stylists, we approach beauty transformations as an art form.",
  alternates: {
    canonical: "https://www.lavendrabeauty.lk/about",
  },
  openGraph: {
    title: "Our Story & Heritage | Lavendra Beauty Lounge",
    description: "Discover the heritage and values of Lavendra Beauty Lounge, Colombo's ISO 9001:2015 certified luxury unisex salon. Precision, passion, and uncompromising artistry.",
    url: "https://www.lavendrabeauty.lk/about",
    siteName: "Lavendra Beauty Lounge",
    images: [
      {
        url: "https://www.lavendrabeauty.lk/images/about_hero.webp",
        width: 800,
        height: 600,
        alt: "About Lavendra Beauty Lounge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story & Heritage | Lavendra Beauty Lounge",
    description: "Discover the heritage and values of Lavendra Beauty Lounge, Colombo's ISO 9001:2015 certified luxury unisex salon.",
    images: ["https://www.lavendrabeauty.lk/images/about_hero.webp"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
