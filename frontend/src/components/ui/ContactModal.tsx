'use client';

import { useState } from 'react';
import { projectNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  defaultProject = '',
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: defaultProject || 'General Inquiry',
    message: '',
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-xl bg-[#ECE4DA] h-full overflow-y-auto p-8 md:p-12 flex flex-col justify-between shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-black/20 hover:bg-black hover:text-white transition-all cursor-pointer"
          aria-label="Close form"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content */}
        <div>
          <span className="text-xs uppercase tracking-widest text-black/60 block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">
            Unlock Your Dream Home
          </h2>
          <p className="text-sm text-black/70 mb-8 leading-relaxed">
            Interested in our developments or bespoke residential projects? Leave your details below and our architectural advisory team will contact you.
          </p>

          {submitted ? (
            <div className="bg-black text-[#ECE4DA] p-8 rounded-2xl text-center my-8">
              <h3 className="text-2xl font-serif mb-2">Thank you!</h3>
              <p className="text-sm text-[#ECE4DA]/80 mb-6">
                Your message has been received. Our team will contact you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#ECE4DA] text-black text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-white transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-black/70 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Elena García"
                  className="w-full px-4 py-3 bg-white/70 border border-black/15 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-black/70 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@example.com"
                    className="w-full px-4 py-3 bg-white/70 border border-black/15 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-black/70 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 bg-white/70 border border-black/15 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-black/70 mb-1">
                  Development of Interest
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 bg-white/70 border border-black/15 rounded-xl text-black focus:outline-none focus:border-black text-sm"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  {projectNavItems.map((item) => (
                    <option key={item.label} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-black/70 mb-1">
                  Message / Comments
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you are looking for..."
                  className="w-full px-4 py-3 bg-white/70 border border-black/15 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black text-sm resize-none"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  checked={formData.privacyAccepted}
                  onChange={(e) =>
                    setFormData({ ...formData, privacyAccepted: e.target.checked })
                  }
                  className="mt-1 accent-black"
                />
                <label htmlFor="privacy" className="text-xs text-black/70 leading-normal">
                  I have read and accept the{' '}
                  <a href="/privacy-policy" target="_blank" className="underline hover:text-black">
                    Privacy Policy
                  </a>{' '}
                  and consent to the processing of my contact information.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black text-white text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-black/80 transition-all mt-4 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'Sending Request...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Info */}
        <div className="pt-8 mt-8 border-t border-black/10 text-xs text-black/60 flex justify-between items-center">
          <span>Direct Contact:</span>
          <a href={`mailto:${siteConfig.email}`} className="font-mono text-black underline">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
