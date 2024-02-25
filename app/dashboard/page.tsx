import { EntryList } from "@/components/EntryList";
import { JSX } from "react";
import Header from "@/components/Header";
import { auth } from "@/auth";
import { getEntries } from "../actions/entry";

export default async function Dashboard() {
  const session = await auth();
  const userEmail = session?.user?.email || "";
  const entries = await getEntries(userEmail);

  console.log(session);

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
