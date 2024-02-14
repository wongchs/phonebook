import Link from "next/link";
import { prisma } from "@/app/db";

async function getEntry(id: string) {
  return prisma.entry.findUnique({ where: { id } });
}

async function Entry({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);
  console.log(entry);
  if (entry) {
    console.log(entry.id);
    console.log(entry.name);
  }

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
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Entry;
