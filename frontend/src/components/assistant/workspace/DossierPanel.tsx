'use client';

import React from 'react';
import { MockHealthProfile } from '@/data/mockHealthProfiles';
import { getPatientPhotoUrl } from './types';
import { SupportedLanguage } from '../types';
import { getTranslation } from '../translations';
import { 
  Watch, 
  ChevronRight, 
  Sparkles, 
  Stethoscope, 
  Radio, 
  ScanLine, 
  FileText, 
  Smartphone 
} from 'lucide-react';

interface DossierPanelProps {
  currentProfile: MockHealthProfile;
  onTriggerAgentQuery: (query: string) => void;
  selectedLanguage?: SupportedLanguage;
}

export default function DossierPanel({
  currentProfile,
  onTriggerAgentQuery,
  selectedLanguage = 'en'
}: DossierPanelProps) {
  const t = getTranslation(selectedLanguage);
  const patientName = currentProfile?.patient?.name || 'Patient';
  const patientAbha = currentProfile?.patient?.abhaId || 'ABDM-VERIFIED';
  const heartRate = currentProfile?.vitals?.currentHeartRate || 72;
  const spo2 = currentProfile?.vitals?.spo2 || 98.4;
  const bloodPressure = currentProfile?.vitals?.bloodPressure || '118/76';
  const deviceName = currentProfile?.device?.name || 'Apple Watch Ultra 2';
  const deviceFirmware = currentProfile?.device?.firmware || 'v4.2';
  const deviceBattery = currentProfile?.device?.battery || 92;

  const orchestratorActions = [
    {
      title: t.dossier.subAgents.swarm,
      icon: Sparkles,
      color: '#0284c7',
      query: `Execute Swarm Intelligence multi-agent consensus for patient ${patientName} (${patientAbha}) covering Triage, Drug Interaction, Mental Health, and Biometrics.`
    },
    {
      title: t.dossier.subAgents.organTwin,
      icon: Stethoscope,
      color: '#db2777',
      query: `Evaluate pulmonary, cardiovascular, and metabolic telemetry for ${patientName}. Heart Rate: ${heartRate} BPM, SpO2: ${spo2}%, Blood Pressure: ${bloodPressure}.`
    },
    {
      title: t.dossier.subAgents.who,
      icon: Radio,
      color: '#dc2626',
      query: `Fetch WHO & IDSP regional outbreak report for Delhi NCR. Active cases: 1,420, ICU load: 68%, vector index: High Alert.`
    },
    {
      title: t.dossier.subAgents.uwin,
      icon: FileText,
      color: '#059669',
      query: `Query Universal Immunization Programme (U-WIN / UIP) records and vaccination schedule for ${patientName}. Verify booster status and upcoming milestone vaccines.`
    },
    {
      title: t.dossier.subAgents.scan,
      icon: ScanLine,
      color: '#4f46e5',
      query: `Run MONAI Chest X-Ray and YOLOv8 trauma screening for ${patientName}. Check for pulmonary infiltrates and skeletal fractures.`
    },
    {
      title: t.dossier.subAgents.blockchain,
      icon: FileText,
      color: '#7c3aed',
      query: `Query ABDM blockchain gateway for longitudinal health records linked to ABHA ID ${patientAbha} (${patientName}).`
    },
    {
      title: t.dossier.subAgents.rural,
      icon: Smartphone,
      color: '#d97706',
      query: `Generate a zero-bandwidth 160-character plain-text SMS triage advisory in Hindi and English for emergency rural dispatch.`
    }
  ];

  return (
    <aside 
      className="synapseos-fullscreen-dossier"
      style={{
        width: '320px',
        minWidth: '320px',
        maxWidth: '320px',
        flexShrink: 0,
        background: '#ffffff',
        borderLeft: '1.2px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          {t.dossier.title}
        </span>
        <span style={{ fontSize: '9.5px', fontWeight: 800, color: '#16a34a', background: '#dcfce7', padding: '2px 5px', borderRadius: '4px', border: '1px solid #86efac' }}>
          {t.dossier.connected}
        </span>
      </div>

      {/* Body */}
      <div 
        data-lenis-prevent="true"
        className="synapseos-custom-scroll"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {/* Patient Profile Card */}
        <div style={{
          background: '#f8fafc',
          border: '1.2px solid #e2e8f0',
          borderRadius: '10px',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src={getPatientPhotoUrl(currentProfile?.profileId || '')} 
              alt={patientName}
              style={{ width: '42px', height: '42px', borderRadius: '10px', objectFit: 'cover', border: '1.5px solid #0284c7' }}
            />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 900, color: '#0f172a' }}>
                {patientName}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>
                {currentProfile?.patient?.age || 24} {t.dossier.yrs} • {currentProfile?.patient?.gender || 'Male'} • {t.dossier.blood}: <b style={{ color: '#0284c7' }}>{currentProfile?.patient?.bloodType || 'B+'}</b>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '11px', color: '#475569', background: '#ffffff', padding: '6px 8px', borderRadius: '6px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
            <span>ABHA ID:</span>
            <span style={{ fontWeight: 800, color: '#0284c7' }}>{patientAbha}</span>
          </div>

          {/* Mini Vitals Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', textAlign: 'center', background: '#ffffff', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <div>
              <div style={{ fontSize: '8px', color: '#64748b', fontWeight: 700 }}>{t.dossier.heartRate}</div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#dc2626' }}>{heartRate} BPM</div>
            </div>
            <div>
              <div style={{ fontSize: '8px', color: '#64748b', fontWeight: 700 }}>{t.dossier.oxygen}</div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0284c7' }}>{spo2}%</div>
            </div>
            <div>
              <div style={{ fontSize: '8px', color: '#64748b', fontWeight: 700 }}>{t.dossier.pressure}</div>
              <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#16a34a' }}>{bloodPressure}</div>
            </div>
          </div>
        </div>

        {/* Connected Wearable Card */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Watch size={15} color="#0284c7" />
            <div>
              <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#0f172a' }}>
                {deviceName}
              </div>
              <div style={{ fontSize: '10px', color: '#64748b' }}>
                Firmware {deviceFirmware} • Battery {deviceBattery}%
              </div>
            </div>
          </div>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#16a34a', background: '#dcfce7', padding: '2px 5px', borderRadius: '4px' }}>
            {t.dossier.synced}
          </span>
        </div>

        {/* Orchestrator Sub-Agent Triggers */}
        <div>
          <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.04em' }}>
            {t.dossier.subAgentsTitle}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {orchestratorActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onTriggerAgentQuery(action.query)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: '6px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    color: '#334155',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = action.color;
                    e.currentTarget.style.color = action.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.color = '#334155';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Icon size={13} color={action.color} />
                    <span>{action.title}</span>
                  </div>
                  <ChevronRight size={12} color="#94a3b8" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Clinical Directives & Tags */}
        <div>
          <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.04em' }}>
            {t.dossier.directivesTitle}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            <span style={{ fontSize: '9.5px', fontWeight: 700, padding: '3px 7px', borderRadius: '4px', background: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0' }}>
              {t.dossier.directives.sinus}
            </span>
            <span style={{ fontSize: '9.5px', fontWeight: 700, padding: '3px 7px', borderRadius: '4px', background: '#f0f9ff', color: '#0369a1', border: '1px solid #bae6fd' }}>
              {t.dossier.directives.noConflicts}
            </span>
            <span style={{ fontSize: '9.5px', fontWeight: 700, padding: '3px 7px', borderRadius: '4px', background: '#fef2f2', color: '#b91c1c', border: '1px solid #fecaca' }}>
              {t.dossier.directives.idsp}
            </span>
            <span style={{ fontSize: '9.5px', fontWeight: 700, padding: '3px 7px', borderRadius: '4px', background: '#fdf4ff', color: '#a21caf', border: '1px solid #f5d0fe' }}>
              {t.dossier.directives.ipfs}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
