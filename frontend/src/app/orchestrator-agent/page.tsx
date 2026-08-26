'use client';

import React, { useState, useEffect } from 'react';
import './orchestrator.css';

import OrchestratorSidebar from '@/components/orchestrator/OrchestratorSidebar';
import OrchestratorTopNav from '@/components/orchestrator/OrchestratorTopNav';
import PatientVitalsPanel from '@/components/orchestrator/PatientVitalsPanel';
import InteractiveBodyTwin from '@/components/orchestrator/InteractiveBodyTwin';
import ClinicalConditionsPanel from '@/components/orchestrator/ClinicalConditionsPanel';
import SwarmIntelligencePanel from '@/components/orchestrator/SwarmIntelligencePanel';
import VisualAnalyticsPanel from '@/components/orchestrator/VisualAnalyticsPanel';
import WHODiseaseSurveillancePanel from '@/components/orchestrator/WHODiseaseSurveillancePanel';
import MedicalScanPanel from '@/components/orchestrator/MedicalScanPanel';
import BlockchainRecordsPanel from '@/components/orchestrator/BlockchainRecordsPanel';
import HealthSyncPanel from '@/components/orchestrator/HealthSyncPanel';
import ActionHubExportModal from '@/components/orchestrator/ActionHubExportModal';

import { PatientInfo, VitalsData, DetectedCondition } from '@/components/orchestrator/types';
import { MOCK_HEALTH_PROFILES, MockHealthProfile } from '@/data/mockHealthProfiles';

