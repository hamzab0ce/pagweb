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
  title: "BitZone",
  icons: "/favicon.ico",
  openGraph: {
    title: "BitZone",
    description: "Pagina oficial de BitZone, descarga tus juegos favoritos gratis.",
    siteName: "BitZone",
    locale: "es-ES",
    type: "website",    
    images: "/favicon.ico",
  },
  description: "Pagina oficial de BitZone, descarga tus juegos favoritos gratis.",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans text-zinc-100 antialiased min-h-screen flex flex-col bg-zinc-900/80 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]`}
      >
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        {children}
        {modal}
      </body>
    </html>
  );
}
