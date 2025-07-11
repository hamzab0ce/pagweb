import Header from "@/components/Home/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "react-hot-toast";
import backgroundImage from "../assets/img/background.png";
import "./globals.css";

const montserratSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Games Hub",
  icons: "/favicon.ico",
  openGraph: {
    title: "Games Hub",
    description:
      "Pagina oficial de Games Hub, descarga tus juegos favoritos gratis.",
    siteName: "Games Hub",
    locale: "es-ES",
    type: "website",
    images: "/favicon.ico",
  },
  description:
    "Pagina oficial de Games Hub, descarga tus juegos favoritos gratis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`dark ${montserratSans.variable} min-h-screen w-full font-sans text-zinc-100 antialiased flex flex-col`}
      >
        <Analytics />
        <Toaster />
        {/* Imagen de fondo */}
        <div className="fixed inset-0 -z-20">
          <Image
            src={backgroundImage.src}
            alt="Background"
            width={1920}
            height={1080}
            className="w-full h-full"
            priority
          />
        </div>

        {/* Overlay con backdrop-blur */}
        <div className="fixed inset-0 backdrop-blur-3xl bg-amber-950/20 -z-10"></div>

        <section className="flex flex-col min-h-screen mx-5 md:mx-20">
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          {children}
        </section>
      </body>
    </html>
  );
}
