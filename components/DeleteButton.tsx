import { deleteEntry } from "@/app/actions/entry";

function DeleteButton({ id }: { id: string }) {
  return (
    <form action={deleteEntry(id)}>
      <input type="hidden" name="id" value={id} />
      <button type="submit">Delete</button>
    </form>
  );
}

export default DeleteButton;
