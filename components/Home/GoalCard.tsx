import type { GamesWithLinks } from "@/app/actions/getGames";
import Link from "next/link";

export default function GoalCard({ game }: { game: GamesWithLinks }) {
  const slug = game.title.toLowerCase().replace(" ", "-");
  return (
    <li
      className="max-w-2xs cursor-pointer relative overflow-hidden"
    >
      <Link href={`/game/${slug}-descargar-gratis/${game.id}`} className="flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <img
          src={game.cover_url}
          alt={game.title}
          className="object-contain h-72"
        />
        <h2 className="mt-4 absolute bottom-0 bg-linear-to-b font-medium from-transparent to-80% to-black w-full p-2 text-xl text-white">
          {game.title}
        </h2>
        <span className="absolute bg-zinc-900/40 border border-zinc-600 backdrop-blur rounded-md m-2 font-sans top-0 right-0 p-1 text-white">
          {game.platform}
        </span>
      </Link>
    </li>
  );
}
