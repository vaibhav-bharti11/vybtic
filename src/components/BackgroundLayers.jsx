import React, { useEffect, useState } from 'react';

export default function BackgroundLayers() {
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!reduceMotion) window.UnicornStudio?.init();
  }, [reduceMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#1B1F23]">
      {!reduceMotion && (
        <div
          data-us-project="XxCmD31vVBmiINgvYCho"
          className="absolute inset-0 h-full w-full bg-[#1B1F23] brightness-75 saturate-75"
        />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_10%,rgba(47,111,235,0.12),transparent_42%),linear-gradient(to_bottom,rgba(27,31,35,0.12),#090a0b_90%)]" />
    </div>
  );
}
