import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { personal } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// VERCEL_PROJECT_PRODUCTION_URL es el dominio estable de producción;
// VERCEL_URL cambia en cada deploy/preview. Preferimos el primero para
// que los links compartidos (og:image, etc.) no dependan del deploy actual.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personal.name} — ${personal.role}`,
  description: personal.tagline,
  openGraph: {
    title: `${personal.name} — ${personal.role}`,
    description: personal.tagline,
    images: [personal.photo],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
