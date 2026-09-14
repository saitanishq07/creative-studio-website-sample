import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Globe, ArrowUp } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

export default function Footer() {
  const { setCursor, resetCursor } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] text-[#f4f4f0] pt-20 pb-12 px-6 md:px-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <Link to="/" className="flex items-baseline gap-1">
              <span className="font-display font-black text-4xl sm:text-5xl tracking-tighter text-white">
                NOIR
              </span>
              <span className="font-mono text-sm text-[#ff3b00] font-bold">®</span>
            </Link>
            <p className="font-editorial text-lg text-noir-muted italic">
              "Creative studio for brands with something to say."
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 flex flex-col space-y-3 font-mono text-xs tracking-widest uppercase">
            <span className="text-noir-muted mb-2">NAVIGATION</span>
            <Link to="/work" className="hover:text-[#ff3b00] transition-colors">
              WORK ARCHIVE
            </Link>
            <Link to="/studio" className="hover:text-[#ff3b00] transition-colors">
              THE STUDIO
            </Link>
            <Link to="/services" className="hover:text-[#ff3b00] transition-colors">
              CAPABILITIES
            </Link>
            <Link to="/contact" className="hover:text-[#ff3b00] transition-colors">
              INQUIRIES
            </Link>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-4 flex flex-col space-y-4 font-mono text-xs">
            <span className="text-noir-muted uppercase tracking-widest mb-1">CONNECT</span>
            <a href="mailto:hello@noir-studio.example" className="text-base text-[#ff3b00] hover:underline">
              hello@noir-studio.example
            </a>
            <p className="text-noir-muted">Hyderabad Hub / Global Projects</p>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-noir-muted hover:text-white transition-colors flex items-center gap-1"
              >
                <Instagram className="w-3.5 h-3.5" /> INSTAGRAM
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="text-noir-muted hover:text-white transition-colors flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5" /> BEHANCE
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-noir-muted hover:text-white transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" /> LINKEDIN
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Back to Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-noir-muted gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span>© 2026 NOIR® STUDIO. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[11px] text-noir-muted/70">Designed & Developed by TanovaX</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursor('button')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 text-white hover:text-[#ff3b00] uppercase tracking-widest transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
