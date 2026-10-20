import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import LogoTicker from '@/components/LogoTicker';
import FeatureGrid from '@/components/FeatureGrid';
import Verticals from '@/components/Verticals';
import Timeline from '@/components/Timeline';
import Strategy from '@/components/Strategy';
import CaseStudy from '@/components/CaseStudy';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-brand-light font-sans flex flex-col w-full overflow-x-hidden">
      <div className="w-full max-w-[1536px] px-4 sm:px-6 md:px-10 mx-auto flex flex-col pb-16 sm:pb-24">
        <Header />
        <div className="flex flex-col gap-16 sm:gap-24 mt-4">
          <Hero />
          <Stats />
          {/* <LogoTicker /> */}
          <FeatureGrid />
        </div>
      </div>
      
      <div className="w-full bg-[#fcfaf5] text-brand-dark py-16 sm:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="max-w-[1536px] mx-auto">
          <Verticals />
        </div>
      </div>
      
      <div className="w-full bg-brand-dark text-brand-light py-16 sm:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-16 sm:gap-24">
          <Timeline />
        </div>
      </div>

      <div className="w-full bg-[#fcfaf5] text-brand-dark py-16 sm:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="max-w-[1536px] mx-auto">
          <Strategy />
        </div>
      </div>

      <div className="w-full bg-brand-dark text-brand-light py-16 sm:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="max-w-[1536px] mx-auto flex flex-col gap-16 sm:gap-24">
          <CaseStudy />
          <FAQ />
          <CTA />
          <Footer />
        </div>
      </div>
    </main>
  );
}
