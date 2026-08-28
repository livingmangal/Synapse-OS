import React, { useState } from 'react';
import { 
  MOCK_HEALTH_PROFILES, 
  MockHealthProfile, 
  mausamKarProfile 
} from '@/data/mockHealthProfiles';
import { 
  Sparkles, 
  Stethoscope, 
  PieChart, 
  Radio, 
  ScanLine, 
  FileText, 
  Smartphone, 
  ChevronRight, 
  Activity,
  Heart,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Watch
} from 'lucide-react';

interface FullScreenOrchestratorDockProps {
  activeProfileId: string;
  onSelectProfile: (profileId: string) => void;
  onTriggerAgentQuery: (query: string) => void;
}

export default function FullScreenOrchestratorDock({
  activeProfileId,
  onSelectProfile,
  onTriggerAgentQuery
}: FullScreenOrchestratorDockProps) {
  const [activeModuleTab, setActiveModuleTab] = useState<'all' | 'swarm' | 'conditions' | 'analytics' | 'who' | 'scan' | 'abha' | 'rural'>('all');
  
  const currentProfile = MOCK_HEALTH_PROFILES.find(p => p.profileId === activeProfileId) || mausamKarProfile;
  const isMausam = currentProfile.profileId === 'mausam_kar_verified_abha';

  const AGENT_MODULES = [
    {
      id: 'swarm',
      name: 'Swarm Intelligence',
      badge: '5-Agent Consensus',
      icon: Sparkles,
      color: '#0284c7',
      bgGradient: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)',
      border: '#bae6fd',
      actions: [
        { label: 'Run 5-Agent Consensus', query: `Execute Swarm Intelligence multi-agent consensus for patient ${currentProfile.patient.name} (${currentProfile.patient.abhaId}) covering Triage, Drug Interaction, Mental Health, and Biometrics.` },
        { label: 'Check Drug Interactions', query: `Check all active medications for ${currentProfile.patient.name} against CYP450 contraindications and allergen triggers in their ABHA record.` },
        { label: 'Biometric Verification', query: `Verify physiological data streams from ${currentProfile.device?.name || 'Apple Watch Ultra 2'} and validate against baseline clinical telemetry.` }
      ]
    },
    {
      id: 'conditions',
      name: 'Clinical Digital Twin',
      badge: 'Organ Telemetry',
      icon: Stethoscope,
      color: '#db2777',
      bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)',
      border: '#fbcfe8',
      actions: [
        { label: 'Pulmonary & Lung Status', query: `Analyze respiratory and pulmonary condition for ${currentProfile.patient.name}. SpO2 is ${currentProfile.vitals.spo2}%, respiratory rate is ${currentProfile.vitals.respiratoryRate || '16'} breaths/min.` },
        { label: 'Cardiovascular Risk', query: `Evaluate cardiovascular telemetry for ${currentProfile.patient.name}. Heart Rate: ${currentProfile.vitals.currentHeartRate} BPM, BP: ${currentProfile.vitals.bloodPressure || '118/76'}, HRV: ${currentProfile.vitals.hrvMs || 62}ms.` },
        { label: 'Metabolic Pathology', query: `Assess metabolic state for ${currentProfile.patient.name}. Blood glucose: ${currentProfile.vitals.bloodGlucose || 92} mg/dL, Daily Calories: 2,150 kcal.` }
      ]
    },
    {
      id: 'analytics',
      name: 'Visual Analytics',
      badge: 'Continuous Vitals',
      icon: PieChart,
      color: '#8b5cf6',
      bgGradient: 'linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%)',
      border: '#ddd6fe',
      actions: [
        { label: '7-Day Sleep & Recovery', query: `Generate 7-day sleep architecture analysis for ${currentProfile.patient.name}: Deep Sleep 1h 45m, REM 2h 10m, Sleep Score 88.` },
        { label: 'ECG Sinus Rhythm Check', query: `Interpret single-lead wearable ECG trace for ${currentProfile.patient.name}. Check QTc interval, rhythm regularity, and ST elevation anomalies.` },
        { label: 'Care Plan Adherence', query: `Evaluate hydration, medication schedule, and physical activity adherence for ${currentProfile.patient.name}.` }
      ]
    },
    {
      id: 'who',
      name: 'WHO Disease Surveillance',
      badge: 'IDSP Live Sentinel',
      icon: Radio,
      color: '#dc2626',
      bgGradient: 'linear-gradient(135deg, #fef2f2 0%, #ffffff 100%)',
      border: '#fecaca',
      actions: [
        { label: 'Delhi Dengue Outbreak Telemetry', query: `Fetch WHO & IDSP regional outbreak report for Delhi NCR. Active cases: 1,420, ICU load: 68%, vector index: High Alert.` },
        { label: 'Kerala Nipah Sentinel Alert', query: `Provide current biosafety and regional isolation directives for Kozhikode, Kerala Nipah virus surveillance node.` },
        { label: 'Regional Epidemiological Directives', query: `Summarize national disease surveillance directives, quarantine guidelines, and monsoon vector advisories.` }
      ]
    },
    {
      id: 'scan',
      name: 'Medical Imaging & Scan AI',
      badge: 'MONAI & YOLOv8',
      icon: ScanLine,
      color: '#059669',
      bgGradient: 'linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%)',
      border: '#a7f3d0',
      actions: [
        { label: 'Analyze Chest Radiograph (AIIMS)', query: `Run MONAI Chest X-Ray diagnostic analysis for ${currentProfile.patient.name}. Check for focal opacity, effusion, and cardiomegaly.` },
        { label: 'YOLOv8 Fracture Localization', query: `Run automated trauma radiograph screening for skeletal fracture detection and soft tissue swelling.` },
        { label: 'Prescription OCR Digitization', query: `Digitize clinical handwritten prescription into FHIR R4 structured JSON and cross-reference with formulary.` }
      ]
    },
    {
      id: 'abha',
      name: 'Blockchain ABHA Records',
      badge: 'IPFS & U-WIN Milestones',
      icon: FileText,
      color: '#0284c7',
      bgGradient: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)',
      border: '#bae6fd',
      actions: [
        { label: 'Verify Longitudinal ABHA Records', query: `Query ABDM blockchain gateway for longitudinal health records linked to ABHA ID ${currentProfile.patient.abhaId} (${currentProfile.patient.name}).` },
        { label: 'U-WIN Immunization Milestones', query: `Audit Universal Immunization Programme (UIP) milestone certificates and COVID booster ledger for ${currentProfile.patient.name}.` },
        { label: 'Smart Contract Verification', query: `Inspect cryptographic IPFS root CID and Polygon Amoy testnet consent transaction for health data exchange.` }
      ]
    },
    {
      id: 'rural',
      name: 'Rural Health & Omnichannel',
      badge: '2G GSM SMS & Voice',
      icon: Smartphone,
      color: '#d97706',
      bgGradient: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)',
      border: '#fde68a',
      actions: [
        { label: 'Generate 160-Char 2G SMS Triage', query: `Generate a zero-bandwidth 160-character plain-text SMS triage advisory in Hindi and English for emergency rural dispatch.` },
        { label: 'Simulate WhatsApp Audio Triage', query: `Simulate inbound voice note clinical triage workflow from WhatsApp Omni-Channel Gateway for rural outreach.` },
        { label: 'NHM Health Literacy Blueprint', query: `Provide simple National Health Mission preventive healthcare advisory tailored to maternal and child wellness.` }
      ]
    }
  ];

  const filteredModules = activeModuleTab === 'all' 
    ? AGENT_MODULES 
    : AGENT_MODULES.filter(m => m.id === activeModuleTab);

  return (
    <aside style={{
      width: '340px',
      minWidth: '340px',
      maxWidth: '340px',
      borderRight: '1.5px solid #e2e8f0',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden'
    }}>
      {/* 1. Active Patient Card */}
      <div style={{
        padding: '16px',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #fdf2f8 100%)',
        borderBottom: '1.2px solid #bae6fd',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0284c7 0%, #db2777 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '15px',
              boxShadow: '0 3px 10px rgba(2, 132, 199, 0.25)'
            }}>
              {currentProfile.patient.name.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 900, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span>{currentProfile.patient.name}</span>
                {isMausam && (
                  <span style={{
                    fontSize: '8.5px',
                    fontWeight: 900,
                    padding: '1px 5px',
                    borderRadius: '4px',
                    background: 'linear-gradient(135deg, #0284c7 0%, #db2777 100%)',
                    color: '#ffffff'
                  }}>
                    ADMIN
                  </span>
                )}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>
                ABHA: {currentProfile.patient.abhaId}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#15803d', fontWeight: 800, background: '#dcfce7', padding: '3px 8px', borderRadius: '999px', border: '1px solid #86efac' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16a34a' }} />
            <span>Synced</span>
          </div>
        </div>

        {/* Patient Switcher Chips */}
        <div>
          <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.04em' }}>
            SELECT PATIENT
          </div>
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '3px' }} className="synapseos-custom-scroll">
            {MOCK_HEALTH_PROFILES.map((p) => {
              const selected = p.profileId === currentProfile.profileId;
              return (
                <button
                  key={p.profileId}
                  onClick={() => onSelectProfile(p.profileId)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '8px',
                    background: selected ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' : '#ffffff',
                    color: selected ? '#ffffff' : '#334155',
                    border: selected ? '1px solid #0284c7' : '1px solid #cbd5e1',
                    fontSize: '11px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    boxShadow: selected ? '0 2px 6px rgba(2, 132, 199, 0.25)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {p.patient.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Box Telemetry Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '6px'
        }}>
          <div style={{ background: '#ffffff', padding: '8px 4px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', color: '#64748b', fontWeight: 700 }}>HR</div>
            <div style={{ fontSize: '12px', fontWeight: 900, color: '#ef4444', marginTop: '1px' }}>{currentProfile.vitals.currentHeartRate}</div>
          </div>
          <div style={{ background: '#ffffff', padding: '8px 4px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', color: '#64748b', fontWeight: 700 }}>SpO2</div>
            <div style={{ fontSize: '12px', fontWeight: 900, color: '#0284c7', marginTop: '1px' }}>{currentProfile.vitals.spo2}%</div>
          </div>
          <div style={{ background: '#ffffff', padding: '8px 4px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', color: '#64748b', fontWeight: 700 }}>BP</div>
            <div style={{ fontSize: '11px', fontWeight: 900, color: '#059669', marginTop: '2px' }}>{currentProfile.vitals.bloodPressure || '118/76'}</div>
          </div>
          <div style={{ background: '#ffffff', padding: '8px 4px', borderRadius: '10px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ fontSize: '9px', color: '#64748b', fontWeight: 700 }}>GLUCOSE</div>
            <div style={{ fontSize: '12px', fontWeight: 900, color: '#8b5cf6', marginTop: '1px' }}>{currentProfile.vitals.bloodGlucose || 92}</div>
          </div>
        </div>
      </div>

      {/* 2. Filter Tabs */}
      <div style={{
        padding: '10px 14px',
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        gap: '5px',
        overflowX: 'auto'
      }} className="synapseos-custom-scroll">
        {[
          { id: 'all', label: 'All Modules' },
          { id: 'swarm', label: '🧠 Swarm' },
          { id: 'conditions', label: '🫀 Twin' },
          { id: 'analytics', label: '📊 Analytics' },
          { id: 'who', label: '🌐 WHO' },
          { id: 'scan', label: '🔬 Scan' },
          { id: 'abha', label: '🔗 ABHA' },
          { id: 'rural', label: '📱 Rural' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setActiveModuleTab(t.id as any)}
            style={{
              padding: '5px 10px',
              borderRadius: '8px',
              background: activeModuleTab === t.id ? '#0f172a' : '#f1f5f9',
              color: activeModuleTab === t.id ? '#ffffff' : '#64748b',
              border: 'none',
              fontSize: '10.5px',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease'
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 3. Orchestrator Actions Matrix */}
      <div 
        data-lenis-prevent="true"
        className="synapseos-custom-scroll"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          background: '#f8fafc'
        }}
      >
        <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          ⚡ DIRECT SUB-AGENT ACTIONS
        </div>

        {filteredModules.map((mod) => {
          const Icon = mod.icon;
          return (
            <div
              key={mod.id}
              style={{
                background: '#ffffff',
                borderRadius: '14px',
                border: `1.2px solid ${mod.border}`,
                padding: '12px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Icon size={14} color={mod.color} />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>
                    {mod.name}
                  </span>
                </div>
                <span style={{
                  fontSize: '9px',
                  fontWeight: 800,
                  color: mod.color,
                  background: mod.bgGradient,
                  border: `1px solid ${mod.border}`,
                  padding: '2px 6px',
                  borderRadius: '6px'
                }}>
                  {mod.badge}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {mod.actions.map((act, aIdx) => (
                  <button
                    key={aIdx}
                    onClick={() => onTriggerAgentQuery(act.query)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 10px',
                      borderRadius: '8px',
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      color: '#334155',
                      fontSize: '11px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = mod.color;
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = mod.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.color = '#334155';
                    }}
                  >
                    <span>⚡ {act.label}</span>
                    <ChevronRight size={12} color="#94a3b8" />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
