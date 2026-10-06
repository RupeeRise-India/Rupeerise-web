'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import PageHero from '@/components/PageHero';
import Button from '@/components/Button';

// Dummy Email Signup
function NotifyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'Learning',
          email
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
    >
      {submitted ? (
        <div className="w-full bg-brand-gold/10 border border-brand-gold/30 rounded-full py-3 px-6 text-brand-gold text-center text-sm font-medium">
          Thank you! You're on the list.
        </div>
      ) : (
        <>
          <input 
            required 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            className="flex-1 bg-black/20 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-brand-gold/50 text-sm"
          />
          <button type="submit" disabled={loading} className="bg-brand-gold text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white transition-colors whitespace-nowrap disabled:opacity-50">
            {loading ? 'Submitting...' : 'Notify Me'}
          </button>
        </>
      )}
    </form>
  );
}

export default function LearningPage() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [activeResourceTab, setActiveResourceTab] = useState('courses');

  const heroTitle = (
    <>
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.05s' }}>Learn.</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.08s' }}>Understand.</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.11s' }}>Grow.</span>
    </>
  );

  const tracks = [
    { num: "01", title: "Financial Fundamentals", topics: ["Personal Finance", "Budgeting & Saving", "Understanding Credit", "Tax Planning Basics", "Financial Goal Setting"] },
    { num: "02", title: "Investing", topics: ["Asset Classes", "Portfolio Construction", "Risk vs Reward", "Value Investing Principles", "Long-Term Wealth Creation"] },
    { num: "03", title: "Trading", subtitle: "Learn the process. Understand the risk. Develop discipline.", topics: ["Market Mechanics", "Technical Analysis", "Risk Management Rules", "Trading Psychology", "Strategy Development"] },
    { num: "04", title: "Business & Entrepreneurship", topics: ["Business Structuring", "Capital Raising", "Financial Modeling", "Strategic Planning", "Scaling Operations"] },
    { num: "05", title: "Practical Market Learning", topics: ["Case Studies", "Real-World Scenarios", "Market Updates", "Expert Insights", "Interactive Workshops"] }
  ];

  const philosophies = [
    { title: "Knowledge Before Action", desc: "Understand the fundamentals deeply before making any financial decisions." },
    { title: "Risk Before Returns", desc: "Focus on capital preservation and understanding downside risk first." },
    { title: "Discipline Over Emotion", desc: "Develop structured processes that remove emotional bias from investing." },
    { title: "Continuous Learning", desc: "The market constantly evolves; so must your knowledge and strategies." }
  ];

  const journey = ["Learn", "Practice", "Analyse", "Develop", "Grow"];
  const resourceTabs = ["Courses", "Workshops", "Articles", "Videos", "Guides"];

  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col items-center">
      <div className="w-full max-w-[1536px] px-4 md:px-10 mx-auto flex flex-col pb-24">
        <Header />

        {/* HERO */}
        <PageHero 
          label="Learning"
          title={heroTitle}
          description="Building financial knowledge for a smarter future."
          size="large"
        />

        {/* INTRO */}
        <div className="py-24 md:py-32 border-b border-white/5 flex flex-col items-center text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white mb-8">Financial knowledge shouldn't be complicated.</h2>
            <p className="text-[#93949A] text-lg leading-relaxed">
               We believe that practical, structured learning is the foundation of sustainable financial growth. Our curriculum is designed to demystify complex concepts, focusing on real-world application rather than abstract theory. We teach what works.
            </p>
          </AnimatedSection>
        </div>

        {/* WHAT WE TEACH (SIGNATURE ACCORDION) */}
        <div className="py-24 md:py-32 border-b border-white/5 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
             <AnimatedSection>
                <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-6">What We Teach</h3>
                <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">A curriculum built for real-world application.</h2>
             </AnimatedSection>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-4">
            {tracks.map((track, i) => (
              <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                <div 
                  className={`border ${activeTrack === i ? 'border-brand-gold/30 bg-black/40' : 'border-white/5 bg-[#121317] hover:border-white/20'} rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer`}
                  onClick={() => setActiveTrack(i === activeTrack ? -1 : i)}
                >
                   <div className="p-8 flex items-center justify-between">
                     <div className="flex items-center gap-6">
                       <span className="text-brand-gold/50 font-mono text-sm">{track.num}</span>
                       <h3 className={`text-xl md:text-2xl font-medium ${activeTrack === i ? 'text-brand-gold' : 'text-white'}`}>
                         {track.title}
                       </h3>
                     </div>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-brand-gold transition-transform duration-300 ${activeTrack === i ? 'rotate-180' : ''}`}>
                        <path d="M6 9l6 6 6-6"></path>
                     </svg>
                   </div>
                   
                   <div className={`px-8 pb-8 transition-all duration-500 ease-in-out ${activeTrack === i ? 'block' : 'hidden'}`}>
                      {track.subtitle && (
                        <p className="text-white/60 text-sm italic mb-6">{track.subtitle}</p>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {track.topics.map(topic => (
                          <div key={topic} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2"></span>
                            <span className="text-white/80">{topic}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* LEARNING JOURNEY & PHILOSOPHY */}
        <div className="py-24 md:py-32 border-b border-white/5 flex flex-col lg:flex-row gap-16 lg:gap-24">
           {/* Journey (Vertical) */}
           <div className="lg:w-1/3 flex flex-col items-center">
             <AnimatedSection>
               <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-16 text-center">The Journey</h3>
               <div className="flex flex-col items-center gap-6">
                 {journey.map((step, i, arr) => (
                   <React.Fragment key={step}>
                     <div className="bg-[#121317] border border-white/5 w-48 py-4 rounded-full text-center text-white font-medium tracking-wide">
                       {step}
                     </div>
                     {i !== arr.length - 1 && (
                       <svg width="20" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-gold">
                         <path d="M12 4v16M5 13l7 7 7-7" />
                       </svg>
                     )}
                   </React.Fragment>
                 ))}
               </div>
             </AnimatedSection>
           </div>
           
           {/* Philosophy */}
           <div className="lg:w-2/3">
             <AnimatedSection>
               <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12">Our Philosophy</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {philosophies.map((phil, i) => (
                   <div key={i} className="bg-[#121317] border border-white/5 rounded-3xl p-8 h-full">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5l10 -10"></path></svg>
                      </div>
                      <h4 className="text-white text-lg font-medium mb-3">{phil.title}</h4>
                      <p className="text-[#93949A] text-sm leading-relaxed">{phil.desc}</p>
                   </div>
                 ))}
               </div>
             </AnimatedSection>
           </div>
        </div>

        {/* RESOURCES (CMS-READY) */}
        <div className="py-24 border-b border-white/5">
           <AnimatedSection>
             <h3 className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-12 text-center">Learning Resources</h3>
           </AnimatedSection>
           
           <div className="flex flex-col items-center w-full">
              <AnimatedSection delay={0.1} className="w-full max-w-3xl overflow-x-auto pb-4 mb-12 no-scrollbar">
                <div className="flex justify-center min-w-max gap-2 bg-black/20 p-1 rounded-full border border-white/10 mx-auto">
                  {resourceTabs.map(tab => (
                    <button 
                      key={tab}
                      onClick={() => setActiveResourceTab(tab.toLowerCase())}
                      className={`px-6 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-colors ${activeResourceTab === tab.toLowerCase() ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[1, 2, 3].map(item => (
                     <div key={item} className="bg-[#121317] border border-white/5 rounded-3xl p-8 aspect-[4/3] flex flex-col justify-center items-center text-center relative overflow-hidden group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/30 mb-4 group-hover:scale-110 transition-transform duration-500">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <h4 className="text-white font-medium mb-2">{resourceTabs.find(t => t.toLowerCase() === activeResourceTab)}</h4>
                        <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Coming Soon</p>
                     </div>
                   ))}
                </div>
              </AnimatedSection>
           </div>
        </div>

        {/* CLOSING & CTA */}
        <div className="py-32 flex flex-col items-center text-center max-w-2xl mx-auto">
           <AnimatedSection>
             <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white mb-8">Learn from people who understand the journey.</h2>
             <p className="text-[#93949A] text-lg leading-relaxed mb-16">
               Our programs are built on decades of real market experience, distilled into structured frameworks that you can apply immediately.
             </p>
           </AnimatedSection>
           
           <AnimatedSection delay={0.2} className="w-full">
             <div className="bg-[#121317] rounded-3xl p-10 md:p-16 border border-white/5 w-full">
               <h3 className="text-2xl text-white font-medium mb-8">Start learning</h3>
               <NotifyForm />
             </div>
           </AnimatedSection>
        </div>

      </div>
      
      {/* COMPLIANCE FOOTER */}
      <div className="w-full bg-[#0a0b0d] border-t border-white/5 py-8 px-4 md:px-10 text-center">
         <p className="text-[#93949A] text-[10px] max-w-4xl mx-auto uppercase tracking-wider leading-relaxed">
           Disclaimer: Rupee Rise Learning provides educational content only and does not constitute financial, investment, or trading advice. Past performance is not indicative of future results. All trading and investment involves risk, and you should perform your own due diligence before making any financial decisions.
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
