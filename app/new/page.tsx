import { db } from "../db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createEntry(data: FormData) {
  "use server";

  const name = data.get("name")?.valueOf();
  const phoneNo = data.get("phoneNo")?.valueOf();
  const email = data.get("email")?.valueOf();

  if (typeof name !== "string" || name.length === 0) {
    throw new Error("invalid name");
  }
  if (typeof phoneNo !== "string" || phoneNo.length === 0) {
    throw new Error("invalid phoneNo");
  }
  if (typeof email !== "string" || email.length === 0) {
    throw new Error("invalid email");
  }

  await db.entry.create({ data: { name, phoneNo, email } });
  redirect("/");
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New Entry</h1>
      </header>
      <form action={createEntry} className="flex gap-2 flex-col">
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Phone Number
          <input type="text" name="phoneNo" />
        </label>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <div className="flex gap-1 justify-end">
          <Link href="..">Cancel</Link>
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
}
