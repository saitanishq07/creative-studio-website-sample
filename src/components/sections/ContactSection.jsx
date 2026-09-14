import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCursor } from '../../context/CursorContext';

export default function ContactSection() {
  const { setCursor, resetCursor } = useCursor();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Brand Identity',
    budget: '$15K–$30K',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'Brand Identity',
    'Website',
    'Digital Experience',
    'Campaign',
    'Motion / 3D',
    'Other'
  ];

  const budgets = [
    '<$5K',
    '$5K–$15K',
    '$15K–$30K',
    '$30K+'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ff3b00', '#ffffff', '#80808a']
    });
  };

  return (
    <section id="contact-form" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
              10 / INQUIRIES
            </span>
            <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl tracking-tighter text-white mb-6">
              LET'S TALK.
            </h2>
            <p className="font-editorial text-xl text-noir-muted italic leading-relaxed mb-8">
              "Tell us about your brand, your timeline, and your ambition."
            </p>
          </div>

          <div className="space-y-6 text-sm font-mono text-noir-muted">
            <div>
              <p className="text-xs text-white font-bold uppercase tracking-widest mb-1">EMAIL DIRECT</p>
              <a href="mailto:hello@noir-studio.example" className="text-[#ff3b00] hover:underline">
                hello@noir-studio.example
              </a>
            </div>
            <div>
              <p className="text-xs text-white font-bold uppercase tracking-widest mb-1">STUDIO LOCATION</p>
              <p className="text-noir-text">Hyderabad Hub & Remote Global Teams</p>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 bg-noir-card border border-white/10 p-8 sm:p-12 rounded-2xl relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-noir-muted uppercase mb-2">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-noir-muted focus:outline-none focus:border-[#ff3b00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-noir-muted uppercase mb-2">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="maya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-noir-muted focus:outline-none focus:border-[#ff3b00] transition-colors"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block font-mono text-xs text-noir-muted uppercase mb-2">COMPANY / ORGANIZATION</label>
                  <input
                    type="text"
                    placeholder="e.g. AURA Systems"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-noir-muted focus:outline-none focus:border-[#ff3b00] transition-colors"
                  />
                </div>

                {/* Project Type Selectors */}
                <div>
                  <label className="block font-mono text-xs text-noir-muted uppercase mb-3">PROJECT TYPE</label>
                  <div className="flex flex-wrap gap-3">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`text-xs font-mono px-4 py-2 rounded-full border transition-all ${
                          formData.projectType === type
                            ? 'bg-[#ff3b00] border-[#ff3b00] text-black font-bold'
                            : 'bg-white/5 border-white/10 text-noir-text hover:border-white/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selectors */}
                <div>
                  <label className="block font-mono text-xs text-noir-muted uppercase mb-3">APPROXIMATE BUDGET</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`text-xs font-mono py-2.5 px-3 rounded-lg border text-center transition-all ${
                          formData.budget === b
                            ? 'bg-white text-black font-bold border-white'
                            : 'bg-white/5 border-white/10 text-noir-text hover:border-white/30'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs text-noir-muted uppercase mb-2">PROJECT BRIEF / MESSAGE</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand goals, target timeline, and key requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-noir-muted focus:outline-none focus:border-[#ff3b00] transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  onMouseEnter={() => setCursor('button')}
                  onMouseLeave={resetCursor}
                  className="w-full group flex items-center justify-center gap-3 bg-[#ff3b00] hover:bg-white text-black font-display font-black text-base py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#ff3b00]/20"
                >
                  <span>SEND INQUIRY</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="py-16 text-center flex flex-col items-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#ff3b00]/20 text-[#ff3b00] flex items-center justify-center border border-[#ff3b00]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
                  INQUIRY RECEIVED.
                </h3>
                <p className="font-editorial text-lg text-noir-muted italic max-w-md">
                  Thank you, {formData.name}. Our partner director will review your brief and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#ff3b00] underline uppercase hover:text-white"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
