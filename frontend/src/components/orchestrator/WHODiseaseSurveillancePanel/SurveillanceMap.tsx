'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker, 
  Line,
  ZoomableGroup 
} from 'react-simple-maps';
import { 
  Plus, 
  Minus, 
  RotateCcw, 
  Download, 
  Layers, 
  Play, 
  Pause, 
  Search, 
  ShieldAlert, 
  Hospital, 
  Wind, 
  Activity, 
  Radio,
  Maximize2,
  Minimize2,
  Biohazard,
  Flame,
  ChevronDown,
  RefreshCw
} from 'lucide-react';
import { DiseaseProfile, RegionalHub } from './types';
import { useLanguage } from '@/context/LanguageContext';

const GEO_URL = '/data/world-110m.json';

interface SurveillanceMapProps {
  activeDisease: DiseaseProfile;
  activeHubList: RegionalHub[];
  mapScope: 'global' | 'india';
  selectedHubId: string;
  onSwitchScope: (scope: 'global' | 'india') => void;
  onSelectHub: (id: string) => void;
  diseases?: DiseaseProfile[];
  onSelectDisease?: (id: string) => void;
}

export default function SurveillanceMap({
  activeDisease,
  activeHubList,
  mapScope,
  selectedHubId,
  onSwitchScope,
  onSelectHub,
  diseases = [],
  onSelectDisease
}: SurveillanceMapProps) {
  const { t, translateText } = useLanguage();
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 15]);
  const [hoveredHub, setHoveredHub] = useState<RegionalHub | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  
  // Advanced Map Layers State
  const [activeLayers, setActiveLayers] = useState<{
    heatmap: boolean;
    beds: boolean;
    vectors: boolean;
    aqi: boolean;
    labels: boolean;
  }>({
    heatmap: true,
    beds: true,
    vectors: true,
    aqi: false,
    labels: true
  });

  // Timeline Scrubber State
  const [timelineIndex, setTimelineIndex] = useState<number>(5);
  const [isPlayingTimeline, setIsPlayingTimeline] = useState<boolean>(false);
  const timelineIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Search & Filter state
  const [countrySearch, setCountrySearch] = useState('');
  const [virusSearch, setVirusSearch] = useState('');
  const [isVirusDropdownOpen, setIsVirusDropdownOpen] = useState(false);
  const [colorMode, setColorMode] = useState<'risk' | 'icu' | 'recovery'>('risk');
  const virusDropdownRef = useRef<HTMLDivElement>(null);

  // Auto-set map focus on scope toggle
  useEffect(() => {
    if (mapScope === 'global') {
      setMapCenter([20, 15]);
      setZoomLevel(1);
    } else {
      setMapCenter([78.96, 21.50]);
      setZoomLevel(3.5);
    }
  }, [mapScope]);

  // Click outside virus dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (virusDropdownRef.current && !virusDropdownRef.current.contains(event.target as Node)) {
        setIsVirusDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Timeline Animation Loop
  useEffect(() => {
    if (isPlayingTimeline) {
      timelineIntervalRef.current = setInterval(() => {
        setTimelineIndex((prev) => (prev + 1) % 7);
      }, 1200);
    } else if (timelineIntervalRef.current) {
      clearInterval(timelineIntervalRef.current);
    }
    return () => {
      if (timelineIntervalRef.current) clearInterval(timelineIntervalRef.current);
    };
  }, [isPlayingTimeline]);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev * 1.35, 7));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev / 1.35, 0.9));
  const handleResetZoom = () => {
    if (mapScope === 'global') {
      setMapCenter([20, 15]);
      setZoomLevel(1);
    } else {
      setMapCenter([78.96, 21.50]);
      setZoomLevel(3.5);
    }
  };

  const toggleLayer = (layer: 'heatmap' | 'beds' | 'vectors' | 'aqi' | 'labels') => {
    setActiveLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  const selectedHub = activeHubList.find(h => h.id === selectedHubId) || activeHubList[0];

  const handleQuickJump = (hub: RegionalHub) => {
    onSelectHub(hub.id);
    setMapCenter(hub.coordinates);
    setZoomLevel(mapScope === 'global' ? 3.0 : 5.0);
  };

  const timelineDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const filteredDiseases = diseases.filter(d => 
    d.name.toLowerCase().includes(virusSearch.toLowerCase()) || 
    d.shortName.toLowerCase().includes(virusSearch.toLowerCase()) ||
    d.category.toLowerCase().includes(virusSearch.toLowerCase())
  );

  const handleExportData = () => {
    const dataStr = JSON.stringify({
      disease: activeDisease.name,
      scope: mapScope,
      timestamp: new Date().toISOString(),
      hubs: activeHubList
    }, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeDisease.id}_surveillance_telemetry.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: isFullscreen ? '0px' : '24px',
      border: isFullscreen ? 'none' : '1px solid #e2e8f0',
      padding: isFullscreen ? '20px' : '20px',
      boxShadow: isFullscreen ? 'none' : '0 4px 24px rgba(0,0,0,0.04)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      height: '100%',
      position: isFullscreen ? 'fixed' : 'relative',
      inset: isFullscreen ? '0' : 'auto',
      zIndex: isFullscreen ? 99999 : 'auto',
      width: isFullscreen ? '100vw' : '100%',
      maxWidth: isFullscreen ? '100vw' : '100%',
      boxSizing: 'border-box'
    }}>
      {/* 1. Integrated Header & Real-Time Pathogen Stats Ticker */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
            border: '1px solid #fbcfe8',
            color: '#db2777',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(219, 39, 119, 0.15)'
          }}>
            <Biohazard size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ 
                fontSize: '10px', 
                fontWeight: 800, 
                color: '#db2777', 
                textTransform: 'uppercase', 
                letterSpacing: '0.6px',
                padding: '2px 8px',
                borderRadius: '999px',
                background: '#fdf2f8',
                border: '1px solid #fbcfe8'
              }}>
                GLOBAL GIS EPIDEMIOLOGICAL MATRIX
              </span>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 700 }}>
                Live Stream: <span style={{ color: '#0f172a' }}>{activeHubList.length} Active Regional Nodes</span>
              </span>
            </div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0' }}>
              {translateText(activeDisease.name)}
            </h2>
          </div>
        </div>

        {/* Global Stats Ribbon Banner */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          background: '#0f172a',
          color: '#ffffff',
          padding: '8px 16px',
          borderRadius: '12px',
          border: '1px solid #1e293b',
          fontSize: '11.5px'
        }}>
          <div>
            <div style={{ fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Total Confirmed</div>
            <div style={{ fontWeight: 800, color: '#f472b6' }}>{activeDisease.globalCases}</div>
          </div>
          <div style={{ width: '1px', height: '22px', background: '#334155' }} />
          <div>
            <div style={{ fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Total Mortality</div>
            <div style={{ fontWeight: 800, color: '#ef4444' }}>{activeDisease.annualDeaths}</div>
          </div>
          <div style={{ width: '1px', height: '22px', background: '#334155' }} />
          <div>
            <div style={{ fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Recovery Rate</div>
            <div style={{ fontWeight: 800, color: '#4ade80' }}>{activeDisease.recoveryRate}%</div>
          </div>
        </div>

        {/* Controls: Fullscreen Button & Scope Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? 'Exit Full Screen' : 'View Full Screen World Map'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '10px',
              border: '1.5px solid #cbd5e1',
              background: isFullscreen ? '#0f172a' : '#ffffff',
              color: isFullscreen ? '#ffffff' : '#1e293b',
              fontSize: '11.5px',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'all 0.15s ease'
            }}
          >
            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} color="#db2777" />}
            <span>{isFullscreen ? 'Exit Full Screen' : 'Full Screen Map'}</span>
          </button>

          <div style={{ display: 'flex', gap: '3px', background: '#f1f5f9', padding: '3px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <button
              onClick={() => onSwitchScope('global')}
              style={{
                padding: '6px 12px',
                borderRadius: '9px',
                border: 'none',
                fontSize: '11.5px',
                fontWeight: mapScope === 'global' ? 800 : 600,
                background: mapScope === 'global' ? '#db2777' : 'transparent',
                color: mapScope === 'global' ? '#ffffff' : '#64748b',
                cursor: 'pointer',
                boxShadow: mapScope === 'global' ? '0 2px 8px rgba(219,39,119,0.3)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              🌐 Global
            </button>
            <button
              onClick={() => onSwitchScope('india')}
              style={{
                padding: '6px 12px',
                borderRadius: '9px',
                border: 'none',
                fontSize: '11.5px',
                fontWeight: mapScope === 'india' ? 800 : 600,
                background: mapScope === 'india' ? '#db2777' : 'transparent',
                color: mapScope === 'india' ? '#ffffff' : '#64748b',
                cursor: 'pointer',
                boxShadow: mapScope === 'india' ? '0 2px 8px rgba(219,39,119,0.3)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              🇮🇳 India Focus
            </button>
          </div>
        </div>
      </div>

      {/* 2. Massive High-Tech Map Canvas Viewport */}
      <div 
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setTooltipPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }}
        style={{
          background: '#070b13',
          borderRadius: isFullscreen ? '0px' : '20px',
          border: '1px solid #1e293b',
          position: 'relative',
          flex: 1,
          minHeight: isFullscreen ? 'calc(100vh - 160px)' : '680px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'inset 0 0 60px rgba(0,0,0,0.7)'
        }}
      >
        {/* Floating Top In-Map Toolbar: Dual Search (Virus + Country) & Layers */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          right: '16px',
          zIndex: 25,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          pointerEvents: 'none'
        }}>
          {/* Left Group: Dual Search (1. Outbreak Virus + 2. Country / State) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', pointerEvents: 'auto', flexWrap: 'wrap' }}>
            
            {/* 1. In-Map Virus / Pathogen Dropdown Search */}
            {diseases.length > 0 && onSelectDisease && (
              <div className="relative" ref={virusDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsVirusDropdownOpen(!isVirusDropdownOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    background: 'rgba(15, 23, 42, 0.92)',
                    backdropFilter: 'blur(10px)',
                    border: '1.5px solid rgba(244, 114, 182, 0.4)',
                    color: '#ffffff',
                    padding: '7px 12px',
                    borderRadius: '10px',
                    fontSize: '11.5px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
                  }}
                >
                  <Biohazard size={14} color="#f472b6" />
                  <span>Outbreak: <b style={{ color: '#f472b6' }}>{activeDisease.shortName}</b></span>
                  <ChevronDown size={12} color="#94a3b8" />
                </button>

                {isVirusDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '38px',
                    left: 0,
                    width: '260px',
                    background: '#0f172a',
                    borderRadius: '12px',
                    border: '1px solid #334155',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.7)',
                    zIndex: 40,
                    padding: '6px',
                    maxHeight: '280px',
                    overflowY: 'auto'
                  }}>
                    <div style={{ padding: '4px', borderBottom: '1px solid #1e293b', marginBottom: '4px' }}>
                      <input
                        type="text"
                        placeholder="Search pathogen (e.g. Nipah, COVID)..."
                        value={virusSearch}
                        onChange={(e) => setVirusSearch(e.target.value)}
                        style={{
                          width: '100%',
                          background: '#1e293b',
                          border: 'none',
                          borderRadius: '6px',
                          color: '#ffffff',
                          padding: '5px 8px',
                          fontSize: '11px',
                          outline: 'none'
                        }}
                        autoFocus
                      />
                    </div>
                    {filteredDiseases.map(d => (
                      <div
                        key={d.id}
                        onClick={() => {
                          onSelectDisease(d.id);
                          setIsVirusDropdownOpen(false);
                          setVirusSearch('');
                        }}
                        style={{
                          padding: '7px 10px',
                          borderRadius: '8px',
                          fontSize: '11px',
                          fontWeight: d.id === activeDisease.id ? 800 : 500,
                          background: d.id === activeDisease.id ? 'rgba(219,39,119,0.3)' : 'transparent',
                          color: d.id === activeDisease.id ? '#f472b6' : '#e2e8f0',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = d.id === activeDisease.id ? 'rgba(219,39,119,0.3)' : 'transparent')}
                      >
                        <span>{d.name}</span>
                        <span style={{ fontSize: '9.5px', color: '#ef4444', fontWeight: 700 }}>{d.whoThreatLevel}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 2. Country / State Quick Locator */}
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(15, 23, 42, 0.92)',
              backdropFilter: 'blur(10px)',
              padding: '6px 12px',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
            }}>
              <Search size={13} color="#94a3b8" />
              <input
                type="text"
                placeholder={mapScope === 'global' ? 'Search country / epicenter...' : 'Search Indian state...'}
                value={countrySearch}
                onChange={(e) => setCountrySearch(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontSize: '11.5px',
                  width: '160px'
                }}
              />
              {countrySearch && (
                <div style={{
                  position: 'absolute',
                  top: '38px',
                  left: 0,
                  width: '240px',
                  background: '#0f172a',
                  borderRadius: '12px',
                  border: '1px solid #334155',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.7)',
                  zIndex: 40,
                  padding: '6px',
                  maxHeight: '220px',
                  overflowY: 'auto'
                }}>
                  {activeHubList
                    .filter(h => h.name.toLowerCase().includes(countrySearch.toLowerCase()) || h.country.toLowerCase().includes(countrySearch.toLowerCase()))
                    .map(hub => (
                      <div
                        key={hub.id}
                        onClick={() => {
                          handleQuickJump(hub);
                          setCountrySearch('');
                        }}
                        style={{
                          padding: '7px 10px',
                          borderRadius: '8px',
                          fontSize: '11px',
                          color: '#f8fafc',
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#1e293b')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        <span>{hub.name.split('(')[0]}</span>
                        <span style={{ fontSize: '10px', color: '#f472b6', fontWeight: 800 }}>{hub.activeCases}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* 3. Layer Toggles Strip */}
            <div style={{ display: 'flex', gap: '4px', background: 'rgba(15,23,42,0.85)', padding: '4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => toggleLayer('heatmap')}
                title="Toggle Outbreak Density Radar"
                style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  background: activeLayers.heatmap ? '#db2777' : 'transparent',
                  color: '#ffffff',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Radio size={11} /> Radar
              </button>
              <button
                onClick={() => toggleLayer('vectors')}
                title="Toggle Contagion Flight Corridors"
                style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  background: activeLayers.vectors ? '#059669' : 'transparent',
                  color: '#ffffff',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Activity size={11} /> Flight Vectors
              </button>
              <button
                onClick={() => toggleLayer('labels')}
                title="Toggle Case Count On-Map Badges"
                style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  border: 'none',
                  background: activeLayers.labels ? '#2563eb' : 'transparent',
                  color: '#ffffff',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Numbers On-Map
              </button>
            </div>
          </div>

          {/* Right Group: Zoom & Orientation Controls */}
          <div style={{ display: 'flex', gap: '5px', pointerEvents: 'auto' }}>
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <Plus size={14} />
            </button>
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <Minus size={14} />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset View"
              style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.15)', color: '#f472b6', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>

        {/* Dynamic Rich Glassmorphic Tooltip */}
        {hoveredHub && (
          <div style={{
            position: 'absolute',
            left: `${Math.min(Math.max(16, tooltipPos.x + 14), 780)}px`,
            top: `${Math.min(Math.max(16, tooltipPos.y - 60), 420)}px`,
            zIndex: 35,
            background: 'rgba(15, 23, 42, 0.96)',
            backdropFilter: 'blur(14px)',
            color: '#ffffff',
            padding: '14px 18px',
            borderRadius: '16px',
            border: '1.5px solid rgba(244, 114, 182, 0.6)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.7)',
            fontSize: '11px',
            pointerEvents: 'none',
            minWidth: '260px',
            maxWidth: '320px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            {/* Country Title & Risk Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px' }}>
              <div style={{ fontWeight: 800, fontSize: '13.5px', color: '#f8fafc' }}>
                {hoveredHub.name}
              </div>
              <span style={{ 
                fontSize: '9.5px', 
                fontWeight: 800, 
                padding: '2px 8px', 
                borderRadius: '6px',
                background: hoveredHub.riskLevel === 'High' ? '#ef4444' : hoveredHub.riskLevel === 'Moderate' ? '#f59e0b' : '#10b981',
                color: '#ffffff'
              }}>
                {hoveredHub.riskLevel} Risk
              </span>
            </div>

            {/* Exact Clinical Case and Death Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div>
                <div style={{ fontSize: '9.5px', color: '#94a3b8' }}>Active Cases</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#f472b6' }}>
                  {hoveredHub.activeCases}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '9.5px', color: '#94a3b8' }}>Total Deaths</div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#ef4444' }}>
                  {hoveredHub.deathsCount || `${Math.round(hoveredHub.activeNumber * 0.04).toLocaleString()} Deaths`}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '9.5px', color: '#94a3b8' }}>Cumulative Cases</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#e2e8f0' }}>
                  {hoveredHub.cumulativeCases || `${(hoveredHub.activeNumber * 1.6).toLocaleString()} Cases`}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '9.5px', color: '#94a3b8' }}>Recovery Rate</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#4ade80' }}>
                  {hoveredHub.recoveryRate}%
                </div>
              </div>

              <div>
                <div style={{ fontSize: '9.5px', color: '#94a3b8' }}>ICU Load</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#60a5fa' }}>
                  {hoveredHub.icuOccupancy}%
                </div>
              </div>

              <div>
                <div style={{ fontSize: '9.5px', color: '#94a3b8' }}>Spread (R₀ Index)</div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#facc15' }}>
                  {hoveredHub.r0Index || '1.24'}
                </div>
              </div>
            </div>

            {hoveredHub.genomicStrain && (
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '6px', fontSize: '10.5px', color: '#cbd5e1' }}>
                Dominant Strain: <span style={{ color: '#f472b6', fontWeight: 800 }}>{hoveredHub.genomicStrain}</span>
              </div>
            )}
          </div>
        )}

        {/* TopoJSON Composable Map Component */}
        <ComposableMap
          projection={mapScope === 'global' ? 'geoEqualEarth' : 'geoMercator'}
          projectionConfig={{ scale: mapScope === 'global' ? 152 : 740, center: mapCenter }}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup
            zoom={zoomLevel}
            center={mapCenter}
            filterZoomEvent={(evt: any) => evt.type !== 'wheel'}
            onMoveEnd={(pos) => {
              setMapCenter(pos.coordinates);
              setZoomLevel(pos.zoom);
            }}
          >
            {/* World Landmasses */}
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#111827"
                    stroke="#1f2937"
                    strokeWidth={0.5}
                    style={{
                      default: { fill: '#111827', outline: 'none' },
                      hover: { fill: '#1f2937', outline: 'none' },
                      pressed: { fill: '#0f172a', outline: 'none' }
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Contagion Flow Vectors (Flight lines across continents) */}
            {activeLayers.vectors && activeHubList.length > 1 && (
              activeHubList.map((hub, idx) => {
                const target = activeHubList[(idx + 1) % activeHubList.length];
                return (
                  <Line
                    key={`line-${hub.id}-${target.id}`}
                    from={hub.coordinates}
                    to={target.coordinates}
                    stroke="#db2777"
                    strokeWidth={1.2}
                    strokeOpacity={0.4}
                    strokeDasharray="4, 4"
                  />
                );
              })
            )}

            {/* Interactive Regional Hub Markers */}
            {activeHubList.map((hub) => {
              const isSelected = hub.id === selectedHubId;
              
              // Compact, crisp, pinpoint circle sizing
              const baseRadius = isSelected ? 6 : 4;
              const bubbleRadius = baseRadius;

              let bubbleColor = '#db2777';
              if (colorMode === 'risk') {
                bubbleColor = hub.riskLevel === 'High' ? '#ef4444' : hub.riskLevel === 'Moderate' ? '#f59e0b' : '#db2777';
              } else if (colorMode === 'icu') {
                bubbleColor = hub.icuOccupancy > 70 ? '#ef4444' : hub.icuOccupancy > 55 ? '#f59e0b' : '#3b82f6';
              } else if (colorMode === 'recovery') {
                bubbleColor = hub.recoveryRate > 80 ? '#10b981' : hub.recoveryRate > 70 ? '#3b82f6' : '#f59e0b';
              }

              return (
                <Marker
                  key={hub.id}
                  coordinates={hub.coordinates}
                  onClick={() => onSelectHub(hub.id)}
                  onMouseEnter={() => setHoveredHub(hub)}
                  onMouseLeave={() => setHoveredHub(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Subtle Outer Radar Glow Pulse */}
                  {activeLayers.heatmap && (
                    <circle
                      r={bubbleRadius + (isSelected ? 5 : 3)}
                      fill={bubbleColor}
                      opacity={isSelected ? 0.35 : 0.18}
                    />
                  )}

                  {/* Bed Capacity Indicator Ring */}
                  {activeLayers.beds && (
                    <circle
                      r={bubbleRadius + 1.8}
                      fill="none"
                      stroke={hub.icuOccupancy > 65 ? '#ef4444' : '#38bdf8'}
                      strokeWidth={1}
                      strokeDasharray={`${(hub.icuOccupancy / 100) * 18} 50`}
                      opacity={0.85}
                    />
                  )}

                  {/* Main Pinpoint Bubble */}
                  <circle
                    r={bubbleRadius}
                    fill={bubbleColor}
                    stroke="#ffffff"
                    strokeWidth={isSelected ? 1.8 : 1}
                  />

                  {/* Center Micro Core */}
                  <circle
                    r={1.2}
                    fill="#ffffff"
                  />

                  {/* On-Map Country Label */}
                  <text
                    textAnchor="middle"
                    y={bubbleRadius + 8}
                    style={{
                      fontFamily: 'Inter, -apple-system, sans-serif',
                      fontSize: isSelected ? '9px' : '7.5px',
                      fontWeight: 800,
                      fill: isSelected ? '#f472b6' : '#cbd5e1',
                      stroke: '#070b13',
                      strokeWidth: 2,
                      paintOrder: 'stroke fill',
                      letterSpacing: '-0.2px'
                    }}
                  >
                    {hub.name.split('(')[0].trim()}
                  </text>

                  {/* Case Number Badge */}
                  {activeLayers.labels && (
                    <text
                      textAnchor="middle"
                      y={bubbleRadius + 16}
                      style={{
                        fontFamily: 'monospace, sans-serif',
                        fontSize: '7px',
                        fontWeight: 900,
                        fill: '#fcd34d',
                        stroke: '#070b13',
                        strokeWidth: 1.8,
                        paintOrder: 'stroke fill'
                      }}
                    >
                      {hub.activeCases}
                    </text>
                  )}
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* Timeline Progression Controller (Bottom Floating Bar) */}
        <div style={{
          position: 'absolute',
          bottom: '14px',
          left: '14px',
          right: '14px',
          background: 'rgba(15, 23, 42, 0.94)',
          backdropFilter: 'blur(12px)',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          zIndex: 20
        }}>
          {/* Play / Pause Scrubber Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setIsPlayingTimeline(!isPlayingTimeline)}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: '#db2777',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 0 12px rgba(219,39,119,0.5)'
              }}
            >
              {isPlayingTimeline ? <Pause size={13} /> : <Play size={13} style={{ marginLeft: '2px' }} />}
            </button>
            <div>
              <div style={{ fontSize: '9px', color: '#94a3b8', fontWeight: 700 }}>EPIDEMIC TIMELINE</div>
              <div style={{ fontSize: '11.5px', color: '#ffffff', fontWeight: 800 }}>
                Day: <span style={{ color: '#f472b6' }}>{timelineDays[timelineIndex]} (Aug {14 + timelineIndex})</span>
              </div>
            </div>
          </div>

          {/* Day Steps Selector */}
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {timelineDays.map((day, idx) => (
              <button
                key={day}
                onClick={() => {
                  setTimelineIndex(idx);
                  setIsPlayingTimeline(false);
                }}
                style={{
                  padding: '3px 8px',
                  borderRadius: '7px',
                  border: timelineIndex === idx ? '1px solid #db2777' : '1px solid rgba(255,255,255,0.1)',
                  background: timelineIndex === idx ? 'rgba(219,39,119,0.3)' : 'transparent',
                  color: timelineIndex === idx ? '#ffffff' : '#94a3b8',
                  fontSize: '10px',
                  fontWeight: timelineIndex === idx ? 800 : 600,
                  cursor: 'pointer'
                }}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '10px', color: '#cbd5e1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#db2777' }} />
              <span>Standard</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f59e0b' }} />
              <span>Moderate</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444' }} />
              <span>High Alert</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Selected Node Deep-Dive Inspector Ribbon */}
      {selectedHub && !isFullscreen && (
        <div style={{
          background: '#f8fafc',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          padding: '14px 18px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
              SELECTED HUB TELEMETRY
            </div>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>{selectedHub.name}</span>
              <span style={{ fontSize: '11px', color: '#db2777', fontWeight: 700 }}>({selectedHub.trend})</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            <div>
              <div style={{ fontSize: '9.5px', color: '#64748b' }}>Active Cases</div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#db2777' }}>{selectedHub.activeCases}</div>
            </div>
            <div>
              <div style={{ fontSize: '9.5px', color: '#64748b' }}>Total Deaths</div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#ef4444' }}>
                {selectedHub.deathsCount || 'N/A'}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '9.5px', color: '#64748b' }}>ICU Load</div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: selectedHub.icuOccupancy > 65 ? '#ef4444' : '#0284c7' }}>
                {selectedHub.icuOccupancy}%
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <button
              onClick={handleExportData}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                fontSize: '11px',
                fontWeight: 700,
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer'
              }}
            >
              <Download size={12} color="#db2777" />
              <span>Export GIS JSON</span>
            </button>
            <button
              onClick={() => alert(`Connecting with Emergency Epidemiology Center for ${selectedHub.name}...`)}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                background: '#db2777',
                border: 'none',
                fontSize: '11px',
                fontWeight: 700,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(219,39,119,0.3)'
              }}
            >
              <ShieldAlert size={12} />
              <span>Dispatch Alert</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
