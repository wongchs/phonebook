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
