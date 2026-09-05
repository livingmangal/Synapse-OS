'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { Loader, AlertCircle, MailCheckIcon } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setError(null);
    setIsPending(true);

    try {
      const res = await fetch('/api/v1/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();
      setIsPending(false);

      if (!res.ok) {
        setError(data.error || 'Failed to send reset email');
        return;
      }

      setIsSent(true);
    } catch (err: any) {
      setIsPending(false);
      setError(err.message || 'Network error');
    }
  };

  return (
    <div 
      className="auth-root w-full min-h-screen flex items-center justify-center bg-[#f4f6f8] p-6"
      style={{ opacity: 1, visibility: 'visible', backgroundColor: '#f4f6f8' }}
    >
      <div className="w-full max-w-[420px] bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <div className="text-center mb-6">
          <span className="font-bold text-lg tracking-widest text-[#0284c7]">
            SANJEEVNI OS
          </span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">
            Reset Password
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your email to receive a password reset link and code via Resend.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {!isSent ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="email"
                required
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2]"
                style={{ fontSize: '15px', borderRadius: '8px', borderWidth: '1px' }}
              />
            </div>

            <button
              disabled={isPending}
              type="submit"
              className="w-full h-12 bg-[#7e57c2] hover:bg-[#6847a3] text-white rounded-lg font-semibold transition-colors flex items-center justify-center cursor-pointer disabled:opacity-70"
              style={{ fontSize: '15px', borderRadius: '8px', border: 'none' }}
            >
              {isPending && <Loader className="animate-spin mr-2 w-4 h-4" />}
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="text-center py-4">
            <MailCheckIcon size={44} className="text-emerald-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 text-lg">Check your inbox</h3>
            <p className="text-sm text-gray-500 mt-1">
              If an account exists for <strong>{email}</strong>, we have dispatched a password reset link and code.
            </p>
            <div className="mt-6">
              <Link
                href={`/reset-password?email=${encodeURIComponent(email)}`}
                className="text-sm font-semibold text-[#7e57c2] hover:underline"
              >
                Enter reset code &rarr;
              </Link>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <Link href="/login" className="text-xs text-gray-500 hover:text-gray-800">
            &larr; Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
