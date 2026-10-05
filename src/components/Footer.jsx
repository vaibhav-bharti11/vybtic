import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { contactChannels, externalLinks } from '../data/siteContent';

export default function Footer({ onLogoClick, onAboutClick, onProductsClick, onPartnerClick, onRequestDemo }) {
  const navigation = [
    { label: 'About Vyntiq', action: onAboutClick },
    { label: 'Products', action: onProductsClick },
    { label: 'Partners', action: onPartnerClick },
    { label: 'Request a Demo', action: onRequestDemo },
  ];

  return (
    <footer className="mx-auto mb-12 mt-28 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-7 sm:p-10">
        <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-start">
          <div className="max-w-md">
            <button type="button" onClick={onLogoClick} aria-label="Return to the Vyntiq home page">
              <img
                src="/assets/logo-full.png"
                alt="Vyntiq — Vision. Intelligence. Quality."
                className="h-14 w-auto max-w-[200px] object-contain"
              />
            </button>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              An AI-first technology company building intelligent, high-quality products that solve meaningful real-world problems.
            </p>
          </div>

          <div className="flex flex-col gap-7 sm:flex-row sm:flex-wrap sm:items-start lg:justify-end">
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {navigation.map((item) => (
                <button key={item.label} type="button" onClick={item.action} className="text-left text-neutral-300 transition hover:text-white">
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="space-y-2 text-xs text-neutral-400">
              {[contactChannels.general, contactChannels.contact, contactChannels.sales].map((email) => (
                <a key={email} href={`mailto:${email}`} className="flex items-center gap-2 transition hover:text-white">
                  <Mail className="h-3.5 w-3.5 text-[#72A0FF]" />
                  {email}
                </a>
              ))}
              <span className="hidden">{contactChannels.general}{contactChannels.contact}{contactChannels.sales}</span>
            </div>

            {externalLinks.linkedin && (
              <a
                href={externalLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-300 transition hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-[#72A0FF]" />
                LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="mt-9 border-t border-white/10 pt-5">
          <p className="text-xs text-neutral-500">© 2026 Vyntiq Technologies Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
