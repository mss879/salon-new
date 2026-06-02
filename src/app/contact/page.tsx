import ContactClient from "@/components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location | Lavendra Beauty Lounge",
  description: "Get in touch with Lavendra Beauty Lounge, a premier luxury unisex beauty sanctuary. Find our address in Kolonnawa, call our concierge, chat via WhatsApp, or read our FAQs.",
  alternates: {
    canonical: "https://www.lavendrabeauty.lk/contact",
  },
  openGraph: {
    title: "Contact & Location | Lavendra Beauty Lounge",
    description: "Connect with our reservation concierge or visit our luxury unisex beauty lounge in Kolonnawa. Safe parking, specialized consultations, and premium organic services.",
    url: "https://www.lavendrabeauty.lk/contact",
    siteName: "Lavendra Beauty Lounge",
    images: [
      {
        url: "https://www.lavendrabeauty.lk/images/contact_hero.webp",
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
    title: "Contact & Location | Lavendra Beauty Lounge",
    description: "Connect with our reservation concierge or visit our luxury unisex beauty lounge in Kolonnawa.",
    images: ["https://www.lavendrabeauty.lk/images/contact_hero.webp"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
