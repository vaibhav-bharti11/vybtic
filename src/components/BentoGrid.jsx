import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import Chart from 'chart.js/auto';

export default function BentoGrid() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      chartInstance.current = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          datasets: [{
            label: 'Success',
            data: [92, 96, 98, 97, 99, 98, 97],
            backgroundColor: ['#3b82f6','#3b82f6','#3b82f6','#3b82f6','#3b82f6','#3b82f6','#3b82f6'],
            borderRadius: 6,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(17,17,17,0.9)',
              titleColor: '#fff',
              bodyColor: '#d1d5db',
              padding: 10,
              displayColors: false
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#9ca3af', font: { family: 'Inter', weight: '500' } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.08)' },
              ticks: { color: '#9ca3af', font: { family: 'Inter', weight: '500' }, stepSize: 20, callback: (v) => v + '%' },
              min: 60,
              max: 100
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div
      className="grid grid-cols-1 auto-rows-[200px] md:mt-16 md:grid-cols-6 md:gap-6 lg:grid-cols-12 lg:mt-32 overflow-hidden h-[800px] mt-16 gap-4"
      style={{
        maskImage: 'linear-gradient(180deg, transparent, black 0%, black 60%, transparent)',
        WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 60%, transparent)'
      }}
    >
      {/* Team Image Card */}
      <div
        className="relative overflow-hidden rounded-3xl border-gradient md:col-span-3 lg:col-span-6 md:row-span-2 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        <img
          className="h-full w-full object-cover opacity-90"
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/357cb3d1-9f65-4810-884b-f0072a65193d_1600w.webp"
          alt="Vision & Public Safety AI"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-1 text-[11px] border-gradient text-slate-300 bg-white/5 rounded-full px-2.5 py-1 backdrop-blur" style={{ borderRadius: '9999px' }}>
            Vision &amp; Public Safety AI
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full ring-2 ring-white/20 overflow-hidden">
              <img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61cab6ed-0aeb-4671-824c-5b8a0cf236ca_320w.webp" alt="avatar" />
            </div>
            <div className="h-8 w-8 rounded-full ring-2 ring-white/20 overflow-hidden -ml-2">
              <img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f999a94-8031-4c3e-b64e-836c1b4f5be0_320w.webp" alt="avatar" />
            </div>
            <div className="h-8 w-8 rounded-full ring-2 ring-white/20 overflow-hidden -ml-2">
              <img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08b00610-61b2-45b5-b8fc-e9305c15b460_320w.webp" alt="avatar" />
            </div>
          </div>
          <span className="text-xs text-neutral-200 font-medium">Cop AI · Video Forensics · Analytics</span>
        </div>
      </div>

      {/* Stat Card */}
      <div
        className="rounded-3xl bg-white text-neutral-900 p-6 border-gradient md:col-span-3 lg:col-span-3 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.95) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.95) 100%)',
          borderRadius: '24px'
        }}
      >
        <p className="text-4xl tracking-tighter font-bold">7</p>
        <p className="mt-2 text-sm text-neutral-600 font-medium">Sovereign Products</p>
        <div className="mt-4 flex items-center gap-2 text-blue-600">
          <Icon icon="solar:graph-up-bold-duotone" width="16" height="16" />
          <span className="text-xs font-medium">High Assurance</span>
        </div>
      </div>

      {/* Code Card */}
      <article
        className="overflow-hidden border-gradient rounded-3xl relative md:col-span-3 lg:col-span-3 md:row-span-2 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        <div className="h-full p-6 relative flex flex-col">
          <div className="relative mx-auto h-full w-full flex items-center justify-center flex-1">
            <div className="scale-[0.75] w-full">
              <div className="backdrop-blur-[2px] bg-white/[0.03] border-gradient rounded-2xl">
                <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
                  <Icon icon="solar:code-bold-duotone" width="16" height="16" style={{ color: 'rgba(255,255,255,0.7)' }} />
                  <span className="text-[11px] font-medium text-white/80">dpdp-shield.config.ts</span>
                  <span className="ml-auto text-[10px] text-white/50">modified</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-white/80 p-4 font-mono">
{`export const dpdpShield = {
  jurisdiction: "IN-DPDP-2023",
  dataResidency: "sovereign-local",
  zeroCloudLeakage: true,
  auditLog: "immutable-sha256"
}

enforceGovernance(dpdpShield)`}
                </pre>
              </div>
            </div>
          </div>
          <div className="relative pt-2">
            <h3 className="text-lg font-semibold tracking-tight text-white/95">Compliance &amp; Governance</h3>
            <p className="mt-2 text-sm text-white/70">DPDP Shield &amp; Sovereign CLM automated governance.</p>
          </div>
        </div>
      </article>

      {/* Chart Card */}
      <div
        className="rounded-3xl border-gradient p-6 md:col-span-3 lg:col-span-3 md:row-span-2 [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        <h3 className="text-base font-semibold tracking-tight">Video Analytics SLA</h3>
        <p className="mt-1 text-sm text-neutral-300">Real-Time Stream Feeds</p>
        <div className="mt-4 rounded-xl bg-black/30 p-3 border-gradient">
          <div className="relative w-full h-28">
            <canvas ref={chartRef} height="112"></canvas>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            <span className="text-sm font-semibold tracking-tight">97.8%</span>
          </div>
          <span className="text-xs text-neutral-300 font-medium">Air-gapped SLA met</span>
        </div>
      </div>

      {/* Global Card */}
      <div
        className="relative overflow-hidden rounded-3xl border-gradient md:col-span-3 lg:col-span-3 md:row-span-2 [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        <div className="p-6">
          <p className="text-3xl tracking-tighter font-bold">100%</p>
          <p className="mt-1 text-sm text-neutral-300">Sovereign Infrastructure</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-blue-400/15 text-blue-300 px-2.5 py-1 text-xs font-medium border-gradient" style={{ borderRadius: '9999px' }}>Air-Gapped</span>
            <span className="inline-flex items-center rounded-full bg-blue-400/15 text-blue-300 px-2.5 py-1 text-xs font-medium border-gradient" style={{ borderRadius: '9999px' }}>On-Premise</span>
            <span className="inline-flex items-center rounded-full bg-blue-400/15 text-blue-300 px-2.5 py-1 text-xs font-medium border-gradient" style={{ borderRadius: '9999px' }}>Gov Hybrid</span>
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="overflow-hidden rounded-2xl border-gradient">
            <img className="h-40 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d25a1767-0ea8-4aac-b981-6afd67dc79a6_800w.webp" alt="Globe" />
          </div>
        </div>
      </div>

      {/* AI Card */}
      <article
        className="relative overflow-hidden hover:bg-white/[0.08] transition-all group rounded-3xl border-gradient md:col-span-3 lg:col-span-3 md:row-span-2 [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll animate"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        <div className="flex p-6 items-center justify-between">
          <h4 className="text-base font-semibold tracking-tight">Technology Highlights</h4>
          <span className="inline-flex items-center gap-1 text-[11px] border-gradient text-slate-300 bg-white/5 rounded-full px-2.5 py-1" style={{ borderRadius: '9999px' }}>
            Core Stack
          </span>
        </div>
        <div className="flex-1 flex p-6 pt-0 items-center">
          <div className="relative w-full">
            <div className="hover:bg-black/50 transition-all bg-black/60 border-gradient rounded-xl p-3 backdrop-blur">
              <div className="flex gap-1 mb-2 items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400/80"></span>
              </div>
              <div className="overflow-x-auto">
                <pre className="text-[10px] leading-tight min-w-max text-slate-300 font-mono">
{`# Vyntic Stack
PILLARS = [
  "Innovation", "AI",
  "Security", "Analytics",
  "Compliance", "Enterprise"
]`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Orbit Card */}
      <section
        className="group relative overflow-hidden border-gradient rounded-3xl md:col-span-3 lg:col-span-3 md:row-span-2 [animation:fadeSlideIn_0.8s_ease-out_0.9s_both] animate-on-scroll animate"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        <div className="relative h-full overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: '.6s' }}></div>
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-gradient bg-neutral-900/80 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 p-4" style={{ borderRadius: '9999px' }}>
                <img src="/assets/logo-emblem.png" alt="Vyntic Core" className="h-14 w-auto object-contain drop-shadow-[0_4px_16px_rgba(59,130,246,0.4)]" />
              </div>
            </div>
          </div>
          <div className="relative border-t border-white/10">
            <div className="p-6">
              <h3 className="text-xl tracking-tight font-semibold text-slate-100">Enterprise Operations</h3>
              <p className="leading-relaxed text-slate-400 mt-3 text-sm">HRMS Suite &amp; sovereign operational workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Card */}
      <div
        className="flex flex-col rounded-3xl border-gradient p-6 backdrop-blur-md transition md:col-span-3 lg:col-span-3 md:row-span-2 [animation:fadeSlideIn_0.8s_ease-out_1s_both] animate-on-scroll animate"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67ea0bb9-359c-4e9a-a90d-b44f079e8cf7_320w.webp" alt="Defense Lead" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="text-xs font-semibold text-white">Defense &amp; Gov Tech Lead</p>
              <p className="text-[10px] text-white/60">Sovereign Operations</p>
            </div>
          </div>
        </div>
        <p className="leading-snug text-sm font-medium mb-4 text-white">
          "Vyntic delivers complete data sovereignty, zero cloud leakage, and mission-critical reliability."
        </p>
        <div className="mb-4 rounded-lg border-gradient p-3">
          <p className="text-xs text-white/80 mb-2 font-medium">Key Results:</p>
          <ul className="text-xs text-white/70 space-y-1">
            <li>• 100% On-Premise Isolation</li>
            <li>• Zero Third-Party Cloud Leak</li>
            <li>• DPDP Act 2023 Compliant</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
