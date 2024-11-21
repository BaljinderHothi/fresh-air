import Link from "next/link";

export default function Navbar() {
  return (
    <aside className="w-1/5 bg-gray-100 dark:bg-gray-800 p-4 min-h-screen shadow-md">
      <nav className="flex flex-col gap-4 text-sm">
        <Link href="/" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <span>⭐</span> Main Page
        </Link>
        <Link href="/Lungs" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <span>⭐</span> Lungs
        </Link>
        <Link href="/Pneumonia" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <span>⭐</span> Pneumonia
        </Link>
        <Link href="/Model" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <span>⭐</span> CV Model
        </Link>
        <Link href="/Quiz" className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <span>⭐</span> Quiz
        </Link>
      </nav>
    </aside>
  );
}
