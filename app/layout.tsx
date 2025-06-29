import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
