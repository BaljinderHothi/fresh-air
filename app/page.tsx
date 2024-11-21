export default function Home() {
  return (
    <div>
      {/* Header Section with Larger Background */}
      <div
        className="w-full h-96 bg-cover bg-center rounded-lg shadow-md flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('/images/lung background.png')",
        }}
      >
        <h1 className="text-6xl font-bold" style={{ fontFamily: 'Gotham, sans-serif' }}>
          Fresh Air
        </h1>
        <p className="text-lg mt-4 font-medium">Made by Baljinder Hothi</p>
      </div>

      {/* Content Section */}
      <div className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
        <p className="text-xl">
          All of this will be text and images about lungs. place holder for rn 
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
