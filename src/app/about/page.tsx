import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Timeline from '@/components/Timeline';
import AnimatedSection from '@/components/AnimatedSection';
import ScrollHeading from '@/components/ScrollHeading';
import Image from 'next/image';

export const metadata = {
  title: "About Us | Rupee Rise Ventures",
  description: "A multi-business venture company built around finance, strategy and growth.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0b0d] text-brand-light font-sans flex flex-col items-center">
      <div className="w-full max-w-[1536px] px-6 md:px-10 mx-auto flex flex-col">
        <Header />
        
        {/* About Hero Section */}
        <div className="py-24 md:py-32 flex flex-col gap-12 relative">
          <AnimatedSection delay={0.1}>
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
              Our Story
            </p>
            <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tight max-w-4xl">
              More than a venture.<br />
              <span className="text-white/40">An ecosystem for growth.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="up">
            <div className="w-full h-[400px] md:h-[600px] relative rounded-3xl overflow-hidden mt-8 border border-white/10">
              <Image 
                src="/images/Wave.jpg" 
                alt="About Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/50 to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1310px] mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
          <div className="md:w-1/2">
             <ScrollHeading 
               className="text-4xl md:text-5xl font-medium leading-[1.15] tracking-tight sticky top-32 justify-start"
               text="Think strategically, act with purpose."
             />
          </div>
          <div className="md:w-1/2 flex flex-col gap-8 text-lg text-brand-dark/70 leading-relaxed">
             <AnimatedSection delay={0.1} direction="up">
               <p>
                 Rupee Rise Ventures is a multi-business venture company built around finance, strategy and growth. We bring together capital, opportunities, businesses and knowledge across multiple verticals, with a focus on identifying potential and creating long-term value.
               </p>
             </AnimatedSection>
             <AnimatedSection delay={0.2} direction="up">
               <p>
                 From capital and real estate to investor solutions and learning, our businesses are connected by one common approach — think strategically, act with purpose and build for sustainable growth.
               </p>
             </AnimatedSection>
             <AnimatedSection delay={0.3} direction="up">
               <div className="p-8 bg-black/5 rounded-2xl mt-4">
                 <h4 className="text-xl font-medium text-brand-dark mb-4">Our Core Philosophy</h4>
                 <ul className="flex flex-col gap-4 text-sm">
                   <li className="flex items-start gap-3">
                     <span className="text-brand-gold mt-1">✦</span>
                     <span><strong>Strategic:</strong> We look at the bigger picture before making decisions.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="text-brand-gold mt-1">✦</span>
                     <span><strong>Structured:</strong> We follow a systematic approach rather than relying on guesswork.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="text-brand-gold mt-1">✦</span>
                     <span><strong>Long-Term:</strong> We focus on sustainable growth rather than short-term outcomes.</span>
                   </li>
                 </ul>
               </div>
             </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="w-full bg-brand-dark text-brand-light py-24 px-6 md:px-10">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-24">
          <Timeline />
          <CTA />
          <Footer />
        </div>
      </div>
    </main>
  );
}
