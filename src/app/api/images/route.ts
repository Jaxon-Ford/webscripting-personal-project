import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.PEXELS_KEY as string;

  const fetchImages = async (query: string) => {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=6`,
      {
        headers: {
          Authorization: key,
        },
      }
    );

    return res.json();
  };

  const [walls, floors, ceilings] = await Promise.all([
    fetchImages("room wall"),
    fetchImages("room floor designs"),
    fetchImages("room ceiling"),
  ]);

  return NextResponse.json({
    walls: walls.photos,
    floors: floors.photos,
    ceilings: ceilings.photos,
  });
}