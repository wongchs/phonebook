import { deleteEntry, getEntry } from "@/app/actions/entry";

async function DeleteEntryPage({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);

  if (!entry) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <h1>Delete Entry?</h1>
      <form action={deleteEntry}>
        <input type="hidden" name="id" value={entry.id} />
        <button className="bg-red-700 p-2 rounded">Delete</button>
      </form>
    </div>
  );
}

export default DeleteEntryPage;
