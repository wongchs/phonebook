"use client"
import { deleteEntry } from "@/app/actions/entry";

function DeleteButton({ id }: { id: string }) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await deleteEntry(id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      <button className="bg-red-300 p-2 rounded" type="submit">Delete</button>
    </form>
  );
}

export default DeleteButton;
