import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Forex Trading Academy & Learning",
  description:
    "Rupee Rise Trading Academy (Rupeeriseventures) offers structured financial markets education, professional forex mentorship, risk management, and trader certification.",
  alternates: {
    canonical: "/verticals/learning",
  },
  openGraph: {
    title: "Forex Trading Academy & Learning | Rupee Rise Ventures",
    description:
      "Master financial markets with disciplined mentorship, institutional strategies, and professional trader certification.",
    url: "https://rupeeriseventures.com/verticals/learning",
  },
};

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
