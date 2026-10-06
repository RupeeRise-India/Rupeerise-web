import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors & Portfolio Management | Rupee Rise Ventures",
  description: "A structured approach to managing investments and building businesses, combining portfolio management with strategic business consulting.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
