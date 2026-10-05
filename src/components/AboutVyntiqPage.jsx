import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { aboutData } from '../data/aboutData';

export default function AboutVyntiqPage({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen py-8 text-white sm:py-12">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-neutral-300 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </button>

        <section id="what-is-vyntiq" className="rounded-3xl border border-white/10 bg-neutral-900/60 p-7 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">Vision · Intelligence · Quality</p>
          <h1 className="mt-5 max-w-5xl text-4xl tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
            An AI-first technology company building products that matter.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-neutral-200 sm:text-lg">
            {aboutData.company.overview}
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-neutral-300 sm:text-base">
            {aboutData.company.detail}
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {aboutData.principles.map((principle, index) => (
            <article key={principle.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-xs font-semibold text-[#72A0FF]">0{index + 1}</span>
              <h2 className="mt-5 text-2xl tracking-tight text-white">{principle.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-300">{principle.description}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article id="mission" className="rounded-3xl border border-[#2F6FEB]/25 bg-[#2F6FEB]/10 p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8BB0FF]">Our mission</p>
            <h2 className="mt-4 text-2xl tracking-tight text-white sm:text-3xl">Products organizations can trust.</h2>
            <p className="mt-5 text-sm leading-7 text-neutral-200">{aboutData.visionMission.mission.statement}</p>
            <p className="mt-4 text-sm leading-7 text-neutral-300">{aboutData.visionMission.mission.detail}</p>
          </article>

          <article id="vision" className="rounded-3xl border border-white/10 bg-neutral-900/60 p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8BB0FF]">Our vision</p>
            <h2 className="mt-4 text-2xl tracking-tight text-white sm:text-3xl">Technology with lasting impact.</h2>
            <p className="mt-5 text-sm leading-7 text-neutral-200">{aboutData.visionMission.vision.statement}</p>
            <p className="mt-4 text-sm leading-7 text-neutral-300">{aboutData.visionMission.vision.detail}</p>
          </article>
        </section>

        <section id="leadership" className="pt-3">
          <div className="mb-7 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">Founders &amp; leadership</p>
            <h2 className="mt-3 text-3xl tracking-[-0.03em] text-white sm:text-5xl">Experience that stays close to product decisions.</h2>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {aboutData.leadership.map((leader) => (
              <article
                key={leader.name}
                className="grid h-full grid-rows-[auto_auto_1fr] rounded-3xl border border-white/10 bg-neutral-900/65 p-6 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <img
                    src={leader.image}
                    alt={`Portrait of ${leader.name}`}
                    className="h-24 w-24 shrink-0 rounded-2xl object-cover ring-1 ring-[#2F6FEB]/50 sm:h-28 sm:w-28"
                  />
                  <div className="pt-1">
                    <h3 className="text-2xl tracking-tight text-white sm:text-3xl">{leader.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#72A0FF]">{leader.role}</p>
                    <p className="mt-2 text-xs leading-5 text-neutral-400">{leader.subtitle}</p>
                  </div>
                </div>

                <p className="mt-6 border-y border-white/10 py-4 text-sm font-medium leading-6 text-[#A8C2FF]">
                  {leader.tagline}
                </p>

                <p className="pt-5 text-sm leading-7 text-neutral-300">{leader.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">Where we work</p>
            <h2 className="mt-3 text-3xl tracking-tight text-white sm:text-4xl">Products for complex, real-world environments.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {aboutData.industryCapabilities.map((industry) => (
              <article key={industry.sector} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#72A0FF]">{industry.badge}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{industry.sector}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-300">{industry.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
