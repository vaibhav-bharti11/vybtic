import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { productsData } from '../data/productsData';
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Layers, Cpu } from 'lucide-react';

export default function ProductsSection({ onSelectProduct, onRequestDemo }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', count: productsData.length },
    { name: 'Public Safety & Vision AI', count: 3, filter: ['cop-ai', 'video-forensics', 'video-prevention'] },
    { name: 'Operational & Spatial AI', count: 1, filter: ['video-analytics'] },
    { name: 'Compliance & Legal', count: 2, filter: ['clm', 'dpdp-shield'] },
    { name: 'Enterprise & R&D', count: 2, filter: ['hrms', 'upcoming-solutions'] },
  ];

  const filteredProducts = productsData.filter((p) => {
    if (activeCategory === 'All') return true;
    const cat = categories.find((c) => c.name === activeCategory);
    return cat?.filter?.includes(p.id);
  });

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-28 relative">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -top-16 left-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>

      {/* Section Header */}
      <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
        <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-blue-400 mb-4">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            PRODUCTS &amp; SOVEREIGN SOLUTIONS
          </span>
          <span>(01)</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-white tracking-[-0.03em]">
              Engineered for absolute sovereignty.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
              Air-gapped computer vision, automated statutory compliance, and enterprise intelligence designed for high-assurance deployments with zero cloud leakage.
            </p>
          </div>

          {/* Quick CTA */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onRequestDemo('Complete Vyntiq Suite')}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/15 px-5 py-2.5 text-xs font-medium text-white transition-all hover:-translate-y-0.5 cursor-pointer"
              style={{ borderRadius: '9999px' }}
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              Request Enterprise Pitch Deck
            </button>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-5 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveCategory(cat.name)}
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.name
                  ? 'bg-gradient-to-r from-blue-400 to-blue-300 text-black shadow-[0_4px_16px_rgba(59,130,246,0.3)] font-semibold'
                  : 'bg-white/5 text-neutral-300 hover:bg-white/10 ring-1 ring-white/10'
              }`}
              style={{ borderRadius: '9999px' }}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.name ? 'bg-black/20 text-black' : 'bg-white/10 text-neutral-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredProducts.map((prod, idx) => (
          <article
            key={prod.id}
            className="group rounded-3xl border-gradient bg-neutral-900/50 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] [animation:fadeSlideIn_0.6s_ease-out_both]"
            style={{
              background: 'linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.05) 100%)',
              borderRadius: '24px',
              animationDelay: `${0.1 * (idx % 6)}s`
            }}
          >
            <div>
              {/* Card Top */}
              <div className="flex items-center justify-between mb-5">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-300 shadow-sm group-hover:scale-105 transition-transform">
                  <Icon icon={prod.icon} width="24" height="24" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20 px-3 py-1 text-[11px] font-medium">
                  {prod.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                {prod.name}
              </h3>
              <p className="text-xs text-blue-300/80 font-medium mt-1 mb-3">
                {prod.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed mb-5 line-clamp-3">
                {prod.description}
              </p>

              {/* Top 3 Feature Highlights */}
              <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                {prod.features.slice(0, 3).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                    <span className="line-clamp-1">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onSelectProduct(prod)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer group-hover:translate-x-1 transition-transform"
              >
                <span>View Full Specs</span>
                <ChevronRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => onRequestDemo(prod.name)}
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-blue-500 hover:text-black text-white text-[11px] font-medium transition-all cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                <span>Request Demo</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
