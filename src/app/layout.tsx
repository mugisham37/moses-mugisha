import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moses Mugisha — Software Engineer & Creative Technologist",
  description: "Full-stack software engineer, web designer, motion graphics artist, VFX artist, and 3D designer based in Kigali, Rwanda.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" />
      </head>
      <body className="min-h-full"><Providers>{children}</Providers></body>
    </html>
  );
}
