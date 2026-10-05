import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Target,
  Award,
  Compass,
  Eye,
  Sparkles,
  Building2,
  CheckCircle2,
  ChevronRight,
  UserCheck,
  Layers,
  Cpu,
  Lock,
  Terminal,
  Server,
  Database,
  Network,
  FileText
} from 'lucide-react';
import { aboutData } from '../data/aboutData';

export default function AboutVyntiqPage({
  onBack,
  onRequestDemo,
  onPartnerClick,
  onContactClick,
  initialTab = 'story'
}) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen py-6 sm:py-10 animate-fade-in text-white relative">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-[550px] w-[550px] rounded-full bg-blue-600/10 blur-[140px]"></div>
      <div className="pointer-events-none absolute top-1/3 right-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[140px]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Breadcrumb & Back Button */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/15 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white transition-all hover:-translate-x-1 cursor-pointer"
            style={{ borderRadius: '9999px' }}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400">
            <span>Corporate</span>
            <span>/</span>
            <span className="text-blue-400 font-medium">About Vyntiq</span>
            <span>/</span>
            <span className="text-white font-semibold">Mission &amp; Leadership</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative rounded-3xl border-gradient p-6 sm:p-12 bg-neutral-900/60 ring-1 ring-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/25 px-3.5 py-1 text-xs font-semibold text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>Vision · Intelligence · Quality</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Software built for absolute sovereignty and zero data custody risk.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
              {aboutData.company.overview}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 items-center">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 text-black px-7 py-3 text-sm font-semibold shadow-[0_4px_24px_rgba(59,130,246,0.35)] hover:opacity-90 hover:-translate-y-0.5 transition-all cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                <span>Schedule Executive Briefing</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={onPartnerClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/15 px-6 py-3 text-sm font-medium text-white transition-all cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                <Cpu className="h-4 w-4 text-blue-400" />
                <span>OEM &amp; Hardware Empanelment</span>
              </button>
            </div>
          </div>

          {/* Quick Pillar Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Deployment</span>
              <strong className="text-sm sm:text-base text-white font-semibold">100% On-Prem / Edge</strong>
            </div>
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Compliance</span>
              <strong className="text-sm sm:text-base text-emerald-400 font-semibold">DPDP Act 2023</strong>
            </div>
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Video Search</span>
              <strong className="text-sm sm:text-base text-blue-400 font-semibold">Sub-Second Indexing</strong>
            </div>
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Integration</span>
              <strong className="text-sm sm:text-base text-purple-400 font-semibold">C++/Rust OEM SDKs</strong>
            </div>
          </div>
        </section>

        {/* Section 2: Why Vyntiq Was Built & Market Reality */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-10 border-gradient flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-3">
                <Target className="h-4 w-4" />
                <span>Founding Principle</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {aboutData.whyEstablished.title}
              </h2>
              <p className="text-xs text-blue-300/80 font-medium mt-1 mb-4">
                {aboutData.whyEstablished.subtitle}
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {aboutData.whyEstablished.content}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>Zero Off-Premise Telemetry</span>
              </div>
              <div className="flex items-center gap-1.5 text-blue-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>Verifiable Local Data Custody</span>
              </div>
            </div>
          </div>

          {/* 4 Problem / Opportunity Points */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.problemOpportunity.points.map((pt, idx) => (
              <div key={idx} className="rounded-2xl bg-black/40 border border-white/10 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-neutral-300">
                      0{idx + 1}
                    </span>
                    <ShieldCheck className="h-4 w-4 text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-tight mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 4 Architectural Differentiators */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Architectural Advantages
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Engineering decisions tailored for high-security, low-latency enterprise and government environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutData.differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 border-gradient hover:bg-white/[0.08] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-11 w-11 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-300 mb-4">
                    <Icon icon={diff.icon} width="22" height="22" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Founders & Executive Leadership */}
        <section id="leadership" className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <UserCheck className="h-4 w-4" />
                <span>Founders &amp; Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Led by practitioners with deep enterprise and systems experience.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
              Hands-on leadership directly involved in architectural planning, systems reliability, and enterprise execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {aboutData.leadership.map((leader, idx) => (
              <div
                key={idx}
                className="lg:col-span-6 rounded-3xl bg-neutral-900/70 ring-1 ring-white/15 p-6 sm:p-8 flex flex-col justify-between border-gradient shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              >
                <div>
                  {/* Photo + Identity Header */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="relative shrink-0">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover ring-2 ring-blue-400/40 shadow-xl"
                      />
                      <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-blue-500 border-2 border-neutral-900 flex items-center justify-center text-white">
                        <CheckCircle2 className="h-3 w-3" />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {leader.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-blue-400 mt-0.5">
                        {leader.role}
                      </p>
                      <p className="text-xs text-neutral-300 font-medium mt-0.5">
                        {leader.subtitle}
                      </p>
                      <div className="mt-2.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 px-2.5 py-0.5 text-[11px] font-medium text-blue-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                          {leader.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                        Professional Background &amp; Focus
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {leader.bio}
                      </p>
                    </div>

                    {/* 4 Focus Areas */}
                    <div>
                      <h4 className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mb-2.5 flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-blue-400" />
                        Key Areas of Focus
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {leader.focusAreas.map((area, aIdx) => (
                          <div key={aIdx} className="p-3 rounded-xl bg-black/40 border border-white/10 flex flex-col justify-between">
                            <span className="text-xs font-bold text-white tracking-tight block">
                              {area.title}
                            </span>
                            <span className="text-[11px] text-neutral-400 mt-1 block leading-normal">
                              {area.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Guiding Creed */}
                    <div className="rounded-2xl bg-gradient-to-r from-blue-950/40 to-black/40 border border-blue-400/20 p-4">
                      <h4 className="text-[11px] uppercase tracking-wider font-semibold text-blue-300 mb-1 flex items-center gap-1.5">
                        <Compass className="h-3.5 w-3.5" />
                        Operational Approach
                      </h4>
                      <p className="text-xs text-neutral-200 italic leading-relaxed">
                        "{leader.philosophy}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Vyntiq Technologies</span>
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>Request Leadership Meeting</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Industry Vertical Capabilities */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Sector Deployments
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Engineered for the operational realities of regulated sectors and public institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aboutData.industryCapabilities.map((ind, idx) => (
              <div key={idx} className="rounded-2xl bg-black/40 border border-white/10 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-white">{ind.sector}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/25">
                      {ind.badge}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Engineering Journey & Roadmap */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineering Milestones &amp; Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Structured progress from foundational AI research to enterprise deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(aboutData.milestones || []).map((m, idx) => (
              <div key={idx} className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-extrabold text-blue-400">{m.year}</span>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-400 bg-white/10 px-2 py-0.5 rounded">
                      {m.quarter}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{m.title}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Vision & Mission Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-neutral-900/60 ring-1 ring-blue-500/20 p-6 sm:p-8 border-gradient flex flex-col justify-between">
            <div>
              <div className="h-11 w-11 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-5">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                {aboutData.visionMission.vision.title}
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed">
                "{aboutData.visionMission.vision.statement}"
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-blue-300 font-medium">
              High-Assurance Sovereign Platform
            </div>
          </div>

          <div className="rounded-3xl bg-neutral-900/60 ring-1 ring-blue-500/20 p-6 sm:p-8 border-gradient flex flex-col justify-between">
            <div>
              <div className="h-11 w-11 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-5">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                {aboutData.visionMission.mission.title}
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed">
                "{aboutData.visionMission.mission.statement}"
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-emerald-300 font-medium">
              Data Sovereignty · Sub-Second Latency · Deterministic Execution
            </div>
          </div>
        </section>

        {/* Section 8: Bottom Call to Action */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-950/50 via-neutral-900 to-neutral-900 ring-1 ring-blue-500/20 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Ready to evaluate sovereign software for your infrastructure?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300">
              Request a technical architecture review, pilot deployment, or OEM integration kit.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onContactClick}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 text-black text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
              style={{ borderRadius: '9999px' }}
            >
              Contact Engineering Team
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
