import { z } from "zod";

export const createGameSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  cover_url: z.string().url().min(1, { message: "Cover is required" }),
  genres: z.array(z.string()),
  download_links: z.array(z.object({ link: z.string().url(), provider: z.string() })),
  password: z.string().optional(),
  game_size: z.string().min(1, { message: "Game size is required" }),
  platform: z.string().min(1, { message: "Platform is required" }),
  version: z.string().optional(),
  requeriments: z.string().min(1, { message: "Requeriments is required" }),
  serial: z.string().optional(),
  language: z.string().min(1, { message: "Language is required" })
});