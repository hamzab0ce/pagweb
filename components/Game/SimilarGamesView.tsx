import { getSimilarGames } from "@/app/actions/getSimilarGames";
import { Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function SimilarGamesView({ gameId }: { gameId: number }) {
  const SimilarGames = await getSimilarGames(gameId);
  if (!SimilarGames) {
    return <div>No similar games found.</div>;
  }

  const renderSimilarGames = SimilarGames.map(({ title, cover_url, id }, index) => {
    const slug = title.toLowerCase().replace(" ", "-");
    return (
      <Link key={index} href={`/game/${slug}-descargar-gratis/${id}`}>
        <Image
          key={index}
          width={200}
          height={256}
          alt="Most Visited Games"
          src={cover_url}
          className="h-64 object-cover overflow-hidden rounded-2xl"
        />
      </Link>
    );
  });
  return (
    <div className="p-3 rounded-lg flex-1 w-full bg-zinc-900 border border-zinc-800">
      <div className="flex">
        <Tag className="w-6 h-6 mr-2 text-amber-500" />
        <h2 className="font-semibold">Similar Games</h2>
      </div>
      {renderSimilarGames.length > 0 ? (
        <ul className="flex flex-col mt-5 flex-wrap w-full gap-y-3">
          {renderSimilarGames}
        </ul>
      ) : (
        <p className="text-zinc-500">No similar games found.</p>
      )}
    </div>
  );
}