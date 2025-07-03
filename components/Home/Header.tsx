import Image from "next/image";
import SearchFilter from "./SearchFilter";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between text-center items-center p-4 mx-10">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
        <h1 className="font-inter text-2xl font-bold text-zinc-100">
          BitZone
        </h1>
      </Link>
      <div className="flex gap-5 text-zinc-100">
      <nav className="flex gap-5 items-center font-medium text-zinc-100">
        <Link href="/">Inicio</Link>

        <Link target="_blank" href="https://discord.gg/VbJcf2Sm9b">Ayuda</Link>
      </nav>
        <SearchFilter />
      </div>
    </header>
  );
}