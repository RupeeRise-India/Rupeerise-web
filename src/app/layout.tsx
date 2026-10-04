import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rupee Rise Ventures | A Multi-Business Venture Ecosystem",
  description: "Rupee Rise Ventures is a multi-business venture company built around finance, strategy and growth, spanning across capital, real estate, investor solutions, and learning.",
  keywords: ["Rupee Rise", "Rupee Rise Ventures", "Venture Ecosystem", "Finance", "Strategy", "Growth", "Capital", "Real Estate"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
