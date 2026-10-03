import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function WhatsAppCTA({
  phoneNumber = "919999999999",
  defaultMessage = "Hello Vyntiq Team, I would like to explore your sovereign AI, Video Analytics, and DPDP compliance solutions."
}) {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip / Prompt bubble */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full border-gradient bg-neutral-900/90 backdrop-blur-xl text-xs font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-90 translate-x-1'
        }`}
        style={{ borderRadius: '9999px' }}
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Chat on WhatsApp</span>
      </a>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vyntiq on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ borderRadius: '9999px' }}
      >
        {/* Ambient Ring Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }}></span>

        {/* WhatsApp Icon */}
        <Icon icon="logos:whatsapp-icon" width="30" height="30" className="relative z-10 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}
