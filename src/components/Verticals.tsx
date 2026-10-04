import React from 'react';
import Image from 'next/image';
import Button from './Button';
import AnimatedSection from './AnimatedSection';
import ScrollHeading from './ScrollHeading';

export default function Verticals() {
  const cards = [
    {
      title: "Capital",
      subtitle: "Capital Management",
      desc: "Our structural foundation builds the network of interconnected ecosystem layers.",
      img: "/images/gold-coin-stacks.jpg",
      href: "/verticals/capital"
    },
    {
      title: "Real Estate",
      subtitle: "RE Brokerage",
      desc: "Agility recognizes and creates movement connecting our global networks.",
      img: "/images/dubai-night-cityscape.jpg",
      href: "/verticals/real-estate"
    },
    {
      title: "Investment & Portfolio",
      subtitle: "Asset Protection",
      desc: "Strategic investments to secure and grow our foundation globally.",
      img: "/images/glowing-globe-africa-europe.jpg",
      href: "/verticals/investors"
    },
    {
      title: "Learning",
      subtitle: "Knowledge Sharing",
      desc: "Empowering our ecosystem through data and collective continuous growth.",
      img: "/images/office-meeting.jpg",
      href: "/verticals/learning"
    }
  ];

  return (
    <section className="w-full flex flex-col items-center">
      <AnimatedSection className="text-center mb-16 max-w-2xl" delay={0.1}>
        <p className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-4">
          Our Verticals
        </p>
        <ScrollHeading 
          text="Four verticals. One vision."
          className="text-4xl md:text-[40px] font-medium mb-6 leading-[1.1] text-brand-dark"
        />
        <p className="text-black/60 text-sm leading-relaxed">
          The ecosystem works interdependently, creating a continuous cycle of sustainable wealth and opportunity.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {cards.map((card, idx) => (
          <AnimatedSection key={idx} delay={0.1 + idx * 0.1}>
            <a href={card.href} className="relative rounded-[2rem] overflow-hidden min-h-[420px] p-8 flex flex-col justify-end group cursor-pointer h-full block">
              <div className="absolute inset-0 z-0">
                <Image 
                  src={card.img} 
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="relative z-10 text-brand-light transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-brand-gold text-[9px] uppercase tracking-widest font-bold mb-2">
                  {card.subtitle}
                </p>
                <h3 className="text-2xl font-medium mb-4">{card.title}</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                  {card.desc}
                </p>
                <Button variant="secondary" icon="arrow">Explore</Button>
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
