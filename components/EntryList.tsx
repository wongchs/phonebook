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
    <li key={id} className="border rounded-lg p-4 mb-2 bg-white shadow">
      <Link
        className="text-lg font-medium text-blue-600 hover:text-blue-800"
        href={`/entry/${id}`}
      >
        {name}
      </Link>
      <p className="text-gray-600">Phone Number: {phoneNo}</p>
      <p className="text-gray-600">Email: {email}</p>
      <DeleteButton id={id} />
    </li>
  );
}
