'use client';

import React, { useState } from 'react';
import { 
  Maximize2, 
  RotateCw, 
  Layers, 
  Activity, 
  Plus, 
  Minus,
  Sparkles,
  Info,
  ChevronRight
} from 'lucide-react';
import { DetectedCondition } from './types';

interface InteractiveBodyTwinProps {
  conditions: DetectedCondition[];
  selectedCondition: DetectedCondition | null;
  onSelectCondition: (c: DetectedCondition) => void;
}

export default function InteractiveBodyTwin({
  conditions,
  selectedCondition,
  onSelectCondition
}: InteractiveBodyTwinProps) {
  const [activeLayer, setActiveLayer] = useState<'all' | 'muscular' | 'skeletal' | 'vascular'>('all');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.min(Math.max(0.85, prev + delta), 1.4));
  };

  const lungsCondition = conditions.find(c => c.organ === 'lungs') || conditions[0];
  const kneeCondition = conditions.find(c => c.organ === 'knee');
  const shoulderCondition = conditions.find(c => c.organ === 'shoulder');
  const heartCondition = conditions.find(c => c.organ === 'heart');

  return (
    <div 
      className="orch-col-center"
      style={{
        flex: 1,
        minWidth: '440px',
        background: '#ffffff',
        borderRadius: '24px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 120px)',
        minHeight: '740px'
      }}
    >
      {/* Top Floating Controls Bar */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '20px',
        right: '20px',
        zIndex: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pointerEvents: 'none'
      }}>
        {/* Layer Mode Switcher */}
        <div style={{
          display: 'flex',
          gap: '4px',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(10px)',
          padding: '4px',
          borderRadius: '9999px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
          pointerEvents: 'auto'
        }}>
          {(['all', 'muscular', 'skeletal', 'vascular'] as const).map((layer) => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              style={{
                padding: '5px 12px',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'capitalize',
                background: activeLayer === layer ? '#2563eb' : 'transparent',
                color: activeLayer === layer ? '#ffffff' : '#64748b',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {layer}
            </button>
          ))}
        </div>

        {/* 3D Health Twin Live Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '9999px',
          background: 'rgba(239, 246, 255, 0.95)',
          border: '1px solid #bfdbfe',
          color: '#2563eb',
          fontSize: '11px',
          fontWeight: 800,
          pointerEvents: 'auto',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 8px rgba(37,99,235,0.08)'
        }}>
          <Sparkles size={13} />
          <span>Interactive 3D Anatomy Engine</span>
        </div>
      </div>

      {/* Main Anatomy Canvas Area */}
      <div style={{
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 45%, #f1f5f9 0%, #ffffff 70%)'
      }}>
        {/* Scalable Container for Body Graphic and Hotspots */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          maxWidth: '520px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${zoomLevel})`,
          transformOrigin: 'center center',
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* High-Resolution 3D Anatomical Body Model Asset */}
          <img
            src="/images/anatomy_digital_twin.jpg"
            alt="3D Digital Health Twin"
            style={{
              maxHeight: '92%',
              maxWidth: '90%',
              objectFit: 'contain',
              userSelect: 'none',
              pointerEvents: 'none',
              filter: activeLayer === 'skeletal' 
                ? 'contrast(1.4) brightness(0.9) grayscale(0.6)' 
                : activeLayer === 'vascular' 
                ? 'hue-rotate(330deg) saturate(1.4)' 
                : activeLayer === 'muscular' 
                ? 'saturate(1.2)' 
                : 'none',
              transition: 'filter 0.3s ease'
            }}
          />

          {/* SVG Connecting Spline Cables between Hotspots and Callouts */}
          <svg 
            viewBox="0 0 520 700" 
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 15
            }}
          >
            {/* Lungs connecting curve */}
            <path
              d="M 285 205 C 330 205, 370 170, 420 155"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="4 3"
              opacity="0.8"
            />
            {/* Lungs connection endpoint dot */}
            <circle cx="420" cy="155" r="3.5" fill="#2563eb" />
          </svg>

          {/* Hotspot 1: Lungs (Pulmonary Function Test) */}
          <div
            onClick={() => lungsCondition && onSelectCondition(lungsCondition)}
            onMouseEnter={() => setHoveredHotspot('lungs')}
            onMouseLeave={() => setHoveredHotspot(null)}
            style={{
              position: 'absolute',
              top: '28%',
              left: '52%',
              zIndex: 30,
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div 
              className="hotspot-pulse-primary"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#2563eb',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: 800,
                border: '2px solid #ffffff',
                boxShadow: '0 4px 12px rgba(37,99,235,0.4)',
                transition: 'transform 0.2s ease'
              }}
            >
              🫁
            </div>

            {/* Connecting Callout Card (Matching Healix Reference Image 1) */}
            <div style={{
              position: 'absolute',
              top: '-35px',
              left: '46px',
              background: '#ffffff',
              borderRadius: '14px',
              padding: '12px 16px',
              border: '1.5px solid #bfdbfe',
              boxShadow: '0 8px 24px rgba(37,99,235,0.14)',
              width: '210px',
              pointerEvents: 'auto',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>
                  Pulmonary Function
                </span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#059669', background: '#ecfdf5', padding: '1px 6px', borderRadius: '4px' }}>
                  97.2%
                </span>
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                FEVI: <strong>4.8 L</strong> • Heart: <strong>72 BPM</strong>
              </div>
              <div style={{ fontSize: '10px', color: '#2563eb', fontWeight: 700, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>Dr. Steven Fandel</span>
                <ChevronRight size={10} />
              </div>
            </div>
          </div>

          {/* Hotspot 2: Left Shoulder (Pain & Joint Mobility) */}
          <div
            onClick={() => shoulderCondition && onSelectCondition(shoulderCondition)}
            onMouseEnter={() => setHoveredHotspot('shoulder')}
            onMouseLeave={() => setHoveredHotspot(null)}
            style={{
              position: 'absolute',
              top: '22%',
              left: '32%',
              zIndex: 30,
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div 
              className="hotspot-pulse-warning"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#f59e0b',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 800,
                border: '2px solid #ffffff',
                boxShadow: '0 4px 10px rgba(245,158,11,0.4)'
              }}
            >
              !
            </div>
          </div>

          {/* Hotspot 3: Left Knee (Osteoarthritis Alert) */}
          <div
            onClick={() => kneeCondition && onSelectCondition(kneeCondition)}
            onMouseEnter={() => setHoveredHotspot('knee')}
            onMouseLeave={() => setHoveredHotspot(null)}
            style={{
              position: 'absolute',
              top: '68%',
              left: '46%',
              zIndex: 30,
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div 
              className="hotspot-pulse-danger"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.2)',
                border: '2.5px solid #ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(239,68,68,0.3)'
              }}
            >
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
            </div>
          </div>

          {/* Hotspot 4: Brain (Cognitive & Mental Vitality) */}
          <div
            onMouseEnter={() => setHoveredHotspot('brain')}
            onMouseLeave={() => setHoveredHotspot(null)}
            style={{
              position: 'absolute',
              top: '8%',
              left: '50%',
              zIndex: 30,
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div 
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: '#8b5cf6',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 800,
                border: '2px solid #ffffff',
                boxShadow: '0 2px 8px rgba(139,92,246,0.3)'
              }}
            >
              1
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Viewport Controls */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        zIndex: 20,
        display: 'flex',
        gap: '8px'
      }}>
        <button
          onClick={() => handleZoom(0.1)}
          title="Zoom In"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            color: '#334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transition: 'all 0.15s ease'
          }}
        >
          <Plus size={16} />
        </button>
        <button
          onClick={() => handleZoom(-0.1)}
          title="Zoom Out"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            color: '#334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transition: 'all 0.15s ease'
          }}
        >
          <Minus size={16} />
        </button>
        <button
          onClick={() => setZoomLevel(1)}
          title="Reset Zoom"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            color: '#334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transition: 'all 0.15s ease'
          }}
        >
          <RotateCw size={15} />
        </button>
        <a
          href="/vibrant"
          data-no-swup="true"
          title="Launch 3D Organ Simulation Studio"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            color: '#2563eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(37,99,235,0.15)',
            textDecoration: 'none',
            transition: 'all 0.15s ease'
          }}
        >
          <Maximize2 size={16} />
        </a>
      </div>
    </div>
  );
}
