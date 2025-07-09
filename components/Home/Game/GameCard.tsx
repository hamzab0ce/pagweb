/* eslint-disable @next/next/no-img-element */
import type { GamesWithLinks } from "@/app/actions/getGames";
import Link from "next/link";

export default function GameCard({ game }: { game: GamesWithLinks }) {
  const slug = game.title.toLowerCase().replace(" ", "-");
  return (
    <li className="max-w-2xs cursor-pointer shadow-lg relative">
      <Link
        prefetch
        href={`/game/${slug}-descargar-gratis/${game.id}`}
        className="flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
      >
        <img
          src={game.cover_url}
          alt={game.title}
          className="object-contain h-72"
        />
        <h2 className="mt-4 absolute bottom-0 bg-linear-to-b font-medium from-transparent to-80% to-black w-full p-2 text-xl text-white">
          {game.title}
        </h2>
        <span className="absolute text-xs font-semibold bg-linear-to-b from-amber-500 to-amber-900 rounded-t font-sans bottom-full right-0 p-0.5 px-2 text-white">
          {game.platform}
        </span>
      </Link>
    </li>
  );
}
