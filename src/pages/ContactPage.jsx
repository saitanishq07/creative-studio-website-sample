import React from 'react';
import ContactSection from '../components/sections/ContactSection';

export default function ContactPage() {
  return (
    <div className="pt-36 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
          INITIATE COLLABORATION
        </span>
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter text-white max-w-5xl leading-none">
          LET'S MAKE SOMETHING WORTH TALKING ABOUT.
        </h1>
      </div>
      <ContactSection />
    </div>
  );
}
