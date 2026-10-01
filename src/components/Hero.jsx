import React from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pb-24 lg:pt-24">
      {/* Pill */}
      <div className="mx-auto w-fit mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
        <div className="inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 px-3 py-1.5 text-xs text-neutral-300" style={{ borderRadius: '9999px' }}>
          <span className="inline-flex items-center justify-center rounded-full bg-blue-400/20 text-blue-300 px-2 py-0.5">
            New
          </span>
          <span className="font-medium">Enterprise &amp; Government AI</span>
          <Icon icon="solar:star-fall-minimalistic-2-bold-duotone" width="14" height="14" style={{ color: 'rgb(96, 165, 250)' }} />
        </div>
      </div>

      {/* Heading */}
      <div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll text-center animate">
        <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
          Intelligence you can trust enough to build on.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-neutral-300">
          Vyntic builds sovereign computer vision intelligence, statutory DPDP compliance platforms, and governance AI engineered for national security, public safety institutions, and high-assurance enterprises.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 items-center justify-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all"
            style={{ borderRadius: '9999px' }}
          >
            Explore Solutions
          </a>

          <div className="inline-block group relative">
            <a
              href="#contact"
              className="inline-flex gap-2 border-gradient hover:text-white transition-all hover:-translate-y-0.5 text-sm font-medium text-white/80 bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-xl gap-x-2 gap-y-2 items-center"
              style={{ borderRadius: '9999px' }}
            >
              <Icon icon="solar:play-circle-bold-duotone" width="16" height="16" />
              Contact Us
            </a>
            <span
              className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
              style={{
                background: 'radial-gradient(60% 100% at 50% 50%, rgba(59,130,246,.55), rgba(59,130,246,.28) 35%, transparent 70%)',
                filter: 'blur(10px) saturate(120%)'
              }}
              aria-hidden="true"
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}
