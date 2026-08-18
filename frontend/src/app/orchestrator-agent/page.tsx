'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export default function OrchestratorAgentPage() {
  const [query, setQuery] = useState('I have a mild headache and fever, can I take ibuprofen with warfarin?');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const presets = [
    'I have a mild headache and fever, can I take ibuprofen with warfarin?',
    'Analyze my chest x-ray scan for pneumonia signs',
    'Feeling severe stress, insomnia, and panic attacks lately',
    'What generic alternatives exist for Augmentin and Dolo under PM-JAY?'
  ];

  const handleRunOrchestration = async (customQuery?: string) => {
    const q = customQuery || query;
    if (!q.trim()) return;
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch(`${API_BASE}/api/orchestrate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, channel: 'orchestrator_console' })
      });
      if (res.ok) {
        const data = await res.json();
        setResult(data);
      } else {
        setErrorMessage(`Server responded with status: ${res.status}`);
      }
    } catch (err) {
      setErrorMessage(`Unable to connect to backend at ${API_BASE}. Ensure FastAPI server is running.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#f8fafc', padding: '40px 24px', fontFamily: 'system-ui, sans-serif', position: 'relative', zIndex: 10 }}>
      <style>{`
        #video-splash, #page-loader, .animated-splash-page, .transition, #mouse, header, .grid.wrapper {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        @media (max-width: 850px) {
          .orchestrator-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <Link href="/" style={{ fontSize: '13px', color: '#38bdf8', textDecoration: 'none', display: 'inline-block', marginBottom: '8px' }}>
              ← Return to Sanjeevani OS
            </Link>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0, color: '#f8fafc' }}>
              Sanjeevani Multi-Agent Swarm Orchestrator
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 0 0' }}>
              LangGraph StateGraph Engine • Deterministic Safety Gate • AI Council Consensus Verification
            </p>
          </div>
          <span style={{ padding: '6px 14px', borderRadius: '20px', background: 'rgba(5, 150, 105, 0.2)', border: '1px solid #059669', color: '#34d399', fontSize: '12px', fontWeight: 'bold' }}>
            ● Orchestrator Online
          </span>
        </div>

        {/* Preset Query Chips */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => { setQuery(p); handleRunOrchestration(p); }}
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                borderRadius: '8px',
                background: '#1f2937',
                color: '#cbd5e1',
                border: '1px solid #374151',
                cursor: 'pointer'
              }}
            >
              💡 {p.length > 50 ? p.slice(0, 50) + '...' : p}
            </button>
          ))}
        </div>

        {/* Input & Execution Bar */}
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '16px', padding: '24px', marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '8px', fontWeight: 'bold' }}>
            Dispatch Multi-Agent Clinical Query:
          </label>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleRunOrchestration()}
              style={{ flex: 1, minWidth: '280px', padding: '12px 16px', borderRadius: '8px', background: '#0b0f19', border: '1px solid #374151', color: '#fff', fontSize: '14px' }}
            />
            <button
              onClick={() => handleRunOrchestration()}
              disabled={loading}
              style={{ padding: '12px 24px', borderRadius: '8px', background: '#0284c7', color: '#fff', border: 'none', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Coordinating Swarm...' : '⚡ Execute Swarm'}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#fca5a5', padding: '12px 16px', borderRadius: '10px', marginBottom: '20px', fontSize: '13px' }}>
            ⚠️ {errorMessage}
          </div>
        )}

        {/* Results & Live Agent Trace */}
        {result && (
          <div className="orchestrator-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
            
            {/* Left Column: Final Response */}
            <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ margin: 0, fontSize: '16px', color: '#38bdf8' }}>Consolidated Clinical Output</h3>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>Session: {result.session_id}</span>
              </div>
              <div style={{ background: '#0b0f19', border: '1px solid #1e293b', borderRadius: '12px', padding: '18px', fontSize: '14px', lineHeight: '1.7', whiteSpace: 'pre-wrap', color: '#cbd5e1' }}>
                {result.final_response}
              </div>
            </div>

            {/* Right Column: Agent Execution Trace */}
            <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#10b981' }}>Live Agent DAG Execution Trace</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {result.trace?.map((step: any, i: number) => (
                  <div key={i} style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '10px', padding: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 'bold', color: '#38bdf8', fontSize: '13px' }}>{step.agent_name}</span>
                      <span style={{ fontSize: '11px', color: '#94a3b8', background: '#0f172a', padding: '2px 8px', borderRadius: '6px' }}>
                        {step.duration_ms}ms
                      </span>
                    </div>
                    <div style={{ fontSize: '13px', color: '#cbd5e1' }}>{step.action}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
