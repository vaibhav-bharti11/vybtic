import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const opportunities = [
  'Technology and platform integrations',
  'Implementation and solution partnerships',
  'Joint product and market opportunities',
];

export default function PartnerSection({ onPartnerClick, onContactClick }) {
  return (
    <section id="partners" className="mx-auto mt-28 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-white/10 bg-neutral-900/60 p-7 sm:p-10 lg:grid-cols-[1.35fr_0.65fr] lg:p-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">Partners</p>
          <h2 className="mt-4 max-w-3xl text-3xl tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
            Build meaningful technology partnerships with Vyntiq.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
            We work with technology providers, implementation teams and organizations that can help bring dependable products into real operating environments.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onPartnerClick}
              className="inline-flex items-center gap-2 rounded-full bg-[#2F6FEB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3978F0]"
            >
              Start a partnership conversation
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onContactClick}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Vyntiq
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <p className="text-sm font-semibold text-white">Ways to work together</p>
          <ul className="mt-5 space-y-4">
            {opportunities.map((opportunity) => (
              <li key={opportunity} className="flex items-start gap-3 text-sm leading-6 text-neutral-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#72A0FF]" />
                {opportunity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
