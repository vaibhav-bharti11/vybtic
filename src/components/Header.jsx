import React from 'react';
import { Icon } from '@iconify/react';

export default function Header() {
  return (
    <header className="relative [animation:fadeSlideIn_0.8s_ease-out_0s_both] animate-on-scroll z-10 animate">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3.5 group">
          <img
            src="/assets/logo-emblem.png"
            alt="Vyntic Emblem"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_4px_16px_rgba(59,130,246,0.35)]"
          />
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2 leading-none">
              VYNTIC
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-semibold mt-1">
              Vision · Intelligence · Quality
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a className="hover:text-white transition-colors font-medium" href="#products">Products</a>
          <a className="hover:text-white transition-colors font-medium" href="#about">About</a>
          <a className="hover:text-white transition-colors font-medium" href="#trust">Trust</a>
          <a className="hover:text-white transition-colors font-medium" href="#partners">Partners</a>
          <a className="hover:text-white transition-colors font-medium" href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-full border-gradient bg-white/5 px-3 py-1.5" style={{ borderRadius: '9999px' }}>
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            <span className="text-xs text-neutral-300 font-medium">DPDP Certified</span>
          </div>
          <a
            href="#partners"
            className="inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 backdrop-blur-xl px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-all hover:-translate-y-0.5"
            style={{ borderRadius: '9999px' }}
          >
            Partner With Us
            <Icon icon="solar:arrow-right-linear" width="16" height="16" />
          </a>
        </div>
      </nav>
    </header>
  );
}
