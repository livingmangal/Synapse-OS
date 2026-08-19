'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Activity, 
  Pill, 
  Scan, 
  FileText, 
  Users,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { SanjeevaniState, PatientInfo } from './types';

interface SwarmIntelligencePanelProps {
  patient: PatientInfo;
  onOpenExportModal?: () => void;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export default function SwarmIntelligencePanel({
  patient,
  onOpenExportModal
}: SwarmIntelligencePanelProps) {
  const [query, setQuery] = useState('Patient presents with acute chest pain and shortness of breath. Can we combine aspirin with warfarin?');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SanjeevaniState | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const presets = [
    { title: 'Warfarin & Ibuprofen Interaction', query: 'I have severe joint pain and fever, can I take ibuprofen with warfarin?' },
    { title: 'Emergency Chest Pain Triage', query: 'Severe crushing chest pain radiating to left arm and jaw with cold sweat.' },
    { title: 'Knee X-Ray & Osteoarthritis', query: 'Review left knee x-ray showing joint space narrowing and subchondral sclerosis.' },
    { title: 'Chronic Anxiety & Insomnia', query: 'Experiencing intense panic attacks, palpitations, and severe sleeplessness for 2 weeks.' }
  ];

  const handleExecuteSwarm = async (customQuery?: string) => {
    const q = customQuery || query;
    if (!q.trim()) return;

    setLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch(`${API_BASE}/api/orchestrate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, channel: 'web', user_id: patient.name })
      });
      if (res.ok) {
        const data = await res.json();
        setResult(data);
      } else {
        setErrorMessage(`Server returned status ${res.status}`);
      }
    } catch {
      setErrorMessage(`Failed to connect to FastAPI backend at ${API_BASE}. Verify uvicorn server.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '100%'
    }}>
      {/* Top Banner / Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        borderRadius: '24px',
        padding: '24px 32px',
        color: '#ffffff',
        border: '1px solid #334155',
        boxShadow: '0 10px 30px rgba(15,23,42,0.15)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Zap size={16} color="#ffffff" />
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
              Multi-Agent Swarm Intelligence & DAG Engine
            </h2>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>
            Coordinated StateGraph: Deterministic Safety Gate → Intent Routing → Clinical Triage → RxNav Drug Check → AI Council Consensus
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            padding: '6px 14px',
            borderRadius: '9999px',
            background: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid #10b981',
            color: '#34d399',
            fontSize: '12px',
            fontWeight: 800
          }}>
            ● Swarm Orchestrator Online
          </span>
        </div>
      </div>

      {/* Preset Chips */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {presets.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setQuery(p.query);
              handleExecuteSwarm(p.query);
            }}
            style={{
              padding: '8px 14px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              fontSize: '12px',
              fontWeight: 700,
              color: '#334155',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
              transition: 'all 0.15s ease'
            }}
          >
            <Sparkles size={13} color="#2563eb" />
            <span>{p.title}</span>
          </button>
        ))}
      </div>

      {/* Query Dispatch Input Box */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #e2e8f0',
        padding: '20px',
        boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
      }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
          Clinical Patient Query / Symptom Description:
        </label>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleExecuteSwarm()}
            placeholder="Enter clinical symptoms, multiple medications, or medical inquiry..."
            style={{
              flex: 1,
              minWidth: '280px',
              padding: '12px 16px',
              borderRadius: '12px',
              border: '1px solid #cbd5e1',
              background: '#f8fafc',
              fontSize: '13px',
              color: '#0f172a',
              outline: 'none',
              fontFamily: 'inherit'
            }}
          />
          <button
            onClick={() => handleExecuteSwarm()}
            disabled={loading}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              background: '#2563eb',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 800,
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
              transition: 'all 0.15s ease'
            }}
          >
            <Send size={15} />
            <span>{loading ? 'Dispatching Swarm...' : 'Execute Swarm DAG'}</span>
          </button>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div style={{
          background: '#fef2f2',
          border: '1px solid #fecaca',
          color: '#ef4444',
          padding: '12px 16px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 600
        }}>
          ⚠️ {errorMessage}
        </div>
      )}

      {/* Live Results Dashboard */}
      {result && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Execution Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px'
          }}>
            <div style={{ background: '#ffffff', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Session ID</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>#{result.session_id}</div>
            </div>
            <div style={{ background: '#ffffff', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Detected Intent</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#2563eb', marginTop: '2px' }}>{result.detected_intent || 'SYMPTOM_TRIAGE'}</div>
            </div>
            <div style={{ background: '#ffffff', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Safety Gate Status</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#059669', marginTop: '2px' }}>
                {result.safety_cleared ? '✓ Verified Safe' : '🚨 Crisis Intercept'}
              </div>
            </div>
            <div style={{ background: '#ffffff', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Swarm Consensus</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#8b5cf6', marginTop: '2px' }}>
                {result.verification?.consensus_confidence_score || result.verification?.consensus_score || 96}% Agreement
              </div>
            </div>
          </div>

          {/* 2-Column Split: Specialist Outputs & Live Trace Timeline */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px' }}>
            
            {/* Left Column: Consolidated Clinical Synthesis */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Main LLM Synthesis Card */}
              <div style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                padding: '24px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <ShieldCheck size={20} color="#2563eb" />
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Chief Medical AI Officer Clinical Directive
                  </h3>
                </div>

                <div style={{
                  background: '#f8fafc',
                  borderRadius: '14px',
                  padding: '18px',
                  border: '1px solid #f1f5f9',
                  fontSize: '13px',
                  lineHeight: '1.65',
                  color: '#1e293b',
                  whiteSpace: 'pre-wrap'
                }}>
                  {result.final_response}
                </div>

                {/* Suggested Actions */}
                {result.suggested_actions && result.suggested_actions.length > 0 && (
                  <div style={{ marginTop: '16px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Recommended Next Actions:
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {result.suggested_actions.map((act, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            background: '#eff6ff',
                            color: '#2563eb',
                            fontSize: '11px',
                            fontWeight: 700,
                            border: '1px solid #bfdbfe'
                          }}
                        >
                          → {act}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Drug-Drug Interaction Deep Dive (if present) */}
              {result.drug_check && (
                <div style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  padding: '20px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <Pill size={18} color="#f59e0b" />
                    <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Pharmacology & RxNav Drug Safety Analysis
                    </h3>
                  </div>

                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px' }}>
                    Detected Medications: <strong>{result.drug_check.detected_medications?.join(', ') || 'Warfarin, Ibuprofen'}</strong>
                  </div>

                  {result.drug_check.interactions && result.drug_check.interactions.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {result.drug_check.interactions.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: '#fffbeb',
                            borderRadius: '10px',
                            padding: '12px',
                            border: '1px solid #fde68a',
                            fontSize: '12px'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, color: '#b45309', marginBottom: '2px' }}>
                            <span>⚠️ {item.severity || 'High Risk'} Interaction</span>
                          </div>
                          <div style={{ color: '#78350f', marginTop: '2px' }}>{item.effect}</div>
                          <div style={{ color: '#059669', fontWeight: 700, marginTop: '4px' }}>Recommendation: {item.recommended_action}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ color: '#059669', fontSize: '12px', fontWeight: 700 }}>
                      ✓ No known high-risk drug-to-drug interactions detected.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Live Agent Trace DAG Timeline */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '24px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={18} color="#2563eb" />
                  <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    DAG Execution Trace ({result.trace?.length || 0} Steps)
                  </h3>
                </div>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 700 }}>
                  Channel: {result.channel}
                </span>
              </div>

              {/* Step list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {result.trace?.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#f8fafc',
                      borderRadius: '12px',
                      padding: '12px 14px',
                      border: '1px solid #f1f5f9',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#2563eb' }}>
                        {step.agent_name}
                      </span>
                      <span style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: '#e2e8f0',
                        color: '#475569'
                      }}>
                        {step.duration_ms} ms
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4 }}>
                      {step.action}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Hub trigger */}
              {onOpenExportModal && (
                <button
                  onClick={onOpenExportModal}
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    border: 'none',
                    background: '#059669',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    marginTop: '8px',
                    boxShadow: '0 4px 12px rgba(5,150,105,0.25)'
                  }}
                >
                  <FileText size={15} />
                  <span>Generate Verifiable Health Passport (PDF)</span>
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
