import { getGames } from "@/app/actions/getGames";
import GoalList from "./GoalList";
import { countGames } from "@/app/actions/countGame";

interface PageProps {
  searchParams: {
    page?: string | string[];
    category?: string | string[];
  };
}

export default async function GoalWrapper({ searchParams }: PageProps) {
  const skip = Number(Array.isArray(searchParams.page) ? searchParams.page[0] : searchParams.page) || 0; 
  const category = Array.isArray(searchParams.category) ? searchParams.category[0] : searchParams.category || "";
  const games = await getGames(skip, category);
  const count = await countGames();
  
  return (
    <GoalList games={games} totalGames={count} />
  );
}

