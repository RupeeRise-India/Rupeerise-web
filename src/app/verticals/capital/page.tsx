'use client';

import React, { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import Button from '@/components/Button';
import ScrollHeading from '@/components/ScrollHeading';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const assetManagementPillars = [
  {
    num: "01",
    title: "Portfolio Asset Allocation",
    desc: "Balancing high-growth venture deployments with capital-preserving yield assets across diversified market conditions.",
    tag: "Allocation Strategy"
  },
  {
    num: "02",
    title: "Active Asset Stewardship",
    desc: "Rigorous ongoing oversight, corporate governance, balance sheet optimization and operational value creation.",
    tag: "Active Governance"
  },
  {
    num: "03",
    title: "Capital Preservation & Hedging",
    desc: "Macroeconomic stress testing, liquidity buffers, and calculated risk containment to protect capital downside.",
    tag: "Risk Mitigation"
  },
  {
    num: "04",
    title: "Ecosystem Compounding",
    desc: "Unlocking cross-vertical synergies across private equity, real estate assets, and strategic venture opportunities.",
    tag: "Value Compounding"
  }
];

const evaluationFramework = [
  { title: "Business Model", desc: "Commercial fundamentals, unit economics and scalability", img: "/images/capitals/eval_01.webp" },
  { title: "Management & Governance", desc: "Leadership capability and execution track record", img: "/images/capitals/eval_02.webp" },
  { title: "Market Potential", desc: "Addressable market, competitive moat and tailwinds", img: "/images/capitals/eval_03.webp" },
  { title: "Asset Quality & Financials", desc: "Cash-flow durability, asset quality and balance sheet health", img: "/images/capitals/eval_04.webp" },
  { title: "Scalability & Growth", desc: "Capital efficiency and long-term enterprise valuation", img: "/images/capitals/eval_05.webp" },
  { title: "Risk & Capital Protection", desc: "Downside scenarios, liquidity exposure and risk hedging", img: "/images/capitals/eval_06.webp" }
];

const whyCards = [
  { title: "Strategic Asset Stewardship", desc: "We manage capital and assets with long-term responsibility, aligning deployment with disciplined risk mitigation.", img: "/images/capitals/why_01.webp" },
  { title: "Disciplined Evaluation", desc: "Rigorous assessment based on underlying fundamentals and asset quality, not market hype.", img: "/images/capitals/why_02.webp" },
  { title: "Compounded Value Creation", desc: "We focus on compounding asset value and building enduring operational resilience across cycles.", img: "/images/capitals/why_03.webp" },
  { title: "Connected Ecosystem", desc: "Leveraging multi-vertical expertise across capital, real estate, and portfolio advisory in India and Dubai.", img: "/images/capitals/why_04.webp" }
];

const whoWeWorkWith = [
  { title: "Entrepreneurs & Founders", img: "/images/capitals/who/who_01.webp" },
  { title: "Growth Stage Startups", img: "/images/capitals/who/who_02.webp" },
  { title: "Established Businesses", img: "/images/capitals/who/who_03.webp" },
  { title: "Asset Owners & Family Offices", img: "/images/capitals/who/who_04.webp" },
  { title: "Strategic Capital Investors", img: "/images/capitals/who/who_05.webp" }
];

const focusAreas = [
  { id: '01', title: "Strategic capital opportunities", img: "/images/capitals/focus_01_user.jpg" },
  { id: '02', title: "Asset management", img: "/images/capitals/focus_02.webp" },
  { id: '03', title: "Capital structuring", img: "/images/capitals/focus_03.webp" },
  { id: '04', title: "Strategic partnerships", img: "/images/capitals/focus_04_user.jpg" },
  { id: '05', title: "Business growth & expansion", img: "/images/capitals/focus_05.webp" },
  { id: '06', title: "Opportunity evaluation", img: "/images/capitals/focus_06.webp" },
];

const approach = [
  { num: '01', title: "Identify", desc: "See the opportunity and assess asset potential", img: "/images/capitals/approach_01.webp" },
  { num: '02', title: "Evaluate", desc: "Understand fundamentals and financial risk", img: "/images/capitals/approach_02.webp" },
  { num: '03', title: "Structure", desc: "Shape capital framework and asset allocation", img: "/images/capitals/approach_03.webp" },
  { num: '04', title: "Execute", desc: "Turn strategy into disciplined action", img: "/images/capitals/approach_04.webp" },
  { num: '05', title: "Grow", desc: "Create enduring, compounded asset value", img: "/images/capitals/approach_05.webp" },
];

export default function CapitalPage() {
  const [activeFocus, setActiveFocus] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: carouselRef,
  });
  
  // Translates the flex row to the left as user scrolls down the container
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const heroTitle = (
    <>
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.05s' }}>Capital.</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.08s' }}>With</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.11s' }}>a</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.14s' }}>strategy</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.17s' }}>behind</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.20s' }}>it.</span>
    </>
  );

  const heroDescription = "Rupee Rise Capital brings together financial insight, strategic asset management and capital deployment to help businesses, asset owners and investors navigate growth and build enduring value.";

  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col w-full overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1 (DARK): HEADER & HERO
          ========================================================================= */}
      <div className="w-full max-w-[1536px] px-4 md:px-10 mx-auto flex flex-col pb-20">
        <Header />

        {/* 1. HERO */}
        <PageHero 
          label="Capitals"
          title={heroTitle}
          description={heroDescription}
          footerText="Powered by Rupee Rise Ventures."
          size="small"
        />
      </div>

      {/* =========================================================================
          SECTION 2 (LIGHT BREAK): WHERE FINANCE MEETS STRATEGY & ASSET MANAGEMENT
          ========================================================================= */}
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-4 md:px-10 border-y border-black/5">
        <div className="max-w-[1536px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-stretch">
          <AnimatedSection className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4">
                Strategic Perspective
              </p>
              <ScrollHeading 
                text="Where finance meets strategy."
                align="left"
                className="text-3xl md:text-5xl font-medium leading-tight text-brand-dark mb-8"
              />
              <p className="text-black/70 text-lg leading-relaxed mb-10">
                Rupee Rise Capital is the capital and asset-focused vertical of Rupee Rise Ventures.<br/>
                We look beyond the numbers — at the business, its underlying assets, its management, its market and its long-term compounding potential.
              </p>
            </div>
            
            <div className="bg-white border border-black/10 rounded-3xl p-8 relative overflow-hidden shadow-sm mt-auto">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-2xl rounded-full"></div>
              <p className="text-brand-dark text-lg leading-relaxed italic relative z-10 font-medium">
                "We believe capital and assets should do more than sit passively. They should be actively managed to create the conditions for sustainable, compounded growth."
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:w-1/2">
            <div className="w-full h-full min-h-[420px] rounded-[2rem] overflow-hidden relative border border-black/10 shadow-xl">
              <Image 
                src="/images/pexels-mxkrv-3655916-5523243.jpg" 
                alt="Strategy Boardroom" 
                fill 
                className="object-cover saturate-[0.85] sepia-[0.05]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>

        {/* Dedicated Asset Management & Capital Stewardship Pillars */}
        <div className="max-w-[1536px] mx-auto mt-20 pt-16 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <AnimatedSection>
              <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-3 block">
                Asset Stewardship
              </span>
              <h3 className="text-3xl md:text-4xl font-medium text-brand-dark tracking-tight">
                Asset Management & Capital Discipline
              </h3>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-black/60 text-sm max-w-md md:text-right font-light leading-relaxed">
                Beyond initial capital deployment, our team provides ongoing governance, balance sheet structuring, and asset optimization to protect and compound value across market cycles.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assetManagementPillars.map((pillar, idx) => (
              <AnimatedSection key={idx} delay={0.1 + idx * 0.1}>
                <div className="bg-white border border-black/10 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full min-h-[260px] group hover:border-brand-gold/50">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-light text-brand-gold font-sans">{pillar.num}</span>
                      <span className="text-[10px] uppercase tracking-wider text-black/50 px-2.5 py-1 rounded-full bg-black/5 font-medium">
                        {pillar.tag}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-brand-dark mb-3 group-hover:text-brand-gold transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-black/65 text-xs leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[11px] text-black/40">
                    <span>Rupee Rise Capitals</span>
                    <span className="text-brand-gold font-medium">Active Advisory</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3 (DARK): WHAT WE FOCUS ON
          ========================================================================= */}
      <div className="w-full bg-brand-dark text-brand-light py-24 md:py-32 px-4 md:px-10 border-b border-white/5">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <AnimatedSection>
              <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12">What We Focus On</h3>
              <div className="flex flex-col">
                {focusAreas.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col lg:flex-row lg:items-center gap-4 py-6 border-b border-white/10 group cursor-pointer"
                    onMouseEnter={() => setActiveFocus(i)}
                  >
                    {/* Mobile Image */}
                    <div className="w-full h-48 rounded-2xl overflow-hidden relative mb-4 lg:hidden">
                      <Image src={item.img} alt={item.title} fill className="object-cover saturate-[0.85] sepia-[0.1]" />
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <span className="text-white/30 text-sm font-mono mt-1 lg:mt-0 transition-colors group-hover:text-brand-gold w-8">{item.id}</span>
                    <span className="text-white/80 text-xl font-medium transition-colors group-hover:text-white">{item.title}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          
          <div className="hidden lg:block relative h-[600px]">
            <div className="sticky top-32 w-full h-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
              {focusAreas.map((area, idx) => (
                <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeFocus ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <Image src={area.img} alt={area.title} fill className="object-cover saturate-[0.85] sepia-[0.1]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 4 (LIGHT BREAK): THE EVALUATION FRAMEWORK
          ========================================================================= */}
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-4 md:px-10 border-b border-black/5">
        <div className="max-w-[1536px] mx-auto">
          <AnimatedSection>
            <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4 text-center block">
              Methodology
            </p>
            <ScrollHeading 
              text="The Evaluation Framework" 
              align="center"
              className="text-3xl md:text-5xl font-medium leading-tight text-brand-dark mb-16 text-center" 
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluationFramework.map((item, i) => (
              <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                <div className="rounded-[2rem] h-[280px] relative overflow-hidden group border border-black/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="absolute inset-0 z-0">
                    <Image src={item.img} alt={item.title} fill className="object-cover saturate-[0.85] sepia-[0.05] transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl text-white font-medium mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 5 (DARK): OUR APPROACH & QUOTE BAND
          ========================================================================= */}
      <div className="w-full bg-brand-dark text-brand-light py-24 md:py-32 px-4 md:px-10 border-b border-white/5">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-24">
          
          {/* 5.1 OUR APPROACH */}
          <div>
            <AnimatedSection>
              <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-16 text-center">Our Approach</h3>
            </AnimatedSection>
            <div className="flex flex-col lg:flex-row justify-between relative gap-8 lg:gap-4">
              {/* Desktop Line */}
              <div className="hidden lg:block absolute top-[60px] left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
              
              {approach.map((step, i) => (
                <AnimatedSection key={i} delay={0.1 + (i * 0.1)} className="flex-1">
                  <div className="flex flex-row lg:flex-col items-center lg:text-center gap-6 relative z-10">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden relative border-4 border-brand-dark shadow-xl flex-shrink-0">
                      <Image src={step.img} alt={step.title} fill className="object-cover saturate-[0.8] sepia-[0.1]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-brand-gold font-mono text-sm mb-1">{step.num}</span>
                      <h4 className="text-white text-xl font-medium mb-1">{step.title}</h4>
                      <p className="text-[#93949A] text-sm">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* 5.2 QUOTE BAND */}
          <div className="py-32 md:py-40 my-6 border-y border-white/5 relative overflow-hidden flex items-center justify-center text-center rounded-3xl w-full">
            <div className="absolute inset-0 z-0">
              <Image src="/images/capitals/quote_band.webp" alt="City Aerial" fill className="object-cover saturate-[0.7] sepia-[0.1] opacity-40 mix-blend-lighten" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/50 to-brand-dark"></div>
            </div>
            <AnimatedSection>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-white max-w-5xl mx-auto tracking-tight relative z-10 px-4">
                Capital & Asset Management with a strategic perspective.
              </h2>
            </AnimatedSection>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 6 (LIGHT BREAK): WHY RUPEE RISE CAPITAL
          ========================================================================= */}
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-4 md:px-10 border-b border-black/5">
        <div className="max-w-[1536px] mx-auto">
          <AnimatedSection>
            <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4 block">
              Value Proposition
            </p>
            <ScrollHeading 
              text="Why Rupee Rise Capital" 
              align="left"
              className="text-3xl md:text-5xl font-medium leading-tight text-brand-dark mb-12" 
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, i) => (
              <AnimatedSection key={i} delay={0.1 + (i * 0.1)} className="h-full">
                <div className="rounded-[2rem] overflow-hidden border border-black/10 relative group h-[340px] flex flex-col justify-end p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="absolute inset-0 z-0">
                    <Image src={card.img} alt={card.title} fill className="object-cover saturate-[0.85] sepia-[0.05] transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-white text-xl font-medium mb-2">{card.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 7 (DARK): WHO WE WORK WITH, CTA & FOOTER
          ========================================================================= */}
      <div className="w-full bg-brand-dark text-brand-light py-24 md:py-32 px-4 md:px-10">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-24">
          
          {/* 7.1 WHO WE WORK WITH */}
          <div ref={carouselRef} className="h-[250vh] md:h-auto relative border-t border-white/5 py-0 md:py-16">
            <div className="sticky top-32 md:static overflow-hidden md:overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 pt-24 md:pt-0">
              <AnimatedSection>
                <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12">Who We Work With</h3>
              </AnimatedSection>
              
              <motion.div 
                style={{ x }} 
                className="flex md:!transform-none gap-6 md:w-full w-[max-content]"
              >
                {whoWeWorkWith.map((item, i) => (
                  <div key={i} className="shrink-0 w-[75vw] md:w-[calc(20%-1.2rem)]">
                    <div className="rounded-[2rem] aspect-[3/4] relative overflow-hidden border border-white/5 group h-full shadow-lg">
                      <Image src={item.img} alt={item.title} fill className="object-cover transition-all duration-700 grayscale-[60%] contrast-105 brightness-[.85] group-hover:grayscale-[30%] group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-[#c7a468] mix-blend-soft-light opacity-15 pointer-events-none transition-opacity duration-700 group-hover:opacity-30"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-white font-medium">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* 7.2 CTA */}
          <div className="border-t border-white/5 pt-20 flex flex-col items-center">
            <AnimatedSection className="w-full">
              <div className="w-full relative rounded-3xl overflow-hidden py-24 md:py-32 px-8 flex flex-col items-center justify-center text-center bg-[#121317] border border-white/5 max-w-5xl mx-auto shadow-2xl">
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(214,183,122,0.15)_0%,_rgba(18,19,23,0)_70%)] pointer-events-none"></div>
                </div>
                
                <div className="relative z-10 flex flex-col items-center max-w-2xl">
                  <h2 className="text-4xl md:text-[44px] font-medium mb-6 leading-tight tracking-tight text-white">
                    Have a capital or asset opportunity?
                  </h2>
                  <p className="text-[#93949A] text-[15px] mb-12 max-w-md mx-auto leading-relaxed">
                    Tell us about your venture, asset portfolio or capital structuring requirements — our advisory desk will evaluate and connect with you.
                  </p>
                  <a href="/contact?interest=capitals">
                    <Button variant="primary" icon="arrow">Submit an Enquiry</Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* 7.3 EXPLORE OTHER VENTURES */}
          <div className="border-t border-white/5 pt-20">
            <AnimatedSection>
              <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12 text-center">Explore Other Ventures</h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Real Estate", img: "/images/dubai-night-cityscape.jpg", href: "/verticals/real-estate" },
                { title: "Investors & Portfolio", img: "/images/glowing-globe-africa-europe.jpg", href: "/verticals/investors" },
                { title: "Forex Trading Academy", img: "/images/trading-learning.jpg", href: "/verticals/learning" }
              ].map((v, i) => (
                <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                  <a href={v.href} className="block rounded-3xl h-36 relative overflow-hidden border border-white/5 group shadow-lg">
                    <Image src={v.img} alt={v.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-medium text-lg">{v.title}</span>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
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
