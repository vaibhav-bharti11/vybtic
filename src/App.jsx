import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import TestimonialsMarquee from './components/TestimonialsMarquee';
import ForensicsTelemetry from './components/ForensicsTelemetry';
import ComparisonSection from './components/ComparisonSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import BackgroundLayers from './components/BackgroundLayers';

export default function App() {
  useEffect(() => {
    const initInView = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
      );

      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });

      return observer;
    };

    const timer = setTimeout(() => {
      initInView();
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased relative">
      <BackgroundLayers />
      <Header />
      <main className="relative z-10">
        <Hero />
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BentoGrid />
        </section>
        <TestimonialsMarquee />
        <ForensicsTelemetry />
        <ComparisonSection />
        <PartnerSection />
        <Footer />
      </main>
    </div>
  );
}
