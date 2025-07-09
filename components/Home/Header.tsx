"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchFilter from "./SearchFilter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex relative z-30 bg-surface border-b border-border justify-between text-center items-center p-4">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/favicon.ico"
          className="rounded"
          alt="Logo"
          width={40}
          height={40}
        />
        <h1 className="font-inter md:block hidden text-2xl font-bold text-cyan-600">
          Games Hub
        </h1>
      </Link>
      <button className="cursor-pointer md:hidden" onClick={toggleMenu}>
        <MenuIcon className="block" />
      </button>
      <div
        className={`flex md:h-auto md:w-auto md:translate-x-0 items-center md:flex-row md:static duration-300 justify-end flex-col-reverse ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } absolute bg-surface/40 right-0 left-0 bottom-0 top-full h-screen backdrop-blur-md p-2 gap-5 text-primary`}
      >
        <nav className="flex flex-col md:flex-row gap-5 items-center font-medium">
          <Link href="/">Inicio</Link>
          <Link target="_blank" href="https://discord.gg/VbJcf2Sm9b">
            Ayuda
          </Link>
        </nav>
        <SearchFilter />
      </div>
    </header>
  );
}
