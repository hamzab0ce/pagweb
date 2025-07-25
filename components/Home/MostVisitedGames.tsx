import { getMostVisitedGames } from "@/app/actions/getMostVisitedGames";
import Image from "next/image";
import Link from "next/link";

export default async function MostVisitedGames() {
  const MostVisitedGames = await getMostVisitedGames();
  return (
    <div className="w-full min-h-64 bg-surface/10 px-10 py-5 rounded-2xl border border-border mb-5">
      <div className="text-center pb-5">
        <h2 className="text-lg font-semibold">
          Los juegos mas <span className="text-amber-400">Visitados</span>
        </h2>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row gap-2">
        {MostVisitedGames.map(({ cover_url, title, id }, index) => {
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
        })}
      </div>
    </div>
  );
}
