import { db } from "@/app/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getEntry } from "@/app/actions/entry";

async function EditEntry(data: FormData) {
  "use server";

  const id = data.get("id")?.valueOf();
  const name = data.get("name")?.valueOf();
  const phoneNo = data.get("phoneNo")?.valueOf();
  const email = data.get("email")?.valueOf();

  if (typeof id !== "string" || id.length === 0) {
    throw new Error("invalid id");
  }
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("invalid name");
  }
  if (typeof phoneNo !== "string" || phoneNo.length === 0) {
    throw new Error("invalid phoneNo");
  }
  if (typeof email !== "string" || email.length === 0) {
    throw new Error("invalid email");
  }

  await db.entry.update({
    where: { id },
    data: { name, phoneNo, email },
  });

  redirect("/");
}

async function Page({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);

  if (!entry) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <h1>Edit Entry</h1>
      <form action={EditEntry} className="flex gap-2 flex-col">
        <input type="hidden" name="id" value={entry.id} />
        <label>
          Name
          <input type="text" name="name" placeholder={entry.name} />
        </label>
        <label>
          Phone Number
          <input type="text" name="phoneNo" placeholder={entry.phoneNo} />
        </label>
        <label>
          Email
          <input type="text" name="email" placeholder={entry.email} />
        </label>
        <div className="flex gap-1 justify-end">
          <Link href={`/entry/${entry.id}`}>Cancel</Link>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default Page;
