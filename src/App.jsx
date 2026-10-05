import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import BackgroundLayers from './components/BackgroundLayers';
import LinkedInCTA from './components/LinkedInCTA';

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

  const handleNavigateToProducts = () => {
    setSelectedProduct(null);
    setCurrentView('home');
    window.setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased relative selection:bg-blue-500 selection:text-white">
      <BackgroundLayers />

      <Header
        onLogoClick={handleNavigateHome}
        onAboutClick={() => handleNavigateToAbout(null)}
        onProductsClick={handleNavigateToProducts}
        onPartnerClick={() => setIsPartnerOpen(true)}
        onRequestDemo={() => handleRequestDemo('')}
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
            onSelectProduct={handleSelectProduct}
            onRequestDemo={handleRequestDemo}
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
            <Hero />
            <ProductsSection
              onSelectProduct={handleSelectProduct}
              onRequestDemo={handleRequestDemo}
            />
            <AboutSection
              onKnowMoreClick={() => handleNavigateToAbout(null)}
              onMeetLeadershipClick={() => handleNavigateToAbout('leadership')}
            />
            <PartnerSection
              onPartnerClick={() => setIsPartnerOpen(true)}
              onContactClick={() => handleOpenContact('Partnership Enquiry')}
            />
          </>
        )}

        <Footer
          onPartnerClick={() => setIsPartnerOpen(true)}
          onContactClick={() => handleOpenContact('General Business Enquiry')}
        />
      </main>

      <LinkedInCTA />

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
