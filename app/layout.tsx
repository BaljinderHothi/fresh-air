import { ReactNode } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Side Navigation Bar */}
      <aside className="w-1/5 bg-gray-100 dark:bg-gray-900 p-4 text-sm">
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span>⭐</span> Lungs
          </Link>
          <Link
            href="/pneumonia"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span>⭐</span> Pneumonia
          </Link>
          <Link
            href="/lung-health"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span>⭐</span> Lung Health
          </Link>
          <Link
            href="/cv-model"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span>⭐</span> CV Model
          </Link>
          <Link
            href="/quiz"
            className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <span>⭐</span> Quiz
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}
