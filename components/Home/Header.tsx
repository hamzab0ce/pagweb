"use client"
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import SearchFilter from "./SearchFilter";
import { Dropdown } from "./Dropdown";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState("Todos");
  const router = useRouter();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    setSelectedOption(categoryParam || "Todos");
  }, [searchParams]);

  const handleDropdownChange = (option: string) => {
    setSelectedOption(option);
    if (option === "Todos") {
      router.push("/");
    } else {
      router.push(`/?category=${option}`);
    }
  };
  return (
    <header className="flex justify-between text-center items-center p-4 mx-10">
      <div className="flex items-center gap-2">
        <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
        <h1 className="font-inter text-2xl font-bold text-zinc-100 italic">
          Wave Repacks
        </h1>
      </div>
      <nav className="flex gap-5 font-medium text-zinc-100">
        <Link href="/">Inicio</Link>
        <Dropdown
          selectedOption={selectedOption}
          onChange={handleDropdownChange}
          options={["Todos", "Muy Bajos", "Bajos", "Medios", "Altos"]}
        />
        <Link target="_blank" href="https://discord.gg/VbJcf2Sm9b">Ayuda</Link>
      </nav>
      <div className="flex text-zinc-100">
        <SearchFilter />
      </div>
    </header>
  );
}