import React from 'react';
import { Icon } from '@iconify/react';
import { Check, ShieldCheck, Cpu, Laptop, Lock } from 'lucide-react';

export default function PartnerSection() {
  return (
    <section id="partners" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 relative">
      <div
        className="rounded-3xl border-gradient p-6 sm:p-8 backdrop-blur"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        {/* Header */}
        <div className="flex gap-6 pr-1 pl-1 items-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
          <span className="text-4xl text-white tracking-tighter">Build with Vyntic</span>
          <span aria-hidden="true" role="separator" aria-orientation="vertical" className="w-px bg-white/10 h-10"></span>
          <span className="text-sm text-neutral-300">OEM &amp; Technology Partnerships</span>
        </div>
        <div className="h-px bg-white/10 mt-4"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10 mt-6 sm:mt-8">
          {/* Left content */}
          <div className="lg:col-span-6 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
            <h1 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] text-zinc-100 tracking-tighter">
              OEM &amp; Technology Partnerships
            </h1>

            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-black bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 shadow-[0_8px_30px_rgba(59,130,246,0.25)]" style={{ borderRadius: '9999px' }}>
                OEM Ecosystem
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm text-zinc-200 bg-white/5 ring-1 ring-white/10" style={{ borderRadius: '9999px' }}>
                Tier 1 &amp; Tier 2 Empanelment
              </span>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base mt-4">
              Partner with Vyntic to integrate sovereign video analytics, Cop AI, DPDP compliance shielding, and enterprise governance directly into your hardware systems, camera infrastructure, or client deployments.
            </p>

            <div className="h-px bg-white/10 mt-6"></div>

            {/* Partnership Benefits */}
            <div className="mt-6">
              <h3 className="text-2xl sm:text-3xl text-zinc-100 tracking-tighter mb-4">Partnership Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/15 ring-1 ring-blue-400/25 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-blue-300" />
                  </span>
                  <p className="text-zinc-300 text-sm sm:text-base">
                    Native edge hardware SDK and turnkey API empanelment for <span className="text-white font-medium">camera &amp; server OEMs</span>.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/15 ring-1 ring-blue-400/25 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-blue-300" />
                  </span>
                  <p className="text-zinc-300 text-sm sm:text-base">
                    Sovereign joint-go-to-market and compliance assurance for <span className="text-white font-medium">defense &amp; government tenders</span>.
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex gap-6 mt-8 items-center flex-wrap">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 hover:opacity-90 transition-opacity border-gradient text-sm font-medium text-black bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_8px_30px_rgba(59,130,246,0.25)]"
                style={{ borderRadius: '9999px' }}
              >
                Partner With Us
              </a>
              <a
                href="#products"
                className="inline-flex border-gradient hover:text-white transition-all hover:-translate-y-0.5 text-sm font-medium text-white/80 bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-xl gap-x-2 gap-y-2 items-center"
                style={{ borderRadius: '9999px' }}
              >
                <Icon icon="solar:play-circle-bold-duotone" width="16" height="16" />
                Explore Solutions
              </a>
            </div>
          </div>

          {/* Right showcase */}
          <div className="lg:col-span-6 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
            <div className="relative mx-auto w-full max-w-[860px]" style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))' }}>
              <div className="rounded-[28px] bg-neutral-900/60 ring-1 ring-white/10 p-3">
                <div className="relative overflow-hidden rounded-[22px] bg-neutral-950 border border-white/10">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                    <span className="h-3 w-3 rounded-full bg-zinc-700"></span>
                    <span className="h-3 w-3 rounded-full bg-zinc-700/70"></span>
                    <span className="h-3 w-3 rounded-full bg-zinc-700/50"></span>
                  </div>

                  <div className="p-6 sm:p-8 space-y-5">
                    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/15 ring-1 ring-white/10">
                          <Cpu className="h-5 w-5 text-blue-300" />
                        </span>
                        <div>
                          <p className="text-white font-semibold tracking-tight leading-none">Direct SDK &amp; API Integration</p>
                          <p className="text-xs text-neutral-400 mt-1.5">High-performance edge compute integration.</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/15 ring-1 ring-white/10">
                          <Lock className="h-5 w-5 text-blue-300" />
                        </span>
                        <div>
                          <p className="text-white font-semibold tracking-tight leading-none">Air-Gapped Sovereign Stack</p>
                          <p className="text-xs text-neutral-400 mt-1.5">Zero cloud dependencies or leaks.</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/15 ring-1 ring-white/10">
                          <ShieldCheck className="h-5 w-5 text-blue-300" />
                        </span>
                        <div>
                          <p className="text-white font-semibold tracking-tight leading-none">DPDP Act 2023 Certified</p>
                          <p className="text-xs text-neutral-400 mt-1.5">Built-in statutory compliance shield.</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-r from-blue-500/15 to-blue-300/10 ring-1 ring-blue-400/20 p-5 border-gradient">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-blue-200/80 tracking-tight">Partnership Status</p>
                          <p className="text-2xl text-white font-semibold tracking-tighter mt-1">Empanelment Open</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/20 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Global &amp; Gov Tiers
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -right-24 bottom-0 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
                  <div className="pointer-events-none absolute -left-24 -top-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
