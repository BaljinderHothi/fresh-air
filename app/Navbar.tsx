import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-100 shadow">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <div className="text-lg font-semibold">
          <Link href="/" className="text-gray-900 hover:text-gray-600">
            Fresh Air
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Lungs" className="text-gray-600 hover:text-gray-900">
              Lungs
            </Link>
          </li>
          <li>
            <Link href="/Pneumonia" className="text-gray-600 hover:text-gray-900">
              Pneumonia
            </Link>
          </li>
          <li>
            <Link href="/Model" className="text-gray-600 hover:text-gray-900">
              Model
            </Link>
          </li>
          <li>
            <Link href="/Quiz" className="text-gray-600 hover:text-gray-900">
              Quiz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
