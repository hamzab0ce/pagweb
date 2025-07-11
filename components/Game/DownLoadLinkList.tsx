import type { links_descarga } from "@/app/generated/prisma";

export default function DownloadLinkList({
  links,
}: {
  links: links_descarga[];
}) {
  
  return (
    <>
      <ul className="flex flex-wrap w-full gap-x-3">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.link}
            rel="noopener noreferrer"
            target="_blank"
            className="text-zinc-100 flex-1 min-w-1/3 text-center bg-amber-500 p-2 rounded-md mt-5 block"
          >
            Descargar
          </a>
        ))}
      </ul>
    </>
  );
}
