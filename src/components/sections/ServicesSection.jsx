import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { SERVICES_LIST } from '../../data/projects';
import { useCursor } from '../../context/CursorContext';
import { useNavigate } from 'react-router-dom';

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();
  const navigate = useNavigate();

  const handleContainerMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleRowMouseEnter = (index) => {
    setHoveredIdx(index);
    setCursor('view', 'EXPLORE');
  };

  const handleRowMouseLeave = () => {
    setHoveredIdx(null);
    resetCursor();
  };

  const toggleMobileAccordion = (index) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
            02 / CAPABILITIES
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter text-white">
            WHAT WE DO
          </h2>
        </div>

        <button
          onClick={() => navigate('/services')}
          onMouseEnter={() => setCursor('button')}
          onMouseLeave={resetCursor}
          className="group flex items-center gap-2 text-xs font-mono tracking-widest text-[#ff3b00] hover:text-white uppercase transition-colors"
        >
          <span>VIEW ALL SERVICES & DELIVERABLES</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Services List (Desktop Hover Reveal & Mobile Accordion) */}
      <div
        ref={containerRef}
        onMouseMove={handleContainerMouseMove}
        className="flex flex-col border-t border-white/10 relative"
      >
        {SERVICES_LIST.map((service, index) => (
          <div key={service.id} className="relative border-b border-white/10">
            {/* Desktop Row View */}
            <div
              onMouseEnter={() => handleRowMouseEnter(index)}
              onMouseLeave={handleRowMouseLeave}
              onClick={() => navigate('/services')}
              className={`hidden lg:flex items-center justify-between py-10 px-6 transition-all duration-300 cursor-pointer ${
                hoveredIdx === index ? 'bg-white/[0.03] pl-10' : 'bg-transparent'
              }`}
            >
              {/* Left Number & Title */}
              <div className="flex items-center gap-12">
                <span
                  className={`font-mono text-sm transition-colors duration-300 ${
                    hoveredIdx === index ? 'text-[#ff3b00] font-bold' : 'text-noir-muted'
                  }`}
                >
                  {service.id}
                </span>
                <h3
                  className={`font-display font-bold text-4xl xl:text-5xl tracking-tight transition-all duration-300 ${
                    hoveredIdx === index ? 'text-white translate-x-4' : 'text-noir-text/80'
                  }`}
                >
                  {service.title}
                </h3>
              </div>

              {/* Short Description & Arrow */}
              <div className="flex items-center gap-8 max-w-md">
                <p className="text-xs font-body text-noir-muted line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
                <div
                  className={`p-3 rounded-full border transition-all duration-300 ${
                    hoveredIdx === index
                      ? 'border-[#ff3b00] bg-[#ff3b00] text-black rotate-45'
                      : 'border-white/10 text-white'
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Mobile Touch Accordion */}
            <div className="lg:hidden py-6">
              <button
                onClick={() => toggleMobileAccordion(index)}
                className="w-full flex items-center justify-between text-left py-2"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#ff3b00]">{service.id}</span>
                  <span className="font-display font-bold text-2xl text-white">{service.title}</span>
                </div>
                <div className="p-2 border border-white/10 rounded-full text-white">
                  {expandedMobile === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {expandedMobile === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pt-4 pb-2 space-y-4"
                  >
                    <p className="text-sm font-body text-noir-muted leading-relaxed">
                      {service.description}
                    </p>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-lg border border-white/10"
                    />
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-noir-text"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}

        {/* Floating Desktop Hover Image Preview (Accurate container mouse coordinate mapping) */}
        <AnimatePresence>
          {hoveredIdx !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePos.x + 30,
                y: mousePos.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="pointer-events-none absolute top-0 left-0 z-30 hidden lg:block w-72 h-48 rounded-xl overflow-hidden shadow-2xl border border-white/20"
            >
              <img
                src={SERVICES_LIST[hoveredIdx].image}
                alt="Service Preview"
                className="w-full h-full object-cover transform scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-4 flex items-end">
                <span className="font-mono text-xs text-[#ff3b00] uppercase tracking-widest font-bold">
                  {SERVICES_LIST[hoveredIdx].title}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
