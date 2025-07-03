import { getGames } from "@/app/actions/getGames";
import GoalList from "./GoalList";
import { countGames } from "@/app/actions/countGame";
export default async function GoalWrapper({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // No necesitas esperar a searchParams, ya que es un objeto
  const skip = Number(searchParams.page) || 0; 
  const category = searchParams.category as string || "";
  const games = await getGames(skip, category);
  const count = await countGames();
  
  return (
    <GoalList games={games} totalGames={count} />
  );
}
