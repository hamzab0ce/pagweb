import { games_genres } from "@/app/generated/prisma";

export default function GenreBadge({ genres }: { genres: games_genres[] }) {
  return (
    <ul className="flex mb-4 gap-2">
      {genres.map((genre) => (  
        <span key={genre.genre_id} className="px-2 py-1 border border-zinc-800 text-xs font-semibold text-zinc-400 bg-zinc-950 rounded-lg">{genre.genre}</span>
      ))}
    </ul>
  );
}