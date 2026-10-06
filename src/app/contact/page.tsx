import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export const metadata = {
  title: "Contact Us | Rupee Rise Ventures",
  description: "Whether it's capital, real estate, investments, business growth or learning — tell us what you're working on and the right person from our team will get back to you.",
};

const offices = [
  { city: "Kochi", address: "1st Floor, Business Center, Kochi, Kerala 682001", img: "/images/kochi.jpg" },
  { city: "Trivandrum", address: "Tech Park Campus, Trivandrum, Kerala 695581", img: "/images/trivandrum.jpg" },
  { city: "Hyderabad", address: "Financial District, Nanakramguda, Hyderabad 500032", img: "/images/hyderabad.jpg" },
  { city: "Bangalore", address: "Residency Road, Ashok Nagar, Bangalore 560025", img: "/images/bangalore.jpg" },
  { city: "Dubai", tag: "MARKET", address: "Real estate opportunities across Dubai", img: "/images/dubai-night-cityscape.jpg" },
];

export default function ContactPage() {
  const contactHeroTitle = (
    <>
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.05s' }}>Let's</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.08s' }}>build</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.11s' }}>what's</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.14s' }}>next.</span>
    </>
  );

  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col items-center">
      <div className="w-full max-w-[1536px] px-4 md:px-10 mx-auto flex flex-col pb-24">
        <Header />

        {/* 1. HERO */}
        <PageHero 
          label="Contact"
          title={contactHeroTitle}
          description="Whether it's capital, real estate, investments, business growth or learning — tell us what you're working on and the right person from our team will get back to you."
          size="small"
        />

        {/* 2. FORM & INFO */}
        <div className="py-24 md:py-32 flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <AnimatedSection delay={0.2} className="h-full">
              <Suspense fallback={<div className="h-full min-h-[500px] bg-[#121317] border border-white/5 rounded-3xl animate-pulse"></div>}>
                <ContactForm />
              </Suspense>
            </AnimatedSection>
          </div>
          
          <div className="lg:w-1/3">
            <AnimatedSection delay={0.3} className="h-full">
              <div className="bg-[#121317] border border-white/5 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl text-white font-medium mb-12">Prefer to talk directly?</h2>
                  
                  <div className="flex flex-col gap-8">
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-2">Email</p>
                      <a href="mailto:info@rupeerise.com" className="text-white hover:text-brand-gold transition-colors text-[15px]">info@rupeerise.com</a>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-2">Phone</p>
                      <a href="tel:+917736680099" className="text-white hover:text-brand-gold transition-colors text-[15px]">+91 77366 80099</a>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-2">Website</p>
                      <a href="https://www.rupeeriseventures.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold transition-colors text-[15px]">www.rupeeriseventures.com</a>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10">
                  <div className="bg-black/20 rounded-2xl p-6 flex flex-col gap-6">
                    <p className="text-[#93949A] text-sm leading-relaxed">
                      Speak with the Rupee Rise team about your opportunity.
                    </p>
                    <a href="tel:+917736680099" className="h-[48px] px-6 rounded-full border border-white/10 text-white text-[12px] font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-colors w-fit">
                      CALL US
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5l10 -10"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* 3. OFFICES */}
        <div className="py-24 border-t border-white/5">
          <AnimatedSection delay={0.1}>
            <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-6">Our Presence</p>
            <h2 className="text-3xl md:text-[40px] font-medium leading-tight text-white mb-16">Four cities. Two markets.</h2>
          </AnimatedSection>

          {/* Desktop horizontal scroll/wrap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {offices.map((office, i) => (
              <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                <div className="group cursor-pointer flex flex-col gap-4">
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/5">
                    <Image 
                      src={office.img} 
                      fill 
                      alt={office.city} 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    {office.tag && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-gold text-black text-[9px] font-bold tracking-widest uppercase">
                        {office.tag}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white text-[17px] font-medium mb-1">{office.city}</h3>
                    <p className="text-[#93949A] text-[12px] leading-relaxed max-w-[200px]">{office.address}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-full bg-brand-dark text-brand-light py-24 px-4 md:px-10">
        <div className="max-w-[1536px] mx-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
