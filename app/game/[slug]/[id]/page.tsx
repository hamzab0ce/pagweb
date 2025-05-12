import { getGameByID } from "@/app/actions/getGameByID";
import GameTemplate from "@/components/GameInfoTemplate";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const game = await getGameByID(Number(id));
  return (
    <>
      {game && (
        <div className="m-20 border border-zinc-800">
          <GameTemplate game={game} />
        </div>
      )}
      {!game && (
        <div className="my-40 text-center">
          <h1 className="font-black text-3xl">Juego no encontrado</h1>
          <Link className="text-blue-500 underline" href="/">
            Volver al inicio
          </Link>
        </div>
      )}
    </>
  );
}
