import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Using Inter for general text and Outfit for headings to give a premium feel
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gulabi High School | Excellence in Education",
  description: "Gulabi High School is a premier educational institution dedicated to providing holistic and modern education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans selection:bg-primary-200 selection:text-primary-900">
        <Navbar />
        <main className="flex-grow pt-[72px] flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
