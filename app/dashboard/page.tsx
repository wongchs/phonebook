import { EntryList } from "@/components/EntryList";
import Header from "@/components/Header";
import { auth } from "@/auth";
import { getEntries } from "../actions/entry";

export default async function Dashboard() {
  const session = await auth();
  const userEmail = session?.user?.email || "";
  const entries = await getEntries(userEmail);

  console.log(session);
  console.log(entries);

  const groupedEntries: { [key: string]: any[] } = entries.reduce(
    (groups: { [key: string]: any[] }, entry) => {
      const letter = entry.name[0].toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(entry);
      return groups;
    },
    {}
  );

  return (
    <>
      <Header />
      <div className="px-8">
        {Object.entries(groupedEntries).map(([letter, entries]) => (
          <div key={letter}>
            <h2>{letter}</h2>
            <ul>
              {entries.map((entry) => (
                <EntryList key={entry.id} {...entry} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
