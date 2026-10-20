"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function CaseStudy() {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      title: "Financial Assessment",
      desc: "Review revenue, operating costs, cash flow and working-capital requirements.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      tag: "Audit & Cash Flow"
    },
    {
      title: "Capital Planning",
      desc: "Estimate funding needs based on the proposed expansion and its financial assumptions.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      tag: "Runway & Modeling"
    },
    {
      title: "Risk Evaluation",
      desc: "Consider operational challenges, cash-flow constraints and downside scenarios.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      tag: "Stress Testing"
    },
    {
      title: "Growth Strategy",
      desc: "Establish priorities and define practical next steps for implementation.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      tag: "Execution Roadmap"
    }
  ];

  const approachSteps = [
    {
      num: "01",
      name: "Understand",
      detail: "Establish the business objectives, current position and expansion requirements.",
      badge: "Foundational Clarity"
    },
    {
      num: "02",
      name: "Evaluate",
      detail: "Assess available information, financial assumptions and potential risks.",
      badge: "Rigorous Audit"
    },
    {
      num: "03",
      name: "Strategise",
      detail: "Develop a structured plan around capital requirements and growth priorities.",
      badge: "Capital Structuring"
    },
    {
      num: "04",
      name: "Review",
      detail: "Identify key considerations to monitor as the business progresses.",
      badge: "Continuous Governance"
    }
  ];

  return (
    <section className="w-full flex flex-col gap-12 py-10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[350px] bg-brand-gold/5 blur-[120px] pointer-events-none rounded-full"></div>

      {/* Header Container */}
      <div className="flex flex-col gap-5 max-w-4xl">
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-brand-gold/10 text-brand-gold border border-brand-gold/30 shadow-[0_0_15px_rgba(199,164,104,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              CASE STUDY 01
            </span>
            <span className="text-xs tracking-wider uppercase text-white/40 font-medium">
              RUPEE RISE VENTURES &bull; CAPITALS
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium leading-[1.12] tracking-tight text-white">
            Strategic Capital Planning for Business Growth
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl font-light">
            A real-world advisory blueprint highlighting how disciplined financial analysis, capital structuring, and risk evaluation unlock sustainable multi-stage expansion.
          </p>
        </AnimatedSection>
      </div>

      {/* Main Grid: The Challenge vs The Strategy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: The Challenge (5 Cols) */}
        <AnimatedSection delay={0.2} direction="left" className="lg:col-span-5 h-full">
          <div className="relative h-full flex flex-col justify-between bg-gradient-to-b from-[#131519] to-[#0c0d10] border border-white/10 hover:border-brand-gold/30 rounded-3xl p-8 md:p-10 transition-all duration-500 overflow-hidden group shadow-2xl">
            
            {/* Subtle Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f59e0b]/50 to-transparent"></div>

            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                  The Challenge
                </span>
                <span className="text-[11px] text-white/30 font-mono tracking-wider">
                  DIAGNOSTIC
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-medium text-white mb-6 leading-snug">
                Balancing expansion ambition with financial reality.
              </h3>

              <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 mb-8">
                <div className="text-brand-gold/30 text-4xl font-serif absolute -top-3 left-4 leading-none select-none">
                  “
                </div>
                <p className="text-white/80 text-sm md:text-[15px] leading-relaxed italic pl-3">
                  A growing business is ready to expand but needs a clearer understanding of its financial position, capital requirements and potential risks before committing to its next stage of growth.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-white/40 font-semibold">
                  Key Diagnostic Factors:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">
                    Operating Cash Flow Gaps
                  </span>
                  <span className="text-[11px] px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">
                    Unverified Valuation Expectations
                  </span>
                  <span className="text-[11px] px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70">
                    Downside Runway Exposure
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/40">Case Focus</span>
              <span className="text-xs font-medium text-brand-gold">Sustainable Scaling</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Column: The Strategy (7 Cols) */}
        <AnimatedSection delay={0.25} direction="right" className="lg:col-span-7 h-full">
          <div className="h-full flex flex-col justify-between bg-[#111216] border border-white/10 hover:border-brand-gold/30 rounded-3xl p-8 md:p-10 transition-all duration-500 shadow-2xl relative overflow-hidden">
            
            {/* Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
                  The Strategy
                </span>
                <span className="text-[11px] text-white/30 font-mono tracking-wider">
                  4-PILLAR FRAMEWORK
                </span>
              </div>

              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 font-light">
                A structured approach to evaluating the business opportunity, understanding financial requirements and identifying practical priorities.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-[#16181d] border border-white/5 hover:border-brand-gold/40 hover:bg-[#1a1c22] transition-all duration-300 flex flex-col justify-between group/card"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover/card:bg-brand-gold/10 group-hover/card:scale-110 transition-all duration-300">
                          {pillar.icon}
                        </div>
                        <span className="text-[10px] text-brand-gold/70 font-mono uppercase tracking-wider">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-2 group-hover/card:text-brand-gold transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5">
                      <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
              <span>Methodology: Fundamentals-Driven</span>
              <span className="text-brand-gold font-medium">Rupee Rise Capitals</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* The Approach: 01 to 04 Process Flow */}
      <AnimatedSection delay={0.3}>
        <div className="w-full bg-[#111216] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <p className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                EXECUTION ARCHITECTURE
              </p>
              <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                The Approach
              </h3>
            </div>
            <p className="text-white/50 text-xs md:text-sm max-w-md md:text-right font-light">
              Four sequential milestones designed to eliminate blind spots, align leadership, and deliver structured expansion capital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[220px] group cursor-pointer ${
                  activeStep === idx 
                    ? "bg-[#181a20] border-brand-gold/60 shadow-[0_4px_25px_rgba(199,164,104,0.12)] -translate-y-1" 
                    : "bg-[#141519] border-white/5 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl md:text-5xl font-light text-brand-gold font-sans leading-none tracking-tight">
                      {step.num}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 px-2 py-0.5 rounded bg-white/5">
                      Stage {step.num}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-white mb-2 group-hover:text-brand-gold transition-colors">
                    {step.name}
                  </h4>

                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-brand-gold/80 tracking-wide">
                    {step.badge}
                  </span>
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`transition-transform duration-300 ${activeStep === idx ? 'text-brand-gold translate-x-1' : 'text-white/20'}`}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Bottom Split: The Key Takeaway & The Rupee Rise Perspective */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: The Key Takeaway */}
        <AnimatedSection delay={0.35} direction="left">
          <div className="h-full bg-gradient-to-br from-[#131417] to-[#0c0d0f] border border-white/10 hover:border-brand-gold/30 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-xl">
            
            {/* Watermark Quote Icon */}
            <div className="absolute top-4 right-6 text-white/[0.03] select-none pointer-events-none font-serif text-8xl leading-none">
              “
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">
                  CORE INSIGHT
                </span>
                <div className="h-px w-8 bg-brand-gold/30"></div>
              </div>

              <h4 className="text-xl md:text-2xl font-medium text-white mb-4">
                The Key Takeaway
              </h4>

              <blockquote className="text-white/80 text-base md:text-lg leading-relaxed font-light italic border-l-2 border-brand-gold pl-4 py-1">
                “Sustainable growth requires more than ambition. It requires a clear understanding of financial resources, realistic planning and informed decisions.”
              </blockquote>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/40">Capital Principle</span>
              <span className="text-xs text-brand-gold font-medium">Calculated Scale</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Card 2: The Rupee Rise Perspective */}
        <AnimatedSection delay={0.4} direction="right">
          <div className="h-full bg-gradient-to-br from-[#16171d] via-[#141519] to-[#12110e] border border-brand-gold/30 hover:border-brand-gold/60 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-xl">
            
            {/* Subtle Gold Shimmer on Top */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">
                  VENTURE PHILOSOPHY
                </span>
                <div className="h-px w-8 bg-brand-gold/30"></div>
              </div>

              <h4 className="text-xl md:text-2xl font-medium text-white mb-4">
                The Rupee Rise Perspective
              </h4>

              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed font-light mb-8">
                At Rupee Rise Ventures, we believe that every opportunity deserves a thoughtful strategy. Our approach emphasises clarity, responsible planning and a long-term perspective on business growth.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold text-xs font-bold">
                  RR
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-white">Strategic Capital Advisory</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider">Rupee Rise Ventures</span>
                </div>
              </div>

              <Link 
                href="/verticals/capital"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold text-brand-dark text-xs font-bold uppercase tracking-wider hover:bg-brand-gold/90 transition-all hover:scale-105"
              >
                <span>Explore Capitals</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>

    </section>
  );
}
