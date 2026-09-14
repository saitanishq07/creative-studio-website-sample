import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export default function MagneticButton({ children, className = '', onClick, mode = 'button', text = '' }) {
  const ref = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  const x = useSpring(0, { damping: 15, stiffness: 150 });
  const y = useSpring(0, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Pull button 25% towards cursor
    x.set(distanceX * 0.25);
    y.set(distanceY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    resetCursor();
  };

  const handleMouseEnter = () => {
    setCursor(mode, text);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
