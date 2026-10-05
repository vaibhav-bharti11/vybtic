import React from 'react';
import { ArrowRight } from 'lucide-react';
import { aboutData } from '../data/aboutData';

export default function AboutSection({ onKnowMoreClick, onMeetLeadershipClick }) {
  return (
    <section id="about" className="relative mx-auto mt-28 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-[#2F6FEB]/10 blur-3xl" />
      <div className="rounded-3xl border border-white/10 bg-neutral-900/55 p-6 sm:p-10">
        <div className="border-b border-white/10 pb-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">About Vyntiq</p>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <h2 className="text-3xl tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
                Intelligent by design. Practical by purpose.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-300 sm:text-base">
                {aboutData.company.overview}
              </p>
            </div>
            <button
              type="button"
              onClick={onKnowMoreClick}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2F6FEB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3978F0]"
            >
              About Vyntiq
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {aboutData.principles.map((principle, index) => (
            <article key={principle.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="text-xs font-semibold text-[#72A0FF]">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{principle.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">{principle.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-9 border-t border-white/10 pt-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">Founders</p>
              <h3 className="mt-2 text-2xl tracking-tight text-white">Leadership close to the work.</h3>
            </div>
            <button
              type="button"
              onClick={onMeetLeadershipClick || onKnowMoreClick}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#8BB0FF] hover:text-[#A8C2FF]"
            >
              Meet the founders
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {aboutData.leadership.map((leader) => (
              <article key={leader.name} className="flex items-start gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 sm:p-6">
                <img
                  src={leader.image}
                  alt={`Portrait of ${leader.name}`}
                  className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-1 ring-[#2F6FEB]/40"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">{leader.name}</h4>
                  <p className="mt-1 text-xs font-semibold text-[#72A0FF]">{leader.role}</p>
                  <p className="mt-3 text-sm leading-6 text-neutral-300">{leader.tagline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
