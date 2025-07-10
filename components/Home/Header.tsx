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
    <header className="flex relative rounded-3xl top-0 z-30 justify-between text-center items-center p-4">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/favicon.ico"
          className="rounded"
          alt="Logo"
          width={40}
          height={40}
        />
      </Link>
      <button className="cursor-pointer md:hidden" onClick={toggleMenu}>
        <MenuIcon className="block" />
      </button>
      <div
        className={`flex md:h-auto md:backdrop-blur-none md:w-auto md:translate-y-0 items-center md:flex-row md:static duration-300 justify-end flex-col-reverse ${
          isOpen ? "translate-y-0 rounded-t-2xl" : "translate-y-full"
        } fixed right-0 top-16 h-screen backdrop-blur-md p-2 gap-5 text-secundary`}
      >
        <nav className="flex flex-col md:flex-row gap-2 text-sm items-center font-medium">
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