export default function OrchestratorAgentPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'swarm' | 'analytics' | 'hospital' | 'scan' | 'records' | 'sync'>('overview');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Active ABHA Profile State
  const [isAbhaLinked, setIsAbhaLinked] = useState<boolean>(true);
  const [selectedProfileId, setSelectedProfileId] = useState<string>('mausam_kar_verified_abha');
  const [customProfile, setCustomProfile] = useState<MockHealthProfile | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');
      if (tab && ['overview', 'swarm', 'analytics', 'hospital', 'scan', 'records', 'sync'].includes(tab)) {
        setActiveTab(tab as any);
      }
    }
  }, []);

  // Compute Active Profile
  const activeProfile: MockHealthProfile = customProfile || 
    MOCK_HEALTH_PROFILES.find(p => p.profileId === selectedProfileId) || 
    MOCK_HEALTH_PROFILES[0];

  // Dynamic Patient Info
  const isMangal = activeProfile.profileId === 'mangal_singh_verified_abha';
  const isRachit = activeProfile.profileId === 'rachit_tiwari_verified_abha';
  const isMausam = activeProfile.profileId === 'mausam_kar_verified_abha';

  const patient: PatientInfo = isAbhaLinked ? {
    name: activeProfile.patient.name,
    abhaId: activeProfile.patient.abhaId,
    dob: isMangal ? 'November 05, 2001' : isRachit ? 'June 18, 2003' : isMausam ? 'April 14, 2002' : 'March 28, 1997',
    gender: activeProfile.patient.gender,
    bloodType: isMangal ? 'A+' : isRachit ? 'O+' : isMausam ? 'B+' : 'O+',
    policyNumber: isMangal ? 'PM-JAY-2026-IND-7732' : isRachit ? 'PM-JAY-2026-IND-9924' : isMausam ? 'PM-JAY-2026-IND-8841' : 'XY-2025-3487',
    planType: isMangal || isRachit || isMausam ? 'Ayushman Bharat PM-JAY (ABDM Verified)' : 'PrimeCare Plus (ABDM)',
    residence: isMangal ? 'Jaipur / New Delhi, India' : isRachit ? 'Lucknow / New Delhi, India' : isMausam ? 'New Delhi, India' : 'New Delhi / Mumbai',
    avatarUrl: isMangal
      ? '/images/mangal_singh.jpg'
      : isRachit 
      ? '/images/rachit_tiwari.jpg' 
      : isMausam 
      ? '/images/mausam_kar.jpg' 
      : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  } : {
    name: '----',
    abhaId: '----',
    dob: '----',
    gender: '----',
    bloodType: '----',
    policyNumber: '----',
    planType: 'Unlinked ABHA (Connect Citizen)',
    residence: '----',
    avatarUrl: '/images/mausam_kar.jpg'
  };

  // Dynamic Real-time Vitals state
  const vitals: VitalsData = isAbhaLinked ? {
    heartRate: activeProfile.vitals.currentHeartRate || 74,
    maxHeartRate: 128,
    avgHeartRate: activeProfile.vitals.restingHeartRate || 64,
    systolicBp: parseInt((activeProfile.vitals.bloodPressure || '118/76').split('/')[0]) || 118,
    diastolicBp: parseInt(((activeProfile.vitals.bloodPressure || '118/76').split('/')[1] || '').split(' ')[0]) || 76,
    oxygenSaturation: activeProfile.vitals.spo2 || 98.5,
    respirationRate: activeProfile.vitals.respiratoryRate || 16
  } : {
    heartRate: 0,
    maxHeartRate: 0,
    avgHeartRate: 0,
    systolicBp: 0,
    diastolicBp: 0,
    oxygenSaturation: 0,
    respirationRate: 0
  };

  // Clinical Conditions list
  const [conditions, setConditions] = useState<DetectedCondition[]>([
    {
      id: 'cond-lungs',
      title: 'Pulmonary Function & Respiration',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Pulmonology',
      organ: 'lungs',
      status: 'Stable',
      notes: 'O2 Saturation: 98.5%, FEVI: 4.8L, Normal alveolar diffusion.'
    },
    {
      id: 'cond-shoulder',
      title: 'Left Shoulder Joint Mobility',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Orthopedics',
      organ: 'shoulder',
      painLevel: 4,
      status: 'Monitoring',
      notes: 'Mild trapezius tightness from desk posture. Ergonomic stretches recommended.'
    },
    {
      id: 'cond-knee',
      title: 'Patellar Joint Biomechanics',
      doctor: 'Dr. Naresh Trehan',
      specialty: 'Rheumatology & Orthopedics',
      organ: 'knee',
      angleCurrent: 118,
      angleNormal: 120,
      status: 'Stable',
      notes: 'Healthy joint space. Full physiological range of motion.'
    }
  ]);

  const [selectedCondition, setSelectedCondition] = useState<DetectedCondition | null>(conditions[0]);

  // Handlers for switching/uploading profiles
  const handleSelectProfile = (profileId: string) => {
    setCustomProfile(null);
    setSelectedProfileId(profileId);
    setIsAbhaLinked(true);
  };

  const handleUploadCustomProfile = (uploaded: any) => {
    if (uploaded?.patient?.name || uploaded?.name) {
      const pName = uploaded.name || uploaded.patient?.name;
      const formatted: MockHealthProfile = {
        profileId: `custom_${Date.now()}`,
        title: `${pName} (Custom JSON)`,
        subtitle: `Custom uploaded clinical record • ABHA: ${uploaded.abhaId || uploaded.patient?.abhaId || '91-CUSTOM-DATA'}`,
        jsonPath: 'custom_upload',
        badge: {
          label: 'Custom Uploaded Record',
          color: '#0284c7',
          bg: '#e0f2fe',
          border: '#bae6fd'
        },
        patient: {
          name: pName,
          age: uploaded.age || uploaded.patient?.age || 28,
          gender: uploaded.gender || uploaded.patient?.gender || 'Male',
          abhaId: uploaded.abhaId || uploaded.patient?.abhaId || '91-7294-8102-5309'
        },
        device: {
          name: 'Wearable JSON Stream',
          brand: 'apple',
          firmware: 'Custom Export v1.0',
          battery: 95
        },
        observationCount: 3400,
        vitals: {
          steps: uploaded.vitals?.steps || 10000,
          stepGoal: 10000,
          restingHeartRate: uploaded.vitals?.restingHeartRate || 68,
          currentHeartRate: uploaded.vitals?.heartRate || uploaded.vitals?.currentHeartRate || 74,
          hrvMs: uploaded.vitals?.hrv || 65,
          spo2: uploaded.vitals?.oxygenSaturation || uploaded.vitals?.spo2 || 98.5,
          vo2Max: uploaded.vitals?.vo2Max || 45,
          respiratoryRate: uploaded.vitals?.respirationRate || 16,
          activeCalories: 600,
          calorieGoal: 600,
          sleepScore: 85,
          sleepDuration: '7h 30m',
          sleepStages: { deep: '2h', rem: '1.5h', light: '3.5h', awake: '30m' },
          bloodGlucose: 92,
          bloodPressure: uploaded.vitals?.systolicBp ? `${uploaded.vitals.systolicBp}/${uploaded.vitals.diastolicBp} mmHg` : '120/80 mmHg',
          wristTempDeviation: '0.0°F'
        },
        ecgStatus: '🟢 Normal Sinus Rhythm • Verified Record',
        aiAnalysis: {
          type: 'optimal',
          title: 'Custom Uploaded Health Record',
          description: 'Uploaded telemetry successfully parsed and mapped into ABDM standard FHIR observation stream.'
        },
        visualAnalytics: MOCK_HEALTH_PROFILES[0].visualAnalytics
      };
      setCustomProfile(formatted);
      setIsAbhaLinked(true);
    }
  };

  return (
    <>
      {/* Main Orchestrator Workspace Root */}
      <div className="orch-root" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
        {/* 1. Left Navigation Sidebar */}
        <OrchestratorSidebar 
          onOpenSOS={() => setIsExportModalOpen(true)}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* 2. Main Viewport Container */}
        <div 
          className="orch-viewport"
          style={{
            flex: 1,
            marginLeft: '76px',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: 'calc(100vw - 76px)',
            background: '#f8fafc',
            overflow: 'hidden'
          }}
        >
          {/* Top Navigation Bar */}
          <OrchestratorTopNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            patient={patient}
            onOpenExportModal={() => setIsExportModalOpen(true)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Dynamic Main Workspace Area */}
          <div 
            className="orch-main-workspace"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '24px 28px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* TAB 1: My Condition / 3D Digital Health Twin */}
            {activeTab === 'overview' && (
              <div 
                className="orch-main-grid"
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  width: '100%'
                }}
              >
                {/* Left Column: Patient Profile, Live Vitals & Doctor Booking */}
                <PatientVitalsPanel
                  patient={patient}
                  vitals={vitals}
                  isAbhaLinked={isAbhaLinked}
                  onToggleAbhaLink={() => setIsAbhaLinked(!isAbhaLinked)}
                  selectedProfileId={selectedProfileId}
                  onSelectProfile={handleSelectProfile}
                  onUploadCustomProfile={handleUploadCustomProfile}
                />

                {/* Center Column: 3D Body Digital Health Twin Canvas */}
                <InteractiveBodyTwin
                  conditions={conditions}
                  selectedCondition={selectedCondition}
                  onSelectCondition={setSelectedCondition}
                  onNavigateToSwarmTab={() => setActiveTab('swarm')}
                />

                {/* Right Column: Conditions, Diagnostic X-Rays & Telemetry */}
                <ClinicalConditionsPanel
                  conditions={conditions}
                  selectedCondition={selectedCondition}
                  onSelectCondition={setSelectedCondition}
                  onOpenExportModal={() => setIsExportModalOpen(true)}
                />
              </div>
            )}

            {/* TAB 2: Multi-Agent Swarm Intelligence & DAG Execution Console */}
            {activeTab === 'swarm' && (
              <SwarmIntelligencePanel
                patient={patient}
                onOpenExportModal={() => setIsExportModalOpen(true)}
              />
            )}

            {/* TAB 3: Visual Analytics (Heart Rate, Sleep, Stress, Steps) */}
            {activeTab === 'analytics' && (
              <VisualAnalyticsPanel />
            )}

            {/* TAB 4: WHO Global Disease Surveillance & Outbreak Radar */}
            {activeTab === 'hospital' && (
              <WHODiseaseSurveillancePanel />
            )}

            {/* TAB 5: Medical Scan AI (YOLOv8 Diagnostic Segmentation) */}
            {activeTab === 'scan' && (
              <MedicalScanPanel />
            )}

            {/* TAB 6: ABHA National Health ID & Blockchain Records */}
            {activeTab === 'records' && (
              <BlockchainRecordsPanel />
            )}

            {/* TAB 7: Wearable HealthKit & Google Fit Real-Time Sync */}
            {activeTab === 'sync' && (
              <HealthSyncPanel />
            )}
          </div>
        </div>
      </div>

      {/* Global Export Hub Modal */}
      <ActionHubExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        patient={patient}
      />
    </>
  );
}
