import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Sidebar from "./component/layouts/sidebar";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sporton Admin",
  description: "Admin Dashboard for Sporton web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Sidebar />
        <main className="flex-1 ml-80 p-14 bg-[#F7F9FA] min-h-screen">
          <div className="mx-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};
