"use client";

import { logout } from "@/app/actions/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <header className="bg-slate-50 dark:bg-gray-800 shadow-md px-4 py-2 flex justify-between items-center">
      <h1 className="text-2xl">Entries</h1>
      <div className="flex flex-row items-center gap-2">
        <Link href="/new">
          <Button
            variant="secondary"
            className="h-[48px] rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            New
          </Button>
        </Link>
        <form action={logout}>
          <button
            disabled={status === "loading" ? true : false}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 disabled:bg-slate-50 disabled:text-slate-500"
          >
            Sign Out {status === "loading" ? "..." : ""}
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
