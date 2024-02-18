import { deleteEntry } from "@/app/actions/entry";

function DeleteButton({ id }: { id: string }) {
  const deleteEntryWithId = deleteEntry.bind(null, id);
  // console.log(id);
  // console.log(deleteEntryWithId);

  return (
    <form action={deleteEntryWithId}>
      <button className="bg-red-600 p-2 rounded">Delete</button>
    </form>
  );
}

export default DeleteButton;
