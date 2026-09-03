import React from 'react';
import { Persona, VoiceState } from '../types';

interface VoiceModeOverlayProps {
  persona: Persona;
  voiceState: VoiceState;
  transcript: string;
  aiResponseText: string;
  isMuted: boolean;
  onToggleMute: () => void;
  onExitVoice: () => void;
}

export default function VoiceModeOverlay({
  persona,
  voiceState,
  transcript,
  aiResponseText,
  isMuted,
  onToggleMute,
  onExitVoice
}: VoiceModeOverlayProps) {
  const getStatusBadge = () => {
    switch (voiceState) {
      case 'connecting':
        return { text: '⚡ Connecting Vapi...', color: '#d97706', bg: '#fef3c7' };
      case 'listening':
        return { text: '🟢 Listening...', color: '#15803d', bg: '#dcfce7' };
      case 'thinking':
        return { text: '🧠 Groq AI Reasoning...', color: '#0284c7', bg: '#e0f2fe' };
      case 'speaking':
        return { text: '🔊 Vapi Speaking...', color: '#059669', bg: '#ecfdf5' };
      case 'muted':
        return { text: '🎙️ Muted', color: '#dc2626', bg: '#fee2e2' };
      default:
        return { text: '🟢 Vapi Active', color: '#15803d', bg: '#dcfce7' };
    }
  };

  const status = getStatusBadge();

  return (
    <div className="synapseos-voice-overlay synapseos-root">
      
      {/* Top Header Controls in Voice Mode */}
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'nowrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0, flexShrink: 0 }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', flexShrink: 0 }} />
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap' }}>
            Live Voice (Vapi)
          </span>
        </div>

        {/* Status Pill */}
        <div style={{
          padding: '4px 10px',
          borderRadius: '20px',
          background: status.bg,
          color: status.color,
          fontSize: '10.5px',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          transition: 'all 0.3s'
        }}>
          {status.text}
        </div>

        {/* Exit Button */}
        <button
          onClick={onExitVoice}
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'all 0.2s'
          }}
          title="Exit Voice Mode"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Central Interactive Soundwave Reactive 3D Voice Orb */}
      <div className={`synapseos-voice-orb-box ${voiceState}`}>
        
        {/* Expanding Soundwave Shockwave Halo Rings when Speaking or Listening */}
        {(voiceState === 'speaking' || voiceState === 'listening') && (
          <>
            <div className="synapseos-voice-shockwave" />
            <div className="synapseos-voice-shockwave" />
            <div className="synapseos-voice-shockwave" />
          </>
        )}

        {/* Soft Volumetric Background Glow */}
        <div className="synapseos-orb-ambient-glow" style={{ width: '230px', height: '230px' }} />
        <div className="synapseos-orb-ambient-glow-inner" style={{ width: '190px', height: '190px' }} />

        {/* Orbiting Iridescent Ring */}
        <div className="synapseos-orb-orbital-ring" style={{ width: '195px', height: '195px' }} />

        {/* 3D Glass Sphere Body */}
        <div 
          className="synapseos-orb-3d-sphere" 
          style={{ width: '150px', height: '150px', cursor: 'pointer' }}
          onClick={onToggleMute}
          title={isMuted ? "Unmute Mic" : "Mute Mic"}
        >
          <div className="synapseos-orb-plasma-core-1" style={{ width: '120px', height: '120px' }} />
          <div className="synapseos-orb-plasma-core-2" style={{ width: '105px', height: '105px' }} />
          <div className="synapseos-orb-rim-reflection" style={{ width: '55px', height: '22px' }} />
          <div className="synapseos-orb-specular-glare" style={{ width: '60px', height: '32px' }} />
          <div className="synapseos-orb-pinpoint-glint" />
        </div>
      </div>

      {/* Live Audio Spectrum Bar Waveform */}
      <div className="synapseos-voice-spectrum">
        {[40, 75, 100, 60, 90, 45, 80, 100, 70, 50, 85, 30].map((h, i) => (
          <div
            key={i}
            className="synapseos-voice-bar"
            style={{
              animationDuration: `${0.6 + (i % 4) * 0.25}s`,
              animationPlayState: voiceState === 'speaking' || voiceState === 'listening' ? 'running' : 'paused',
              opacity: voiceState === 'muted' ? 0.3 : 1
            }}
          />
        ))}
      </div>

      {/* Live Transcriptions / Dynamic Subtitle Box */}
      <div style={{
        width: '100%',
        minHeight: '80px',
        maxHeight: '110px',
        overflowY: 'auto',
        padding: '12px 14px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.95)',
        border: '1px solid rgba(16, 185, 129, 0.2)',
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {voiceState === 'listening' && (
          <div style={{ fontSize: '13.5px', color: '#0f172a', fontWeight: 500, fontStyle: transcript ? 'normal' : 'italic' }}>
            {transcript || 'Speak now, SynapseOS AI is listening...'}
          </div>
        )}

        {voiceState === 'thinking' && (
          <div style={{ fontSize: '13px', color: '#0284c7', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>🧠</span> Formulating clinical guidance...
          </div>
        )}

        {voiceState === 'speaking' && (
          <div style={{ fontSize: '13px', color: '#065f46', lineHeight: 1.45, fontWeight: 500 }}>
            {aiResponseText.length > 140 ? aiResponseText.slice(0, 140) + '...' : aiResponseText}
          </div>
        )}

        {voiceState === 'muted' && (
          <div style={{ fontSize: '12.5px', color: '#dc2626', fontWeight: 600 }}>
            Microphone is muted. Tap the mic button below to unmute.
          </div>
        )}

        {voiceState === 'connecting' && (
          <div style={{ fontSize: '12.5px', color: '#64748b' }}>
            Initializing voice session...
          </div>
        )}
      </div>

      {/* Bottom Action Controls (Mute, End Call, Switch Persona) */}
      <div className="synapseos-voice-controls">
        {/* Mute Button */}
        <button
          onClick={onToggleMute}
          className="synapseos-voice-action-btn"
          style={{
            background: isMuted ? '#fee2e2' : '#f1f5f9',
            color: isMuted ? '#dc2626' : '#334155',
            border: isMuted ? '1.5px solid #ef4444' : '1px solid #cbd5e1'
          }}
          title={isMuted ? "Unmute Microphone" : "Mute Microphone"}
        >
          {isMuted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="2" y1="2" x2="22" y2="22"></line>
              <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"></path>
              <path d="M5 10v2a7 7 0 0 0 12 5"></path>
              <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"></path>
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path>
              <line x1="12" y1="19" x2="12" y2="22"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="22"></line>
            </svg>
          )}
        </button>

        {/* End Voice Session Button */}
        <button
          onClick={onExitVoice}
          className="synapseos-voice-action-btn"
          style={{
            background: '#ef4444',
            color: '#ffffff',
            width: '60px',
            height: '60px',
            boxShadow: '0 6px 20px rgba(239, 68, 68, 0.4)'
          }}
          title="End Voice Mode & Return to Chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Keyboard / Text Mode Switcher */}
        <button
          onClick={onExitVoice}
          className="synapseos-voice-action-btn"
          style={{
            background: '#f1f5f9',
            color: '#334155',
            border: '1px solid #cbd5e1'
          }}
          title="Switch to Text Chat"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>

    </div>
  );
}
