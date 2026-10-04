import React from 'react';
import Button from './Button';
import Image from 'next/image';

import AnimatedSection from './AnimatedSection';

export default function CTA() {
  return (
    <section className="w-full relative rounded-3xl overflow-hidden py-24 md:py-32 px-8 flex flex-col items-center justify-center text-center mt-12 bg-[#121317]">
      {/* Background with smudge gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(214,183,122,0.15)_0%,_rgba(18,19,23,0)_70%)] pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center max-w-2xl">
        <AnimatedSection delay={0.1} direction="up">
          <h2 className="text-4xl md:text-[44px] font-medium mb-6 leading-tight tracking-tight text-white">
            Let's build what's next, together
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2} direction="up">
          <p className="text-[#93949A] text-[15px] mb-12 max-w-md mx-auto leading-relaxed">
            A 30-minute conversation is usually enough to see where the leverage is. No deck, no pressure.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3} direction="up">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" icon="calendar">BOOK A CALL</Button>
            <Button variant="secondary" icon="arrow">SEE OUR WORK</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
