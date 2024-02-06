import Link from "next/link";
import { prisma } from "./db";
import { EntryList } from "@/components/EntryList";
import { JSX } from "react";

function getEntries() {
  return prisma.entry.findMany();
}

export default async function Home() {
  const entries = await getEntries();

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Entries</h1>
        <Link href="/new">New</Link>
      </header>
      <ul className="pl-4">
        {entries.map(
          (
            entry: JSX.IntrinsicAttributes & {
              id: string;
              name: string;
              phoneNo: string;
              email: string;
            }
          ) => (
            <Link key={entry.id} href={`/entry/${entry.id}`}>
              <EntryList {...entry} />
            </Link>
          )
        )}
      </ul>
    </>
  );
}
