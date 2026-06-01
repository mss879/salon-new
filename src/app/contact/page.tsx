import ContactClient from "@/components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location | Lavendra Beauty Lounge Colombo",
  description: "Get in touch with Lavendra Beauty Lounge, Colombo's premier luxury unisex beauty sanctuary. Find our address in Colombo 6, call our concierge, chat via WhatsApp, or read our FAQs.",
  alternates: {
    canonical: "https://lavendrabeautylounge.com/contact",
  },
  openGraph: {
    title: "Contact & Location | Lavendra Beauty Lounge Colombo",
    description: "Connect with our reservation concierge or visit our luxury unisex beauty lounge in Colombo. Safe parking, specialized consultations, and premium organic services.",
    url: "https://lavendrabeautylounge.com/contact",
    siteName: "Lavendra Beauty Lounge",
    images: [
      {
        url: "https://lavendrabeautylounge.com/images/contact_hero.webp",
        width: 800,
        height: 600,
        alt: "Contact Lavendra Beauty Lounge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Location | Lavendra Beauty Lounge Colombo",
    description: "Connect with our reservation concierge or visit our luxury unisex beauty lounge in Colombo.",
    images: ["https://lavendrabeautylounge.com/images/contact_hero.webp"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
