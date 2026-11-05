import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQPageContent from '@/components/FAQPageContent';

export const metadata = {
  title: "Frequently Asked Questions | Rupee Rise Ventures Private Limited",
  description: "Find clear answers to common questions about Rupee Rise Ventures Private Limited (CIN: U68100KL2026PTC104867), capital strategy, real estate in India & Dubai, portfolio management, and market learning.",
  keywords: [
    "Rupee Rise Ventures FAQ",
    "Rupee Rise Ventures Private Limited",
    "U68100KL2026PTC104867",
    "Parameswar Mohan Pillai",
    "Rupee Rise questions",
    "RoC Ernakulam",
  ],
  alternates: {
    canonical: "/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the official legal entity name, CIN, and incorporation details of Rupee Rise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rupee Rise Ventures Private Limited is an incorporated private company limited by shares registered with the Ministry of Corporate Affairs (MCA), Government of India (RoC-Ernakulam), with Corporate Identification Number (CIN) U68100KL2026PTC104867. Incorporated on 21 July 2026, the company operates under the executive leadership of Managing Director Parameswar Mohan Pillai and Director Yuvraj Prasad, with its registered office situated at 4/99/a, Panjakshari, College Junction, Kattakada, Nedumangad, Thiruvananthapuram, Kerala 695572."
      }
    },
    {
      "@type": "Question",
      "name": "What is Rupee Rise Ventures and how does the ecosystem operate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rupee Rise Ventures is a multi-business venture ecosystem operating across four core pillars: Capitals, Real Estate, Portfolio Management, and Learning across India (Kochi, Trivandrum, Hyderabad, Bangalore) and Dubai, UAE."
      }
    },
    {
      "@type": "Question",
      "name": "Who are the directors of Rupee Rise Ventures Private Limited?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The directors of Rupee Rise Ventures Private Limited are Parameswar Mohan Pillai (Managing Director, DIN: 11841911) and Yuvraj Prasad (Director, DIN: 11841912), appointed on 21 July 2026."
      }
    }
  ]
};

export default function FAQPage() {
  const faqHeroTitle = (
    <>
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.05s' }}>Answers</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.08s' }}>to</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.11s' }}>your</span>{' '}
      <span className="inline-block animate-enter-word text-brand-gold" style={{ animationDelay: '0.14s' }}>questions</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.17s' }}>about</span>{' '}
      <span className="inline-block animate-enter-word text-brand-gold" style={{ animationDelay: '0.20s' }}>Rupee Rise.</span>
    </>
  );

  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* SECTION 1: HEADER & HERO */}
      <div className="w-full max-w-[1536px] px-4 md:px-10 mx-auto flex flex-col pb-6">
        <Header />
        
        <PageHero 
          label="Knowledge Base & FAQ"
          title={faqHeroTitle}
          description="Everything you need to know about our multi-business venture ecosystem — covering strategic capitals, cross-border real estate in India & Dubai, portfolio management, and financial markets learning."
          footerText="Kochi · Trivandrum · Hyderabad · Bangalore · Dubai"
          size="small"
        />
      </div>

      {/* SECTION 2: INTERACTIVE FAQ EXPLORER */}
      <FAQPageContent />

      {/* SECTION 3: FOOTER */}
      <div className="w-full bg-brand-dark text-brand-light pb-20 px-4 md:px-10">
        <div className="max-w-[1536px] mx-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
