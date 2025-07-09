"use server"

import { prisma } from "@/lib/prisma";

export async function addView(gameId: number) {
  try {
    const updatedGame = await prisma.games.update({
      where: { id: gameId },
      data: {
        views: {
          increment: 1,
        },
      },
    });
    return updatedGame;
  } catch (error) {
    console.error("Error updating game views:", error);
    throw new Error("Failed to update game views");
  }
  
}