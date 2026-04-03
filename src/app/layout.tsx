import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maelle — Digital Designer & Photographer",
  description:
    "A digital designer & photographer with 12 years of experience — specializing in crafting visual experiences that feel intentional, refined, and human.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--framer-white)] text-[var(--framer-black)]">
        <Providers smoothScroll defaultTheme="light" enableSystem={false}>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
