import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Side Navigation */}
          <aside className="w-1/5 bg-gray-100 p-4">
            <nav className="flex flex-col gap-4">
              <a href="/">Main Page</a>
              <a href="/Lungs">Lungs</a>
              <a href="/Pneumonia">Pneumonia</a>
              <a href="/Model">Model</a>
              <a href="/Quiz">Quiz</a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-grow p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
