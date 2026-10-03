import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import TestimonialsMarquee from './components/TestimonialsMarquee';
import ForensicsTelemetry from './components/ForensicsTelemetry';
import ComparisonSection from './components/ComparisonSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import BackgroundLayers from './components/BackgroundLayers';
import WhatsAppCTA from './components/WhatsAppCTA';

import ProductDetailPage from './components/ProductDetailPage';
import AboutVyntiqPage from './components/AboutVyntiqPage';
import PartnerModal from './components/PartnerModal';
import ContactModal from './components/ContactModal';

export default function App() {
  // Navigation / View states: 'home' | 'about' | 'product-detail'
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactEnquiryType, setContactEnquiryType] = useState('General Business Enquiry');
  const [contactProductPreselect, setContactProductPreselect] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 30);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [currentView]);

  const handleOpenContact = (enquiryType = 'General Business Enquiry', product = '') => {
    setContactEnquiryType(enquiryType);
    setContactProductPreselect(product);
    setIsContactOpen(true);
  };

  const handleRequestDemo = (productName = '') => {
    handleOpenContact('Request a Demo & Technical Pilot', productName);
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAbout = (targetSectionId = null) => {
    setSelectedProduct(null);
    setCurrentView('about');
    setTimeout(() => {
      if (targetSectionId) {
        const el = document.getElementById(targetSectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased relative selection:bg-blue-500 selection:text-white">
      <BackgroundLayers />

      <Header
        onLogoClick={handleNavigateHome}
        onAboutClick={() => handleNavigateToAbout(null)}
        onFoundersClick={() => handleNavigateToAbout('leadership')}
        onPartnerClick={() => setIsPartnerOpen(true)}
        onContactClick={() => handleOpenContact('General Business Enquiry')}
      />

      <main className="relative z-10">
        {currentView === 'product-detail' && selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={() => {
              setCurrentView('home');
              setSelectedProduct(null);
              setTimeout(() => {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 60);
            }}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onRequestDemo={handleRequestDemo}
            onPartnerClick={() => setIsPartnerOpen(true)}
          />
        ) : currentView === 'about' ? (
          <AboutVyntiqPage
            onBack={handleNavigateHome}
            onRequestDemo={handleRequestDemo}
            onPartnerClick={() => setIsPartnerOpen(true)}
            onContactClick={() => handleOpenContact('Executive Leadership Briefing')}
          />
        ) : (
          <>
            <Hero
              onPartnerClick={() => setIsPartnerOpen(true)}
              onContactClick={() => handleOpenContact('General Business Enquiry')}
            />

            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <BentoGrid />
            </section>

            {/* Dedicated Products & Solutions Section */}
            <ProductsSection
              onSelectProduct={(product) => {
                setSelectedProduct(product);
                setCurrentView('product-detail');
              }}
              onRequestDemo={handleRequestDemo}
            />

            {/* Homepage About & Leadership Glimpse */}
            <AboutSection
              onKnowMoreClick={() => handleNavigateToAbout(null)}
              onMeetLeadershipClick={() => handleNavigateToAbout('leadership')}
              onPartnerClick={() => setIsPartnerOpen(true)}
              onContactClick={() => handleOpenContact('Executive Leadership Briefing')}
            />

            <TestimonialsMarquee />

            <ForensicsTelemetry
              onExploreClick={() => {}}
              onRequestDemo={handleRequestDemo}
            />

            <ComparisonSection />

            {/* Dedicated Partner Connect / OEM Portal Section */}
            <PartnerSection
              onPartnerClick={() => setIsPartnerOpen(true)}
              onContactClick={() => handleOpenContact('Partner & OEM Empanelment Enquiry')}
            />
          </>
        )}

        <Footer
          onPartnerClick={() => setIsPartnerOpen(true)}
          onContactClick={() => handleOpenContact('General Business Enquiry')}
        />
      </main>

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppCTA />

      {/* Modals */}
      <PartnerModal
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialEnquiryType={contactEnquiryType}
        initialProduct={contactProductPreselect}
      />
    </div>
  );
}
