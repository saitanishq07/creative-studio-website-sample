import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../../data/projects';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
            06 / METHODOLOGY
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter text-white">
            CREATIVE PROCESS
          </h2>
        </div>
        <p className="font-editorial text-lg text-noir-muted italic max-w-md">
          How we systematically engineer unmissable visual identities and digital platforms.
        </p>
      </div>

      {/* Interactive Vertical Timeline */}
      <div className="relative pl-6 md:pl-12 border-l border-white/10 space-y-12">
        {/* Animated Progress Line */}
        <motion.div
          className="absolute top-0 left-0 w-[2px] bg-[#ff3b00]"
          animate={{ height: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />

        {PROCESS_STEPS.map((item, idx) => {
          const isActive = activeStep === idx;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveStep(idx)}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer transition-all duration-500 p-8 rounded-2xl ${
                isActive
                  ? 'bg-white/[0.04] border border-white/20 translate-x-2'
                  : 'bg-transparent border border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-6">
                  <span
                    className={`font-mono text-sm font-bold ${
                      isActive ? 'text-[#ff3b00]' : 'text-noir-muted'
                    }`}
                  >
                    {item.step}
                  </span>
                  <h3
                    className={`font-display font-black text-3xl sm:text-4xl ${
                      isActive ? 'text-white' : 'text-noir-text'
                    }`}
                  >
                    {item.name}
                  </h3>
                </div>

                <span className="font-editorial text-lg text-noir-muted italic">
                  {item.title}
                </span>
              </div>

              {isActive && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="font-body text-sm text-noir-muted leading-relaxed max-w-2xl pt-2 border-t border-white/5"
                >
                  {item.description}
                </motion.p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
