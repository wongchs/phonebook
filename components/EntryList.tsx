import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { Button } from "./ui/button";

type EntryProps = {
  id: string;
  name: string;
  phoneNo: string;
  email: string;
};

export async function EntryList({ id, name, phoneNo, email }: EntryProps) {
  return (
    <li
      key={id}
      className="border rounded-lg p-4 mb-2 bg-white shadow flex justify-between items-center"
    >
      <div className="flex justify-between flex-col">
        <Link
          className="text-lg font-medium text-blue-600 hover:text-blue-800"
          href={`/entry/${id}`}
        >
          {name}
        </Link>
        <p className="text-gray-600">Phone Number: {phoneNo}</p>
        <p className="text-gray-600">Email: {email}</p>
      </div>
      <div className="flex gap-2 items-center px-4">
        <Link href={`/entry/${id}/edit`}>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </Button>
        </Link>
        <DeleteButton id={id} />
      </div>
    </li>
  );
}
