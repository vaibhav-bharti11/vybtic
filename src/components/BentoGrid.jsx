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
            data: [94, 97, 99, 98, 99, 98, 99],
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
              ticks: { color: '#9ca3af', font: { family: 'Commissioner', weight: '500' } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.08)' },
              ticks: { color: '#9ca3af', font: { family: 'Commissioner', weight: '500' }, stepSize: 20, callback: (v) => v + '%' },
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

  const cardStyle = {
    background: 'linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.05) 100%)',
    borderRadius: '24px',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 mt-16 md:mt-24">
      {/* 1. Team Image Card (Vision & Public Safety AI) */}
      <div
        className="relative overflow-hidden rounded-3xl border-gradient md:col-span-6 lg:col-span-6 min-h-[360px] flex flex-col justify-between p-6 backdrop-blur-xl [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate"
        style={cardStyle}
      >
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity"
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/357cb3d1-9f65-4810-884b-f0072a65193d_1600w.webp"
          alt="Vision & Public Safety AI"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent"></div>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold border-gradient text-blue-300 bg-blue-500/10 rounded-full px-3 py-1.5 backdrop-blur-md" style={{ borderRadius: '9999px' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Vision &amp; Public Safety AI
          </span>
        </div>
        <div className="relative z-10 flex items-center justify-between pt-20">
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

      {/* 2. Stat Card */}
      <div
        className="rounded-3xl border-gradient md:col-span-3 lg:col-span-3 p-6 backdrop-blur-xl flex flex-col justify-between [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate"
        style={cardStyle}
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400">Pillar Capacity</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/15 text-blue-400 px-2.5 py-0.5 text-xs font-medium border-gradient" style={{ borderRadius: '9999px' }}>
              Active
            </span>
          </div>
          <p className="text-5xl font-extrabold tracking-tight text-white">7+</p>
          <p className="mt-2 text-sm text-neutral-300 font-medium">Sovereign Products</p>
        </div>
        <div className="mt-6 flex items-center gap-2 text-blue-400">
          <Icon icon="solar:graph-up-bold-duotone" width="18" height="18" />
          <span className="text-xs font-medium">99.9% High Assurance Stack</span>
        </div>
      </div>

      {/* 3. Code Card */}
      <article
        className="overflow-hidden border-gradient rounded-3xl md:col-span-3 lg:col-span-3 p-6 backdrop-blur-xl flex flex-col justify-between [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate"
        style={cardStyle}
      >
        <div className="backdrop-blur-[2px] bg-black/40 border-gradient rounded-2xl mb-4">
          <div className="px-3.5 py-2.5 border-b border-white/10 flex items-center gap-2">
            <Icon icon="solar:code-bold-duotone" width="14" height="14" style={{ color: 'rgba(255,255,255,0.7)' }} />
            <span className="text-[11px] font-medium text-white/80">dpdp-shield.config.ts</span>
            <span className="ml-auto text-[10px] text-emerald-400">verified</span>
          </div>
          <pre className="text-[10px] leading-relaxed text-white/80 p-3 font-mono overflow-x-auto">
{`export const vyntiq = {
  jurisdiction: "IN-DPDP-2023",
  airGapped: true,
  auditLog: "cryptographic"
}`}
          </pre>
        </div>
        <div>
          <h3 className="text-base font-semibold tracking-tight text-white/95">Compliance &amp; Governance</h3>
          <p className="mt-1 text-xs text-neutral-300">DPDP Shield &amp; CLM automated governance.</p>
        </div>
      </article>

      {/* 4. Chart Card */}
      <div
        className="rounded-3xl border-gradient p-6 md:col-span-3 lg:col-span-3 backdrop-blur-xl flex flex-col justify-between [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate"
        style={cardStyle}
      >
        <div>
          <h3 className="text-base font-semibold tracking-tight text-white">Video Analytics SLA</h3>
          <p className="mt-1 text-xs text-neutral-400">Real-Time Stream Feeds</p>
          <div className="mt-4 rounded-xl bg-black/40 p-3 border-gradient">
            <div className="relative w-full h-24">
              <canvas ref={chartRef} height="96"></canvas>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            <span className="text-sm font-semibold tracking-tight">98.4%</span>
          </div>
          <span className="text-xs text-neutral-400 font-medium">Air-gapped SLA met</span>
        </div>
      </div>

      {/* 5. Global Card */}
      <div
        className="relative overflow-hidden rounded-3xl border-gradient md:col-span-3 lg:col-span-3 p-6 backdrop-blur-xl flex flex-col justify-between [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate"
        style={cardStyle}
      >
        <div>
          <p className="text-3xl font-extrabold tracking-tight text-white">100%</p>
          <p className="mt-1 text-xs text-neutral-400">Sovereign Infrastructure</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center rounded-full bg-blue-400/15 text-blue-300 px-2 py-0.5 text-[11px] font-medium border-gradient" style={{ borderRadius: '9999px' }}>Air-Gapped</span>
            <span className="inline-flex items-center rounded-full bg-blue-400/15 text-blue-300 px-2 py-0.5 text-[11px] font-medium border-gradient" style={{ borderRadius: '9999px' }}>On-Premise</span>
            <span className="inline-flex items-center rounded-full bg-blue-400/15 text-blue-300 px-2 py-0.5 text-[11px] font-medium border-gradient" style={{ borderRadius: '9999px' }}>Gov Hybrid</span>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border-gradient">
          <img className="h-28 w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d25a1767-0ea8-4aac-b981-6afd67dc79a6_800w.webp" alt="Globe" />
        </div>
      </div>

      {/* 6. AI Card */}
      <article
        className="relative overflow-hidden hover:bg-white/[0.08] transition-all group rounded-3xl border-gradient md:col-span-3 lg:col-span-3 p-6 backdrop-blur-xl flex flex-col justify-between [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] animate-on-scroll animate"
        style={cardStyle}
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-base font-semibold tracking-tight text-white">Technology Highlights</h4>
          <span className="inline-flex items-center gap-1 text-[11px] border-gradient text-slate-300 bg-white/5 rounded-full px-2.5 py-0.5" style={{ borderRadius: '9999px' }}>
            Core Stack
          </span>
        </div>
        <div className="bg-black/40 border-gradient rounded-xl p-3 backdrop-blur">
          <div className="flex gap-1 mb-2 items-center">
            <span className="h-2 w-2 rounded-full bg-rose-400/80"></span>
            <span className="h-2 w-2 rounded-full bg-amber-400/80"></span>
            <span className="h-2 w-2 rounded-full bg-blue-400/80"></span>
          </div>
          <pre className="text-[10px] leading-tight text-slate-300 font-mono">
{`# Vyntiq Pillars
- Sovereign Computer Vision
- Sub-Second Video Forensics
- DPDP Act 2023 Shield`}
          </pre>
        </div>
      </article>

      {/* 7. Orbit Card */}
      <section
        className="group relative overflow-hidden border-gradient rounded-3xl md:col-span-3 lg:col-span-3 p-6 backdrop-blur-xl flex flex-col justify-between [animation:fadeSlideIn_0.8s_ease-out_0.9s_both] animate-on-scroll animate"
        style={cardStyle}
      >
        <div className="relative h-32 overflow-hidden flex items-center justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="absolute left-1/2 top-1/2 h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: '.6s' }}></div>
          </div>
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-gradient bg-neutral-900/80 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 p-2" style={{ borderRadius: '9999px' }}>
            <img src="/assets/logo-emblem.png" alt="Vyntiq Core" className="h-9 w-auto object-contain drop-shadow-[0_4px_16px_rgba(59,130,246,0.4)]" />
          </div>
        </div>
        <div className="pt-2">
          <h3 className="text-base font-semibold tracking-tight text-white">Enterprise Operations</h3>
          <p className="text-xs text-neutral-400 mt-1">HRMS Suite &amp; sovereign workflows.</p>
        </div>
      </section>

      {/* 8. Testimonial Card */}
      <div
        className="flex flex-col justify-between rounded-3xl border-gradient md:col-span-6 lg:col-span-6 p-6 backdrop-blur-xl [animation:fadeSlideIn_0.8s_ease-out_1s_both] animate-on-scroll animate"
        style={cardStyle}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67ea0bb9-359c-4e9a-a90d-b44f079e8cf7_320w.webp" alt="Defense Lead" className="h-9 w-9 rounded-full object-cover" />
            <div>
              <p className="text-xs font-semibold text-white">Defense &amp; Gov Tech Advisor</p>
              <p className="text-[10px] text-white/60">Sovereign Operations</p>
            </div>
          </div>
          <span className="text-[11px] font-medium text-blue-400 border border-blue-400/30 bg-blue-500/10 px-2.5 py-0.5 rounded-full" style={{ borderRadius: '9999px' }}>
            Verified Endorsement
          </span>
        </div>
        <p className="text-sm font-medium text-white/90 leading-relaxed mb-4">
          "Vyntiq delivers complete data sovereignty, zero cloud leakage, and mission-critical reliability across distributed high-assurance environments."
        </p>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-black/30 border-gradient rounded-lg p-2">
            <p className="text-white font-semibold">100%</p>
            <p className="text-[10px] text-neutral-400">On-Premise</p>
          </div>
          <div className="bg-black/30 border-gradient rounded-lg p-2">
            <p className="text-emerald-400 font-semibold">Zero</p>
            <p className="text-[10px] text-neutral-400">Cloud Leak</p>
          </div>
          <div className="bg-black/30 border-gradient rounded-lg p-2">
            <p className="text-blue-400 font-semibold">DPDP 2023</p>
            <p className="text-[10px] text-neutral-400">Certified</p>
          </div>
        </div>
      </div>
    </div>
  );
}
