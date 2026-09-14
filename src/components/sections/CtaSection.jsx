import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MagneticButton from '../MagneticButton';

export default function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-black border-b border-white/10 text-center relative overflow-hidden">
      {/* Background Subtle Red Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-[#ff3b00]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center space-y-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase"
        >
          09 / NEXT STEPS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter text-white max-w-4xl leading-none"
        >
          HAVE AN IDEA WORTH MAKING REAL?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-editorial text-2xl md:text-3xl text-noir-muted italic max-w-xl"
        >
          "Let's create something people remember."
        </motion.p>

        <div className="pt-8">
          <MagneticButton
            mode="button"
            onClick={() => navigate('/contact')}
          >
            <button className="group relative inline-flex items-center gap-4 bg-[#ff3b00] text-black font-display font-extrabold text-lg px-10 py-5 rounded-full hover:bg-white transition-all duration-300 shadow-xl shadow-[#ff3b00]/20">
              <span>START A PROJECT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
