import React from 'react';
import { Icon } from '@iconify/react';
import { X, Check, ShieldCheck, Cpu, ArrowRight, Layers, Target, Sparkles, Building2, Server } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, onRequestDemo }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl my-auto animate-fade-in max-h-[90vh] overflow-y-auto rounded-3xl ring-1 ring-white/15 bg-neutral-900 shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
        {/* Top Header Banner */}
        <div className="relative overflow-hidden p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-blue-950/40 via-neutral-900 to-neutral-900">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/70 hover:text-white ring-1 ring-white/10 transition-colors"
            aria-label="Close product details"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-400/25 px-3 py-1 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              {product.badge}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              Status: <span className="text-emerald-400">{product.status}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 shadow-inner">
              <Icon icon={product.icon} width="28" height="28" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                {product.name}
              </h2>
              <p className="text-sm sm:text-base text-blue-200/80 mt-1 font-medium">
                {product.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 text-neutral-200">
          {/* Overview & Problem Solved */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span>What It Does</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="rounded-2xl bg-rose-500/5 ring-1 ring-rose-500/20 p-5 border-gradient">
              <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm mb-2">
                <Target className="h-4 w-4 text-rose-400" />
                <span>Business Problem It Solves</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {product.problemSolved}
              </p>
            </div>
          </div>

          {/* Key Features & Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm uppercase tracking-wider font-semibold text-neutral-400 mb-3 flex items-center gap-2">
                <Layers className="h-4 w-4 text-blue-400" />
                Key Product Features
              </h4>
              <ul className="space-y-2.5">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 mt-0.5 ring-1 ring-blue-400/30">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider font-semibold text-neutral-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-400" />
                Key Differentiators
              </h4>
              <ul className="space-y-2.5">
                {product.differentiators.map((diff, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 mt-0.5 ring-1 ring-emerald-400/30">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Target Customers & Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <h4 className="text-sm uppercase tracking-wider font-semibold text-neutral-400 mb-3 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-blue-400" />
                Target Customers &amp; Industries
              </h4>
              <ul className="space-y-2">
                {product.targetCustomers.map((cust, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    <span>{cust}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <h4 className="text-sm uppercase tracking-wider font-semibold text-neutral-400 mb-3 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-blue-400" />
                Primary Use Cases
              </h4>
              <ul className="space-y-2">
                {product.useCases.map((uc, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits & Deployment Model */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-950/40 via-neutral-900 to-neutral-900 ring-1 ring-blue-500/20 p-5 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Quantifiable Value &amp; Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.benefits.map((ben, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300 bg-black/30 p-2.5 rounded-xl border border-white/5">
                    <Check className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <Server className="h-4 w-4 text-blue-400 shrink-0" />
                <span>
                  <strong className="text-white">Deployment Model:</strong> {product.deploymentModel}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-400 text-center sm:text-left">
              Need technical specs, integration guides, or an on-premise pilot?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onRequestDemo) onRequestDemo(product.name);
                }}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 text-black px-6 py-2.5 text-xs font-semibold shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:opacity-90 transition-opacity cursor-pointer"
                style={{ borderRadius: '9999px' }}
              >
                Request Product Demo
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
