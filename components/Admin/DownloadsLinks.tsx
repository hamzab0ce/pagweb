"use client";

import { useState } from "react";

export type LinkInput = {
  provider: string;
  link: string;
};

const providers = [
  { value: "", label: "--Proveedor--" },
<<<<<<< HEAD
  { value: "Mega", label: "Mega" },
  { value: "Mediafire", label: "MediaFire" },
  { value: "Drive", label: "Google Drive" },
  { value: "Otro", label: "Otro" },
=======
  { value: "Mega", label: "Descargar" },
  { value: "Mediafire", label: "Descargar" },
  { value: "Drive", label: "Descargar" },
  { value: "Otro", label: "Descargar" },
>>>>>>> v2
];

export default function DownloadLinksCompact({
  onChange,
}: {
  onChange?: (links: LinkInput[]) => void;
}) {
  const [links, setLinks] = useState<LinkInput[]>([{ provider: "", link: "" }]);

  const update = (newLinks: LinkInput[]) => {
    setLinks(newLinks);
    onChange?.(newLinks);
  };

  const handleChange = (i: number, field: keyof LinkInput, value: string) => {
    const updated = [...links];
    updated[i][field] = value;
    update(updated);
  };

  const add = () => update([...links, { provider: "", link: "" }]);
  const remove = (i: number) => update(links.filter((_, index) => index !== i));

  return (
    <div className="space-y-2">
      {links.map((link, i) => (
        <div key={i} className="flex items-center gap-2">
          <select
            className="border bg-zinc-900 shadow-none border-zinc-800 text-sm text-white px-2 py-1 rounded w-[120px]"
            value={link.provider}
            onChange={(e) => handleChange(i, "provider", e.target.value)}
            required
          >
            {providers.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>

          <input
            type="url"
            placeholder="https://..."
            className="flex-1 border border-zinc-800 text-sm text-white px-2 py-1 rounded"
            value={link.link} 
            onChange={(e) => handleChange(i, "link", e.target.value)}
            required
          />

          {links.length > 1 && (
            <button
              type="button"
              onClick={() => remove(i)}
              className="text-red-400 text-xs hover:underline"
            >
              ✕
            </button>
          )}
        </div>
      ))}

      <div>
        <button
          type="button"
          onClick={add}
<<<<<<< HEAD
          className="text-blue-400 text-sm hover:underline"
=======
          className="text-purple-400 text-sm hover:underline"
>>>>>>> v2
        >
          + Añadir otro
        </button>
      </div>
    </div>
  );
}
