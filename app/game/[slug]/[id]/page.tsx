import { addView } from "@/app/actions/AddView";
import { getGameByID } from "@/app/actions/getGameByID";
import DownloadLinkSection from "@/components/Game/DownLoadLinkSection";
import GameDetailsView from "@/components/Game/GameDetailsView";
import GameNotFound from "@/components/Game/GameNotFound";
import PossiblePasswordsViewer from "@/components/Game/possiblePasswordsViewer";
import SimilarGamesView from "@/components/Game/SimilarGamesView";
import { Metadata } from "next";

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
            <SimilarGamesView gameId={game.id} />
          </div>
        </div>
      ) : (
        <GameNotFound />
      )}
    </>
  );
}
