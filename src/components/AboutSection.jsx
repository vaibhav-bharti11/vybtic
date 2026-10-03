import React from 'react';
import { Icon } from '@iconify/react';
import { aboutData } from '../data/aboutData';
import { ShieldCheck, Target, ArrowRight, CheckCircle2, UserCheck, Sparkles, Layers, Cpu } from 'lucide-react';

export default function AboutSection({
  onKnowMoreClick,
  onMeetLeadershipClick,
  onPartnerClick,
  onContactClick
}) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-28 relative">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl"></div>

      <div
        className="rounded-3xl border-gradient p-6 sm:p-10 backdrop-blur-xl relative"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.02) 50%,rgba(255,255,255,0.04) 100%)',
          borderRadius: '24px'
        }}
      >
        {/* Top Header */}
        <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
          <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-blue-400 mb-4">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>
              ABOUT VYNTIQ &amp; LEADERSHIP
            </span>
            <span>(02)</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl text-white tracking-[-0.03em]">
                Engineered for absolute sovereignty.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
                We build sovereign computer vision and statutory DPDP compliance platforms that run 100% on-premise with zero data custody risk.
              </p>
            </div>

            {/* CTA Button directly to dedicated About Page */}
            <div className="flex items-center gap-3 self-start lg:self-auto">
              <button
                type="button"
                onClick={onKnowMoreClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 shadow-[0_4px_16px_rgba(59,130,246,0.3)] hover:opacity-90 hover:-translate-y-0.5 transition-all cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                <span>Know More About Vyntiq</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Proof Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-300 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight mb-2">
                100% Air-Gapped Operation
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Inference pipelines execute entirely on bare-metal servers or local edge devices with zero external telemetry or cloud leakage.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-emerald-400 font-medium">
              Zero External Network Calls
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-300 mb-4">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight mb-2">
                Sub-Second Forensic Indexing
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Search hours of surveillance streams across thousands of connected local cameras for faces, attributes, or vehicles in under one second.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-blue-400 font-medium">
              Real-Time Vector Acceleration
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-300 mb-4">
                <Icon icon="solar:lock-keyhole-bold-duotone" width="20" height="20" />
              </div>
              <h3 className="text-base font-bold text-white tracking-tight mb-2">
                DPDP Act 2023 Shield
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Automated consent management, Data Principal Request processing, and tamper-evident audit logs designed for statutory compliance.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-purple-400 font-medium">
              Statutory Protection Engine
            </div>
          </div>
        </div>

        {/* Founders Spotlight Cards */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Founders &amp; Leadership
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Executive and technical leadership with deep enterprise and defense systems experience.
              </p>
            </div>
            <button
              type="button"
              onClick={onMeetLeadershipClick || onKnowMoreClick}
              className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View Full Profiles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {aboutData.leadership.map((leader, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5 sm:p-6 border-gradient flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-cover ring-2 ring-blue-400/30 shadow-lg shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xl font-bold text-white tracking-tight">{leader.name}</h4>
                      <p className="text-xs font-semibold text-blue-400 mt-0.5">{leader.role}</p>
                      <p className="text-xs text-neutral-300 mt-0.5">{leader.subtitle}</p>
                      <span className="inline-flex items-center gap-1.5 mt-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-2.5 py-0.5 text-[10px] font-medium text-blue-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                        {leader.tagline}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                    {leader.bio}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span className="italic truncate max-w-[260px] sm:max-w-none">"{leader.philosophy}"</span>
                  <button
                    type="button"
                    onClick={onMeetLeadershipClick || onKnowMoreClick}
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 ml-2 shrink-0 cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
