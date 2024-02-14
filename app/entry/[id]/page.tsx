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
    <div>
      <p>{entry.id}</p>
      <p>{entry.name}</p>
      <p>{entry.phoneNo}</p>
      <p>{entry.email}</p>
      <Link href={`/entry/${entry.id}/edit`}>Edit</Link>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Entry;
