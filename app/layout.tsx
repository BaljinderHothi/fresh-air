import { ReactNode } from "react";
import NavBar from "./Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/gotham"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <NavBar />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
