'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import ScrollHeading from '@/components/ScrollHeading';
import Button from '@/components/Button';

// Consultation Form for Investors
function InvestorForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Investor',
          ...formData
        })
      });
      
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
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
    <form onSubmit={handleSubmit} className="bg-[#121317] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col gap-6 shadow-2xl">
      <h3 className="text-2xl text-white font-medium mb-4">Request a Consultation</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Full Name *</label>
          <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Email Address *</label>
          <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Phone Number *</label>
          <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Service Required *</label>
          <select required value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none cursor-pointer">
            <option value="" disabled className="bg-[#121317]">Select a service</option>
            <option value="portfolio" className="bg-[#121317]">Portfolio Management</option>
            <option value="consulting" className="bg-[#121317]">Business Consulting</option>
            <option value="both" className="bg-[#121317]">Both</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Investment Horizon</label>
        <select value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none cursor-pointer">
          <option value="" disabled className="bg-[#121317]">Select timeline</option>
          <option value="short" className="bg-[#121317]">Short Term (1-3 years)</option>
          <option value="medium" className="bg-[#121317]">Medium Term (3-7 years)</option>
          <option value="long" className="bg-[#121317]">Long Term (7+ years)</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Message (Optional)</label>
        <textarea rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold/50 transition-colors"></textarea>
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
      <span className="inline-block animate-enter-word text-brand-gold" style={{ animationDelay: '0.14s' }}>Manage</span>{' '}
      <span className="inline-block animate-enter-word text-brand-gold" style={{ animationDelay: '0.17s' }}>with</span>{' '}
      <span className="inline-block animate-enter-word text-brand-gold" style={{ animationDelay: '0.20s' }}>discipline.</span>
    </>
  );

  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col w-full overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1 (DARK): HEADER & HERO
          ========================================================================= */}
      <div className="w-full max-w-[1536px] px-4 md:px-10 mx-auto flex flex-col pb-16">
        <Header />

        {/* HERO */}
        <PageHero 
          label="Investors & Portfolio Management"
          title={heroTitle}
          description="A structured approach to managing investments and building businesses."
          size="large"
        />
      </div>

      {/* =========================================================================
          SECTION 2 (LIGHT BREAK): TWO EXPERTISES
          ========================================================================= */}
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-4 md:px-10 border-y border-black/5">
        <div className="max-w-[1536px] mx-auto flex flex-col items-center">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4 block">
              Core Capabilities
            </span>
            <ScrollHeading 
              text="Two expertises. One strategic approach." 
              align="center"
              className="text-3xl md:text-5xl font-medium text-brand-dark leading-tight mb-6" 
            />
            <p className="text-black/70 text-lg leading-relaxed max-w-2xl mx-auto">
              We bring together wealth management principles and strategic business consulting to provide a comprehensive approach for investors, families and enterprises.
            </p>
          </AnimatedSection>

          <div className="flex flex-col md:flex-row relative w-full gap-8 md:gap-0">
            {/* Gold Line Divider (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/60 to-transparent transform -translate-x-1/2"></div>
            
            {/* Wealth */}
            <div className="md:w-1/2 p-8 md:p-14 flex flex-col items-center text-center">
              <AnimatedSection delay={0.1} className="w-full">
                <div className="bg-white border border-black/10 rounded-3xl p-10 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-3">Wealth Division</h3>
                  <h4 className="text-3xl font-medium text-brand-dark mb-8">Portfolio Management</h4>
                  <ul className="flex flex-col gap-4 text-black/70">
                    {['Portfolio Management', 'Investment Strategy', 'Asset Allocation', 'Risk Management', 'Portfolio Review'].map(item => (
                      <li key={item} className="text-base md:text-lg font-medium">{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Business */}
            <div className="md:w-1/2 p-8 md:p-14 flex flex-col items-center text-center">
              <AnimatedSection delay={0.2} className="w-full">
                <div className="bg-white border border-black/10 rounded-3xl p-10 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-3">Enterprise Division</h3>
                  <h4 className="text-3xl font-medium text-brand-dark mb-8">Business Consulting</h4>
                  <ul className="flex flex-col gap-4 text-black/70">
                    {['Business Setup', 'Strategy Development', 'Financial Modeling', 'Market Positioning', 'Growth & Scaling'].map(item => (
                      <li key={item} className="text-base md:text-lg font-medium">{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
          
          <AnimatedSection delay={0.3}>
            <p className="text-center text-xl text-black/70 mt-16 italic font-serif">
              "Building wealth and building businesses."
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3 (DARK): DETAILED SECTIONS
          ========================================================================= */}
      <div className="w-full bg-brand-dark text-brand-light py-24 md:py-32 px-4 md:px-10 border-b border-white/5">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection>
            <div className="bg-[#121317] border border-white/5 rounded-3xl p-10 h-full flex flex-col shadow-2xl">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">Investment Strategy</span>
              <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">A structured approach to managing investments.</h3>
              <p className="text-white/60 text-sm mb-10">Protect. Manage. Grow.</p>
              <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-white/5">
                {['Equity', 'Fixed Income', 'Real Estate', 'Alternative Investments', 'Mutual Funds', 'Bonds', 'Structured Products', 'Global Assets'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-[#121317] border border-white/5 rounded-3xl p-10 h-full flex flex-col shadow-2xl">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-4">Advisory Services</span>
              <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">From business idea to sustainable growth.</h3>
              <p className="text-white/60 text-sm mb-10">End-to-end Advisory</p>
              <div className="flex flex-wrap gap-2.5 mt-auto pt-6 border-t border-white/5">
                {['Market Entry', 'Financial Modeling', 'Operational Efficiency', 'Scaling', 'M&A Advisory', 'Restructuring', 'Capital Raising', 'Compliance', 'Brand Strategy', 'Technology Integration'].map(item => (
                  <span key={item} className="px-3.5 py-1.5 rounded-full border border-white/10 bg-black/40 text-white/80 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* =========================================================================
          SECTION 4 (LIGHT BREAK): OUR APPROACH & WHO WE WORK WITH
          ========================================================================= */}
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-4 md:px-10 border-b border-black/5">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-24">
          
          {/* Approach Tabs */}
          <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
            <AnimatedSection>
              <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4 text-center block">
                Process Flow
              </span>
              <ScrollHeading 
                text="Our Approach" 
                align="center"
                className="text-3xl md:text-5xl font-medium text-brand-dark mb-12 text-center" 
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <div className="flex bg-[#ede8dc] p-1.5 rounded-full border border-black/10 mb-16 shadow-inner">
                <button 
                  onClick={() => setActiveTab('portfolio')}
                  className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-colors ${activeTab === 'portfolio' ? 'bg-brand-dark text-white shadow-md' : 'text-black/60 hover:text-black'}`}
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => setActiveTab('consulting')}
                  className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-colors ${activeTab === 'consulting' ? 'bg-brand-dark text-white shadow-md' : 'text-black/60 hover:text-black'}`}
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
                    <div className="bg-white px-6 py-3 rounded-full border border-black/10 shadow-sm text-brand-dark font-medium text-lg md:text-xl">{step}</div>
                    {i !== arr.length - 1 && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-gold">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Who We Work With */}
          <div className="pt-16 border-t border-black/10">
            <AnimatedSection>
              <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12 text-center">Who We Work With</h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {['Families & HNIs', 'Entrepreneurs', 'Corporate Executives', 'Startups', 'Established Companies'].map((card, i) => (
                <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                  <div className="bg-white border border-black/10 rounded-3xl p-8 h-[160px] flex items-center justify-center text-center shadow-sm hover:shadow-md transition-all">
                    <h4 className="text-brand-dark font-medium text-lg">{card}</h4>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 5 (DARK): FORM SECTION & FOOTER
          ========================================================================= */}
      <div className="w-full bg-brand-dark text-brand-light py-24 md:py-32 px-4 md:px-10">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-20">

          {/* Form */}
          <div className="max-w-3xl mx-auto w-full">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-medium text-center text-white mb-6">Start the conversation</h2>
              <p className="text-[#93949A] text-center text-base mb-16 max-w-lg mx-auto">
                Discuss your portfolio or enterprise advisory needs with our specialists.
              </p>
              <InvestorForm />
            </AnimatedSection>
          </div>

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
