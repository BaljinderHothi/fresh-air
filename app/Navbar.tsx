import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            Fresh Air
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Lungs" className="hover:text-gray-400">
                Lungs
              </Link>
            </li>
            <li>
              <Link href="/Pneumonia" className="hover:text-gray-400">
                Pneumonia
              </Link>
            </li>
            <li>
              <Link href="/Model" className="hover:text-gray-400">
                CV Model
              </Link>
            </li>
            <li>
              <Link href="/Quiz" className="hover:text-gray-400">
                Quiz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
