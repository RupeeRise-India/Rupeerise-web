import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Real Estate Ventures",
  description:
    "Explore strategic real estate opportunities, residential, commercial, and premium investments across India and Dubai with Rupee Rise Ventures (Rupeeriseventures).",
  alternates: {
    canonical: "/verticals/real-estate",
  },
  openGraph: {
    title: "Real Estate Ventures | Rupee Rise Ventures",
    description: "Exploring strategic real estate opportunities across India and Dubai.",
    url: "https://rupeeriseventures.com/verticals/real-estate",
  },
};

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
