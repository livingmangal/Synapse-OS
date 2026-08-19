import React from 'react';
import { Message, TraceItem } from '../types';

export function TriageVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{ marginTop: '12px', padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Clinical Triage Score
        </span>
        <span style={{ fontSize: '10.5px', fontWeight: 700, padding: '2px 8px', borderRadius: '20px', background: '#dcfce7', color: '#15803d' }}>
          ● {visualData.urgency}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {visualData.vitals && visualData.vitals.map((v: any, vIdx: number) => (
          <div key={vIdx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', padding: '3px 0', borderBottom: '1px dashed #e2e8f0' }}>
            <span style={{ color: '#64748b' }}>{v.label}</span>
            <span style={{ fontWeight: 600, color: '#0f172a' }}>{v.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NutritionVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{ marginTop: '12px', padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#475569', textTransform: 'uppercase' }}>Daily Target</span>
        <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#059669' }}>{visualData.calories}</span>
      </div>
      {/* Macro Bar */}
      <div style={{ height: '8px', borderRadius: '8px', overflow: 'hidden', display: 'flex', background: '#e2e8f0', marginBottom: '6px' }}>
        <div style={{ width: '40%', background: '#10b981' }} title="Carbs 40%" />
        <div style={{ width: '30%', background: '#0284c7' }} title="Protein 30%" />
        <div style={{ width: '30%', background: '#f59e0b' }} title="Fats 30%" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b' }}>
        <span>🟢 Carbs ({visualData.carbs})</span>
        <span>🔵 Protein ({visualData.protein})</span>
        <span>🟡 Fats ({visualData.fats})</span>
      </div>
    </div>
  );
}

export function WhatsAppVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{ marginTop: '10px', padding: '9px 12px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #86efac' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '10.5px', color: '#15803d', fontWeight: 700 }}>
        <span>📲 WhatsApp Omni-Channel</span>
        <span style={{ padding: '2px 6px', borderRadius: '6px', background: '#ffffff', border: '1px solid #bbf7d0' }}>Synced</span>
      </div>
      <div style={{ fontSize: '10px', color: '#166534', marginTop: '3px' }}>
        From: {visualData.senderNumber} • {visualData.mediaType}
      </div>
    </div>
  );
}

export function RecordsVisualWidget({ visualData }: { visualData: any }) {
  if (!visualData) return null;
  return (
    <div style={{ marginTop: '10px', padding: '9px 12px', borderRadius: '12px', background: '#ecfdf5', border: '1px solid #a7f3d0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '10.5px', color: '#065f46', fontWeight: 700 }}>
        <span>🔗 {visualData.network}</span>
        <span style={{ padding: '2px 6px', borderRadius: '6px', background: '#ffffff' }}>{visualData.status}</span>
      </div>
      <div style={{ fontSize: '10px', color: '#047857', fontFamily: 'monospace', marginTop: '3px' }}>
        TX: {visualData.txHash}
      </div>
    </div>
  );
}

export function NeuralTraceWidget({ trace }: { trace?: TraceItem[] }) {
  if (!trace || trace.length === 0) return null;
  return (
    <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: '1px solid #f1f5f9' }}>
      <div style={{ fontSize: '9.5px', textTransform: 'uppercase', fontWeight: 700, color: '#065f46', marginBottom: '3px' }}>
        ⚡ Swarm Neural Trace:
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {trace.map((t, i) => (
          <div key={i} style={{ fontSize: '10.5px', color: '#047857', background: '#ecfdf5', padding: '2px 6px', borderRadius: '5px' }}>
            <b>{t.agent_name}:</b> {t.action} ({t.duration_ms}ms)
          </div>
        ))}
      </div>
    </div>
  );
}
