"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollHeadingProps {
  text: string;
  className?: string;
}

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: number[] }) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [8, 0]);
  
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {children}
    </motion.span>
  );
};

export default function ScrollHeading({ text, className = "" }: ScrollHeadingProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start 0.9" means when the top of the element hits 90% of viewport
    // "start 0.45" means when the top of the element hits 45% of viewport
    offset: ["start 0.9", "start 0.45"]
  });

  const words = text.split(" ");
  const N = words.length;
  const p = 0.4; // 40% overlap
  
  // Calculate the duration step for each word
  // Formula derived so that the last word ends exactly at progress 1.0
  const step = 1 / (N - p * (N - 1));

  return (
    <h2 ref={containerRef} className={`flex flex-wrap justify-center gap-[12px] ${className}`}>
      {words.map((word, i) => {
        const start = i * step * (1 - p);
        const end = start + step;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h2>
  );
}
