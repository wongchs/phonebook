import Link from "next/link";
import DeleteButton from "./DeleteButton";

type EntryProps = {
  id: string;
  name: string;
  phoneNo: string;
  email: string;
};

export async function EntryList({ id, name, phoneNo, email }: EntryProps) {
  return (
    <div key={id} className="px-2 border-solid border-2 border-zinc-900">
      <Link href={`/entry/${id}`}>
        <h2>{name}</h2>
      </Link>
      <p>Phone Number: {phoneNo}</p>
      <p>Email: {email}</p>
      <DeleteButton id={id} />
    </div>
  );
}
