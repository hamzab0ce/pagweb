import { addView } from "@/app/actions/AddView";
import { getGameByID } from "@/app/actions/getGameByID";
import DownloadLinkSection from "@/components/Game/DownLoadLinkSection";
import GameDetailsView from "@/components/Game/GameDetailsView";
import PossiblePasswordsViewer from "@/components/Game/possiblePasswordsViewer";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<Metadata> {
  const { id } = await params;
  const game = await getGameByID(Number(id));
  return {
    metadataBase: new URL("https://g4meshub.vercel.app/"),
    title: game?.title || "Juego no encontrado",
    icons: "/favicon.ico",
    openGraph: {
      title: game?.title || "Juego no encontrado",
      description:
        "Pagina oficial de Games Hub, descarga tus juegos favoritos gratis.",
      siteName: "Games Hub",
      locale: "es-ES",
      type: "website",
      images: "/favicon.ico",
    },
  };
}

export function GameNotFound() {
  return (
    <div className="my-40 text-center">
      <h1 className="font-black text-3xl">Juego no encontrado</h1>
      <Link className="text-blue-500 underline" href="/">
        Volver al inicio
      </Link>
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const game = await getGameByID(Number(id));
  if (game) {
    await addView(game.id);
  }
  return (
    <>
      {game !== null ? (
        <div className="flex flex-col items-stretch md:flex-row md:items-start gap-2 my-10">
          <GameDetailsView game={game} />
          <div className="flex flex-col flex-1 gap-2">
            <DownloadLinkSection links={game.links_descarga} />
            <PossiblePasswordsViewer />
          </div>
        </div>
      ) : (
        <GameNotFound />
      )}
    </>
  );
}
