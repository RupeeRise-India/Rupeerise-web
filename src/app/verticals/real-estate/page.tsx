import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import Image from 'next/image';

export const metadata = {
  title: "Real Estate | Rupee Rise Ventures",
  description: "Exploring strategic real estate opportunities across India and Dubai.",
};

const focusAreas = [
  { title: "Residential", img: "/images/office-meeting.jpg" }, // Need good images, using placeholders
  { title: "Commercial", img: "/images/gold-coin-stacks.jpg" },
  { title: "Investment Opportunities", img: "/images/dubai-night-cityscape.jpg" },
  { title: "Premium Properties", img: "/images/glowing-globe-africa-europe.jpg" }
];

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col items-center">
      <div className="w-full max-w-[1536px] px-4 md:px-10 mx-auto flex flex-col pb-24">
        <Header />

        {/* CUSTOM HERO */}
        <section className="relative w-full h-[70vh] min-h-[500px] rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 md:p-16 mb-24 border border-white/5">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/dubai-night-cityscape.jpg" 
              alt="Real Estate" 
              fill 
              className="object-cover opacity-60" 
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
                Real estate without borders.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
                Exploring strategic real estate opportunities across India and Dubai.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* INTRO */}
        <div className="py-24 border-t border-white/5 flex flex-col items-center text-center max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white mb-8">Real estate. Selected with purpose.</h2>
            <p className="text-[#93949A] text-lg leading-relaxed">
              We connect property opportunities with buyers, investors and partners. By focusing on fundamental value, location dynamics and market potential, we help our ecosystem access real estate that delivers long-term returns and strategic growth.
            </p>
          </AnimatedSection>
        </div>

        {/* TWO MARKETS (SIGNATURE) */}
        <div className="py-24 md:py-32 border-t border-white/5">
          <AnimatedSection>
             <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12 text-center">Our Markets</h3>
          </AnimatedSection>
          
          <div className="flex flex-col lg:flex-row gap-6 w-full h-auto lg:h-[600px]">
             {/* India */}
             <AnimatedSection className="w-full lg:w-1/2 h-full">
               <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] group border border-white/5">
                 <div className="absolute inset-0 z-0">
                    <Image src="/images/hyderabad.jpg" alt="India Real Estate" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                 </div>
                 <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-end">
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">India</h2>
                    <p className="text-brand-gold/90 text-sm mb-10 max-w-sm">Strategic growth corridors and emerging opportunities across key cities.</p>
                    <ul className="flex flex-col gap-4 border-l border-white/20 pl-6">
                      {['Residential', 'Commercial', 'Investment Opportunities', 'Property Advisory'].map(item => (
                        <li key={item} className="text-white/80 font-medium tracking-wide">{item}</li>
                      ))}
                    </ul>
                 </div>
               </div>
             </AnimatedSection>

             {/* Dubai */}
             <AnimatedSection delay={0.2} className="w-full lg:w-1/2 h-full">
               <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] group border border-white/5">
                 <div className="absolute inset-0 z-0">
                    <Image src="/images/dubai-night-cityscape.jpg" alt="Dubai Real Estate" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                 </div>
                 <div className="relative z-10 h-full p-10 md:p-14 flex flex-col justify-end">
                    <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">Dubai</h2>
                    <p className="text-brand-gold/90 text-sm mb-10 max-w-sm">Global hub for premium real estate and high-yield investment properties.</p>
                    <ul className="flex flex-col gap-4 border-l border-white/20 pl-6">
                      {['Residential', 'Commercial', 'Investment Opportunities', 'Property Advisory'].map(item => (
                        <li key={item} className="text-white/80 font-medium tracking-wide">{item}</li>
                      ))}
                    </ul>
                 </div>
               </div>
             </AnimatedSection>
          </div>
        </div>

        {/* FOCUS AREAS */}
        <div className="py-24 border-t border-white/5">
          <AnimatedSection>
            <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12">Focus Areas</h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {focusAreas.map((area, i) => (
               <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                 <div className="group relative rounded-3xl overflow-hidden aspect-square border border-white/5">
                    <Image src={area.img} alt={area.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                       <h4 className="text-white text-xl font-medium">{area.title}</h4>
                    </div>
                 </div>
               </AnimatedSection>
             ))}
          </div>
        </div>

        {/* APPROACH */}
        <div className="py-24 border-t border-white/5 flex flex-col items-center">
           <AnimatedSection>
             <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12 text-center">Our Approach</h3>
             <div className="bg-[#121317] rounded-full px-8 py-6 md:px-12 md:py-8 border border-white/5 flex flex-wrap justify-center gap-4 items-center max-w-4xl">
               {["Discover", "Evaluate", "Connect", "Execute", "Build Relationships"].map((step, i, arr) => (
                 <React.Fragment key={step}>
                   <div className="text-white font-medium md:text-lg tracking-wide">{step}</div>
                   {i !== arr.length - 1 && (
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-gold">
                       <path d="M5 12h14M12 5l7 7-7 7" />
                     </svg>
                   )}
                 </React.Fragment>
               ))}
             </div>
           </AnimatedSection>
        </div>

        {/* PHILOSOPHY BAND */}
        <div className="py-32 my-12 border-y border-white/5 relative overflow-hidden flex items-center justify-center text-center">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(214,183,122,0.1)_0%,_transparent_70%)] pointer-events-none"></div>
           <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white max-w-4xl mx-auto italic relative z-10">
                "The right property is more than an address. It is an opportunity shaped by location, timing, value and purpose."
              </h2>
           </AnimatedSection>
        </div>

        {/* CTA */}
        <div className="py-24 flex flex-col items-center text-center">
           <AnimatedSection>
             <h2 className="text-3xl md:text-4xl font-medium text-white mb-10">Looking for property in India or Dubai?</h2>
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
      
      <div className="w-full bg-brand-dark text-brand-light py-24 px-4 md:px-10">
        <div className="max-w-[1536px] mx-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
