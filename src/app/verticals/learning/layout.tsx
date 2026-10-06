import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning | Rupee Rise Ventures",
  description: "Practical, structured financial learning covering fundamentals, investing, trading and entrepreneurship, focused on real-world application.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
