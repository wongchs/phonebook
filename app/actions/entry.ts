import { prisma } from "@/app/db";
import { redirect } from "next/navigation";

export async function deleteEntry(id: string) {
  await prisma.entry.delete({ where: { id } });
  redirect("/");
}
