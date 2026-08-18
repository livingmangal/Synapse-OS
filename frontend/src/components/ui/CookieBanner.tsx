'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 bg-[#121212] text-[#ECE4DA] p-6 rounded-2xl shadow-2xl border border-[#ECE4DA]/20 animate-fadeIn">
      <div className="flex items-center space-x-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#DB5C59]"></span>
        <h4 className="text-xs uppercase tracking-widest font-semibold">
          Cookie Preferences
        </h4>
      </div>
      <p className="text-xs text-[#ECE4DA]/80 leading-relaxed mb-4">
        We use technical cookies to guarantee website functionality and analytical cookies to improve user experience. Learn more in our{' '}
        <Link href="/cookie-policy" className="underline hover:text-white">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="flex items-center space-x-3">
        <button
          onClick={handleAccept}
          className="flex-1 py-2.5 bg-[#ECE4DA] text-black text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-white transition-all cursor-pointer"
        >
          Accept All
        </button>
        <button
          onClick={handleReject}
          className="flex-1 py-2.5 border border-[#ECE4DA]/30 text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-white/10 transition-all cursor-pointer"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
