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

const cherryFont = localFont({
  src: "../../public/Cherry_Cream_Soda/CherryCreamSoda-Regular.ttf",
  variable: "--font-cherry",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lavendra Beauty Lounge - Discover your beauty potential",
  description: "Bespoke beauty transformations and luxurious care. Experience the premier salon experience in Colombo 6, Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${basicFont.variable} ${cherryFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
