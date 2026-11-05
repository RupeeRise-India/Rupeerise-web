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
    "Rupee Rise Ventures Private Limited (CIN: U68100KL2026PTC104867) is a multi-business venture company built around finance, strategy and growth, spanning across capital, real estate, investor solutions, and learning in India and Dubai.",
  keywords: [
    "RUPEE RISE VENTURES PRIVATE LIMITED",
    "Rupee Rise Ventures Private Limited",
    "RUPEE RISE VENTURES PVT LTD",
    "Rupee Rise Ventures Pvt Ltd",
    "Rupee Rise Ventures",
    "rupeeriseventures",
    "Rupeerise",
    "Rupeerise ventures",
    "U68100KL2026PTC104867",
    "104867",
    "RoC Ernakulam",
    "RoC-Ernakulam",
    "PARAMESWAR MOHAN PILLAI",
    "Parameswar Mohan Pillai",
    "YUVRAJ PRASAD",
    "Yuvraj Prasad",
    "Kattakada",
    "Nedumangad",
    "Thiruvananthapuram",
    "Kerala",
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
    "Hyderabad",
    "Bangalore",
    "Dubai",
  ],
  authors: [{ name: "Rupee Rise Ventures Private Limited", url: "https://rupeeriseventures.com" }],
  creator: "Rupee Rise Ventures Private Limited",
  publisher: "Rupee Rise Ventures Private Limited",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rupee Rise Ventures | A Multi-Business Venture Ecosystem",
    description:
      "Rupee Rise Ventures Private Limited (CIN: U68100KL2026PTC104867) is a multi-business venture company built around finance, strategy and growth, spanning across capital, real estate, investor solutions, and learning.",
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
      "Rupee Rise Ventures Private Limited is a multi-business venture company built around finance, strategy and growth across capital, real estate, and portfolio advisory.",
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
      "@type": ["Organization", "Corporation"],
      "@id": "https://rupeeriseventures.com/#organization",
      "name": "Rupee Rise Ventures",
      "legalName": "RUPEE RISE VENTURES PRIVATE LIMITED",
      "alternateName": [
        "RUPEE RISE VENTURES PRIVATE LIMITED",
        "Rupee Rise Ventures Private Limited",
        "RUPEE RISE VENTURES PVT LTD",
        "Rupee Rise Ventures Pvt Ltd",
        "Rupeeriseventures",
        "Rupeerise",
        "Rupee Rise",
        "Rupeerise Ventures",
        "U68100KL2026PTC104867",
        "RUPEE RISE VENTURES, Thiruvananthapuram",
      ],
      "url": "https://rupeeriseventures.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://rupeeriseventures.com/#logo",
        "url": "https://rupeeriseventures.com/images/Logo.png",
        "caption": "Rupee Rise Ventures Private Limited",
      },
      "image": "https://rupeeriseventures.com/images/Dark-Skyline.png",
      "description":
        "RUPEE RISE VENTURES PRIVATE LIMITED having CIN U68100KL2026PTC104867 is a private company incorporated with the Ministry of Corporate Affairs (RoC-Ernakulam) on 21 July 2026. A multi-business venture ecosystem operating across capitals, real estate, portfolio management, and financial market learning in India and Dubai.",
      "foundingDate": "2026-07-21",
      "founders": [
        {
          "@type": "Person",
          "@id": "https://rupeeriseventures.com/#person-parameswar-mohan-pillai",
          "name": "PARAMESWAR MOHAN PILLAI",
          "alternateName": "Parameswar Mohan Pillai",
          "jobTitle": "Managing Director",
          "identifier": {
            "@type": "PropertyValue",
            "propertyID": "DIN",
            "name": "Director Identification Number",
            "value": "11841911",
          },
          "sameAs": "https://www.falconebiz.com/director/11841911/PARAMESWAR-MOHAN-PILLAI",
        },
        {
          "@type": "Person",
          "@id": "https://rupeeriseventures.com/#person-yuvraj-prasad",
          "name": "YUVRAJ PRASAD",
          "alternateName": "Yuvraj Prasad",
          "jobTitle": "Director",
          "identifier": {
            "@type": "PropertyValue",
            "propertyID": "DIN",
            "name": "Director Identification Number",
            "value": "11841912",
          },
          "sameAs": "https://www.falconebiz.com/director/11841912/YUVRAJ-PRASAD",
        },
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "PARAMESWAR MOHAN PILLAI",
          "jobTitle": "Managing Director",
        },
        {
          "@type": "Person",
          "name": "YUVRAJ PRASAD",
          "jobTitle": "Director",
        },
      ],
      "identifier": [
        {
          "@type": "PropertyValue",
          "propertyID": "CIN",
          "name": "Corporate Identification Number",
          "value": "U68100KL2026PTC104867",
        },
        {
          "@type": "PropertyValue",
          "propertyID": "RegistrationNumber",
          "name": "Company Registration Number",
          "value": "104867",
        },
        {
          "@type": "PropertyValue",
          "propertyID": "RoC",
          "name": "Registrar of Companies",
          "value": "RoC-Ernakulam",
        },
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4/99/a, Panjakshari, College Junction, Kattakada, Nedumangad",
        "addressLocality": "Thiruvananthapuram",
        "addressRegion": "Kerala",
        "postalCode": "695572",
        "addressCountry": "IN",
      },
      "naics": "Real estate activities with own or leased property",
      "email": "info@rupeeriseventures.com",
      "telephone": "+91 77366 80099",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91 77366 80099",
          "contactType": "customer support",
          "email": "info@rupeeriseventures.com",
          "areaServed": ["IN", "AE"],
          "availableLanguage": ["English", "Malayalam", "Hindi"],
        },
      ],
      "knowsAbout": [
        "Venture Capital & Early-stage Growth",
        "Real Estate Development & Brokerage",
        "Portfolio Management & Asset Compounding",
        "Financial Education & Trading Academy",
      ],
      "sameAs": [
        "https://rupeeriseventures.com",
        "https://www.falconebiz.com/company/RUPEE-RISE-VENTURES-PRIVATE-LIMITED-U68100KL2026PTC104867",
        "https://www.falconebiz.com/director/11841911/PARAMESWAR-MOHAN-PILLAI",
        "https://www.falconebiz.com/director/11841912/YUVRAJ-PRASAD",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://rupeeriseventures.com/#website",
      "url": "https://rupeeriseventures.com",
      "name": "Rupee Rise Ventures",
      "alternateName": [
        "RUPEE RISE VENTURES PRIVATE LIMITED",
        "Rupeeriseventures",
        "Rupeerise",
      ],
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
