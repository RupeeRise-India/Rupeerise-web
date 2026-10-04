import React from 'react';
import AnimatedSection from './AnimatedSection';
import PatternWaves from './PatternWaves';

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  footerText?: string;
  size?: 'large' | 'small';
}

export default function PageHero({ label, title, description, footerText, size = 'large' }: PageHeroProps) {
  const isLarge = size === 'large';
  
  return (
    <div className={`w-full bg-[#121317] rounded-3xl overflow-hidden relative p-8 md:p-12 ${isLarge ? 'lg:p-24 min-h-[60vh] md:min-h-[70vh]' : 'lg:p-16 min-h-[40vh]'} mt-4 border border-white/5 flex flex-col`}>
      <div className="absolute inset-0 z-0 animate-image-appear">
        <PatternWaves preset="ocean" direction={70} color="#d6b77a" backgroundColor="#000000" opacity={isLarge ? 0.6 : 0.4} />
      </div>
      
      <div className={`relative z-10 flex flex-col h-full justify-between gap-12 pointer-events-none ${isLarge ? 'gap-24' : ''}`}>
        <div className="pointer-events-auto">
          <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-8 animate-enter" style={{ animationDelay: '0s' }}>
            {label}
          </p>
          <div className={`flex flex-col lg:flex-row ${isLarge ? 'gap-12 lg:gap-24 justify-between items-start' : 'gap-8'}`}>
            <h1 className={`font-medium leading-[1.1] tracking-tight text-white ${isLarge ? 'text-4xl md:text-5xl lg:text-[64px] max-w-3xl' : 'text-3xl md:text-4xl lg:text-5xl max-w-2xl'}`}>
              {title}
            </h1>
            {description && (
              <div className={`text-[#93949A] text-[15px] leading-relaxed mt-4 lg:mt-0 animate-enter ${isLarge ? 'max-w-md' : 'max-w-lg'}`} style={{ animationDelay: '0.35s' }}>
                {description}
              </div>
            )}
          </div>
        </div>
        
        {footerText && (
          <div className="pt-8 border-t border-white/10 animate-enter" style={{ animationDelay: '0.45s' }}>
            <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-bold pointer-events-auto">
              {footerText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
