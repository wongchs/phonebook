async function getEntry(id: string) {
  console.log(id);
  const res = await fetch(`http://localhost:3000/api/entry/${id}`);
  const data = await res.json();
  return data;
}

async function Entry({ params }: { params: { id: string } }) {
  const entry = await getEntry(params.id);
  console.log(entry);
  console.log(entry.id);
  console.log(entry.name);

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
