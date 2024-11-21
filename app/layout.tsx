import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
        <div>
    
          <Navbar />
    
          <main className="container mx-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
