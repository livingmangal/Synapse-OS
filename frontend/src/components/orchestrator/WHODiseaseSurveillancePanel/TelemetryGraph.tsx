import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { RegionalHub } from './types';

interface TelemetryGraphProps {
  activeHub: RegionalHub;
}

export default function TelemetryGraph({ activeHub }: TelemetryGraphProps) {
  const [activeGraphTab, setActiveGraphTab] = useState<'active' | 'recovery' | 'icu'>('active');
  const [hoveredGraphIndex, setHoveredGraphIndex] = useState<number | null>(5); // defaults to Sat / current

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

  // Dynamic Full-Width SVG Curve Generation
  const svgWidth = 600;
  const svgHeight = 190;
  const paddingLeft = 24;
  const paddingRight = 24;
  const paddingTop = 18;
  const paddingBottom = 28;

  // Calculate points for the selected metric
  const graphValues = trajectory.map(p => 
    activeGraphTab === 'active' ? p.active : activeGraphTab === 'recovery' ? p.recovered : p.icu
  );
  const minVal = Math.min(...graphValues);
  const maxVal = Math.max(...graphValues);
  const range = (maxVal - minVal) || 1;
  // Use 15% margin so waves have bold, beautiful crests & troughs
  const plotMin = minVal - range * 0.15;
  const plotMax = maxVal + range * 0.15;
  const plotRange = (plotMax - plotMin) || 1;

  const points = trajectory.map((p, idx) => {
    const val = activeGraphTab === 'active' ? p.active : activeGraphTab === 'recovery' ? p.recovered : p.icu;
    const x = paddingLeft + (idx / (trajectory.length - 1)) * (svgWidth - paddingLeft - paddingRight);
    const y = svgHeight - paddingBottom - ((val - plotMin) / plotRange) * (svgHeight - paddingTop - paddingBottom);
    return { x, y, point: p, val };
  });

  // Construct smooth cubic SVG path covering entire left to right
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

  const graphColor = activeGraphTab === 'active' ? '#ec4899' : activeGraphTab === 'recovery' ? '#16a34a' : '#ea580c';

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
      padding: '24px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '16px',
      height: '100%'
    }}>
      {/* Header & Risk Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={14} color="#ec4899" />
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#ec4899', textTransform: 'uppercase' }}>
              Active Hub Telemetry
            </span>
          </div>
          <h3 style={{ fontSize: '17px', fontWeight: 900, color: '#0f172a', margin: '4px 0 0 0' }}>
            {activeHub?.name || 'Regional Hub'}
          </h3>
        </div>

        <span style={{
          fontSize: '10px',
          fontWeight: 800,
          padding: '3px 8px',
          borderRadius: '6px',
          background: activeHub?.riskLevel === 'High' ? '#fef2f2' : activeHub?.riskLevel === 'Moderate' ? '#fffbeb' : '#ecfdf5',
          color: activeHub?.riskLevel === 'High' ? '#ef4444' : activeHub?.riskLevel === 'Moderate' ? '#d97706' : '#059669',
          border: `1px solid ${activeHub?.riskLevel === 'High' ? '#fecaca' : activeHub?.riskLevel === 'Moderate' ? '#fde68a' : '#a7f3d0'}`
        }}>
          ● {activeHub?.riskLevel} Risk
        </span>
      </div>

      {/* 4 Metric Badges */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Active Cases</div>
          <div style={{ fontSize: '15px', fontWeight: 900, color: '#0f172a', marginTop: '2px' }}>{activeHub?.activeCases}</div>
          <span style={{ fontSize: '10px', color: '#ec4899', fontWeight: 700 }}>Trend: {activeHub?.trend}</span>
        </div>
        <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Recovery Rate</div>
          <div style={{ fontSize: '15px', fontWeight: 900, color: '#16a34a', marginTop: '2px' }}>{activeHub?.recoveryRate}%</div>
          <span style={{ fontSize: '10px', color: '#16a34a', fontWeight: 700 }}>Optimal</span>
        </div>
        <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Test Positivity</div>
          <div style={{ fontSize: '15px', fontWeight: 900, color: '#d97706', marginTop: '2px' }}>{activeHub?.testPositivity}%</div>
          <span style={{ fontSize: '10px', color: '#64748b' }}>Benchmark &lt; 5%</span>
        </div>
        <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>ICU Bed Reserve</div>
          <div style={{ fontSize: '15px', fontWeight: 900, color: '#db2777', marginTop: '2px' }}>{100 - (activeHub?.icuOccupancy || 50)}% Avail</div>
          <span style={{ fontSize: '10px', color: '#64748b' }}>{activeHub?.icuOccupancy}% in use</span>
        </div>
      </div>

      {/* Interactive Graph Controls & Edge-to-Edge SVG Spline */}
      <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a' }}>
            7-Day Interactive Epidemic Trajectory
          </span>
          
          {/* Metric Switcher Tabs for Graph */}
          <div style={{ display: 'flex', gap: '4px', background: '#f1f5f9', padding: '2px', borderRadius: '6px' }}>
            <button
              onClick={() => setActiveGraphTab('active')}
              style={{
                padding: '3px 8px',
                borderRadius: '5px',
                border: 'none',
                fontSize: '10px',
                fontWeight: activeGraphTab === 'active' ? 800 : 600,
                background: activeGraphTab === 'active' ? '#ec4899' : 'transparent',
                color: activeGraphTab === 'active' ? '#ffffff' : '#64748b',
                cursor: 'pointer'
              }}
            >
              Active
            </button>
            <button
              onClick={() => setActiveGraphTab('recovery')}
              style={{
                padding: '3px 8px',
                borderRadius: '5px',
                border: 'none',
                fontSize: '10px',
                fontWeight: activeGraphTab === 'recovery' ? 800 : 600,
                background: activeGraphTab === 'recovery' ? '#16a34a' : 'transparent',
                color: activeGraphTab === 'recovery' ? '#ffffff' : '#64748b',
                cursor: 'pointer'
              }}
            >
              Recovered
            </button>
            <button
              onClick={() => setActiveGraphTab('icu')}
              style={{
                padding: '3px 8px',
                borderRadius: '5px',
                border: 'none',
                fontSize: '10px',
                fontWeight: activeGraphTab === 'icu' ? 800 : 600,
                background: activeGraphTab === 'icu' ? '#ea580c' : 'transparent',
                color: activeGraphTab === 'icu' ? '#ffffff' : '#64748b',
                cursor: 'pointer'
              }}
            >
              ICU %
            </button>
          </div>
        </div>

        {/* Hover Live Data Readout */}
        <div style={{
          background: '#f8fafc',
          padding: '6px 12px',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
          fontSize: '11px'
        }}>
          <span style={{ color: '#64748b', fontWeight: 600 }}>
            📅 {hoveredPoint.point.date} ({hoveredPoint.point.day})
          </span>
          <span style={{ fontWeight: 800, color: graphColor }}>
            {activeGraphTab === 'active' ? `${hoveredPoint.point.active}M Active` : activeGraphTab === 'recovery' ? `${hoveredPoint.point.recovered}M Recovered` : `${hoveredPoint.point.icu}% ICU Load`}
          </span>
        </div>

        {/* Full-Width Enhanced Interactive Clinical Spline Canvas */}
        <div style={{
          width: '100%',
          height: '210px',
          background: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          position: 'relative',
          overflow: 'hidden',
          padding: '8px 0'
        }}>
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <defs>
              <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={graphColor} stopOpacity="0.32" />
                <stop offset="60%" stopColor={graphColor} stopOpacity="0.08" />
                <stop offset="100%" stopColor={graphColor} stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={graphColor} stopOpacity="0.8" />
                <stop offset="50%" stopColor={graphColor} stopOpacity="1" />
                <stop offset="100%" stopColor={graphColor} stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Subtle Background Gridlines */}
            {[0.25, 0.5, 0.75].map((ratio, gIdx) => {
              const yPos = paddingTop + ratio * (svgHeight - paddingTop - paddingBottom);
              return (
                <line
                  key={gIdx}
                  x1={paddingLeft}
                  y1={yPos}
                  x2={svgWidth - paddingRight}
                  y2={yPos}
                  stroke="#f1f5f9"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />
              );
            })}

            {/* Area fill spanning full width */}
            <path d={areaD} fill="url(#curveGradient)" />

            {/* Secondary Baseline Comparison Spline (Dashed Green/Slate) */}
            <path
              d={points.reduce((acc, p, idx) => {
                const baselineY = svgHeight - paddingBottom - ((p.point.recovered - (minVal * 0.8)) / ((maxVal * 1.1) - (minVal * 0.8) || 1)) * (svgHeight - paddingTop - paddingBottom);
                if (idx === 0) return `M ${p.x} ${baselineY}`;
                const prev = points[idx - 1];
                const prevBaseY = svgHeight - paddingBottom - ((prev.point.recovered - (minVal * 0.8)) / ((maxVal * 1.1) - (minVal * 0.8) || 1)) * (svgHeight - paddingTop - paddingBottom);
                const cpX1 = prev.x + (p.x - prev.x) / 2;
                const cpX2 = prev.x + (p.x - prev.x) / 2;
                return `${acc} C ${cpX1} ${prevBaseY}, ${cpX2} ${baselineY}, ${p.x} ${baselineY}`;
              }, '')}
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.6"
            />

            {/* Primary Spline Path with dynamic curvature */}
            <path
              d={pathD}
              fill="none"
              stroke="url(#lineGlow)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Vertical Guide Line on Hover */}
            {hoveredGraphIndex !== null && (
              <line
                x1={hoveredPoint.x}
                y1={paddingTop}
                x2={hoveredPoint.x}
                y2={svgHeight - paddingBottom}
                stroke={graphColor}
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.75"
              />
            )}

            {/* Interactive Day Points */}
            {points.map((p, idx) => {
              const isPointHovered = idx === hoveredGraphIndex;
              return (
                <g
                  key={idx}
                  onMouseEnter={() => setHoveredGraphIndex(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Invisible larger hit area for easy hover */}
                  <circle cx={p.x} cy={p.y} r="22" fill="transparent" />

                  {/* Point Outer Pulsing Halo */}
                  {isPointHovered && (
                    <circle cx={p.x} cy={p.y} r="14" fill={graphColor} opacity="0.25" />
                  )}

                  {/* Point Core */}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isPointHovered ? 7 : 5}
                    fill={isPointHovered ? '#ffffff' : graphColor}
                    stroke={graphColor}
                    strokeWidth={isPointHovered ? 3.5 : 2}
                  />

                  {/* Day Label */}
                  <text
                    x={p.x}
                    y={svgHeight - 6}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight={isPointHovered ? "900" : "700"}
                    fill={isPointHovered ? graphColor : "#64748b"}
                  >
                    {p.point.day}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
