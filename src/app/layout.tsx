import type { Metadata, Viewport } from "next";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Rupee Rise Ventures | A Multi-Business Venture Ecosystem",
  description: "Rupee Rise Ventures is a multi-business venture company built around finance, strategy and growth, spanning across capital, real estate, investor solutions, and learning.",
  keywords: ["Rupee Rise", "Rupee Rise Ventures", "Venture Ecosystem", "Finance", "Strategy", "Growth", "Capital", "Real Estate"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden w-full min-h-screen">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
