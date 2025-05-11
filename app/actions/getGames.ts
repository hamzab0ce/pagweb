"use server"

import { ITEMS_PER_PAGE } from "@/const/itemPerPage";
import { prisma } from "@/lib/prisma";

export async function getGames(skip?: number, category?: string) {
  const games_links = await prisma.games.findMany({
    skip: ((skip || 1) - 1) * ITEMS_PER_PAGE,
    take: ITEMS_PER_PAGE,
    where: {
      requeriments: category ? { contains: category } : undefined
    },
    include: {
      links_descarga: true,
      games_genres: true
    },
  });  
  
  return games_links
}

export type GamesWithLinks = Awaited<ReturnType<typeof getGames>>[number]