import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../../data/projects';
import { useCursor } from '../../context/CursorContext';
import { useNavigate } from 'react-router-dom';

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const [translateXAmount, setTranslateXAmount] = useState(0);
  const { setCursor, resetCursor } = useCursor();
  const navigate = useNavigate();

  // Dynamically compute exact horizontal scroll distance so ALL items scroll across
  useEffect(() => {
    const updateScrollAmount = () => {
      if (scrollTrackRef.current) {
        const totalWidth = scrollTrackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Total overflow width plus end padding
        const overflow = totalWidth - viewportWidth + 90;
        setTranslateXAmount(overflow > 0 ? overflow : 0);
      }
    };

    updateScrollAmount();
    // Delay slightly to ensure images/fonts loaded dimensions
    const timer = setTimeout(updateScrollAmount, 300);
    window.addEventListener('resize', updateScrollAmount);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateScrollAmount);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Map vertical scroll progress 0 -> 1 to exact pixel translation 0 -> -translateXAmount
  const x = useTransform(scrollYProgress, [0, 1], [0, -translateXAmount]);

  const horizontalItems = [
    {
      type: 'project',
      data: PROJECTS[0]
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
      caption: 'SPATIAL INTELLIGENCE'
    },
    {
      type: 'statement',
      text: 'WE REFUSE TO BLEND INTO THE BACKGROUND.',
      sub: 'Motion and typography working in tight sync.'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
      caption: 'EDITORIAL FASHION ATELIER'
    },
    {
      type: 'project',
      data: PROJECTS[1]
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
      caption: 'QUANTUM SHADER PORTAL'
    },
    {
      type: 'statement',
      text: 'ATTENTION IS EARNED, NOT REQUESTED.',
      sub: 'Designing digital monuments for ambitious brands.'
    },
    {
      type: 'project',
      data: PROJECTS[2]
    }
  ];

  return (
    <section className="relative border-b border-white/10 bg-[#070709]">
      {/* Sticky Section Title Header */}
      <div className="pt-24 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
            04 / MOTION GALLERY
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-white">
            IDEAS IN MOTION.
          </h2>
        </div>
      </div>

      {/* DESKTOP PINNED HORIZONTAL TRACK (Height extended for full horizontal traversal) */}
      <div ref={containerRef} className="hidden lg:block h-[380vh] relative">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <motion.div
            ref={scrollTrackRef}
            style={{ x }}
            className="flex gap-10 px-12 items-center w-max"
          >
            {horizontalItems.map((item, index) => (
              <div key={index} className="shrink-0">
                {item.type === 'project' && (
                  <div
                    onClick={() => {
                      resetCursor();
                      navigate(`/work/${item.data.slug}`);
                    }}
                    onMouseEnter={() => setCursor('view', 'VIEW')}
                    onMouseLeave={resetCursor}
                    className="w-[450px] h-[540px] rounded-2xl bg-noir-card border border-white/10 p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative shadow-2xl"
                  >
                    <img
                      src={item.data.heroImage}
                      alt={item.data.title}
                      className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60"
                    />
                    <div className="relative z-10 flex justify-between text-xs font-mono text-[#ff3b00] font-bold">
                      <span>{item.data.category}</span>
                      <span>{item.data.year}</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="font-display font-black text-5xl text-white group-hover:text-[#ff3b00] transition-colors">
                        {item.data.title}
                      </h3>
                      <p className="font-body text-sm text-noir-muted mt-2">{item.data.subtitle}</p>
                    </div>
                  </div>
                )}

                {item.type === 'image' && (
                  <div className="w-[380px] h-[500px] rounded-2xl overflow-hidden border border-white/10 relative group shadow-2xl">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex items-end">
                      <span className="font-mono text-xs text-white tracking-widest uppercase font-bold">
                        {item.caption}
                      </span>
                    </div>
                  </div>
                )}

                {item.type === 'statement' && (
                  <div className="w-[480px] h-[460px] rounded-2xl bg-gradient-to-br from-noir-card via-black to-[#101018] border border-white/10 p-12 flex flex-col justify-center space-y-6 shadow-2xl">
                    <span className="font-mono text-xs text-[#ff3b00] uppercase tracking-widest font-bold">
                      EXHIBIT {index + 1}
                    </span>
                    <h3 className="font-display font-black text-3xl sm:text-4xl text-[#ff3b00] tracking-tight leading-tight">
                      {item.text}
                    </h3>
                    <p className="font-editorial text-lg text-noir-muted italic">{item.sub}</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Bottom Progress Bar Indicator */}
          <div className="absolute bottom-8 left-12 right-12 flex items-center justify-between font-mono text-xs text-noir-muted border-t border-white/10 pt-4">
            <span className="text-[#ff3b00]">SCROLL TO EXPLORE ALL EXHIBITS →</span>
            <span>NOIR® MOTION GALLERY</span>
          </div>
        </div>
      </div>

      {/* MOBILE VERTICAL STACKED FALLBACK */}
      <div className="lg:hidden py-12 px-6 flex flex-col space-y-8">
        {horizontalItems.map((item, index) => (
          <div key={index} className="w-full">
            {item.type === 'project' && (
              <div
                onClick={() => navigate(`/work/${item.data.slug}`)}
                className="w-full h-[380px] rounded-xl bg-noir-card border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden"
              >
                <img
                  src={item.data.heroImage}
                  alt={item.data.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative z-10 text-xs font-mono text-[#ff3b00]">
                  {item.data.category}
                </div>
                <div className="relative z-10">
                  <h3 className="font-display font-black text-4xl text-white">{item.data.title}</h3>
                  <p className="font-body text-xs text-noir-muted mt-1">{item.data.subtitle}</p>
                </div>
              </div>
            )}

            {item.type === 'image' && (
              <div className="w-full h-[300px] rounded-xl overflow-hidden border border-white/10 relative">
                <img src={item.src} alt={item.caption} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 p-4 flex items-end">
                  <span className="font-mono text-xs text-white uppercase">{item.caption}</span>
                </div>
              </div>
            )}

            {item.type === 'statement' && (
              <div className="w-full p-8 rounded-xl bg-noir-card border border-white/10 text-center">
                <h3 className="font-display font-bold text-2xl text-[#ff3b00]">{item.text}</h3>
                <p className="font-editorial italic text-sm text-noir-muted mt-2">{item.sub}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
