import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alyssa — Consulting, data and applied AI",
  description: "We help organisations unlock growth and efficiency through data-driven consulting and intelligent automation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
