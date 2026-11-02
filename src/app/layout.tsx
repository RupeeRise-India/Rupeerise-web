import type { Metadata, Viewport } from "next";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadataBase = new URL("https://rupeeriseventures.com");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Rupee Rise Ventures | A Multi-Business Venture Ecosystem",
    template: "%s | Rupee Rise Ventures",
  },
  description:
    "Rupee Rise Ventures (Rupeeriseventures) is a multi-business venture company built around finance, strategy and growth, spanning across capital, real estate, investor solutions, and learning.",
  keywords: [
    "Rupee Rise",
    "Rupee Rise Ventures",
    "rupeeriseventures",
    "Rupeerise",
    "Rupeerise ventures",
    "Rupee Rise Ventures Private Limited",
    "Venture Ecosystem",
    "Finance",
    "Strategy",
    "Growth",
    "Capital",
    "Real Estate India Dubai",
    "Asset Management",
    "Portfolio Management",
    "Forex Trading Academy",
    "Kochi",
    "Trivandrum",
    "Hyderabad",
    "Bangalore",
    "Dubai",
  ],
  authors: [{ name: "Rupee Rise Ventures", url: "https://rupeeriseventures.com" }],
  creator: "Rupee Rise Ventures",
  publisher: "Rupee Rise Ventures",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rupee Rise Ventures | A Multi-Business Venture Ecosystem",
    description:
      "Rupee Rise Ventures (Rupeeriseventures) is a multi-business venture company built around finance, strategy and growth, spanning across capital, real estate, investor solutions, and learning.",
    url: "https://rupeeriseventures.com",
    siteName: "Rupee Rise Ventures",
    images: [
      {
        url: "/images/Dark-Skyline.png",
        width: 1200,
        height: 630,
        alt: "Rupee Rise Ventures - A Multi-Business Venture Ecosystem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Rise Ventures | A Multi-Business Venture Ecosystem",
    description:
      "Rupee Rise Ventures is a multi-business venture company built around finance, strategy and growth across capital, real estate, and portfolio advisory.",
    images: ["/images/Dark-Skyline.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google2f31546882f6c359",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://rupeeriseventures.com/#organization",
      "name": "Rupee Rise Ventures",
      "legalName": "Rupee Rise Ventures Private Limited",
      "alternateName": [
        "Rupeeriseventures",
        "Rupeerise",
        "Rupee Rise",
        "Rupeerise Ventures",
      ],
      "url": "https://rupeeriseventures.com",
      "logo": "https://rupeeriseventures.com/images/Logo.png",
      "email": "info@rupeeriseventures.com",
      "telephone": "+91 77366 80099",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thiruvananthapuram",
        "addressRegion": "Kerala",
        "addressCountry": "IN",
      },
      "sameAs": [
        "https://rupeeriseventures.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://rupeeriseventures.com/#website",
      "url": "https://rupeeriseventures.com",
      "name": "Rupee Rise Ventures",
      "alternateName": ["Rupeeriseventures", "Rupeerise"],
      "publisher": {
        "@id": "https://rupeeriseventures.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden w-full min-h-screen">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
