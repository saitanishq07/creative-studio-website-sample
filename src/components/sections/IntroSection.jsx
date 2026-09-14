import React from 'react';
import { motion } from 'framer-motion';

export default function IntroSection() {
  const statementWords = "We work with ambitious brands that understand that attention is earned, not requested.".split(" ");

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column Label */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
            01 / PHILOSOPHY
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            WE DON'T DESIGN FOR EVERYONE.
          </h2>
        </div>

        {/* Right Column Progressive Reveal Statement */}
        <div className="lg:col-span-8">
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-2xl sm:text-4xl md:text-5xl font-editorial font-light leading-relaxed text-noir-text">
            {statementWords.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0.15, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className={idx % 4 === 0 ? 'text-[#ff3b00] font-normal italic' : 'text-white'}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-6 text-xs font-mono text-noir-muted">
            <div>
              <p className="text-white font-bold mb-1">UNCONVENTIONAL</p>
              <p>We reject cookie-cutter SaaS layouts and generic template standards.</p>
            </div>
            <div>
              <p className="text-white font-bold mb-1">INTENTION</p>
              <p>Every animation, layout shift, and typography scale has clear visual purpose.</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-white font-bold mb-1">IMPACT</p>
              <p>Crafting digital artifacts that resonate, convert, and get remembered.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
