import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PitchIQ | Next-Gen Football Analytics",
  description: "Advanced football analytics platform for scouting and match analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}