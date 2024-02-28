"use client";

import { deleteEntry } from "@/app/actions/entry";
import { useToast } from "./ui/use-toast";

function DeleteButton({ id }: { id: string }) {
  const deleteEntryWithId = deleteEntry.bind(null, id);
  const { toast } = useToast();

  const handleDelete = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await deleteEntryWithId();
      toast({
        title: "Success",
        description: "Entry deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete entry",
      });
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <button type="submit" className="bg-red-600 p-2 rounded">
        Delete
      </button>
    </form>
  );
}

export default DeleteButton;
