'use client';

import React, { useState } from 'react';
import DiseaseSelector from './DiseaseSelector';
import SurveillanceMap from './SurveillanceMap';
import TelemetryGraph from './TelemetryGraph';
import ClinicalProtocols from './ClinicalProtocols';
import { diseases } from './data';

export default function WHODiseaseSurveillancePanel() {
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>('ihd');
  const [mapScope, setMapScope] = useState<'global' | 'india'>('global');
  const [selectedHubId, setSelectedHubId] = useState<string>('g_india');

  const activeDisease = diseases.find(d => d.id === selectedDiseaseId) || diseases[0];
  const activeHubList = mapScope === 'global' ? activeDisease.globalHubs : activeDisease.indiaHubs;
  const activeHub = activeHubList.find(h => h.id === selectedHubId) || activeHubList[0];

  const handleSelectDisease = (id: string) => {
    setSelectedDiseaseId(id);
    const d = diseases.find(item => item.id === id);
    if (d) {
      setSelectedHubId(mapScope === 'global' ? d.globalHubs[0]?.id : d.indiaHubs[0]?.id);
    }
  };

  const handleSwitchScope = (scope: 'global' | 'india') => {
    setMapScope(scope);
    if (scope === 'global') {
      setSelectedHubId(activeDisease.globalHubs[0]?.id);
    } else {
      setSelectedHubId(activeDisease.indiaHubs[0]?.id);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* 1. Unified WHO Header & Disease Selection Container */}
      <DiseaseSelector
        diseases={diseases}
        selectedDiseaseId={selectedDiseaseId}
        onSelectDisease={handleSelectDisease}
      />

      {/* 2. Step 2: Global Disease Intelligence & Interactive Map Viewport */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.55fr 1.05fr',
        gap: '24px',
        alignItems: 'stretch'
      }}>
        {/* Left Side: Interactive TopoJSON Vector Map */}
        <SurveillanceMap
          activeDisease={activeDisease}
          activeHubList={activeHubList}
          mapScope={mapScope}
          selectedHubId={selectedHubId}
          onSwitchScope={handleSwitchScope}
          onSelectHub={setSelectedHubId}
        />

        {/* Right Side: Interactive Regional Telemetry & Edge-to-Edge Graph Canvas */}
        <TelemetryGraph
          activeHub={activeHub}
        />
      </div>

      {/* 3. Step 3: WHO Official Precautions & Evidence-Based Guidelines Matrix */}
      <ClinicalProtocols
        activeDisease={activeDisease}
      />
    </div>
  );
}
