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

export const metadata: Metadata = {
  metadataBase: new URL("https://emilianolapaz.dev"),
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
