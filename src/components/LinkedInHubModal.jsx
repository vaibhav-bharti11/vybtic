import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { linkedInData } from '../data/linkedInData';
import {
  X,
  Copy,
  Check,
  Share2,
  Calendar,
  Sparkles,
  Building,
  Target,
  Layers,
  FileText,
  ExternalLink
} from 'lucide-react';

export default function LinkedInHubModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('posts'); // 'posts' | 'profile' | 'strategy'
  const [copiedId, setCopiedId] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-4xl my-auto animate-fade-in max-h-[90vh] overflow-y-auto rounded-3xl ring-1 ring-white/15 bg-neutral-900 shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
        {/* Header */}
        <div className="relative overflow-hidden p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-blue-950/50 via-neutral-900 to-neutral-900">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/70 hover:text-white ring-1 ring-white/10 transition-colors"
            aria-label="Close LinkedIn Hub"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <Icon icon="solar:linkedin-bold-duotone" width="16" height="16" />
            <span>VYNTIQ LINKEDIN LAUNCH &amp; MARKETING HUB</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            LinkedIn Launch Presence &amp; Campaign Toolkit
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
            Complete company profile setup, 1-click ready-to-publish launch campaigns, founder positioning posts, and product marketing copy.
          </p>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 mt-5 bg-black/40 p-1.5 rounded-full border border-white/10 w-fit">
            <button
              type="button"
              onClick={() => setActiveTab('posts')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'posts'
                  ? 'bg-gradient-to-r from-blue-400 to-blue-300 text-black shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Ready-to-Publish Posts ({linkedInData.launchPosts.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-gradient-to-r from-blue-400 to-blue-300 text-black shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Company Page Setup
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('strategy')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'strategy'
                  ? 'bg-gradient-to-r from-blue-400 to-blue-300 text-black shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              45-Day Launch Roadmap
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* TAB 1: POSTS LIBRARY */}
          {activeTab === 'posts' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-xs text-neutral-400">
                  Click <strong>Copy Post</strong> to paste directly into LinkedIn with pre-formatted layout, bullet points, and hashtags.
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-blue-200"
                >
                  <span>Open LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="space-y-5">
                {linkedInData.launchPosts.map((post) => (
                  <div
                    key={post.id}
                    className="rounded-2xl bg-black/40 border border-white/10 p-5 sm:p-6 hover:border-blue-400/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-blue-300 bg-blue-500/15 border border-blue-400/25 px-2.5 py-0.5 rounded-full">
                          {post.badge}
                        </span>
                        <h4 className="text-base font-bold text-white mt-1.5">{post.title}</h4>
                        <p className="text-xs text-neutral-400">{post.category}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopy(post.id, post.content)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          copiedId === post.id
                            ? 'bg-emerald-500 text-black shadow-md'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                        style={{ borderRadius: '9999px' }}
                      >
                        {copiedId === post.id ? (
                          <>
                            <Check className="h-3.5 w-3.5" />
                            Copied to Clipboard!
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            Copy Post
                          </>
                        )}
                      </button>
                    </div>

                    <div className="rounded-xl bg-neutral-950/80 p-4 border border-white/5 font-sans text-xs sm:text-sm text-neutral-200 whitespace-pre-line leading-relaxed">
                      {post.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: COMPANY PAGE SETUP */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white">LinkedIn Company Description (2,000 Chars)</h4>
                  <button
                    type="button"
                    onClick={() => handleCopy('profile-about', linkedInData.companyProfile.aboutSummary)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      copiedId === 'profile-about'
                        ? 'bg-emerald-500 text-black'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {copiedId === 'profile-about' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copiedId === 'profile-about' ? 'Copied' : 'Copy Description'}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 text-xs text-neutral-300 whitespace-pre-line leading-relaxed font-sans border border-white/5">
                  {linkedInData.companyProfile.aboutSummary}
                </div>
              </div>

              {/* Company Meta Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <span className="text-xs text-neutral-400 block mb-1">Company Tagline (120 chars)</span>
                  <p className="text-sm font-semibold text-white">{linkedInData.companyProfile.tagline}</p>
                </div>

                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <span className="text-xs text-neutral-400 block mb-1">Industry Classification</span>
                  <p className="text-sm font-semibold text-white">{linkedInData.companyProfile.industry}</p>
                </div>
              </div>

              {/* Graphic Asset Guidelines */}
              <div className="rounded-2xl bg-blue-950/30 border border-blue-400/20 p-5">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-blue-400" />
                  Recommended LinkedIn Graphic Assets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-300">
                  <div className="p-3 bg-black/40 rounded-lg">
                    <strong className="text-white block">Profile Logo:</strong> 400 x 400 px (Vyntiq Blue Emblem on Pure Black)
                  </div>
                  <div className="p-3 bg-black/40 rounded-lg">
                    <strong className="text-white block">Cover Banner:</strong> 1128 x 191 px (High-assurance grid + "Intelligence you can trust")
                  </div>
                  <div className="p-3 bg-black/40 rounded-lg">
                    <strong className="text-white block">Post Images:</strong> 1200 x 1200 px or 1200 x 627 px (16:9)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 45-DAY LAUNCH ROADMAP */}
          {activeTab === 'strategy' && (
            <div className="space-y-5">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Phase 1 — Days 1 to 7 (Immediate ASAP Launch)</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Official Company Unveiling &amp; Founder Positioning</h4>
                <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                  Publish Post 1 (Official Company Introduction) on Company Page, followed by Founder Vision post on CEO personal profile. Tag key technology and defense influencers.
                </p>
                <span className="text-[11px] text-blue-300 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-400/20">
                  Target: CXOs, CISOs, Government IT Heads, Hardware OEMs
                </span>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Phase 2 — Days 8 to 21</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Product Deep-Dives &amp; OEM Partner Recruitment</h4>
                <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                  Staggered release of Post 2 (Cop AI &amp; Forensics), Post 3 (DPDP Shield), and Post 4 (OEM Empanelment Call). Initiate sponsored InMail to Camera OEM Directors and System Integrators.
                </p>
                <span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                  Target: Hardware Manufacturers, Police Tech Consultants, SI Partners
                </span>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Phase 3 — Days 22 to 45</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Thought Leadership, Pilot Milestones &amp; Case Studies</h4>
                <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                  Release technical deep-dive articles on Air-Gapped High-Assurance AI, DPDP compliance checklists, and announce initial OEM empanelment partnerships.
                </p>
                <span className="text-[11px] text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-400/20">
                  Target: General Counsels, Procurement Officers, FinTech Security Directors
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
