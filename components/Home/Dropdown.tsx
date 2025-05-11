"use client"
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DropdownProps {
  options: string[];
  selectedOption: string;
  onChange?: (option: string) => void;
}

export const Dropdown = ({ options, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (option: string) => {
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer">
        <button>Categorias</button>
        <ChevronDown className={`${isOpen ? "rotate-180" : ""} transition-transform duration-300 ease-in-out`} />
      </div>
      <ul className={`${isOpen ? "flex" : "hidden"} my-2 gap-2 flex-col py-3 items-start absolute top-full w-40 bg-zinc-900 border border-zinc-800 rounded-lg`}>
        {options.map((option) => (
          <li
            className="cursor-pointer font-normal hover:bg-zinc-800 w-full px-3"
            onClick={() => handleChange(option)}
            key={option}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
