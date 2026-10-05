import React from 'react';
import { Icon } from '@iconify/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { productsData } from '../data/productsData';

export default function ProductsSection({ onSelectProduct, onRequestDemo }) {
  return (
    <section id="products" className="relative mx-auto mt-28 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-16 left-1/4 h-80 w-80 rounded-full bg-[#2F6FEB]/10 blur-3xl" />

      <div className="animate-on-scroll border-b border-white/10 pb-8">
        <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">
          <span className="h-2 w-2 rounded-full bg-[#2F6FEB]" />
          Vyntiq products
        </p>
        <h2 className="max-w-4xl text-3xl tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
          Products built around meaningful problems.
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-300 sm:text-base">
          Vyntiq brings together AI, data, software engineering and deep technology to create products that are intelligent by design and practical by purpose.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productsData.map((product, index) => {
          const hasApprovedOverview = product.description !== 'Product overview pending approved copy.';

          return (
            <article
              key={product.id}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-neutral-900/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#2F6FEB]/40 hover:bg-white/[0.06] sm:p-7"
              style={{ animationDelay: `${0.1 * (index % 6)}s` }}
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2F6FEB]/30 bg-[#2F6FEB]/15 text-[#72A0FF] transition-transform group-hover:scale-105">
                    <Icon icon={product.icon} width="24" height="24" />
                  </div>
                  <span className="rounded-full border border-[#2F6FEB]/25 bg-[#2F6FEB]/10 px-3 py-1 text-[11px] font-medium text-[#8BB0FF]">
                    {product.badge}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#A8C2FF] sm:text-2xl">
                  {product.name}
                </h3>
                <p className="mb-3 mt-2 text-xs font-medium text-[#8BB0FF]">{product.tagline}</p>
                <p className="mb-5 text-xs leading-6 text-neutral-300 sm:text-sm">{product.description}</p>

                <div className="mb-6 space-y-2 border-t border-white/10 pt-4">
                  {product.features.length ? (
                    product.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F6FEB]" />
                        <span>{feature}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs leading-5 text-neutral-400">
                      Approved product details will be added once supplied.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => onSelectProduct(product)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition hover:text-[#8BB0FF]"
                >
                  <span>Explore product</span>
                  <ChevronRight className="h-4 w-4" />
                </button>

                {hasApprovedOverview && (
                  <button
                    type="button"
                    onClick={() => onRequestDemo(product.name)}
                    className="inline-flex items-center gap-1 rounded-full bg-[#2F6FEB] px-3.5 py-1.5 text-[11px] font-semibold text-white transition hover:bg-[#3978F0]"
                  >
                    <span>Request a demo</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
