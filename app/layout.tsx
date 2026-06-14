import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Collaboration App",
  description: "Next.js app for real-time collaboration and communication.",
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
