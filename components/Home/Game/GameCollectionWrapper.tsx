import { countGames } from "@/app/actions/countGame";
import { getGames } from "@/app/actions/getGames";
import GameCollection from "./GameCollection";

interface PageProps {
  searchParams: Promise<{
    page?: string | string[];
    category?: string | string[];
  }>;
}

export default async function GameCollectionWrapper({
  searchParams,
}: PageProps) {
  // Convert the searchParams Promise to an object
  const resolvedSearchParams = await searchParams;
  const skip =
    Number(
      Array.isArray(resolvedSearchParams.page)
        ? resolvedSearchParams.page[0]
        : resolvedSearchParams.page
    ) || 0;
  const category = Array.isArray(resolvedSearchParams.category)
    ? resolvedSearchParams.category[0]
    : resolvedSearchParams.category || "";
  const games = await getGames(skip, category);
  const count = await countGames();

  return <GameCollection games={games} totalGames={count} />;
}
