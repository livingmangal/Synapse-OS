import React, { useState, useEffect } from 'react';
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker, 
  ZoomableGroup 
} from 'react-simple-maps';
import { Plus, Minus, RotateCcw, Download } from 'lucide-react';
import { DiseaseProfile, RegionalHub } from './types';

const GEO_URL = '/data/world-110m.json';

interface SurveillanceMapProps {
  activeDisease: DiseaseProfile;
  activeHubList: RegionalHub[];
  mapScope: 'global' | 'india';
  selectedHubId: string;
  onSwitchScope: (scope: 'global' | 'india') => void;
  onSelectHub: (id: string) => void;
}

export default function SurveillanceMap({
  activeDisease,
  activeHubList,
  mapScope,
  selectedHubId,
  onSwitchScope,
  onSelectHub
}: SurveillanceMapProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 15]);
  const [hoveredHub, setHoveredHub] = useState<RegionalHub | null>(null);

  useEffect(() => {
    if (mapScope === 'global') {
      setMapCenter([20, 15]);
      setZoomLevel(1);
    } else {
      setMapCenter([79, 22]);
      setZoomLevel(3.2);
    }
  }, [mapScope]);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev * 1.4, 5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev / 1.4, 1));
  const handleResetZoom = () => {
    if (mapScope === 'global') {
      setMapCenter([20, 15]);
      setZoomLevel(1);
    } else {
      setMapCenter([79, 22]);
      setZoomLevel(3.2);
    }
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '14px',
      height: '100%'
    }}>
      {/* Map Scope Selector & Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#ec4899', textTransform: 'uppercase' }}>
            Interactive Epidemiological Map
          </span>
          <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0' }}>
            {activeDisease.name}
          </h3>
        </div>

        {/* Scope Switcher: Global World vs India Regional */}
        <div style={{ display: 'flex', gap: '6px', background: '#f1f5f9', padding: '3px', borderRadius: '10px' }}>
          <button
            onClick={() => onSwitchScope('global')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '12px',
              fontWeight: mapScope === 'global' ? 800 : 600,
              background: mapScope === 'global' ? '#ec4899' : 'transparent',
              color: mapScope === 'global' ? '#ffffff' : '#64748b',
              transition: 'all 0.15s ease'
            }}
          >
            🌐 Global Surveillance
          </button>
          <button
            onClick={() => onSwitchScope('india')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '12px',
              fontWeight: mapScope === 'india' ? 800 : 600,
              background: mapScope === 'india' ? '#ec4899' : 'transparent',
              color: mapScope === 'india' ? '#ffffff' : '#64748b',

              transition: 'all 0.15s ease'
            }}
          >
            🇮🇳 India Regional Focus
          </button>
        </div>
      </div>

      {/* Map Canvas with TopoJSON Geographies & Floating Controls */}
      <div style={{
        background: '#f8fafc',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        position: 'relative',
        flex: 1,
        minHeight: '430px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Interactive Floating Zoom Controls */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <button
            onClick={handleZoomIn}
            title="Zoom In"
            style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}
          >
            <Plus size={16} />
          </button>
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}
          >
            <Minus size={16} />
          </button>
          <button
            onClick={handleResetZoom}
            title="Reset Map Orientation"
            style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ffffff', border: '1px solid #cbd5e1', color: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}
          >
            <RotateCcw size={14} />
          </button>
        </div>

        {/* Hover Tooltip Overlay */}
        {hoveredHub && (
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            zIndex: 20,
            background: '#0f172a',
            color: '#ffffff',
            padding: '8px 14px',
            borderRadius: '10px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            fontSize: '11px',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontWeight: 800 }}>{hoveredHub.name}</span>
            <span style={{ color: '#f472b6', fontWeight: 700 }}>{hoveredHub.activeCases}</span>
            <span style={{ color: '#4ade80' }}>{hoveredHub.recoveryRate}% Recovery</span>
          </div>
        )}

        <ComposableMap
          projection={mapScope === 'global' ? 'geoEqualEarth' : 'geoMercator'}
          projectionConfig={{ scale: mapScope === 'global' ? 145 : 680, center: mapCenter }}
          style={{ width: '100%', height: '100%' }}
        >
          <ZoomableGroup
            zoom={zoomLevel}
            center={mapCenter}
            filterZoomEvent={(evt: any) => {
              // Ignore wheel events (scrolling) so map only zooms via the +/- buttons
              if (evt.type === 'wheel') return false;
              return true;
            }}
            onMoveEnd={(pos) => {
              setMapCenter(pos.coordinates);
              setZoomLevel(pos.zoom);
            }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#e2e8f0"
                    stroke="#ffffff"
                    strokeWidth={0.8}
                    style={{
                      default: { fill: '#e2e8f0', outline: 'none' },
                      hover: { fill: '#cbd5e1', outline: 'none',  },
                      pressed: { fill: '#94a3b8', outline: 'none' }
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Clean, Interactive Regional Hub Markers */}
            {activeHubList.map((hub) => {
              const isSelected = hub.id === selectedHubId;
              const bubbleRadius = isSelected ? 20 : 15;
              const bubbleColor = hub.riskLevel === 'High' ? '#ef4444' : hub.riskLevel === 'Moderate' ? '#f59e0b' : '#ec4899';

              return (
                <Marker
                  key={hub.id}
                  coordinates={hub.coordinates}
                  onClick={() => onSelectHub(hub.id)}
                  onMouseEnter={() => setHoveredHub(hub)}
                  onMouseLeave={() => setHoveredHub(null)}
                  style={{  }}
                >
                  {/* Animated Ripple Halo */}
                  <circle
                    r={bubbleRadius + (isSelected ? 10 : 5)}
                    fill={bubbleColor}
                    opacity={isSelected ? 0.38 : 0.18}
                  />

                  {/* Main Bubble */}
                  <circle
                    r={bubbleRadius}
                    fill={bubbleColor}
                    stroke="#ffffff"
                    strokeWidth={2}
                  />

                  {/* Center Dot */}
                  <circle
                    r={3}
                    fill="#ffffff"
                  />

                  {/* Label under bubble */}
                  <text
                    textAnchor="middle"
                    y={bubbleRadius + 13}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: isSelected ? '11px' : '9.5px',
                      fontWeight: 800,
                      fill: isSelected ? '#ec4899' : '#1e293b',
                      stroke: '#ffffff',
                      strokeWidth: 3,
                      paintOrder: 'stroke fill'
                    }}
                  >
                    {hub.name.split('(')[0].trim()}
                  </text>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* Bottom Legend */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '14px',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(6px)',
          padding: '6px 12px',
          borderRadius: '8px',
          border: '1px solid #cbd5e1',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '11px',
          fontWeight: 700,
          color: '#334155'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ec4899' }} />
            <span>Low / Standard Watch</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
            <span>Moderate Watch</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
            <span>High Alert</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#64748b' }}>
        <span>💡 Pan & zoom the map or click any node to inspect telemetry.</span>
        <button
          onClick={() => alert(`Downloading WHO Dataset for ${activeDisease.name}...`)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ec4899',
            fontSize: '12px',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            
          }}
        >
          <Download size={14} />
          <span>Download Dataset</span>
        </button>
      </div>
    </div>
  );
}
