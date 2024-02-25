"use server";
import { db } from "@/app/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function deleteEntry(id: string) {
  console.log(id);
  await db.entry.delete({ where: { id } });
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function getEntries(userEmail: string) {
  return db.entry.findMany({
    where: {
      userId: userEmail,
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function getEntry(id: string) {
  return db.entry.findUnique({ where: { id } });
}

export async function createEntry(data: FormData) {
  const name = data.get("name")?.valueOf();
  const phoneNo = data.get("phoneNo")?.valueOf();
  const email = data.get("email")?.valueOf();
  const userEmail = data.get("userEmail")?.valueOf();

  if (typeof name !== "string" || name.length === 0) {
    throw new Error("invalid name");
  }
  if (typeof phoneNo !== "string" || phoneNo.length === 0) {
    throw new Error("invalid phoneNo");
  }
  if (typeof email !== "string" || email.length === 0) {
    throw new Error("invalid email");
  }
  if (typeof userEmail !== "string" || userEmail.length === 0) {
    throw new Error("invalid userEmail ");
  }

  await db.entry.create({
    data: {
      name,
      phoneNo,
      email,
      User: {
        connect: {
          email: userEmail,
        },
      },
    },
  });
  revalidatePath("/dashboard");
  redirect("/dashboard");
}
