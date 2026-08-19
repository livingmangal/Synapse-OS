'use client';

import React from 'react';
import { Fingerprint, FileCheck2, Link as LinkIcon, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';
import { useBlockchainRecords } from './useBlockchainRecords';
import AbhaGenerator from './AbhaGenerator';
import RecordsList from './RecordsList';

export default function BlockchainRecordsPanel() {
  const state = useBlockchainRecords();

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: '"Times New Roman", Times, serif'
    }}>
      
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
          <span style={{ 
            padding: '6px 14px', 
            borderRadius: '9999px', 
            background: '#ecfdf5', 
            border: '1px solid #a7f3d0', 
            color: '#059669', 
            fontSize: '11px', 
            fontWeight: 800,
            fontFamily: 'system-ui, -apple-system, sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <CheckCircle2 size={12} />
            Hardhat & ABDM Connected
          </span>
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
              Compiles clinical triage results, vital trends, active prescriptions, and cryptographic QR signature into a single downloadable PDF.
            </p>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
              <h4 style={{ margin: '0 0 16px 0', color: '#db2777', fontWeight: 800, fontFamily: 'system-ui, -apple-system, sans-serif' }}>Included Clinical Payload:</h4>
              <ul style={{ color: '#334155', fontSize: '14px', lineHeight: '2', margin: 0, paddingLeft: '20px' }}>
                <li>✓ Full patient demographic header & ABHA ID registration</li>
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
              {state.downloading ? 'Compiling PDF with ReportLab...' : 'Download Official Health Passport (PDF)'}
            </button>
          </div>
        )}

        {(state.activeTab === 'blockchain' || state.activeTab === 'verify') && <RecordsList state={state} />}
        
      </div>
    </div>
  );
}
