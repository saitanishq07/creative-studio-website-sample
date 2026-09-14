import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MarqueeSection() {
  const itemsRow1 = [
    'CREATIVE DIRECTION',
    'DIGITAL EXPERIENCES',
    'BRAND IDENTITY',
    'MOTION DESIGN',
    'CREATIVE TECHNOLOGY',
    'ART DIRECTION'
  ];

  const itemsRow2 = [
    'WE MAKE BRANDS IMPOSSIBLE TO IGNORE',
    'EXPERIMENTAL TYPOGRAPHY',
    'SPATIAL COMPUTING',
    'HIGH-MOTION DIGITAL',
    'EDITORIAL DESIGN'
  ];

  return (
    <section id="marquee" className="py-10 bg-[#0a0a0e] border-y border-white/10 overflow-hidden select-none">
      {/* Row 1 - Left to Right */}
      <div className="flex w-full overflow-hidden py-3">
        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-noir-text/90 whitespace-nowrap">
          {itemsRow1.map((item, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span className="hover:text-[#ff3b00] transition-colors duration-300 cursor-default">
                {item}
              </span>
              <Sparkles className="w-5 h-5 text-[#ff3b00] shrink-0" />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-noir-text/90 whitespace-nowrap">
          {itemsRow1.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-12">
              <span className="hover:text-[#ff3b00] transition-colors duration-300 cursor-default">
                {item}
              </span>
              <Sparkles className="w-5 h-5 text-[#ff3b00] shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left (Reverse) */}
      <div className="flex w-full overflow-hidden py-3 opacity-60">
        <div className="flex min-w-full shrink-0 animate-marquee-reverse items-center justify-around gap-12 text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-stroke whitespace-nowrap">
          {itemsRow2.map((item, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span className="hover:text-white transition-colors duration-300 cursor-default">
                {item}
              </span>
              <span className="text-[#ff3b00] font-mono text-sm">/</span>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee-reverse items-center justify-around gap-12 text-2xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-stroke whitespace-nowrap">
          {itemsRow2.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-12">
              <span className="hover:text-white transition-colors duration-300 cursor-default">
                {item}
              </span>
              <span className="text-[#ff3b00] font-mono text-sm">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
