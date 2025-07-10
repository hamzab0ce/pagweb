"use client";
import { platforms, requeriments } from "@/const/filtersConst";
import { useFilters } from "@/hooks/useFilters";
import { Check, Filter, X } from "lucide-react";
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
          <div className="w-4 h-4 place-content-center rounded-sm group-has-checked:bg-amber-400 bg-surface/10 outline-1 outline-border">
            <Check
              strokeWidth={4}
              className="w-3 h-3 m-auto text-amber-700 hidden group-has-checked:block"
            />
          </div>
          <span className="text-sm text-secundary font-medium">{value}</span>
        </label>
      );
    });

  return (
    <div className={`flex sticky top-1 md:w-1/4 duration-300 flex-row gap-2 z-20`}>
      <div className={`bg-surface/20 backdrop-blur-xs ${isOpen ? "block" : "hidden"} absolute top-0 left-0 right-0 bottom-0`}></div>
      <div
        className={`md:flex md:static md:w-full md:mx-0 duration-300 z-20 mx-2 fixed ${
          isOpen ? "left-0" : "-left-full"
        } w-2/3 flex-col md:bg-surface/10 backdrop-blur-2xl md:backdrop-blur-none border border-border p-2 py-5 rounded-2xl`}
      >
        <div className="absolute top-2 right-2">
          <button onClick={toggleMenu} className="md:hidden text-amber-400 cursor-pointer">
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex ml-4 gap-5 flex-col text-zinc-100">
            <span className="text-primary text-sm font-bold">Plataformas</span>
            {renderCheckbox("platform", platforms, handleChange)}
          </div>
          <div className="flex ml-4 gap-5 flex-col text-zinc-100">
            <span className="text-primary text-sm font-bold">
              Requerimientos
            </span>
            {renderCheckbox("requeriments", requeriments, handleCategory)}
          </div>
        </div>
      </div>
      <button
        onClick={toggleMenu}
        className="md:hidden bottom-5 left-5 fixed p-2 bg-surface/15 backdrop-blur-2xl border border-border rounded-2xl flex cursor-pointer items-center"
      >
        <Filter strokeWidth={2} className="w-4 h-4 text-amber-400" />
      </button>
    </div>
  );
}
