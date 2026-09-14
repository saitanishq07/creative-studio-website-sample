import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { X, ArrowUpRight, Instagram, Linkedin, Globe } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export default function NavigationOverlay({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { title: 'HOME', path: '/', number: '01' },
    { title: 'WORK', path: '/work', number: '02' },
    { title: 'STUDIO', path: '/studio', number: '03' },
    { title: 'SERVICES', path: '/services', number: '04' },
    { title: 'CONTACT', path: '/contact', number: '05' },
  ];

  const handleNavigate = (path) => {
    onClose();
    resetCursor();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9000] bg-[#070709]/95 backdrop-blur-2xl text-[#f4f4f0] flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
        >
          {/* Overlay Header */}
          <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <Link
              to="/"
              onClick={() => handleNavigate('/')}
              className="font-display font-black text-2xl tracking-tighter"
            >
              NOIR<span className="text-[#ff3b00]">®</span>
            </Link>

            <button
              onClick={onClose}
              onMouseEnter={() => setCursor('button')}
              onMouseLeave={resetCursor}
              className="group flex items-center gap-2 text-xs uppercase tracking-widest font-mono border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Overlay Navigation Links */}
          <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.title}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.07 * idx }}
                  className="group flex items-baseline gap-6 border-b border-white/5 pb-3"
                >
                  <span className="font-mono text-xs text-[#ff3b00]">{link.number}</span>
                  <button
                    onClick={() => handleNavigate(link.path)}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-left text-noir-text group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#ff3b00] group-hover:translate-x-4 transition-all duration-300 flex items-center gap-4"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 text-[#ff3b00] transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Sidebar Statement & Quick Info */}
            <div className="lg:col-span-4 border-l border-white/10 lg:pl-12 flex flex-col space-y-8">
              <div>
                <p className="font-mono text-xs text-noir-muted uppercase tracking-widest mb-2">MANIFESTO</p>
                <p className="font-editorial text-lg text-noir-text leading-relaxed">
                  "We build identities, digital experiences and campaigns for brands that refuse to blend in."
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-noir-muted uppercase tracking-widest mb-2">INQUIRIES</p>
                <a
                  href="mailto:hello@noir-studio.example"
                  className="text-sm font-mono text-[#ff3b00] hover:underline"
                >
                  hello@noir-studio.example
                </a>
              </div>

              <div>
                <p className="font-mono text-xs text-noir-muted uppercase tracking-widest mb-2">LOCATION</p>
                <p className="text-sm font-body text-noir-text">Hyderabad / Worldwide</p>
              </div>
            </div>
          </div>

          {/* Overlay Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-6 text-xs font-mono text-noir-muted gap-4">
            <div>
              <span>© 2026 NOIR® STUDIO</span>
            </div>

            <div className="flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff3b00] transition-colors flex items-center gap-1"
              >
                <Instagram className="w-3.5 h-3.5" /> INSTAGRAM
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff3b00] transition-colors flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5" /> BEHANCE
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff3b00] transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" /> LINKEDIN
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
