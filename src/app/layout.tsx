import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'], // Choose weights you need
  variable: '--font-space-mono',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Emmi AI - The Engineering AI Platform",
  description: "Emmi AI - The Engineering AI Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark antialiased` + spaceMono.variable}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights/>
      </body>
    </html>
  );
}
