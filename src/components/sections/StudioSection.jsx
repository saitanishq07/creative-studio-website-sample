import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { STUDIO_STATS } from '../../data/projects';

export default function StudioSection() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Statement & Story */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          <div>
            <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
              05 / THE STUDIO
            </span>
            <h2 className="font-display font-black text-5xl sm:text-6xl tracking-tighter text-white">
              CRAFTED WITH INTENT.
            </h2>
          </div>

          <p className="font-editorial text-2xl sm:text-3xl text-noir-text leading-relaxed italic">
            "NOIR is an independent creative studio built around one simple belief: digital experiences should be felt, not just viewed."
          </p>

          <p className="font-body text-base text-noir-muted leading-relaxed">
            We exist at the intersection of high fashion editorial design, experimental typography, and real-time creative technology. We partner with leaders, founders, and cultural instigators who view brand identity as their ultimate competitive edge.
          </p>
        </div>

        {/* Right Side: Visual & Animated Stats Grid */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Studio Atmosphere"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex items-end">
              <span className="font-mono text-xs text-white uppercase tracking-widest">
                NOIR ATELIER — HYDERABAD & GLOBAL
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            {STUDIO_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-noir-card border border-white/5 hover:border-[#ff3b00]/50 transition-colors"
              >
                <div className="font-display font-black text-4xl sm:text-5xl text-[#ff3b00] mb-1">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-noir-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
