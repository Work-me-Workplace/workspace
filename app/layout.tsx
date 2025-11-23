import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkSpace",
  description: "Collaboration container for managing products and content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

