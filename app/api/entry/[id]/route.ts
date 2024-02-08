import { prisma } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (!id) {
    return NextResponse.error();
  }

  const post = await prisma.entry.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json(post);
}
