"use server"

import { prisma } from "@/lib/prisma";

export async function getGameByID(id: number) {
  const game = await prisma.games.findUnique({
    where: {
      id: id
    },
    include: {
      links_descarga: true,
      games_genres: true
    }
  });
  return game;
}