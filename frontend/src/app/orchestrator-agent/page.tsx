'use client';

import React, { useState } from 'react';
import './orchestrator.css';

import OrchestratorSidebar from '@/components/orchestrator/OrchestratorSidebar';
import OrchestratorTopNav from '@/components/orchestrator/OrchestratorTopNav';
import PatientVitalsPanel from '@/components/orchestrator/PatientVitalsPanel';
import InteractiveBodyTwin from '@/components/orchestrator/InteractiveBodyTwin';
import ClinicalConditionsPanel from '@/components/orchestrator/ClinicalConditionsPanel';
import SwarmIntelligencePanel from '@/components/orchestrator/SwarmIntelligencePanel';
import VisualAnalyticsPanel from '@/components/orchestrator/VisualAnalyticsPanel';
import HospitalOperationsPanel from '@/components/orchestrator/HospitalOperationsPanel';
import ActionHubExportModal from '@/components/orchestrator/ActionHubExportModal';

import { PatientInfo, VitalsData, DetectedCondition } from '@/components/orchestrator/types';

export default function OrchestratorAgentPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'swarm' | 'analytics' | 'hospital'>('overview');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
      {/* Suppress conflicting legacy video loader and background overlays */}
      <style>{`
        #video-splash, 
        #page-loader, 
        .animated-splash-page, 
        .transition, 
        #mouse, 
        header.header, 
        .header__menu, 
        #wrap-modals, 
        .modal {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        body {
          overflow: hidden !important;
          background-color: #f8fafc !important;
        }
        #smooth-wrapper, #smooth-content {
          pointer-events: auto !important;
          transform: none !important;
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
        }
      `}</style>

      {/* Main Orchestrator Workspace Root */}
      <div className="orch-root">
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
          <main 
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
                />

                {/* Right Column: Conditions, Diagnostic X-Rays & Telemetry */}
                <ClinicalConditionsPanel
                  conditions={conditions}
                  selectedCondition={selectedCondition}
                  onSelectCondition={setSelectedCondition}
                  onOpenExportModal={() => setIsExportModalOpen(true)}
                  onNavigateToSwarmTab={() => setActiveTab('swarm')}
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

            {/* TAB 4: Hospital & Swarm Operations Spotlight */}
            {activeTab === 'hospital' && (
              <HospitalOperationsPanel />
            )}
          </main>
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
