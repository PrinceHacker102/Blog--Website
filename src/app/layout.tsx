import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwindyt blog content",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex w-full bg-black overflow-hidden">
          </div>
      </body>
    </html>
  );
}