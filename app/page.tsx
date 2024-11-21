import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header Section */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Fresh Air</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Made by Baljinder Hothi
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-4">
        <p>
          All of this will be text and images about lungs, you can just use a
          placeholder for now.
        </p>
        <ul className="list-disc pl-4">
          <li>YAP</li>
          <li>YAP</li>
          <li>YAP</li>
          <li>AA</li>
          <li>YAp</li>
        </ul>
      </div>
    </div>
  );
}
