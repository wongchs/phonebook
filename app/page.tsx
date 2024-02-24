import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-2">
      <h1 className="text-2xl">RetardBook</h1>
      <p>Login before viewing your contacts.</p>
      <Link
        className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        href="/login"
      >
        Login
      </Link>
    </div>
  );
}
