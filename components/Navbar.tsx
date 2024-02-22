import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import UserAccountNav from "./UserAccountNav";

async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex justify-between items-center px-8 py-2">
      <h1 className="text-2xl">Entries</h1>
      <div>
        {session?.user ? (
          <div className="flex justify-center items-center gap-4">
            <Link href="/new">New</Link>
            <UserAccountNav />
          </div>
        ) : (
          <Link href="/sign-in">Sign in</Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
