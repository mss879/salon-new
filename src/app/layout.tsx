import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const basicFont = localFont({
  src: "../../public/Basic/Basic-Regular.ttf",
  variable: "--font-basic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lavendra Beauty Lounge | Luxury Unisex Salon in Colombo",
    template: "%s | Lavendra Beauty Lounge",
  },
  description: "Experience bespoke beauty transformations and luxurious organic care at Lavendra Beauty Lounge, Colombo's ISO 9001:2015 certified luxury unisex salon.",
  metadataBase: new URL("https://www.lavendrabeauty.lk"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Lavendra Beauty Lounge | Luxury Unisex Salon in Colombo",
    description: "Colombo's premier unisex luxury salon, offering custom-crafted beauty transformations, ISO 9001:2015 certified treatments, and a serene therapeutic experience in Sri Lanka.",
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
    title: "Lavendra Beauty Lounge | Luxury Unisex Salon in Colombo",
    description: "Colombo's premier unisex luxury salon, offering custom-crafted beauty transformations, ISO 9001:2015 certified treatments, and a serene therapeutic experience.",
    images: ["https://www.lavendrabeauty.lk/images/og-share.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Lavendra Beauty Lounge",
  "image": "https://www.lavendrabeauty.lk/logo.webp",
  "@id": "https://www.lavendrabeauty.lk/#salon",
  "url": "https://www.lavendrabeauty.lk",
  "telephone": "+94775201201",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 59/1, Keppetipola Mawatha",
    "addressLocality": "Kolonnawa",
    "addressRegion": "Western Province",
    "postalCode": "10600",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.927079,
    "longitude": 79.883908
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/lavendrabeautylounge",
    "https://www.instagram.com/lavendrabeautylounge",
    "https://www.tiktok.com/@lavendra.beauty.lounge"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${basicFont.variable} h-full overflow-x-clip antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-clip w-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
