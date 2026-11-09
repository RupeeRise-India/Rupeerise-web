"use client";
import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Reserve the header's in-flow space so page content doesn't jump under the fixed header.
  // Measured at the top-of-page (un-compacted) size.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => {
      if (window.scrollY <= 10) setHeaderHeight(el.offsetHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    let lastY = Math.max(window.scrollY, 0);
    let ticking = false;
    const DELTA = 6;

    const update = () => {
      ticking = false;
      const y = Math.max(window.scrollY, 0); // clamp iOS overscroll bounce
      const threshold = headerRef.current?.offsetHeight ?? 100;

      setIsScrolled(y > 10);

      if (y <= threshold) {
        setIsHidden(false);
      } else if (y - lastY > DELTA) {
        setIsHidden(true);
      } else if (lastY - y > DELTA) {
        setIsHidden(false);
      } else {
        return; // ignore tiny jitters without updating lastY
      }
      lastY = y;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Capitals", href: "/verticals/capital" },
    { name: "Real Estate", href: "/verticals/real-estate" },
    { name: "Portfolio Management", href: "/verticals/investors" },
    { name: "Learning", href: "/verticals/learning" },
  ];

  return (
    <>
      {/* Spacer keeps layout identical to the old in-flow header */}
      <div
        aria-hidden="true"
        className="w-full h-[82px] sm:h-[103px] shrink-0"
        style={headerHeight ? { height: headerHeight } : undefined}
      />

      <header
        ref={headerRef}
        className={`fixed top-0 inset-x-0 z-50 transition-[transform,background-color,box-shadow] duration-300 ease-out motion-reduce:transition-none will-change-transform ${
          isHidden && !isOpen ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled && !isOpen
            ? 'bg-brand-dark/85 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]'
            : 'bg-transparent'
        }`}
      >
       <div
        className={`w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between transition-[padding] duration-300 ease-out ${
          isScrolled ? 'py-4 sm:py-5' : 'py-6 sm:py-8'
        }`}
       >
        <div className="flex-1 flex items-center">
          <Link href="/" className="inline-block">
            <Image 
              src="/images/Logo.png" 
              alt="RupeeRise Ventures" 
              width={180} 
              height={40} 
              className="object-contain w-36 sm:w-44 h-auto"
              priority
            />
          </Link>
        </div>
        
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-6 text-[10px] uppercase tracking-[0.15em] font-bold text-brand-gold whitespace-nowrap">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
          ))}
        </nav>

        <div className="flex-1 flex items-center justify-end gap-4">
           <div className="hidden lg:block">
             <a href="/contact">
               <Button variant="secondary" icon="arrow">Contact Us</Button>
             </a>
           </div>
           
           {/* Hamburger Icon */}
           <button 
             className="lg:hidden text-white flex flex-col gap-1.5 p-2 z-[60] relative"
             onClick={() => setIsOpen(!isOpen)}
             aria-label="Toggle Menu"
             aria-expanded={isOpen}
           >
             <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
             <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
             <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
           </button>
        </div>
       </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-dark flex flex-col items-center justify-center p-6 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 text-sm uppercase tracking-[0.15em] font-bold text-brand-gold">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8" onClick={() => setIsOpen(false)}>
                <a href="/contact">
                  <Button variant="secondary" icon="arrow">Contact Us</Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
