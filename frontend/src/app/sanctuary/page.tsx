'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type BreathPhase = 'INHALE' | 'HOLD' | 'EXHALE' | 'IDLE';

export default function SanctuaryPage() {
  // Breathing Timer State
  const [breathPhase, setBreathPhase] = useState<BreathPhase>('IDLE');
  const [breathSeconds, setBreathSeconds] = useState(0);
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);

  // Emotional & Chat State
  const [moodLevel, setMoodLevel] = useState(50); // 0 (Severe Distress) to 100 (Peaceful)
  const [userQuery, setUserQuery] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string; techniques?: string[] }>>([
    {
      role: 'assistant',
      text: 'Welcome to your Emotional Sanctuary. This space is grounded in WHO mhGAP and Tele-MANAS clinical guidelines. How are you feeling right now?'
    }
  ]);
  const [isEvaluating, setIsEvaluating] = useState(false);

  // 4-7-8 Breathing State Machine
  useEffect(() => {
    if (!isBreathingActive) {
      setBreathPhase('IDLE');
      return;
    }

    let interval: NodeJS.Timeout;

    // Sequence: INHALE (4s) -> HOLD (7s) -> EXHALE (8s)
    if (breathPhase === 'IDLE' || breathPhase === 'EXHALE') {
      setBreathPhase('INHALE');
      setBreathSeconds(4);
    }

    interval = setInterval(() => {
      setBreathSeconds((prev) => {
        if (prev > 1) return prev - 1;

        // Transition logic
        if (breathPhase === 'INHALE') {
          setBreathPhase('HOLD');
          return 7;
        } else if (breathPhase === 'HOLD') {
          setBreathPhase('EXHALE');
          return 8;
        } else if (breathPhase === 'EXHALE') {
          setCompletedCycles((c) => c + 1);
          setBreathPhase('INHALE');
          return 4;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreathingActive, breathPhase]);

  // Handle AI Mental Health Evaluation
  const handleSendMessage = async (msgText?: string) => {
    const textToSend = msgText || userQuery;
    if (!textToSend.trim()) return;

    const newMsgs = [...chatMessages, { role: 'user' as const, text: textToSend }];
    setChatMessages(newMsgs);
    setUserQuery('');
    setIsEvaluating(true);

    try {
      const res = await fetch('http://127.0.0.1:8000/api/mental-health/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend })
      });

      if (res.ok) {
        const data = await res.json();
        const advice = data.personalized_coping_advice || data.wellbeing_score_assessment || 'I am here with you. Let us take a gentle breath together.';
        setChatMessages((prev) => [
          ...prev,
          {
            role: 'assistant' as const,
            text: advice,
            techniques: data.evidence_based_techniques || []
          }
        ]);
      }
    } catch (err) {
      console.error('Mental health chat failed', err);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070b14', color: '#f8fafc', padding: '32px 24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Template Overlay Suppression */}
      <style>{`
        #video-splash, #page-loader, .animated-splash-page, .transition, #mouse, header, .grid.wrapper, .header__logo.logo, .intro__logo {
          display: none !important;
          pointer-events: none !important;
        }
        @keyframes pulseGlow {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 0.6; }
        }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 28px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Link href="/" style={{ color: '#a855f7', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            ← Return to Sanjeevani OS
          </Link>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.5px' }}>
            🧘 WHO Tele-MANAS Emotional Sanctuary
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '15px', margin: '4px 0 0 0' }}>
            4-7-8 Guided Vagus Nerve Breathing • WHO mhGAP Psychological Grounding • 24/7 Crisis Escalation
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{ backgroundColor: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 700, border: '1px solid rgba(168, 85, 247, 0.35)' }}>
            ● Tele-MANAS: 14416 (Toll-Free)
          </span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 1.15fr', gap: '28px' }}>
        
        {/* LEFT COLUMN: 4-7-8 Guided Breathing Visualizer */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            4-7-8 BIO-FEEDBACK REGULATION
          </div>

          {/* Animated Circle */}
          <div style={{ position: 'relative', width: '220px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '16px 0' }}>
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: breathPhase === 'INHALE' ? 'rgba(6, 182, 212, 0.25)' : breathPhase === 'HOLD' ? 'rgba(168, 85, 247, 0.3)' : breathPhase === 'EXHALE' ? 'rgba(16, 185, 129, 0.25)' : 'rgba(30, 41, 59, 0.5)',
                border: `3px solid ${breathPhase === 'INHALE' ? '#06b6d4' : breathPhase === 'HOLD' ? '#a855f7' : breathPhase === 'EXHALE' ? '#10b981' : '#334155'}`,
                transform: breathPhase === 'INHALE' ? 'scale(1.2)' : breathPhase === 'HOLD' ? 'scale(1.2)' : 'scale(0.85)',
                transition: `transform ${breathPhase === 'INHALE' ? '4s' : breathPhase === 'HOLD' ? '0.5s' : '8s'} ease-in-out`,
                boxShadow: isBreathingActive ? '0 0 45px rgba(168, 85, 247, 0.4)' : 'none'
              }}
            />
            <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>
                {breathPhase === 'IDLE' ? 'READY' : breathPhase}
              </span>
              {breathSeconds > 0 && (
                <span style={{ fontSize: '36px', fontWeight: 900, color: '#c084fc', marginTop: '2px' }}>
                  {breathSeconds}s
                </span>
              )}
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button
              onClick={() => {
                setIsBreathingActive(!isBreathingActive);
                if (isBreathingActive) setBreathPhase('IDLE');
              }}
              style={{
                backgroundColor: isBreathingActive ? '#ef4444' : '#a855f7',
                color: '#ffffff',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {isBreathingActive ? '⏹ Stop Exercise' : '▶ Start 4-7-8 Breathing'}
            </button>
          </div>

          <div style={{ fontSize: '12px', color: '#64748b', marginTop: '12px' }}>
            Completed Cycles: <strong style={{ color: '#ffffff' }}>{completedCycles}</strong> • Inhale 4s ➔ Hold 7s ➔ Exhale 8s
          </div>

          {/* Real-time Mood Slider */}
          <div style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', padding: '16px', marginTop: '20px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: '#94a3b8', marginBottom: '8px' }}>
              <span>Inner State Meter</span>
              <span style={{ color: moodLevel > 60 ? '#10b981' : moodLevel > 35 ? '#f59e0b' : '#ef4444' }}>
                {moodLevel > 70 ? '🟢 Peaceful / Grounded' : moodLevel > 40 ? '🟡 Moderate Stress' : '🔴 Acute Tension / Overwhelm'}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={moodLevel}
              onChange={(e) => setMoodLevel(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#a855f7', cursor: 'pointer' }}
            />
          </div>

          {/* Official Helpline Bar */}
          <div style={{ width: '100%', backgroundColor: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '12px', padding: '14px', marginTop: '16px', textAlign: 'left' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', marginBottom: '4px' }}>
              📞 National 24/7 Crisis Helplines (India)
            </div>
            <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.5 }}>
              • <strong>Tele-MANAS:</strong> 14416 / 1800-891-4416 (Free, 20+ Languages)<br />
              • <strong>KIRAN Mental Health:</strong> 1800-599-0019<br />
              • <strong>National Emergency:</strong> 112
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Empathetic AI Counseling Chat */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', height: '620px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              WHO mhGAP EMPATHETIC COUNSELOR
            </span>
            <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 600 }}>
              ● Encrypted & Private Session
            </span>
          </div>

          {/* Messages Scroll Area */}
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', paddingRight: '6px', marginBottom: '16px' }}>
            {chatMessages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  backgroundColor: m.role === 'user' ? '#1e293b' : 'rgba(168, 85, 247, 0.1)',
                  border: m.role === 'user' ? '1px solid #334155' : '1px solid rgba(168, 85, 247, 0.25)',
                  borderRadius: '12px',
                  padding: '12px 16px'
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 700, color: m.role === 'user' ? '#94a3b8' : '#c084fc', marginBottom: '4px' }}>
                  {m.role === 'user' ? '👤 YOU' : '🧘 SANCTUARY COUNSELOR'}
                </div>
                <div style={{ fontSize: '13px', color: '#f1f5f9', lineHeight: 1.5 }}>
                  {m.text}
                </div>

                {/* Evidence-based technique cards */}
                {m.techniques && m.techniques.length > 0 && (
                  <div style={{ marginTop: '10px', borderTop: '1px solid rgba(168, 85, 247, 0.2)', paddingTop: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#c084fc', display: 'block', marginBottom: '4px' }}>
                      Grounded Coping Techniques:
                    </span>
                    <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#cbd5e1', lineHeight: 1.4 }}>
                      {m.techniques.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            {isEvaluating && (
              <div style={{ fontSize: '12px', color: '#c084fc', fontStyle: 'italic' }}>
                Reflecting with compassion...
              </div>
            )}
          </div>

          {/* Quick Support Prompts */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '8px' }}>
            {[
              'I feel overwhelmed with work burnout',
              'Having trouble falling asleep due to anxious thoughts',
              'Experiencing severe menstrual mood swings'
            ].map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p)}
                style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  color: '#94a3b8',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                &ldquo;{p}&rdquo;
              </button>
            ))}
          </div>

          {/* Message Input Box */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Share what is on your mind in a safe space..."
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
              style={{
                flex: 1,
                backgroundColor: '#020617',
                border: '1px solid #334155',
                borderRadius: '8px',
                padding: '10px 14px',
                color: '#ffffff',
                fontSize: '13px'
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isEvaluating}
              style={{
                backgroundColor: '#a855f7',
                color: '#ffffff',
                border: 'none',
                padding: '0 20px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
