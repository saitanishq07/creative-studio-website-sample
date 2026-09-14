import React from 'react';
import { motion } from 'framer-motion';
import { STUDIO_STATS } from '../data/projects';
import { useCursor } from '../context/CursorContext';
import { useNavigate } from 'react-router-dom';

export default function StudioPage() {
  const { setCursor, resetCursor } = useCursor();
  const navigate = useNavigate();

  const team = [
    {
      name: 'Elena Rostova',
      role: 'Founding Partner & Executive Creative Director',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      bio: 'Former Art Director at Paris fashion houses. 12+ years shaping luxury brand visual systems.'
    },
    {
      name: 'Kaelen Voss',
      role: 'Head of Creative Technology & WebGL',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      bio: 'Pioneer in real-time generative shaders, spatial UI, and high-performance interactive architectures.'
    },
    {
      name: 'Maya Lin-Torres',
      role: 'Design Director & Typography Specialist',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
      bio: 'Bespoke variable font designer with editorial work featured in Wallpaper*, FWA, and Awwwards.'
    }
  ];

  const clients = [
    'AURA SYSTEMS INC.',
    'MONO PARIS',
    'NOVA QUANTUM CORP',
    'FORM ARCHITECTS TOKYO',
    'VOID COLLECTIVE BERLIN',
    'SYNTHESIS LABS',
    'SOLARIS MOTORS',
    'VORTEX AUDIO'
  ];

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-20 border-b border-white/10 pb-12">
        <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
          AGENCY PROFILE
        </span>
        <h1 className="font-display font-black text-6xl sm:text-8xl tracking-tighter text-white mb-6">
          THE STUDIO
        </h1>
        <p className="font-editorial text-2xl sm:text-3xl text-noir-muted italic max-w-4xl">
          "We build identities, digital experiences and campaigns for brands that refuse to blend in."
        </p>
      </div>

      {/* Story & Philosophy Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-display font-black text-4xl text-white">
            DESIGN AS CULTURAL IMPACT
          </h2>
          <p className="font-body text-noir-muted leading-relaxed">
            Founded in 2020, NOIR was established with a singular objective: to rescue high-ambition brands from the sea of bland corporate homogeny. We reject default UI kits and predictable layout conventions in favor of bespoke visual art direction.
          </p>
          <p className="font-body text-noir-muted leading-relaxed">
            Operating from our primary hub in Hyderabad with creative partners across Paris, Tokyo, and Berlin, we collaborate with founders and creative leaders to engineer experiences that command instant cultural relevance.
          </p>
        </div>

        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            alt="Studio Atmosphere"
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

      {/* Statistics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32 p-8 rounded-2xl bg-noir-card border border-white/10">
        {STUDIO_STATS.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="font-display font-black text-5xl text-[#ff3b00] mb-2">{stat.value}</div>
            <div className="font-mono text-xs text-noir-muted uppercase">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Leadership & Creative Team */}
      <div className="mb-32">
        <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase block mb-3">
          LEADERSHIP & DIRECTORS
        </span>
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-16">
          THE CREATIVE MINDSET
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-noir-card border border-white/10 rounded-2xl p-6 flex flex-col space-y-4 group hover:border-[#ff3b00]/50 transition-colors"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-white">{member.name}</h3>
              <p className="font-mono text-xs text-[#ff3b00] uppercase tracking-wider">{member.role}</p>
              <p className="font-body text-xs text-noir-muted leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Roster */}
      <div className="pt-16 border-t border-white/10">
        <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase block mb-6">
          CLIENT ROSTER
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-display font-bold text-xl text-noir-muted">
          {clients.map((client, idx) => (
            <div key={idx} className="p-4 border border-white/5 rounded-lg hover:text-white hover:border-white/20 transition-all">
              {client}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
