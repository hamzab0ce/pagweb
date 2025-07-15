"use server"

import { prisma } from "@/lib/prisma"

export async function getSimilarGames(gameId: number) {
  const game = await prisma.games.findUnique({
    where: { id: gameId },
    include: { games_genres: true },
  });
  if (!game) {
    return [];
  }
  const similarGames = await prisma.games.findMany({
    where: {
      id: { not: gameId }, // evitar incluir el juego actual
      games_genres: {
        some: {
          genre_id: { in: game.games_genres.map((g) => g.genre_id) },
        },
      },
    },
    include: { games_genres: true },
  });
  return similarGames;
}