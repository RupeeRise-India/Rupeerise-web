import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Capital & Asset Management",
  description:
    "Rupee Rise Capital brings together financial insight, strategic asset management and capital deployment to help businesses, asset owners and investors build enduring value.",
  alternates: {
    canonical: "/verticals/capital",
  },
  openGraph: {
    title: "Capital & Asset Management | Rupee Rise Ventures",
    description:
      "Strategic capital structuring, active asset management and growth deployment across dynamic markets.",
    url: "https://rupeeriseventures.com/verticals/capital",
  },
};

export default function CapitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
