import Link from "next/link";
import { db } from "../db";
import { EntryList } from "@/components/EntryList";
import { JSX } from "react";
import Header from "@/components/Header";

function getEntries() {
  return db.entry.findMany();
}

export default async function Dashboard() {
  const entries = await getEntries();

  console.log(entries);

  return (
    <>
      <Header />
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
