'use client';

import React, { useState, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

interface OrganScores {
  heart: { score: number; status: string; color: string };
  kidneys: { score: number; status: string; color: string };
  liver: { score: number; status: string; color: string };
  pancreas: { score: number; status: string; color: string };
  lungs: { score: number; status: string; color: string };
}

export default function VibrantPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTelemetry, setShowTelemetry] = useState(true);
  const [loading, setLoading] = useState(false);

  // Biometric sliders
  const [age, setAge] = useState(45);
  const [systolicBp, setSystolicBp] = useState(135);
  const [fastingGlucose, setFastingGlucose] = useState(110);
  const [hba1c, setHba1c] = useState(6.2);
  const [smoker, setSmoker] = useState(false);

  // Organ scores
  const [organScores, setOrganScores] = useState<OrganScores>({
    heart: { score: 82, status: "Good", color: "#38bdf8" },
    kidneys: { score: 88, status: "Good", color: "#38bdf8" },
    liver: { score: 90, status: "Optimal", color: "#10b981" },
    pancreas: { score: 84, status: "Good", color: "#38bdf8" },
    lungs: { score: 92, status: "Optimal", color: "#10b981" }
  });
  const [simulationData, setSimulationData] = useState<any>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(console.error);
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(console.error);
    }
  };

  const runSimulation = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/digital-twin/simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          age,
          gender: 'male',
          systolic_bp: systolicBp,
          fasting_glucose: fastingGlucose,
          hba1c,
          smoker
        })
      });
      if (res.ok) {
        const data = await res.json();
        setSimulationData(data);
        if (data.organ_scores) {
          setOrganScores(data.organ_scores);
        }
      }
    } catch (e) {
      console.warn('Simulation error:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Suppress global site loaders
    const splash = document.getElementById('video-splash');
    if (splash) {
      splash.style.display = 'none';
      splash.classList.add('hide-splash');
    }
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.style.display = 'none';
    }
    document.body.classList.remove('video-splash-active');
    document.documentElement.classList.remove('overflow-hidden');

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Debounced auto-recalculation whenever sliders move
  useEffect(() => {
    const timer = setTimeout(() => {
      runSimulation();
    }, 350);
    return () => clearTimeout(timer);
  }, [age, systolicBp, fastingGlucose, hba1c, smoker]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', backgroundColor: '#090d16', overflow: 'hidden', zIndex: 999999, boxSizing: 'border-box' }}>
      <style>{`
        #video-splash, #page-loader, .animated-splash-page, .transition, #mouse {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
      `}</style>

      {/* Floating Top Navigation */}
      <nav style={{
        position: 'absolute',
        top: '20px',
        left: '24px',
        right: '24px',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pointerEvents: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', pointerEvents: 'auto' }}>
          <a
            href="/"
            data-no-swup="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              height: '42px',
              padding: '0 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(16px)',
              color: '#f8fafc',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
            }}
          >
            ← Back to Home
          </a>

          <button
            onClick={() => setShowTelemetry(!showTelemetry)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              height: '42px',
              padding: '0 18px',
              borderRadius: '9999px',
              backgroundColor: showTelemetry ? 'rgba(14, 165, 233, 0.25)' : 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(16px)',
              color: showTelemetry ? '#38bdf8' : '#f8fafc',
              fontSize: '13px',
              fontWeight: 600,
              border: '1px solid rgba(56, 189, 248, 0.3)',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
            }}
          >
            📊 {showTelemetry ? 'Hide Telemetry' : 'Show Telemetry & Sliders'}
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', pointerEvents: 'auto' }}>
          <a
            href="/records"
            data-no-swup="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '42px',
              padding: '0 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(16px)',
              color: '#10b981',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}
          >
            ABHA Records →
          </a>

          <button
            onClick={toggleFullscreen}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(16px)',
              color: '#f8fafc',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isFullscreen ? '⛶' : '⤢'}
          </button>
        </div>
      </nav>

      {/* Interactive 3D Anatomy Canvas */}
      <iframe
        id="sanjeevani-3d-frame"
        src="/vibrant/index.html?v=4"
        title="Sanjeevani 3D Digital Health Twin"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
          display: 'block'
        }}
        allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; microphone"
      />

      {/* Live Digital Twin Telemetry & Biometric Simulation Panel */}
      {showTelemetry && (
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '24px',
          width: '380px',
          maxHeight: 'calc(100vh - 120px)',
          overflowY: 'auto',
          backgroundColor: 'rgba(11, 15, 25, 0.92)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '16px',
          padding: '20px',
          color: '#f8fafc',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          zIndex: 110
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#38bdf8' }}>Digital Twin Telemetry</div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Live Physiological Simulation</div>
            </div>
            <span style={{ fontSize: '11px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>
              Live
            </span>
          </div>

          {/* Organ Vitality Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', marginBottom: '16px' }}>
            {Object.entries(organScores).map(([organ, data]) => (
              <div key={organ} style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${data.color}40`,
                borderRadius: '8px',
                padding: '8px 4px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '10px', textTransform: 'capitalize', color: '#94a3b8' }}>{organ}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: data.color }}>{data.score}%</div>
              </div>
            ))}
          </div>

          {/* Biometric Sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                <span style={{ color: '#94a3b8' }}>Systolic BP</span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>{systolicBp} mmHg</span>
              </div>
              <input
                type="range"
                min="90"
                max="190"
                value={systolicBp}
                onChange={(e) => setSystolicBp(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#38bdf8' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                <span style={{ color: '#94a3b8' }}>Fasting Glucose</span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>{fastingGlucose} mg/dL</span>
              </div>
              <input
                type="range"
                min="70"
                max="220"
                value={fastingGlucose}
                onChange={(e) => setFastingGlucose(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#38bdf8' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                <span style={{ color: '#94a3b8' }}>HbA1c</span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>{hba1c}%</span>
              </div>
              <input
                type="range"
                min="4.5"
                max="11.0"
                step="0.1"
                value={hba1c}
                onChange={(e) => setHba1c(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#38bdf8' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Tobacco / Smoking</span>
              <label style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={smoker}
                  onChange={(e) => setSmoker(e.target.checked)}
                  style={{ accentColor: '#ef4444' }}
                />
                <span style={{ color: smoker ? '#ef4444' : '#94a3b8' }}>{smoker ? 'Active Smoker' : 'Non-Smoker'}</span>
              </label>
            </div>
          </div>

          <button
            onClick={runSimulation}
            disabled={loading}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {loading ? 'Re-calculating Trajectory...' : 'Recalculate Organ Vitality'}
          </button>
        </div>
      )}
    </div>
  );
}
