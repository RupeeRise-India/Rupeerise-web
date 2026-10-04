"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

const INTERESTS = [
  { id: 'capitals', label: 'Capitals' },
  { id: 'real-estate-india', label: 'Real Estate – India' },
  { id: 'real-estate-dubai', label: 'Real Estate – Dubai' },
  { id: 'investors', label: 'Investors & Portfolio' },
  { id: 'consulting', label: 'Business Consulting' },
  { id: 'learning', label: 'Learning' },
  { id: 'other', label: 'Other' },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [selectedInterest, setSelectedInterest] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const interest = searchParams.get('interest');
    if (interest && INTERESTS.find(i => i.id === interest)) {
      setSelectedInterest(interest);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <AnimatedSection delay={0.1}>
        <div className="bg-[#121317] border border-white/5 rounded-3xl p-8 md:p-12 h-full flex flex-col items-center justify-center text-center min-h-[500px]">
          <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5l10 -10"></path></svg>
          </div>
          <h3 className="text-2xl text-white font-medium mb-4">Enquiry Received</h3>
          <p className="text-[#93949A] text-[15px] leading-relaxed max-w-sm">
            Thank you — we've received your enquiry and the right person from our team will be in touch shortly.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="mt-8 text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
          >
            Send another message
          </button>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#121317] border border-white/5 rounded-3xl p-8 md:p-12 h-full flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold ml-4">Full Name*</label>
          <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-colors placeholder:text-white/20" placeholder="Jane Doe" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold ml-4">Email*</label>
          <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-colors placeholder:text-white/20" placeholder="jane@company.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold ml-4">Phone*</label>
          <input required type="tel" defaultValue="+91 " className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-colors placeholder:text-white/20" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold ml-4">Company / Organisation</label>
          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-colors placeholder:text-white/20" placeholder="Optional" />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold ml-4">Area of Interest</label>
        <div className="flex flex-wrap gap-3">
          {INTERESTS.map(interest => (
            <button
              key={interest.id}
              type="button"
              onClick={() => setSelectedInterest(interest.id)}
              className={`px-5 py-2.5 rounded-full border text-[12px] font-medium transition-colors ${
                selectedInterest === interest.id 
                  ? 'bg-brand-gold border-brand-gold text-black' 
                  : 'border-white/10 text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              {interest.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <label className="text-[10px] text-white/50 uppercase tracking-widest font-bold ml-4">Message*</label>
        <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-[24px] px-6 py-5 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-colors placeholder:text-white/20 resize-none" placeholder="Tell us briefly what you're looking for."></textarea>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 justify-between">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`h-[52px] px-8 rounded-full bg-[#d6b77a] text-black text-[13px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 flex items-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'SENDING...' : 'SEND ENQUIRY'}
        </button>
        <p className="text-[11px] text-[#93949A] leading-relaxed max-w-[280px] sm:text-right">
          By submitting, you agree to be contacted by Rupee Rise Ventures regarding your enquiry.
        </p>
      </div>
    </form>
  );
}
