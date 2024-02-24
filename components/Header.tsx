"use client";

import { logout } from "@/app/actions/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="flex justify-between items-center px-8 py-2">
      <h1 className="text-2xl">Entries</h1>
      <p>
        Signed in as&nbsp;
        {status === "authenticated" ? session?.user?.name : "..."}
      </p>
      <Link href="/new">New</Link>
      <form action={logout}>
        <button
          disabled={status === "loading" ? true : false}
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 disabled:bg-slate-50 disabled:text-slate-500"
        >
          Sign Out {status === "loading" ? "..." : ""}
        </button>
      </form>
    </header>
  );
};

export default Header;
