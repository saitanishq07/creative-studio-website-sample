import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CursorProvider } from './context/CursorContext';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import SmokeTrail from './components/SmokeTrail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import StudioPage from './pages/StudioPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <CursorProvider>
      <div className="relative min-h-screen bg-[#070709] text-[#f4f4f0] selection:bg-[#ff3b00] selection:text-black font-body">
        {/* 1.5s Opening Sequence Loader */}
        <PageLoader />

        {/* Radium Red Background Smoke Particle Trail (Rendered behind text & media) */}
        <SmokeTrail />

        {/* Interactive Custom Cursor */}
        <CustomCursor />

        {/* Scroll Restorer */}
        <ScrollToTop />

        {/* Navigation Bar & Fullscreen Overlay */}
        <Navbar />

        {/* Main Application Routes (Positioned above smoke z-10) */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:id" element={<ProjectDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        {/* Global Editorial Footer */}
        <Footer />
      </div>
    </CursorProvider>
  );
}
