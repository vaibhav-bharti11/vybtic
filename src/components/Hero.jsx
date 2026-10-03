import React from 'react';
import { Icon } from '@iconify/react';
import { ArrowRight, Cpu } from 'lucide-react';

export default function Hero({ onPartnerClick, onContactClick }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pb-24 lg:pt-20">
      {/* Pill */}
      <div className="mx-auto w-fit mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
        <div
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-neutral-300 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5"
          style={{ borderRadius: '9999px' }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 text-blue-300 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider uppercase border border-blue-400/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Sovereign AI Suite
          </span>
          <span className="font-medium tracking-tight text-neutral-200">High-Assurance Enterprise &amp; Government AI</span>
          <Icon icon="solar:star-fall-minimalistic-2-bold-duotone" width="14" height="14" className="text-blue-400" />
        </div>
      </div>

      {/* Heading */}
      <div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-center animate">
        <h1
          className="mx-auto max-w-5xl text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-[650] tracking-[-0.032em] leading-[1.04] text-white"
          style={{ textWrap: 'balance' }}
        >
          <span className="text-white">
            Intelligence you can
          </span>{' '}
          <span className="font-medium text-blue-200 px-1">
            trust
          </span>{' '}
          <br className="hidden sm:inline" />
          <span className="text-neutral-200">
            enough to build on.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-neutral-300/90 font-normal leading-[1.7] tracking-[0.004em]">
          Vyntiq engineers <span className="text-white font-medium">sovereign computer vision intelligence</span>, sub-second <span className="text-white font-medium">video forensics</span>, and statutory <span className="text-white font-medium">DPDP compliance</span> platforms engineered for national defense, law enforcement, and high-assurance enterprises.
        </p>

        {/* Hero CTA Button Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center">
          {/* Button 1: Primary Action (White Pill) */}
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white text-neutral-950 px-8 py-3.5 text-sm font-semibold shadow-[0_2px_16px_rgba(255,255,255,0.25)] hover:bg-neutral-100 hover:shadow-[0_4px_24px_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer select-none group"
            style={{ borderRadius: '9999px' }}
          >
            <span>Explore Sovereign Solutions</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Button 2: OEM & Hardware Empanelment (Electric Cyan/Blue Gradient Pill) */}
          <button
            type="button"
            onClick={onPartnerClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 text-black px-8 py-3.5 text-sm font-semibold shadow-[0_4px_24px_rgba(59,130,246,0.35)] hover:opacity-90 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
            style={{ borderRadius: '9999px' }}
          >
            <Cpu className="h-4 w-4" />
            <span>OEM &amp; Hardware Empanelment</span>
          </button>
        </div>

        {/* Live Architectural Guarantee Micro-Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs text-neutral-400 font-medium">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            100% Air-Gapped Compute
          </span>
          <span className="hidden sm:inline text-neutral-600">·</span>
          <span className="flex items-center gap-1.5 text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            DPDP Act 2023 Shield
          </span>
          <span className="hidden sm:inline text-neutral-600">·</span>
          <span className="flex items-center gap-1.5 text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
            Sub-Second Vector Latency
          </span>
        </div>
      </div>
    </section>
  );
}
