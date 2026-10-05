import React from 'react';
import { Linkedin } from 'lucide-react';
import { externalLinks } from '../data/siteContent';

export default function LinkedInCTA() {
  if (!externalLinks.linkedin) return null;

  return (
    <a
      href={externalLinks.linkedin}
      target="_blank"
      rel="noreferrer"
      aria-label="Vyntiq on LinkedIn"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2F6FEB] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#3978F0]"
    >
      <Linkedin className="h-5 w-5" />
    </a>
  );
}
