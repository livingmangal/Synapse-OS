'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  AlertTriangle, 
  Download, 
  FileText, 
  Filter, 
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';
import { PatientInfo, VitalsData } from './types';

interface VisualAnalyticsPanelProps {
  patient: PatientInfo;
  vitals: VitalsData;
  onOpenExportModal: () => void;
}

export default function VisualAnalyticsPanel({
  patient,
  vitals,
  onOpenExportModal
}: VisualAnalyticsPanelProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'6m' | '1y' | '5y'>('6m');
  const [selectedRiskCell, setSelectedRiskCell] = useState<string | null>(null);

  // 5x5 Risk Matrix Setup (Matching Reference Image 3)
  const severityRows = ['Extensive', 'Major', 'Medium', 'Minor', 'No Impact'] as const;
  const probabilityCols = ['Highly Unlikely', 'Unlikely', 'Possible', 'Likely', 'Very Likely'] as const;

  // Matrix color map (0: Green/Acceptable, 1: Yellow/ALARP, 2: Purple/Not Acceptable)
  const riskGrid = [
    [1, 2, 2, 2, 2], // Extensive
    [1, 1, 2, 2, 2], // Major
    [0, 1, 1, 1, 2], // Medium
    [0, 0, 1, 1, 1], // Minor
    [0, 0, 0, 0, 0]  // No Impact
  ];

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '100%'
    }}>
      {/* Top Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#ffffff',
        padding: '20px 28px',
        borderRadius: '20px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart3 size={22} color="#2563eb" />
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Analytics Central & Clinical Risk Models
            </h2>
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0 0' }}>
            Last Updated: Jan 2026 • Quantitative Longitudinal Health Trajectories & Risk Matrices
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Timeframe Selector */}
          <div style={{
            display: 'flex',
            background: '#f1f5f9',
            padding: '3px',
            borderRadius: '10px',
            border: '1px solid #e2e8f0'
          }}>
            {(['6m', '1y', '5y'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTimeframe(t)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  background: selectedTimeframe === t ? '#2563eb' : 'transparent',
                  color: selectedTimeframe === t ? '#ffffff' : '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenExportModal}
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              border: 'none',
              background: '#2563eb',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(37,99,235,0.25)'
            }}
          >
            <Download size={13} />
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Main 6-Card Visual Analytics Grid (Matching Image 3) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '20px'
      }}>
        
        {/* Card 1: Risk Severity 5x5 Matrix (Matching Image 3) */}
        <div 
          className="orch-card-interactive"
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '22px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Risk Severity Matrix (5x5)
              </h3>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Probability vs Clinical Impact Tier</span>
            </div>
            <span style={{ fontSize: '10px', fontWeight: 700, background: '#eff6ff', color: '#2563eb', padding: '2px 8px', borderRadius: '6px' }}>
              ALARP / ISO 14971
            </span>
          </div>

          {/* 5x5 Matrix Grid */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {/* Y-Axis Labels */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', fontSize: '10px', color: '#64748b', fontWeight: 600, width: '68px', textAlign: 'right', paddingRight: '4px' }}>
              {severityRows.map((r, i) => (
                <span key={i}>{r}</span>
              ))}
            </div>

            {/* Matrix Cells */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {riskGrid.map((row, rIdx) => (
                <div key={rIdx} style={{ display: 'flex', gap: '4px' }}>
                  {row.map((val, cIdx) => {
                    const color = val === 2 ? '#c084fc' : val === 1 ? '#facc15' : '#4ade80';
                    const cellKey = `${rIdx}-${cIdx}`;
                    const isSelected = selectedRiskCell === cellKey;
                    return (
                      <div
                        key={cIdx}
                        onClick={() => setSelectedRiskCell(isSelected ? null : cellKey)}
                        style={{
                          flex: 1,
                          height: '32px',
                          borderRadius: '6px',
                          background: color,
                          opacity: isSelected ? 1 : 0.85,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: isSelected ? '2px solid #0f172a' : '1px solid rgba(255,255,255,0.4)',
                          transition: 'transform 0.15s ease'
                        }}
                      />
                    );
                  })}
                </div>
              ))}

              {/* X-Axis Labels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8', marginTop: '6px', fontWeight: 600 }}>
                <span>Unlikely</span>
                <span>Possible</span>
                <span>Likely</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '10px', fontSize: '10px', color: '#64748b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c084fc' }} />
              <span>Not Acceptable</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#facc15' }} />
              <span>ALARP (Monitor)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
              <span>Acceptable</span>
            </div>
          </div>
        </div>

        {/* Card 2: Incident Trend (Matching Image 3) */}
        <div 
          className="orch-card-interactive"
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '22px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Clinical Incident Trend
              </h3>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Monthly Reported Triage Incidents</span>
            </div>
            <span style={{ fontSize: '11px', color: '#2563eb', fontWeight: 700 }}>Last 6 Months</span>
          </div>

          {/* Bar Chart */}
          <div style={{ height: '170px', position: 'relative' }}>
            <svg viewBox="0 0 300 170" style={{ width: '100%', height: '100%' }}>
              {/* Horizontal Grid lines */}
              {[40, 80, 120, 160].map((y, idx) => (
                <line key={idx} x1="30" y1={y} x2="290" y2={y} stroke="#f1f5f9" strokeWidth="1" />
              ))}
              
              {/* Bars */}
              {[
                { month: 'Sep', val: 19, x: 45 },
                { month: 'Oct', val: 7, x: 85 },
                { month: 'Nov', val: 20, x: 125 },
                { month: 'Dec', val: 28, x: 165 },
                { month: 'Jan', val: 10, x: 205 },
                { month: 'Feb', val: 22, x: 245 }
              ].map((b, i) => {
                const height = b.val * 4.5;
                const y = 160 - height;
                return (
                  <g key={i}>
                    <rect
                      x={b.x}
                      y={y}
                      width="24"
                      height={height}
                      rx="4"
                      fill="#38bdf8"
                    />
                    <text x={b.x + 12} y="172" fill="#64748b" fontSize="10" textAnchor="middle">{b.month}</text>
                    <text x={b.x + 12} y={y - 4} fill="#0f172a" fontSize="9" fontWeight="bold" textAnchor="middle">{b.val}</text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Card 3: Safety Event Distribution (Matching Image 3) */}
        <div 
          className="orch-card-interactive"
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '22px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Safety Event Distribution
              </h3>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Categorized clinical events</span>
            </div>
            <span style={{ fontSize: '10px', color: '#059669', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
              Active Audit
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'Test Complication', pct: 34.4, color: '#0284c7' },
              { label: 'Skin / Joint Integrity', pct: 34.3, color: '#0ea5e9' },
              { label: 'Mobility / Fall Risk', pct: 18.3, color: '#38bdf8' },
              { label: 'Equipment Calibration', pct: 3.5, color: '#7dd3fc' },
              { label: 'Adverse Drug Reaction', pct: 2.6, color: '#f59e0b' },
              { label: 'Medication Error', pct: 2.4, color: '#ef4444' }
            ].map((item, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '3px' }}>
                  <span style={{ color: '#334155', fontWeight: 600 }}>{item.label}</span>
                  <span style={{ color: '#0f172a', fontWeight: 800 }}>{item.pct}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', borderRadius: '3px', background: '#f1f5f9', overflow: 'hidden' }}>
                  <div style={{ width: `${item.pct}%`, height: '100%', background: item.color, borderRadius: '3px' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: 10-Year Clinical ML Trajectory Curves */}
        <div 
          className="orch-card-interactive"
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '22px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                10-Year Quantitative ML Trajectory
              </h3>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Framingham CVD & CKD-EPI Forecast</span>
            </div>
            <span style={{ fontSize: '10px', color: '#2563eb', background: '#eff6ff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
              AI Prediction
            </span>
          </div>

          {/* Line Chart */}
          <div style={{ height: '170px', position: 'relative' }}>
            <svg viewBox="0 0 300 170" style={{ width: '100%', height: '100%' }}>
              {/* Baseline Curves */}
              {/* CVD Risk curve (Blue) */}
              <path
                d="M 20 130 Q 80 120 150 95 T 280 60"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Renal eGFR curve (Green) */}
              <path
                d="M 20 50 Q 80 60 150 75 T 280 110"
                fill="none"
                stroke="#059669"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Points */}
              <circle cx="150" cy="95" r="4" fill="#2563eb" />
              <circle cx="150" cy="75" r="4" fill="#059669" />
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8', marginTop: '4px' }}>
              <span>Baseline (2026)</span>
              <span>Year 3</span>
              <span>Year 5</span>
              <span>Year 7</span>
              <span>Year 10</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '10px', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
            <span style={{ color: '#2563eb', fontWeight: 700 }}>● 10-Yr CVD Risk: 6.8% (Low)</span>
            <span style={{ color: '#059669', fontWeight: 700 }}>● Renal eGFR: 98 mL/min (Normal)</span>
          </div>
        </div>

      </div>
    </div>
  );
}
