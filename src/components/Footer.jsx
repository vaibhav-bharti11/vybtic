import React from 'react';
import { Icon } from '@iconify/react';

export default function Footer() {
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
                alt="Vyntic Emblem"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(59,130,246,0.35)]"
              />
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2 leading-none">
                  VYNTIC
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-neutral-400 font-semibold mt-1">
                  Vision · Intelligence · Quality
                </span>
              </div>
            </a>
            <p className="text-sm text-neutral-400 max-w-xs">
              Intelligence you can trust enough to build on. Sovereign AI, computer vision, and compliance for enterprise &amp; government.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product Families</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#products" className="hover:text-white transition-colors">Cop AI &amp; Video Forensics</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Video Analytics &amp; Prevention</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">DPDP Shield &amp; CLM</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">HRMS Suite</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company &amp; Trust</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Vyntic</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Vision &amp; Mission</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Founders &amp; Leadership</a></li>
              <li><a href="#trust" className="hover:text-white transition-colors">Trust &amp; Data Sovereignty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Partners &amp; Legal</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><a href="#partners" className="hover:text-white transition-colors">OEM &amp; Technology Partnerships</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Partner With Us</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy (DPDP 2023)</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Enterprise Terms</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact &amp; Enquiry</a></li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">© 2026 Vyntic. All rights reserved. Sovereign Intelligence Architectures.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Icon icon="solar:twitter-bold-duotone" width="20" height="20" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Icon icon="solar:github-bold-duotone" width="20" height="20" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Icon icon="solar:linkedin-bold-duotone" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
