'use client';
import React, { useEffect, useRef } from 'react';
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

/* ─── Sine-wave canvas ─────────────────────────────────────────── */
function WaveCanvas({ state }: { state: VoiceState }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const phaseRef  = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width;
    const H = canvas.height;

    const CFG: Record<string, { amp: number; freq: number; speed: number; color: string; waves: number }> = {
      listening:  { amp: 20, freq: 2.4, speed: 0.07, color: '#10b981', waves: 3 },
      speaking:   { amp: 28, freq: 3.2, speed: 0.13, color: '#059669', waves: 3 },
      thinking:   { amp: 10, freq: 1.8, speed: 0.04, color: '#0284c7', waves: 2 },
      connecting: { amp:  5, freq: 1.2, speed: 0.02, color: '#f59e0b', waves: 2 },
      muted:      { amp:  1, freq: 1.0, speed: 0.00, color: '#cbd5e1', waves: 1 },
      idle:       { amp:  4, freq: 1.0, speed: 0.02, color: '#94a3b8', waves: 2 },
    };
    const c = CFG[state] ?? CFG.idle;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      phaseRef.current += c.speed;
      const [r, g, b] = [
        parseInt(c.color.slice(1, 3), 16),
        parseInt(c.color.slice(3, 5), 16),
        parseInt(c.color.slice(5, 7), 16),
      ];

      for (let w = 0; w < c.waves; w++) {
        ctx.beginPath();
        const phaseOff = (w * Math.PI * 2) / c.waves;
        const alpha    = 1 - w * 0.3;
        const ampScale = 1 - w * 0.28;

        for (let x = 0; x <= W; x++) {
          const t = (x / W) * Math.PI * 2 * c.freq;
          const y = H / 2 + Math.sin(t + phaseRef.current + phaseOff) * c.amp * ampScale;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth   = w === 0 ? 2.5 : 1.5;
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, [state]);

  return (
    <canvas
      ref={canvasRef}
      width={380}
      height={56}
      style={{ display: 'block', width: '100%', height: '56px' }}
    />
  );
}

/* ─── Status map ───────────────────────────────────────────────── */
const STATUS: Record<string, { label: string; dot: string; textColor: string }> = {
  connecting: { label: 'Connecting…', dot: '#f59e0b', textColor: '#92400e' },
  listening:  { label: 'Listening',   dot: '#10b981', textColor: '#065f46' },
  thinking:   { label: 'Processing…', dot: '#0284c7', textColor: '#075985' },
  speaking:   { label: 'Speaking',    dot: '#059669', textColor: '#065f46' },
  muted:      { label: 'Muted',       dot: '#ef4444', textColor: '#991b1b' },
  idle:       { label: 'Ready',       dot: '#10b981', textColor: '#065f46' },
};

/* ─── Orb gradient map ─────────────────────────────────────────── */
const ORB_GRADIENT: Record<string, string> = {
  listening:  'linear-gradient(145deg,#34d399,#10b981 55%,#059669)',
  speaking:   'linear-gradient(145deg,#6ee7b7,#10b981 50%,#047857)',
  thinking:   'linear-gradient(145deg,#93c5fd,#3b82f6 55%,#1d4ed8)',
  connecting: 'linear-gradient(145deg,#fde68a,#f59e0b 55%,#d97706)',
  muted:      'linear-gradient(145deg,#fca5a5,#ef4444 55%,#dc2626)',
  idle:       'linear-gradient(145deg,#e2e8f0,#cbd5e1)',
};

const ORB_SHADOW: Record<string, string> = {
  listening:  '0 14px 40px rgba(16,185,129,0.45)',
  speaking:   '0 16px 48px rgba(16,185,129,0.55)',
  thinking:   '0 14px 40px rgba(59,130,246,0.40)',
  connecting: '0 12px 32px rgba(245,158,11,0.38)',
  muted:      '0 12px 32px rgba(239,68,68,0.32)',
  idle:       '0 8px 24px rgba(0,0,0,0.10)',
};

export default function VoiceModeOverlay({
  voiceState,
  transcript,
  aiResponseText,
  isMuted,
  onToggleMute,
  onExitVoice,
}: VoiceModeOverlayProps) {
  const st     = STATUS[voiceState]  ?? STATUS.idle;
  const isActive = voiceState === 'listening' || voiceState === 'speaking';

  const getCaption = () => {
    if (voiceState === 'listening')  return transcript || 'Listening — speak now…';
    if (voiceState === 'thinking')   return 'Formulating clinical guidance…';
    if (voiceState === 'speaking')   return (aiResponseText.slice(0, 160) + (aiResponseText.length > 160 ? '…' : '')) || 'Speaking…';
    if (voiceState === 'muted')      return 'Mic muted — tap orb to resume.';
    if (voiceState === 'connecting') return 'Initialising secure voice session…';
    return 'Sanjeevni Voice ready.';
  };

  return (
    /* Root — fills synapseos-modal-inner */
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 50,
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 22px 24px',
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
      gap: '14px',
    }}>

      {/* ── TOP BAR ─────────────────────────────────── */}
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/synapseos-icon.svg"
            alt="Sanjeevni"
            style={{ width: '28px', height: '28px', borderRadius: '7px', objectFit: 'contain', flexShrink: 0 }}
          />
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.2px' }}>
              Sanjeevni Voice
            </div>
            <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 500 }}>
              Vapi · Groq LLaMA 3.3
            </div>
          </div>
        </div>

        {/* Status pill */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '5px',
          padding: '4px 11px',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '20px',
          fontSize: '11px',
          fontWeight: 600,
          color: st.textColor,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: st.dot, flexShrink: 0,
            animation: 'snj-dot-pulse 2s ease-in-out infinite',
            display: 'inline-block',
          }} />
          {st.label}
        </div>

        {/* Close */}
        <button
          onClick={onExitVoice}
          title="Exit voice mode"
          style={{
            width: '28px', height: '28px', borderRadius: '50%',
            background: '#f1f5f9', border: '1px solid #e2e8f0',
            color: '#64748b', display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* ── CENTRAL ORB ─────────────────────────────── */}
      <div style={{ position: 'relative', width: '148px', height: '148px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {/* Ripple rings */}
        {isActive && [0, 1, 2].map(i => (
          <div key={i} style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '1.5px solid rgba(16,185,129,0.3)',
            animationName: 'snj-ring',
            animationDuration: '2.1s',
            animationTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
            animationIterationCount: 'infinite',
            animationDelay: `${i * 0.7}s`,
            pointerEvents: 'none',
          }} />
        ))}

        {/* Orb button */}
        <button
          onClick={onToggleMute}
          title={isMuted ? 'Unmute mic' : 'Mute mic (tap orb)'}
          style={{
            position: 'relative', zIndex: 2,
            width: '108px', height: '108px', borderRadius: '50%',
            border: 'none',
            background: ORB_GRADIENT[voiceState] ?? ORB_GRADIENT.idle,
            boxShadow: ORB_SHADOW[voiceState] ?? ORB_SHADOW.idle,
            color: voiceState === 'idle' ? '#64748b' : '#ffffff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s',
            animationName: isActive ? (voiceState === 'speaking' ? 'snj-orb-speak' : 'snj-orb-listen') : 'none',
            animationDuration: voiceState === 'speaking' ? '1.6s' : '2.4s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
          }}
        >
          {isMuted ? (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="2" y1="2" x2="22" y2="22" />
              <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
              <path d="M5 10v2a7 7 0 0 0 12 5" />
              <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
              <line x1="12" y1="19" x2="12" y2="22" />
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="22" />
            </svg>
          )}
        </button>
      </div>

      {/* ── SINE WAVE ───────────────────────────────── */}
      <div style={{
        width: '100%', height: '56px', flexShrink: 0,
        background: '#f8fafc', borderRadius: '12px',
        border: '1px solid #f1f5f9', overflow: 'hidden',
      }}>
        <WaveCanvas state={voiceState} />
      </div>

      {/* ── CAPTION ─────────────────────────────────── */}
      <div style={{
        width: '100%',
        minHeight: '48px',
        maxHeight: '68px',
        overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '10px 16px',
        borderRadius: '12px',
        background: '#f8fafc',
        border: `1px solid ${
          voiceState === 'listening' ? 'rgba(16,185,129,0.25)' :
          voiceState === 'speaking'  ? 'rgba(5,150,105,0.25)'  :
          voiceState === 'thinking'  ? 'rgba(59,130,246,0.2)'  :
          voiceState === 'muted'     ? 'rgba(239,68,68,0.2)'   :
          '#e2e8f0'
        }`,
        fontSize: '12.5px',
        fontWeight: 500,
        color: voiceState === 'muted' ? '#991b1b' : voiceState === 'thinking' ? '#075985' : '#334155',
        lineHeight: 1.5,
        textAlign: 'center',
        flexShrink: 0,
        fontStyle: voiceState === 'listening' && !transcript ? 'italic' : 'normal',
      }}>
        {getCaption()}
      </div>

      {/* ── BOTTOM CONTROLS ─────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', width: '100%', flexShrink: 0 }}>

        {/* Mute */}
        <button
          onClick={onToggleMute}
          title={isMuted ? 'Unmute' : 'Mute'}
          style={{
            width: '48px', height: '48px', borderRadius: '50%', border: 'none',
            background: isMuted ? '#fef2f2' : '#f1f5f9',
            color: isMuted ? '#dc2626' : '#475569',
            outline: isMuted ? '1.5px solid #fca5a5' : '1px solid #e2e8f0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            flexShrink: 0,
          }}
        >
          {isMuted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="22" y2="22" /><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" /><path d="M5 10v2a7 7 0 0 0 12 5" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" />
            </svg>
          )}
        </button>

        {/* End call */}
        <button
          onClick={onExitVoice}
          title="End voice session"
          style={{
            width: '60px', height: '60px', borderRadius: '50%', border: 'none',
            background: '#ef4444',
            color: '#ffffff',
            boxShadow: '0 6px 20px rgba(239,68,68,0.42)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            flexShrink: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Switch to chat */}
        <button
          onClick={onExitVoice}
          title="Switch to text chat"
          style={{
            width: '48px', height: '48px', borderRadius: '50%', border: 'none',
            background: '#f1f5f9',
            color: '#475569',
            outline: '1px solid #e2e8f0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      {/* Keyframe definitions injected inline via style tag */}
      <style>{`
        @keyframes snj-dot-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.55; transform:scale(0.75); }
        }
        @keyframes snj-ring {
          0%   { transform:scale(0.82); opacity:0.75; }
          100% { transform:scale(1.95); opacity:0; }
        }
        @keyframes snj-orb-listen {
          0%,100% { transform:scale(1); }
          50%      { transform:scale(1.07); }
        }
        @keyframes snj-orb-speak {
          0%,100% { transform:scale(1); }
          50%      { transform:scale(1.12); }
        }
      `}</style>

    </div>
  );
}
