import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Home/Header";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Games Hub",
  icons: "/favicon.ico",
  openGraph: {
    title: "Games Hub",
    description: "Pagina oficial de Games Hub, descarga tus juegos favoritos gratis.",
    siteName: "Games Hub",
    locale: "es-ES",
    type: "website",    
    images: "/favicon.ico",
  },
  description: "Pagina oficial de Games Hub, descarga tus juegos favoritos gratis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-black overflow-hidden">
      <body
        className={`dark ${geistSans.variable} ${geistMono.variable} min-h-screen font-sans text-zinc-100 antialiased flex flex-col bg-background bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_20px]`}
      >
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
