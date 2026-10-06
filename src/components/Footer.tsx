"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instrument_Sans } from 'next/font/google';

const instrumentSans = Instrument_Sans({ subsets: ['latin'] });

const letterVariants: any = {
  animate: (i: number) => ({
    textShadow: [
      "0px 0px 0px rgba(199,164,104,0)",
      "0px 0px 40px rgba(199,164,104,0.4)",
      "0px 0px 0px rgba(199,164,104,0)"
    ],
    opacity: [0.03, 0.1, 0.03],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.2
    }
  })
};

export default function Footer() {
  return (
    <footer className="w-full pt-16 md:pt-24 border-t border-white/5 mt-12 flex flex-col relative overflow-hidden bg-brand-dark">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full max-w-[1310px] mx-auto px-8 mb-16 relative z-10">
        
        {/* Column 1 - Logo and Info */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Image 
            src="/images/Logo.png" 
            alt="RupeeRise Ventures" 
            width={180} 
            height={40} 
            className="object-contain"
          />
          <p className="text-white/60 text-[13px] leading-relaxed max-w-[280px]">
            A multi-business venture ecosystem built around finance, strategy and growth.
          </p>
          <div className="flex items-center gap-3 text-white/70 mt-2">
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                <path d="M2 4l10 8 10-8"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Columns 2, 3, 4 */}
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-[#c7a468] mb-1">Navigate</h5>
            <a href="/about" className="text-[13px] text-white hover:text-brand-gold transition-colors">About</a>
            <a href="/#verticals" className="text-[13px] text-white hover:text-brand-gold transition-colors">Verticals</a>
            <a href="#" className="text-[13px] text-white hover:text-brand-gold transition-colors">FAQ</a>
            <a href="/contact" className="text-[13px] text-white hover:text-brand-gold transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-[#c7a468] mb-1">Ventures</h5>
            <a href="/verticals/capital" className="text-[13px] text-white hover:text-brand-gold transition-colors">Capital</a>
            <a href="/verticals/real-estate" className="text-[13px] text-white hover:text-brand-gold transition-colors">Real Estate</a>
            <a href="/verticals/investors" className="text-[13px] text-white hover:text-brand-gold transition-colors">Investors</a>
            <a href="/verticals/learning" className="text-[13px] text-white hover:text-brand-gold transition-colors">Learning</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] uppercase tracking-widest font-bold text-[#c7a468] mb-1">Contact</h5>
            <span className="text-[13px] text-white">+917736680099</span>
            <span className="text-[13px] text-white">info@rupeerise.com</span>
            <span className="text-[13px] text-white mt-1">Kochi • Trivandrum • Hyderabad • Bangalore</span>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="w-full max-w-[1310px] mx-auto px-8 relative z-10 border-t border-white/5 pt-8 mb-4">
        <p className="text-white/40 text-[11px]">
          © 2026 RupeeRise. All rights reserved.
        </p>
      </div>

      <div className="w-full flex justify-center relative z-0 mt-8">
        <h1 className={`text-[15vw] font-bold tracking-normal leading-none pointer-events-none select-none flex ${instrumentSans.className}`}>
          {"RupeeRise".split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              animate="animate"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>
    </footer>
  );
}
