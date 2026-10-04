import React from 'react';
import Image from 'next/image';

import AnimatedSection from './AnimatedSection';

export default function Strategy() {
  const list = [
    { title: "Multi-Vertical Perspective", num: "01" },
    { title: "Strategic Thinking", num: "02" },
    { title: "Opportunity Focused", num: "03" },
    { title: "Financial Understanding", num: "04" },
    { title: "Long-Term Value", num: "05" }
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
      
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-10 w-full max-w-xl">
        <AnimatedSection direction="left" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] text-brand-dark tracking-tight">
            Built around opportunity.<br />
            Driven by strategy.
          </h2>
        </AnimatedSection>
        
        <div className="flex flex-col">
          {list.map((item, idx) => (
            <AnimatedSection key={idx} delay={0.1 + idx * 0.1} direction="left">
              <div className="flex justify-between items-center py-4 border-b border-black/20 hover:border-brand-gold transition-colors cursor-pointer group">
                <span className="text-base text-black/80 font-light group-hover:text-brand-gold transition-colors">{item.title}</span>
                <span className="text-sm text-black/60 group-hover:text-brand-gold transition-colors">{item.num}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col gap-8 w-full max-w-xl">
        
        {/* Card 1 */}
        <AnimatedSection delay={0.2} direction="right">
          <div className="bg-[#0a0b0d] rounded-[2rem] p-10 relative overflow-hidden group min-h-[280px] flex flex-col justify-end border border-white/5">
            <div className="absolute inset-x-0 top-0 h-full z-0">
               <Image src="/images/Wave.jpg" alt="Wave background" fill className="object-cover object-top opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d]/60 to-[#0a0b0d]"></div>
            </div>
            <div className="relative z-10 mt-16">
              <h3 className="text-4xl font-medium text-brand-gold mb-4">4 Verticals</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-[400px]">
                Capital, real estate, investment management and learning — one ecosystem, built to expand as new opportunities emerge.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Card 2 */}
        <AnimatedSection delay={0.3} direction="right">
          <div className="bg-[#0a0b0d] rounded-[2rem] p-10 relative overflow-hidden group min-h-[280px] flex flex-col justify-end border border-white/5">
            <div className="absolute inset-x-0 top-0 h-full z-0">
               <Image src="/images/Wave.jpg" alt="Wave background" fill className="object-cover object-top opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d]/60 to-[#0a0b0d]"></div>
            </div>
            <div className="relative z-10 mt-16">
              <h3 className="text-4xl font-medium text-brand-gold mb-4">1 Ecosystem</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-[400px]">
                A shared approach to identifying, assessing and building long-term value across every business.
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
