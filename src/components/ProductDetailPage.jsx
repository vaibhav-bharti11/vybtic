import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { productsData } from '../data/productsData';

function DetailList({ title, items }) {
  if (!items.length) return null;

  return (
    <section className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8">
      <h2 className="mb-5 text-xl font-semibold tracking-tight text-white">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-neutral-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#72A0FF]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProductDetailPage({ product, onBack, onSelectProduct, onRequestDemo }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product?.id]);

  if (!product) return null;

  const hasApprovedOverview = product.description !== 'Product overview pending approved copy.';
  const hasFeatures = product.features.length > 0;
  const otherProducts = productsData.filter((candidate) => candidate.id !== product.id);

  return (
    <div className="min-h-screen py-8 text-white sm:py-12">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-neutral-300 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to products
        </button>

        <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#2F6FEB]/30 bg-[#2F6FEB]/10 px-3 py-1 text-xs font-semibold text-[#8BB0FF]">
                {product.badge}
              </span>
              <span className="text-xs text-neutral-400">{product.status}</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#2F6FEB]/30 bg-[#2F6FEB]/15 text-[#8BB0FF]">
                <Icon icon={product.icon} width="30" height="30" />
              </div>
              <div>
                <h1 className="text-4xl tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-2 text-sm font-medium text-[#8BB0FF] sm:text-base">{product.tagline}</p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">{product.description}</p>

            {hasApprovedOverview && (
              <button
                type="button"
                onClick={() => onRequestDemo(product.name)}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2F6FEB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3978F0]"
              >
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <img
              src={product.image}
              alt={`${product.name} product visual`}
              className="aspect-video h-full w-full rounded-[20px] object-cover"
            />
          </div>
        </section>

        {!hasApprovedOverview ? (
          <section className="rounded-3xl border border-[#2F6FEB]/25 bg-[#2F6FEB]/10 p-7 sm:p-9">
            <p className="text-sm font-semibold text-[#A8C2FF]">Product overview pending approved copy.</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
              Approved product details will be added once supplied.
            </p>
            <button
              type="button"
              onClick={() => onRequestDemo(product.name)}
              className="mt-6 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Contact Vyntiq
            </button>
          </section>
        ) : (
          <>
            {product.problemSolved && (
              <section className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">The problem</p>
                <p className="max-w-4xl text-base leading-8 text-neutral-200">{product.problemSolved}</p>
              </section>
            )}

            <div className="grid gap-6 lg:grid-cols-2">
              {hasFeatures && <DetailList title="Key product features" items={product.features} />}
              <DetailList title="Product differentiators" items={product.differentiators} />
              <DetailList title="Who it is for" items={product.targetCustomers} />
              <DetailList title="Use cases" items={product.useCases} />
              <DetailList title="Benefits" items={product.benefits} />
            </div>

            <section className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">Deployment</p>
              <p className="mt-3 text-sm leading-7 text-neutral-300">{product.deploymentModel}</p>
            </section>
          </>
        )}

        <section className="border-t border-white/10 pt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">More from Vyntiq</p>
              <h2 className="mt-2 text-2xl tracking-tight text-white">Explore other products</h2>
            </div>
            <button type="button" onClick={onBack} className="text-xs font-semibold text-[#8BB0FF] hover:text-[#A8C2FF]">
              View all products
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProducts.slice(0, 3).map((other) => (
              <button
                key={other.id}
                type="button"
                onClick={() => onSelectProduct(other)}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-[#2F6FEB]/40 hover:bg-white/10"
              >
                <span>
                  <span className="block text-sm font-semibold text-white">{other.name}</span>
                  <span className="mt-1 block text-xs text-neutral-400">{other.tagline}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#72A0FF]" />
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
