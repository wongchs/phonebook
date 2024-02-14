"use client";

type EntryProps = {
  id: string;
  name: string;
  phoneNo: string;
  email: string;
};

export function EntryList({ id, name, phoneNo, email }: EntryProps) {
  return (
    <div key={id} className="px-2 border-solid border-2 border-zinc-900">
      <h2>{name}</h2>
      <p>Phone Number: {phoneNo}</p>
      <p>Email: {email}</p>
    </div>
  );
}
