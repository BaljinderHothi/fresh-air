export default function Home() {
  return (
    <div>
      {/* Header Section with Background Image */}
      <div
        className="w-full h-64 bg-cover bg-center rounded-lg shadow-md flex flex-col justify-center items-start p-8 text-white"
        style={{
          backgroundImage: "url('/lung background.png')",
        }}
      >
        <h1 className="text-4xl font-bold">Fresh Air</h1>
        <p className="text-lg font-medium">Made by Baljinder Hothi</p>
      </div>

      {/* Content Section */}
      <div className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
        <p className="text-xl">
          All of this will be text and images about lungs. You can just use a placeholder for now.
        </p>
        <ul className="list-disc list-inside space-y-1">
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
