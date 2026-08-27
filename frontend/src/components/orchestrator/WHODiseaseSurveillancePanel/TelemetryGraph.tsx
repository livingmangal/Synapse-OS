import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { RegionalHub } from './types';
import { useLanguage } from '@/context/LanguageContext';

interface TelemetryGraphProps {
  activeHub: RegionalHub;
}

export default function TelemetryGraph({ activeHub }: TelemetryGraphProps) {
  const [activeGraphTab, setActiveGraphTab] = useState<'active' | 'recovery' | 'icu'>('active');
  const [hoveredGraphIndex, setHoveredGraphIndex] = useState<number | null>(4); // defaults to Fri / current
  const { translateText } = useLanguage();

  // Fallback trajectory if none exists
  const trajectory = activeHub?.trajectory || [
    { day: 'Mon', date: 'Aug 14', active: 30, recovered: 25, icu: 60 },
    { day: 'Tue', date: 'Aug 15', active: 31, recovered: 26, icu: 61 },
    { day: 'Wed', date: 'Aug 16', active: 30, recovered: 26, icu: 60 },
    { day: 'Thu', date: 'Aug 17', active: 29, recovered: 27, icu: 59 },
    { day: 'Fri', date: 'Aug 18', active: 29, recovered: 27, icu: 58 },
    { day: 'Sat', date: 'Aug 19', active: 28, recovered: 28, icu: 58 },
    { day: 'Sun', date: 'Aug 20', active: 28, recovered: 28, icu: 57 }
  ];

  // Dynamic SVG Dimensions
  const svgWidth = 600;
  const svgHeight = 130;
  const paddingLeft = 16;
  const paddingRight = 16;
  const paddingTop = 16;
  const paddingBottom = 12;

  // Calculate points for the selected metric
  const graphValues = trajectory.map(p => 
    activeGraphTab === 'active' ? p.active : activeGraphTab === 'recovery' ? p.recovered : p.icu
  );
  const minVal = Math.min(...graphValues);
  const maxVal = Math.max(...graphValues);
  const range = (maxVal - minVal) || 1;
  const plotMin = minVal - range * 0.2;
  const plotMax = maxVal + range * 0.2;
  const plotRange = (plotMax - plotMin) || 1;

  const points = trajectory.map((p, idx) => {
    const val = activeGraphTab === 'active' ? p.active : activeGraphTab === 'recovery' ? p.recovered : p.icu;
    const x = paddingLeft + (idx / (trajectory.length - 1)) * (svgWidth - paddingLeft - paddingRight);
    const y = svgHeight - paddingBottom - ((val - plotMin) / plotRange) * (svgHeight - paddingTop - paddingBottom);
    return { x, y, point: p, val };
  });

  // Construct smooth cubic SVG path
  const pathD = points.reduce((acc, p, idx) => {
    if (idx === 0) return `M ${p.x} ${p.y}`;
    const prev = points[idx - 1];
    const cpX1 = prev.x + (p.x - prev.x) / 2;
    const cpY1 = prev.y;
    const cpX2 = prev.x + (p.x - prev.x) / 2;
    const cpY2 = p.y;
    return `${acc} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p.x} ${p.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${svgHeight - paddingBottom} L ${points[0].x} ${svgHeight - paddingBottom} Z`;

  const hoveredPoint = hoveredGraphIndex !== null ? points[hoveredGraphIndex] : points[points.length - 1];

  const graphColor = activeGraphTab === 'active' ? '#00b4d8' : activeGraphTab === 'recovery' ? '#10b981' : '#f59e0b';

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '18px',
      border: '1px solid #e2e8f0',
      padding: '20px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      {/* Header & Risk Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: 'rgba(0, 180, 216, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <MapPin size={15} color="#00b4d8" />
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              {translateText(activeHub?.name || 'Regional Hub')}
            </h3>
            <span style={{ fontSize: '11px', color: '#64748b' }}>
              {translateText('Real-time Epidemiological Telemetry')}
            </span>
          </div>
        </div>

        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: '999px',
          background: activeHub?.riskLevel === 'High' ? '#fef2f2' : activeHub?.riskLevel === 'Moderate' ? '#fffbeb' : '#ecfdf5',
          color: activeHub?.riskLevel === 'High' ? '#ef4444' : activeHub?.riskLevel === 'Moderate' ? '#d97706' : '#059669',
          border: `1px solid ${activeHub?.riskLevel === 'High' ? '#fecaca' : activeHub?.riskLevel === 'Moderate' ? '#fde68a' : '#a7f3d0'}`
        }}>
          ● {translateText(activeHub?.riskLevel || 'Moderate')} {translateText('Risk')}
        </span>
      </div>

      {/* 4 Metric Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>{translateText('Active Cases')}</div>
          <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>{activeHub?.activeCases}</div>
          <span style={{ fontSize: '10px', color: '#0096c7', fontWeight: 600 }}>{translateText('Trend:')} {activeHub?.trend}</span>
        </div>
        <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>{translateText('Recovery Rate')}</div>
          <div style={{ fontSize: '15px', fontWeight: 800, color: '#16a34a', marginTop: '2px' }}>{activeHub?.recoveryRate}%</div>
          <span style={{ fontSize: '10px', color: '#16a34a', fontWeight: 600 }}>{translateText('Optimal')}</span>
        </div>
        <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>{translateText('Test Positivity')}</div>
          <div style={{ fontSize: '15px', fontWeight: 800, color: '#d97706', marginTop: '2px' }}>{activeHub?.testPositivity}%</div>
          <span style={{ fontSize: '10px', color: '#64748b' }}>{translateText('Target < 5%')}</span>
        </div>
        <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>{translateText('ICU Available')}</div>
          <div style={{ fontSize: '15px', fontWeight: 800, color: '#0284c7', marginTop: '2px' }}>{100 - (activeHub?.icuOccupancy || 50)}%</div>
          <span style={{ fontSize: '10px', color: '#64748b' }}>{activeHub?.icuOccupancy}% {translateText('Occupied')}</span>
        </div>
      </div>

      {/* Trajectory Header & Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
            {translateText('7-Day Epidemic Trajectory')}
          </span>
          <span style={{
            fontSize: '11px',
            color: graphColor,
            fontWeight: 700,
            background: 'rgba(0, 180, 216, 0.08)',
            padding: '2px 8px',
            borderRadius: '6px'
          }}>
            {hoveredPoint.point.date}: {hoveredPoint.val}{activeGraphTab === 'icu' ? '%' : 'M'} {activeGraphTab === 'active' ? translateText('Active') : activeGraphTab === 'recovery' ? translateText('Recovered') : 'ICU'}
          </span>
        </div>

        {/* Minimal Pill Selector */}
        <div style={{ display: 'flex', gap: '2px', background: '#f1f5f9', padding: '2px', borderRadius: '8px' }}>
          {(['active', 'recovery', 'icu'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveGraphTab(tab)}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '11px',
                fontWeight: activeGraphTab === tab ? 700 : 500,
                background: activeGraphTab === tab ? '#ffffff' : 'transparent',
                color: activeGraphTab === tab ? '#0f172a' : '#64748b',
                boxShadow: activeGraphTab === tab ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {tab === 'active' ? translateText('Active') : tab === 'recovery' ? translateText('Recovered') : translateText('ICU %')}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Minimalist Chart Canvas */}
      <div style={{
        background: '#fafafa',
        borderRadius: '12px',
        border: '1px solid #f1f5f9',
        padding: '14px 12px 10px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <div style={{ width: '100%', height: '120px', position: 'relative' }}>
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="curveGradientClean" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={graphColor} stopOpacity="0.14" />
                <stop offset="100%" stopColor={graphColor} stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Delicate Horizontal Gridlines */}
            {[0.2, 0.5, 0.8].map((ratio, gIdx) => {
              const yPos = paddingTop + ratio * (svgHeight - paddingTop - paddingBottom);
              return (
                <line
                  key={gIdx}
                  x1={paddingLeft}
                  y1={yPos}
                  x2={svgWidth - paddingRight}
                  y2={yPos}
                  stroke="#e2e8f0"
                  strokeWidth="0.75"
                  strokeDasharray="3 3"
                />
              );
            })}

            {/* Soft Gradient Fill */}
            <path d={areaD} fill="url(#curveGradientClean)" />

            {/* Sleek, Crisp Curve */}
            <path
              d={pathD}
              fill="none"
              stroke={graphColor}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Vertical Guide Line on Hover */}
            {hoveredGraphIndex !== null && (
              <line
                x1={hoveredPoint.x}
                y1={paddingTop - 4}
                x2={hoveredPoint.x}
                y2={svgHeight - paddingBottom}
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            )}

            {/* Interactive Minimal Dots */}
            {points.map((p, idx) => {
              const isPointHovered = idx === hoveredGraphIndex;
              return (
                <g
                  key={idx}
                  onMouseEnter={() => setHoveredGraphIndex(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Invisible generous hover area */}
                  <circle cx={p.x} cy={p.y} r="18" fill="transparent" />

                  {/* Outer beacon on hover */}
                  {isPointHovered && (
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r="8"
                      fill={graphColor}
                      opacity="0.18"
                    />
                  )}

                  {/* Clean Dot */}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isPointHovered ? 4 : 2.5}
                    fill="#ffffff"
                    stroke={graphColor}
                    strokeWidth={isPointHovered ? 2 : 1.5}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Clean, Elegant X-Axis Day Labels */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: `0 ${paddingLeft}px`,
          marginTop: '4px'
        }}>
          {trajectory.map((p, idx) => {
            const isPointHovered = idx === hoveredGraphIndex;
            return (
              <button
                key={idx}
                onClick={() => setHoveredGraphIndex(idx)}
                onMouseEnter={() => setHoveredGraphIndex(idx)}
                style={{
                  background: isPointHovered ? 'rgba(0, 180, 216, 0.1)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: isPointHovered ? 700 : 500,
                  color: isPointHovered ? graphColor : '#94a3b8',
                  transition: 'all 0.15s ease'
                }}
              >
                {p.day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
