"use client";
import { useEffect, useState } from "react";

function Entry({ params }: { params: { id: string } }) {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    async function fetchEntry() {
      const response = await fetch(`/api/entry/${params.id}`);
      const data = await response.json();
      setEntry(data);
    }

    fetchEntry();
  }, [params.id]);

  return entry ? (
    <div>
      <p>{entry.id}</p>
      <p>{entry.name}</p>
      <p>{entry.phoneNo}</p>
      <p>{entry.email}</p>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Entry;
