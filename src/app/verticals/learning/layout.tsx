import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rupee Rise Forex Trading Academy | Master the Markets. Build Your Strategy.',
  description: 'A structured forex trading education programme designed to take learners from the fundamentals of price action to advanced market analysis, Smart Money Concepts (SMC) and Inner Circle Trader (ICT) methodologies.',
  keywords: [
    'Rupee Rise Forex Trading Academy',
    'Forex Trading Course',
    'Price Action Trading',
    'Smart Money Concepts',
    'SMC Forex',
    'Inner Circle Trader',
    'ICT Trading Methodology',
    'Forex Certification',
    'Forex Education India'
  ],
};

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
