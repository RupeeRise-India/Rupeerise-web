import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Investors & Portfolio Management",
  description:
    "Strategic portfolio management, asset protection, and wealth advisory solutions for investors, families, and HNIs by Rupee Rise Ventures (Rupeeriseventures).",
  alternates: {
    canonical: "/verticals/investors",
  },
  openGraph: {
    title: "Investors & Portfolio Management | Rupee Rise Ventures",
    description:
      "Strategic investments and portfolio management to secure and compound assets globally.",
    url: "https://rupeeriseventures.com/verticals/investors",
  },
};

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
