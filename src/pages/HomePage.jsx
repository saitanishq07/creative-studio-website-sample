import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import MarqueeSection from '../components/sections/MarqueeSection';
import IntroSection from '../components/sections/IntroSection';
import ServicesSection from '../components/sections/ServicesSection';
import SelectedWorkSection from '../components/sections/SelectedWorkSection';
import HorizontalScrollSection from '../components/sections/HorizontalScrollSection';
import BigTypographySection from '../components/sections/BigTypographySection';
import StudioSection from '../components/sections/StudioSection';
import ProcessSection from '../components/sections/ProcessSection';
import GallerySection from '../components/sections/GallerySection';
import TestimonialSection from '../components/sections/TestimonialSection';
import CtaSection from '../components/sections/CtaSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <IntroSection />
      <ServicesSection />
      <SelectedWorkSection />
      <HorizontalScrollSection />
      <BigTypographySection />
      <StudioSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialSection />
      <CtaSection />
      <ContactSection />
    </main>
  );
}
