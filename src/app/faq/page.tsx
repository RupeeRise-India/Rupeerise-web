import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQPageContent from '@/components/FAQPageContent';

export const metadata = {
  title: "Frequently Asked Questions | Rupee Rise Ventures",
  description: "Find clear answers to common questions about Rupee Rise Ventures, our capital deployment strategy, cross-border real estate investments in India and Dubai, portfolio management, and market education.",
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
