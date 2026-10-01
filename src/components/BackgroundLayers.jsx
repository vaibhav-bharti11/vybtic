import React, { useEffect } from 'react';

export default function BackgroundLayers() {
  useEffect(() => {
    const initUnicorn = () => {
      if (window.UnicornStudio && window.UnicornStudio.init) {
        try {
          window.UnicornStudio.init();
        } catch (e) {
          console.error("UnicornStudio init error:", e);
        }
      }
    };

    if (window.UnicornStudio) {
      initUnicorn();
    } else {
      const interval = setInterval(() => {
        if (window.UnicornStudio) {
          initUnicorn();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      {/* Background Aura */}
      <div
        className="aura-background-component top-0 w-full h-screen z-0 brightness-50 saturate-50 fixed blur-sm pointer-events-none"
        data-alpha-mask="80"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'
        }}
      >
        <div className="fixed inset-0 -z-10 bg-black">
          <div
            className="aura-background-component absolute inset-0 w-full h-full"
            data-alpha-mask="80"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%)',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: '100% 100%',
              maskSize: '100% 100%'
            }}
          >
            <div data-us-project="XxCmD31vVBmiINgvYCho" className="absolute inset-0 w-full h-full bg-neutral-950"></div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0v64" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"></rect>
          </svg>
        </div>
      </div>
    </>
  );
}
