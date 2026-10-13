import { useCallback, useState } from 'react';
import type { CVTemplate } from './data/types';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CVGallery from './components/CVGallery';
import CVPreviewModal from './components/CVPreviewModal';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [selected, setSelected] = useState<CVTemplate | null>(null);
  const closePreview = useCallback(() => setSelected(null), []);

  return (
    <>
      <a
        href="#cv-designs"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-brand-black focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to CV designs
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <CVGallery onPreview={setSelected} />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <CVPreviewModal cv={selected} onClose={closePreview} />
    </>
  );
}
