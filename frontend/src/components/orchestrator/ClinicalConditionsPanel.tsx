'use client';

import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Clock, 
  ChevronRight,
  Plus,
  Share2,
  Download,
  Calendar,
  Eye,
  Activity,
  Zap
} from 'lucide-react';
import { DetectedCondition } from './types';

interface ClinicalConditionsPanelProps {
  conditions: DetectedCondition[];
  selectedCondition: DetectedCondition | null;
  onSelectCondition: (c: DetectedCondition) => void;
  onOpenExportModal: () => void;
  onNavigateToSwarmTab?: () => void;
}

export default function ClinicalConditionsPanel({
  conditions,
  selectedCondition,
  onSelectCondition,
  onOpenExportModal,
  onNavigateToSwarmTab
}: ClinicalConditionsPanelProps) {
  const [selectedOrganTab, setSelectedOrganTab] = useState<'all' | 'lungs' | 'knee' | 'shoulder'>('all');

  const lungsCondition = conditions.find(c => c.organ === 'lungs') || conditions[0];
  const kneeCondition = conditions.find(c => c.organ === 'knee');
  const shoulderCondition = conditions.find(c => c.organ === 'shoulder');

  return (
    <div 
      className="orch-col-side"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '380px',
        flexShrink: 0,
        fontFamily: '"Times New Roman", Times, serif'
      }}
    >
      {/* 1. Lungs & Pulmonary Function Card */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: selectedCondition?.organ === 'lungs' ? '1.5px solid #db2777' : '1px solid #e2e8f0',
          padding: '20px',
          boxShadow: selectedCondition?.organ === 'lungs' ? '0 6px 20px rgba(219, 39, 119,0.08)' : '0 4px 14px rgba(0,0,0,0.03)',
          transition: 'all 0.2s ease',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#0f172a', margin: 0 }}>Lungs</h3>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Updated: Oct 27, 2025 at 2:15 PM</span>
          </div>
          <span style={{
            fontSize: '11px',
            padding: '3px 9px',
            borderRadius: '6px',
            background: '#ecfdf5',
            color: '#059669',
            fontWeight: 800,
            border: '1px solid #a7f3d0'
          }}>
            Stable
          </span>
        </div>

        {/* Checkup Summary Card */}
        <div style={{
          background: '#f8fafc',
          borderRadius: '14px',
          padding: '14px',
          border: '1px solid #f1f5f9',
          marginTop: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>
            <FileText size={14} color="#db2777" />
            <span>Pulmonary function test</span>
          </div>
          <p style={{ fontSize: '11px', color: '#64748b', margin: '6px 0 12px 0', lineHeight: 1.45 }}>
            Comprehensive respiratory evaluation. Results show stable lung capacity and normal oxygen delivery.
          </p>

          {/* Diagnostic X-Ray & CT Radiography Strip */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
            {/* PA Chest X-Ray */}
            <div style={{
              flex: 1,
              height: '70px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1.5px solid #cbd5e1',
              position: 'relative',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
            }}>
              <img
                src="/images/chest_xray_scan.jpg"
                alt="Chest X-Ray PA View"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute',
                bottom: '3px',
                right: '4px',
                fontSize: '9px',
                fontWeight: 800,
                color: '#ffffff',
                background: 'rgba(15, 23, 42, 0.75)',
                padding: '1px 5px',
                borderRadius: '4px'
              }}>PA</span>
            </div>

            {/* Lateral Chest X-Ray */}
            <div style={{
              flex: 1,
              height: '70px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1.5px solid #cbd5e1',
              position: 'relative',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
            }}>
              <img
                src="/images/chest_lat_xray.jpg"
                alt="Lateral Chest X-Ray"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute',
                bottom: '3px',
                right: '4px',
                fontSize: '9px',
                fontWeight: 800,
                color: '#ffffff',
                background: 'rgba(15, 23, 42, 0.75)',
                padding: '1px 5px',
                borderRadius: '4px'
              }}>CHEST-LAT</span>
            </div>

            {/* Axial CT Scan Slice */}
            <div style={{
              flex: 1,
              height: '70px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1.5px solid #cbd5e1',
              position: 'relative',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
            }}>
              <img
                src="/images/ct_axial_scan.jpg"
                alt="Thoracic Axial CT Scan Slice"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute',
                bottom: '3px',
                right: '4px',
                fontSize: '9px',
                fontWeight: 800,
                color: '#ffffff',
                background: 'rgba(15, 23, 42, 0.75)',
                padding: '1px 5px',
                borderRadius: '4px'
              }}>CT-AXIAL</span>
            </div>
          </div>

          {/* Telemetry Metrics */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#475569', borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
            <span>FEVI: <strong style={{ color: '#0f172a' }}>4.8 L</strong></span>
            <span>O2 Level: <strong style={{ color: '#059669' }}>97.2%</strong></span>
            <span>Heart Rate: <strong style={{ color: '#0f172a' }}>72 BPM</strong></span>
          </div>
        </div>

        {/* Oxygen Trajectory Month Graph Section */}
        <div style={{ marginTop: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>OXYGEN LEVEL</span>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a' }}>97.2%</div>
            </div>
            <div style={{ fontSize: '11px', textAlign: 'right' }}>
              <div><span style={{ color: '#059669', fontWeight: 800 }}>● This month:</span> <strong style={{ color: '#0f172a' }}>97.4%</strong></div>
              <div><span style={{ color: '#db2777', fontWeight: 800 }}>● Previous:</span> <strong style={{ color: '#64748b' }}>92.2%</strong></div>
            </div>
          </div>

          {/* SVG Spline Graph Container */}
          <div style={{ height: '54px', width: '100%', position: 'relative', marginTop: '4px' }}>
            <svg viewBox="0 0 280 54" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <defs>
                <linearGradient id="oxygenGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#059669" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Gradient Area Fill */}
              <path
                d="M 10 32 Q 70 38 125 20 T 225 10 T 270 14 L 270 54 L 10 54 Z"
                fill="url(#oxygenGrad)"
              />

              {/* Previous Month Baseline (Blue dashed curve) */}
              <path
                d="M 10 42 Q 70 32 125 40 T 225 48 T 270 45"
                fill="none"
                stroke="#f9a8d4"
                strokeWidth="2"
                strokeDasharray="4 3"
              />

              {/* This Month Active (Green solid curve) */}
              <path
                d="M 10 32 Q 70 38 125 20 T 225 10 T 270 14"
                fill="none"
                stroke="#059669"
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              {/* Peak indicator dot & label */}
              <circle cx="225" cy="10" r="4.5" fill="#059669" stroke="#ffffff" strokeWidth="2" />
              <rect x="205" y="-3" width="40" height="15" rx="5" fill="#db2777" />
              <text x="225" y="8" fill="#ffffff" fontSize="9.5" fontWeight="bold" textAnchor="middle">97.4%</text>
            </svg>
          </div>

          {/* Clean, Non-Overlapping Dates Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '11px',
            color: '#475569',
            fontWeight: 700,
            marginTop: '8px',
            marginBottom: '16px',
            padding: '0 4px'
          }}>
            <span>Sep 2</span>
            <span>Sep 9</span>
            <span>Sep 16</span>
            <span>Sep 23</span>
            <span>Sep 30</span>
          </div>
        </div>

        {/* Quick Report Actions (Cleanly Spaced) */}
        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
          <button
            onClick={onOpenExportModal}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '12px',
              border: 'none',
              background: '#db2777',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(219, 39, 119,0.3)',
              transition: 'all 0.15s ease'
            }}
          >
            <Plus size={15} />
            <span>Add Record / Export</span>
          </button>
          <button
            onClick={onOpenExportModal}
            title="Download PDF"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              color: '#475569',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <Download size={16} />
          </button>
        </div>
      </div>

      {/* 2. Left Shoulder Joint Mobility */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: selectedCondition?.organ === 'shoulder' ? '1.5px solid #f59e0b' : '1px solid #e2e8f0',
          padding: '18px',
          boxShadow: selectedCondition?.organ === 'shoulder' ? '0 6px 20px rgba(245,158,11,0.08)' : '0 4px 14px rgba(0,0,0,0.03)',
          transition: 'all 0.2s ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>Left Shoulder</h3>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Dr. Steven Fandel</span>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#d97706', background: '#fffbeb', padding: '2px 8px', borderRadius: '6px', border: '1px solid #fde68a' }}>
            Moderate
          </span>
        </div>

        <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>Pain Severity Index (14/20)</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '20px',
                borderRadius: '4px',
                background: i < 14 ? 'linear-gradient(180deg, #f472b6 0%, #db2777 100%)' : '#f1f5f9'
              }}
            />
          ))}
        </div>
      </div>

      {/* 3. Osteoarthritis Left Knee Card with X-Ray Asset */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: selectedCondition?.organ === 'knee' ? '1.5px solid #ef4444' : '1px solid #e2e8f0',
          padding: '18px',
          boxShadow: selectedCondition?.organ === 'knee' ? '0 6px 20px rgba(239,68,68,0.08)' : '0 4px 14px rgba(0,0,0,0.03)',
          transition: 'all 0.2s ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>Osteoarthritis (Left Knee)</h3>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Dr. Vetrick Wilsen</span>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#ef4444', background: '#fef2f2', padding: '2px 8px', borderRadius: '6px', border: '1px solid #fecaca' }}>
            Attention
          </span>
        </div>

        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', margin: '8px 0' }}>
          {/* Orthopedic Knee X-Ray Asset Preview */}
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1.5px solid #ef4444',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(239,68,68,0.15)'
          }}>
            <img
              src="/images/knee_xray_scan.jpg"
              alt="Left Knee Osteoarthritis X-Ray"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>
              <span>Current Range: <strong style={{ color: '#0f172a' }}>75°</strong></span>
              <span>Target: <strong style={{ color: '#059669' }}>120°</strong></span>
            </div>
            <p style={{ fontSize: '11px', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
              Joint space narrowing. Physiotherapy regimen assigned.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
