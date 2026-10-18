import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import ScrollHeading from '@/components/ScrollHeading';
import Image from 'next/image';

export const metadata = {
  title: "Real Estate | Rupee Rise Ventures",
  description: "Exploring strategic real estate opportunities across India and Dubai.",
};

const focusAreas = [
  { title: "Residential", img: "/images/office-meeting.jpg" },
  { title: "Commercial", img: "/images/gold-coin-stacks.jpg" },
  { title: "Investment Opportunities", img: "/images/dubai-night-cityscape.jpg" },
  { title: "Premium Properties", img: "/images/glowing-globe-africa-europe.jpg" }
];

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col items-center">
      
      {/* =========================================================================
          SECTION 1 (DARK): HEADER & HERO
          ========================================================================= */}
      <div className="w-full max-w-[1536px] px-4 md:px-10 mx-auto flex flex-col pb-16">
        <Header />

        {/* CUSTOM HERO */}
        <section className="relative w-full h-[70vh] min-h-[500px] rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 md:p-16 mb-8 border border-white/5">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/dubai-night-cityscape.jpg" 
              alt="Real Estate" 
              fill 
              className="object-cover opacity-60 animate-image-appear" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <AnimatedSection>
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
                <span className="text-brand-gold text-[10px] font-bold tracking-widest uppercase">Real Estate</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight mb-8">
                <span className="inline-block animate-enter-word" style={{ animationDelay: '0.05s' }}>Real</span>{' '}
                <span className="inline-block animate-enter-word" style={{ animationDelay: '0.09s' }}>estate</span>{' '}
                <span className="inline-block animate-enter-word text-brand-gold" style={{ animationDelay: '0.13s' }}>without</span>{' '}
                <span className="inline-block animate-enter-word text-brand-gold" style={{ animationDelay: '0.17s' }}>borders.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed animate-enter" style={{ animationDelay: '0.25s' }}>
                Exploring strategic real estate opportunities across India and Dubai.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </div>

      {/* =========================================================================
          SECTION 2 (LIGHT BREAK): INTRO
          ========================================================================= */}
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-4 md:px-10 border-y border-black/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <AnimatedSection>
            <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4 block">
              Strategic Advisory
            </span>
            <ScrollHeading 
              text="Real estate. Selected with purpose." 
              align="center"
              className="text-3xl md:text-5xl font-medium leading-tight text-brand-dark mb-8" 
            />
            <p className="text-black/70 text-lg leading-relaxed max-w-3xl mx-auto">
              We connect property opportunities with buyers, investors and partners. By focusing on fundamental value, location dynamics and market potential, we help our ecosystem access real estate that delivers long-term returns and strategic growth.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3 (DARK): OUR MARKETS (INDIA & DUBAI)
          ========================================================================= */}
      <div className="w-full bg-brand-dark text-brand-light py-24 md:py-32 px-4 md:px-10 border-b border-white/5">
        <div className="max-w-[1536px] mx-auto">
          <AnimatedSection>
            <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12 text-center">Our Markets</h3>
          </AnimatedSection>
          
          <div className="flex flex-col lg:flex-row gap-8 w-full h-auto lg:h-[600px]">
            {/* India */}
            <AnimatedSection className="w-full lg:w-1/2 h-full">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[440px] group border border-white/5 shadow-2xl">
                <div className="absolute inset-0 z-0">
                  <Image src="/images/hyderabad.jpg" alt="India Real Estate" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-end">
                  <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-2">Market 01</span>
                  <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">India</h2>
                  <p className="text-brand-gold/90 text-sm mb-10 max-w-sm">Strategic growth corridors and emerging opportunities across key cities.</p>
                  <ul className="flex flex-col gap-3.5 border-l border-white/20 pl-6">
                    {['Residential', 'Commercial', 'Investment Opportunities', 'Property Advisory'].map(item => (
                      <li key={item} className="text-white/80 font-medium tracking-wide text-sm md:text-base">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Dubai */}
            <AnimatedSection delay={0.2} className="w-full lg:w-1/2 h-full">
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[440px] group border border-white/5 shadow-2xl">
                <div className="absolute inset-0 z-0">
                  <Image src="/images/dubai-night-cityscape.jpg" alt="Dubai Real Estate" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-end">
                  <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-2">Market 02</span>
                  <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">Dubai</h2>
                  <p className="text-brand-gold/90 text-sm mb-10 max-w-sm">Global hub for premium real estate and high-yield investment properties.</p>
                  <ul className="flex flex-col gap-3.5 border-l border-white/20 pl-6">
                    {['Residential', 'Commercial', 'Investment Opportunities', 'Property Advisory'].map(item => (
                      <li key={item} className="text-white/80 font-medium tracking-wide text-sm md:text-base">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 4 (LIGHT BREAK): FOCUS AREAS
          ========================================================================= */}
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-4 md:px-10 border-b border-black/5">
        <div className="max-w-[1536px] mx-auto">
          <AnimatedSection>
            <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4 text-center block">
              Portfolio Scope
            </p>
            <ScrollHeading 
              text="Focus Areas" 
              align="center"
              className="text-3xl md:text-5xl font-medium leading-tight text-brand-dark mb-16 text-center" 
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                <div className="group relative rounded-3xl overflow-hidden aspect-square border border-black/10 shadow-sm hover:shadow-xl transition-all duration-500">
                  <Image src={area.img} alt={area.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-brand-gold font-mono text-xs block mb-1">0{i + 1}</span>
                    <h4 className="text-white text-xl font-medium">{area.title}</h4>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 5 (DARK): OUR APPROACH, PHILOSOPHY & CTA
          ========================================================================= */}
      <div className="w-full bg-brand-dark text-brand-light py-24 md:py-32 px-4 md:px-10">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-24">

          {/* APPROACH */}
          <div className="flex flex-col items-center">
            <AnimatedSection>
              <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12 text-center">Our Approach</h3>
              <div className="bg-[#121317] rounded-full px-8 py-6 md:px-12 md:py-8 border border-white/5 flex flex-wrap justify-center gap-4 items-center max-w-4xl shadow-xl">
                {["Discover", "Evaluate", "Connect", "Execute", "Build Relationships"].map((step, i, arr) => (
                  <React.Fragment key={step}>
                    <div className="text-white font-medium md:text-lg tracking-wide">{step}</div>
                    {i !== arr.length - 1 && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gold">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* PHILOSOPHY BAND */}
          <div className="py-28 my-6 border-y border-white/5 relative overflow-hidden flex items-center justify-center text-center rounded-3xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(214,183,122,0.12)_0%,_transparent_70%)] pointer-events-none"></div>
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white max-w-4xl mx-auto italic relative z-10 px-4">
                "The right property is more than an address. It is an opportunity shaped by location, timing, value and purpose."
              </h2>
            </AnimatedSection>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Looking for property in India or Dubai?</h2>
              <p className="text-[#93949A] text-base mb-10 max-w-xl mx-auto">
                Connect with our advisory desk to review curated residential and commercial opportunities.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a href="/contact?interest=real-estate-india">
                  <Button variant="primary">Enquire about India</Button>
                </a>
                <a href="/contact?interest=real-estate-dubai">
                  <Button variant="secondary" icon="arrow">Enquire about Dubai</Button>
                </a>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
      
      {/* FOOTER */}
      <div className="w-full bg-brand-dark text-brand-light pb-24 pt-6 px-4 md:px-10 border-t border-white/5">
        <div className="max-w-[1536px] mx-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
