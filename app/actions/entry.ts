"use server";
import { db } from "@/app/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function deleteEntry(id: string) {
  console.log(id);
  await db.entry.delete({ where: { id } });
  revalidatePath("/");
  redirect("/");
}

export async function getEntry(id: string) {
  return db.entry.findUnique({ where: { id } });
}
