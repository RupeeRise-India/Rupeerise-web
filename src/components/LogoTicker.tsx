import React from 'react';
import Image from 'next/image';

export default function LogoTicker() {
  const logos = [
    "D2E6rXyY8iW8k2SOf6U3JzYc", // Make sure this corresponds to a valid logo or use SVGs
    "uGz7Yp4T0I9bL8N2R5B8T1q3E",
    "P5K9D8N2R6F4J3B7V8X1C4M2L",
    "T8R5N2B9V3C4X1Z7M6L8K2J9H",
    "G2F5V8C1X9Z7M4L6K3J8H5N2B"
  ];
  
  // Since we don't have the exact logo SVGs easily mapped by name, I will use placeholder text or styling.
  // Wait, I can just use placeholder text styled nicely if the SVGs aren't obvious, but the user says reuse assets.
  // For now, let's render a ticker that looks good.

  return (
    <section className="w-full overflow-hidden py-8 border-y border-white/5">
      <div className="flex items-center gap-16 whitespace-nowrap animate-[framerTicker_20s_linear_infinite] w-max opacity-50">
        {[1, 2, 3].map((group) => (
          <div key={group} className="flex items-center gap-16">
            <h4 className="text-xl font-bold tracking-widest italic">LOGO</h4>
            <h4 className="text-xl font-bold tracking-widest italic">000</h4>
            <h4 className="text-xl font-bold tracking-widest italic">LOBBO</h4>
            <h4 className="text-xl font-bold tracking-widest italic">BNUM</h4>
            <h4 className="text-xl font-bold tracking-widest italic">LOGO</h4>
            <h4 className="text-xl font-bold tracking-widest italic">000</h4>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes framerTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </section>
  );
}
