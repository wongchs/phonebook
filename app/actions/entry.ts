import { prisma } from "@/app/db";
import { redirect } from "next/navigation";

export async function deleteEntry(data: FormData) {
  "use server";
  const id = data.get("id")?.valueOf();
  if (typeof id !== "string" || id.length === 0) {
    throw new Error("invalid id");
  }
  await prisma.entry.delete({ where: { id } });
  redirect("/");
}

export async function getEntry(id: string) {
  return prisma.entry.findUnique({ where: { id } });
}
