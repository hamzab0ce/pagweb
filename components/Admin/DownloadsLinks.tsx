"use client";

import { X } from "lucide-react";
import { useState } from "react";

export type LinkInput = {
  label: string;
  link: string;
};

export default function DownloadLinksCompact({
  onChange,
}: {
  onChange?: (links: LinkInput[]) => void;
}) {
  const [links, setLinks] = useState<LinkInput[]>([{ label: "", link: "" }]);

  const update = (newLinks: LinkInput[]) => {
    setLinks(newLinks);
    onChange?.(newLinks);
  };

  const handleChange = (i: number, field: keyof LinkInput, value: string) => {
    const updated = [...links];
    updated[i][field] = value;
    update(updated);
  };

  const add = () => update([...links, { label: "", link: "" }]);
  const remove = (i: number) => update(links.filter((_, index) => index !== i));

  return (
    <div className="space-y-2">
      <span>Enlaces de descarga</span>
      {links.map((link, i) => (
        <div key={i} className="flex items-center mt-2 gap-2">
          <input
            type="text"
            list="label"
            placeholder="Texto..."
            className="flex-1 border border-zinc-800 text-sm text-white px-2 py-1 rounded"
            value={link.label}
            onChange={(e) => handleChange(i, "label", e.target.value)}
          />

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
              <X className="w-5 h-5 cursor-pointer" />
            </button>
          )}
        </div>
      ))}

      <div>
        <button
          type="button"
          onClick={add}
          className="text-purple-400 text-sm hover:underline"
        >
          + Añadir otro
        </button>
      </div>
    </div>
  );
}
