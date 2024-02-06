import { prisma } from "@/app/db";

function getEntry(id: string) {
  return prisma.entry.findUnique({ where: { id } });
}

export default async function Entry({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);

  return (
    <div>
        <p>{entry.id}</p>
        <p>{entry.name}</p>
        <p>{entry.phoneNo}</p>
        <p>{entry.email}</p>
    </div>
  );
}
