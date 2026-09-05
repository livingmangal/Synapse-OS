'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Loader, AlertCircle, CheckCircle2 } from 'lucide-react';

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const codeParam = searchParams.get('code') || '';

  const [code, setCode] = useState(codeParam);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (codeParam) setCode(codeParam);
  }, [codeParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) {
      setError('Reset code is required');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError(null);
    setIsPending(true);

    try {
      const res = await fetch('/api/v1/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim(), password }),
      });

      const data = await res.json();
      setIsPending(false);

      if (!res.ok) {
        setError(data.error || 'Failed to reset password');
        return;
      }

      setIsSuccess(true);
      setTimeout(() => {
        router.replace('/orchestrator-agent');
      }, 1500);
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
            Set New Password
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Enter your reset code and choose a new secure password.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {!isSuccess ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                required
                placeholder="6-digit reset code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2]"
                style={{ fontSize: '15px', borderRadius: '8px', borderWidth: '1px' }}
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                required
                placeholder="New password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2]"
                style={{ fontSize: '15px', borderRadius: '8px', borderWidth: '1px' }}
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                required
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              Save Password & Login
            </button>
          </form>
        ) : (
          <div className="text-center py-4">
            <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 text-lg">Password Changed!</h3>
            <p className="text-sm text-gray-500 mt-1">
              Your password has been updated. Logging into Sanjeevni OS...
            </p>
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

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen flex items-center justify-center bg-[#f4f6f8]">
        <Loader size={32} className="animate-spin text-[#7e57c2]" />
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}
