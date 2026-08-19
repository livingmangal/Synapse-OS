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
  Eye
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
        gap: '18px',
        width: '380px',
        flexShrink: 0
      }}
    >
      {/* 1. Lungs & Pulmonary Function Card (Matching Healix Image 1) */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '18px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#0f172a', margin: 0 }}>Lungs</h3>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Updated: Oct 27, 2025 at 2:15 PM</span>
          </div>
          <span style={{
            fontSize: '11px',
            padding: '2px 8px',
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
          marginTop: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>
            <FileText size={14} color="#2563eb" />
            <span>Pulmonary function test</span>
          </div>
          <p style={{ fontSize: '11px', color: '#64748b', margin: '6px 0 10px 0', lineHeight: 1.45 }}>
            Comprehensive respiratory evaluation. Results show stable lung capacity and normal oxygen delivery.
          </p>

          {/* Diagnostic X-Ray Radiography Strip (Chest Radiograph Asset) */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <div style={{
              flex: 1,
              height: '62px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              position: 'relative'
            }}>
              <img
                src="/images/chest_xray_scan.jpg"
                alt="Chest X-Ray PA"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute',
                bottom: '2px',
                right: '4px',
                fontSize: '9px',
                fontWeight: 800,
                color: '#ffffff',
                background: 'rgba(0,0,0,0.6)',
                padding: '1px 4px',
                borderRadius: '3px'
              }}>PA</span>
            </div>

            <div style={{
              flex: 1,
              height: '62px',
              borderRadius: '10px',
              background: '#0f172a',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              fontSize: '10px',
              border: '1px solid #1e293b'
            }}>
              <span style={{ fontWeight: 800, color: '#38bdf8' }}>CHEST-LAT</span>
              <span style={{ fontSize: '9px' }}>Inspiration</span>
            </div>

            <div style={{
              flex: 1,
              height: '62px',
              borderRadius: '10px',
              background: '#0f172a',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              fontSize: '10px',
              border: '1px solid #1e293b'
            }}>
              <span style={{ fontWeight: 800, color: '#10b981' }}>CT-AXIAL</span>
              <span style={{ fontSize: '9px' }}>Slice #14</span>
            </div>
          </div>

          {/* Telemetry Metrics */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#475569', borderTop: '1px solid #e2e8f0', paddingTop: '8px' }}>
            <span>FEVI: <strong style={{ color: '#0f172a' }}>4.8 L</strong></span>
            <span>O2 Level: <strong style={{ color: '#059669' }}>97.2%</strong></span>
            <span>Heart Rate: <strong style={{ color: '#0f172a' }}>72 BPM</strong></span>
          </div>
        </div>

        {/* Oxygen Trajectory Month Graph (Matching Healix Image 1) */}
        <div style={{ marginTop: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
            <div>
              <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Oxygen level</span>
              <div style={{ fontSize: '16px', fontWeight: 900, color: '#0f172a' }}>97.2%</div>
            </div>
            <div style={{ fontSize: '10px', textAlign: 'right' }}>
              <div><span style={{ color: '#059669', fontWeight: 800 }}>● This month:</span> 97.4%</div>
              <div><span style={{ color: '#2563eb', fontWeight: 800 }}>● Previous:</span> 92.2%</div>
            </div>
          </div>

          {/* Interactive Trajectory SVG Spline */}
          <div style={{ height: '56px', position: 'relative' }}>
            <svg viewBox="0 0 260 56" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              {/* Previous month baseline (blue curve) */}
              <path
                d="M 10 40 Q 60 30 110 38 T 200 48 T 250 45"
                fill="none"
                stroke="#93c5fd"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              {/* This month active (green curve) */}
              <path
                d="M 10 32 Q 60 38 110 20 T 200 12 T 250 16"
                fill="none"
                stroke="#059669"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Peak indicator dot */}
              <circle cx="200" cy="12" r="4" fill="#059669" />
              <rect x="182" y="0" width="36" height="14" rx="4" fill="#2563eb" />
              <text x="200" y="10" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">97.4%</text>
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8', marginTop: '2px' }}>
              <span>Sep 2</span>
              <span>Sep 9</span>
              <span>Sep 16</span>
              <span>Sep 23</span>
              <span>Sep 30</span>
            </div>
          </div>
        </div>

        {/* Quick Report Actions */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
          <button
            onClick={onOpenExportModal}
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '10px',
              border: 'none',
              background: '#2563eb',
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(37,99,235,0.3)'
            }}
          >
            <Plus size={14} />
            <span>Add Record / Export</span>
          </button>
          <button
            onClick={onOpenExportModal}
            title="Download PDF"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              color: '#475569',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* 2. Left Shoulder Joint Mobility (Matching Image 2) */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '16px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>Left Shoulder</h3>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Dr. Steven Fandel</span>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#f59e0b', background: '#fffbeb', padding: '2px 8px', borderRadius: '6px', border: '1px solid #fde68a' }}>
            Moderate
          </span>
        </div>

        <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', marginBottom: '6px' }}>Pain Severity Index (14/20)</div>
        <div style={{ display: 'flex', gap: '3px' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '18px',
                borderRadius: '3px',
                background: i < 14 ? 'linear-gradient(180deg, #60a5fa 0%, #2563eb 100%)' : '#f1f5f9'
              }}
            />
          ))}
        </div>
      </div>

      {/* 3. Osteoarthritis Left Knee Card with X-Ray Asset (Matching Image 2) */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '16px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>Osteoarthritis (Left Knee)</h3>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Dr. Vetrick Wilsen</span>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 800, color: '#ef4444', background: '#fef2f2', padding: '2px 8px', borderRadius: '6px', border: '1px solid #fecaca' }}>
            Attention
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', margin: '8px 0' }}>
          {/* Orthopedic Knee X-Ray Asset Preview */}
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid #ef4444',
            flexShrink: 0
          }}>
            <img
              src="/images/knee_xray_scan.jpg"
              alt="Left Knee Osteoarthritis X-Ray"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b' }}>
              <span>Current Range: <strong style={{ color: '#0f172a' }}>75°</strong></span>
              <span>Target: <strong style={{ color: '#059669' }}>120°</strong></span>
            </div>
            <p style={{ fontSize: '11px', color: '#64748b', margin: '4px 0 0 0', lineHeight: 1.4 }}>
              Joint space narrowing. Physiotherapy regimen assigned.
            </p>
          </div>
        </div>
      </div>

      {/* Swarm Quick Launch Banner */}
      {onNavigateToSwarmTab && (
        <button
          onClick={onNavigateToSwarmTab}
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            borderRadius: '16px',
            padding: '12px 16px',
            border: 'none',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(15,23,42,0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="#38bdf8" />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff' }}>Run Agent Swarm DAG</div>
              <div style={{ fontSize: '10px', color: '#94a3b8' }}>Evaluate cross-agent drug & triage DAG</div>
            </div>
          </div>
          <ChevronRight size={16} color="#38bdf8" />
        </button>
      )}
    </div>
  );
}
