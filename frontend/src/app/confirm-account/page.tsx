'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Loader, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const slides = [
  {
    img: '/images/medical/agent_swarm_doctors.jpg',
    title: 'Autonomous Clinical Intelligence,\nEmpowering Care Teams',
  },
  {
    img: '/images/medical/triage_doctor_patient.jpg',
    title: 'Multi-Agent Clinical Consensus,\nSaving Critical Minutes',
  },
];

function ConfirmAccountContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const codeParam = searchParams.get('code') || '';
  const emailParam = searchParams.get('email') || '';

  const { checkAuth } = useAuth();

  const [code, setCode] = useState(codeParam);
  const [email, setEmail] = useState(emailParam);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (codeParam) setCode(codeParam);
    if (emailParam) setEmail(emailParam);
  }, [codeParam, emailParam]);

  const handleConfirm = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!code) {
      setError('Please enter your 6-digit confirmation code.');
      return;
    }

    setError(null);
    setIsPending(true);

    try {
      const res = await fetch('/api/v1/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim(), email: email.trim() }),
      });

      const data = await res.json();
      setIsPending(false);

      if (!res.ok) {
        setError(data.error || 'Failed to confirm account.');
        return;
      }

      setIsSuccess(true);
      await checkAuth();

      setTimeout(() => {
        router.replace('/orchestrator-agent');
      }, 1500);
    } catch (err: any) {
      setIsPending(false);
      setError(err.message || 'Network error confirming account');
    }
  };

  return (
    <div 
      className="auth-root w-full min-h-screen flex flex-col md:flex-row bg-[#f4f6f8]"
      style={{ opacity: 1, visibility: 'visible', backgroundColor: '#f4f6f8' }}
    >
      {/* Left Panel */}
      <div className="hidden md:flex md:w-1/2 lg:w-5/12 relative p-8 flex-col justify-between overflow-hidden m-4 rounded-3xl bg-slate-900">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url('${slide.img}')`,
              opacity: activeSlide === idx ? 1 : 0,
              zIndex: activeSlide === idx ? 1 : 0,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

        <div className="relative z-20 flex justify-between items-center w-full">
          <span className="font-bold text-xl tracking-widest text-white" style={{ color: '#ffffff' }}>
            SANJEEVNI
          </span>
          <Link
            href="/"
            className="text-white/80 hover:text-white text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm transition-colors"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Back to website &rarr;
          </Link>
        </div>

        <div className="relative z-20 w-full pb-8">
          <h2 className="text-white text-4xl font-medium tracking-tight text-center leading-snug whitespace-pre-line" style={{ color: '#ffffff' }}>
            {slides[activeSlide].title}
          </h2>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 lg:w-7/12 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[450px]">
          {!isSuccess ? (
            <div className="w-full p-5 rounded-md text-gray-900" style={{ color: '#111827' }}>
              <h1 className="text-3xl tracking-tight text-gray-900 font-bold mb-2 text-center sm:text-left" style={{ color: '#111827', fontSize: '1.875rem', fontWeight: 700 }}>
                Account Confirmation
              </h1>
              <p className="mb-8 text-center sm:text-left text-sm text-gray-500 font-normal" style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                Enter the 6-digit confirmation code sent to your email by Sanjeevni OS.
              </p>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleConfirm}>
                <div className="mb-4">
                  <input
                    type="text"
                    required
                    placeholder="Enter 6-digit confirmation code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
                    style={{ opacity: 1, visibility: 'visible', color: '#111827', backgroundColor: '#f3f4f6', borderColor: '#e5e7eb', fontSize: '16px', padding: '0 1rem', borderRadius: '8px', borderWidth: '1px' }}
                  />
                </div>

                <button
                  disabled={isPending}
                  type="submit"
                  className="w-full text-[15px] h-12 bg-[#7e57c2] hover:bg-[#6847a3] text-white rounded-lg font-semibold transition-colors flex items-center justify-center cursor-pointer shadow-sm disabled:opacity-70"
                  style={{ opacity: 1, visibility: 'visible', backgroundColor: '#7e57c2', color: '#ffffff', fontSize: '15px', borderRadius: '8px', border: 'none' }}
                >
                  {isPending && <Loader className="animate-spin mr-2 w-4 h-4" />}
                  Confirm Account & Launch OS
                </button>
              </form>

              <div className="mt-8 text-center sm:text-left">
                <Link href="/login" className="text-sm text-[#7e57c2] hover:underline">
                  &larr; Back to login
                </Link>
              </div>
            </div>
          ) : (
            <div className="w-full h-[50vh] flex flex-col gap-3 items-center justify-center text-center">
              <CheckCircle2 size={54} className="text-emerald-500" />
              <h2 className="text-2xl font-bold text-gray-900" style={{ color: '#111827' }}>
                Account Verified!
              </h2>
              <p className="text-sm text-gray-500 max-w-[320px]">
                Your clinical account has been verified. Launching Sanjeevni OS Orchestrator...
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#7e57c2]">
                <Loader size={16} className="animate-spin" />
                <span>Redirecting...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConfirmAccountPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen flex items-center justify-center bg-[#f4f6f8]">
        <Loader size={32} className="animate-spin text-[#7e57c2]" />
      </div>
    }>
      <ConfirmAccountContent />
    </Suspense>
  );
}
