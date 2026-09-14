import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during loading sequence
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = 'unset';
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 12;
      });
    }, 70);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[10000] bg-[#050505] text-[#f4f4f0] flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center text-xs tracking-widest text-noir-muted font-mono uppercase">
            <span>NOIR® STUDIO</span>
            <span>TANOVAX PORTFOLIO #3</span>
          </div>

          {/* Center Logo & Progress */}
          <div className="my-auto text-center flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-[#f4f4f0] mb-4"
            >
              NOIR<span className="text-[#ff3b00]">®</span>
            </motion.h1>
            <p className="font-editorial italic text-lg sm:text-2xl text-noir-muted tracking-wide max-w-md">
              "We make brands impossible to ignore."
            </p>

            {/* Minimal Loader Bar */}
            <div className="w-48 sm:w-64 h-[2px] bg-white/10 mt-10 relative overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-[#ff3b00]"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-between items-center text-xs tracking-widest font-mono text-noir-muted uppercase">
            <span>LOADING EXPERIENCE</span>
            <span className="text-[#f4f4f0] font-bold">{Math.min(progress, 100)}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
