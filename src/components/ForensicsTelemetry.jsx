import React from 'react';
import { Icon } from '@iconify/react';
import { CandlestickChart, TrendingUp, TrendingDown, Zap, BrainCircuit, Layers } from 'lucide-react';

export default function ForensicsTelemetry() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 mb-24 relative">
      <div className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute -top-10 -left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Visual: Stream Telemetry Preview */}
        <div className="[animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll border-gradient bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-blue-300/10 rounded-[28px] p-2 animate">
          <div className="overflow-hidden rounded-[22px] bg-black/40 ring-1 ring-white/10">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-blue-500/15 ring-1 ring-white/10">
                  <CandlestickChart className="h-4 w-4 text-blue-300" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white leading-none">CAM-FEED-09 · 4K LIVE</p>
                  <p className="text-[10px] text-emerald-400 mt-1">Forensic Vision Engine · Sovereign</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/20 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Connected
              </span>
            </div>

            {/* Candle/Signal preview */}
            <div className="relative h-[280px] md:h-[440px] w-full p-4 sm:p-6 flex items-end justify-center gap-2 sm:gap-3">
              {/* Signal marker 1 */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/25 px-3 py-1.5 backdrop-blur">
                <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-[11px] font-semibold text-emerald-300">DETECTION · 99.4% CONF</span>
              </div>
              {/* Signal marker 2 */}
              <div className="absolute top-6 right-6 inline-flex items-center gap-2 rounded-lg bg-rose-500/15 ring-1 ring-rose-400/25 px-3 py-1.5 backdrop-blur">
                <TrendingDown className="h-3.5 w-3.5 text-rose-400" />
                <span className="text-[11px] font-semibold text-rose-300">ANOMALY · REAL-TIME</span>
              </div>

              {/* Candles */}
              <div className="flex flex-col items-center justify-end"><span className="w-px bg-emerald-400/60" style={{ height: '18px' }}></span><span className="w-2.5 sm:w-3.5 rounded-sm bg-emerald-400" style={{ height: '48px' }}></span><span className="w-px bg-emerald-400/60" style={{ height: '14px' }}></span></div>
              <div className="flex flex-col items-center justify-end"><span className="w-px bg-rose-400/60" style={{ height: '22px' }}></span><span className="w-2.5 sm:w-3.5 rounded-sm bg-rose-400" style={{ height: '36px' }}></span><span className="w-px bg-rose-400/60" style={{ height: '20px' }}></span></div>
              <div className="flex flex-col items-center justify-end"><span className="w-px bg-emerald-400/60" style={{ height: '30px' }}></span><span className="w-2.5 sm:w-3.5 rounded-sm bg-emerald-400" style={{ height: '72px' }}></span><span className="w-px bg-emerald-400/60" style={{ height: '12px' }}></span></div>
              <div className="flex flex-col items-center justify-end"><span className="w-px bg-emerald-400/60" style={{ height: '16px' }}></span><span className="w-2.5 sm:w-3.5 rounded-sm bg-emerald-400" style={{ height: '60px' }}></span><span className="w-px bg-emerald-400/60" style={{ height: '18px' }}></span></div>
              <div className="flex flex-col items-center justify-end"><span className="w-px bg-rose-400/60" style={{ height: '26px' }}></span><span className="w-2.5 sm:w-3.5 rounded-sm bg-rose-400" style={{ height: '54px' }}></span><span className="w-px bg-rose-400/60" style={{ height: '24px' }}></span></div>
              <div className="flex flex-col items-center justify-end"><span className="w-px bg-emerald-400/60" style={{ height: '20px' }}></span><span className="w-2.5 sm:w-3.5 rounded-sm bg-emerald-400" style={{ height: '96px' }}></span><span className="w-px bg-emerald-400/60" style={{ height: '10px' }}></span></div>
              <div className="flex flex-col items-center justify-end"><span className="w-px bg-emerald-400/60" style={{ height: '24px' }}></span><span className="w-2.5 sm:w-3.5 rounded-sm bg-emerald-400" style={{ height: '84px' }}></span><span className="w-px bg-emerald-400/60" style={{ height: '16px' }}></span></div>
              <div className="flex flex-col items-center justify-end"><span className="w-px bg-rose-400/60" style={{ height: '30px' }}></span><span className="w-2.5 sm:w-3.5 rounded-sm bg-rose-400" style={{ height: '44px' }}></span><span className="w-px bg-rose-400/60" style={{ height: '28px' }}></span></div>
              <div className="hidden sm:flex flex-col items-center justify-end"><span className="w-px bg-emerald-400/60" style={{ height: '18px' }}></span><span className="w-3.5 rounded-sm bg-emerald-400" style={{ height: '110px' }}></span><span className="w-px bg-emerald-400/60" style={{ height: '14px' }}></span></div>
              <div className="hidden sm:flex flex-col items-center justify-end"><span className="w-px bg-emerald-400/60" style={{ height: '22px' }}></span><span className="w-3.5 rounded-sm bg-emerald-400" style={{ height: '130px' }}></span><span className="w-px bg-emerald-400/60" style={{ height: '12px' }}></span></div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="[animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate">
          <div className="inline-flex items-center gap-2 text-sm text-blue-200/80">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 ring-1 ring-white/10">
              <Icon icon="solar:star-fall-minimalistic-2-bold-duotone" width="14" height="14" />
            </span>
          </div>

          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter">
            Video Forensics &amp; Prevention — sub-second indexing, real-time alerts.
          </h2>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl">
            Vyntic Video Forensics and Prevention engines process dense surveillance streams in real time, surfacing instant threat detections, facial recognition, and object tracking with complete evidentiary chain of custody.
          </p>

          <div className="mt-8">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 hover:opacity-90 transition-opacity border-gradient text-sm font-medium text-black bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_8px_30px_rgba(59,130,246,0.25)]"
              style={{ borderRadius: '9999px' }}
            >
              Explore Vision AI
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-black">
                <Icon icon="solar:arrow-right-up-linear" width="16" height="16" />
              </span>
            </a>
          </div>

          {/* Feature cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
              <Zap className="h-4.5 w-4.5 text-blue-300 mb-3" />
              <h3 className="text-base tracking-tight text-white font-semibold leading-none">Sub-Second Forensics</h3>
              <p className="mt-3 text-sm text-neutral-400">Search millions of video frames instantly for suspects, plates, and anomalies.</p>
            </div>

            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
              <BrainCircuit className="h-4.5 w-4.5 text-blue-300 mb-3" />
              <h3 className="text-base tracking-tight text-white font-semibold leading-none">Sovereign &amp; Air-Gapped</h3>
              <p className="mt-3 text-sm text-neutral-400">Air-gapped on-premise compute with zero external data transmission.</p>
            </div>

            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
              <Layers className="h-4.5 w-4.5 text-blue-300 mb-3" />
              <h3 className="text-base tracking-tight text-white font-semibold leading-none">Multi-Camera Synthesis</h3>
              <p className="mt-3 text-sm text-neutral-400">Seamlessly scales across thousands of edge cameras and control centers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
