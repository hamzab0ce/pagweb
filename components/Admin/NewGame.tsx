"use client";
import createGame from "@/app/actions/newGame";
import { useState } from "react";
import DownloadLinksForm, { LinkInput } from "./DownloadsLinks";
import Input from "./Input";
import Select from "./Select";
import { GamesWithLinks } from "@/app/actions/getGames";
export type FormStateError = {
  title?: string[];
  cover_url?: string[];
  genres?: string[];
  download_links?: string[];
  password?: string[];
  game_size?: string[];
  platform?: string[];
};

export default function NewGameForm() {
  const [formState, setFormState] = useState<{
    error: FormStateError | string[] |null;
    data: GamesWithLinks | null;
  }>({
    error: null,
    data: null,
  });
  const [requeriments, setRequirements] = useState([""]);
  const [downloadLinks, setDownloadLinks] = useState<LinkInput[]>([]);
  const [platform, setPlatforms] = useState<string[]>(["PC"]);

  const handlePlatformChange = (platform: string) => {
    setPlatforms([platform]);
  };
  const handleRequerimentsChange = (requeriment: string) => {    
    setRequirements([requeriment]);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("requeriments", requeriments[0]);
    formData.append("download_links", JSON.stringify(downloadLinks));
    formData.append("platform", platform[0]);
    const response = await createGame(formData);
    setFormState(response);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex text-zinc-300 gap-5 min-w-1/4 p-5 flex-col bg-zinc-900 border border-zinc-800 shadow-lg rounded-lg"
    >
      <div className="grid grid-cols-3 flex-wrap gap-5">
        <Input
          type="text"
          name="title"
          label="Título"
          placeholder="Minecraft, GTA, etc"
        />
        <Input
          type="text"
          name="cover_url"
          label="Imagen (URL)"
          placeholder="https://..."
        />
        <Input type="password" name="password" label="Contraseña" optional />
        <Input
          type="text"
          name="game_size"
          label="Tamaño"
          placeholder="10 MB, 1 GB, etc"
        />
        <Select
          name="Plataformas"
          selectedOption={platform}
          options={["PC", "Android", "PS2"]}
          handleChange={handlePlatformChange}
        />
        <Select
          name="Requisitos"
          selectedOption={requeriments}
          options={["Muy Bajos", "Bajos", "Medios", "Altos"]}
          handleChange={handleRequerimentsChange}
        />
        
        <Input
          type="text"
          name="genres"
          label="Generos (separados por comas)"
          placeholder="Acción, Aventura, etc"
        />
        <Input
          type="text"
          name="serial"
          label="Serial PS2 (Opcional)"
          placeholder="1234567890"
        />
        <Input
          type="text"
          name="version"
          label="Versión (Opcional)"
          placeholder="1.0.0"
        />
        <Input
          type="text"
          name="language"
          label="Idiomas"
          placeholder="Español, Ingles, etc"
        />
        <DownloadLinksForm onChange={setDownloadLinks} />

      </div>
      <button
        className="border rounded-md py-1 font-medium cursor-pointer border-zinc-800 bg-blue-700"
        type="submit"
      >
        {"Crear Juego"}
      </button>
      {formState.error && (
        <div className="inline-flex gap-3 text-red-500">
          {Object.entries(formState.error).map(([key, value]) => (
            <p key={key}>* {value}</p>
          ))}
        </div>
      )}
    </form>
  );
}
