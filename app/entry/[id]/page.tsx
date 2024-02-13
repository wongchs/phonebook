// "use client";
// import { useEffect, useState } from "react";

async function getEntry(id: string) {
  console.log(id)
  const res = await fetch(`http://localhost:3000/api/entry/${id}`);
  const data = await res.json();
  return data;
}

async function Entry({ params }: { params: { id: string } }) {
  // const [entry, setEntry] = useState(null);
  // const [showDialog, setShowDialog] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phoneNo: "",
  //   email: "",
  // });

  // useEffect(() => {
  //   async function fetchEntry() {
  //     const response = await fetch(`/api/entry/${params.id}`);
  //     const data = await response.json();
  //     setEntry(data);
  //   }

  //   fetchEntry();
  // }, [params.id]);

  // const handleUpdate = async () => {
  //   const response = await fetch(`/api/entry/${params.id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData),
  //   });
  //   if (response.ok) {
  //     const updatedEntry = await response.json();
  //     setEntry(updatedEntry);
  //     setShowDialog(false);
  //   } else {
  //     console.log("error")
  //   }
  // };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const entry = await getEntry(params.id);
  console.log(entry)
  console.log(entry.id)
  console.log(entry.name)

  return entry ? (
    <div>
      <p>{entry.id}</p>
      <p>{entry.name}</p>
      <p>{entry.phoneNo}</p>
      <p>{entry.email}</p>
      {/* <button onClick={() => setShowDialog(true)}>Update</button>
      {showDialog && (
        <div>
          <label>
            Name:
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleUpdate}>Submit</button>
          <button onClick={() => setShowDialog(false)}>Cancel</button>
        </div>
      )} */}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Entry;
