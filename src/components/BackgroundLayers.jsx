import React, { useEffect, useState } from 'react';
import { externalLinks } from '../data/siteContent';

export default function BackgroundLayers() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const showVideo = externalLinks.heroVideo && !reduceMotion;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#1B1F23]">
      {showVideo && (
        <video className="h-full w-full object-cover opacity-25" autoPlay muted loop playsInline preload="metadata">
          <source src={externalLinks.heroVideo} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_10%,rgba(47,111,235,0.15),transparent_42%),linear-gradient(to_bottom,rgba(27,31,35,0.2),#090a0b_85%)]" />
    </div>
  );
}
