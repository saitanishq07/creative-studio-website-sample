import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export default function HeroSection() {
  const { setCursor, resetCursor } = useCursor();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalize -1 to 1
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const titleLines = [
    'WE MAKE',
    'BRANDS',
    'IMPOSSIBLE',
    'TO IGNORE.'
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 bg-[#070709] overflow-hidden">
      {/* Background Animated Interactive Visual Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <motion.div
          animate={{
            x: mousePos.x * 25,
            y: mousePos.y * 25,
            rotate: mousePos.x * 5,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
          className="absolute -top-24 -right-24 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-[#ff3b00]/30 via-purple-900/10 to-transparent blur-[120px]"
        />
        <motion.div
          animate={{
            x: mousePos.x * -20,
            y: mousePos.y * -20,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
          className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-[90px]"
        />

        {/* Subtle Geometric Graphic Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 right-12 -translate-y-1/2 w-72 h-72 md:w-[500px] md:h-[500px] border border-white/5 rounded-full border-dashed pointer-events-none hidden md:block"
        />
      </div>

      {/* Hero Header Tag */}
      <div className="relative z-10 flex justify-between items-center text-xs font-mono tracking-widest text-noir-muted uppercase">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse" />
          CREATIVE STUDIO / TANOVAX DEMO #3
        </span>
        <span className="hidden sm:inline">HYDERABAD — GLOBAL</span>
      </div>

      {/* Main Headline */}
      <div className="relative z-10 my-auto py-12">
        <motion.div
          style={{
            x: mousePos.x * -8,
            y: mousePos.y * -8,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          className="flex flex-col"
        >
          {titleLines.map((line, idx) => (
            <div key={idx} className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.2 + idx * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.88] select-none ${
                  idx === 2
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-noir-muted'
                    : idx === 3
                    ? 'text-stroke hover:text-white transition-colors duration-500'
                    : 'text-[#f4f4f0]'
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero Bottom Row */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-8 border-t border-white/10">
        <div className="md:col-span-6 lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-editorial text-lg md:text-xl text-noir-text leading-relaxed italic"
          >
            "Independent creative studio crafting identities, digital experiences and visual worlds for brands that refuse to blend in."
          </motion.p>
        </div>

        <div className="md:col-span-6 lg:col-span-7 flex justify-between md:justify-end items-center gap-8">
          <motion.a
            href="#marquee"
            onMouseEnter={() => setCursor('button')}
            onMouseLeave={resetCursor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="group flex items-center gap-3 text-xs font-mono tracking-widest text-noir-muted hover:text-[#ff3b00] uppercase transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="p-2 border border-white/10 group-hover:border-[#ff3b00] rounded-full"
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
