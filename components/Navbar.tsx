import Link from "next/link";

function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-2">
      <h1 className="text-2xl">Entries</h1>
      <Link href="/new">New</Link>
    </header>
  );
}

export default Navbar;
