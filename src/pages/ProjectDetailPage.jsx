import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { useCursor } from '../context/CursorContext';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setCursor, resetCursor } = useCursor();

  const projectIndex = PROJECTS.findIndex(
    (p) => p.slug === id || p.id === id
  );
  const project = PROJECTS[projectIndex !== -1 ? projectIndex : 0];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-32 pb-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/work')}
          onMouseEnter={() => setCursor('button')}
          onMouseLeave={resetCursor}
          className="group inline-flex items-center gap-2 font-mono text-xs text-noir-muted hover:text-[#ff3b00] uppercase tracking-widest mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO WORK ARCHIVE</span>
        </button>

        {/* Project Hero Title & Subtitle */}
        <div className="mb-12">
          <div className="flex items-center gap-4 text-xs font-mono text-[#ff3b00] uppercase tracking-widest mb-3">
            <span>{project.category}</span>
            <span>/</span>
            <span>{project.year}</span>
          </div>
          <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white leading-none">
            {project.title}
          </h1>
          <p className="font-editorial text-2xl sm:text-3xl text-noir-muted italic mt-4">
            "{project.subtitle}"
          </p>
        </div>

        {/* Hero Full-width Banner Image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 mb-16 bg-[#0c0c10]">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 mb-16 font-mono text-xs">
          <div>
            <span className="text-noir-muted uppercase block mb-1">CLIENT</span>
            <span className="text-white font-bold">{project.client}</span>
          </div>
          <div>
            <span className="text-noir-muted uppercase block mb-1">DISCIPLINE</span>
            <span className="text-white font-bold">{project.category}</span>
          </div>
          <div>
            <span className="text-noir-muted uppercase block mb-1">YEAR</span>
            <span className="text-white font-bold">{project.year}</span>
          </div>
          <div>
            <span className="text-noir-muted uppercase block mb-1">AGENCY</span>
            <span className="text-[#ff3b00] font-bold">NOIR® STUDIO</span>
          </div>
        </div>

        {/* Detailed Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs text-[#ff3b00] uppercase tracking-widest">
              CASE STUDY OVERVIEW
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
              THE CREATIVE CHALLENGE & DIRECTION
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-10 text-noir-text leading-relaxed">
            <div>
              <h3 className="font-mono text-xs text-white uppercase tracking-widest mb-2 font-bold">
                01 / THE CHALLENGE
              </h3>
              <p className="font-body text-base text-noir-muted leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs text-white uppercase tracking-widest mb-2 font-bold">
                02 / CREATIVE DIRECTION
              </h3>
              <p className="font-editorial text-xl text-white italic leading-relaxed">
                "{project.direction}"
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs text-white uppercase tracking-widest mb-2 font-bold">
                03 / EXECUTION
              </h3>
              <p className="font-body text-base text-noir-muted leading-relaxed">
                {project.execution}
              </p>
            </div>
          </div>
        </div>

        {/* Impact Results Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
          {project.results.map((res, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-noir-card border border-white/10 flex flex-col justify-center text-center"
            >
              <span className="font-display font-black text-4xl sm:text-5xl text-[#ff3b00] mb-2">
                {res.value}
              </span>
              <span className="font-mono text-xs text-noir-muted uppercase tracking-widest">
                {res.label}
              </span>
            </div>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="space-y-12 mb-32">
          <h2 className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase">
            PROJECT VISUAL GALLERY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group"
              >
                <img
                  src={imgUrl}
                  alt={`Gallery artifact ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Footer Link */}
        <div className="border-t border-white/10 pt-16 flex flex-col items-center text-center">
          <span className="font-mono text-xs text-noir-muted uppercase tracking-widest mb-4">
            NEXT PROJECT
          </span>
          <Link
            to={`/work/${nextProject.slug}`}
            onMouseEnter={() => setCursor('view', 'NEXT')}
            onMouseLeave={resetCursor}
            className="group flex items-center gap-4 text-4xl sm:text-6xl md:text-7xl font-display font-black text-white hover:text-[#ff3b00] transition-colors"
          >
            <span>{nextProject.title}</span>
            <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
