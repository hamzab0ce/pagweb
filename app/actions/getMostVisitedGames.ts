"use server"

import { prisma } from "@/lib/prisma"

export async function getMostVisitedGames() {
  const games = await prisma.games.findMany({
    orderBy: {
      views: "desc",
    },
    take: 5,
  });
  return games;
}