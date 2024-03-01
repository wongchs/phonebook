import { EntryList } from "@/components/EntryList";
import Header from "@/components/Header";
import { auth } from "@/auth";
import { getEntries } from "../actions/entry";
import { Button } from "@/components/ui/button";

export default async function Dashboard() {
  const session = await auth();
  const userEmail = session?.user?.email || "";
  const entries = await getEntries(userEmail);

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
      <div className="px-8 py-4">
        {Object.keys(groupedEntries).length > 0 ? (
          Object.entries(groupedEntries).map(([letter, entries]) => (
            <div key={letter} className="mb-4">
              <h2 className="text-2xl font-bold mb-2">{letter}</h2>
              <ul>
                {entries.map((entry) => (
                  <EntryList key={entry.id} {...entry} />
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center mt-8 flex-col gap-6">
            <h1 className="text-2xl font-bold">You Do Not Have Any Contacts.</h1>
            <Button className="px-4 py-6 rounded-md animate-bounce bg-sky-600 hover:bg-sky-800">Create New Contact</Button>
          </div>
        )}
      </div>
    </>
  );
}
