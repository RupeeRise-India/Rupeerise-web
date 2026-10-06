"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import AnimatedSection from './AnimatedSection';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What sets Rupee Rise apart from typical VC?",
      a: "We look beyond immediate opportunities and consider the broader business and market context. Our connected ecosystem provides exposure to knowledge, businesses, markets and opportunities across multiple verticals."
    },
    {
      q: "How does the ecosystem approach benefit founders?",
      a: "It helps create the conditions for sustainable growth. Our focus is on actionable strategies, giving founders exposure across capital, real estate, and business consulting to build long-term value."
    },
    {
      q: "Do you invest outside the UAE or primarily locally?",
      a: "With a presence and market focus across India and Dubai, our verticals connect property and business opportunities with buyers, investors and partners across these dynamic and internationally relevant markets."
    },
    {
      q: "How quickly do you close investment rounds?",
      a: "We follow a systematic approach (Discover → Analyse → Strategise → Execute). While timelines vary, our focus is always on rigorous evaluation and structured execution rather than relying on guesswork."
    }
  ];

  return (
    <section className="w-full bg-[#131416] border border-white/5 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
        <Image src="/images/translucent-yellow-circles.png" alt="FAQ Background" fill className="object-cover" />
      </div>
      
      <div className="relative z-10 lg:w-1/3 flex flex-col">
        <AnimatedSection delay={0.1}>
          <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4">
            Open Communication
          </p>
          <h2 className="text-3xl md:text-4xl font-medium mb-4 leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-white/50 text-sm">
            Everything you need to know about our methodology, structure, and strategy.
          </p>
        </AnimatedSection>
      </div>

      <div className="relative z-10 lg:w-2/3 flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <AnimatedSection key={idx} delay={0.1 + idx * 0.1} direction="left">
            <div 
              className="w-full bg-[#1e1f22] rounded-xl cursor-pointer hover:bg-[#25272a] transition-colors border border-white/5 overflow-hidden"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="p-6 flex items-center justify-between">
                <span className="text-sm font-medium pr-8">{faq.q}</span>
                <motion.span 
                  className="text-brand-gold text-lg leading-none"
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  +
                </motion.span>
              </div>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-white/60 text-[13px] leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
