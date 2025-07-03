import { getGames } from "@/app/actions/getGames";
import GoalList from "./GoalList";
import { countGames } from "@/app/actions/countGame";

interface PageProps {
  searchParams: Promise<{
    page?: string | string[];
    category?: string | string[];
  }>;
}

export default async function GoalWrapper({ searchParams }: PageProps) {
  // Convert the searchParams Promise to an object
  const resolvedSearchParams = await searchParams;
  const skip = Number(Array.isArray(resolvedSearchParams.page) ? resolvedSearchParams.page[0] : resolvedSearchParams.page) || 0; 
  const category = Array.isArray(resolvedSearchParams.category) ? resolvedSearchParams.category[0] : resolvedSearchParams.category || "";
  const games = await getGames(skip, category);
  const count = await countGames();
  
  return (
    <GoalList games={games} totalGames={count} />
  );
}

