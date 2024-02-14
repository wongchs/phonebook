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

  const entry = await prisma.entry.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json(entry);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  if (!id) {
    return NextResponse.error();
  }

  const { name, phoneNo, email } = await request.json();
  const updatedEntry = await prisma.entry.update({
    where: { id },
    data: { name, phoneNo, email },
  });

  return NextResponse.json(updatedEntry);
}
