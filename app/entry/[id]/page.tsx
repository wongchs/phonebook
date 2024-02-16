import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
import { deleteEntry, getEntry } from "@/app/actions/entry";

async function Entry({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);
  console.log(entry);

  return entry ? (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex gap-4">
        <p>Name:</p>
        <p>{entry.name}</p>
      </div>
      <div className="flex gap-4">
        <p>Phone Number:</p>
        <p>{entry.phoneNo}</p>
      </div>
      <div className="flex gap-4">
        <p>Email:</p>
        <p>{entry.email}</p>
      </div>
      <Link href={`/entry/${entry.id}/edit`}>Edit</Link>

      <DeleteButton id={entry.id} />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Entry;
