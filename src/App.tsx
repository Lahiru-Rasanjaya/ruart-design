import { useCallback, useEffect, useState } from 'react';
import { designCategories } from './data/categories';
import type { DesignItem } from './data/types';
import { useRoute } from './utils/route';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CategoryPage from './components/CategoryPage';
import CVPreviewModal from './components/CVPreviewModal';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

interface Selected {
  item: DesignItem;
  label: string;
}

export default function App() {
  const route = useRoute();
  const [selected, setSelected] = useState<Selected | null>(null);
  const openPreview = useCallback((item: DesignItem, label: string) => setSelected({ item, label }), []);
  const closePreview = useCallback(() => setSelected(null), []);

  const category = route.name === 'category' ? designCategories.find((c) => c.id === route.id) : undefined;

  // After the page changes: open category pages at the top, and scroll home-page links (#about ...) into view.
  useEffect(() => {
    if (category) {
      window.scrollTo(0, 0);
      return;
    }
    if (route.name === 'home' && route.anchor) {
      const id = route.anchor;
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    }
  }, [route, category]);

  return (
    <>
      <a
        href={category ? '#designs' : '#services'}
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-brand-black focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to designs
      </a>
      <Navbar onCategoryPage={!!category} />
      <main>
        {category ? (
          <CategoryPage key={category.id} category={category} onPreview={openPreview} />
        ) : (
          <>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
      <CVPreviewModal cv={selected?.item ?? null} label={selected?.label} onClose={closePreview} />
    </>
  );
}
