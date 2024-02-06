
export default function Entry({ params }: { params: { id: string, name: string, phoneNo: string, email: string } }) {
  return (
    <div>
        <p>{params.id}</p>
        <p>{params.name}</p>
        <p>{params.phoneNo}</p>
        <p>{params.email}</p>
    </div>
  );
}
