"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { createEntry } from "../actions/entry";

export default function Page() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  console.log(userEmail);

  return (
    <>
      <header className="px-8 py-2">
        <h1 className="text-2xl">New Entry</h1>
      </header>
      <div className="flex justify-center items-center">
        <form
          action={createEntry}
          className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md"
        >
          <input type="hidden" name="userEmail" value={userEmail || ""} />
          <label className="flex flex-col gap-1">
            <span>Name</span>
            <input
              type="text"
              name="name"
              className="p-2 border border-gray-300 rounded-md"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>Phone Number</span>
            <input
              type="text"
              name="phoneNo"
              className="p-2 border border-gray-300 rounded-md"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>Email</span>
            <input
              type="text"
              name="email"
              className="p-2 border border-gray-300 rounded-md"
            />
          </label>
          <div className="flex gap-2 justify-end">
            <Link
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              href=".."
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
