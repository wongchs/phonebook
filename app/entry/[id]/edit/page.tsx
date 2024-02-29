import { editEntry, getEntry } from "@/app/actions/entry";
import EditForm from "@/components/edit-form";

async function Page({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);
  if (!entry) {
    return <h1>loading</h1>;
  }
  const editEntryWithId = editEntry.bind(null, entry.id);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Edit Entry</h1>
        <EditForm entry={entry} editEntryWithId={editEntryWithId} />
      </div>
    </div>
  );
}

export default Page;
