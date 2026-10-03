import React from 'react';
import { TrendingDown, Circle, AlertTriangle, Brain, Activity } from 'lucide-react';
import { Icon } from '@iconify/react';

export default function ComparisonSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-28 relative">
      <div
        className="rounded-3xl border-gradient p-6 sm:p-10 relative backdrop-blur"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        {/* Header */}
        <div className="flex gap-6 pr-1 pl-1 items-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
          <h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.98] text-white tracking-[-0.03em]">The problem.</h2>
          <span aria-hidden="true" role="separator" aria-orientation="vertical" className="w-px bg-white/20 h-10"></span>
          <p className="sm:text-base text-sm text-slate-300 mt-1 tracking-tight">How Vyntiq solves high-assurance enterprise &amp; government challenges</p>
        </div>
        <div className="h-px bg-white/20 mt-4"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mt-6 sm:mt-8 relative items-stretch">
          {/* PROBLEM 1 */}
          <div
            className="lg:col-span-4 border-gradient rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate"
            style={{
              background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)'
            }}
          >
            <span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-rose-400/30 bg-neutral-950 text-xs sm:text-sm text-rose-300 tracking-tight" style={{ borderRadius: '9999px' }}>
              PROBLEM
            </span>
            <div className="relative h-48 sm:h-56 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 p-4 sm:p-6 flex items-center justify-center">
                <div className="bg-neutral-900/90 border border-rose-400/20 rounded-xl p-5 w-full shadow-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500/15 ring-1 ring-rose-400/25">
                      <TrendingDown className="h-4 w-4 text-rose-400" />
                    </span>
                    <div className="h-2 w-28 bg-white/60 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-rose-400/20 rounded"></div>
                    <div className="h-2 w-4/5 bg-rose-400/15 rounded"></div>
                    <div className="h-2 w-3/4 bg-rose-400/10 rounded"></div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-rose-500/15 ring-1 ring-rose-400/25 px-2.5 py-1 text-[10px] font-medium text-rose-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                    High Risk: Cloud Leakage
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-2xl sm:text-3xl text-white tracking-tight font-bold">Uncontrolled Cloud AI &amp; Data Leakage</h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">Generic cloud AI models expose sensitive government and corporate data to third-party providers, violating national sovereignty and data protection mandates.</p>
          </div>

          {/* PROBLEM 2 */}
          <div
            className="lg:col-span-4 border-gradient rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate"
            style={{
              background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)'
            }}
          >
            <span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-amber-400/30 bg-neutral-950 text-xs sm:text-sm text-amber-300 tracking-tight" style={{ borderRadius: '9999px' }}>
              CHALLENGE
            </span>
            <div className="relative h-48 sm:h-56 rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-white/5 to-white/0 p-4 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="bg-neutral-900/80 border border-white/10 rounded-lg p-3 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Circle className="h-3.5 w-3.5 text-amber-400" />
                    <div className="h-1.5 w-12 bg-amber-400/60 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 w-full bg-white/20 rounded"></div>
                    <div className="h-1 w-4/5 bg-white/20 rounded"></div>
                  </div>
                </div>
                <div className="bg-neutral-900/80 border border-white/10 rounded-lg p-3 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                    <div className="h-1.5 w-10 bg-amber-400/60 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 w-full bg-white/20 rounded"></div>
                    <div className="h-1 w-5/6 bg-white/20 rounded"></div>
                  </div>
                </div>
                <div className="bg-neutral-900/80 border border-white/10 rounded-lg p-3 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-3.5 w-3.5 text-amber-400" />
                    <div className="h-1.5 w-14 bg-amber-400/60 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 w-full bg-white/20 rounded"></div>
                    <div className="h-1 w-4/5 bg-white/20 rounded"></div>
                  </div>
                </div>
                <div className="bg-neutral-900/80 border border-white/10 rounded-lg p-3 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="h-3.5 w-3.5 text-amber-400" />
                    <div className="h-1.5 w-8 bg-amber-400/60 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1 w-full bg-white/20 rounded"></div>
                    <div className="h-1 w-3/4 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-2xl sm:text-3xl text-white tracking-tight font-bold">Statutory DPDP Non-Compliance</h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">Failure to comply with India's DPDP Act 2023 and global privacy frameworks leads to massive statutory penalties up to ₹250 Cr, reputational damage, and operational freezes.</p>
          </div>

          {/* SOLUTION */}
          <div
            className="lg:col-span-4 border-gradient rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate"
            style={{
              background: 'linear-gradient(225deg,rgba(59,130,246,0.10) 0%,rgba(59,130,246,0.05) 50%,rgba(59,130,246,0.10) 100%)'
            }}
          >
            <span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-blue-400/30 bg-neutral-950 text-xs sm:text-sm text-blue-300 tracking-tight" style={{ borderRadius: '9999px' }}>
              VYNTIQ SOLUTION
            </span>
            <div className="relative h-48 sm:h-56 rounded-2xl bg-white/5 border border-blue-400/20 overflow-hidden p-4 flex items-center justify-center">
              <div className="w-full h-full rounded-xl overflow-hidden bg-neutral-900/80 border border-blue-400/10 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-blue-400/20 rounded-lg flex items-center justify-center">
                      <Icon icon="solar:shield-check-bold-duotone" width="14" height="14" className="text-blue-300" />
                    </div>
                    <div className="h-2 w-20 bg-white/70 rounded"></div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/25 px-2 py-0.5 text-[9px] font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Sovereign 100%
                  </span>
                </div>
                <div className="flex items-end justify-center gap-1.5 h-20">
                  <div className="w-3 rounded-sm bg-blue-400/40" style={{ height: '35%' }}></div>
                  <div className="w-3 rounded-sm bg-blue-400/55" style={{ height: '55%' }}></div>
                  <div className="w-3 rounded-sm bg-blue-400/70" style={{ height: '45%' }}></div>
                  <div className="w-3 rounded-sm bg-blue-400/80" style={{ height: '70%' }}></div>
                  <div className="w-3 rounded-sm bg-blue-400/90" style={{ height: '60%' }}></div>
                  <div className="w-3 rounded-sm bg-blue-400" style={{ height: '90%' }}></div>
                  <div className="w-3 rounded-sm bg-blue-300" style={{ height: '100%' }}></div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div className="bg-blue-400/10 border border-blue-400/20 rounded p-1.5 text-center">
                    <div className="h-1 w-8 bg-blue-400 rounded mx-auto"></div>
                  </div>
                  <div className="bg-blue-400/10 border border-blue-400/20 rounded p-1.5 text-center">
                    <div className="h-1 w-6 bg-blue-400 rounded mx-auto"></div>
                  </div>
                  <div className="bg-blue-400/10 border border-blue-400/20 rounded p-1.5 text-center">
                    <div className="h-1 w-10 bg-blue-400 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-2xl sm:text-3xl text-white tracking-tight font-bold">Sovereign Architecture &amp; DPDP Shield</h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">Vyntiq delivers 100% air-gapped on-premise AI deployments with automated DPDP consent governance and cryptographic chain of custody for all video and contract data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
