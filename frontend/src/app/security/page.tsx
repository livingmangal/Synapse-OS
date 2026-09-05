'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import SecuritySessionsPanel from '@/components/orchestrator/SecuritySessionsPanel';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronLeft, Loader2, Shield } from 'lucide-react';

export default function SecurityPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login?redirect=/security');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ECE4DA',
      }}>
        <Loader2 size={36} className="animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      <Header />
      <main style={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 16px' }}>
          <Link
            href="/orchestrator-agent"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: 600,
              marginBottom: '12px',
            }}
          >
            <ChevronLeft size={16} /> Return to Orchestrator OS
          </Link>
        </div>
        <SecuritySessionsPanel />
      </main>
      <Footer />
    </div>
  );
}
