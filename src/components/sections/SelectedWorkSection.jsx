import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { useCursor } from '../../context/CursorContext';

export default function SelectedWorkSection() {
  const navigate = useNavigate();
  const { setCursor, resetCursor } = useCursor();

  const handleProjectClick = (slug) => {
    resetCursor();
    navigate(`/work/${slug}`);
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
            03 / PORTFOLIO
          </span>
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter text-white">
            SELECTED WORK
          </h2>
        </div>

        <button
          onClick={() => navigate('/work')}
          onMouseEnter={() => setCursor('button')}
          onMouseLeave={resetCursor}
          className="group flex items-center gap-2 text-xs font-mono tracking-widest text-[#ff3b00] hover:text-white uppercase transition-colors"
        >
          <span>VIEW FULL ARCHIVE (5 PROJECTS)</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Asymmetric Editorial Portfolio Grid */}
      <div className="grid grid-cols-12 gap-8 md:gap-12">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            onClick={() => handleProjectClick(project.slug)}
            onMouseEnter={() => setCursor('view', 'VIEW PROJECT')}
            onMouseLeave={resetCursor}
            className={`${project.gridSpan} group cursor-pointer relative flex flex-col space-y-4`}
          >
            {/* Image Container with Zoom & Clip Overlay */}
            <div className={`relative w-full ${project.aspect} overflow-hidden rounded-xl border border-white/10 bg-[#0d0d12]`}>
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* Category Tag Badge */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-noir-muted uppercase group-hover:border-[#ff3b00] group-hover:text-white transition-all">
                {project.category}
              </div>

              {/* Year Tag */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-mono text-noir-muted">
                {project.year}
              </div>

              {/* Hover Action Button Overlay */}
              <div className="absolute bottom-4 right-4 p-3 bg-[#ff3b00] text-black rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Title & Metadata */}
            <div className="flex justify-between items-baseline pt-2">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#ff3b00]">0{idx + 1}</span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white group-hover:text-[#ff3b00] group-hover:translate-x-2 transition-all duration-300">
                  {project.title}
                </h3>
              </div>
              <span className="font-editorial italic text-sm text-noir-muted hidden sm:inline">
                {project.subtitle}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
