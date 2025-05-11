"use client"
import GoalCard from "./GoalCard";
import { useSearchStore } from "@/stores/filterStore"
import Pagination from "./Pagination";
import { GamesWithLinks } from "@/app/actions/getGames";
import { ITEMS_PER_PAGE } from "@/const/itemPerPage";
import { Suspense, useMemo } from "react";

export default function GoalList({ games, totalGames }: {
  games: GamesWithLinks[],
  totalGames: number
}) {
  const activePlatforms = useSearchStore((state) => state.selectedPlatforms);
  const search = useSearchStore((state) => state.searchQuery);
  
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      return (
        game.title.toLowerCase().includes(search.toLowerCase()) &&
        (activePlatforms === "All" || game.platform === activePlatforms)
      );
    });  
  }, [games, activePlatforms, search]);
  
  return (
    <section className="flex w-full flex-col p-5 justify-center bg-zinc-900 border border-zinc-800 shadow shadow-black rounded-2xl">
      <ul className="flex w-full flex-wrap gap-5 my-5">
        {filteredGames.map((game) => {
          return <GoalCard key={game.id} game={game} />;
        })}
      </ul>
      {filteredGames.length === 0 && <h1 className="text-zinc-100 my-10 text-center">No se encontraron juegos</h1>}
      <Suspense fallback={null}>
        <Pagination totalPages={Math.ceil((totalGames || 1) / ITEMS_PER_PAGE)} />
      </Suspense>
    </section>
  );
}
