import { prisma } from "@/lib/prisma";
import { createGameSchema } from "@/lib/validators/game";
import { NextRequest, NextResponse } from "next/server";

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

    const { title, cover_url, download_links, requeriments, description, platform } = parsed.data;

    await prisma.games.create({
      data: {
        platform,
        title,
        requeriments,
        cover_url,
        content: description,
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

    return NextResponse.json({ error: null });
  } catch (e: unknown) {
    const message =
      e instanceof Error ? e.message : "Error interno del servidor";
    return NextResponse.json({ error: [message], data: null }, { status: 500 });
  }
}
