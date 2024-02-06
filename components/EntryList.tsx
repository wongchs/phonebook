"use client";

type EntryProps = {
  id: string;
  name: string;
  phoneNo: string;
  email: string;
};

export function EntryList({ id, name, phoneNo, email }: EntryProps) {
  return (
    <div key={id} className="entry">
      <h2>{name}</h2>
      <p>Phone Number: {phoneNo}</p>
      <p>Email: {email}</p>
    </div>
  );
}
