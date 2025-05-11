import { getGames } from "@/app/actions/getGames";
import GoalList from "./GoalList";
import { countGames } from "@/app/actions/countGame";

export default async function GoalWrapper({ searchParams }: {
  searchParams: Promise<{[key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const skip = Number(params.page) || 0; 
  const category = params.category as string || "";
  const games = await getGames(skip, category);
  const count = await countGames();
  return (
    <GoalList games={games} totalGames={count} />
  );
}