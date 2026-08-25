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

export default function OrchestratorAgentPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'swarm' | 'analytics' | 'hospital' | 'scan' | 'records' | 'sync'>('overview');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');
      if (tab && ['overview', 'swarm', 'analytics', 'hospital', 'scan', 'records', 'sync'].includes(tab)) {
        setActiveTab(tab as any);
      }
    }
  }, []);

  // Patient profile (Matching Healix Reference)
  const [patient] = useState<PatientInfo>({
    name: 'Curtis Valk',
    abhaId: '91-5829-3910-4821',
    dob: 'March 28, 1997',
    gender: 'Male',
    bloodType: 'O+',
    policyNumber: 'XY-2025-3487',
    planType: 'PrimeCare Plus (ABDM)',
    residence: 'San Francisco, CA / New Delhi',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  });

  // Real-time Vitals state
  const [vitals] = useState<VitalsData>({
    heartRate: 72,
    maxHeartRate: 132,
    avgHeartRate: 115,
    systolicBp: 120,
    diastolicBp: 75,
    oxygenSaturation: 97.2,
    respirationRate: 16
  });

  // Clinical Conditions list
  const [conditions] = useState<DetectedCondition[]>([
    {
      id: 'cond-lungs',
      title: 'Pulmonary Function & Respiration',
      doctor: 'Dr. Steven Fandel',
      specialty: 'Pulmonology',
      organ: 'lungs',
      status: 'Stable',
      notes: 'O2 Saturation: 97.2%, FEVI: 4.8L, Heart Rate: 72 BPM.'
    },
    {
      id: 'cond-shoulder',
      title: 'Left Shoulder Joint Mobility',
      doctor: 'Dr. Steven Fandel',
      specialty: 'Orthopedics',
      organ: 'shoulder',
      painLevel: 14,
      status: 'Monitoring',
      notes: 'Subacute rotator cuff strain with moderate discomfort.'
    },
    {
      id: 'cond-knee',
      title: 'Osteoarthritis (Left Knee)',
      doctor: 'Dr. Vetrick Wilsen',
      specialty: 'Rheumatology & Orthopedics',
      organ: 'knee',
      angleCurrent: 75,
      angleNormal: 120,
      status: 'Critical',
      notes: 'Joint space narrowing. Physiotherapy regimen assigned.'
    }
  ]);

  const [selectedCondition, setSelectedCondition] = useState<DetectedCondition | null>(conditions[0]);

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

            {/* TAB 3: Visual Clinical Analytics & Report Generation Hub */}
            {activeTab === 'analytics' && (
              <VisualAnalyticsPanel
                patient={patient}
                vitals={vitals}
                onOpenExportModal={() => setIsExportModalOpen(true)}
              />
            )}

            {/* TAB 4: WHO Global Disease & Pathogen Surveillance Dashboard */}
            {activeTab === 'hospital' && (
              <WHODiseaseSurveillancePanel />
            )}

            {/* TAB 5: Medical Scan AI (YOLOv8) */}
            {activeTab === 'scan' && (
              <MedicalScanPanel />
            )}

            {/* TAB 6: Blockchain Health Records */}
            {activeTab === 'records' && (
              <BlockchainRecordsPanel />
            )}

            {/* TAB 7: Google Health Connect & Apple Health Wearables Sync */}
            {activeTab === 'sync' && (
              <HealthSyncPanel />
            )}
          </div>
        </div>

        {/* 3. Action Hub & Export Modal (PDF + FHIR + SOS) */}
        <ActionHubExportModal
          isOpen={isExportModalOpen}
          onClose={() => setIsExportModalOpen(false)}
          patient={patient}
        />
      </div>
    </>
  );
}
