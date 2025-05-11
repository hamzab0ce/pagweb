import { useModalStore } from "@/stores/modalStore";
import type { GamesWithLinks } from "@/app/actions/getGames";
import Image from "next/image";

export default function GoalCard({game
}: {
  game: GamesWithLinks
  }) {
  const openModal = useModalStore((state) => state.openModal);
  const onClick = () => {
    openModal(game);
  };
  return (
    <li onClick={onClick} className="max-w-2xs cursor-pointer relative rounded-md overflow-hidden">
      <div className="flex flex-col items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <Image src={game.cover_url} alt={game.title} className="object-cover h-72 w-56" />
        <h2 className="mt-4 absolute bottom-0 bg-linear-to-b from-transparent to-80% to-black w-full p-2 text-md text-white">
          {game.title}
        </h2>
      </div>
    </li>
  );
}
