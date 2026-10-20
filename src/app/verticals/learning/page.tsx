'use client';

import React, { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import Image from 'next/image';

// Interactive Academy Enrolment & Certification Form
function AcademyForm({
  activeTab,
  onTabChange
}: {
  activeTab: 'enrol' | 'certification';
  onTabChange: (tab: 'enrol' | 'certification') => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+91 ',
    experience: 'Beginner (0-1 year)',
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
          type: activeTab === 'certification' ? 'AcademyCertification' : 'AcademyEnrolment',
          subType: activeTab === 'certification' ? 'Certification' : 'Enrolment',
          ...formData
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to submit application. Please try again or reach out directly.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#121317] border border-brand-gold/40 rounded-3xl p-10 md:p-16 text-center flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="w-16 h-16 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-6 border border-brand-gold/30">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-3">Application Received</span>
        <h3 className="text-2xl md:text-3xl text-white font-medium mb-4">
          {activeTab === 'certification' ? 'Certification Enquiry Submitted' : 'Your Enrolment Request Is In'}
        </h3>
        <p className="text-[#93949A] text-sm md:text-base max-w-md mx-auto leading-relaxed mb-8">
          Thank you for reaching out to the Rupee Rise Forex Trading Academy. An academic advisor will contact you within 24 hours with details on the upcoming batch and onboarding.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '+91 ', experience: 'Beginner (0-1 year)', message: '' });
          }}
          className="text-white/60 hover:text-brand-gold text-xs uppercase tracking-widest font-bold underline transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#121317] border border-white/10 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl text-left">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 blur-3xl rounded-full pointer-events-none"></div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 pb-6 mb-8 gap-6">
        <button
          type="button"
          onClick={() => onTabChange('enrol')}
          className={`pb-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-all relative ${
            activeTab === 'enrol'
              ? 'text-brand-gold after:content-[""] after:absolute after:bottom-[-25px] after:left-0 after:right-0 after:h-[2px] after:bg-brand-gold'
              : 'text-white/40 hover:text-white'
          }`}
        >
          Enrol Now
        </button>
        <button
          type="button"
          onClick={() => onTabChange('certification')}
          className={`pb-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-all relative ${
            activeTab === 'certification'
              ? 'text-brand-gold after:content-[""] after:absolute after:bottom-[-25px] after:left-0 after:right-0 after:h-[2px] after:bg-brand-gold'
              : 'text-white/40 hover:text-white'
          }`}
        >
          Enquire About Certification
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl text-white font-medium mb-3">
          {activeTab === 'enrol' ? 'Start Your Trading Journey' : 'Ask About Certification & Requirements'}
        </h3>
        <p className="text-[#93949A] text-sm leading-relaxed">
          {activeTab === 'enrol'
            ? 'Complete the form below to secure your place in the next structured academy intake. Seats are limited to maintain hands-on trainer guidance.'
            : 'Get detailed information regarding course assessment standards, syllabus verification, and credential issuance terms.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-white/70 text-[11px] font-bold uppercase tracking-widest">
              Full Name <span className="text-brand-gold">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/60 text-sm transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white/70 text-[11px] font-bold uppercase tracking-widest">
              Email Address <span className="text-brand-gold">*</span>
            </label>
            <input
              required
              type="email"
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/60 text-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-white/70 text-[11px] font-bold uppercase tracking-widest">
              Phone Number <span className="text-brand-gold">*</span>
            </label>
            <input
              required
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/60 text-sm transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white/70 text-[11px] font-bold uppercase tracking-widest">
              Current Trading Experience
            </label>
            <select
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-brand-gold/60 text-sm transition-all appearance-none cursor-pointer"
            >
              <option value="Beginner (0-1 year)" className="bg-[#121317] text-white">Beginner (0 - 1 year, new to Forex)</option>
              <option value="Intermediate (1-3 years)" className="bg-[#121317] text-white">Intermediate (1 - 3 years, basic charts)</option>
              <option value="Active Trader (3+ years)" className="bg-[#121317] text-white">Active Trader (3+ years, seeking SMC/ICT)</option>
              <option value="Transitioning from Equities/Crypto" className="bg-[#121317] text-white">Transitioning from Equities or Crypto</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white/70 text-[11px] font-bold uppercase tracking-widest">
            {activeTab === 'enrol' ? 'Goals or Questions (Optional)' : 'Certification Enquiry Details'}
          </label>
          <textarea
            rows={3}
            placeholder={
              activeTab === 'enrol'
                ? 'Tell us what you hope to achieve with this programme...'
                : 'Ask about evaluation criteria, batch schedules, or certification terms...'
            }
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/60 text-sm transition-all resize-none"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-white/40 text-xs">
            Guaranteed privacy. We do not spam or share your contact details.
          </p>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto min-w-[200px] h-[52px] bg-brand-gold text-brand-dark px-8 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-all duration-300 disabled:opacity-50 shadow-lg shadow-brand-gold/10"
          >
            {loading ? 'Submitting...' : activeTab === 'enrol' ? 'Submit Enrolment' : 'Send Enquiry'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function LearningPage() {
  const [activeModule, setActiveModule] = useState<number>(0);
  const [formTab, setFormTab] = useState<'enrol' | 'certification'>('enrol');
  const enrolSectionRef = useRef<HTMLDivElement>(null);

  const scrollToEnrol = (tab: 'enrol' | 'certification' = 'enrol') => {
    setFormTab(tab);
    enrolSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroTitle = (
    <>
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.05s' }}>Master</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.08s' }}>the</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.11s' }}>Markets.</span>{' '}
      <br className="hidden sm:inline" />
      <span className="inline-block animate-enter-word text-brand-gold" style={{ animationDelay: '0.14s' }}>Build</span>{' '}
      <span className="inline-block animate-enter-word text-brand-gold" style={{ animationDelay: '0.17s' }}>Your</span>{' '}
      <span className="inline-block animate-enter-word text-brand-gold" style={{ animationDelay: '0.20s' }}>Strategy.</span>{' '}
      <br className="hidden sm:inline" />
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.23s' }}>Trade</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.26s' }}>With</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.29s' }}>Discipline.</span>
    </>
  );

  const heroDescription = (
    <div className="flex flex-col gap-4">
      <p className="text-white/80 text-[15px] md:text-base leading-relaxed">
        A structured forex trading education programme designed to take learners from the fundamentals of price action to advanced market analysis, Smart Money Concepts (SMC) and Inner Circle Trader (ICT) methodologies.
      </p>
      <p className="text-[#93949A] text-sm leading-relaxed">
        Learn through structured modules, practical chart analysis, strategy development and guidance from qualified trainers.
      </p>
    </div>
  );

  const modules = [
    {
      num: "01",
      tag: "FOUNDATION",
      title: "Basic Price Action",
      lead: "Build a strong foundation in reading price charts and understanding market behaviour.",
      topics: [
        "Candlestick patterns and price movements",
        "Market structure and trend identification",
        "Support and resistance zones",
        "Breakouts, retests and reversals",
        "Entry, stop-loss and take-profit concepts"
      ],
      keyConcepts: ["Candlestick Patterns", "Market Structure", "Support & Resistance", "Breakouts & Retests", "Risk/Reward Ratios"]
    },
    {
      num: "02",
      tag: "INSTITUTIONAL ORDERFLOW",
      title: "Smart Money Concepts (SMC)",
      lead: "Explore advanced chart-analysis concepts used to study market structure and price behaviour.",
      topics: [
        "Break of Structure (BOS)",
        "Change of Character (CHOCH)",
        "Order Blocks",
        "Fair Value Gaps (FVG)",
        "Liquidity zones and liquidity sweeps",
        "Premium and discount zones"
      ],
      keyConcepts: ["Break of Structure (BOS)", "Change of Character (CHOCH)", "Order Blocks", "Fair Value Gaps (FVG)", "Liquidity Sweeps", "Premium & Discount"]
    },
    {
      num: "03",
      tag: "PRICE DELIVERY & TIME",
      title: "ICT Trading Methodology",
      lead: "Study concepts associated with the Inner Circle Trader (ICT) approach to technical analysis.",
      topics: [
        "Liquidity concepts and market structure",
        "Fair Value Gaps and displacement",
        "Optimal Trade Entry concepts",
        "Dealing ranges and market delivery",
        "Kill Zones and trading-session analysis",
        "Entry models and trade confirmation"
      ],
      keyConcepts: ["Liquidity Concepts", "Displacement & FVGs", "Optimal Trade Entry (OTE)", "Dealing Ranges", "Kill Zones", "Trade Confirmations"]
    },
    {
      num: "04",
      tag: "EXECUTION & RISK DISCIPLINE",
      title: "Advanced Trading Module & Strategy Development",
      lead: "Develop a more structured approach to analysing and evaluating trading opportunities.",
      topics: [
        "Multi-timeframe analysis",
        "Confluence-based trade setups",
        "Advanced entry and exit planning",
        "Strategy development and backtesting",
        "Trading journals and performance review",
        "Risk management, position sizing and drawdown control",
        "Trading psychology and discipline"
      ],
      keyConcepts: ["Multi-Timeframe Analysis", "Confluence Setups", "Backtesting Systems", "Trading Journals", "Position Sizing", "Trading Psychology"]
    }
  ];

  const targetAudiences = [
    {
      id: "01",
      title: "Beginner Forex Learners",
      bullet: "Beginners who want to build a foundation in forex trading",
      detail: "Learn the core language of foreign exchange markets without confusing jargon or high-risk guesswork."
    },
    {
      id: "02",
      title: "Price Action & SMC Aspirants",
      bullet: "Traders looking to understand Price Action, SMC and ICT concepts",
      detail: "Transition from retail lagging indicators to institutional orderflow, liquidity footprints, and structural delivery."
    },
    {
      id: "03",
      title: "Strategy Architects",
      bullet: "Learners interested in developing and testing trading strategies",
      detail: "Construct repeatable, backtested playbooks with quantified edge, strict entry triggers, and disciplined targets."
    },
    {
      id: "04",
      title: "Risk-Disciplined Traders",
      bullet: "Traders seeking a more disciplined approach to risk management",
      detail: "Protect capital first with strict position sizing rules, drawdown controls, and mental resilience under pressure."
    }
  ];

  const certificationPillars = [
    {
      title: "Structured Learning Modules",
      desc: "Step-by-step progressive curriculum designed for clarity, depth, and practical retention."
    },
    {
      title: "Practical Chart-Based Demonstrations",
      desc: "Observe live and historical chart breakdowns rather than abstract whiteboard theory."
    },
    {
      title: "Guided Trading Exercises",
      desc: "Hands-on chart markup assignments and trade setup evaluation reviewed with trainers."
    },
    {
      title: "Assessment of Course Concepts",
      desc: "Thorough verification of core concepts before credential issuance to ensure real comprehension."
    },
    {
      title: "Certificate of Completion",
      desc: "Issued upon meeting published course requirements, verifying academic dedication."
    }
  ];

  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col w-full overflow-x-hidden selection:bg-brand-gold/30 selection:text-white">
      
      {/* =========================================================================
          SECTION 1 (DARK): HEADER, HERO & KEY HIGHLIGHTS
          ========================================================================= */}
      <div className="w-full max-w-[1536px] px-4 md:px-10 mx-auto flex flex-col pb-20">
        <Header />

        {/* 1. HERO SECTION */}
        <PageHero
          label="RUPEE RISE FOREX TRADING ACADEMY"
          title={heroTitle}
          description={heroDescription}
          footerText="STRUCTURED MODULES • PRACTICAL CHART ANALYSIS • SMC & ICT METHODOLOGIES • QUALIFIED TRAINERS"
          size="large"
        />

        {/* HERO QUICK ACTION BAR */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 bg-[#121317] border border-white/5 rounded-2xl p-4 md:px-8">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white/80 text-xs md:text-sm font-medium">
              Upcoming Cohort Intake Open &bull; Qualified Trainer Guidance
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToEnrol('enrol')}
              className="bg-brand-gold text-brand-dark font-bold uppercase tracking-widest text-[10px] md:text-[11px] py-2.5 px-6 rounded-full hover:bg-white transition-all duration-300"
            >
              Enrol Now
            </button>
            <button
              onClick={() => scrollToEnrol('certification')}
              className="border border-white/20 text-white/90 hover:text-white hover:border-brand-gold font-bold uppercase tracking-widest text-[10px] md:text-[11px] py-2.5 px-6 rounded-full transition-all duration-300"
            >
              Enquire About Certification
            </button>
          </div>
        </div>

        {/* 4 OVERVIEW METRICS */}
        <div className="pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#121317] border border-white/5 hover:border-brand-gold/30 rounded-3xl p-8 h-full transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">01 / Curriculum</span>
                  <h4 className="text-white text-xl font-medium mt-3 mb-2">4 Structured Modules</h4>
                  <p className="text-[#93949A] text-sm leading-relaxed">
                    Progressive training pathway from candlestick price action to advanced SMC and ICT frameworks.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-white/40 text-[11px] uppercase tracking-wider font-semibold">
                  Zero to Institutional
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#121317] border border-white/5 hover:border-brand-gold/30 rounded-3xl p-8 h-full transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">02 / Instruction</span>
                  <h4 className="text-white text-xl font-medium mt-3 mb-2">Qualified Trainers</h4>
                  <p className="text-[#93949A] text-sm leading-relaxed">
                    Learn under qualified instructors with relevant trading and teaching experience.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-white/40 text-[11px] uppercase tracking-wider font-semibold">
                  Practical Chart Analysis
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#121317] border border-white/5 hover:border-brand-gold/30 rounded-3xl p-8 h-full transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">03 / Support</span>
                  <h4 className="text-white text-xl font-medium mt-3 mb-2">3 Months 24/7 Support</h4>
                  <p className="text-[#93949A] text-sm leading-relaxed">
                    Round-the-clock channel support to ask questions, review chart setups, and resolve doubts.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-white/40 text-[11px] uppercase tracking-wider font-semibold">
                  Continuous Feedback
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-[#121317] border border-white/5 hover:border-brand-gold/30 rounded-3xl p-8 h-full transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest">04 / Community</span>
                  <h4 className="text-white text-xl font-medium mt-3 mb-2">Lifetime Support</h4>
                  <p className="text-[#93949A] text-sm leading-relaxed">
                    Stay permanently connected with the Rupee Rise trading community for ongoing educational guidance.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-white/40 text-[11px] uppercase tracking-wider font-semibold">
                  Alumni Community
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2 (LIGHT BREAK): WHAT YOU WILL LEARN (CURRICULUM ARCHITECTURE)
          ========================================================================= */}
      <div id="curriculum-section" className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-4 md:px-10 border-y border-black/5">
        <div className="w-full max-w-[1536px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Nav Column */}
            <div className="lg:w-1/3">
              <AnimatedSection>
                <div className="inline-block px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-dark text-[10px] uppercase tracking-widest font-bold mb-4">
                  WHAT YOU WILL LEARN
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-brand-dark leading-tight mb-6">
                  A structured curriculum for modern forex markets.
                </h2>
                <p className="text-black/70 text-base leading-relaxed mb-8">
                  From raw price dynamics to algorithmic session timing and institutional liquidity analysis — master every layer of chart reading with clarity.
                </p>
                
                {/* Desktop Module Selectors */}
                <div className="hidden lg:flex flex-col gap-3">
                  {modules.map((m, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModule(idx)}
                      className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                        activeModule === idx
                          ? 'bg-white border-brand-gold shadow-md text-brand-dark font-medium'
                          : 'bg-black/[0.02] border-black/5 text-black/60 hover:bg-white hover:border-black/15'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs font-bold text-brand-gold">{m.num}</span>
                        <span className="text-sm font-medium">{m.title}</span>
                      </div>
                      <span className={`w-2.5 h-2.5 rounded-full ${activeModule === idx ? 'bg-brand-gold' : 'bg-transparent'}`}></span>
                    </button>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right Curriculum Cards */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              {modules.map((mod, i) => (
                <AnimatedSection key={i} delay={0.1 * (i + 1)}>
                  <div
                    className={`border ${
                      activeModule === i
                        ? 'border-brand-gold/60 bg-white shadow-xl ring-1 ring-brand-gold/30'
                        : 'border-black/10 bg-white/80 hover:bg-white hover:border-black/20 shadow-sm'
                    } rounded-3xl overflow-hidden transition-all duration-300`}
                  >
                    {/* Module Accordion Header */}
                    <div
                      className="p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                      onClick={() => setActiveModule(activeModule === i ? -1 : i)}
                    >
                      <div className="flex items-start md:items-center gap-6">
                        <span className="text-brand-gold font-mono text-2xl md:text-3xl font-bold">{mod.num}</span>
                        <div>
                          <div className="flex items-center gap-3 mb-1.5">
                            <span className="px-2.5 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-dark text-[9px] font-bold uppercase tracking-widest">
                              {mod.tag}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-medium text-brand-dark">
                            {mod.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 self-end md:self-center">
                        <span className="text-black/50 text-xs hidden sm:inline font-medium">
                          {activeModule === i ? 'Collapse' : 'Expand Module'}
                        </span>
                        <div className={`w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-brand-dark transition-transform duration-300 ${activeModule === i ? 'rotate-180 bg-brand-gold/20' : ''}`}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Module Details */}
                    <div className={`px-8 pb-8 pt-0 transition-all duration-300 ${activeModule === i ? 'block' : 'hidden'}`}>
                      <div className="pt-4 border-t border-black/10">
                        <p className="text-black/80 text-sm md:text-base leading-relaxed mb-6">
                          {mod.lead}
                        </p>

                        {/* Concept tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {mod.keyConcepts.map((concept) => (
                            <span
                              key={concept}
                              className="px-3 py-1 rounded-full bg-[#f2eee7] border border-black/5 text-black/80 text-xs font-mono"
                            >
                              #{concept}
                            </span>
                          ))}
                        </div>

                        {/* Topics Checklist */}
                        <div className="bg-[#f7f5ee] border border-black/5 rounded-2xl p-6">
                          <h4 className="text-xs uppercase tracking-widest text-brand-dark font-bold mb-4">
                            Syllabus Breakdown:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mod.topics.map((topic, tIdx) => (
                              <div key={tIdx} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand-dark">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                </div>
                                <span className="text-black/85 text-sm leading-relaxed font-medium">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3 (DARK): TRAINER-LED LEARNING & NEW CERTIFICATION SHOWCASE BELOW
          ========================================================================= */}
      <div id="trainer-section" className="w-full bg-brand-dark text-brand-light py-24 md:py-32 px-4 md:px-10 border-b border-white/5">
        <div className="w-full max-w-[1536px] mx-auto flex flex-col gap-20">
          
          {/* Top Half: Trainer-Led Learning on Left, Trading Learning Image on Right */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: The 5 Pillars */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <AnimatedSection>
                <div className="inline-block px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-6">
                  TRAINER-LED LEARNING & CERTIFICATION
                </div>
                <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-6">
                  Learn directly from qualified market practitioners.
                </h2>
                <p className="text-[#93949A] text-base md:text-lg leading-relaxed mb-10">
                  Learn under the guidance of qualified trainers with relevant trading and teaching experience. Our methodology pairs theoretical clarity with real chart demonstration.
                </p>

                <div className="flex flex-col gap-6">
                  {certificationPillars.map((pillar, idx) => (
                    <div key={idx} className="flex items-start gap-5 group">
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold font-mono text-xs shrink-0 group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10 transition-all">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-white text-base md:text-lg font-medium mb-1 group-hover:text-brand-gold transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="text-[#93949A] text-sm leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Trading Learning Image */}
            <div className="lg:w-1/2 w-full">
              <AnimatedSection delay={0.2} className="w-full h-full">
                <div className="relative rounded-[2rem] overflow-hidden min-h-[440px] md:min-h-[540px] border border-white/10 shadow-2xl group w-full">
                  <Image
                    src="/images/trading-learning.jpg"
                    alt="Practical Chart Analysis & Trader Mentorship"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Cinematic gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                  {/* Floating Caption Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold block mb-1">
                        PRACTICAL APPLICATION
                      </span>
                      <h4 className="text-white text-base md:text-lg font-medium">
                        Live Chart Demonstrations & Feedback
                      </h4>
                      <p className="text-white/60 text-xs mt-1">
                        Guided exercises and direct trainer review on active currency charts.
                      </p>
                    </div>
                    <button
                      onClick={() => scrollToEnrol('enrol')}
                      className="shrink-0 bg-brand-gold text-brand-dark px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors"
                    >
                      Join Batch
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Bottom Half: Official Credential Course Certification Showcase (PUT DOWN AS REQUESTED) */}
          <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-r from-[#14161f] via-[#1a1d27] to-[#14161f] border border-brand-gold/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(201,169,106,0.12)_0%,_transparent_70%)] pointer-events-none"></div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
                {/* Seal & Headline */}
                <div className="flex items-start md:items-center gap-6 lg:w-1/3">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-brand-gold/40 bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 shadow-lg shadow-brand-gold/10">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="6"></circle>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">
                      Official Credential
                    </span>
                    <h3 className="text-2xl md:text-3xl text-white font-medium mt-1">
                      Course Certification
                    </h3>
                    <p className="text-white/60 text-xs mt-1">
                      Issued by <span className="text-white font-medium">Rupee Rise Learning</span>
                    </p>
                  </div>
                </div>

                {/* Middle Description */}
                <div className="lg:w-1/2 flex flex-col gap-3">
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    Certification: Issued by Rupee Rise Learning, subject to successful completion of the programme requirements, including conceptual assessments and practical exercises.
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-[#93949A]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                      <span>Verifiable student identification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                      <span>Verified assessment of Price Action, SMC & ICT concepts</span>
                    </div>
                  </div>
                </div>

                {/* Right Action */}
                <div className="lg:w-1/5 flex flex-col gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => scrollToEnrol('certification')}
                    className="w-full bg-brand-gold text-brand-dark py-3.5 px-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 text-center shadow-lg shadow-brand-gold/10 whitespace-nowrap"
                  >
                    Enquire About Certification
                  </button>
                  <p className="text-[10px] text-white/40 text-center">
                    Subject to published terms & benchmarks.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>

      {/* =========================================================================
          SECTION 4 (LIGHT BREAK): SUPPORT & COMMUNITY + WHO IS THIS PROGRAMME FOR?
          ========================================================================= */}
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-4 md:px-10 border-b border-black/5">
        <div className="w-full max-w-[1536px] mx-auto flex flex-col gap-24">

          {/* Part A: 3 MONTHS 24/7 SUPPORT & LIFETIME SUPPORT */}
          <div>
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4 block">
                  COMMUNITY & MENTORSHIP
                </span>
                <h2 className="text-3xl md:text-5xl font-medium text-brand-dark leading-tight mb-6">
                  Your learning journey continues beyond the classroom.
                </h2>
                <p className="text-black/70 text-lg leading-relaxed">
                  Trading mastery is developed through post-class feedback, live market application, and ongoing community discourse. We ensure you are never trading in isolation.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1: 3 MONTHS OF 24/7 SUPPORT */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white border border-black/10 hover:border-brand-gold rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 blur-2xl rounded-full pointer-events-none group-hover:bg-brand-gold/20 transition-colors"></div>

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-dark mb-8">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>

                    <span className="text-brand-gold text-[10px] font-mono uppercase tracking-widest font-bold">
                      ACTIVE DESK
                    </span>
                    <h3 className="text-2xl md:text-3xl text-brand-dark font-medium mt-2 mb-4">
                      3 MONTHS OF 24/7 SUPPORT
                    </h3>

                    <p className="text-black/90 text-base leading-relaxed mb-6 font-medium">
                      Your learning journey continues beyond the classroom.
                    </p>

                    <p className="text-black/70 text-sm leading-relaxed mb-6">
                      Receive three months of around-the-clock learning support through the designated support channels, subject to the programme’s published terms.
                    </p>

                    <div className="p-5 rounded-2xl bg-[#f7f5ee] border border-black/5 mb-6">
                      <p className="text-black/85 text-sm leading-relaxed font-medium">
                        Ask questions, clarify trading concepts and get help understanding chart setups and course material.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-black/10 space-y-2.5 text-xs text-black/70">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      <span>Direct designated query channels</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      <span>Chart setup review & concept verification</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      <span>Assistance with course homework exercises</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Card 2: LIFETIME LEARNING SUPPORT */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white border border-black/10 hover:border-brand-gold rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 blur-2xl rounded-full pointer-events-none group-hover:bg-brand-gold/20 transition-colors"></div>

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-dark mb-8">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>

                    <span className="text-brand-gold text-[10px] font-mono uppercase tracking-widest font-bold">
                      PERPETUAL ALUMNI NETWORK
                    </span>
                    <h3 className="text-2xl md:text-3xl text-brand-dark font-medium mt-2 mb-4">
                      LIFETIME LEARNING SUPPORT
                    </h3>

                    <p className="text-black/90 text-base leading-relaxed mb-6 font-medium">
                      Stay connected with the Rupee Rise learning community beyond the initial training period.
                    </p>

                    <p className="text-black/70 text-sm leading-relaxed mb-6">
                      Receive ongoing educational assistance and course-related guidance under the lifetime support terms published at enrolment.
                    </p>

                    <div className="p-5 rounded-2xl bg-[#f7f5ee] border border-black/5 mb-6">
                      <p className="text-black/85 text-sm leading-relaxed font-medium">
                        Continuous exposure to evolving market dynamics, fellow alumni experiences, and educational refresher resources.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-black/10 space-y-2.5 text-xs text-black/70">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                      <span>Rupee Rise learning community access</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                      <span>Ongoing educational assistance & updates</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                      <span>Continued alignment under published terms</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Part B: WHO IS THIS PROGRAMME FOR? */}
          <div className="pt-8 border-t border-black/10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              <div className="lg:w-1/3">
                <AnimatedSection>
                  <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4 block">
                    CANDIDATE PROFILE
                  </span>
                  <h2 className="text-3xl md:text-5xl font-medium text-brand-dark leading-tight mb-6">
                    WHO IS THIS PROGRAMME FOR?
                  </h2>
                  <p className="text-black/70 text-base leading-relaxed mb-8">
                    Whether building your initial trading foundations or elevating existing chart analysis with institutional SMC & ICT models, this programme is structured for disciplined growth.
                  </p>
                  <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-sm">
                    <p className="text-black/75 text-xs leading-relaxed italic">
                      "We do not promise get-rich-quick shortcuts. We teach structured price reading, mathematical risk management, and the emotional discipline required to navigate global financial markets."
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {targetAudiences.map((aud, i) => (
                  <AnimatedSection key={i} delay={0.1 * (i + 1)}>
                    <div className="bg-white border border-black/10 hover:border-brand-gold rounded-3xl p-8 h-full transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-brand-gold font-mono text-xs font-bold">{aud.id}</span>
                          <div className="w-8 h-8 rounded-full bg-[#f2eee7] flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                        </div>
                        <h4 className="text-brand-dark text-lg font-medium mb-3 group-hover:text-brand-gold transition-colors">
                          {aud.title}
                        </h4>
                        <p className="text-black/90 text-sm font-medium mb-3">
                          {aud.bullet}
                        </p>
                        <p className="text-black/60 text-xs leading-relaxed">
                          {aud.detail}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 5 (DARK): YOUR TRADING EDUCATION STARTS HERE & FINAL FOOTER
          ========================================================================= */}
      <div className="w-full bg-brand-dark text-brand-light py-24 md:py-32 px-4 md:px-10">
        <div className="w-full max-w-[1536px] mx-auto flex flex-col gap-20">

          {/* APPLICATION & ENROLMENT HUB */}
          <div ref={enrolSectionRef} id="enrol-section" className="scroll-mt-24">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-12">
              <AnimatedSection>
                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4 block">
                  TAKE THE NEXT STEP
                </span>
                <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-6">
                  YOUR TRADING EDUCATION STARTS HERE
                </h2>
                <p className="text-[#93949A] text-lg leading-relaxed max-w-2xl mx-auto">
                  Build your knowledge, practise your analysis and develop a structured approach to the markets.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} className="max-w-3xl mx-auto w-full">
              <AcademyForm activeTab={formTab} onTabChange={setFormTab} />
            </AnimatedSection>
          </div>

          {/* MANDATORY RISK DISCLOSURE SECTION */}
          <AnimatedSection>
            <div className="bg-[#101114] border border-white/10 rounded-3xl p-8 md:p-10 max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h4 className="text-white text-xs uppercase tracking-widest font-bold">
                  Important Regulatory & Risk Disclosure
                </h4>
              </div>
              <p className="text-[#93949A] text-xs md:text-[13px] leading-relaxed">
                Risk Disclosure: Forex and leveraged trading involve substantial financial risk and may not be suitable for everyone. Losses are possible, and no strategy, trainer or educational programme can guarantee profits. Course certification is not a trading licence or a guarantee of employment or trading success. Trainer qualifications, support availability and certification terms should be verified before enrolment.
              </p>
            </div>
          </AnimatedSection>

          {/* EXPLORE OTHER VENTURES */}
          <div>
            <AnimatedSection>
              <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12 text-center">
                Explore Rupee Rise Ecosystem
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Capitals", desc: "Where finance meets strategy", img: "/images/capitals/why_01.webp", href: "/verticals/capital" },
                { title: "Real Estate", desc: "Prime assets across India & Dubai", img: "/images/dubai-night-cityscape.jpg", href: "/verticals/real-estate" },
                { title: "Investors & Portfolio", desc: "Disciplined capital solutions", img: "/images/glowing-globe-africa-europe.jpg", href: "/verticals/investors" }
              ].map((v, i) => (
                <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                  <a href={v.href} className="block rounded-3xl h-36 relative overflow-hidden border border-white/5 group">
                    <Image src={v.img} alt={v.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="text-white font-medium text-lg">{v.title}</span>
                      <span className="text-[#93949A] text-xs mt-1">{v.desc}</span>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* COMPLIANCE FOOTER DISCLAIMER */}
      <div className="w-full bg-[#0a0b0d] border-t border-white/5 py-8 px-4 md:px-10 text-center">
        <p className="text-[#93949A] text-[10px] max-w-4xl mx-auto uppercase tracking-wider leading-relaxed">
          Disclaimer: Rupee Rise Learning provides educational content only and does not constitute financial, investment, or trading advice. Past performance is not indicative of future results. All trading and investment involves risk, and you should perform your own due diligence before making any financial decisions.
        </p>
      </div>

      {/* FOOTER */}
      <div className="w-full bg-brand-dark text-brand-light pb-24 pt-12 px-4 md:px-10">
        <div className="max-w-[1536px] mx-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
