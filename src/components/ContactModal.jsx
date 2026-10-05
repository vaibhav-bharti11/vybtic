import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2, Mail, X } from 'lucide-react';
import { productsData } from '../data/productsData';
import { contactChannels } from '../data/siteContent';
import { submitInquiry } from '../services/formService';
import { validateBusinessEmail, validatePhone } from '../utils/validation';

function createForm(enquiryType, product) {
  return {
    name: '',
    email: '',
    phone: '',
    organization: '',
    enquiryType: enquiryType || 'General Business Enquiry',
    selectedProduct: product || '',
    message: '',
  };
}

export default function ContactModal({ isOpen, onClose, initialEnquiryType = 'General Business Enquiry', initialProduct = '' }) {
  const [formData, setFormData] = useState(() => createForm(initialEnquiryType, initialProduct));
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) setFormData(createForm(initialEnquiryType, initialProduct));
  }, [initialEnquiryType, initialProduct, isOpen]);

  if (!isOpen) return null;

  const close = () => {
    setError('');
    setIsSuccess(false);
    onClose();
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateBusinessEmail(formData.email)) {
      setError('Please enter a valid business email address.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid phone number or leave it blank.');
      return;
    }

    setError('');
    setIsSubmitting(true);
    try {
      await submitInquiry(formData);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
      <button type="button" aria-label="Close contact form" onClick={close} className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm" />
      <section className="relative z-10 my-auto w-full max-w-3xl rounded-3xl border border-white/15 bg-neutral-900 p-6 shadow-2xl sm:p-9">
        <button type="button" onClick={close} aria-label="Close" className="absolute right-5 top-5 rounded-full bg-white/5 p-2 text-neutral-300 hover:bg-white/10 hover:text-white">
          <X className="h-5 w-5" />
        </button>

        {isSuccess ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-[#72A0FF]" />
            <h2 className="mt-5 text-3xl text-white">Your enquiry is with us.</h2>
            <p className="mt-3 text-sm text-neutral-300">The Vyntiq team will review the details and respond using the contact information you supplied.</p>
            <button type="button" onClick={close} className="mt-7 rounded-full bg-[#2F6FEB] px-6 py-2.5 text-sm font-semibold text-white">Done</button>
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72A0FF]">Contact Vyntiq</p>
            <h2 className="mt-3 pr-12 text-3xl tracking-tight text-white sm:text-4xl">Tell us what you would like to explore.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
              Request a product demonstration, discuss an implementation or start a general business conversation.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-medium text-neutral-300">
                Your name *
                <input required name="name" value={formData.name} onChange={handleChange} className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[#2F6FEB]" />
              </label>
              <label className="text-xs font-medium text-neutral-300">
                Organization *
                <input required name="organization" value={formData.organization} onChange={handleChange} className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[#2F6FEB]" />
              </label>
              <label className="text-xs font-medium text-neutral-300">
                Business email *
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[#2F6FEB]" />
              </label>
              <label className="text-xs font-medium text-neutral-300">
                Phone (optional)
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[#2F6FEB]" />
              </label>
              <label className="text-xs font-medium text-neutral-300 sm:col-span-2">
                Enquiry type *
                <select required name="enquiryType" value={formData.enquiryType} onChange={handleChange} className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[#2F6FEB]">
                  <option>Request a Demo &amp; Technical Pilot</option>
                  <option>Partnership Enquiry</option>
                  <option>Product and Implementation Enquiry</option>
                  <option>General Business Enquiry</option>
                </select>
              </label>
              <label className="text-xs font-medium text-neutral-300 sm:col-span-2">
                Product of interest
                <select name="selectedProduct" value={formData.selectedProduct} onChange={handleChange} className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[#2F6FEB]">
                  <option value="">Select a product (optional)</option>
                  {productsData.map((product) => <option key={product.id}>{product.name}</option>)}
                </select>
              </label>
              <label className="text-xs font-medium text-neutral-300 sm:col-span-2">
                Message *
                <textarea required rows={4} name="message" value={formData.message} onChange={handleChange} className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-[#2F6FEB]" />
              </label>

              {error && <p className="text-sm text-rose-300 sm:col-span-2" role="alert">{error}</p>}
              <button disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F6FEB] px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 sm:col-span-2">
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                {isSubmitting ? 'Sending…' : 'Send enquiry'}
              </button>
            </form>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-xs text-neutral-400">
              {[contactChannels.general, contactChannels.contact, contactChannels.sales].map((email) => (
                <a key={email} href={`mailto:${email}`} className="inline-flex items-center gap-1.5 hover:text-white">
                  <Mail className="h-3.5 w-3.5 text-[#72A0FF]" />
                  {email}
                </a>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
