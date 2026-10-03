import React from 'react';
import { Icon } from '@iconify/react';
import { Check, ShieldCheck, Cpu, Laptop, Lock, ArrowRight, Sparkles, Search } from 'lucide-react';

export default function PartnerSection({ onPartnerClick, onContactClick }) {
  return (
    <section id="partners" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-28 relative">
      <div
        className="rounded-3xl border-gradient p-6 sm:p-10 backdrop-blur"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        {/* Header */}
        <div className="flex gap-6 pr-1 pl-1 items-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
          <span className="text-3xl sm:text-4xl font-[650] text-white tracking-[-0.03em]">Build with Vyntiq</span>
          <span aria-hidden="true" role="separator" aria-orientation="vertical" className="w-px bg-white/10 h-10"></span>
          <span className="text-sm text-neutral-300">OEM &amp; Technology Partner Enablement Ecosystem</span>
        </div>
        <div className="h-px bg-white/10 mt-4"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10 mt-6 sm:mt-8">
          {/* Left content */}
          <div className="lg:col-span-6 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
            <h2 className="text-[40px] sm:text-5xl md:text-6xl leading-[1.05] text-zinc-100 tracking-[-0.03em]">
              OEM Empanelment &amp; Technology Partnerships
            </h2>

            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 shadow-[0_8px_30px_rgba(59,130,246,0.25)]" style={{ borderRadius: '9999px' }}>
                OEM Hardware Ecosystem
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm text-zinc-200 bg-white/5 ring-1 ring-white/10" style={{ borderRadius: '9999px' }}>
                Tier 1 &amp; Tier 2 Empanelment Open
              </span>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-relaxed">
              Partner with Vyntiq to integrate sovereign video forensics, Cop AI, proactive threat prevention, and DPDP compliance shielding directly into your camera hardware, edge NVR servers, or master systems integration bids.
            </p>

            <div className="h-px bg-white/10 mt-6"></div>

            {/* Partnership Benefits */}
            <div className="mt-6">
              <h3 className="text-xl sm:text-2xl text-zinc-100 tracking-tight font-semibold mb-4">
                Partner Enablement Advantages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/15 ring-1 ring-blue-400/25 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-blue-300" />
                  </span>
                  <p className="text-zinc-300 text-xs sm:text-sm">
                    Native C++/Rust edge SDKs and turnkey API sandbox for <span className="text-white font-medium">camera &amp; edge server OEMs</span>.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/15 ring-1 ring-blue-400/25 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-blue-300" />
                  </span>
                  <p className="text-zinc-300 text-xs sm:text-sm">
                    Sovereign joint-go-to-market (GTM) and certified DPDP compliance packs for <span className="text-white font-medium">defense &amp; smart city tenders</span>.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-400/15 ring-1 ring-blue-400/25 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-blue-300" />
                  </span>
                  <p className="text-zinc-300 text-xs sm:text-sm">
                    Live application tracking portal and dedicated partner architecture support desk.
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 mt-8 items-center flex-wrap">
              <button
                type="button"
                onClick={onPartnerClick}
                className="group inline-flex items-center gap-2 hover:opacity-90 transition-opacity text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 rounded-full px-6 py-3 shadow-[0_8px_30px_rgba(59,130,246,0.25)] cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                <span>Open OEM Enablement Portal</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={onPartnerClick}
                className="inline-flex items-center gap-2 hover:text-white transition-all hover:-translate-y-0.5 text-xs sm:text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-3 backdrop-blur-xl border border-white/10 cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                <Search className="h-4 w-4 text-blue-400" />
                <span>Track Empanelment Status</span>
              </button>
            </div>
          </div>

          {/* Right showcase */}
          <div className="lg:col-span-6 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
            <div className="relative mx-auto w-full max-w-[860px]" style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))' }}>
              <div className="rounded-[28px] bg-neutral-900/60 ring-1 ring-white/10 p-3">
                <div className="relative overflow-hidden rounded-[22px] bg-neutral-950 border border-white/10">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-zinc-700"></span>
                      <span className="h-3 w-3 rounded-full bg-zinc-700/70"></span>
                      <span className="h-3 w-3 rounded-full bg-zinc-700/50"></span>
                    </div>
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                      VYNTIQ-OEM-SDK v2.4
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 border-gradient hover:scale-[1.01] transition-transform">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/15 ring-1 ring-white/10">
                          <Cpu className="h-5 w-5 text-blue-300" />
                        </span>
                        <div>
                          <p className="text-white font-semibold text-sm tracking-tight leading-none">Direct SDK &amp; NPU Ingestion</p>
                          <p className="text-xs text-neutral-400 mt-1">High-performance edge compute (&lt;35ms latency).</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 border-gradient hover:scale-[1.01] transition-transform">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/15 ring-1 ring-white/10">
                          <Lock className="h-5 w-5 text-blue-300" />
                        </span>
                        <div>
                          <p className="text-white font-semibold text-sm tracking-tight leading-none">Air-Gapped Sovereign Pipeline</p>
                          <p className="text-xs text-neutral-400 mt-1">Zero cloud telemetry or third-party leakage.</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 border-gradient hover:scale-[1.01] transition-transform">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/15 ring-1 ring-white/10">
                          <ShieldCheck className="h-5 w-5 text-blue-300" />
                        </span>
                        <div>
                          <p className="text-white font-semibold text-sm tracking-tight leading-none">DPDP Act 2023 Statutory Shield</p>
                          <p className="text-xs text-neutral-400 mt-1">Built-in privacy and anonymization engine.</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-r from-blue-500/15 to-blue-300/10 ring-1 ring-blue-400/20 p-4 border-gradient">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-blue-200/80 tracking-tight">Empanelment Status</p>
                          <p className="text-xl sm:text-2xl text-white font-bold tracking-tight mt-0.5">Registration Open</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/20 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Global &amp; Gov Tiers
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -right-24 bottom-0 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
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
