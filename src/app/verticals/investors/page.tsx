'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import Button from '@/components/Button';

// Dummy Form for Investors
function InvestorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-[#121317] border border-brand-gold/30 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 border border-brand-gold/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"></path></svg>
        </div>
        <h3 className="text-2xl text-white font-medium mb-4">Thank you for your enquiry</h3>
        <p className="text-[#93949A] text-sm">A specialist from our team will contact you shortly to discuss your requirements.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#121317] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col gap-6">
      <h3 className="text-2xl text-white font-medium mb-4">Request a Consultation</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Full Name *</label>
          <input required type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Email Address *</label>
          <input required type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Phone Number *</label>
          <input required type="tel" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Service Required *</label>
          <select required className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none">
            <option value="" disabled selected>Select a service</option>
            <option value="portfolio">Portfolio Management</option>
            <option value="consulting">Business Consulting</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Investment Horizon</label>
        <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none">
          <option value="" disabled selected>Select timeline</option>
          <option value="short">Short Term (1-3 years)</option>
          <option value="medium">Medium Term (3-7 years)</option>
          <option value="long">Long Term (7+ years)</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Message (Optional)</label>
        <textarea rows={3} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors"></textarea>
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="mt-4 w-full h-[52px] bg-white text-brand-dark rounded-full font-bold tracking-widest text-[12px] uppercase hover:bg-brand-gold hover:text-white transition-colors disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit Enquiry'}
      </button>
    </form>
  );
}

