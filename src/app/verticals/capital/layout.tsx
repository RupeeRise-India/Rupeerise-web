import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capital | Rupee Rise Ventures",
  description: "Rupee Rise Capital brings financial insight and strategic thinking to help businesses and investors evaluate, structure and grow opportunities.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
