import Link from "next/link";
import { prisma } from "./db";
import { EntryList } from "@/components/EntryList";
import { JSX } from "react";

function getEntries() {
  return prisma.entry.findMany();
}

export default async function Home() {
  const entries = await getEntries();

  console.log(entries);

  return (
    <>
      <header className="flex justify-between items-center px-8 py-2">
        <h1 className="text-2xl">Entries</h1>
        <Link href="/new">New</Link>
      </header>
      <ul className="px-8">
        {entries.map(
          (
            entry: JSX.IntrinsicAttributes & {
              id: string;
              name: string;
              phoneNo: string;
              email: string;
            }
          ) => (
            <EntryList {...entry} />
          )
        )}
      </ul>
    </>
  );
}
