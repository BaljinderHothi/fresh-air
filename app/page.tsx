export default function Home() {
  return (
    <div>
      <div
        className="w-full h-screen bg-cover bg-center rounded-lg flex flex-col justify-center items-center text-white shadow-md"
        style={{
          backgroundImage: "url('/images/lung background.png')",
        }}
      >
        <h1
          className="text-8xl font-bold"
          style={{ fontFamily: "Gotham, sans-serif" }}
        >
          Fresh Air
        </h1>
      </div>

      <div className="mt-8 space-y-4 text-gray-700 container mx-auto">
        <p className="text-xl">
          All of this will be text and images about lungs. You can just use a
          placeholder for now.
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
