import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function RecordsList({ state }: { state: any }) {
  return (
    <>
      {/* Tab 3: Blockchain */}
      {state.activeTab === 'blockchain' && (
        <div>
          <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#0f172a', fontWeight: 800, fontFamily: 'system-ui, -apple-system, sans-serif' }}>On-Chain Medical Record Registry (Hardhat + IPFS)</h2>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '28px', lineHeight: 1.5 }}>
            Records are hashed with SHA-256, pinned to IPFS, and anchored to the <code>MedicalRecords.sol</code> smart contract.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {state.records.map((r: any, i: number) => (
              <div key={i} style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '14px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                  <span style={{ fontWeight: 800, color: '#db2777', fontSize: '15px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>{r.type}</span>
                  <span style={{ fontSize: '11px', color: '#059669', background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '4px 10px', borderRadius: '20px', fontWeight: 700, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                    ✓ On-Chain Verified
                  </span>
                </div>
                <div style={{ fontSize: '14px', color: '#475569', marginBottom: '8px' }}>Patient: <b style={{ color: '#0f172a' }}>{r.patient}</b> (ABHA: {r.abha})</div>
                <div style={{ fontSize: '12px', color: '#64748b', wordBreak: 'break-all', marginBottom: '4px', fontFamily: 'monospace' }}>IPFS CID: <span style={{ color: '#3b82f6' }}>{r.cid}</span></div>
                <div style={{ fontSize: '12px', color: '#64748b', wordBreak: 'break-all', fontFamily: 'monospace' }}>SHA-256 Digest: {r.hash}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Verify */}
      {state.activeTab === 'verify' && (
        <div>
          <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#0f172a', fontWeight: 800, fontFamily: 'system-ui, -apple-system, sans-serif' }}>Verify Record Cryptographic Authenticity</h2>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px', lineHeight: 1.5 }}>
            Enter any IPFS CID or document SHA-256 hash to verify against the smart contract registry.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="e.g. QmZ4tDuvesekSs4qM5ZBKpXiZGun7S2CYtEZRB3DYXkjGx"
              value={state.verifyCid}
              onChange={(e) => state.setVerifyCid(e.target.value)}
              style={{ flex: 1, minWidth: '300px', padding: '14px 16px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '14px', outline: 'none' }}
            />
            <button
              onClick={state.handleVerify}
              style={{ 
                padding: '14px 28px', 
                borderRadius: '10px', 
                background: '#10b981', 
                color: '#fff', 
                border: 'none', 
                cursor: 'pointer', 
                fontWeight: 800,
                fontSize: '14px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <ShieldCheck size={16} />
              Verify Hash
            </button>
          </div>

          {state.verifyResult && (
            <div style={{ background: '#ecfdf5', border: '1px solid #34d399', borderRadius: '14px', padding: '24px' }}>
              <h4 style={{ margin: '0 0 12px 0', color: '#059669', fontSize: '16px', fontWeight: 800, fontFamily: 'system-ui, -apple-system, sans-serif', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} />
                Integrity Verified: Document Untampered
              </h4>
              <p style={{ color: '#047857', fontSize: '14.5px', margin: '0 0 16px 0', lineHeight: 1.5 }}>{state.verifyResult.message}</p>
              <div style={{ fontSize: '12px', color: '#065f46', background: '#d1fae5', padding: '10px 14px', borderRadius: '8px', display: 'inline-block', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Smart Contract Status: <b style={{ color: '#064e3b' }}>RECORD_MATCH_FOUND</b> • Access Status: <b style={{ color: '#064e3b' }}>PUBLIC_VERIFIABLE</b>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
