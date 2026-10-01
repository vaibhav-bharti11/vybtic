import React from 'react';
import { Icon } from '@iconify/react';

export default function TestimonialsMarquee() {
  const row1 = [
    {
      name: "Michael Chen",
      role: "Director, Homeland Security Project",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c9aa348-4474-47a8-8f1e-3fe52ac8d2b9_320w.webp",
      text: <>Vyntic Cop AI and Video Forensics give our teams <span className="text-blue-400">sub-second evidentiary search</span> across massive multi-camera feeds.</>
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Compliance Officer, FinCorp",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg",
      text: <>Deploying DPDP Shield ensured our enterprise achieved <span className="text-blue-400">complete statutory compliance</span> without disrupting operations.</>
    },
    {
      name: "David Kim",
      role: "VP of Security, Enterprise Global",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a90aa9b5-558b-479a-9570-1ceaa6005110_320w.jpg",
      text: <>Vyntic sovereign architecture runs completely <span className="text-blue-400">air-gapped with zero data leakage</span>, meeting our strictest defense standards.</>
    },
    {
      name: "Sarah Nguyen",
      role: "General Counsel, Telecom Infrastructure",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg",
      text: <>The automated Contract Lifecycle Management (CLM) reduced our <span className="text-blue-400">audit preparation time by 80%</span> with zero compliance risks.</>
    }
  ];

  const row2 = [
    {
      name: "Jessica Park",
      role: "Chief Operations Officer, Smart Cities",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eae5dceb-fa80-4934-b110-86decb2f64ac_320w.webp",
      text: <>Vyntic Video Prevention and crowd analytics delivered <span className="text-blue-400">real-time situational awareness</span> across high-density transportation hubs.</>
    },
    {
      name: "Alex Thompson",
      role: "HR Director, Defense Systems",
      avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d4bf47a-eb10-4503-a4f3-1940c4118868_320w.webp",
      text: <>Vyntic HRMS provides sovereign payroll and personnel management tailored <span className="text-blue-400">for high-security operations</span>.</>
    },
    {
      name: "Rachel Foster",
      role: "Executive Director, National Infrastructure",
      avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=96&h=96&fit=crop&crop=faces",
      text: <>Vyntic stands as our primary sovereign AI platform for <span className="text-blue-400">critical infrastructure protection</span> and governance.</>
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 relative">
      <div
        className="overflow-hidden rounded-3xl ring-white/10 ring-1 p-6 sm:p-8 relative backdrop-blur border-gradient"
        style={{
          background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
          borderRadius: '24px'
        }}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

        {/* Header */}
        <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-12 animate">
          <div className="mb-6">
            <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-blue-400">
              <span>TRUST &amp; GOVERNANCE</span>
              <span>(02)</span>
            </div>
            <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:items-center sm:justify-between mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-left mt-0 tracking-tighter">
              Institutional trust &amp; validation
            </h2>
            <p className="text-sm sm:text-base text-slate-300 text-left max-w-[42ch]">
              Verifiable high-assurance endorsements from enterprise leaders and government project teams.
            </p>
          </div>
        </div>

        {/* Marquee Testimonials */}
        <div
          className="relative overflow-hidden rounded-3xl ring-white/10 ring-1 border-gradient [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate"
          style={{
            background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)',
            borderRadius: '24px'
          }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>

          {/* Row 1 — left to right */}
          <div className="relative py-6 sm:py-8">
            <div className="flex gap-4 sm:gap-5 will-change-transform animate-marquee-ltr animate-[marquee-ltr_45s_linear_infinite]">
              {[...row1, ...row1].map((item, idx) => (
                <article
                  key={`r1-${idx}`}
                  className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border-gradient bg-white/5 ring-1 ring-white/10 p-5"
                  style={{ borderRadius: '16px' }}
                >
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="h-9 w-9 object-cover rounded-full ring-1 ring-white/10" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-white">{item.name}</span>
                        <Icon icon="solar:verified-check-bold" width="14" height="14" className="text-blue-400" />
                      </div>
                      <p className="text-xs text-neutral-400">{item.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-neutral-300 tracking-tight">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-white/10"></div>

          {/* Row 2 — right to left */}
          <div className="relative py-6 sm:py-8">
            <div className="flex gap-4 sm:gap-5 will-change-transform animate-marquee-rtl animate-[marquee-rtl_45s_linear_infinite]">
              {[...row2, ...row2].map((item, idx) => (
                <article
                  key={`r2-${idx}`}
                  className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border-gradient bg-white/5 ring-1 ring-white/10 p-5"
                  style={{ borderRadius: '16px' }}
                >
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="h-9 w-9 object-cover rounded-full ring-1 ring-white/10" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-white">{item.name}</span>
                        <Icon icon="solar:verified-check-bold" width="14" height="14" className="text-blue-400" />
                      </div>
                      <p className="text-xs text-neutral-400">{item.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-neutral-300 tracking-tight">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
