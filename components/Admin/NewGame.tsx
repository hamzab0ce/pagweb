"use client";
import { useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import DownloadLinksForm, { LinkInput } from "./DownloadsLinks";
import Input from "./Input";
import Select from "./Select";
import rehypeSanitize from "rehype-sanitize";

export type FormStateError = {
  title?: string[];
  cover_url?: string[];
  genres?: string[];
  platform?: string[];
  requeriments?: string[];
  download_links?: string[];
  description?: string[];
};

export default function NewGameForm() {
  const [formState, setFormState] = useState<{
    error: FormStateError | string[] | null;
  }>({
    error: null,
  });
  const [description, setDescription] = useState<string>("");
  const [requeriments, setRequirements] = useState([""]);
  const [downloadLinks, setDownloadLinks] = useState<LinkInput[]>([]);
  const [platform, setPlatforms] = useState<string[]>(["PC"]);

  const handlePlatformChange = (platform: string) => {
    setPlatforms([platform]);
  };

  const handleRequerimentsChange = (requeriment: string) => {
    setRequirements([requeriment]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("requeriments", requeriments[0]);
    formData.append("download_links", JSON.stringify(downloadLinks));
    formData.append("platform", platform[0]);
    const response = await fetch("/api/games", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    setFormState(result);
  };

  return (
    <div className="flex w-full items-start mb-10 gap-5 mx-10">
      <form
        onSubmit={handleSubmit}
        className="flex w-1/2 text-zinc-300 gap-5 p-5 flex-col bg-zinc-900 border border-zinc-800 shadow-lg rounded-lg"
      >
        <div className="flex min-w-full flex-col gap-5">
          <Input
            type="text"
            name="title"
            label="Título"
            placeholder="Minecraft, GTA, etc"
          />
            <Select
              name="Requisitos"
              selectedOption={requeriments}
              options={["Muy Bajos", "Bajos", "Medios", "Altos"]}
              handleChange={handleRequerimentsChange}
            />
          <Input
            type="text"
            name="cover_url"
            label="Imagen (URL)"
            placeholder="https://..."
          />
          <Input
            type="text"
            name="genres"
            label="Generos (separados por comas)"
            placeholder="Acción, Aventura, etc"
          />
          <Select
            name="Plataformas"
            selectedOption={platform}
            options={["PC", "Android", "PS2"]}
            handleChange={handlePlatformChange}
          />
          <DownloadLinksForm onChange={setDownloadLinks} />
          <textarea
            rows={40}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción..."
            className="w-full border text-zinc-400 rounded py-1 px-2 border-zinc-800"
            name="description"
          ></textarea>
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
        {Array.isArray(formState.error) &&
          formState.error.map((error, index) => (
            <p key={index} className="text-red-500">
              * {error}
            </p>
          ))}
      </form>
      <div className="prose bg-zinc-900 p-3 rounded-lg border border-zinc-800 w-full flex-1 text-white prose-invert">
        <Markdown
          rehypePlugins={[[rehypeRaw, rehypeSanitize]]}
          remarkPlugins={[remarkGfm]}
        >
          {description || "No hay descripción"}
        </Markdown>
      </div>
    </div>
  );
}
