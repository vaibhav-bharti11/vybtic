import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Server,
  Sparkles,
  Building2,
  Lock,
  Layers,
  Target,
  ExternalLink
} from 'lucide-react';
import { productsData } from '../data/productsData';

export default function ProductDetailPage({ product, onBack, onSelectProduct, onRequestDemo, onPartnerClick }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product?.id]);

  if (!product) return null;

  const otherProducts = productsData.filter((p) => p.id !== product.id);

  return (
    <div className="min-h-screen py-6 sm:py-10 animate-fade-in text-white relative">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-20 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Navigation Bar & Breadcrumb */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/15 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white transition-all hover:-translate-x-1 cursor-pointer"
            style={{ borderRadius: '9999px' }}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products Catalogue</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
            <span>Sovereign Suite</span>
            <span>/</span>
            <span className="text-blue-400 font-medium">{product.badge}</span>
            <span>/</span>
            <span className="text-white font-semibold">{product.name}</span>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/25 px-3 py-1 text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                {product.badge}
              </span>
              <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                Status: {product.status}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 shadow-lg">
                <Icon icon={product.icon} width="32" height="32" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-blue-200/90 font-medium mt-1">
                  {product.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
              {product.description}
            </p>

            {/* Quick Action Button Group */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={() => onRequestDemo(product.name)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 text-black px-7 py-3 text-sm font-semibold shadow-[0_4px_24px_rgba(59,130,246,0.35)] hover:opacity-90 hover:-translate-y-0.5 transition-all cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                <span>Request Technical Pilot Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={onPartnerClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/15 px-6 py-3 text-sm font-medium text-white transition-all cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                <Cpu className="h-4 w-4 text-blue-400" />
                <span>OEM &amp; SDK Integration</span>
              </button>
            </div>

            {/* Quick Specs Highlight Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <span className="text-neutral-400 block text-[11px]">Sovereignty</span>
                <strong className="text-white font-semibold">100% Air-Gapped</strong>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <span className="text-neutral-400 block text-[11px]">Latency</span>
                <strong className="text-emerald-400 font-semibold">&lt; 50ms Edge</strong>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                <span className="text-neutral-400 block text-[11px]">Compliance</span>
                <strong className="text-blue-400 font-semibold">DPDP 2023 Shield</strong>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Technology Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border-gradient p-2.5 bg-neutral-900/60 ring-1 ring-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden group">
              <div className="relative overflow-hidden rounded-[20px] aspect-video bg-black">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs backdrop-blur-md bg-black/60 p-3 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-white font-semibold">{product.name} Neural Runtime</span>
                  </div>
                  <span className="text-neutral-400 font-mono text-[10px]">Zero Cloud Leakage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Problem vs Solution Architecture */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-rose-500/5 ring-1 ring-rose-500/20 p-6 sm:p-8 border-gradient flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs tracking-wider uppercase mb-3">
                <Target className="h-4 w-4" />
                <span>The Mission Challenge &amp; Problem Solved</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                Why Legacy &amp; Cloud Systems Fail
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {product.problemSolved}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-500/20 text-xs text-rose-300 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Eliminated by Vyntiq Sovereign Architecture</span>
            </div>
          </div>

          <div className="rounded-3xl bg-blue-500/5 ring-1 ring-blue-500/20 p-6 sm:p-8 border-gradient flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-3">
                <Sparkles className="h-4 w-4" />
                <span>The Vyntiq Sovereign Solution</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                Deterministic, Air-Gapped Intelligence
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-500/20 text-xs text-blue-300 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Cryptographic Chain of Custody &amp; DPDP Act 2023 Guarantee</span>
            </div>
          </div>
        </section>

        {/* Section 3: Deep-Dive Features & Key Differentiators */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Key Features */}
          <div className="lg:col-span-6 rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 p-6 sm:p-8 border-gradient">
            <h3 className="text-xl font-bold text-white tracking-tight mb-5 flex items-center gap-2">
              <Layers className="h-5 w-5 text-blue-400" />
              Key Product Features
            </h3>
            <ul className="space-y-4">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/30 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Differentiators */}
          <div className="lg:col-span-6 rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 p-6 sm:p-8 border-gradient">
            <h3 className="text-xl font-bold text-white tracking-tight mb-5 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              Architectural Differentiators
            </h3>
            <ul className="space-y-4">
              {product.differentiators.map((diff, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed">{diff}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 4: Target Sectors & Real-World Use Cases */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Target Customers */}
          <div className="lg:col-span-6 rounded-3xl bg-black/40 border border-white/10 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-blue-400" />
              Target Sectors &amp; Government Agencies
            </h3>
            <ul className="space-y-3">
              {product.targetCustomers.map((cust, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-neutral-300 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="h-2 w-2 rounded-full bg-blue-400 shrink-0"></span>
                  <span>{cust}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="lg:col-span-6 rounded-3xl bg-black/40 border border-white/10 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-emerald-400" />
              Primary Mission Use Cases
            </h3>
            <ul className="space-y-3">
              {product.useCases.map((uc, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-neutral-300 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0"></span>
                  <span>{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 5: Quantifiable Benefits & Deployment Models */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-neutral-900 to-neutral-900 ring-1 ring-blue-500/20 p-6 sm:p-10 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
              Measurable Operational Value
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.benefits.map((ben, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 mb-2" />
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium">
                    {ben}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Server className="h-5 w-5 text-blue-400 shrink-0" />
              <div className="text-xs sm:text-sm text-neutral-300">
                <strong className="text-white block sm:inline">Certified Deployment Model: </strong>
                {product.deploymentModel}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onRequestDemo(product.name)}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 text-black text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer self-start sm:self-auto"
              style={{ borderRadius: '9999px' }}
            >
              Request Architecture Whitepaper
            </button>
          </div>
        </section>

        {/* Section 6: Explore Other Sovereign Products */}
        <section className="pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Explore Other Sovereign Solutions
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Integrated components of the Vyntiq high-assurance intelligence platform.
              </p>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
            >
              View All Catalogue
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProducts.slice(0, 4).map((other) => (
              <div
                key={other.id}
                onClick={() => onSelectProduct(other)}
                className="group p-5 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-all cursor-pointer border-gradient flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="h-9 w-9 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-300 border border-blue-400/20">
                      <Icon icon={other.icon} width="18" height="18" />
                    </span>
                    <span className="text-[10px] text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded-full">
                      {other.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {other.name}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {other.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300 font-medium group-hover:text-white">
                  <span>Explore Specs</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
