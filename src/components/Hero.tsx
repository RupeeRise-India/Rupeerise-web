"use client";
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  // Adjust this number (in pixels) to move the entire text section horizontally.
  // Positive numbers move it to the right, negative numbers move it to the left.
  const textHorizontalOffset = 25;
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        // Calculate a subtle scale down based on scroll position
        const scrollY = window.scrollY;
        // Start at scale 1.05 (zoomed in slightly) and scale down to exactly 1.0
        const scale = Math.max(1, 1.05 - scrollY * 0.00015);
        bgRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden flex flex-col justify-center min-h-[560px] sm:min-h-[600px] md:min-h-[720px] p-6 sm:p-8 md:px-12 lg:px-16 lg:py-20 mt-2">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 origin-top" ref={bgRef} style={{ transform: 'scale(1.05)' }}>
        <Image
          src="/images/Dark-Skyline.png"
          alt="Dubai Skyline"
          fill
          className="object-cover object-center animate-image-appear"
          priority
        />
        {/* Subtle gradient for text readability blending naturally with the pillar */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] bg-gradient-to-r from-[#0a0b0d]/90 via-[#0a0b0d]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[650px] md:translate-x-[25px]">
        <div className="flex items-center gap-3 mb-4 animate-enter" style={{ animationDelay: '0s' }}>
          <div className="h-px w-8 bg-brand-gold"></div>
          <p className="text-brand-gold text-[11px] font-semibold tracking-wider">
            A Multi-Business Venture Ecosystem
          </p>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-[84px] font-normal tracking-tight mb-6 leading-[1.08] sm:leading-[1.05]">
          <span className="inline-block animate-enter-word" style={{ animationDelay: '0.05s' }}>Rupee</span>{' '}
          <span className="inline-block animate-enter-word" style={{ animationDelay: '0.085s' }}>Rise</span> <br /> 
          <span className="inline-block animate-enter-word" style={{ animationDelay: '0.12s' }}>Ventures</span>
        </h1>

        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-brand-gold text-[11px] sm:text-[12px] uppercase tracking-widest font-bold mb-6 animate-enter" style={{ animationDelay: '0.2s' }}>
          <span>Finance</span>
          <span className="text-[12px] opacity-80">•</span>
          <span>Strategy</span>
          <span className="text-[12px] opacity-80">•</span>
          <span>Growth</span>
        </div>

        <p className="text-white/80 text-sm leading-relaxed max-w-[550px] mb-8 pr-2 sm:pr-4 animate-enter" style={{ animationDelay: '0.3s' }}>
          Building a diverse ecosystem of businesses, capital and opportunities —<br className="hidden md:block" /> across capital, real estate, investment management and learning.
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-5 animate-enter" style={{ animationDelay: '0.4s' }}>
          <Link href="#verticals">
            <Button variant="secondary" icon="arrow">Explore Verticals</Button>
          </Link>
          <Link href="/contact">
            <Button variant="primary" icon="arrow">Get Started</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
