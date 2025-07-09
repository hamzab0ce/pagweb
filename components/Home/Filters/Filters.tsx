"use client";
import { platforms, requeriments } from "@/const/filtersConst";
import { useFilters } from "@/hooks/useFilters";
import { ChevronRight, X } from "lucide-react";
import { useState } from "react";

export default function Filters() {
  const { selected, handleChange, selectedOption, handleCategory } =
    useFilters();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderCheckbox = (
    name: string,
    list: string[],
    action: (value: string) => void
  ) =>
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
          <div className="w-2 h-2 rounded-xs group-has-checked:bg-amber-400 outline-3 outline-offset-2 outline-amber-400"></div>
          <span className="text-sm text-primary font-semibold">{value}</span>
        </label>
      );
    });

  return (
    <div className={`flex md:w-1/5 duration-300 flex-row gap-2 z-20`}>
      <div className={`bg-surface/20 backdrop-blur-xs ${isOpen ? "block" : "hidden"} absolute top-0 left-0 right-0 bottom-0`}></div>
      <div
        className={`md:flex md:static md:w-full md:mx-0 duration-300 z-20 mx-2 fixed ${
          isOpen ? "left-0" : "-left-full"
        } w-1/2 flex-col bg-surface border border-border p-5 rounded-2xl`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-primary font-semibold">Filtrar por:</h2>
          <button onClick={toggleMenu} className="md:hidden text-zinc-500 cursor-pointer">
            <X size={20} />
          </button>
        </div>
        <div className="flex ml-4 gap-5 my-5 flex-col text-zinc-100">
          <span className="text-zinc-500 text-sm font-bold">Plataformas</span>
          {renderCheckbox("platform", platforms, handleChange)}
        </div>
        <div className="flex ml-4 gap-5 my-5 flex-col text-zinc-100">
          <span className="text-zinc-500 text-sm font-bold">
            Requerimientos
          </span>
          {renderCheckbox("requeriments", requeriments, handleCategory)}
        </div>
      </div>
      <button
        onClick={toggleMenu}
        className="md:hidden px-2 bg-surface border border-border rounded-2xl flex cursor-pointer items-center gap-2"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
