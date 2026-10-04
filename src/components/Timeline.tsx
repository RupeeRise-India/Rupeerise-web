import React from 'react';

import AnimatedSection from './AnimatedSection';

export default function Timeline() {
  const steps = [
    { num: "01", title: "Identify", desc: "We rely heavily on our research and analysis to find opportunities to unlock our ecosystem." },
    { num: "02", title: "Assess", desc: "Rigorous evaluation and financial modelling ensure the highest returns with minimum risk." },
    { num: "03", title: "Strategize", desc: "Planning execution with clear actionable milestones based on strategic goals." },
    { num: "04", title: "Execute", desc: "Actioning our plans with agility and continuous risk and performance monitoring." },
    { num: "05", title: "Grow", desc: "Ongoing management and performance reviews to ensure maximum potential." },
  ];

  return (
    <section className="w-full flex flex-col pt-12 items-center px-4 md:px-0">
      <div className="w-full max-w-[1310px] flex flex-col">
        {/* Top Header */}
        <div className="flex justify-between items-end w-full mb-6">
          <AnimatedSection delay={0.1} className="w-full max-w-[340px]">
            <h2 className="text-4xl md:text-[44px] font-medium leading-[1.1] tracking-tight text-white">
              From opportunity<br />to growth.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} direction="left" className="hidden md:flex justify-end pb-2">
            <p className="text-white/60 text-[13px] leading-relaxed max-w-[280px] text-right">
              A disciplined, five-stage approach applied consistently across every vertical.
            </p>
          </AnimatedSection>
        </div>

        {/* Bottom 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
          {steps.map((step, idx) => (
            <AnimatedSection key={idx} delay={0.1 + idx * 0.1} direction="up">
              <div className="flex flex-col gap-3 border-t border-white/15 pt-8 group hover:border-brand-gold/50 transition-colors h-full min-h-[260px]">
                <span className="text-[52px] font-normal text-[#c7a468] mb-1 transition-transform group-hover:-translate-y-1 leading-none">{step.num}</span>
                <h4 className="text-[17px] font-medium text-white">{step.title}</h4>
                <p className="text-white/60 text-[13px] leading-relaxed pr-2">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
