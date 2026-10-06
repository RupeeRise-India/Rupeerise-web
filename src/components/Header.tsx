"use client";
import React, { useState, useEffect } from 'react';
import Button from './Button';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
    { name: "Capital", href: "/verticals/capital" },
    { name: "Real Estate", href: "/verticals/real-estate" },
    { name: "Investors", href: "/verticals/investors" },
    { name: "Learning", href: "/verticals/learning" },
  ];

  return (
    <>
      <header className="w-full py-8 flex items-center justify-between z-50 relative px-4 md:px-0">
        <div className="flex-1 flex items-center">
          <Image 
            src="/images/Logo.png" 
            alt="RupeeRise Ventures" 
            width={180} 
            height={40} 
            className="object-contain"
          />
        </div>
        
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-6 text-[10px] uppercase tracking-[0.15em] font-bold text-brand-gold whitespace-nowrap">
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
           >
             <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
             <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
             <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
           </button>
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
