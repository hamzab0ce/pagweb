"use client";
import { platforms, requeriments } from "@/const/filtersConst";
import { useSearchStore } from "@/stores/filterStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Filters() {
  const selected = useSearchStore((state) => state.selectedPlatforms);
  const setSelected = useSearchStore((state) => state.setSelectedPlatforms);
  const handleChange = (platform: string) => {
    setSelected(platform);
  };

  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState("Todos");
  const router = useRouter();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    setSelectedOption(categoryParam || "Todos");
  }, [searchParams]);

  const handleCategory = (option: string) => {
    setSelectedOption(option);
    if (option === "Todos") {
      router.push("/");
    } else {
      router.push(`/?category=${option}`);
    }
  };

  const renderCheckbox = (name: string, list: string[], action: (value: string) => void) =>
    list.map((value) => {
      return (
        <label key={value} className="flex items-center gap-2 group">
          <input
            name={name}
            onChange={() => action(value)}
            type="radio"
            className="hidden"
            checked={selected === value || selectedOption === value}
          />
          <div className="w-2 h-2 rounded-xs group-has-checked:bg-purple-400 outline-3 outline-offset-2 outline-purple-400"></div>
          <span className="text-sm font-semibold">{value}</span>
        </label>
      );
    });

  return (
    <div className="w-1/5 h-auto  bg-zinc-900 border p-5 border-zinc-800 shadow shadow-black rounded-2xl">
      <h2 className="text-zinc-100 font-semibold">Filtros</h2>
      <div className="flex ml-4 gap-5 my-5 flex-col text-zinc-100">
        <span className="text-zinc-500 text-sm font-bold">Plataformas</span>
        {renderCheckbox("platform", platforms, handleChange)}
      </div>
      <div className="flex ml-4 gap-5 my-5 flex-col text-zinc-100">
        <span className="text-zinc-500 text-sm font-bold">Requerimientos</span>
        {renderCheckbox("requeriments", requeriments, handleCategory)}
      </div>
    </div>
  );
}
