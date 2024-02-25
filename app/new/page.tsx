"use client"

import Link from "next/link";
import { useSession } from "next-auth/react";
import { createEntry } from "../actions/entry";

export default function Page() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  console.log(userEmail)

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New Entry</h1>
      </header>
      <form action={createEntry} className="flex gap-2 flex-col">
        <input type="hidden" name="userEmail" value={userEmail || ''} />
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
