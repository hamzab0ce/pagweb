import type { GamesWithLinks } from "@/app/actions/getGames";
import { useModalStore } from "@/stores/modalStore";
import DownloadLinkList from "./DownLoadLinkList";
import GenreBadge from "./GenreBadge";
import Image from "next/image";

export default function GameTemplate({ game }: { game: GamesWithLinks }) {
  const modalStore = useModalStore();
  return (
    <>
      <div className="flex items-start justify-between p-5 border-b border-solid border-zinc-800 rounded-t">
        <h3 className="text-3xl w-full font-semibold text-zinc-100">
          {game.title}
        </h3>
        <button
          className="p-1 ml-auto cursor-pointer bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={() => modalStore.closeModal()}
        >
          <span className="bg-transparent text-zinc-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
      </div>
      <div className="relative p-5 flex-auto">
        <GenreBadge genres={game.games_genres} />
        <div className="flex gap-5">
          <div className="flex flex-col h-72 min-w-58">
            <Image
              src={game.cover_url}
              alt={game.title}
              className="object-cover h-full w-full  rounded-xl"
            />
          </div>
          <div className="">
            <ul className="text-zinc-300">
              <h2 className="text-zinc-100 text-2xl mb-5 font-semibold">
                Información del juego:
              </h2>
              <li>
                <b>Plataforma:</b> {game.platform}
              </li>
              <li>
                <b>Idiomas:</b> {game.language}
              </li>
              <li>
                <b>Peso:</b> {game.game_size}
              </li>
              <li>
                <b>Requisitos:</b> {game.requeriments}
              </li>
              {game.version && (
                <li>
                  <b>Version:</b> {game.version}
                </li>
              )}
              {game.serial && (
                <li>
                  <b>Serial:</b> {game.serial}
                </li>
              )}
            </ul>
            <div className="flex w-full">
              <DownloadLinkList links={game.links_descarga} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
