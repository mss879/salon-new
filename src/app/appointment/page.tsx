import AppointmentClient from "@/components/AppointmentClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Resplendent Appointment | Lavendra Beauty Lounge",
  description: "Schedule your luxury treatment session or bridal design consultation dynamically at Lavendra Beauty Lounge, Colombo's ISO 9001:2015 certified luxury unisex salon. Real-time calendar slot booking.",
  alternates: {
    canonical: "https://www.lavendrabeauty.lk/appointment",
  },
  openGraph: {
    title: "Book a Resplendent Appointment | Lavendra Beauty Lounge",
    description: "Reserve your luxury styling session or custom organic skincare therapy session at Colombo's premier beauty lounge. High-efficiency booking dispatch via WhatsApp.",
    url: "https://www.lavendrabeauty.lk/appointment",
    siteName: "Lavendra Beauty Lounge",
    images: [
      {
        url: "https://www.lavendrabeauty.lk/images/appointment_hero.webp",
        width: 800,
        height: 600,
        alt: "Book an Appointment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Resplendent Appointment | Lavendra Beauty Lounge",
    description: "Reserve your luxury styling session or custom organic skincare therapy session at Colombo's premier beauty lounge.",
    images: ["https://www.lavendrabeauty.lk/images/appointment_hero.webp"],
  },
};

export default function AppointmentPage() {
  return <AppointmentClient />;
}
