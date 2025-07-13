import type { links_descarga } from "@/app/generated/prisma";
import { Download } from "lucide-react";

export default function DownloadLinkSection({
  links,
}: {
  links: links_descarga[];
}) {
  return (
    <div className="p-3 rounded-lg flex-1 w-full bg-zinc-900 border border-zinc-800">
      <div className="flex">
        <Download className="w-6 h-6 mr-2 text-amber-500" />
        <h2 className="font-semibold">Enlaces de Descargas:</h2>
      </div>
      <ul className="flex flex-col flex-wrap w-full gap-x-3">
        {links.map((link) => (
          <a
          key={link.id}
          href={link.link}
          rel="noopener noreferrer"
          target="_blank"
          className="text-zinc-950 font-medium flex-1 min-w-1/3 text-center bg-amber-500 hover:bg-amber-600 duration-300 p-2 rounded-md mt-5 block"
          >
            {link.label || "Descargar"}
          </a>
        ))}
      </ul>
    </div>
  );
}
