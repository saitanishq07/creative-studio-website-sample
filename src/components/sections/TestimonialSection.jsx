import React from 'react';
import { motion } from 'framer-motion';

export default function TestimonialSection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#09090d] border-b border-white/10 relative overflow-hidden select-none">
      {/* Background Oversized Quote Mark */}
      <div className="absolute top-0 left-6 md:left-12 font-editorial font-black text-[200px] md:text-[350px] text-white/[0.03] pointer-events-none leading-none select-none">
        “
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase mb-8"
        >
          08 / TESTIMONIAL
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-editorial text-3xl sm:text-5xl md:text-6xl text-white leading-tight font-light mb-12 italic"
        >
          "NOIR didn't just redesign our brand. They changed the way people experienced it."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#ff3b00] mb-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
              alt="Maya Chen"
              className="w-full h-full object-cover filter grayscale"
            />
          </div>
          <cite className="not-italic font-display font-black text-xl text-white">
            Maya Chen
          </cite>
          <span className="font-mono text-xs text-noir-muted uppercase tracking-wider">
            Creative Director, AURA Systems
          </span>
        </motion.div>
      </div>
    </section>
  );
}
