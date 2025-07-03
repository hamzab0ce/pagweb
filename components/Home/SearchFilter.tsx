"use client"
import { SearchIcon } from "lucide-react";
import { useSearchStore } from "@/stores/filterStore";
import type { ChangeEvent } from "react";

export default function SearchFilter() {
  const search = useSearchStore((state) => state.searchQuery);
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  };
  return (
    <label htmlFor="search" className="w-96 border border-zinc-800 bg-zinc-800/50 flex rounded-xl p-2">
      <input
        type="text"
        id="search"
        name="search"
        value={search}
        onChange={(e) => handleSearch(e)}
        placeholder="¿Que estas buscando?"
        className="px-2 w-full focus:outline-0 font-light text-sm text-zinc-50"
      />
      <SearchIcon className="w-5 h-5 text-zinc-700" />
    </label>
  );
}