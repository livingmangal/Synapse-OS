'use client';

import { useState } from 'react';
import { projectNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'General Inquiry',
    message: '',
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#ECE4DA] text-black border-t border-black/15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Info */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-widest text-black/60 block">
            Direct Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            Start A Conversation About Your Future Sanctuary
          </h2>
          <p className="text-sm text-black/75 font-light leading-relaxed">
            Whether you want to learn more about our current developments, schedule a private on-site presentation, or discuss a customized residential inquiry, our team is at your disposal.
          </p>

          <div className="pt-6 space-y-4 text-sm border-t border-black/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-black/50">Email Inquiry</p>
              <a href={`mailto:${siteConfig.email}`} className="font-mono text-base text-black hover:underline">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-black/50">Office Location</p>
              <p className="text-black/80">
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.province}, {siteConfig.address.country}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-black/10 shadow-lg">
          {submitted ? (
            <div className="text-center py-12">
              <span className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                ✓
              </span>
              <h3 className="text-2xl font-serif font-bold text-black mb-2">
                Inquiry Received
              </h3>
              <p className="text-sm text-black/70 mb-6 max-w-sm mx-auto">
                Thank you for contacting Normal is Boring. Our advisory team will reach out to you promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest rounded-full hover:bg-black/80 transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-black/70 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black text-sm"
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
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-black/70 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-black/70 mb-1">
                  Project
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-black focus:outline-none focus:border-black text-sm"
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
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-white border border-black/15 rounded-xl text-black placeholder-black/30 focus:outline-none focus:border-black text-sm resize-none"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="section-privacy"
                  required
                  checked={formData.privacyAccepted}
                  onChange={(e) =>
                    setFormData({ ...formData, privacyAccepted: e.target.checked })
                  }
                  className="mt-1 accent-black"
                />
                <label htmlFor="section-privacy" className="text-xs text-black/70 leading-normal">
                  I accept the processing of my data in accordance with the{' '}
                  <a href="/privacy-policy" target="_blank" className="underline hover:text-black">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black text-white text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-black/80 transition-all mt-4 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
