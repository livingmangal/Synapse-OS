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

  const getPersonaCards = () => {
    if (assistantPersona === 'triage') {
      return [
        { icon: '🩺', title: 'Evaluate Symptoms', desc: 'Assess headache, fever or body aches', query: 'I have a headache and mild fever, assess my symptoms' },
        { icon: '🚨', title: 'Emergency Flags', desc: 'Identify immediate critical symptoms', query: 'What are immediate medical emergency red flags?' },
        { icon: '🌡️', title: 'Vitals & Fever Guide', desc: 'Standard clinical temperature ranges', query: 'What are standard normal body temperature ranges?' },
        { icon: '💊', title: 'Medication Safety', desc: 'Verify prescription & drug interactions', query: 'How to check drug interactions safely?' }
      ];
    }
    if (assistantPersona === 'nutrition') {
      return [
        { icon: '🥗', title: 'Macro Distribution', desc: 'Calculate daily protein, carb & fat split', query: 'Calculate my daily macronutrient distribution' },
        { icon: '💧', title: 'Hydration Target', desc: 'Calculate optimal daily water intake', query: 'What is my optimal daily water intake calculation?' },
        { icon: '🥑', title: 'Mediterranean Plan', desc: 'Evidence-based longevity nutrition', query: 'Outline a healthy Mediterranean nutrition meal blueprint' },
        { icon: '⌚', title: 'Metabolic Sleep', desc: 'Sync wearable sleep stages & resting HR', query: 'Analyze my continuous Apple Watch sleep stages and nocturnal SpO2' }
      ];
    }
    return [
      { icon: '⌚', title: 'Wearables & ECG', desc: 'Analyze Apple Watch ECG & HRV rhythm', query: 'Analyze my Apple Watch ECG rhythm strip and heart rate variability' },
      { icon: '💡', title: 'Multi-Agent Swarm', desc: 'Clinical consensus and orchestration', query: 'Explain how the multi-agent clinical consensus works' },
      { icon: '🔒', title: 'ABHA Blockchain', desc: 'Tamper-proof on-chain record vaults', query: 'How are medical records stored securely in ABHA?' },
      { icon: '📱', title: 'WhatsApp Bridge', desc: 'Upload lab reports & Rx via chat', query: 'How does the WhatsApp prescription upload bridge work?' }
    ];
  };

  const getPersonaHeadline = () => {
    if (assistantPersona === 'triage') {
      return 'What symptoms can I evaluate for you?';
    }
    if (assistantPersona === 'nutrition') {
      return 'What are your nutrition & metabolic goals?';
    }
    return 'What can I help you with today?';
  };

  const getPersonaSubtitle = () => {
    if (assistantPersona === 'triage') {
      return 'Fast, empathetic clinical triage cross-referenced with emergency guidelines.';
    }
    if (assistantPersona === 'nutrition') {
      return 'Custom metabolic breakdowns, calorie calculations, and longevity meal plans.';
    }
    return 'SynapseOS AI Orchestrator — Clinical diagnostics, scan analysis & blockchain records.';
  };

  return (
    <div 
      className="synapseos-orb-welcome"
      onMouseMove={handleOrbMouseMove}
      onMouseLeave={handleOrbMouseLeave}
    >
      {/* Hyper-Realistic 3D Glowing Movable Fluid Orb */}
      <div 
        ref={orbContainerRef}
        className="synapseos-orb-container"
        style={{
          transform: `translate3d(${orbOffset.x}px, ${orbOffset.y}px, 0px) rotateX(${-orbOffset.y * 1.5}deg) rotateY(${orbOffset.x * 1.5}deg)`,
          transition: 'transform 0.16s ease-out'
        }}
        onClick={onToggleVoice}
        title="Click to start live voice conversation"
      >
        {/* Soft Multi-layered Volumetric Halos */}
        <div className="synapseos-orb-ambient-glow" />
        <div className="synapseos-orb-ambient-glow-inner" />

        {/* Orbiting Iridescent Glass Ring */}
        <div className="synapseos-orb-orbital-ring" />

        {/* 3D Glass Sphere Vessel */}
        <div className="synapseos-orb-3d-sphere">
          {/* Morphing Internal Plasma Cores */}
          <div className="synapseos-orb-plasma-core-1" />
          <div className="synapseos-orb-plasma-core-2" />

          {/* Subsurface Rim Reflection */}
          <div className="synapseos-orb-rim-reflection" />

          {/* Primary 3D Curvature Glare */}
          <div className="synapseos-orb-specular-glare" />

          {/* Pinpoint Specular Hotspot */}
          <div className="synapseos-orb-pinpoint-glint" />
        </div>
      </div>

      {/* Headline & Subtitle matching Active Persona */}
      <div className="synapseos-welcome-heading-wrap">
        <h2 className="synapseos-welcome-title">
          {getPersonaHeadline()}
        </h2>
        <p className="synapseos-welcome-subtitle">
          {getPersonaSubtitle()}
        </p>
      </div>

      {/* Quick Trigger Action Cards Grid per Persona */}
      <div className="synapseos-welcome-grid">
        {getPersonaCards().map((card, idx) => (
          <button
            key={idx}
            onClick={() => onSendChip(card.query)}
            className="synapseos-prompt-card"
          >
            <span className="synapseos-prompt-icon">{card.icon}</span>
            <div className="synapseos-prompt-text">
              <span className="synapseos-prompt-title">{card.title}</span>
              <span className="synapseos-prompt-desc">{card.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
