'use client';

import React from 'react';
import { 
  HeartPulse, 
  Search, 
  Download, 
  Bell, 
  Sparkles, 
  BarChart3, 
  Activity, 
  Building2,
  Layers,
  Globe
} from 'lucide-react';
import { PatientInfo } from './types';

interface TopNavProps {
  activeTab: 'overview' | 'swarm' | 'analytics' | 'hospital' | 'scan';
  onTabChange: (tab: 'overview' | 'swarm' | 'analytics' | 'hospital' | 'scan') => void;
  patient: PatientInfo;
  onOpenExportModal: () => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
}

export default function OrchestratorTopNav({
  activeTab,
  onTabChange,
  patient,
  onOpenExportModal,
  searchQuery = '',
  onSearchChange
}: TopNavProps) {
  const WhoIcon = ({ size }: { size?: number | string }) => (
    <img src="/who.svg" alt="WHO Logo" style={{ width: size || 13, height: size || 13, objectFit: 'contain' }} />
  );

  const tabs = [
    { id: 'swarm', label: 'Swarm Intelligence', icon: Sparkles },
    { id: 'overview', label: 'My Condition', icon: Layers },
    { id: 'analytics', label: 'Visual Analytics', icon: BarChart3 },
    { id: 'hospital', label: 'WHO Global Surveillance', icon: WhoIcon },
    { id: 'scan', label: 'Medical Scan AI', icon: Search }
  ];

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 28px',
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 1px 4px rgba(0,0,0,0.02)',
      gap: '20px'
    }}>
      {/* Brand & Subtitle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '220px' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
          color: '#ef4444',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(239, 68, 68, 0.2)'
        }}>
          <HeartPulse size={22} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h1 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
              Health and care
            </h1>
            <span style={{
              fontSize: '10px',
              fontWeight: 800,
              padding: '2px 8px',
              borderRadius: '9999px',
              background: '#fdf2f8',
              color: '#db2777',
              border: '1px solid #fbcfe8'
            }}>
              Sanjeevani OS
            </span>
          </div>
          <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>
            Unified Multi-Agent Clinical Diagnostics & 3D Twin
          </p>
        </div>
      </div>

      {/* Center Navigation Pills */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#f1f5f9',
        padding: '3px',
        borderRadius: '9999px',
        border: '1px solid #e2e8f0',
        gap: '3px',
        margin: '0 auto' // Centers the pills since search is gone
      }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="orch-nav-pill"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '12px',
                whiteSpace: 'nowrap', // Keeps text in a single line
                fontWeight: isActive ? 800 : 600,
                background: isActive ? '#db2777' : 'transparent',
                color: isActive ? '#ffffff' : '#64748b',
                cursor: 'pointer',
                boxShadow: isActive ? '0 2px 8px rgba(219, 39, 119,0.3)' : 'none'
              }}
            >
              <Icon size={13} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Right Controls & Patient Avatar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Quick Export Hub Trigger */}
        <button
          onClick={onOpenExportModal}
          title="Export HL7 FHIR Bundle / Download Clinical PDF"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 14px',
            background: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '10px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#1e293b',
            cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            transition: 'all 0.15s ease'
          }}
        >
          <Download size={13} color="#db2777" />
          <span>Export Hub</span>
        </button>

        {/* Notification Bell */}
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#64748b',
          cursor: 'pointer',
          position: 'relative'
        }}>
          <Bell size={16} />
          <span style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#ef4444'
          }} />
        </div>

        {/* Patient Profile Widget */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          paddingLeft: '12px',
          borderLeft: '1px solid #e2e8f0'
        }}>
          <img
            src={patient.avatarUrl}
            alt={patient.name}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #fbcfe8'
            }}
          />
          <div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>
              {patient.name}
            </div>
            <div style={{ fontSize: '10px', color: '#64748b' }}>
              ABHA: <span style={{ fontWeight: 700, color: '#db2777' }}>{patient.abhaId}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
