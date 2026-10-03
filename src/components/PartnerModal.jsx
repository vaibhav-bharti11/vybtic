import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  X,
  ShieldCheck,
  Cpu,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  FileCheck,
  Building,
  Mail,
  Phone,
  Layers,
  Sparkles,
  Loader2
} from 'lucide-react';

import { submitOemApplication } from '../services/formService';

export default function PartnerModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('apply'); // 'apply' | 'track' | 'tiers'
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    workEmail: '',
    phone: '',
    partnerTrack: 'Camera & Hardware OEM',
    hardwareArch: 'NVIDIA Jetson / ARM',
    deviceVolume: '1,000 - 10,000 units/yr',
    ndaRequired: true,
    partnershipNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefId, setSubmittedRefId] = useState(null);

  // Status tracker state
  const [searchRefId, setSearchRefId] = useState('VYNTIQ-OEM-8492');
  const [trackedStatus, setTrackedStatus] = useState({
    refId: 'VYNTIQ-OEM-8492',
    company: 'Titan Optical Systems (Demo)',
    track: 'Camera Hardware OEM',
    currentStage: 2, // 1, 2, 3, 4
    submittedDate: '2026-09-28',
    lastUpdate: 'Technical Architecture Review in progress with Vyntiq Sovereign Labs.'
  });

  if (!isOpen) return null;

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { refId } = await submitOemApplication(formData);
      setIsSubmitting(false);
      setSubmittedRefId(refId);
    } catch (err) {
      console.warn("OEM submission error:", err);
      setIsSubmitting(false);
      setSubmittedRefId(`VYNTIQ-OEM-${Math.floor(1000 + Math.random() * 9000)}`);
    }
  };

  const handleTrackSearch = (e) => {
    e.preventDefault();
    const stored = JSON.parse(localStorage.getItem('vyntiq_oem_applications') || '[]');
    const match = stored.find((item) => item.refId?.toLowerCase() === searchRefId.trim().toLowerCase());

    if (match) {
      setTrackedStatus({
        refId: match.refId,
        company: match.companyName,
        track: match.partnerTrack,
        currentStage: match.statusStage || 1,
        submittedDate: match.submittedAt ? new Date(match.submittedAt).toLocaleDateString() : 'Recent',
        lastUpdate: 'Application received and undergoing initial verification by Vyntiq Partner Directorate.'
      });
    } else {
      // Return active benchmark mock
      setTrackedStatus({
        refId: searchRefId.toUpperCase() || 'VYNTIQ-OEM-8492',
        company: 'Partner Enterprise / Registered Applicant',
        track: 'OEM Hardware & System Integration',
        currentStage: 2,
        submittedDate: 'Active Verification',
        lastUpdate: 'Technical compatibility review and SDK sandbox credential generation in progress.'
      });
    }
  };

  const resetAll = () => {
    setSubmittedRefId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={resetAll}
      ></div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl my-auto animate-fade-in max-h-[90vh] overflow-y-auto rounded-3xl ring-1 ring-white/15 bg-neutral-900 shadow-[0_25px_80px_rgba(0,0,0,0.95)]">
        {/* Header */}
        <div className="relative overflow-hidden p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-blue-950/40 via-neutral-900 to-neutral-900">
          <button
            onClick={resetAll}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/70 hover:text-white ring-1 ring-white/10 transition-colors"
            aria-label="Close portal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
            <Cpu className="h-4 w-4" />
            <span>PARTNER ENABLEMENT &amp; OEM PORTAL</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Vyntiq Partner Connect &amp; OEM Empanelment
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
            Integrate sovereign computer vision, Cop AI, and DPDP compliance natively into your cameras, servers, and enterprise solutions.
          </p>

          {/* Tab buttons */}
          <div className="flex items-center gap-2 mt-5 bg-black/40 p-1.5 rounded-full border border-white/10 w-fit">
            <button
              type="button"
              onClick={() => setActiveTab('apply')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'apply'
                  ? 'bg-gradient-to-r from-blue-400 to-blue-300 text-black shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Apply for Empanelment
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('track')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'track'
                  ? 'bg-gradient-to-r from-blue-400 to-blue-300 text-black shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Track Application Status
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tiers')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'tiers'
                  ? 'bg-gradient-to-r from-blue-400 to-blue-300 text-black shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              OEM Tiers &amp; SDK Specs
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* TAB 1: APPLY */}
          {activeTab === 'apply' && (
            <div>
              {submittedRefId ? (
                <div className="text-center py-10">
                  <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4 shadow-lg">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Empanelment Request Submitted!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you for applying to the Vyntiq OEM &amp; Partner Ecosystem. Your application reference identifier is:
                  </p>
                  <div className="mt-4 inline-block bg-black/60 border border-blue-400/40 px-5 py-2.5 rounded-xl font-mono text-lg font-bold text-blue-400 tracking-wider">
                    {submittedRefId}
                  </div>
                  <p className="text-xs text-neutral-400 mt-3 max-w-md mx-auto">
                    Our Partner Directorate and Technical Architecture team will reach out within 24 hours to initiate NDA signing and provide Edge SDK sandbox credentials.
                  </p>
                  <div className="mt-6 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSearchRefId(submittedRefId);
                        setActiveTab('track');
                      }}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all"
                    >
                      Track Application
                    </button>
                    <button
                      type="button"
                      onClick={resetAll}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 text-black text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleFormChange}
                        placeholder="e.g. Hexagon Hardware Ltd"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-blue-400 outline-none placeholder:text-neutral-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Contact Person &amp; Title *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleFormChange}
                        placeholder="e.g. Rajesh Sharma, VP Technology"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-blue-400 outline-none placeholder:text-neutral-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Corporate Work E-mail *
                      </label>
                      <input
                        type="email"
                        name="workEmail"
                        required
                        value={formData.workEmail}
                        onChange={handleFormChange}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-blue-400 outline-none placeholder:text-neutral-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Phone / Direct Extension *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-blue-400 outline-none placeholder:text-neutral-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Partner Category
                      </label>
                      <select
                        name="partnerTrack"
                        value={formData.partnerTrack}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs focus:border-blue-400 outline-none"
                      >
                        <option value="Camera & Hardware OEM">Camera &amp; Hardware OEM</option>
                        <option value="NVR & Edge Server Manufacturer">NVR &amp; Edge Server Manufacturer</option>
                        <option value="Defense & Gov System Integrator">Defense &amp; Gov System Integrator</option>
                        <option value="Enterprise Solution ISV">Enterprise Solution ISV</option>
                        <option value="Distributor & Channel Partner">Distributor &amp; Channel Partner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Primary Hardware / Architecture
                      </label>
                      <select
                        name="hardwareArch"
                        value={formData.hardwareArch}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs focus:border-blue-400 outline-none"
                      >
                        <option value="NVIDIA Jetson / ARM">NVIDIA Jetson / ARM SoC</option>
                        <option value="Ambarella / Hailo NPU">Ambarella / Hailo NPU</option>
                        <option value="Intel x86 / OpenVINO">Intel x86 / OpenVINO</option>
                        <option value="Standard IP Camera ONVIF/RTSP">Standard IP Camera ONVIF/RTSP</option>
                        <option value="Custom Embedded NPU">Custom Embedded NPU</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">
                        Expected Deployment Scale
                      </label>
                      <select
                        name="deviceVolume"
                        value={formData.deviceVolume}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs focus:border-blue-400 outline-none"
                      >
                        <option value="< 1,000 units/yr">&lt; 1,000 units/yr (Pilot)</option>
                        <option value="1,000 - 10,000 units/yr">1,000 - 10,000 units/yr</option>
                        <option value="10,000+ units/yr">10,000+ units/yr (Tier 1)</option>
                        <option value="Gov / Defense Project Specific">Gov / Defense Project Specific</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Partnership Scope &amp; Product/Technology Details
                    </label>
                    <textarea
                      name="partnershipNotes"
                      rows={3}
                      value={formData.partnershipNotes}
                      onChange={handleFormChange}
                      placeholder="Describe your hardware, target projects (e.g. smart city tenders, enterprise deployments), and commercial objectives..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:border-blue-400 outline-none placeholder:text-neutral-500"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="ndaCheck"
                      name="ndaRequired"
                      checked={formData.ndaRequired}
                      onChange={handleFormChange}
                      className="rounded bg-black/40 border-white/20 text-blue-500 focus:ring-0"
                    />
                    <label htmlFor="ndaCheck" className="text-xs text-neutral-300">
                      Request mutual Non-Disclosure Agreement (NDA) prior to technical SDK sharing.
                    </label>
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={resetAll}
                      className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 text-black px-6 py-2.5 text-xs font-semibold shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:opacity-90 disabled:opacity-50 cursor-pointer"
                      style={{ borderRadius: '9999px' }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Empanelment Request
                          <ArrowRight className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: TRACK STATUS */}
          {activeTab === 'track' && (
            <div className="space-y-6">
              <form onSubmit={handleTrackSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="h-4 w-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchRefId}
                    onChange={(e) => setSearchRefId(e.target.value)}
                    placeholder="Enter Application ID (e.g. VYNTIQ-OEM-8492)"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm font-mono focus:border-blue-400 outline-none uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-400 to-blue-300 text-black text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  Lookup Status
                </button>
              </form>

              {/* Status Card */}
              <div className="rounded-2xl bg-black/40 border border-white/10 p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-400/20">
                      {trackedStatus.refId}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1.5">{trackedStatus.company}</h4>
                    <p className="text-xs text-neutral-400">{trackedStatus.track}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-neutral-400">Submission Date</span>
                    <p className="text-xs font-semibold text-white">{trackedStatus.submittedDate}</p>
                  </div>
                </div>

                {/* Progress Stepper */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className={`p-3 rounded-xl border ${trackedStatus.currentStage >= 1 ? 'bg-emerald-500/10 border-emerald-400/30' : 'bg-white/5 border-white/10'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className={`h-4 w-4 ${trackedStatus.currentStage >= 1 ? 'text-emerald-400' : 'text-neutral-500'}`} />
                      <span className="text-xs font-semibold text-white">1. Submitted</span>
                    </div>
                    <p className="text-[11px] text-neutral-400">Details logged in registry.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${trackedStatus.currentStage >= 2 ? 'bg-blue-500/15 border-blue-400/40 shadow-sm' : 'bg-white/5 border-white/10'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className={`h-4 w-4 ${trackedStatus.currentStage >= 2 ? 'text-blue-400 animate-pulse' : 'text-neutral-500'}`} />
                      <span className="text-xs font-semibold text-white">2. Tech Review</span>
                    </div>
                    <p className="text-[11px] text-neutral-400">Architecture evaluation.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${trackedStatus.currentStage >= 3 ? 'bg-emerald-500/10 border-emerald-400/30' : 'bg-white/5 border-white/10'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Cpu className={`h-4 w-4 ${trackedStatus.currentStage >= 3 ? 'text-emerald-400' : 'text-neutral-500'}`} />
                      <span className="text-xs font-semibold text-white">3. SDK Sandbox</span>
                    </div>
                    <p className="text-[11px] text-neutral-400">Edge firmware testing.</p>
                  </div>

                  <div className={`p-3 rounded-xl border ${trackedStatus.currentStage >= 4 ? 'bg-emerald-500/10 border-emerald-400/30' : 'bg-white/5 border-white/10'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className={`h-4 w-4 ${trackedStatus.currentStage >= 4 ? 'text-emerald-400' : 'text-neutral-500'}`} />
                      <span className="text-xs font-semibold text-white">4. Empaneled</span>
                    </div>
                    <p className="text-[11px] text-neutral-400">Certified OEM Partner.</p>
                  </div>
                </div>

                {/* Real-time notice */}
                <div className="bg-blue-950/40 border border-blue-400/20 rounded-xl p-4 flex items-start gap-3">
                  <Sparkles className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-300">
                    <strong className="text-white">Current Directorate Update:</strong> {trackedStatus.lastUpdate}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TIERS & SDK SPECS */}
          {activeTab === 'tiers' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
                  <span className="text-[10px] font-semibold text-blue-300 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded">
                    Tier 1 Global OEM
                  </span>
                  <h4 className="text-base font-bold text-white mt-2 mb-2">Embedded Hardware Partner</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    For camera and server manufacturers embedding Vyntiq firmware directly into production silicon.
                  </p>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    <li className="flex items-center gap-1.5">• Direct NPU microcode optimization</li>
                    <li className="flex items-center gap-1.5">• Co-branded "Vyntiq Sovereign Inside"</li>
                    <li className="flex items-center gap-1.5">• Global Joint Go-To-Market &amp; Rev-Share</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
                  <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">
                    Tier 2 Regional SI
                  </span>
                  <h4 className="text-base font-bold text-white mt-2 mb-2">Certified System Integrator</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    For defense contractors and master systems integrators executing smart city &amp; surveillance tenders.
                  </p>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    <li className="flex items-center gap-1.5">• Turnkey RFP technical bid support</li>
                    <li className="flex items-center gap-1.5">• Certified Sovereign DPDP compliance pack</li>
                    <li className="flex items-center gap-1.5">• Priority 24/7 level-3 defense support</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
                  <span className="text-[10px] font-semibold text-indigo-300 uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded">
                    Technology ISV
                  </span>
                  <h4 className="text-base font-bold text-white mt-2 mb-2">Software &amp; Analytics ISV</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    For software vendors integrating Vyntiq forensic stream indexing and Cop AI into existing CAD/VMS stacks.
                  </p>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    <li className="flex items-center gap-1.5">• RESTful &amp; gRPC stream APIs</li>
                    <li className="flex items-center gap-1.5">• Cross-platform SDK (Windows, Linux)</li>
                    <li className="flex items-center gap-1.5">• Sandbox telemetry test harnesses</li>
                  </ul>
                </div>
              </div>

              {/* SDK Highlights */}
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5">
                <h4 className="text-sm font-semibold text-white mb-2">Vyntiq Edge SDK Highlights</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/5">
                    <span className="text-neutral-400 block">Language</span>
                    <strong className="text-white">C++20 / Rust</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5">
                    <span className="text-neutral-400 block">Latency</span>
                    <strong className="text-emerald-400">&lt; 35ms Edge</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5">
                    <span className="text-neutral-400 block">Protocols</span>
                    <strong className="text-white">RTSP / ONVIF / gRPC</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5">
                    <span className="text-neutral-400 block">Cloud Leakage</span>
                    <strong className="text-blue-400">0.0% Sovereign</strong>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
