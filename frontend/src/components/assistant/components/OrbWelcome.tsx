import React, { useRef, useState } from 'react';
import { Persona } from '../types';

interface OrbWelcomeProps {
  assistantPersona: Persona;
  onSendChip: (query: string) => void;
  onToggleVoice: () => void;
}

export default function OrbWelcome({ assistantPersona, onSendChip, onToggleVoice }: OrbWelcomeProps) {
  const orbContainerRef = useRef<HTMLDivElement>(null);
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 });

  const handleOrbMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!orbContainerRef.current) return;
    const rect = orbContainerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    setOrbOffset({
      x: Math.max(-14, Math.min(14, deltaX * 14)),
      y: Math.max(-14, Math.min(14, deltaY * 14))
    });
  };

  const handleOrbMouseLeave = () => {
    setOrbOffset({ x: 0, y: 0 });
  };

  const getPersonaChips = () => {
    if (assistantPersona === 'triage') {
      return [
        { label: '🩺 Check Symptoms', query: 'I have a headache and mild fever, assess my symptoms' },
        { label: '🚨 Emergency Red Flags', query: 'What are immediate medical emergency red flags?' },
        { label: '🌡️ Fever & Vitals Guide', query: 'What are standard normal body temperature ranges?' },
        { label: '💊 Medication Safety', query: 'How to check drug interactions safely?' },
        { label: '📊 Triage Urgency', query: 'Explain how clinical urgency triage scores are computed' }
      ];
    }
    if (assistantPersona === 'nutrition') {
      return [
        { label: '🥗 Custom Macro Split', query: 'Calculate my daily macronutrient distribution' },
        { label: '💧 Hydration Target', query: 'What is my optimal daily water intake calculation?' },
        { label: '🥑 Mediterranean Diet', query: 'Outline a healthy Mediterranean nutrition meal blueprint' },
        { label: '⌚ Sleep & Wearables', query: 'Analyze my continuous Apple Watch sleep stages and nocturnal SpO2' },
        { label: '⚡ Metabolic Energy', query: 'What foods help maintain consistent energy levels?' },
        { label: '📋 Daily Calorie Target', query: 'How to set a clean calorie deficit or maintenance target' }
      ];
    }
    return [
      { label: '⌚ Wearables & ECG', query: 'Analyze my Apple Watch ECG rhythm strip and heart rate variability' },
      { label: '💡 Swarm Diagnostics', query: 'Explain how the multi-agent clinical consensus works' },
      { label: '📊 Analyze Records', query: 'How are medical records stored securely in ABHA?' },
      { label: '📱 WhatsApp Bridge', query: 'How does the WhatsApp prescription upload bridge work?' },
      { label: '💬 Ask me anything', query: 'What can Sanjeevani AI do for patients?' }
    ];
  };

  const getPersonaHeadline = () => {
    if (assistantPersona === 'triage') {
      return <>What symptoms can I <br />evaluate for you ?</>;
    }
    if (assistantPersona === 'nutrition') {
      return <>What are your nutrition <br />& metabolic goals ?</>;
    }
    return <>What can I help you <br />with today ?</>;
  };

  return (
    <div 
      style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', margin: 'auto 0' }}
      onMouseMove={handleOrbMouseMove}
      onMouseLeave={handleOrbMouseLeave}
    >
      {/* Hyper-Realistic 3D Glowing Movable Fluid Orb */}
      <div 
        ref={orbContainerRef}
        className="sanjeevani-orb-container"
        style={{
          transform: `translate3d(${orbOffset.x}px, ${orbOffset.y}px, 0px) rotateX(${-orbOffset.y * 1.5}deg) rotateY(${orbOffset.x * 1.5}deg)`,
          transition: 'transform 0.16s ease-out'
        }}
        onClick={onToggleVoice}
        title="Click to start voice conversation"
      >
        {/* Soft Multi-layered Volumetric Halos */}
        <div className="sanjeevani-orb-ambient-glow" />
        <div className="sanjeevani-orb-ambient-glow-inner" />

        {/* Orbiting Iridescent Glass Ring */}
        <div className="sanjeevani-orb-orbital-ring" />

        {/* 3D Glass Sphere Vessel */}
        <div className="sanjeevani-orb-3d-sphere">
          {/* Morphing Internal Plasma Cores */}
          <div className="sanjeevani-orb-plasma-core-1" />
          <div className="sanjeevani-orb-plasma-core-2" />

          {/* Subsurface Rim Reflection */}
          <div className="sanjeevani-orb-rim-reflection" />

          {/* Primary 3D Curvature Glare */}
          <div className="sanjeevani-orb-specular-glare" />

          {/* Pinpoint Specular Hotspot */}
          <div className="sanjeevani-orb-pinpoint-glint" />
        </div>
      </div>

      {/* Headline matching Active Persona */}
      <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.6px', marginTop: '6px', marginBottom: '18px', lineHeight: 1.25 }}>
        {getPersonaHeadline()}
      </h2>

      {/* Quick Trigger Action Chips Grid per Persona */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '7px', maxWidth: '340px', margin: '0 auto' }}>
        {getPersonaChips().map((chip, idx) => (
          <button
            key={idx}
            onClick={() => onSendChip(chip.query)}
            className="sanjeevani-chip-btn"
          >
            {chip.label}
          </button>
        ))}
      </div>
    </div>
  );
}
