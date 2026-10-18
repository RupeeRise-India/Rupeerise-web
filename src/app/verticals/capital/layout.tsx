import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rupee Rise Capital | Strategic Capital & Asset Management',
  description: 'Rupee Rise Capital brings together financial insight, strategic asset management and capital deployment to help businesses, asset owners and investors navigate growth and build enduring value.',
  keywords: [
    'Rupee Rise Capital',
    'Asset Management India',
    'Capital Structuring',
    'Asset Stewardship',
    'Portfolio Asset Allocation',
    'Private Capital Advisory',
    'Business Expansion Capital',
    'Risk Hedging',
    'Venture Capital Ecosystem Dubai India'
  ],
};

export default function CapitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
