"use client";
import React from 'react';
import Button from './Button';
import Image from 'next/image';

import AnimatedSection from './AnimatedSection';

import { motion } from 'framer-motion';

const customVariants = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0 }
};

const transitionProps = {
  duration: 1.1,
  ease: [0.45, 0, 0.25, 1]
};

export default function FeatureGrid() {
  return (
    <section className="w-full flex flex-col gap-6">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Left Large Card */}
        <AnimatedSection delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] p-10 flex flex-col justify-end group bg-[#0a0b0d] border border-white/5 h-full">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/Wave.jpg"
                alt="Abstract waves"
                fill
                className="object-cover object-left-bottom transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 mt-auto">
              <p className="text-white/80 text-xs mb-2 font-medium">
                Commitment to measurable
              </p>
              <h3 className="text-6xl font-medium text-brand-gold">100%</h3>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Content */}
        <div className="p-8 md:p-10 rounded-3xl bg-transparent flex flex-col justify-center h-full">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
            variants={customVariants} transition={{ ...transitionProps, delay: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">
              ABOUT US
            </p>
            <div className="h-px w-12 bg-brand-gold"></div>
          </motion.div>
          
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
            variants={customVariants} transition={{ ...transitionProps, delay: 0.08 }}
            className="text-4xl md:text-5xl font-medium mb-6 leading-[1.15] tracking-tight"
          >
            More than a venture.<br />
            An ecosystem for growth.
          </motion.h2>
          
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
            variants={customVariants} transition={{ ...transitionProps, delay: 0.16 }}
            className="text-white/70 text-sm leading-relaxed mb-8 max-w-[90%]"
          >
            Rupee Rise Ventures is a multi-business venture company built around finance, strategy and growth. We bring together capital, opportunities, businesses and knowledge across multiple verticals, with a focus on identifying potential and creating long-term value. From capital and real estate to investor solutions and learning, our businesses are connected by one common approach — think strategically, act with purpose and build for sustainable growth.
          </motion.p>
          
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
            variants={customVariants} transition={{ ...transitionProps, delay: 0.24 }}
          >
            <Button variant="primary" icon="arrow">GET STARTED</Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Row - 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        
        {/* Card 1 */}
        <AnimatedSection delay={0.1}>
          <div className="bg-[#0a0b0d] p-8 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[260px] h-full">
            <div>
              <p className="text-brand-gold text-[9px] uppercase tracking-widest font-bold mb-6">DATA POINTS</p>
              <h4 className="text-4xl text-brand-gold font-medium">520k+</h4>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-[90%]">
              Analyzed monthly to power smarter business strategies.
            </p>
          </div>
        </AnimatedSection>

        {/* Card 2 */}
        <AnimatedSection delay={0.2}>
          <div className="bg-[#0a0b0d] p-8 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[260px] h-full">
            <div>
              <p className="text-white/40 text-[9px] uppercase tracking-widest font-bold mb-6">PARTNERSHIPS</p>
              <h4 className="text-4xl text-brand-gold font-medium">120+</h4>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-[90%]">
              Collaborating with leading AI and cloud technology providers.
            </p>
          </div>
        </AnimatedSection>

        {/* Card 3 (Quote + Avatars) */}
        <AnimatedSection delay={0.3}>
          <div className="bg-[#0a0b0d] p-8 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[260px] h-full">
            <p className="text-white/80 text-sm leading-relaxed">
              "Their automation strategy completely reshaped how we work. It's efficient, intelligent, and seamless."
            </p>
            <div className="flex items-center -space-x-2 mt-6">
              {['/images/woman-smiling-over-shoulder.jpg', '/images/man-smiling-sweater.jpg', '/images/woman-high-key-portrait.jpg', '/images/woman-smiling-long-hair.jpg'].map((img, i) => (
                <div key={i} className="w-6 h-6 rounded-full relative overflow-hidden bg-[#1c1d20] border border-white/10 z-10">
                  <Image src={img} alt="Avatar" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Card 4 */}
        <AnimatedSection delay={0.4}>
          <div className="bg-[#0a0b0d] p-8 rounded-3xl border border-white/5 flex flex-col justify-between min-h-[260px] h-full">
            <div>
              <p className="text-brand-gold text-[9px] uppercase tracking-widest font-bold mb-6">CONTINENTS</p>
              <h4 className="text-4xl text-brand-gold font-medium">20+</h4>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-[90%]">
              Teams and clients across every major market.
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
