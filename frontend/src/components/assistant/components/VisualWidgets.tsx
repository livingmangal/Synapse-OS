import React from 'react';
import { TraceItem } from '../types';
import { Activity, ShieldCheck, Heart, AlertTriangle, FileText, CheckCircle2, Radio, Sparkles, Scan, Smartphone, Check } from 'lucide-react';

/* 1. Clinical Triage Score Widget */
export function TriageVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  const score = visualData.score || 18;
  return (
    <div style={{
      marginTop: '12px',
      padding: '14px 16px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #fdf2f8 0%, #f0f9ff 100%)',
      border: '1.2px solid #fbcfe8',
      boxShadow: '0 2px 8px rgba(219, 39, 119, 0.04)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Activity size={14} color="#db2777" />
          <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#9d174d', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            Clinical Triage Evaluation
          </span>
        </div>
        <span style={{
          fontSize: '10.5px',
          fontWeight: 800,
          padding: '2px 8px',
          borderRadius: '20px',
          background: '#dcfce7',
          color: '#15803d',
          border: '1px solid #86efac'
        }}>
          {visualData.urgency || 'Low Risk / Stable'}
        </span>
      </div>

      {/* Progress Metric Bar */}
      <div style={{ marginBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>
          <span>Acuity Index</span>
          <span style={{ fontWeight: 800, color: '#0f172a' }}>{score} / 100 (Optimal)</span>
        </div>
        <div style={{ height: '6px', borderRadius: '6px', background: '#e2e8f0', overflow: 'hidden' }}>
          <div style={{ width: `${score}%`, height: '100%', background: 'linear-gradient(90deg, #10b981 0%, #0284c7 100%)', borderRadius: '6px' }} />
        </div>
      </div>

      {visualData.vitals && visualData.vitals.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
          {visualData.vitals.map((v: any, vIdx: number) => (
            <div key={vIdx} style={{ background: '#ffffff', padding: '6px 8px', borderRadius: '6px', border: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
              <span style={{ color: '#64748b' }}>{v.label}</span>
              <span style={{ fontWeight: 700, color: '#0f172a' }}>{v.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* 2. Metabolic Nutrition & Macro Blueprint Widget */
export function NutritionVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{
      marginTop: '12px',
      padding: '14px 16px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 100%)',
      border: '1.2px solid #bbf7d0',
      boxShadow: '0 2px 8px rgba(16, 185, 129, 0.04)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
          Metabolic Macro Distribution
        </span>
        <span style={{ fontSize: '11px', fontWeight: 800, color: '#059669', background: '#ffffff', padding: '2px 8px', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
          Target: {visualData.calories || '2,150 kcal'}
        </span>
      </div>

      {/* Triple Macro Bar */}
      <div style={{ height: '7px', borderRadius: '6px', overflow: 'hidden', display: 'flex', background: '#e2e8f0', marginBottom: '8px' }}>
        <div style={{ width: '45%', background: '#059669' }} title="Complex Carbs" />
        <div style={{ width: '30%', background: '#0284c7' }} title="Lean Protein" />
        <div style={{ width: '25%', background: '#d97706' }} title="Healthy Fats" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'center' }}>
        <div style={{ background: '#ffffff', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '9.5px', color: '#64748b', fontWeight: 700 }}>CARBOHYDRATES</div>
          <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#059669', marginTop: '1px' }}>{visualData.carbs || '240g (45%)'}</div>
        </div>
        <div style={{ background: '#ffffff', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '9.5px', color: '#64748b', fontWeight: 700 }}>PROTEIN</div>
          <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0284c7', marginTop: '1px' }}>{visualData.protein || '130g (30%)'}</div>
        </div>
        <div style={{ background: '#ffffff', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '9.5px', color: '#64748b', fontWeight: 700 }}>HEALTHY FATS</div>
          <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#d97706', marginTop: '1px' }}>{visualData.fats || '60g (25%)'}</div>
        </div>
      </div>
    </div>
  );
}

/* 3. Swarm Multi-Agent Consensus Widget */
export function SwarmVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{
      marginTop: '12px',
      padding: '14px 16px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 100%)',
      border: '1.2px solid #bae6fd',
      boxShadow: '0 2px 8px rgba(2, 132, 199, 0.05)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} color="#0284c7" />
          <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            5-Agent Consensus Evaluation
          </span>
        </div>
        <span style={{ fontSize: '10.5px', fontWeight: 800, padding: '2px 8px', borderRadius: '20px', background: '#dcfce7', color: '#15803d', border: '1px solid #86efac' }}>
          Verified {visualData.confidence || '98.4%'}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px', marginTop: '6px' }}>
        {visualData.agents && visualData.agents.map((ag: any, idx: number) => (
          <div key={idx} style={{ background: '#ffffff', padding: '6px 8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '11px' }}>
            <div style={{ color: '#64748b', fontSize: '9.5px', fontWeight: 700 }}>{ag.name}</div>
            <div style={{ color: '#0f172a', fontWeight: 700, marginTop: '1px' }}>{ag.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 4. Live Biometric Telemetry Widget */
export function VitalsVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{
      marginTop: '12px',
      padding: '14px 16px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #fff1f2 100%)',
      border: '1.2px solid #bae6fd',
      boxShadow: '0 2px 8px rgba(2, 132, 199, 0.04)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Activity size={14} color="#0284c7" />
          <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#0369a1', textTransform: 'uppercase' }}>
            {visualData.patientName || 'Digital Twin Telemetry'}
          </span>
        </div>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#9d174d', background: '#fdf2f8', padding: '2px 8px', borderRadius: '6px', border: '1px solid #fbcfe8' }}>
          {visualData.device || 'Apple Watch Ultra 2'}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginTop: '6px' }}>
        <div style={{ background: '#ffffff', padding: '6px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '8.5px', color: '#64748b', fontWeight: 700 }}>HEART RATE</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#dc2626', marginTop: '1px' }}>{visualData.hr || '74 BPM'}</div>
        </div>
        <div style={{ background: '#ffffff', padding: '6px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '8.5px', color: '#64748b', fontWeight: 700 }}>OXYGEN SpO2</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#0284c7', marginTop: '1px' }}>{visualData.spo2 || '98.5%'}</div>
        </div>
        <div style={{ background: '#ffffff', padding: '6px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '8.5px', color: '#64748b', fontWeight: 700 }}>BLOOD PRESSURE</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#16a34a', marginTop: '1px' }}>{visualData.bp || '118/76'}</div>
        </div>
        <div style={{ background: '#ffffff', padding: '6px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
          <div style={{ fontSize: '8.5px', color: '#64748b', fontWeight: 700 }}>GLUCOSE</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#7c3aed', marginTop: '1px' }}>{visualData.glucose || '92 mg/dL'}</div>
        </div>
      </div>
    </div>
  );
}

/* 5. MONAI & YOLOv8 Imaging DICOM Widget (LIGHT THEME) */
export function ScanVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  const conf = visualData.confidence || '98.8%';
  const confNum = parseFloat(conf) || 98.8;

  return (
    <div style={{
      marginTop: '12px',
      padding: '14px 16px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%)',
      border: '1.2px solid #bae6fd',
      boxShadow: '0 2px 8px rgba(2, 132, 199, 0.05)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Scan size={14} color="#0284c7" />
          <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#0369a1', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
            MONAI & YOLOv8 Imaging Evaluation
          </span>
        </div>
        <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', background: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd' }}>
          {visualData.modality || 'CHEST PA & SKELETAL'}
        </span>
      </div>

      {/* Structured Clinical Findings Card */}
      <div style={{
        background: '#ffffff',
        borderRadius: '8px',
        padding: '8px 10px',
        border: '1px solid #e2e8f0',
        marginBottom: '8px'
      }}>
        <div style={{ fontSize: '12px', color: '#1e293b', lineHeight: 1.5 }}>
          <b>Diagnostic Finding:</b> {visualData.finding || 'Normal study. No acute cardiopulmonary pathology or cortical fracture detected.'}
        </div>
      </div>

      {/* Metrics & Confidence Bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>
          <span>AI Diagnostic Confidence</span>
          <span style={{ fontWeight: 800, color: '#0369a1' }}>{conf}</span>
        </div>
        <div style={{ height: '6px', borderRadius: '6px', background: '#e2e8f0', overflow: 'hidden' }}>
          <div style={{ width: `${confNum}%`, height: '100%', background: 'linear-gradient(90deg, #0284c7 0%, #10b981 100%)', borderRadius: '6px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '10.5px', color: '#64748b' }}>
          <span>Grad-CAM Attention: <b style={{ color: '#0f172a' }}>{visualData.gradcam || 'Bilateral Symmetry Verified'}</b></span>
          <span style={{ color: '#15803d', fontWeight: 700 }}>✓ Verified Negative</span>
        </div>
      </div>
    </div>
  );
}

/* 6. WHO & IDSP Outbreak Sentinel Widget */
export function OutbreakVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{
      marginTop: '12px',
      padding: '14px 16px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #fff1f2 0%, #fdf2f8 100%)',
      border: '1.2px solid #fecdd3',
      boxShadow: '0 2px 8px rgba(225, 29, 72, 0.04)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Radio size={14} color="#e11d48" />
          <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#9f1239', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            IDSP Regional Disease Surveillance
          </span>
        </div>
        <span style={{ fontSize: '10px', fontWeight: 800, background: '#ffe4e6', color: '#be123c', padding: '2px 8px', borderRadius: '4px', border: '1px solid #fecdd3' }}>
          {visualData.riskLevel || 'HIGH SURGE ALERT'}
        </span>
      </div>

      <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>
        {visualData.district || 'Regional Node'}: <span style={{ color: '#be123c' }}>{visualData.pathogen || 'Pathogen Alert'}</span>
      </div>
      <div style={{ fontSize: '11.5px', color: '#475569', marginTop: '4px', lineHeight: 1.45, background: '#ffffff', padding: '6px 8px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
        {visualData.advisory || 'Hospital triage wards alerted. Emergency vector containment protocols active.'}
      </div>
    </div>
  );
}

/* 7. ABDM Blockchain EHR Widget */
export function EHRVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{
      marginTop: '12px',
      padding: '14px 16px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #faf5ff 0%, #f0f9ff 100%)',
      border: '1.2px solid #e9d5ff',
      boxShadow: '0 2px 8px rgba(124, 58, 237, 0.04)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FileText size={14} color="#7c3aed" />
          <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#6b21a8', textTransform: 'uppercase' }}>
            ABDM Longitudinal EHR Vault
          </span>
        </div>
        <span style={{ fontSize: '10px', fontWeight: 800, color: '#059669', background: '#ecfdf5', padding: '2px 8px', borderRadius: '4px', border: '1px solid #a7f3d0' }}>
          IPFS Verified
        </span>
      </div>
      <div style={{ fontSize: '12px', color: '#0f172a', fontWeight: 700 }}>
        ABHA: {visualData.abhaId} • {visualData.name}
      </div>
      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
        Registry Node: {visualData.hospital || 'AIIMS New Delhi ABDM Gateway'}
      </div>
    </div>
  );
}

/* 8. WhatsApp Omni-Channel Bridge Widget */
export function WhatsAppVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{
      marginTop: '10px',
      padding: '10px 12px',
      borderRadius: '10px',
      background: '#f0fdf4',
      border: '1.2px solid #86efac'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: '#15803d', fontWeight: 700 }}>
        <span>WhatsApp Omni-Channel Gateway</span>
        <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#ffffff', border: '1px solid #bbf7d0', fontSize: '10px' }}>Synced</span>
      </div>
      <div style={{ fontSize: '11px', color: '#166534', marginTop: '3px' }}>
        Sender: {visualData.senderNumber} • {visualData.mediaType}
      </div>
    </div>
  );
}

/* 9. Blockchain Records Widget */
export function RecordsVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{
      marginTop: '10px',
      padding: '10px 12px',
      borderRadius: '10px',
      background: '#faf5ff',
      border: '1.2px solid #e9d5ff'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: '#6b21a8', fontWeight: 700 }}>
        <span>Ethereum ABDM Gateway ({visualData.network || 'Mainnet Node'})</span>
        <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#ffffff', fontSize: '10px', color: '#15803d' }}>{visualData.status || 'Confirmed'}</span>
      </div>
      <div style={{ fontSize: '10.5px', color: '#7e22ce', fontFamily: 'monospace', marginTop: '3px' }}>
        Hash: {visualData.txHash || '0x7f9a...3c21'}
      </div>
    </div>
  );
}

/* 10. Universal Immunization Programme (U-WIN) Schedule Widget */
export function VaccinationVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  const vaccines = visualData.schedule || visualData.vaccines || [
    { name: 'BCG + OPV-0 + Hep-B', age: 'Birth', status: 'Verified', date: 'ABDM Linked' },
    { name: 'Pentavalent-1 + Rotavirus-1', age: '6 Weeks', status: 'Completed', date: 'PHC Centre' },
    { name: 'Pentavalent-2 + Rotavirus-2', age: '10 Weeks', status: 'Completed', date: 'PHC Centre' },
    { name: 'Pentavalent-3 + fIPV-1', age: '14 Weeks', status: 'Completed', date: 'PHC Centre' },
    { name: 'MR-1 (Measles-Rubella) + Vit A', age: '9 Months', status: 'Up to Date', date: 'U-WIN Linked' },
    { name: 'DPT Booster + Polio Booster', age: '16-24 Months', status: 'Scheduled', date: 'Next Dose Due' }
  ];

  return (
    <div style={{
      marginTop: '12px',
      padding: '14px 16px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 100%)',
      border: '1.2px solid #a7f3d0',
      boxShadow: '0 2px 8px rgba(5, 150, 105, 0.04)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={15} color="#059669" />
          <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#065f46', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            Universal Immunization Programme (U-WIN / UIP)
          </span>
        </div>
        <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '20px', background: '#dcfce7', color: '#15803d', border: '1px solid #86efac' }}>
          {visualData.status || 'Verified 100% Core Schedule'}
        </span>
      </div>

      <div style={{ fontSize: '11.5px', color: '#047857', marginBottom: '8px', fontWeight: 600 }}>
        Citizen: <b>{visualData.patientName || 'Verified Citizen'}</b> • MoHFW National Registry
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {vaccines.map((v: any, idx: number) => {
          const isDone = v.status?.toLowerCase().includes('given') || v.status?.toLowerCase().includes('up to date') || v.status?.toLowerCase().includes('completed') || v.status?.toLowerCase().includes('verified');
          return (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#ffffff', padding: '5px 8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '11px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: isDone ? '#10b981' : '#f59e0b' }} />
                <span style={{ fontWeight: 700, color: '#0f172a' }}>{v.name}</span>
                <span style={{ color: '#64748b', fontSize: '10px' }}>({v.age})</span>
              </div>
              <span style={{ fontSize: '9.5px', fontWeight: 700, color: isDone ? '#059669' : '#b45309', background: isDone ? '#ecfdf5' : '#fef3c7', padding: '2px 6px', borderRadius: '4px' }}>
                {v.status}
              </span>
            </div>
          );
        })}
      </div>
      
      {visualData.nextDue && (
        <div style={{ marginTop: '8px', fontSize: '10.5px', color: '#047857', background: '#ffffff', padding: '5px 8px', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
          <b>Next Milestone:</b> {visualData.nextDue}
        </div>
      )}
    </div>
  );
}

/* 11. 2G GSM Cellular Triage Dispatch Widget (LIGHT THEME) */
export function RuralSMSVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  const smsBody = visualData.smsBody || visualData.text || "SANJEEVNI SOS: High fever & dehydration alert in District. Visit nearest PHC for free ORS & Paracetamol. Avoid unboiled water.";
  const charCount = smsBody.length;

  return (
    <div style={{
      marginTop: '12px',
      padding: '14px 16px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #fffbeb 0%, #f0fdf4 100%)',
      border: '1.2px solid #fde68a',
      boxShadow: '0 2px 8px rgba(217, 119, 6, 0.04)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Smartphone size={14} color="#d97706" />
          <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#92400e', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
            2G GSM Cell Broadcast Triage
          </span>
        </div>
        <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 7px', borderRadius: '6px', background: '#fef3c7', color: '#b45309', border: '1px solid #fde68a' }}>
          {charCount}/160 Chars (Zero-Bandwidth)
        </span>
      </div>

      {/* Clean Light-Themed Monospace Dispatch Box */}
      <div style={{
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        borderRadius: '8px',
        padding: '8px 10px',
        fontFamily: 'monospace',
        color: '#1e293b',
        fontSize: '11.5px',
        lineHeight: 1.5
      }}>
        <div style={{ fontSize: '9px', color: '#64748b', marginBottom: '3px', fontWeight: 700, letterSpacing: '0.04em' }}>
          [2G GSM BROADCAST • SMS GATEWAY • NO INTERNET REQUIRED]
        </div>
        {smsBody}
      </div>

      {visualData.advisoryHindi && (
        <div style={{ marginTop: '6px', fontSize: '11px', color: '#475569', lineHeight: 1.4 }}>
          <b>Hindi Advisory:</b> {visualData.advisoryHindi}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px', fontSize: '10px', color: '#64748b' }}>
        <span>Network: <b>BSNL / Jio 2G GSM Cell Broadcast</b></span>
        <span style={{ color: '#15803d', fontWeight: 700 }}>✓ Universal Basic Phone Reach</span>
      </div>
    </div>
  );
}

/* 12. Neural Sub-Agent Trace Widget */
export function NeuralTraceWidget({ trace }: { trace?: TraceItem[] }) {
  if (!trace || trace.length === 0) return null;
  return (
    <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: '1px solid #f1f5f9' }}>
      <div style={{ fontSize: '9.5px', textTransform: 'uppercase', fontWeight: 800, color: '#64748b', marginBottom: '3px', letterSpacing: '0.03em' }}>
        Multi-Agent Execution Trace:
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {trace.map((t, i) => (
          <div key={i} style={{ fontSize: '10px', color: '#0369a1', background: '#f0f9ff', border: '1px solid #bae6fd', padding: '2px 6px', borderRadius: '4px' }}>
            <b>{t.agent_name}:</b> {t.action} ({t.duration_ms}ms)
          </div>
        ))}
      </div>
    </div>
  );
}



