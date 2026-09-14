import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { useCursor } from '../context/CursorContext';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const navigate = useNavigate();
  const { setCursor, resetCursor } = useCursor();

  const filters = ['ALL', 'BRANDING', 'DIGITAL', 'MOTION', 'CAMPAIGNS'];

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.type === activeFilter);

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Page Header */}
      <div className="mb-16 border-b border-white/10 pb-12">
        <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
          ARCHIVE / 2024–2026
        </span>
        <h1 className="font-display font-black text-6xl sm:text-8xl tracking-tighter text-white mb-6">
          SELECTED WORK
        </h1>
        <p className="font-editorial text-2xl text-noir-muted italic max-w-2xl">
          "Every project is engineered as a visual monument to ambition."
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 pt-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              onMouseEnter={() => setCursor('button')}
              onMouseLeave={resetCursor}
              className={`text-xs font-mono tracking-widest px-6 py-2.5 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#ff3b00] border-[#ff3b00] text-black font-bold'
                  : 'bg-white/5 border-white/10 text-noir-text hover:border-white/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                resetCursor();
                navigate(`/work/${project.slug}`);
              }}
              onMouseEnter={() => setCursor('view', 'VIEW PROJECT')}
              onMouseLeave={resetCursor}
              className="group cursor-pointer flex flex-col space-y-4"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#0e0e14]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-noir-muted border border-white/10">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 p-3 bg-[#ff3b00] text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-2">
                <h2 className="font-display font-black text-3xl text-white group-hover:text-[#ff3b00] transition-colors">
                  {project.title}
                </h2>
                <span className="font-mono text-xs text-noir-muted">{project.year}</span>
              </div>
              <p className="font-body text-xs text-noir-muted line-clamp-2 leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
