'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export default function SymptomTriageAgentPage() {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [triageResult, setTriageResult] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Quantitative ML Risk Assessment State
  const [age, setAge] = useState(45);
  const [systolicBp, setSystolicBp] = useState(130);
  const [fastingGlucose, setFastingGlucose] = useState(105);
  const [hba1c, setHba1c] = useState(5.8);
  const [creatinine, setCreatinine] = useState(1.1);
  const [isSmoker, setIsSmoker] = useState(false);
  const [calculatingRisks, setCalculatingRisks] = useState(false);
  const [riskResult, setRiskResult] = useState<any>(null);

  const handleTriage = async (symptomQuery?: string) => {
    const query = symptomQuery || symptoms;
    if (!query.trim()) return;
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch(`${API_BASE}/api/triage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptoms: query })
      });
      if (res.ok) {
        const data = await res.json();
        setTriageResult(data);
      } else {
        setErrorMessage(`Triage endpoint error: status ${res.status}`);
      }
    } catch (err) {
      setErrorMessage(`Unable to connect to backend at ${API_BASE}. Ensure FastAPI server is running.`);
    } finally {
      setLoading(false);
    }
  };

  const handleComputeMLRisks = async () => {
    setCalculatingRisks(true);
    setErrorMessage(null);
    try {
      const res = await fetch(`${API_BASE}/api/diagnostics/risk-score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          age,
          systolic_bp: systolicBp,
          fasting_glucose: fastingGlucose,
          hba1c,
          creatinine,
          is_smoker: isSmoker
        })
      });
      if (res.ok) {
        const data = await res.json();
        setRiskResult(data);
      } else {
        setErrorMessage(`Risk endpoint error: status ${res.status}`);
      }
    } catch (err) {
      setErrorMessage(`Unable to connect to backend at ${API_BASE}. Ensure FastAPI server is running.`);
    } finally {
      setCalculatingRisks(false);
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
          .triage-grid-layout {
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
              Clinical Symptom Triage & Risk Calculators
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '14px', margin: '4px 0 0 0' }}>
              Deterministic Safety Taxonomy • Validated Clinical Risk Models (Framingham CVD / CKD-EPI / FIB-4)
            </p>
          </div>
          <span style={{ padding: '6px 14px', borderRadius: '20px', background: 'rgba(2, 132, 199, 0.2)', border: '1px solid #38bdf8', color: '#38bdf8', fontSize: '12px', fontWeight: 'bold' }}>
            Agent Swarm Active
          </span>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#fca5a5', padding: '12px 16px', borderRadius: '10px', marginBottom: '20px', fontSize: '13px' }}>
            ⚠️ {errorMessage}
          </div>
        )}

        {/* Grid Layout: Triage Left, Quantitative ML Right */}
        <div className="triage-grid-layout" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '24px' }}>
          
          {/* Left Column: Conversational Triage */}
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#38bdf8' }}>1. Natural Language Symptom Triage</h3>
            <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '16px' }}>
              Enter symptoms or select a clinical preset to classify urgency (Emergency, Doctor Consult, Home Care).
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {[
                'Severe chest pain radiating to left arm',
                'Persistent fever for 4 days with chills',
                'Mild dry cough and runny nose'
              ].map((preset, i) => (
                <button
                  key={i}
                  onClick={() => { setSymptoms(preset); handleTriage(preset); }}
                  style={{ fontSize: '11px', padding: '6px 12px', borderRadius: '12px', background: '#1f2937', color: '#cbd5e1', border: '1px solid #374151', cursor: 'pointer' }}
                >
                  💡 {preset}
                </button>
              ))}
            </div>

            <textarea
              rows={4}
              placeholder="Describe what you are experiencing..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#0b0f19', border: '1px solid #374151', color: '#fff', fontSize: '14px', marginBottom: '16px', boxSizing: 'border-box' }}
            />

            <button
              onClick={() => handleTriage()}
              disabled={loading}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#0284c7', color: '#fff', border: 'none', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Evaluating Symptoms...' : '⚡ Run Clinical Triage'}
            </button>

            {triageResult && (
              <div style={{ marginTop: '20px', padding: '16px', borderRadius: '12px', background: '#1e293b', border: '1px solid #334155' }}>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#38bdf8', marginBottom: '8px' }}>
                  {triageResult.urgency_badge}
                </div>
                <p style={{ fontSize: '13.5px', color: '#cbd5e1', margin: '0 0 12px 0', lineHeight: '1.5' }}>
                  {triageResult.recommended_action}
                </p>
                <div style={{ fontSize: '12px', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '8px' }}>
                  <b>Recommended Care:</b> <span style={{ color: '#f8fafc' }}>{triageResult.recommended_specialist}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Quantitative ML Scoring */}
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#10b981' }}>2. Quantitative Clinical ML Predictors</h3>
            <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '16px' }}>
              Calculates Framingham 10-Year CVD Risk %, ADA Diabetes Score, and CKD eGFR stage.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Age (Years)</label>
                <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} style={{ width: '100%', padding: '8px', borderRadius: '6px', background: '#0b0f19', border: '1px solid #374151', color: '#fff', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Systolic BP (mmHg)</label>
                <input type="number" value={systolicBp} onChange={(e) => setSystolicBp(Number(e.target.value))} style={{ width: '100%', padding: '8px', borderRadius: '6px', background: '#0b0f19', border: '1px solid #374151', color: '#fff', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>Fasting Glucose (mg/dL)</label>
                <input type="number" value={fastingGlucose} onChange={(e) => setFastingGlucose(Number(e.target.value))} style={{ width: '100%', padding: '8px', borderRadius: '6px', background: '#0b0f19', border: '1px solid #374151', color: '#fff', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '4px' }}>HbA1c (%)</label>
                <input type="number" step="0.1" value={hba1c} onChange={(e) => setHba1c(Number(e.target.value))} style={{ width: '100%', padding: '8px', borderRadius: '6px', background: '#0b0f19', border: '1px solid #374151', color: '#fff', boxSizing: 'border-box' }} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', background: '#0b0f19', padding: '10px 12px', borderRadius: '8px', border: '1px solid #1f2937' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Tobacco / Smoking Status</span>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={isSmoker}
                  onChange={(e) => setIsSmoker(e.target.checked)}
                  style={{ accentColor: '#ef4444' }}
                />
                <span style={{ color: isSmoker ? '#ef4444' : '#94a3b8' }}>{isSmoker ? 'Active Smoker' : 'Non-Smoker'}</span>
              </label>
            </div>

            <button
              onClick={handleComputeMLRisks}
              disabled={calculatingRisks}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', background: '#10b981', color: '#fff', border: 'none', fontWeight: 'bold', cursor: calculatingRisks ? 'not-allowed' : 'pointer' }}
            >
              {calculatingRisks ? 'Computing Clinical Models...' : '📊 Compute Quantitative Risk Scores'}
            </button>

            {riskResult && (
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid #10b981' }}>
                  <div style={{ fontWeight: 'bold', color: '#34d399', fontSize: '12px', textTransform: 'uppercase' }}>10-Year CVD Risk (Framingham Model)</div>
                  <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#fff', margin: '4px 0' }}>
                    {riskResult.cardiovascular_risk.ten_year_probability_percent}% <span style={{ fontSize: '14px', fontWeight: 600, color: '#34d399' }}>({riskResult.cardiovascular_risk.category})</span>
                  </div>
                </div>

                <div style={{ padding: '14px', borderRadius: '10px', background: '#1e293b', border: '1px solid #334155' }}>
                  <div style={{ fontWeight: 'bold', color: '#38bdf8', fontSize: '12px', textTransform: 'uppercase' }}>Renal Health (CKD-EPI eGFR)</div>
                  <div style={{ fontSize: '14px', color: '#fff', marginTop: '4px' }}>
                    eGFR: <b style={{ color: '#38bdf8' }}>{riskResult.renal_health.estimated_gfr} mL/min</b> • {riskResult.renal_health.kdigo_stage}
                  </div>
                </div>

                <div style={{ padding: '14px', borderRadius: '10px', background: '#1e293b', border: '1px solid #334155' }}>
                  <div style={{ fontWeight: 'bold', color: '#f59e0b', fontSize: '12px', textTransform: 'uppercase' }}>Diabetes Risk Tier (ADA Proxy)</div>
                  <div style={{ fontSize: '14px', color: '#fff', marginTop: '4px' }}>
                    Status: <b style={{ color: '#f59e0b' }}>{riskResult.diabetes_risk.status}</b>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
