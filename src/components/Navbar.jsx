import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import NavigationOverlay from './NavigationOverlay';
import { useCursor } from '../context/CursorContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[8000] transition-all duration-500 py-6 px-6 md:px-12 ${
          scrolled ? 'bg-[#070709]/80 backdrop-blur-md py-4 border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            className="group flex items-baseline gap-1"
          >
            <span className="font-display font-black text-2xl md:text-3xl tracking-tighter text-[#f4f4f0] group-hover:text-white transition-colors">
              NOIR
            </span>
            <span className="font-mono text-xs text-[#ff3b00] font-bold">®</span>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            <Link
              to="/"
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className={`hover:text-[#ff3b00] transition-colors ${
                location.pathname === '/' ? 'text-[#ff3b00]' : 'text-noir-text'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/work"
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className={`hover:text-[#ff3b00] transition-colors ${
                location.pathname.startsWith('/work') ? 'text-[#ff3b00]' : 'text-noir-text'
              }`}
            >
              WORK
            </Link>
            <Link
              to="/studio"
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className={`hover:text-[#ff3b00] transition-colors ${
                location.pathname === '/studio' ? 'text-[#ff3b00]' : 'text-noir-text'
              }`}
            >
              STUDIO
            </Link>
            <Link
              to="/services"
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className={`hover:text-[#ff3b00] transition-colors ${
                location.pathname === '/services' ? 'text-[#ff3b00]' : 'text-noir-text'
              }`}
            >
              SERVICES
            </Link>
            <Link
              to="/contact"
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className={`hover:text-[#ff3b00] transition-colors ${
                location.pathname === '/contact' ? 'text-[#ff3b00]' : 'text-noir-text'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            onMouseEnter={() => setCursor('button')}
            onMouseLeave={resetCursor}
            className="group flex items-center gap-3 text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 hover:border-[#ff3b00] px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300"
          >
            <span>MENU</span>
            <Menu className="w-4 h-4 text-[#ff3b00] group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <NavigationOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
