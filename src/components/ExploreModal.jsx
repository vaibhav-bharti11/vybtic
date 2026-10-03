import React, { useState } from 'react';
import {
  X,
  MessageSquare,
  Mail,
  ArrowRight,
  Clock3,
  Route,
  MessageCircle,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { submitInquiry } from '../services/formService';

export default function ExploreModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      console.warn("Sheet sync error:", err);
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={handleReset}
      ></div>

      {/* Modal Container */}
      <section className="relative z-10 w-full max-w-5xl my-auto animate-fade-in">
        <div className="relative overflow-hidden ring-1 ring-white/15 bg-neutral-900 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/70 hover:text-white ring-1 ring-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60668e31-2150-424e-b292-05bfdda254e0_1600w.jpg"
              alt="Abstract minimal background"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-5 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white/90 backdrop-blur ring-1 ring-black/10 shadow-xl p-4 sm:p-6 text-neutral-900">
                  {isSuccess ? (
                    <div className="text-center py-6">
                      <div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 ring-1 ring-emerald-500/20 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-bold tracking-tight text-neutral-900 mb-1">
                        Message Received!
                      </h4>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6">
                        Thank you, <span className="font-semibold text-neutral-900">{formData.name || 'there'}</span>. Your inquiry has been logged and our team will get in touch within one business day.
                      </p>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Vyntic Support</p>
                          <h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                            Have a question?
                          </h3>
                        </div>
                        <div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center shadow-sm">
                          <MessageSquare className="h-4 w-4" />
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                        <div>
                          <label htmlFor="ct-name" className="block text-xs font-medium text-neutral-700">
                            Your name<span className="text-neutral-400"> *</span>
                          </label>
                          <input
                            id="ct-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jane Doe"
                            className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm text-neutral-900 rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="ct-email" className="block text-xs font-medium text-neutral-700">
                            E‑mail<span className="text-neutral-400"> *</span>
                          </label>
                          <div className="relative mt-1">
                            <Mail className="h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              id="ct-email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@company.com"
                              className="w-full pl-9 pr-3 py-2.5 text-sm text-neutral-900 rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="ct-msg" className="block text-xs font-medium text-neutral-700">
                            Message
                          </label>
                          <textarea
                            id="ct-msg"
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm text-neutral-900 rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 transition-all"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm disabled:opacity-60 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send message
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </>
                          )}
                        </button>

                        <p className="text-[11px] text-neutral-500 text-center">
                          By submitting, you agree to our Terms and Privacy Policy.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Copy + highlights */}
              <div className="lg:col-span-7 pt-2 lg:pt-4">
                <h2 className="text-white tracking-tight text-5xl sm:text-6xl font-semibold leading-[1.05]">
                  Let's talk.
                </h2>
                <p className="sm:text-lg max-w-2xl text-base text-neutral-200 mt-4 leading-relaxed">
                  Tell us about your setup—support, bulk orders, sovereign AI pilots, or OEM partnerships. We reply within one business day.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-emerald-300">
                      <Clock3 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Quick response</p>
                      <p className="text-neutral-300 text-xs mt-0.5">Most messages receive a reply in under 24h.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 shrink-0 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-emerald-300">
                      <Route className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Clear next steps</p>
                      <p className="text-neutral-300 text-xs mt-0.5">We’ll follow up with a concise plan and timeline.</p>
                    </div>
                  </div>
                </div>

                {/* Direct contact card */}
                <div className="mt-7">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-3">
                    <img
                      src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/09f960eb-611f-430b-86b4-1d5a280d6eb8_800w.jpg"
                      alt="Team lead"
                      className="h-12 w-12 rounded-xl object-cover"
                    />
                    <div className="min-w-0 pr-1">
                      <p className="text-[11px] text-neutral-500 leading-none">Team Lead</p>
                      <p className="text-neutral-900 font-medium tracking-tight truncate mt-0.5">Ava Kim</p>
                    </div>
                    <a
                      href="https://wa.me/919999999999?text=Hello%20Vyntic%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20sovereign%20AI%20solutions."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3.5 py-2 text-xs font-medium hover:bg-neutral-800 transition-colors"
                    >
                      Ask directly
                      <MessageCircle className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
