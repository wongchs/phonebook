import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
import { deleteEntry, getEntry } from "@/app/actions/entry";

async function Entry({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);

  return entry ? (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">{entry.name}</h1>
        <p className="text-gray-600 mb-2">Phone Number: {entry.phoneNo}</p>
        <p className="text-gray-600 mb-4">Email: {entry.email}</p>
        <div className="flex gap-2 justify-end">
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            href={`/entry/${entry.id}/edit`}
          >
            Edit
          </Link>
          <DeleteButton id={entry.id} />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Entry;
