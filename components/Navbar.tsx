import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import UserAccountNav from "./UserAccountNav";

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex justify-between items-center px-8 py-2">
      <h1 className="text-2xl">Entries</h1>
      {session?.user ? (
        <UserAccountNav />
      ) : (
        <Link href="/sign-in">Sign in</Link>
      )}
      <Link href="/new">New</Link>
    </header>
  );
}

export default Navbar;
