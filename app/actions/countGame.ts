"use server"
import { prisma } from "@/lib/prisma";

export async function countGames() {
  const count = await prisma.games.count();
  return count;
}