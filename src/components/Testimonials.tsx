import React from 'react';
import Image from 'next/image';

import AnimatedSection from './AnimatedSection';

export default function Testimonials() {
  const cards = [
    { text: "Rupee Rise has provided consistent ROI for my portfolio. Truly unmatched.", author: "Client A", role: "Investor", img: "/images/woman-smiling-long-hair.jpg" },
    { text: "The team’s strategy and insights changed how our venture operates.", author: "Client B", role: "Founder", img: "/images/woman-high-key-portrait.jpg" },
    { text: "An absolute powerhouse of capital management and operational scale.", author: "Client C", role: "CEO", img: "/images/woman-smiling-over-shoulder.jpg" }
  ];

  return (
    <section className="w-full flex flex-col items-center gap-12 text-center py-12">
      <AnimatedSection className="max-w-2xl" delay={0.1}>
        <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-medium mb-8">
          "They didn't sell us a model. They rebuilt how our team decides — and the numbers followed."
        </h2>
        
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/10">
            <Image src="/images/man-smiling-sweater.jpg" alt="David Williams" fill className="object-cover" />
          </div>
          <p className="text-xs font-medium">David Williams</p>
          <p className="text-[10px] text-white/40 uppercase tracking-widest">Managing Partner</p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
        {cards.map((card, idx) => (
          <AnimatedSection key={idx} delay={0.1 + idx * 0.1}>
            <div className="bg-[#131416] border border-white/5 rounded-2xl p-6 text-left flex flex-col justify-between min-h-[160px] h-full">
              <p className="text-white/70 text-sm leading-relaxed mb-6">"{card.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full relative overflow-hidden bg-white/10">
                  <Image src={card.img} alt={card.author} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-white">{card.author}</span>
                  <span className="text-[9px] text-white/40 uppercase tracking-wider">{card.role}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
