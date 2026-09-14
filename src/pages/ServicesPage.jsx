import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST } from '../data/projects';
import { useNavigate } from 'react-router-dom';
import { useCursor } from '../context/CursorContext';

export default function ServicesPage() {
  const navigate = useNavigate();
  const { setCursor, resetCursor } = useCursor();

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-20 border-b border-white/10 pb-12">
        <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
          CAPABILITIES & DISCIPLINES
        </span>
        <h1 className="font-display font-black text-6xl sm:text-8xl tracking-tighter text-white mb-6">
          OUR SERVICES
        </h1>
        <p className="font-editorial text-2xl text-noir-muted italic max-w-3xl">
          "We construct living brand identities, high-motion digital platforms, and cinematic campaigns for visionary companies."
        </p>
      </div>

      {/* Expanded Services Breakdown */}
      <div className="space-y-24 mb-32">
        {SERVICES_LIST.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-white/10"
          >
            {/* Number & Title */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-sm text-[#ff3b00] font-bold">{service.id}</span>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
                {service.title}
              </h2>
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10 mt-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Description & Deliverables */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div>
                <h3 className="font-mono text-xs text-white uppercase tracking-widest mb-3">OVERVIEW</h3>
                <p className="font-editorial text-2xl text-noir-text leading-relaxed italic mb-8">
                  "{service.description}"
                </p>

                <h3 className="font-mono text-xs text-white uppercase tracking-widest mb-4">DELIVERABLES & SCOPE</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-3 p-4 rounded-xl bg-noir-card border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff3b00] shrink-0" />
                      <span className="font-mono text-xs text-noir-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => navigate('/contact')}
                  onMouseEnter={() => setCursor('button')}
                  onMouseLeave={resetCursor}
                  className="group inline-flex items-center gap-2 text-xs font-mono text-[#ff3b00] hover:text-white uppercase tracking-widest transition-colors"
                >
                  <span>INQUIRE ABOUT {service.title.toUpperCase()}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
