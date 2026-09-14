import React from 'react';
import { motion } from 'framer-motion';

export default function GallerySection() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
      title: 'HAUTE COUTURE EDITORIAL',
      span: 'col-span-12 md:col-span-7',
      aspect: 'aspect-[16/10]'
    },
    {
      src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      title: 'AMBIENT LIGHT FIELD',
      span: 'col-span-12 md:col-span-5',
      aspect: 'aspect-[4/5]'
    },
    {
      src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
      title: 'QUANTUM HARDWARE',
      span: 'col-span-12 md:col-span-4',
      aspect: 'aspect-[4/5]'
    },
    {
      src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
      title: 'BERLIN SOUND FESTIVAL',
      span: 'col-span-12 md:col-span-8',
      aspect: 'aspect-[16/9]'
    }
  ];

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="mb-16">
        <span className="font-mono text-xs text-[#ff3b00] tracking-widest uppercase flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]" />
          07 / VISUAL ARCHIVE
        </span>
        <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-tighter text-white">
          ART & ARTIFACTS
        </h2>
      </div>

      {/* Asymmetric Overlapping Gallery */}
      <div className="grid grid-cols-12 gap-8">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            className={`${img.span} relative group overflow-hidden rounded-2xl border border-white/10 ${img.aspect} bg-[#0c0c10]`}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-end">
              <span className="font-mono text-xs text-[#ff3b00] uppercase tracking-widest">
                {img.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
