import { prisma } from "@/app/db";
import { redirect } from "next/navigation";

export async function deleteEntry(id: string) {
  await prisma.entry.delete({ where: { id } });
  redirect("/");
}

export async function getEntry(id: string) {
  return prisma.entry.findUnique({ where: { id } });
}
