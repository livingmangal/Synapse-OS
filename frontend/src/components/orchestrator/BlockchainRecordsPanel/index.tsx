'use client';

import React, { useState } from 'react';
import { Fingerprint, FileCheck2, Link as LinkIcon, ShieldCheck, Download, CheckCircle2, Wallet, AlertCircle, Zap, ChevronDown } from 'lucide-react';
import { useBlockchainRecords, UseBlockchainRecordsProps } from './useBlockchainRecords';
import AbhaGenerator from './AbhaGenerator';
import RecordsList from './RecordsList';
import { MOCK_HEALTH_PROFILES } from '@/data/mockHealthProfiles';

export default function BlockchainRecordsPanel({
  patient,
  activeProfile,
  selectedProfileId,
  onSelectProfile
}: UseBlockchainRecordsProps) {
  const state = useBlockchainRecords({ patient, activeProfile, selectedProfileId, onSelectProfile });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeMatchedProfile = MOCK_HEALTH_PROFILES.find(p => p.profileId === state.currentProfileId) || MOCK_HEALTH_PROFILES[0];

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: '"Times New Roman", Times, serif'
    }}>
      
      {/* 0. Telemetry Dataset & Citizen ABHA Profile Switcher Ribbon */}
      <div style={{
        background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #eff6ff 100%)',
        borderRadius: '18px',
        border: '1px solid #fbcfe8',
        padding: '12px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        boxShadow: '0 2px 10px rgba(219, 39, 119, 0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: '#ffffff',
            border: '1px solid #fbcfe8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#db2777'
          }}>
            <Fingerprint size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#0f172a', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Active ABDM Citizen: <b style={{ color: '#db2777' }}>{state.name}</b>
              </span>
              <span style={{
                fontSize: '9.5px',
                fontWeight: 800,
                padding: '2px 7px',
                borderRadius: '6px',
                background: activeMatchedProfile.badge.bg,
                color: activeMatchedProfile.badge.color,
                border: `1px solid ${activeMatchedProfile.badge.border}`,
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                {activeMatchedProfile.badge.label}
              </span>
            </div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>
              ABHA: <b style={{ color: '#0f172a' }}>{state.abhaData?.abha_number || activeMatchedProfile.patient.abhaId}</b> • DOB: <b>{state.dob || activeMatchedProfile.patient.dob || '2002'}</b> • YOB: <b>{state.yearOfBirth}</b>
            </div>
          </div>
        </div>

        {/* Profile Dropdown Selector */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '10px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              fontSize: '11.5px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            <Zap size={13} color="#db2777" />
            <span>Select Citizen (My Condition)</span>
            <ChevronDown size={13} color="#64748b" />
          </button>

          {isDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: 0,
              width: '320px',
              background: '#ffffff',
              borderRadius: '14px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
              zIndex: 50,
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              {MOCK_HEALTH_PROFILES.map((p) => {
                const isSelected = p.profileId === state.currentProfileId;
                return (
                  <div
                    key={p.profileId}
                    onClick={() => {
                      state.handleSwitchProfile(p.profileId);
                      setIsDropdownOpen(false);
                    }}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      background: isSelected ? '#fdf2f8' : 'transparent',
                      border: isSelected ? '1px solid #fbcfe8' : '1px solid transparent',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                    onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = '#f8fafc'; }}
                    onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = 'transparent'; }}
                  >
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: isSelected ? '#db2777' : '#0f172a' }}>
                        {p.patient.name}
                      </div>
                      <div style={{ fontSize: '10px', color: '#64748b' }}>
                        DOB: {p.patient.dob || '2002'} • {p.patient.abhaId}
                      </div>
                    </div>
                    <span style={{
                      fontSize: '9px',
                      fontWeight: 800,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: p.badge.bg,
                      color: p.badge.color
                    }}>
                      {p.badge.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 800, margin: 0, color: '#0f172a', fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
            Health Records & Blockchain Passport
          </h1>
          <p style={{ color: '#64748b', fontSize: '13.5px', margin: '4px 0 0 0' }}>
            ABDM Integration • Cryptographic Verification • Decentralized Registry
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {state.walletError && (
            <span style={{ fontSize: '11px', color: '#e11d48', fontWeight: 600 }}>{state.walletError}</span>
          )}
          
          <button
            onClick={state.connectBurner}
            disabled={state.connecting}
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              background: state.walletMode === 'burner' && state.walletAddress ? '#f1f5f9' : '#ffffff',
              border: '1px solid #cbd5e1',
              color: '#334155',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            <Wallet size={12} />
            Burner
          </button>
          
          <button
            onClick={state.connectMetaMask}
            disabled={state.connecting}
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              background: state.walletMode === 'metamask' && state.walletAddress ? '#f1f5f9' : '#ffffff',
              border: '1px solid #cbd5e1',
              color: '#f5841f',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            🦊 MetaMask
          </button>

          <span style={{ 
            padding: '6px 14px', 
            borderRadius: '9999px', 
            background: state.contractOk ? '#ecfdf5' : '#fef2f2', 
            border: `1px solid ${state.contractOk ? '#a7f3d0' : '#fecaca'}`, 
            color: state.contractOk ? '#059669' : '#ef4444', 
            fontSize: '11px', 
            fontWeight: 800,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            {state.contractOk ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
            {state.contractOk ? 'Hardhat Ready' : 'Node Offline'}
          </span>
          
          {state.walletAddress && (
            <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, fontFamily: 'monospace' }}>
              {state.walletAddress.slice(0, 6)}...{state.walletAddress.slice(-4)}
            </span>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        flexWrap: 'wrap', 
        background: '#ffffff', 
        border: '1px solid #e2e8f0', 
        padding: '12px 18px', 
        borderRadius: '16px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
      }}>
        {[
          { id: 'abha', label: 'National ABHA ID', icon: Fingerprint },
          { id: 'passport', label: 'QR Health Passport', icon: FileCheck2 },
          { id: 'blockchain', label: 'On-Chain Records', icon: LinkIcon },
          { id: 'verify', label: 'Verify Integrity', icon: ShieldCheck }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => state.setActiveTab(t.id as any)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 18px',
              borderRadius: '10px',
              backgroundColor: state.activeTab === t.id ? '#db2777' : '#f8fafc',
              color: state.activeTab === t.id ? '#ffffff' : '#64748b',
              border: '1px solid ' + (state.activeTab === t.id ? '#be185d' : '#e2e8f0'),
              cursor: 'pointer',
              fontWeight: state.activeTab === t.id ? 800 : 600,
              fontSize: '12px',
              transition: 'all 0.15s ease',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            <t.icon size={14} />
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '32px', boxShadow: '0 8px 24px rgba(0,0,0,0.03)' }}>
        
        {state.activeTab === 'abha' && <AbhaGenerator state={state} />}
        
        {state.activeTab === 'passport' && (
          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#0f172a', fontWeight: 800, fontFamily: 'system-ui, -apple-system, sans-serif' }}>Verifiable Digital Health Passport</h2>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px', lineHeight: 1.5 }}>
              Compiles clinical triage results, vital trends, active prescriptions, and cryptographic QR signature for <b>{state.name}</b> into a single downloadable PDF.
            </p>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
              <h4 style={{ margin: '0 0 16px 0', color: '#db2777', fontWeight: 800, fontFamily: 'system-ui, -apple-system, sans-serif' }}>Included Clinical Payload for {state.name}:</h4>
              <ul style={{ color: '#334155', fontSize: '14px', lineHeight: '2', margin: 0, paddingLeft: '20px' }}>
                <li>✓ Full patient demographic header & ABHA ID registration (<b>{state.abhaData?.abha_number || '91-7294-8102-5309'}</b>)</li>
                <li>✓ Date of Birth: <b>{state.dob || state.yearOfBirth}</b> • PM-JAY Scheme Coverage Active</li>
                <li>✓ Clinical triage urgency level (Red/Amber/Green) & AI Council consensus</li>
                <li>✓ Physiological vital benchmarks (Blood Pressure, Heart Rate, SpO2, Fasting Glucose)</li>
                <li>✓ Active medication schedule & dosage safety check</li>
                <li>✓ <b>Tamper-Evident QR Code Stamp</b> linking to IPFS & Ethereum testnet contract</li>
              </ul>
            </div>

            <button
              onClick={state.handleDownloadPdf}
              disabled={state.downloading}
              style={{
                padding: '14px 28px',
                borderRadius: '12px',
                background: '#db2777',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: '14px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(219, 39, 119, 0.3)'
              }}
            >
              <Download size={16} />
              {state.downloading ? 'Compiling PDF with ReportLab...' : `Download Official Health Passport for ${state.name} (PDF)`}
            </button>
          </div>
        )}

        {(state.activeTab === 'blockchain' || state.activeTab === 'verify') && <RecordsList state={state} />}
        
      </div>
    </div>
  );
}
