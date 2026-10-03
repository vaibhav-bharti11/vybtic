import React, { useState, useEffect } from 'react';
import {
  X,
  MessageSquare,
  Mail,
  ArrowRight,
  Clock3,
  Route,
  MessageCircle,
  CheckCircle2,
  Loader2,
  Building2,
  ShieldCheck,
  Cpu,
  Phone,
  MapPin,
  Send
} from 'lucide-react';
import { Icon } from '@iconify/react';

import { submitInquiry } from '../services/formService';

export default function ContactModal({ isOpen, onClose, initialEnquiryType = 'General Business Enquiry', initialProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    enquiryType: initialEnquiryType,
    selectedProduct: initialProduct || 'Complete Suite',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialEnquiryType) {
      setFormData((prev) => ({
        ...prev,
        enquiryType: initialEnquiryType,
        selectedProduct: initialProduct || prev.selectedProduct
      }));
    }
  }, [initialEnquiryType, initialProduct, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitInquiry(formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.warn("Submission error:", err);
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      enquiryType: 'General Business Enquiry',
      selectedProduct: 'Complete Suite',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={handleReset}
      ></div>

      {/* Modal Container */}
      <section className="relative z-10 w-full max-w-5xl my-auto animate-fade-in">
        <div className="relative overflow-hidden ring-1 ring-white/15 bg-neutral-900 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white/70 hover:text-white ring-1 ring-white/10 transition-colors"
            aria-label="Close contact modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Background Ambient Layers */}
          <div className="absolute inset-0">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60668e31-2150-424e-b292-05bfdda254e0_1600w.jpg"
              alt="Abstract background"
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/95 via-black/75 to-neutral-950/80"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-5 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form card */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-neutral-900/90 border border-white/15 backdrop-blur-xl p-5 sm:p-7 text-white shadow-2xl">
                  {isSuccess ? (
                    <div className="text-center py-8">
                      <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4 shadow-sm">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h4 className="text-2xl font-bold tracking-tight text-white mb-2">
                        Enquiry Received!
                      </h4>
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
                        Thank you, <span className="font-semibold text-white">{formData.name || 'there'}</span>. Your request has been assigned to the Vyntiq Solutions Team. We will contact you within one business day with technical details.
                      </p>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-blue-300 text-black px-4 py-3 text-sm font-semibold hover:opacity-90 transition-all cursor-pointer"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                            Vyntiq Enterprise &amp; Gov Desk
                          </p>
                          <h3 className="mt-0.5 text-2xl font-bold tracking-tight text-white">
                            Business &amp; Project Enquiry
                          </h3>
                        </div>
                        <div className="h-9 w-9 rounded-xl bg-blue-500/15 border border-blue-400/30 text-blue-300 flex items-center justify-center shadow-sm">
                          <Send className="h-4 w-4" />
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-3.5">
                        {/* Track Selector */}
                        <div>
                          <label className="block text-xs font-medium text-neutral-300 mb-1">
                            Enquiry Category *
                          </label>
                          <select
                            name="enquiryType"
                            value={formData.enquiryType}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-xs text-white rounded-xl bg-black/60 border border-white/10 focus:border-blue-400 outline-none"
                          >
                            <option value="Request a Demo & Technical Pilot">Request a Demo &amp; Technical Pilot</option>
                            <option value="Partner & OEM Empanelment Enquiry">Partner &amp; OEM Empanelment Enquiry</option>
                            <option value="Enterprise Solution Deployment">Enterprise Solution Deployment</option>
                            <option value="Government & Defense Project Tender">Government &amp; Defense Project Tender</option>
                            <option value="DPDP Compliance Shielding Audit">DPDP Compliance Shielding Audit</option>
                            <option value="General Business Enquiry">General Business Enquiry</option>
                          </select>
                        </div>

                        {/* Product Selection */}
                        <div>
                          <label className="block text-xs font-medium text-neutral-300 mb-1">
                            Solution of Interest
                          </label>
                          <select
                            name="selectedProduct"
                            value={formData.selectedProduct}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-xs text-white rounded-xl bg-black/60 border border-white/10 focus:border-blue-400 outline-none"
                          >
                            <option value="Complete Sovereign Suite">Complete Sovereign Suite</option>
                            <option value="Cop AI (Tactical Public Safety)">Cop AI (Tactical Public Safety)</option>
                            <option value="Video Forensics (Sub-Second Search)">Video Forensics (Sub-Second Search)</option>
                            <option value="Video Prevention & Threat Detection">Video Prevention &amp; Threat Detection</option>
                            <option value="Video Analytics (Spatial AI)">Video Analytics (Spatial AI)</option>
                            <option value="CLM (Contract Lifecycle Management)">CLM (Contract Lifecycle Management)</option>
                            <option value="DPDP Shield (Statutory Compliance)">DPDP Shield (Statutory Compliance)</option>
                            <option value="HRMS Suite (Biometric & Payroll)">HRMS Suite (Biometric &amp; Payroll)</option>
                            <option value="OEM Hardware Integration">OEM Hardware Integration</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-neutral-300 mb-1">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Jane Doe"
                              className="w-full px-3 py-2 text-xs text-white rounded-xl bg-black/60 border border-white/10 focus:border-blue-400 outline-none placeholder:text-neutral-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-neutral-300 mb-1">
                              Organization / Agency *
                            </label>
                            <input
                              type="text"
                              name="organization"
                              required
                              value={formData.organization}
                              onChange={handleChange}
                              placeholder="e.g. Homeland Security / Tech Corp"
                              className="w-full px-3 py-2 text-xs text-white rounded-xl bg-black/60 border border-white/10 focus:border-blue-400 outline-none placeholder:text-neutral-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-neutral-300 mb-1">
                              Corporate Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@organization.com"
                              className="w-full px-3 py-2 text-xs text-white rounded-xl bg-black/60 border border-white/10 focus:border-blue-400 outline-none placeholder:text-neutral-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-neutral-300 mb-1">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className="w-full px-3 py-2 text-xs text-white rounded-xl bg-black/60 border border-white/10 focus:border-blue-400 outline-none placeholder:text-neutral-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-neutral-300 mb-1">
                            Project Scope or Requirements
                          </label>
                          <textarea
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about camera count, deployment timeline, air-gapped specs, or tender requirements..."
                            className="w-full px-3 py-2 text-xs text-white rounded-xl bg-black/60 border border-white/10 focus:border-blue-400 outline-none placeholder:text-neutral-500 resize-none"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 text-black px-4 py-2.5 text-xs font-semibold hover:opacity-90 transition-opacity shadow-md disabled:opacity-60 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Submitting Enquiry...
                            </>
                          ) : (
                            <>
                              Submit Business Enquiry
                              <ArrowRight className="h-3.5 w-3.5 ml-2" />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Corporate Information & Highlights */}
              <div className="lg:col-span-6 pt-2 lg:pt-4 space-y-6">
                <div>
                  <h2 className="text-white tracking-tight text-4xl sm:text-5xl font-bold leading-tight">
                    Start the conversation.
                  </h2>
                  <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                    Direct access to Vyntiq solutions architects, sovereign AI engineers, and partner directors. Fast-tracked response within 24 hours.
                  </p>
                </div>

                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/15 text-blue-300 flex items-center justify-center mb-2">
                      <Clock3 className="h-4 w-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white">Under 24h Response</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Dedicated solution architect assigned to every enterprise request.</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/15 text-emerald-300 flex items-center justify-center mb-2">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white">Confidentiality &amp; NDA</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">Mutual NDA execution prior to tactical architecture exchanges.</p>
                  </div>
                </div>

                {/* Corporate Details */}
                <div className="rounded-2xl bg-black/50 border border-white/10 p-5 space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                    Corporate Contact Channels
                  </h4>

                  <div className="space-y-2 text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      <span><strong>Sovereign Labs &amp; HQ:</strong> Vyntiq Technologies Private Limited, India</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      <span><strong>Enterprise &amp; Gov Sales:</strong> contact@vyntiq.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Cpu className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      <span><strong>OEM &amp; Technology Empanelment:</strong> partners@vyntiq.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span><strong>DPDP &amp; Security Desk:</strong> security@vyntiq.com</span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Quick Connect */}
                <div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-3 w-full sm:w-auto">
                  <div className="h-10 w-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
                    VQ
                  </div>
                  <div className="min-w-0 pr-2">
                    <p className="text-[10px] text-neutral-500 leading-none">Instant Channel</p>
                    <p className="text-neutral-900 font-bold text-xs tracking-tight truncate mt-0.5">Vyntiq Executive Desk</p>
                  </div>
                  <a
                    href="https://wa.me/919999999999?text=Hello%20Vyntiq%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20sovereign%20AI%20solutions%20and%20OEM%20empanelment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-neutral-900 text-white px-3.5 py-2 text-xs font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Chat on WhatsApp
                    <MessageCircle className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
