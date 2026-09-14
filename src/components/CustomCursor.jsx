import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export default function CustomCursor() {
  const { cursorState } = useCursor();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Responsive spring physics
  const springConfig = { damping: 25, stiffness: 350, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable only on small mobile screen width (<768px)
    const isMobile = window.innerWidth < 768;
    setIsMobileDevice(isMobile);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobileDevice) {
    return null;
  }

  const isViewMode = cursorState.mode === 'view';
  const isHoverMode = cursorState.mode === 'hover';
  const isButtonMode = cursorState.mode === 'button';

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Central Solid Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3.5 h-3.5 bg-[#ff3b00] rounded-full pointer-events-none shadow-md shadow-[#ff3b00]/80"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Trailing Outer Interactive Ring / View Badge */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none rounded-full flex items-center justify-center text-center transition-colors duration-200 ${
          isViewMode
            ? 'bg-[#ff3b00] text-black font-display font-black tracking-widest shadow-2xl shadow-[#ff3b00]/60'
            : isButtonMode
            ? 'border-2 border-[#ff3b00] bg-[#ff3b00]/20'
            : isHoverMode
            ? 'border-2 border-white bg-white/10'
            : 'border border-white/40 bg-white/5'
        }`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isViewMode ? 100 : isButtonMode ? 56 : isHoverMode ? 46 : 32,
          height: isViewMode ? 100 : isButtonMode ? 56 : isHoverMode ? 46 : 32,
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 280 }}
      >
        {isViewMode && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[11px] font-black uppercase tracking-widest leading-none px-2 text-center text-black"
          >
            {cursorState.text || 'VIEW'}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
