import { getGameByID } from "@/app/actions/getGameByID";
import GameTemplate from "@/components/GameInfoTemplate";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params } : {
  params: Promise<{ id: number }>
}) : Promise<Metadata> {
  const { id } = await params;
  const game = await getGameByID(Number(id));
  return {
    title: game?.title || "Juego no encontrado",
    icons: game?.cover_url || "/favicon.ico",
    openGraph: {
      title: game?.title || "Juego no encontrado",
      description: "Pagina oficial de Wave Repacks, descarga tus juegos favoritos gratis.",
      siteName: "Wave Repacks",
      locale: "es-ES",
      type: "website",    
      images: game?.cover_url || "/favicon.ico",
    }
  };
}

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
