import React from 'react';
import { Icon } from '@iconify/react';

export default function Footer({ onPartnerClick, onContactClick }) {
  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 mb-16">
      <div
        className="rounded-3xl border-gradient p-8 sm:p-12 backdrop-blur"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3.5 mb-4 group">
              <img
                src="/assets/logo-emblem.png"
                alt="Vyntiq Emblem"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(59,130,246,0.35)]"
              />
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2 leading-none">
                  VYNTIQ
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-neutral-400 font-semibold mt-1">
                  Vision · Intelligence · Quality
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xs leading-relaxed">
              Intelligence you can trust enough to build on. Sovereign AI, computer vision, and compliance for enterprise &amp; government.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                100% Data Sovereignty
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Sovereign Products</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li><a href="#products" className="hover:text-white transition-colors">Cop AI &amp; Video Forensics</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Video Prevention &amp; Threat Detection</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Video Analytics &amp; Spatial Flow</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">DPDP Shield (Act 2023)</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">CLM &amp; HRMS Governance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company &amp; Trust</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Vyntiq</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Founders &amp; Leadership</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Vision, Mission &amp; Roadmaps</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Industry Capabilities</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Company Journey &amp; Milestones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Partners &amp; Market</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <button type="button" onClick={onPartnerClick} className="hover:text-white transition-colors text-left">
                  OEM Enablement Portal
                </button>
              </li>
              <li>
                <button type="button" onClick={onPartnerClick} className="hover:text-white transition-colors text-left">
                  Apply for OEM Empanelment
                </button>
              </li>
              <li>
                <button type="button" onClick={onPartnerClick} className="hover:text-white transition-colors text-left">
                  Track Empanelment Status
                </button>
              </li>
              <li>
                <button type="button" onClick={onContactClick} className="hover:text-white transition-colors text-left">
                  Contact &amp; Gov Tender Desk
                </button>
              </li>
              <li><span className="text-neutral-500 text-xs">Privacy Policy (DPDP Act 2023)</span></li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">© 2026 Vyntiq Technologies Private Limited. All rights reserved. Sovereign Intelligence Architectures.</p>
          <div className="flex items-center gap-5">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors" aria-label="Twitter">
              <Icon icon="solar:twitter-bold-duotone" width="20" height="20" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors" aria-label="GitHub">
              <Icon icon="solar:code-bold-duotone" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
