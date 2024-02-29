"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EditForm = ({ entry, editEntryWithId }: { entry: any, editEntryWithId: any }) => {
  return (
    <form action={editEntryWithId} className="flex gap-2 flex-col space-y-3">
      <input type="hidden" name="id" value={entry.id} />
      <label className="flex flex-col gap-1">
        <span>Name</span>
        <input
          type="text"
          name="name"
          placeholder={entry.name}
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span>Phone Number</span>
        <input
          type="text"
          name="phoneNo"
          placeholder={entry.phoneNo}
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span>Email</span>
        <input
          type="text"
          name="email"
          placeholder={entry.email}
          className="border p-2 rounded"
        />
      </label>
      <div className="flex gap-2 justify-end mt-4">
        <Link
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          href={`/entry/${entry.id}`}
        >
          Cancel
        </Link>
        <Button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update
        </Button>
      </div>
    </form>
  );
};
export default EditForm;
