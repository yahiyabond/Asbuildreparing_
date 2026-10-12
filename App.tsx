import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModals';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'reviews', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased selection:bg-blue-600 selection:text-white pb-14 md:pb-0">
      {/* 1. Header with Top Bar Contract */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services Section (AC, Refrigerator, Washing Machine, Microwave, Water Dispenser) */}
        <ServicesSection />

        {/* 4. About Section */}
        <AboutSection />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 6. Customer Reviews */}
        <ReviewsSection />

        {/* 7. FAQ Section */}
        <FAQSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Mobile Quick Action Sticky Bar */}
      <MobileQuickBar />

      {/* Privacy Policy and Terms Modals */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

