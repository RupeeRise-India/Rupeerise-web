"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import AnimatedSection from './AnimatedSection';

export interface FAQItem {
  id: string;
  category: 'general' | 'capitals' | 'real-estate' | 'portfolio' | 'learning';
  categoryLabel: string;
  q: string;
  a: string;
  points?: string[];
}

const FAQ_DATA: FAQItem[] = [
  // --- GENERAL & ECOSYSTEM ---
  {
    id: "gen-1",
    category: "general",
    categoryLabel: "General & Ecosystem",
    q: "What is Rupee Rise Ventures and how does the ecosystem operate?",
    a: "Rupee Rise Ventures is a multi-business venture ecosystem operating across four core pillars: Capitals, Real Estate, Portfolio Management, and Learning. Rather than treating these sectors as isolated divisions, our model connects capital, strategic advisory, institutional property assets, and proprietary market intelligence under one synchronized structure. This allows us to provide comprehensive end-to-end value creation for founders, investors, and business leaders.",
  },
  {
    id: "gen-2",
    category: "general",
    categoryLabel: "General & Ecosystem",
    q: "What are the foundational principles of Rupee Rise?",
    a: "We adhere strictly to five non-negotiable principles that guide every deployment and partnership across our verticals:",
    points: [
      "Knowledge before action — Understand market conditions thoroughly before deploying resources.",
      "Risk before returns — Every opportunity involves risk; identifying and hedging downside comes first.",
      "Disciplined evaluation — We assess opportunities on fundamental unit economics, not speculative hype.",
      "Transparent communication — Open disclosures and clear information at every stage, including potential challenges.",
      "Relationships over transactions — We partner for the long term, not one-off deals."
    ]
  },
  {
    id: "gen-3",
    category: "general",
    categoryLabel: "General & Ecosystem",
    q: "In which cities and markets does Rupee Rise operate?",
    a: "In India, we have active operational presences across four dynamic commercial hubs: Kochi, Trivandrum, Hyderabad, and Bangalore. Internationally, our strategic operations are centered in Dubai, UAE, connecting investors and businesses to cross-border opportunities across the Middle East and South Asia.",
  },
  {
    id: "gen-4",
    category: "general",
    categoryLabel: "General & Ecosystem",
    q: "Who does Rupee Rise typically partner with?",
    a: "We collaborate with ambitious founders and growth-stage enterprises seeking capital and governance, high-net-worth individuals (HNIs) and family offices looking for asset-backed yield and capital compounding, property developers and land owners for joint developments, and individuals committed to mastering financial markets through our learning vertical.",
  },

  // --- CAPITALS & VENTURES ---
  {
    id: "cap-1",
    category: "capitals",
    categoryLabel: "Capitals & Ventures",
    q: "What criteria do you use to evaluate venture and capital opportunities?",
    a: "We utilize a disciplined 6-pillar framework to evaluate every business opportunity before deployment:",
    points: [
      "Business Model & Unit Economics — Verifiable gross margins, customer retention, and clear path to sustainable profitability.",
      "Management & Governance — High-integrity leadership teams with execution resilience and operational track record.",
      "Market Potential & Moat — Meaningful total addressable market (TAM) with durable competitive barriers.",
      "Asset Quality & Cash Flow — Balance sheet robustness and cash-flow durability across diverse economic cycles.",
      "Capital Efficiency — Prudent resource allocation that translates funding directly into enterprise growth.",
      "Downside Risk Protection — Comprehensive scenario modeling and calculated liquidity buffers."
    ]
  },
  {
    id: "cap-2",
    category: "capitals",
    categoryLabel: "Capitals & Ventures",
    q: "What stage of businesses do you invest in or support?",
    a: "We primarily engage with early-stage to growth-stage companies that have validated product-market fit and demonstrated early traction, as well as established mid-market enterprises looking for strategic growth restructuring, balance sheet optimization, or cross-border expansion.",
  },
  {
    id: "cap-3",
    category: "capitals",
    categoryLabel: "Capitals & Ventures",
    q: "Beyond capital injection, what strategic value does Rupee Rise bring?",
    a: "Capital is only the starting point. We offer active governance, balance sheet restructuring, corporate development, executive talent guidance, access to customer networks across our enterprise ecosystem, and expansion pathways into Dubai and Gulf markets.",
  },
  {
    id: "cap-4",
    category: "capitals",
    categoryLabel: "Capitals & Ventures",
    q: "How long does the evaluation and term-sheet process take?",
    a: "Following our Discover → Analyse → Strategise → Execute methodology, our initial evaluation takes approximately 7 to 10 business days. Full due diligence, structuring, and term-sheet execution typically conclude within 3 to 6 weeks, ensuring thoroughness without bureaucratic drag.",
  },

  // --- REAL ESTATE & DUBAI ---
  {
    id: "re-1",
    category: "real-estate",
    categoryLabel: "Real Estate & Dubai",
    q: "What type of real estate assets do you focus on?",
    a: "We focus on institutional-quality commercial assets, strategic land parcels, high-yield residential developments, and joint-development opportunities across Bangalore, Hyderabad, Kochi, and Trivandrum, as well as prime off-plan and luxury secondary assets in Dubai.",
  },
  {
    id: "re-2",
    category: "real-estate",
    categoryLabel: "Real Estate & Dubai",
    q: "How does Rupee Rise facilitate property investments in Dubai?",
    a: "We provide an end-to-end gateway for Indian and international investors to access Dubai's property market. Our services include prime asset selection with tier-one developers, legal title verification, currency structuring, Golden Visa advisory, rental yield optimization, and ongoing asset management.",
  },
  {
    id: "re-3",
    category: "real-estate",
    categoryLabel: "Real Estate & Dubai",
    q: "Do you engage in joint developments (JD) or land syndication?",
    a: "Yes. We partner with land owners, institutional aggregators, and reputed developers to structure joint developments and syndicated acquisitions where our capital, master planning, and marketing capability maximize asset value.",
  },
  {
    id: "re-4",
    category: "real-estate",
    categoryLabel: "Real Estate & Dubai",
    q: "Why Dubai real estate alongside Indian markets?",
    a: "Dubai offers zero property tax, high rental yields (typically 6%–9%), strong capital appreciation driven by global influx, and robust regulatory protections through RERA. Pairing this with India's high-growth domestic urbanization creates an optimal risk-diversified real estate portfolio.",
  },

  // --- PORTFOLIO MANAGEMENT ---
  {
    id: "pm-1",
    category: "portfolio",
    categoryLabel: "Portfolio Management",
    q: "What is your approach to portfolio management and capital preservation?",
    a: "We view capital stewardship as a fiduciary responsibility. Our methodology balances high-upside alternative investments with inflation-hedged, cash-generating assets. We prioritize capital preservation through strict position sizing, liquidity buffers, and macroeconomic trend hedging.",
  },
  {
    id: "pm-2",
    category: "portfolio",
    categoryLabel: "Portfolio Management",
    q: "Who is eligible for Rupee Rise portfolio management solutions?",
    a: "Our advisory and portfolio management mandates are tailored for accredited investors, high-net-worth individuals (HNIs), ultra-HNIs, and family offices seeking structured alternative asset exposure and institutional-grade governance.",
  },
  {
    id: "pm-3",
    category: "portfolio",
    categoryLabel: "Portfolio Management",
    q: "How transparent is the reporting process for investors?",
    a: "Complete transparency is a core non-negotiable principle. Investors receive structured quarterly performance statements, asset valuation updates, risk exposure analyses, and audited disclosures, along with direct periodic reviews with our senior advisory team.",
  },
  {
    id: "pm-4",
    category: "portfolio",
    categoryLabel: "Portfolio Management",
    q: "How are risk containment and downside hedging executed?",
    a: "We employ multi-asset stress testing against stagflation, interest rate shocks, and currency fluctuations. Capital is allocated across diversified vehicles to ensure no single market dislocation threatens the overall portfolio capital base.",
  },

  // --- LEARNING & TRADING ---
  {
    id: "lrn-1",
    category: "learning",
    categoryLabel: "Learning & Academy",
    q: "What is the focus of Rupee Rise’s Learning vertical?",
    a: "Rupee Rise Learning is dedicated to elevating market literacy from retail speculation to institutional-grade execution. We train serious traders and investors in systematic market dynamics, quantitative methods, price action, and disciplined risk management.",
  },
  {
    id: "lrn-2",
    category: "learning",
    categoryLabel: "Learning & Academy",
    q: "What subjects are covered in your training curriculum?",
    a: "The curriculum spans macroeconomic cycles, market microstructure, price action and institutional order flow, derivatives & options strategies, portfolio hedging, algorithmic backtesting, and behavioral trading psychology.",
  },
  {
    id: "lrn-3",
    category: "learning",
    categoryLabel: "Learning & Academy",
    q: "Are the programs beginner-friendly or designed for experienced traders?",
    a: "We offer structured pathways: foundational tracks for beginners to build unshakeable core concepts, and advanced masterclasses for experienced traders aiming to refine institutional execution, manage larger capital, and build automated rules.",
  },
  {
    id: "lrn-4",
    category: "learning",
    categoryLabel: "Learning & Academy",
    q: "Do students receive ongoing market support and practical exposure?",
    a: "Yes. Theory without market exposure is insufficient. Students participate in live market breakdown sessions, structured trade case studies, interactive mentor Q&As, and gain access to an active community of disciplined practitioners.",
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & Ecosystem' },
  { id: 'capitals', label: 'Capitals & Ventures' },
  { id: 'real-estate', label: 'Real Estate & Dubai' },
  { id: 'portfolio', label: 'Portfolio Management' },
  { id: 'learning', label: 'Learning & Academy' },
] as const;

export default function FAQPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([FAQ_DATA[0].id]));
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, 'yes' | 'no'>>({});

  // Filter questions based on category and search query
  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const qLower = searchQuery.toLowerCase().trim();
      const matchQ = item.q.toLowerCase().includes(qLower);
      const matchA = item.a.toLowerCase().includes(qLower);
      const matchPoints = item.points?.some((p) => p.toLowerCase().includes(qLower));
      const matchCat = item.categoryLabel.toLowerCase().includes(qLower);

      return matchQ || matchA || matchPoints || matchCat;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(filteredFAQs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  const handleFeedback = (id: string, type: 'yes' | 'no') => {
    setHelpfulFeedback((prev) => ({ ...prev, [id]: type }));
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* =========================================================================
          CONTROLS: SEARCH & CATEGORY PILLS
          ========================================================================= */}
      <section className="w-full max-w-[1536px] px-4 md:px-10 mx-auto py-12">
        <AnimatedSection delay={0.1}>
          <div className="bg-[#121317] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-sm">
            
            {/* Search Input Bar */}
            <div className="relative w-full mb-8">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-brand-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions by keyword (e.g. Dubai, capital, risk, trading, portfolio)..."
                className="w-full pl-13 pr-12 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/30 transition-all text-sm md:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/40 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 md:gap-3 items-center justify-between border-t border-white/5 pt-6">
              <div className="flex flex-wrap gap-2 md:gap-3">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const count = cat.id === 'all' 
                    ? FAQ_DATA.length 
                    : FAQ_DATA.filter(f => f.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-brand-gold text-brand-dark shadow-md shadow-brand-gold/20 scale-[1.02]'
                          : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive ? 'bg-black/20 text-brand-dark' : 'bg-white/10 text-white/60'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Expand / Collapse All Toggle */}
              <div className="flex items-center gap-3 mt-4 md:mt-0 text-xs">
                <button
                  onClick={expandAll}
                  className="text-white/60 hover:text-brand-gold transition-colors font-medium cursor-pointer"
                >
                  Expand all
                </button>
                <span className="text-white/20">•</span>
                <button
                  onClick={collapseAll}
                  className="text-white/60 hover:text-brand-gold transition-colors font-medium cursor-pointer"
                >
                  Collapse all
                </button>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </section>

      {/* =========================================================================
          FAQ ACCORDION LIST
          ========================================================================= */}
      <section className="w-full max-w-[1536px] px-4 md:px-10 mx-auto pb-20">
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 px-2">
          <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">
            Showing <span className="text-brand-gold font-bold">{filteredFAQs.length}</span> {filteredFAQs.length === 1 ? 'question' : 'questions'}
            {searchQuery && (
              <span> for query &ldquo;<span className="text-white">{searchQuery}</span>&rdquo;</span>
            )}
          </p>
          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-xs text-brand-gold hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredFAQs.length === 0 ? (
          <AnimatedSection delay={0.1}>
            <div className="bg-[#121317] border border-white/5 rounded-3xl p-12 md:p-16 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-white mb-2">No matching questions found</h3>
              <p className="text-white/50 text-sm max-w-md mb-8">
                We couldn&apos;t find any answers matching &ldquo;{searchQuery}&rdquo;. Try another term or speak directly with our team.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Clear search
                </button>
                <a href="/contact">
                  <Button variant="primary" icon="arrow">Ask Our Team</Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openIds.has(faq.id);

              return (
                <AnimatedSection key={faq.id} delay={Math.min(0.05 * index, 0.4)}>
                  <div
                    className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                      isOpen
                        ? 'bg-[#18191d] border-brand-gold/40 shadow-lg shadow-black/40'
                        : 'bg-[#121317] border-white/5 hover:border-white/15'
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-6 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex flex-col gap-2 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold px-2.5 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 inline-block">
                            {faq.categoryLabel}
                          </span>
                        </div>
                        <h3 className="text-base md:text-lg lg:text-xl font-medium text-white leading-snug pt-1">
                          {faq.q}
                        </h3>
                      </div>

                      {/* Animated Plus / Cross Icon */}
                      <div className="pt-1">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
                            isOpen
                              ? 'bg-brand-gold text-brand-dark border-brand-gold rotate-45'
                              : 'bg-white/5 text-brand-gold border-white/10 hover:border-brand-gold/50'
                          }`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Accordion Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 border-t border-white/5">
                            <p className="text-white/70 text-sm md:text-[15px] leading-relaxed mb-4">
                              {faq.a}
                            </p>

                            {faq.points && faq.points.length > 0 && (
                              <ul className="space-y-2.5 my-4 pl-1">
                                {faq.points.map((pt, i) => (
                                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm md:text-[14px] leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Helpful interaction */}
                            <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6 text-xs text-white/40">
                              <span>Was this explanation helpful?</span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={(e) => { e.stopPropagation(); handleFeedback(faq.id, 'yes'); }}
                                  className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                                    helpfulFeedback[faq.id] === 'yes'
                                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-medium'
                                      : 'border-white/10 hover:border-white/30 text-white/60'
                                  }`}
                                >
                                  👍 Yes
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); handleFeedback(faq.id, 'no'); }}
                                  className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                                    helpfulFeedback[faq.id] === 'no'
                                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-400 font-medium'
                                      : 'border-white/10 hover:border-white/30 text-white/60'
                                  }`}
                                >
                                  👎 No
                                </button>
                              </div>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        )}
      </section>

      {/* =========================================================================
          KEY PILLARS & STATS STRIP
          ========================================================================= */}
      <section className="w-full bg-[#fcfaf5] text-brand-dark py-16 px-4 md:px-10 border-y border-black/5">
        <div className="max-w-[1536px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-black/10 shadow-sm">
            <span className="text-3xl md:text-4xl font-light text-brand-dark font-mono mb-2">04</span>
            <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Interconnected Verticals</span>
            <span className="text-black/60 text-xs mt-1">Capitals · Real Estate · Portfolio · Learning</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-black/10 shadow-sm">
            <span className="text-3xl md:text-4xl font-light text-brand-dark font-mono mb-2">02</span>
            <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Strategic Markets</span>
            <span className="text-black/60 text-xs mt-1">India &amp; International (Dubai)</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-black/10 shadow-sm">
            <span className="text-3xl md:text-4xl font-light text-brand-dark font-mono mb-2">05</span>
            <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Core Principles</span>
            <span className="text-black/60 text-xs mt-1">Knowledge, Risk, Discipline, Transparency, Value</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-black/10 shadow-sm">
            <span className="text-3xl md:text-4xl font-light text-brand-dark font-mono mb-2">100%</span>
            <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Direct Access</span>
            <span className="text-black/60 text-xs mt-1">Zero layers between thinking and doing</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STILL HAVE QUESTIONS? CONTACT CARD
          ========================================================================= */}
      <section className="w-full max-w-[1536px] px-4 md:px-10 mx-auto py-24">
        <AnimatedSection delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden py-16 md:py-24 px-8 md:px-16 text-center bg-[#121317] border border-white/5 shadow-2xl flex flex-col items-center">
            
            {/* Ambient gold glow background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,_rgba(201,169,106,0.18)_0%,_rgba(18,19,23,0)_70%)]"></div>
            </div>

            <div className="relative z-10 max-w-2xl flex flex-col items-center">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
                Personalized Consultation
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
                Still have an unanswered question?
              </h2>
              <p className="text-[#93949A] text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                Whether you are exploring capital for your venture, evaluating real estate in Dubai or India, or seeking portfolio guidance, our advisory specialists are here to assist.
              </p>

              {/* Direct Quick Info Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mb-10 text-left">
                <a
                  href="mailto:info@rupeerise.com"
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/40 transition-colors flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Email Us</p>
                    <p className="text-white text-xs font-medium group-hover:text-brand-gold transition-colors">info@rupeerise.com</p>
                  </div>
                </a>

                <a
                  href="tel:+917736680099"
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/40 transition-colors flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-semibold">Direct Call</p>
                    <p className="text-white text-xs font-medium group-hover:text-brand-gold transition-colors">+91 77366 80099</p>
                  </div>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="/contact">
                  <Button variant="primary" icon="calendar">Get in touch with an advisor</Button>
                </a>
                <a
                  href="https://wa.me/917736680099"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" icon="arrow">Chat on WhatsApp</Button>
                </a>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
