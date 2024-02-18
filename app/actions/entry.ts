"use server";
import { prisma } from "@/app/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function deleteEntry(id: string) {
  console.log(id);
  await prisma.entry.delete({ where: { id } });
  revalidatePath("/");
  redirect("/");
}

export async function getEntry(id: string) {
  return prisma.entry.findUnique({ where: { id } });
}
