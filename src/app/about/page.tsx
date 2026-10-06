import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import Button from '@/components/Button';
import PatternWaves from '@/components/PatternWaves';

import PageHero from '@/components/PageHero';

export const metadata = {
  title: "About Us | Rupee Rise Ventures",
  description: "Rupee Rise Ventures is a multi-business venture company focused on identifying opportunities, building businesses and enabling sustainable growth.",
};

export default function AboutPage() {
  const leadership = [
    { name: "Pooja Raj", role: "Founder & CEO", img: "/images/woman-high-key-portrait.jpg" },
    { name: "Placeholder Name", role: "Executive Director", img: "/images/woman-smiling-long-hair.jpg" },
    { name: "Placeholder Name", role: "Head of Strategy", img: "/images/man-smiling-sweater.jpg" },
    { name: "Placeholder Name", role: "Operations Lead", img: "/images/woman-smiling-over-shoulder.jpg" },
  ];

  const principles = [
    { title: "Knowledge before action", desc: "Understand first. Act second." },
    { title: "Risk before returns", desc: "Every opportunity involves risk. Understanding it comes first." },
    { title: "Disciplined evaluation", desc: "Opportunities are assessed on fundamentals, not momentum." },
    { title: "Transparent communication", desc: "Clear information at every stage, including the risks." },
    { title: "Relationships over transactions", desc: "We build for the long term, not the one-time deal." },
  ];

  const aboutHeroTitle = (
    <>
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.05s' }}>A</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.08s' }}>venture</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.11s' }}>ecosystem</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.14s' }}>built</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.17s' }}>around</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.20s' }}>opportunities,</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.23s' }}>businesses</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.26s' }}>and</span>{' '}
      <span className="inline-block animate-enter-word" style={{ animationDelay: '0.29s' }}>growth.</span>
    </>
  );

  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col items-center">
      <div className="w-full max-w-[1536px] px-4 md:px-10 mx-auto flex flex-col pb-24">
        <Header />

        {/* 1. HERO */}
        <PageHero 
          label="About Us"
          title={aboutHeroTitle}
          description="Rupee Rise Ventures is a multi-business venture company focused on identifying opportunities, building businesses and enabling sustainable growth — bringing different areas of expertise together under one ecosystem."
          footerText="Kochi · Trivandrum · Hyderabad · Bangalore · Dubai"
          size="large"
        />

        {/* 2. WHAT WE DO */}
        <div className="py-32 flex flex-col items-center text-center">
          <AnimatedSection delay={0.1}>
            <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-6">What We Do</p>
            <h2 className="text-3xl md:text-[44px] font-medium leading-[1.2] max-w-4xl mb-24 text-white">
              Finance, strategy 
              <span className="inline-block align-middle mx-4 overflow-hidden rounded-full w-20 h-10 relative border border-white/10">
                 <Image src="/images/gold-coin-stacks.jpg" fill alt="Finance" className="object-cover" />
              </span> 
              and growth across one connected ecosystem 
              <span className="inline-block align-middle mx-4 overflow-hidden rounded-full w-20 h-10 relative border border-white/10">
                 <Image src="/images/glowing-globe-africa-europe.jpg" fill alt="Ecosystem" className="object-cover" />
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
            <div className="flex flex-col gap-6">
              <AnimatedSection delay={0.2} className="h-full">
                <div className="bg-[#121317] p-8 rounded-3xl border border-white/5 h-full flex flex-col justify-between min-h-[220px]">
                  <div>
                    <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4">Verticals</p>
                    <h3 className="text-5xl font-light mb-4 text-white">04</h3>
                  </div>
                  <p className="text-[#93949A] text-[13px] leading-relaxed">Capitals, Real Estate, Investors & Portfolio Management, Learning.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="h-full">
                <div className="bg-[#121317] p-8 rounded-3xl border border-white/5 h-full flex flex-col justify-between min-h-[220px]">
                  <div>
                    <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4">Markets</p>
                    <h3 className="text-5xl font-light mb-4 text-white">02</h3>
                  </div>
                  <p className="text-[#93949A] text-[13px] leading-relaxed">Strategic real estate opportunities across India and Dubai.</p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.4} className="h-full">
              <div className="bg-[#121317] rounded-3xl border border-white/5 relative overflow-hidden h-[400px] md:h-full group">
                <Image src="/images/Wave.jpg" fill alt="Gold Wave" className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white font-medium tracking-wide">
                  Finance • Strategy • Growth
                </div>
              </div>
            </AnimatedSection>

            <div className="flex flex-col gap-6">
              <AnimatedSection delay={0.5} className="h-full">
                <div className="bg-[#121317] p-8 rounded-3xl border border-white/5 h-full flex items-center min-h-[220px]">
                  <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed italic">
                    "Growth begins with the right opportunity, the right strategy and the courage to build."
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.6} className="h-full">
                <div className="bg-[#121317] p-8 rounded-3xl border border-white/5 h-full flex flex-col justify-between min-h-[220px]">
                  <div>
                    <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4">Cities</p>
                    <h3 className="text-5xl font-light mb-4 text-white">04</h3>
                  </div>
                  <p className="text-[#93949A] text-[13px] leading-relaxed">Kochi, Trivandrum, Hyderabad and Bangalore.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* 3. OUR STORY */}
        <div className="py-24 border-t border-white/5">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
            <AnimatedSection delay={0.1} className="lg:w-1/3">
              <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-6">Our Story</p>
              <h2 className="text-3xl md:text-[40px] font-medium leading-[1.1] text-white">More than one business. One way of thinking.</h2>
            </AnimatedSection>
            <div className="lg:w-2/3 flex flex-col gap-6 text-[#93949A] text-[15px] leading-relaxed">
              <AnimatedSection delay={0.2}>
                <p>
                  We operate across four core verticals — Capitals, Real Estate, Investors & Portfolio Management, and Learning. Each stands on its own, but all are connected by one approach: think strategically, act with purpose and build for sustainable growth.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p>
                  Our approach is built around understanding opportunities from multiple perspectives and creating strategies that translate potential into meaningful, long-term value.
                </p>
              </AnimatedSection>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
            <AnimatedSection delay={0.1}>
              <h3 className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Our Vision</h3>
              <p className="text-[#93949A] text-[15px] leading-relaxed max-w-md">To build an ecosystem of businesses and opportunities that creates lasting value and sustainable growth.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h3 className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Our Mission</h3>
              <p className="text-[#93949A] text-[15px] leading-relaxed max-w-md">To connect people, capital, opportunities and knowledge to build stronger businesses and create meaningful growth.</p>
            </AnimatedSection>
          </div>
        </div>

        {/* 4. PRINCIPLES */}
        <div className="py-24 border-t border-white/5">
          <AnimatedSection delay={0.1}>
            <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-6">What We Stand For</p>
            <h2 className="text-3xl md:text-[40px] font-medium leading-tight mb-16 text-white">Five principles we don't negotiate on</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {principles.map((p, i) => (
              <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                <div className="bg-[#121317] p-8 rounded-3xl border border-white/5 flex flex-col gap-4 h-full">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-4 border border-brand-gold/20">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5l10 -10"></path></svg>
                  </div>
                  <h3 className="text-white text-[15px] font-medium leading-tight">{p.title}</h3>
                  <p className="text-[#93949A] text-[13px] leading-relaxed mt-2">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* 5. LEADERSHIP */}
        <div className="py-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <AnimatedSection delay={0.1}>
              <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-6">Leadership</p>
              <h2 className="text-3xl md:text-[40px] font-medium leading-tight text-white">The people behind Rupee Rise</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-[#93949A] text-[10px] uppercase tracking-[0.2em] font-bold text-left md:text-right max-w-[200px]">
                Direct access. No layers between thinking and doing.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                <div className="group cursor-pointer">
                  <div className="w-full aspect-[3/4] rounded-3xl overflow-hidden relative mb-6 border border-white/5">
                    <Image src={person.img} fill alt={person.name} className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white text-[10px] font-bold tracking-wider border border-white/10">
                      0{i + 1}
                    </div>
                  </div>
                  <h3 className="text-white text-[17px] font-medium mb-1">{person.name}</h3>
                  <p className="text-[#93949A] text-[13px]">{person.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* 6. WHO WE WORK WITH (Cream Band) */}
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-4 md:px-10">
        <div className="max-w-[1310px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <AnimatedSection delay={0.1}>
              <p className="text-[#c7a468] text-[10px] uppercase tracking-widest font-bold mb-6">Who We Work With</p>
              <h2 className="text-3xl md:text-[44px] font-medium leading-[1.1] mb-12">Built for builders, investors and learners</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {['Entrepreneurs', 'Startups', 'Business Owners', 'Established Companies', 'Investors', 'Families & HNIs', 'Property Buyers & Partners', 'Learners'].map((tag, i) => (
                  <span key={tag} className="px-5 py-2.5 rounded-full border border-black/10 text-[13px] font-medium text-black/70 hover:bg-black hover:text-white transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <div className="lg:w-1/2">
            <AnimatedSection delay={0.3} className="h-full">
              <p className="text-[#c7a468] text-[10px] uppercase tracking-widest font-bold mb-6">Our Presence</p>
              <div className="bg-black/5 rounded-3xl p-8 md:p-12 h-[calc(100%-40px)] flex flex-col justify-between min-h-[300px] relative overflow-hidden">
                 <div className="flex flex-col gap-6 relative z-10">
                   <div className="flex items-center gap-4 border-b border-black/10 pb-6">
                     <span className="w-2.5 h-2.5 rounded-full bg-[#c7a468]"></span>
                     <span className="text-[15px] font-medium text-black/80">India — Kochi, Trivandrum, Hyderabad, Bangalore</span>
                   </div>
                   <div className="flex items-center gap-4">
                     <span className="w-2.5 h-2.5 rounded-full bg-[#c7a468]"></span>
                     <span className="text-[15px] font-medium text-black/80">International — Dubai</span>
                   </div>
                 </div>
                 <div className="absolute bottom-0 right-0 w-full h-48 pointer-events-none z-0">
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, black 2px, transparent 0)', backgroundSize: '16px 16px' }}></div>
                    <svg className="w-56 h-56 text-[#c7a468]/10 absolute -bottom-16 -right-12 stroke-[0.5px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                 </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* 7. CTA & FOOTER */}
      <div className="w-full bg-brand-dark text-brand-light py-24 px-4 md:px-10">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-24">
          {/* Custom CTA */}
          <section className="w-full relative rounded-3xl overflow-hidden py-24 md:py-32 px-8 flex flex-col items-center justify-center text-center mt-4 bg-[#121317]">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(214,183,122,0.15)_0%,_rgba(18,19,23,0)_70%)] pointer-events-none"></div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center max-w-2xl">
              <AnimatedSection delay={0.1} direction="up">
                <h2 className="text-4xl md:text-[44px] font-medium mb-6 leading-tight tracking-tight text-white">
                  Have an opportunity? Let's talk.
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2} direction="up">
                <p className="text-[#93949A] text-[15px] mb-12 max-w-md mx-auto leading-relaxed">
                  Whether you're building a business, looking for strategic capital, considering real estate or expanding your knowledge — we'd like to hear from you.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} direction="up">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a href="/contact">
                    <Button variant="primary" icon="calendar">Get in touch</Button>
                  </a>
                  <a href="/#verticals">
                    <Button variant="secondary" icon="arrow">Explore our ventures</Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}
