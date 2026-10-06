"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const customVariants = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0 }
};

const transitionProps: any = {
  duration: 1.1,
  ease: [0.45, 0, 0.25, 1]
};

const Counter = ({ end, decimals = 0, prefix = "", suffix = "" }: { end: number, decimals?: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startTime: number | null = null;
        const duration = 1200; // Fast counting
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(ease * end);
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        requestAnimationFrame(step);
        // Do not disconnect if we want replay ability, but counting is usually once, or we can restart it. 
        // Let's keep the counter once for now, or remove disconnect to replay counting.
        // Removing disconnect to allow recounting on scroll
      } else {
        // Reset counter when out of view
        setCount(0);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default function Stats() {
  const stats = [
    { end: 4.2, decimals: 1, prefix: "₹", suffix: "M", label: "assets under advisory" },
    { end: 3, decimals: 0, prefix: "", suffix: " yrs", label: "average partner tenure" },
    { end: 31, decimals: 0, prefix: "", suffix: "", label: "engagements delivered in 2025" },
    { end: 94, decimals: 0, prefix: "", suffix: "%", label: "of clients return within a year" }
  ];

  return (
    <section className="w-full bg-[#131416] rounded-[32px] p-8 md:p-12 border border-white/5">
      <motion.h3 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
        variants={customVariants} transition={{ ...transitionProps, delay: 0 }}
        className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-6"
      >
        SELECTED FIGURES · 2026
      </motion.h3>
      
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
        variants={customVariants} transition={{ ...transitionProps, delay: 0.08 }}
        className="w-full h-px bg-white/5 mb-8"
      ></motion.div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}
            variants={customVariants} transition={{ ...transitionProps, delay: 0.16 + (i * 0.08) }}
            className="flex flex-col"
          >
            <div className="text-3xl md:text-4xl text-white font-medium mb-3">
              <Counter 
                end={stat.end} 
                decimals={stat.decimals} 
                prefix={stat.prefix} 
                suffix={stat.suffix} 
              />
            </div>
            <span className="text-[11px] text-white/50">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
