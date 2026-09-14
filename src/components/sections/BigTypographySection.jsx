import React from 'react';
import { motion } from 'framer-motion';

export default function BigTypographySection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#050507] border-b border-white/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col justify-center space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="font-mono text-xs text-noir-muted uppercase tracking-widest block mb-4">
            — MANIFESTO / STATEMENT
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-noir-muted leading-none">
            GOOD DESIGN
          </h2>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-stroke leading-none">
            GETS ATTENTION.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="pt-8"
        >
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-[#ff3b00] leading-none">
            GREAT DESIGN
          </h2>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white leading-none">
            GETS REMEMBERED.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