export default function InvestorsPage() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'consulting'>('portfolio');

  const heroTitle = (
    <>
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.05s' }}>Invest</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.08s' }}>with</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.11s' }}>strategy.</span>{' '}
      <br />
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.14s' }}>Manage</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.17s' }}>with</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.20s' }}>discipline.</span>
    </>
  );

  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col items-center">
      <div className="w-full max-w-[1536px] px-4 md:px-10 mx-auto flex flex-col pb-24">
        <Header />

        {/* HERO */}
        <PageHero 
          label="Investors & Portfolio Management"
          title={heroTitle}
          description="A structured approach to managing investments and building businesses."
          size="large"
        />

        {/* INTRO */}
        <div className="py-24 md:py-32 border-b border-white/5 text-center max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white mb-6">Combining financial expertise with business strategy.</h2>
            <p className="text-[#93949A] text-lg leading-relaxed">
               We bring together wealth management principles and strategic business consulting to provide a comprehensive approach for investors, families and enterprises.
            </p>
          </AnimatedSection>
        </div>

        {/* TWO EXPERTISES (SIGNATURE) */}
        <div className="py-24 md:py-32 border-b border-white/5">
          <AnimatedSection>
             <h2 className="text-3xl md:text-5xl font-medium text-center text-white mb-20">Two expertises.<br/>One strategic approach.</h2>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row relative">
            {/* Gold Line Divider (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/50 to-transparent transform -translate-x-1/2"></div>
            
            {/* Wealth */}
            <div className="md:w-1/2 p-8 md:p-16 flex flex-col items-center text-center">
              <AnimatedSection delay={0.1}>
                 <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4">Wealth</h3>
                 <h4 className="text-3xl font-medium text-white mb-10">Portfolio Management</h4>
                 <ul className="flex flex-col gap-4 text-[#93949A]">
                   {['Portfolio Management', 'Investment Strategy', 'Asset Allocation', 'Risk Management', 'Portfolio Review'].map(item => (
                     <li key={item} className="text-lg">{item}</li>
                   ))}
                 </ul>
              </AnimatedSection>
            </div>

            {/* Business */}
            <div className="md:w-1/2 p-8 md:p-16 flex flex-col items-center text-center">
              <AnimatedSection delay={0.2}>
                 <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4">Business</h3>
                 <h4 className="text-3xl font-medium text-white mb-10">Business Consulting</h4>
                 <ul className="flex flex-col gap-4 text-[#93949A]">
                   {['Business Setup', 'Strategy', 'Financial Planning', 'Market Positioning', 'Growth & Expansion'].map(item => (
                     <li key={item} className="text-lg">{item}</li>
                   ))}
                 </ul>
              </AnimatedSection>
            </div>
          </div>
          
          <AnimatedSection delay={0.3}>
             <p className="text-center text-xl text-white/80 mt-16 italic font-serif">"Building wealth and building businesses."</p>
          </AnimatedSection>
        </div>

        {/* DETAILED SECTIONS */}
        <div className="py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
           <AnimatedSection>
             <div className="bg-[#121317] border border-white/5 rounded-3xl p-10 h-full flex flex-col">
                <h3 className="text-2xl text-white font-medium mb-4">A structured approach to managing investments.</h3>
                <p className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-10">Protect. Manage. Grow.</p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                   {['Equity', 'Fixed Income', 'Real Estate', 'Alternative Investments', 'Mutual Funds', 'Bonds', 'Structured Products', 'Global Assets'].map(item => (
                     <div key={item} className="flex items-center gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                       <span className="text-white/70 text-sm">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
           </AnimatedSection>

           <AnimatedSection delay={0.2}>
             <div className="bg-[#121317] border border-white/5 rounded-3xl p-10 h-full flex flex-col">
                <h3 className="text-2xl text-white font-medium mb-4">From business idea to sustainable growth.</h3>
                <p className="text-brand-gold text-sm font-bold tracking-widest uppercase mb-10">End-to-end Consulting</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                   {['Market Entry', 'Financial Modeling', 'Operational Efficiency', 'Scaling', 'M&A Advisory', 'Restructuring', 'Capital Raising', 'Compliance', 'Brand Strategy', 'Technology Integration'].map(item => (
                     <span key={item} className="px-4 py-2 rounded-full border border-white/10 bg-black/20 text-white/70 text-xs">
                       {item}
                     </span>
                   ))}
                </div>
             </div>
           </AnimatedSection>
        </div>

        {/* APPROACH TABS */}
        <div className="py-24 border-t border-white/5">
           <AnimatedSection>
             <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12 text-center">Our Approach</h3>
           </AnimatedSection>
           
           <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
              <AnimatedSection delay={0.1}>
                <div className="flex bg-black/20 p-1 rounded-full border border-white/10 mb-16">
                  <button 
                    onClick={() => setActiveTab('portfolio')}
                    className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-colors ${activeTab === 'portfolio' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
                  >
                    Portfolio
                  </button>
                  <button 
                    onClick={() => setActiveTab('consulting')}
                    className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-colors ${activeTab === 'consulting' ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
                  >
                    Consulting
                  </button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex flex-wrap justify-center gap-6 items-center">
                  {(activeTab === 'portfolio' 
                    ? ["Understand", "Assess", "Allocate", "Monitor", "Review"]
                    : ["Discover", "Analyse", "Strategise", "Execute", "Grow"]
                  ).map((step, i, arr) => (
                    <React.Fragment key={step}>
                      <div className="text-white font-medium text-xl md:text-2xl">{step}</div>
                      {i !== arr.length - 1 && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-gold">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </AnimatedSection>
           </div>
        </div>

        {/* WHO WE WORK WITH */}
        <div className="py-24 border-t border-white/5">
          <AnimatedSection>
            <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12 text-center">Who We Work With</h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {['Families & HNIs', 'Entrepreneurs', 'Corporate Executives', 'Startups', 'Established Companies'].map((card, i) => (
              <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                 <div className="bg-[#121317] border border-white/5 rounded-3xl p-8 h-[160px] flex items-center justify-center text-center">
                    <h4 className="text-white font-medium">{card}</h4>
                 </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* WHY RUPEE RISE */}
        <div className="py-24 border-t border-white/5 flex flex-col items-center">
          <AnimatedSection>
            <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12">Why Rupee Rise</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {['Strategic', 'Structured', 'Practical', 'Personalised', 'Long-Term'].map((trait) => (
                <span key={trait} className="px-6 py-3 rounded-full border border-brand-gold/30 text-brand-gold bg-brand-gold/5 text-sm uppercase tracking-widest font-bold">
                  {trait}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* FORM SECTION */}
        <div className="py-24 border-t border-white/5 max-w-3xl mx-auto w-full">
           <AnimatedSection>
             <h2 className="text-3xl md:text-5xl font-medium text-center text-white mb-16">Start the conversation</h2>
             <InvestorForm />
           </AnimatedSection>
        </div>

      </div>
      
      {/* COMPLIANCE FOOTER */}
      <div className="w-full bg-[#0a0b0d] border-t border-white/5 py-8 px-4 md:px-10 text-center">
         <p className="text-[#93949A] text-[10px] max-w-4xl mx-auto uppercase tracking-wider leading-relaxed">
           Disclaimer: Portfolio Management and Investment Advisory services are subject to regulatory requirements and registrations. The information provided on this page is for general informational purposes and constitutes consulting and advisory capabilities. Please consult with our representatives for jurisdiction-specific compliance and offering details.
         </p>
      </div>

      <div className="w-full bg-brand-dark text-brand-light pb-24 pt-12 px-4 md:px-10">
        <div className="max-w-[1536px] mx-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
