"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          Dashboard
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/add-user"
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                Add User
              </Link>
            </li>
            <li>
              <a
                href="#room"
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                Room
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p>Select an option from the sidebar to get started.</p>
      </main>
    </div>
  );
}
