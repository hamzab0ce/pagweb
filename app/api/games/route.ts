import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createGameSchema } from "@/lib/validators/game";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const rawGenres = formData.get("genres") as string;
    const genres = rawGenres.split(",").map((genre) => genre.trim());

    const rawData = {
      ...Object.fromEntries(formData),
      genres,
      download_links: JSON.parse(formData.get("download_links") as string),
    };

    const parsed = createGameSchema.safeParse(rawData);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors, data: null },
        { status: 400 }
      );
    }

    const {
      title,
      version,
      cover_url,
      password,
      serial,
      requeriments,
      game_size,
      platform,
      language,
      download_links,
    } = parsed.data;

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
          createMany: { data: download_links },
        },
        games_genres: {
          createMany: {
            data: genres.map((genre) => ({ genre })),
          },
        },
      },
      include: {
        games_genres: true,
        links_descarga: true,
      },
    });

    return NextResponse.json({ error: null, data: game });
  } catch (e : any) {
    console.error("ERROR en createGame:", e);
    return NextResponse.json(
      { error: [e.message || "Error interno del servidor"], data: null },
      { status: 500 }
    );
  }
}
