import React from 'react';

export default function Button({ children, variant = 'primary', icon }) {
  const isPrimary = variant === 'primary';
  const baseClasses = "group flex items-center gap-4 rounded-full py-1.5 px-2 pl-6 text-[10px] uppercase font-bold tracking-[0.18em] transition-all hover:scale-105 duration-300";
  
  const primaryClasses = "bg-brand-gold text-brand-dark hover:brightness-110";
  const secondaryClasses = "bg-transparent text-brand-light border border-white/20 hover:bg-white/5";

  const iconCirclePrimary = "bg-brand-dark flex items-center justify-center w-6 h-6 rounded-full overflow-hidden";
  const iconCircleSecondary = "bg-white/10 flex items-center justify-center w-6 h-6 rounded-full overflow-hidden";

  return (
    <button className={`${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses}`}>
      <span>{children}</span>
      <div className={isPrimary ? iconCirclePrimary : iconCircleSecondary}>
        {icon === 'play' ? (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-110">
            <path d="M6 4L20 12L6 20Z" fill="currentColor" className={isPrimary ? "text-brand-gold" : "text-brand-gold"} />
          </svg>
        ) : icon === 'arrow' ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:rotate-45">
            <path d="M7 17L17 7M17 7H7M17 7V17" className={isPrimary ? "text-brand-gold" : "text-brand-gold"} />
          </svg>
        ) : icon === 'calendar' ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" className={isPrimary ? "text-brand-gold" : "text-brand-gold"}></rect>
            <line x1="16" y1="2" x2="16" y2="6" className={isPrimary ? "text-brand-gold" : "text-brand-gold"}></line>
            <line x1="8" y1="2" x2="8" y2="6" className={isPrimary ? "text-brand-gold" : "text-brand-gold"}></line>
            <line x1="3" y1="10" x2="21" y2="10" className={isPrimary ? "text-brand-gold" : "text-brand-gold"}></line>
          </svg>
        ) : null}
      </div>
    </button>
  );
}
