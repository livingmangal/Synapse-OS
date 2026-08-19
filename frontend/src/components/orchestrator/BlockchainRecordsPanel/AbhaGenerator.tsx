import React from 'react';
import { Fingerprint, RefreshCw } from 'lucide-react';

export default function AbhaGenerator({ state }: { state: any }) {
  return (
    <div>
      <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#0f172a', fontWeight: 800, fontFamily: 'system-ui, -apple-system, sans-serif' }}>Ayushman Bharat Health Account (ABHA) Generator</h2>
      <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '28px', lineHeight: 1.5 }}>
        Generate your official 14-digit ABDM-compliant health number to link hospital records, lab reports, and claim PM-JAY ₹5L annual coverage.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '20px', marginBottom: '32px', alignItems: 'flex-end' }}>
        <div>
          <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '8px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>Citizen Full Name</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => state.setName(e.target.value)}
            style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '8px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>Year of Birth</label>
          <input
            type="text"
            value={state.yearOfBirth}
            onChange={(e) => state.setYearOfBirth(e.target.value)}
            style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>
        <div>
          <button
            onClick={state.handleGenerateAbha}
            disabled={state.loading}
            style={{ 
              padding: '12px 24px', 
              borderRadius: '10px', 
              background: '#10b981', 
              color: '#fff', 
              border: 'none', 
              cursor: 'pointer', 
              fontWeight: 800,
              fontSize: '13px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {state.loading ? <RefreshCw size={14} className="animate-spin" /> : <Fingerprint size={14} />}
            {state.loading ? 'Generating...' : 'Generate ABHA ID'}
          </button>
        </div>
      </div>

      {state.abhaData && (
        <div style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)', border: '2px solid #fbcfe8', borderRadius: '16px', padding: '32px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#db2777', fontWeight: 800, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Government of India • National Health Authority
              </span>
              <h3 style={{ fontSize: '28px', margin: '8px 0 16px 0', color: '#0f172a', fontWeight: 800, fontFamily: 'system-ui, -apple-system, sans-serif' }}>{state.abhaData.name}</h3>
              <div style={{ fontSize: '24px', letterSpacing: '2px', fontWeight: 800, color: '#db2777', marginBottom: '12px', fontFamily: 'monospace' }}>
                {state.abhaData.abha_number}
              </div>
              <div style={{ fontSize: '14px', color: '#475569' }}>ABHA Address: <b style={{ color: '#0f172a' }}>{state.abhaData.abha_address}</b></div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ padding: '6px 14px', borderRadius: '12px', background: '#ecfdf5', color: '#059669', fontWeight: 800, fontSize: '11px', border: '1px solid #a7f3d0', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                ✓ PM-JAY VERIFIED
              </span>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '12px' }}>
                Coverage: <b style={{ color: '#0f172a', fontSize: '14px' }}>₹5,00,000 / Year</b>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
