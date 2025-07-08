"use client";
import type { GamesWithLinks } from "@/app/actions/getGames";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import DownloadLinkList from "./DownLoadLinkList";
import GenreBadge from "./GenreBadge";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft } from "lucide-react";

export default function GameTemplate({ game }: { game: GamesWithLinks }) {
  const router = useRouter();
  const handleCloseModal = () => {
    router.back();
  };

  return (
    <motion.div
      className="rounded-lg border border-zinc-800 w-full shadow-lg relative flex flex-col bg-zinc-900 outline-none focus:outline-none"
    >
      <div className="flex items-center p-5 border-b border-solid border-zinc-800 rounded-t">
        <button
          className="p-1 ml-auto cursor-pointer bg-transparent border-0 text-zinc-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={handleCloseModal}
        >
          <ChevronLeft className="w-6 font-bold h-6" />
        </button>
        <h3 className="text-3xl w-full font-semibold text-zinc-100">
          {game.title}
        </h3>
      </div>
      <div className="p-5 flex-auto">
        <GenreBadge genres={game.games_genres} />
        <div className="flex gap-5">
          <div className="flex relative flex-col">
            <Image
              width={200}
              height={100}
              priority
              src={game.cover_url}
              alt={game.title}
              className=""
            />
          </div>
          <div className="prose prose-invert">
            <Markdown
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              remarkPlugins={[remarkGfm]}
            >
              {game.content}
            </Markdown>
            <div className="flex w-full">
              <DownloadLinkList links={game.links_descarga} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
