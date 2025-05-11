"use server"
import { prisma } from "@/lib/prisma";
import { createGameSchema } from "@/lib/validators/game";
import { links_descarga } from "../generated/prisma";

export default async function createGame(formData: FormData) {
  const rawGenres = formData.get("genres") as string;
  const genres = rawGenres.split(",").map((genre) => genre.trim()); 
  const rawData = {
    ...Object.fromEntries(formData),
    genres: genres,
    download_links: JSON.parse(formData.get("download_links") as string) as links_descarga[],
  }
  const parsedData = createGameSchema.safeParse(rawData);
  if (!parsedData.success) {
    return { error: parsedData.error.flatten().fieldErrors, data: null };
  };
  
  const { title, cover_url, password, game_size, download_links, platform, language, requeriments, version, serial } = parsedData.data;
  try {
    const game = await prisma.games.create({ 
      data: {
        title,
        version,
        cover_url,
        password,
        serial,
        requeriments,
        game_size,
        platform,
        language,
        links_descarga: {
          createMany: {
            data: download_links
          }
        },
        games_genres: {
          createMany: {
            data: genres.map((genre) => ({ genre }))
          }
        }
      },
      include: {
        games_genres: true,
        links_descarga: true
      }
    });

    return { 
      error: null,
      data: game
    }
  } catch {
    return { 
      error: "Database error",
      data: null
    }
  }
}