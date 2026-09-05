'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Loader, AlertCircle, MailCheckIcon, ArrowRight } from 'lucide-react';

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

function SignUpContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = searchParams.get('redirect') || '/orchestrator-agent';

  const { register, verifyEmail, isAuthenticated, user } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Email Confirmation State
  const [enteredCode, setEnteredCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const [resendStatus, setResendStatus] = useState<string | null>(null);

  useEffect(() => {
    // Only redirect if the user is fully authenticated AND email is verified
    if (isAuthenticated && user?.isEmailVerified) {
      router.replace(redirectTarget);
    }
  }, [isAuthenticated, user, redirectTarget, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Password does not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsPending(true);

    try {
      const res = await register(name, email, password);
      setIsPending(false);

      if (!res.success) {
        setError(res.error || 'Failed to create account');
        return;
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setIsPending(false);
      setError(err.message || 'Registration failed');
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enteredCode) {
      setVerifyError('Please enter your 6-digit confirmation code.');
      return;
    }

    setVerifyError(null);
    setIsVerifying(true);

    try {
      const res = await verifyEmail(enteredCode, email);
      setIsVerifying(false);

      if (!res.success) {
        setVerifyError(res.error || 'Verification failed. Please check the code.');
        return;
      }

      router.replace(redirectTarget);
    } catch (err: any) {
      setIsVerifying(false);
      setVerifyError(err.message || 'Verification error');
    }
  };

  const handleResendCode = async () => {
    setResendStatus('Sending fresh code via Resend...');
    try {
      const res = await fetch('/api/v1/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setResendStatus('A fresh confirmation code was dispatched to your email!');
      } else {
        setResendStatus(data.error || 'Failed to resend code');
      }
    } catch (err: any) {
      setResendStatus('Network error resending code');
    }
    setTimeout(() => setResendStatus(null), 4000);
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
          {!isSubmitted ? (
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
                Create an account
              </h1>
              <p 
                className="mb-8 text-center sm:text-left text-sm text-gray-500 font-normal"
                style={{ opacity: 1, visibility: 'visible', color: '#6b7280', fontSize: '0.875rem' }}
              >
                Already have an account?{' '}
                <Link 
                  className="text-[#7e57c2] hover:underline" 
                  href={`/login?redirect=${encodeURIComponent(redirectTarget)}`}
                  style={{ color: '#7e57c2', fontWeight: 500 }}
                >
                  Log in
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
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
                    style={{ opacity: 1, visibility: 'visible', color: '#111827', backgroundColor: '#f3f4f6', borderColor: '#e5e7eb', fontSize: '15px', padding: '0 1rem', borderRadius: '8px', borderWidth: '1px' }}
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
                    style={{ opacity: 1, visibility: 'visible', color: '#111827', backgroundColor: '#f3f4f6', borderColor: '#e5e7eb', fontSize: '15px', padding: '0 1rem', borderRadius: '8px', borderWidth: '1px' }}
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
                    style={{ opacity: 1, visibility: 'visible', color: '#111827', backgroundColor: '#f3f4f6', borderColor: '#e5e7eb', fontSize: '15px', padding: '0 1rem', borderRadius: '8px', borderWidth: '1px' }}
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    required
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
                    style={{ opacity: 1, visibility: 'visible', color: '#111827', backgroundColor: '#f3f4f6', borderColor: '#e5e7eb', fontSize: '15px', padding: '0 1rem', borderRadius: '8px', borderWidth: '1px' }}
                  />
                </div>

                <button
                  disabled={isPending}
                  type="submit"
                  className="auth-btn-primary w-full text-[15px] h-12 bg-[#7e57c2] hover:bg-[#6847a3] text-white rounded-lg font-semibold transition-colors flex items-center justify-center cursor-pointer shadow-sm disabled:opacity-70"
                  style={{ display: 'flex', width: '100%', height: '48px', minHeight: '48px', alignItems: 'center', justifyContent: 'center', backgroundColor: '#7e57c2', color: '#ffffff', fontSize: '15px', fontWeight: 600, borderRadius: '8px', border: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
                >
                  {isPending && <Loader className="animate-spin mr-2 w-4 h-4" />}
                  Create account
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
                  className="btn-secondary social-btn w-1/2 h-12 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium transition-colors cursor-pointer"
                  style={{ display: 'flex', width: '50%', height: '48px', minHeight: '48px', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', color: '#374151', borderColor: '#d1d5db', fontSize: '14px', fontWeight: 500, borderRadius: '8px', borderWidth: '1px', boxSizing: 'border-box', cursor: 'pointer' }}
                >
                  Google
                </button>
                <button
                  type="button"
                  className="btn-secondary social-btn w-1/2 h-12 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium transition-colors cursor-pointer"
                  style={{ display: 'flex', width: '50%', height: '48px', minHeight: '48px', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', color: '#374151', borderColor: '#d1d5db', fontSize: '14px', fontWeight: 500, borderRadius: '8px', borderWidth: '1px', boxSizing: 'border-box', cursor: 'pointer' }}
                >
                  Apple
                </button>
              </div>

              <p 
                className="text-xs text-gray-400 font-normal mt-8 text-center sm:text-left"
                style={{ color: '#9ca3af' }}
              >
                By signing up, you agree to our{' '}
                <a className="text-[#7e57c2] hover:underline" href="#" style={{ color: '#7e57c2' }}>
                  Terms & Conditions
                </a>
              </p>
            </div>
          ) : (
            <div className="w-full p-5 rounded-md text-gray-900" style={{ color: '#111827' }}>
              <div className="size-[48px] text-emerald-600 mb-2">
                <MailCheckIcon size={44} className="animate-bounce" />
              </div>
              <h2 className="text-2xl tracking-tight text-gray-900 font-bold mb-1" style={{ color: '#111827' }}>
                Verify your Email
              </h2>
              <p className="text-sm text-gray-500 font-normal mb-6" style={{ color: '#6b7280' }}>
                We dispatched a 6-digit confirmation code to <strong style={{ color: '#0f172a' }}>{email}</strong> via Resend.
              </p>

              {verifyError && (
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{verifyError}</span>
                </div>
              )}

              {resendStatus && (
                <div className="mb-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 text-[#0284c7] text-sm flex items-center gap-2">
                  <span>{resendStatus}</span>
                </div>
              )}

              <form onSubmit={handleVerifyCode}>
                <div className="mb-4">
                  <input
                    type="text"
                    required
                    placeholder="Enter 6-digit confirmation code"
                    value={enteredCode}
                    onChange={(e) => setEnteredCode(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
                    style={{ opacity: 1, visibility: 'visible', color: '#111827', backgroundColor: '#f3f4f6', borderColor: '#e5e7eb', fontSize: '15px', padding: '0 1rem', borderRadius: '8px', borderWidth: '1px' }}
                  />
                </div>

                <button
                  disabled={isVerifying}
                  type="submit"
                  className="w-full text-[15px] h-12 bg-[#7e57c2] hover:bg-[#6847a3] text-white rounded-lg font-semibold transition-colors flex items-center justify-center cursor-pointer shadow-sm disabled:opacity-70"
                  style={{ opacity: 1, visibility: 'visible', backgroundColor: '#7e57c2', color: '#ffffff', fontSize: '15px', borderRadius: '8px', border: 'none' }}
                >
                  {isVerifying && <Loader className="animate-spin mr-2 w-4 h-4" />}
                  Confirm Code & Launch OS
                </button>
              </form>

              <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="text-[#7e57c2] hover:underline font-semibold cursor-pointer"
                >
                  Resend confirmation code
                </button>
                <Link
                  href={`/login?redirect=${encodeURIComponent(redirectTarget)}`}
                  className="text-gray-500 hover:text-gray-900"
                >
                  Back to login &rarr;
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen flex items-center justify-center bg-[#f4f6f8] text-slate-700">
        <Loader size={32} className="animate-spin text-[#7e57c2]" />
      </div>
    }>
      <SignUpContent />
    </Suspense>
  );
}
