'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Heart, 
  Moon, 
  Brain, 
  Footprints, 
  CheckCircle2, 
  Clock, 
  Folder, 
  Calendar as CalendarIcon, 
  MoreVertical,
  Droplets,
  Pill,
  ChevronRight,
  TrendingUp,
  Activity
} from 'lucide-react';
import { PatientInfo, VitalsData } from './types';

interface VisualAnalyticsPanelProps {
  patient: PatientInfo;
  vitals: VitalsData;
  onOpenExportModal: () => void;
}

export default function VisualAnalyticsPanel({
  patient,
  vitals,
  onOpenExportModal
}: VisualAnalyticsPanelProps) {
  const [chatMessage, setChatMessage] = useState('');

  const handleOpenSanjeevaniAI = (promptText?: string) => {
    const text = promptText || chatMessage || '';
    setChatMessage('');
    if (typeof window !== 'undefined') {
      // 1. Dispatch custom open event
      window.dispatchEvent(new CustomEvent('open-sanjeevani-assistant', {
        detail: { prompt: text }
      }));
      // 2. Direct global handler invocation if registered
      if (typeof (window as any).openSanjeevaniAssistant === 'function') {
        (window as any).openSanjeevaniAssistant();
      }
      // 3. Trigger DOM button click fallback
      const triggerBtn = document.querySelector('.sanjeevani-trigger-pill, .sanjeevani-trigger-btn') as HTMLElement;
      if (triggerBtn) {
        triggerBtn.click();
      }
    }
  };

  // 4 rows x 7 cols of wellness heatmap
  const heatmapData = [
    [0.2, 0.4, 0.6, 0.3, 0.5, 0.7, 0.4],
    [0.8, 0.3, 0.4, 0.9, 0.6, 0.4, 0.5],
    [0.9, 0.5, 0.3, 0.7, 0.4, 0.8, 0.6],
    [0.4, 0.6, 0.8, 0.3, 0.5, 0.2, 0.7]
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto'
    }}>
      {/* TOP ROW: Chat with Synapse Hero (Left) + Wellness / Quick Access (Right) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '20px'
      }}>
        {/* 1. Chat with SYNAPSE Hero Card (7 cols) */}
        <div style={{
          gridColumn: 'span 7',
          background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 50%, #eff6ff 100%)',
          borderRadius: '28px',
          border: '1px solid #bfdbfe',
          padding: '28px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '340px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 10px 30px rgba(37,99,235,0.06)'
        }}>
          {/* 3D DNA Helix Background Graphic */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '55%',
            height: '100%',
            backgroundImage: 'url(/images/3d_dna_synapse.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.85,
            mixBlendMode: 'multiply',
            pointerEvents: 'none'
          }} />

          {/* Top Tag & Header */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.05em',
              padding: '4px 10px',
              borderRadius: '8px',
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
              marginBottom: '16px'
            }}>
              AI DOCTOR
            </span>

            <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 600 }}>Chat with</div>
            <h2 style={{
              fontSize: '34px',
              fontWeight: 900,
              color: '#0f172a',
              margin: '2px 0 0 0',
              letterSpacing: '-0.03em'
            }}>
              SYNAPSE
            </h2>
          </div>

          {/* Bottom Prompt Chips & Input Field */}
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '460px' }}>
            {/* Quick Suggestion Chips */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => handleOpenSanjeevaniAI('How can I improve my sleep?')}
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '6px 14px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#1e293b',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#93c5fd'; e.currentTarget.style.color = '#2563eb'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.color = '#1e293b'; }}
              >
                💬 How can I improve my sleep?
              </button>
              <button 
                onClick={() => handleOpenSanjeevaniAI('Analyze my latest ECG telemetry')}
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '6px 14px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#1e293b',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#93c5fd'; e.currentTarget.style.color = '#2563eb'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.color = '#1e293b'; }}
              >
                ⚡ Analyze my latest ECG telemetry
              </button>
            </div>

            {/* Input Bar */}
            <div 
              onClick={() => handleOpenSanjeevaniAI(chatMessage)}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#ffffff',
                borderRadius: '9999px',
                padding: '6px 8px 6px 16px',
                border: '1.5px solid #cbd5e1',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                cursor: 'pointer'
              }}
            >
              <input
                type="text"
                placeholder="Ask your health coach..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleOpenSanjeevaniAI(chatMessage);
                  }
                }}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '13px',
                  color: '#0f172a',
                  background: 'transparent',
                  cursor: 'text'
                }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenSanjeevaniAI(chatMessage);
                }}
                title="Open Sanjeevani AI Assistant"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                  border: 'none',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(99,102,241,0.4)',
                  transition: 'transform 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Sparkles size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Right Side: Wellness Progress (Top) + Records/Appointments (Bottom) (5 cols) */}
        <div style={{
          gridColumn: 'span 5',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Wellness Progress Heatmap Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '28px',
            border: '1px solid #e2e8f0',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>
                Wellness Progress
              </h3>
              <p style={{ fontSize: '11px', color: '#64748b', margin: '0 0 20px 0' }}>
                View your monthly progress at a glance
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>Your Health Score:</span>
                <span style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a' }}>68%</span>
              </div>
            </div>

            {/* Heatmap Grid & Next Appt Info */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {heatmapData.map((row, rIdx) => (
                  <div key={rIdx} style={{ display: 'flex', gap: '5px' }}>
                    {row.map((val, cIdx) => (
                      <div
                        key={cIdx}
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '5px',
                          background: val > 0.7 ? '#818cf8' : val > 0.4 ? '#c7d2fe' : val > 0.2 ? '#fecaca' : '#fee2e2',
                          opacity: 0.9
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700 }}>Next Appointment:</div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>8AM, Aug 5 2026</div>
                </div>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f172a',
                  cursor: 'pointer'
                }}>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Two Cards: My Records & Appointments */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* My Records */}
            <div 
              onClick={onOpenExportModal}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #e2e8f0',
                padding: '20px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>My Records</h4>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>Access medical history</span>
                </div>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={14} color="#64748b" />
                </div>
              </div>
              <div style={{
                marginTop: '20px',
                height: '70px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb'
              }}>
                <Folder size={32} />
              </div>
            </div>

            {/* Appointments */}
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #e2e8f0',
                padding: '20px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Appointments</h4>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>Manage your schedule</span>
                </div>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={14} color="#64748b" />
                </div>
              </div>
              <div style={{
                marginTop: '20px',
                height: '70px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4f46e5'
              }}>
                <CalendarIcon size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE ROW: 4 Sexy Vitals Graph Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px'
      }}>
        {/* Card 1: Heart Rate (Spline Chart) */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          padding: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: '#f3e8ff',
                color: '#a855f7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Heart size={18} fill="#a855f7" />
              </div>
              <MoreVertical size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
            </div>

            <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>Heart Rate</h4>
            <div style={{ fontSize: '11px', color: '#64748b' }}>
              The average heart rate is <strong style={{ color: '#0f172a', background: '#f1f5f9', padding: '1px 6px', borderRadius: '4px' }}>72bpm</strong>
            </div>
          </div>

          {/* Dynamic Spline Chart */}
          <div style={{ marginTop: '24px' }}>
            <div style={{ height: '70px', position: 'relative' }}>
              <svg viewBox="0 0 240 70" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <path
                  d="M 0 50 Q 20 52 40 45 T 80 55 T 120 30 T 160 50 T 200 42 T 240 48"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8', fontWeight: 700, marginTop: '8px' }}>
              <span>10:00 AM</span>
              <span>11:00 AM</span>
              <span>12:00 PM</span>
              <span>01:00 PM</span>
            </div>
          </div>
        </div>

        {/* Card 2: Sleep Score (Bar Chart) */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          padding: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: '#ede9fe',
                color: '#6366f1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Moon size={18} fill="#6366f1" />
              </div>
              <MoreVertical size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
            </div>

            <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>Sleep Score</h4>
            <div style={{ fontSize: '11px', color: '#64748b' }}>
              The average sleep is <strong style={{ color: '#0f172a', background: '#f1f5f9', padding: '1px 6px', borderRadius: '4px' }}>7.30h</strong>
            </div>
          </div>

          {/* Bar Chart */}
          <div style={{ marginTop: '24px' }}>
            <div style={{ height: '70px', display: 'flex', alignItems: 'flex-end', gap: '8px', justifyContent: 'space-between' }}>
              {[45, 65, 30, 80, 55, 70, 90, 40].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: '6px',
                    background: i % 2 === 0 ? '#c7d2fe' : '#fbcfe8'
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8', fontWeight: 700, marginTop: '8px' }}>
              <span>10:00 AM</span>
              <span>11:00 AM</span>
              <span>12:00 PM</span>
              <span>01:00 PM</span>
            </div>
          </div>
        </div>

        {/* Card 3: Stress Balance (Scatter / Line Chart) */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          padding: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: '#ede9fe',
                color: '#8b5cf6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Brain size={18} />
              </div>
              <MoreVertical size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
            </div>

            <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>Stress Balance</h4>
            <div style={{ fontSize: '11px', color: '#64748b' }}>
              Your average stress is <strong style={{ color: '#0f172a', background: '#f1f5f9', padding: '1px 6px', borderRadius: '4px' }}>+0.34</strong>
            </div>
          </div>

          {/* Scatter Line Chart */}
          <div style={{ marginTop: '24px' }}>
            <div style={{ height: '70px', position: 'relative' }}>
              <svg viewBox="0 0 240 70" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <path
                  d="M 0 50 L 35 40 L 70 55 L 105 25 L 140 45 L 175 20 L 210 50 L 240 35"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                {/* Highlighted Scatter Dots */}
                <circle cx="35" cy="40" r="3.5" fill="#818cf8" />
                <circle cx="70" cy="55" r="3.5" fill="#818cf8" />
                <circle cx="105" cy="25" r="4.5" fill="#ef4444" />
                <circle cx="140" cy="45" r="3.5" fill="#818cf8" />
                <circle cx="175" cy="20" r="4.5" fill="#ef4444" />
                <circle cx="210" cy="50" r="3.5" fill="#818cf8" />
              </svg>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8', fontWeight: 700, marginTop: '8px' }}>
              <span>SUN</span>
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
            </div>
          </div>
        </div>

        {/* Card 4: Weekly Steps (Multi-Bar Gradient Chart) */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          padding: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: '#e0e7ff',
                color: '#4338ca',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Footprints size={18} />
              </div>
              <MoreVertical size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
            </div>

            <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>Weekly Steps</h4>
            <div style={{ fontSize: '11px', color: '#64748b' }}>
              Your average steps is <strong style={{ color: '#0f172a', background: '#f1f5f9', padding: '1px 6px', borderRadius: '4px' }}>4,060</strong>
            </div>
          </div>

          {/* Multi-Bar Gradient Chart */}
          <div style={{ marginTop: '24px' }}>
            <div style={{ height: '70px', display: 'flex', alignItems: 'flex-end', gap: '5px', justifyContent: 'space-between' }}>
              {[35, 60, 45, 80, 25, 40, 75, 95, 50, 70, 85].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    borderRadius: '4px',
                    background: i > 6 ? 'linear-gradient(180deg, #c084fc 0%, #818cf8 100%)' : '#e2e8f0'
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8', fontWeight: 700, marginTop: '8px' }}>
              <span>10:00 AM</span>
              <span>10:00 AM</span>
              <span>10:00 AM</span>
              <span>10:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: Actionable Insights, Care Plan, and Next Checkup */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '20px'
      }}>
        {/* 1. AI Insights (5 cols) */}
        <div style={{
          gridColumn: 'span 5',
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          padding: '24px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.02)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: 0 }}>AI Insights</h4>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Personalized insights for you</span>
            </div>
            <MoreVertical size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#059669', background: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>
                POSITIVE
              </span>
              <h5 style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', margin: '8px 0 2px 0' }}>Recovery Improving</h5>
              <p style={{ fontSize: '10px', color: '#64748b', margin: 0, lineHeight: 1.3 }}>Resting HR down 4% this week.</p>
            </div>

            <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#d97706', background: '#fffbeb', padding: '2px 6px', borderRadius: '4px' }}>
                TAKE ACTION
              </span>
              <h5 style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', margin: '8px 0 2px 0' }}>Sleep Debt</h5>
              <p style={{ fontSize: '10px', color: '#64748b', margin: 0, lineHeight: 1.3 }}>Target 8h sleep tonight.</p>
            </div>

            <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#ef4444', background: '#fef2f2', padding: '2px 6px', borderRadius: '4px' }}>
                MONITOR
              </span>
              <h5 style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', margin: '8px 0 2px 0' }}>Stress Elevated</h5>
              <p style={{ fontSize: '10px', color: '#64748b', margin: 0, lineHeight: 1.3 }}>Evening cortisol peaks detected.</p>
            </div>
          </div>
        </div>

        {/* 2. Care Plan (4 cols) */}
        <div style={{
          gridColumn: 'span 4',
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          padding: '24px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.02)'
        }}>
          <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: '0 0 16px 0' }}>Care Plan</h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '10px 14px', borderRadius: '14px', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Pill size={16} color="#0f172a" />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>Medication</div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>Morning dose taken</div>
                </div>
              </div>
              <CheckCircle2 size={18} color="#059669" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8fafc', padding: '10px 14px', borderRadius: '14px', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Droplets size={16} color="#0284c7" />
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>Hydration</div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>1.8 / 2.5L completed</div>
                </div>
              </div>
              <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #38bdf8' }} />
            </div>
          </div>
        </div>

        {/* 3. Next Checkup (3 cols) */}
        <div style={{
          gridColumn: 'span 3',
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          padding: '24px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>Next Checkup</h4>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="https://images.unsplash.com/photo-1594824813689-d102e3b2e535?w=150&auto=format&fit=crop&q=80"
              alt="Dr. Maya Chen"
              style={{ width: '52px', height: '52px', borderRadius: '14px', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>Dr. Maya Chen</div>
              <div style={{ fontSize: '10px', color: '#64748b', margin: '2px 0' }}>Aug 20, 2026 10:00 AM</div>
              <span style={{ fontSize: '9px', fontWeight: 800, padding: '2px 6px', borderRadius: '4px', background: '#f1f5f9', color: '#475569' }}>
                IN-PERSON
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
