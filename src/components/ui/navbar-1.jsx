import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navigationLabels } from '../../data/siteContent';

export default function Navbar1({
  onLogoClick,
  onAboutClick,
  onProductsClick,
  onPartnerClick,
  onRequestDemo,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const labels = new Set(navigationLabels);

  const navLinks = [
    { label: labels.has('About Vyntiq') ? 'About Vyntiq' : navigationLabels[0], onClick: onAboutClick },
    { label: labels.has('Products') ? 'Products' : navigationLabels[1], onClick: onProductsClick },
    { label: labels.has('Partners') ? 'Partners' : navigationLabels[2], onClick: onPartnerClick },
  ];

  const runMobileAction = (action) => {
    setIsOpen(false);
    action?.();
  };

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center px-4 py-4 sm:py-6">
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-between rounded-full bg-[#121518]/90 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur-xl sm:px-7">
        <button
          type="button"
          onClick={onLogoClick}
          className="flex min-w-0 items-center"
          aria-label="Return to the Vyntiq home page"
        >
          <img
            src="/assets/logo-full.png"
            alt="Vyntiq — Vision. Intelligence. Quality."
            className="h-11 w-auto max-w-[150px] object-contain sm:h-12 sm:max-w-[180px]"
          />
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={item.onClick}
              className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={onRequestDemo}
          className="hidden items-center justify-center gap-2 rounded-full bg-[#2F6FEB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3978f4] sm:inline-flex"
        >
          Request a Demo
          <ArrowRight className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10 md:hidden"
          aria-label="Open navigation"
          aria-expanded={isOpen}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#0c0f11]/98 px-6 pb-8 pt-6 backdrop-blur-2xl md:hidden">
          <div className="flex items-center justify-between">
            <img
              src="/assets/logo-full.png"
              alt="Vyntiq — Vision. Intelligence. Quality."
              className="h-12 w-auto max-w-[180px] object-contain"
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10"
              aria-label="Close navigation"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-14 flex flex-col gap-3" aria-label="Mobile navigation">
            {navLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => runMobileAction(item.onClick)}
                className="min-h-12 border-b border-white/10 py-3 text-left text-2xl font-normal text-neutral-100"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => runMobileAction(onRequestDemo)}
            className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2F6FEB] px-6 py-3 text-sm font-semibold text-white"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </header>
  );
}

export { Navbar1 };
