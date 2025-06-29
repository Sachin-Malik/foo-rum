import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/Header/TopNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foo Rum",
  description: "Something to do with foo rum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavbar />
        {children}
      </body>
    </html>
  );
}
