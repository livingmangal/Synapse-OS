'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Loader, AlertCircle } from 'lucide-react';

const slides = [
  {
    img: '/images/medical/agent_swarm_doctors.jpg',
    title: 'Autonomous Clinical Intelligence,\nEmpowering Care Teams',
  },
  {
    img: '/images/medical/triage_doctor_patient.jpg',
    title: 'Multi-Agent Clinical Consensus,\nSaving Critical Minutes',
  },
  {
    img: '/images/medical/scan_radiologist_diagnostic.jpg',
    title: 'Sub-Second Radiologic Analysis,\nAIIMS Clinical Standards',
  },
];

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = searchParams.get('redirect') || '/orchestrator-agent';

  const { login, verifyMFALogin, isAuthenticated, user } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // 2FA Mode
  const [mfaRequired, setMfaRequired] = useState(false);
  const [pin, setPin] = useState(['', '', '', '', '', '']);

  useEffect(() => {
    // Only redirect to app if authenticated AND email is verified
    if (isAuthenticated && user?.isEmailVerified) {
      router.replace(redirectTarget);
    }
  }, [isAuthenticated, user, redirectTarget, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    try {
      const res = await login(email, password);
      setIsPending(false);

      if (!res.success) {
        setError(res.error || 'Invalid credentials');
        return;
      }

      if (res.mfaRequired) {
        setMfaRequired(true);
        return;
      }

      router.replace(redirectTarget);
    } catch (err: any) {
      setIsPending(false);
      setError(err.message || 'Login failed');
    }
  };

  const handlePinChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const newPin = [...pin];
    newPin[index] = digit;
    setPin(newPin);

    if (digit && index < 5) {
      const nextInput = document.getElementById(`pin-slot-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handlePinKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      const prevInput = document.getElementById(`pin-slot-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePinPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pastedData) return;
    const newPin = [...pin];
    for (let i = 0; i < 6; i++) {
      newPin[i] = pastedData[i] || '';
    }
    setPin(newPin);
  };

  const handleMfaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullPin = pin.join('');
    if (fullPin.length < 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setError(null);
    setIsPending(true);

    try {
      const res = await verifyMFALogin(email, fullPin);
      setIsPending(false);

      if (!res.success) {
        setError(res.error || 'Invalid 6-digit code');
        return;
      }

      router.replace(redirectTarget);
    } catch (err: any) {
      setIsPending(false);
      setError(err.message || 'MFA verification failed');
    }
  };

  return (
    <div 
      className="auth-root w-full min-h-screen flex flex-col md:flex-row bg-[#f4f6f8] transition-colors duration-300"
      style={{ opacity: 1, visibility: 'visible', backgroundColor: '#f4f6f8' }}
    >
      {/* Left Panel - Image & Branding matching MERN Auth layout */}
      <div className="auth-left-panel hidden md:flex md:w-1/2 lg:w-5/12 relative p-8 flex-col justify-between overflow-hidden m-4 rounded-3xl bg-slate-900">
        {/* Layered Crossfade Images */}
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

        {/* Logo/Top Bar - Pure Clean Sanjeevni Branding */}
        <div className="relative z-20 flex items-center w-full">
          <div className="flex items-center gap-2 text-white">
            <span className="font-bold text-xl tracking-widest text-white" style={{ color: '#ffffff' }}>
              SANJEEVNI
            </span>
          </div>
        </div>

        {/* Bottom Text & Carousel Indicators */}
        <div className="relative z-20 w-full pb-8">
          <h2 
            className="text-white text-4xl font-medium tracking-tight text-center leading-snug whitespace-pre-line"
            style={{ color: '#ffffff' }}
          >
            {slides[activeSlide].title}
          </h2>
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeSlide === idx ? 'w-8 bg-white' : 'w-6 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Form (Matches MERN-Auth-System EXACTLY, No White Card Box) */}
      <div 
        className="auth-form-panel w-full md:w-1/2 lg:w-7/12 flex items-center justify-center p-6 md:p-12"
        style={{ opacity: 1, visibility: 'visible' }}
      >
        <div 
          className="w-full max-w-[450px]"
          style={{ opacity: 1, visibility: 'visible' }}
        >
          {!mfaRequired ? (
            <div 
              className="w-full p-5 rounded-md text-gray-900"
              style={{ opacity: 1, visibility: 'visible', color: '#111827' }}
            >
              {/* Back to website — visible on white bg above the heading */}
              <div style={{ marginBottom: '20px' }}>
                <Link
                  href="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#64748b',
                    textDecoration: 'none',
                    padding: '6px 14px 6px 10px',
                    borderRadius: '9999px',
                    border: '1px solid #e2e8f0',
                    background: '#f8fafc',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e: any) => {
                    e.currentTarget.style.background = '#f1f5f9';
                    e.currentTarget.style.color = '#0f172a';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                  }}
                  onMouseLeave={(e: any) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.color = '#64748b';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}
                >
                  <span style={{ fontSize: '15px' }}>&larr;</span>
                  Back to website
                </Link>
              </div>

              <h1 
                className="text-3xl tracking-tight text-gray-900 font-bold mb-2 text-center sm:text-left"
                style={{ opacity: 1, visibility: 'visible', color: '#111827', fontSize: '1.875rem', fontWeight: 700 }}
              >
                Log in
              </h1>
              <p 
                className="mb-8 text-center sm:text-left text-sm text-gray-500 font-normal"
                style={{ opacity: 1, visibility: 'visible', color: '#6b7280', fontSize: '0.875rem' }}
              >
                Don't have an account?{' '}
                <Link 
                  className="text-[#7e57c2] hover:underline" 
                  href={`/signup?redirect=${encodeURIComponent(redirectTarget)}`}
                  style={{ color: '#7e57c2', fontWeight: 500 }}
                >
                  Sign up
                </Link>
              </p>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ opacity: 1, visibility: 'visible' }}>
                <div className="mb-4">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
                    style={{ display: 'block', width: '100%', height: '48px', minHeight: '48px', padding: '0 16px', fontSize: '15px', lineHeight: '48px', color: '#111827', backgroundColor: '#f3f4f6', borderColor: '#e5e7eb', borderRadius: '8px', borderWidth: '1px', boxSizing: 'border-box' }}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
                    style={{ display: 'block', width: '100%', height: '48px', minHeight: '48px', padding: '0 16px', fontSize: '15px', lineHeight: '48px', color: '#111827', backgroundColor: '#f3f4f6', borderColor: '#e5e7eb', borderRadius: '8px', borderWidth: '1px', boxSizing: 'border-box' }}
                  />
                </div>

                <div className="mb-6 flex w-full items-center justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    style={{ color: '#6b7280' }}
                  >
                    Forgot your password?
                  </Link>
                </div>

                <button
                  disabled={isPending}
                  type="submit"
                  className="auth-btn-primary w-full text-[15px] h-12 bg-[#7e57c2] hover:bg-[#6847a3] text-white rounded-lg font-semibold transition-colors flex items-center justify-center cursor-pointer shadow-sm disabled:opacity-70"
                  style={{ display: 'flex', width: '100%', height: '48px', minHeight: '48px', alignItems: 'center', justifyContent: 'center', backgroundColor: '#7e57c2', color: '#ffffff', fontSize: '15px', fontWeight: 600, borderRadius: '8px', border: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
                >
                  {isPending && <Loader className="animate-spin mr-2 w-4 h-4" />}
                  Log in
                </button>

                <div className="my-8 flex items-center justify-center">
                  <div className="h-px w-full bg-gray-200" />
                  <span 
                    className="mx-4 text-xs text-gray-400 font-normal whitespace-nowrap"
                    style={{ color: '#9ca3af' }}
                  >
                    Or register with
                  </span>
                  <div className="h-px w-full bg-gray-200" />
                </div>
              </form>

              <div className="flex gap-4 w-full" style={{ display: 'flex', gap: '16px', width: '100%' }}>
                <button
                  type="button"
                  onClick={() => {
                    setEmail('mausam@sanjeevni.ai');
                    setPassword('Sanjeevni@2026');
                  }}
                  className="btn-secondary social-btn w-1/2 h-12 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium transition-colors cursor-pointer"
                  style={{ display: 'flex', width: '50%', height: '48px', minHeight: '48px', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', color: '#374151', borderColor: '#d1d5db', fontSize: '14px', fontWeight: 500, borderRadius: '8px', borderWidth: '1px', boxSizing: 'border-box', cursor: 'pointer' }}
                >
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEmail('mausam@sanjeevni.ai');
                    setPassword('Sanjeevni@2026');
                  }}
                  className="btn-secondary social-btn w-1/2 h-12 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium transition-colors cursor-pointer"
                  style={{ display: 'flex', width: '50%', height: '48px', minHeight: '48px', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', color: '#374151', borderColor: '#d1d5db', fontSize: '14px', fontWeight: 500, borderRadius: '8px', borderWidth: '1px', boxSizing: 'border-box', cursor: 'pointer' }}
                >
                  Apple
                </button>
              </div>

              {/* Demo Quick Test Pill */}
              <div 
                className="mt-6 p-3 rounded-lg border flex items-center justify-between text-xs"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', width: '100%', borderRadius: '8px', border: '1px solid #ddd6fe', backgroundColor: '#f5f3ff', color: '#4c1d95', fontSize: '13px', marginTop: '24px', boxSizing: 'border-box' }}
              >
                <span>Demo: <strong style={{ color: '#6d28d9' }}>mausam@sanjeevni.ai</strong></span>
                <button
                  type="button"
                  onClick={() => {
                    setEmail('mausam@sanjeevni.ai');
                    setPassword('Sanjeevni@2026');
                  }}
                  className="font-semibold underline cursor-pointer"
                  style={{ all: 'revert', background: 'none', border: 'none', color: '#7e57c2', cursor: 'pointer', fontWeight: 700, padding: 0 }}
                >
                  Autofill
                </button>
              </div>

              <p 
                className="text-xs text-gray-400 font-normal mt-8 text-center sm:text-left"
                style={{ color: '#9ca3af' }}
              >
                By signing in, you agree to our{' '}
                <a className="text-[#7e57c2] hover:underline" href="#" style={{ color: '#7e57c2' }}>
                  Terms & Conditions
                </a>
              </p>
            </div>
          ) : (
            /* MFA Verification Form */
            <div 
              className="w-full p-5 rounded-md text-gray-900"
              style={{ opacity: 1, visibility: 'visible', color: '#111827' }}
            >
              <h1 
                className="text-3xl tracking-tight text-gray-900 font-bold mb-2 text-center sm:text-left"
                style={{ opacity: 1, visibility: 'visible', color: '#111827' }}
              >
                Verify Two-Factor Auth
              </h1>
              <p 
                className="mb-8 text-center sm:text-left text-sm text-gray-500 font-normal"
                style={{ opacity: 1, visibility: 'visible', color: '#6b7280' }}
              >
                Enter the 6-digit code from your authenticator app for{' '}
                <strong style={{ color: '#111827' }}>{email}</strong>.
              </p>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleMfaSubmit} style={{ opacity: 1, visibility: 'visible' }}>
                <div className="flex gap-2 justify-center mb-6" onPaste={handlePinPaste}>
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      id={`pin-slot-${index}`}
                      type="text"
                      maxLength={1}
                      inputMode="numeric"
                      value={pin[index]}
                      onChange={(e) => handlePinChange(index, e.target.value)}
                      onKeyDown={(e) => handlePinKeyDown(index, e)}
                      className="w-11 h-12 text-center text-xl font-bold bg-gray-100 border border-gray-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
                      style={{ color: '#111827', backgroundColor: '#f3f4f6', borderColor: '#e5e7eb', fontSize: '20px', padding: '0', borderRadius: '8px', borderWidth: '1px' }}
                    />
                  ))}
                </div>

                <button
                  disabled={isPending || pin.join('').length < 6}
                  type="submit"
                  className="w-full text-[15px] h-12 bg-[#7e57c2] hover:bg-[#6847a3] text-white rounded-lg font-semibold transition-colors flex items-center justify-center cursor-pointer shadow-sm disabled:opacity-50"
                  style={{ backgroundColor: '#7e57c2', color: '#ffffff', fontSize: '15px', borderRadius: '8px', border: 'none' }}
                >
                  {isPending && <Loader className="animate-spin mr-2 w-4 h-4" />}
                  Confirm & Authenticate
                </button>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => setMfaRequired(false)}
                    className="text-xs text-gray-500 hover:text-gray-800 underline cursor-pointer"
                    style={{ color: '#6b7280' }}
                  >
                    &larr; Back to login
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen flex items-center justify-center bg-[#f4f6f8] text-slate-700">
        <Loader size={32} className="animate-spin text-[#7e57c2]" />
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
