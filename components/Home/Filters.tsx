"use client"
import { useSearchStore } from "@/stores/filterStore"; 
import { platforms } from "@/const/platforms"; 

export default function Filters() {

  const selected = useSearchStore((state) => state.selectedPlatforms);
  const setSelected = useSearchStore((state) => state.setSelectedPlatforms);
  const handleChange = (platform: string) => {
    setSelected(platform)
  };

  const renderCheckbox = platforms.map((platform) => {
    return (
      <label key={platform} className="flex items-center gap-2 group">
        <input
          name="platform"
          onChange={() => handleChange(platform)}
          type="radio"
          className="hidden"
          checked={selected === platform}
        />
        <div className="w-2 h-2 rounded-xs group-has-checked:bg-blue-700 outline-3 outline-offset-2 outline-blue-700"></div>
        <span className="text-sm font-semibold">{platform}</span>
      </label>
    );
  });

  return (
    <div className="w-1/5 h-auto  bg-zinc-900 border p-5 border-zinc-800 shadow shadow-black rounded-2xl">
      <h2 className="text-zinc-100 font-semibold">Filtros</h2>
      <div className="flex ml-4 gap-5 my-5 flex-col text-zinc-100">
        <span className="text-zinc-500 text-sm font-bold">Plataformas</span>
        {renderCheckbox}
      </div>
    </div>
  );
}
