'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

type ModalityType = 'bone_fracture' | 'chest_xray' | 'prescription' | 'lab_report';

export default function MedicalScanAgentPage() {
  const [modality, setModality] = useState<ModalityType>('bone_fracture');
  const [loading, setLoading] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showOverlays, setShowOverlays] = useState(true);
  const [showGradCam, setShowGradCam] = useState(false);
  const [contrastMode, setContrastMode] = useState<'normal' | 'high' | 'inverted'>('normal');
  const [selectedBoxIndex, setSelectedBoxIndex] = useState<number | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAnalyzeScan = async (selectedModality?: ModalityType, customFileName?: string, customBase64?: string) => {
    const mod = selectedModality || modality;
    
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch(`${API_BASE}/api/scans/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image_type: mod,
          filename: customFileName || uploadedFileName || `${mod}_scan.jpg`,
          image_base64: customBase64 || uploadedImagePreview || null
        }),
        signal: abortControllerRef.current.signal
      });

      if (res.ok) {
        const data = await res.json();
        setScanResult(data);
      } else {
        setErrorMessage(`Server returned status ${res.status}`);
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setErrorMessage(`Unable to connect to scan service at ${API_BASE}. Ensure FastAPI server is running.`);
      }
    } finally {
      setLoading(false);
    }
  };

  const processFile = (file: File) => {
    setUploadedFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setUploadedImagePreview(result);
      handleAnalyzeScan(modality, file.name, result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  useEffect(() => {
    handleAnalyzeScan('bone_fracture');
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070a12', color: '#f8fafc', padding: '36px 20px', fontFamily: 'system-ui, sans-serif', position: 'relative', zIndex: 10 }}>
      {/* Suppress global template splash & mouse overlays */}
      <style>{`
        #video-splash, #page-loader, .animated-splash-page, .transition, #mouse, header, .grid.wrapper {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        @media (max-width: 920px) {
          .scan-grid-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        
        {/* Navigation & Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <Link href="/" style={{ fontSize: '13px', color: '#38bdf8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              ← Return to Sanjeevani OS
            </Link>
            <h1 style={{ fontSize: '26px', fontWeight: 700, margin: 0, color: '#f8fafc' }}>
              FractureNet & MONAI Medical Imaging Studio
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '13px', margin: '4px 0 0 0' }}>
              YOLOv8 Bone Fracture Detection • Grad-CAM Heatmaps • MONAI Chest Radiography • TrOCR Digitization
            </p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ padding: '6px 14px', borderRadius: '20px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#34d399', fontSize: '12px', fontWeight: 600 }}>
              ● FractureNet YOLOv8 Ready
            </span>
          </div>
        </div>

        {/* Top Control Bar: Modality Tabs + Upload Action */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px', background: '#0e1422', border: '1px solid #1e293b', padding: '10px 14px', borderRadius: '14px' }}>
          
          {/* Modality Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { id: 'bone_fracture', label: '🦴 Bone Fracture X-Ray (FractureNet YOLOv8)' },
              { id: 'chest_xray', label: '🫁 Chest Radiograph (MONAI)' },
              { id: 'prescription', label: '📄 Prescription OCR (TrOCR)' },
              { id: 'lab_report', label: '🧪 Metabolic Lab Panel' }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => {
                  setModality(t.id as ModalityType);
                  setUploadedImagePreview(null);
                  setUploadedFileName(null);
                  setSelectedBoxIndex(null);
                  handleAnalyzeScan(t.id as ModalityType);
                }}
                disabled={loading}
                style={{
                  padding: '9px 16px',
                  borderRadius: '8px',
                  backgroundColor: modality === t.id ? '#0284c7' : '#172033',
                  color: modality === t.id ? '#ffffff' : '#94a3b8',
                  border: '1px solid ' + (modality === t.id ? '#38bdf8' : '#334155'),
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontWeight: 600,
                  fontSize: '13px',
                  transition: 'all 0.15s ease'
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Upload Button */}
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              style={{
                padding: '9px 18px',
                borderRadius: '8px',
                backgroundColor: '#10b981',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '13px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)'
              }}
            >
              <span>📁</span>
              <span>Upload Custom Scan / Image</span>
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#fca5a5', padding: '12px 16px', borderRadius: '10px', marginBottom: '20px', fontSize: '13px' }}>
            ⚠️ {errorMessage}
          </div>
        )}

        {/* Main 2-Column Responsive Workspace */}
        <div className="scan-grid-layout" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '22px' }}>
          
          {/* Left Column: Interactive DICOM / Canvas Visualizer */}
          <div style={{ background: '#0e1422', border: '1px solid #1e293b', borderRadius: '16px', padding: '18px', display: 'flex', flexDirection: 'column' }}>
            
            {/* Canvas Toolbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: uploadedImagePreview ? '#10b981' : '#38bdf8' }}></span>
                <span>{uploadedFileName ? `Scan: ${uploadedFileName}` : `${modality === 'bone_fracture' ? 'FractureNet Orthopedic X-Ray Specimen' : modality === 'chest_xray' ? 'Standard PA Chest Radiograph' : modality === 'prescription' ? 'Digital Prescription Specimen' : 'Clinical Metabolic Specimen'}`}</span>
              </div>

              {/* Canvas Controls */}
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                {modality === 'bone_fracture' && (
                  <button
                    onClick={() => setShowGradCam(!showGradCam)}
                    style={{
                      fontSize: '11px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: showGradCam ? 'rgba(239, 68, 68, 0.25)' : '#1e293b',
                      color: showGradCam ? '#f87171' : '#94a3b8',
                      border: '1px solid ' + (showGradCam ? '#ef4444' : '#334155'),
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    {showGradCam ? '🔥 Grad-CAM ON' : '🔥 Grad-CAM Heatmap'}
                  </button>
                )}

                <button
                  onClick={() => setShowOverlays(!showOverlays)}
                  style={{
                    fontSize: '11px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: showOverlays ? 'rgba(56, 189, 248, 0.2)' : '#1e293b',
                    color: showOverlays ? '#38bdf8' : '#94a3b8',
                    border: '1px solid #334155',
                    cursor: 'pointer'
                  }}
                >
                  {showOverlays ? '👁️ Overlays ON' : '👁️ Overlays OFF'}
                </button>

                <button
                  onClick={() => setContrastMode(m => m === 'normal' ? 'high' : m === 'high' ? 'inverted' : 'normal')}
                  style={{
                    fontSize: '11px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: '#1e293b',
                    color: '#cbd5e1',
                    border: '1px solid #334155',
                    cursor: 'pointer'
                  }}
                  title="Cycle contrast windowing"
                >
                  🌓 {contrastMode.toUpperCase()}
                </button>
              </div>
            </div>

            {/* Canvas Viewing Area / Dropzone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/3',
                backgroundColor: '#030712',
                borderRadius: '12px',
                border: isDragging ? '2px dashed #38bdf8' : '1px solid #334155',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: contrastMode === 'high' ? 'contrast(1.4) brightness(1.1)' : contrastMode === 'inverted' ? 'invert(1) hue-rotate(180deg)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              
              {/* 1. Custom Uploaded Image */}
              {uploadedImagePreview ? (
                <img
                  src={uploadedImagePreview}
                  alt="Uploaded medical scan"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : modality === 'bone_fracture' ? (
                
                /* 2. FractureNet Bone Fracture X-Ray Real Medical Specimen */
                <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#02040a' }}>
                  <img
                    src="/images/fracture_xray_sample.jpg"
                    alt="FractureNet X-Ray Sample"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95 }}
                  />

                  {/* Optional Grad-CAM Heatmap Radial Layer */}
                  {showGradCam && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at 58% 60%, rgba(239,68,68,0.7) 0%, rgba(245,158,11,0.45) 25%, rgba(16,185,129,0.2) 45%, transparent 70%)',
                      mixBlendMode: 'screen',
                      pointerEvents: 'none'
                    }} />
                  )}

                  {/* DICOM Overlay Header */}
                  <div style={{ position: 'absolute', top: '10px', left: '12px', color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontFamily: 'monospace', pointerEvents: 'none' }}>
                    PATIENT: ORTHO-RADIUS-9148<br/>
                    STUDY: FOREARM / WRIST AP-LAT<br/>
                    MODEL: FRACTURENET YOLOV8
                  </div>

                  <div style={{ position: 'absolute', top: '10px', right: '12px', color: '#38bdf8', fontSize: '11px', fontWeight: 'bold', fontFamily: 'sans-serif', pointerEvents: 'none' }}>
                    YOLOV8 INFERENCE: 14.2ms
                  </div>
                </div>

              ) : modality === 'chest_xray' ? (
                
                /* 3. Realistic Clinical Chest X-Ray SVG Viewport */
                <svg viewBox="0 0 800 600" style={{ width: '100%', height: '100%', backgroundColor: '#02040a' }} xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="lung-glow-left" cx="35%" cy="45%" r="40%">
                      <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#090d16" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#02040a" stopOpacity="1" />
                    </radialGradient>
                    <radialGradient id="lung-glow-right" cx="65%" cy="45%" r="40%">
                      <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#090d16" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#02040a" stopOpacity="1" />
                    </radialGradient>
                    <radialGradient id="infiltration-opacity" cx="65%" cy="65%" r="25%">
                      <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.55" />
                      <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#02040a" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* DICOM Overlay Header */}
                  <text x="24" y="32" fill="#64748b" fontSize="11" fontFamily="monospace">PATIENT: SHARMA, S. #91-4829</text>
                  <text x="24" y="48" fill="#64748b" fontSize="11" fontFamily="monospace">STUDY: CHEST PA (ER-PORTABLE)</text>
                  <text x="660" y="32" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="sans-serif">SANJEEVANI DICOM</text>
                  <text x="740" y="48" fill="#64748b" fontSize="11" fontFamily="monospace">kVp: 120</text>
                  <text x="740" y="64" fill="#64748b" fontSize="11" fontFamily="monospace">W:2400 L:-400</text>

                  {/* Left & Right Lung Transparency Cavities */}
                  <ellipse cx="300" cy="270" rx="140" ry="190" fill="url(#lung-glow-left)" />
                  <ellipse cx="500" cy="270" rx="140" ry="190" fill="url(#lung-glow-right)" />

                  {/* Right Lower Lobe Infiltration Cloud (Pathology) */}
                  <ellipse cx="520" cy="360" rx="90" ry="70" fill="url(#infiltration-opacity)" />

                  {/* Spine Column */}
                  <rect x="388" y="80" width="24" height="420" fill="#334155" opacity="0.65" rx="4" />
                  {[120, 155, 190, 225, 260, 295, 330, 365, 400, 435].map((y, idx) => (
                    <line key={idx} x1="386" y1={y} x2="414" y2={y} stroke="#64748b" strokeWidth="2" opacity="0.8" />
                  ))}

                  {/* Clavicles (Collar Bones) */}
                  <path d="M 230 110 Q 340 125 390 140" stroke="#94a3b8" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.75" />
                  <path d="M 570 110 Q 460 125 410 140" stroke="#94a3b8" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.75" />

                  {/* Rib Cage Contours */}
                  {[150, 190, 230, 270, 310, 350, 390, 430].map((y, idx) => (
                    <g key={idx} opacity="0.5">
                      <path d={`M 390 ${y-20} Q ${250 - idx*6} ${y} 180 ${y+30}`} stroke="#64748b" strokeWidth="8" strokeLinecap="round" fill="none" />
                      <path d={`M 410 ${y-20} Q ${550 + idx*6} ${y} 620 ${y+30}`} stroke="#64748b" strokeWidth="8" strokeLinecap="round" fill="none" />
                    </g>
                  ))}

                  {/* Cardiac Silhouette (Heart Shadow) */}
                  <path d="M 385 240 Q 320 290 330 380 Q 380 430 425 430 Q 450 380 415 250 Z" fill="#475569" opacity="0.85" stroke="#64748b" strokeWidth="2" />

                  {/* Diaphragm Domes */}
                  <path d="M 160 490 Q 280 420 400 480" stroke="#94a3b8" strokeWidth="14" fill="#030712" opacity="0.9" />
                  <path d="M 400 480 Q 520 420 640 490" stroke="#94a3b8" strokeWidth="14" fill="#030712" opacity="0.9" />

                  {/* Anatomical Marker */}
                  <text x="720" y="550" fill="#f8fafc" fontSize="24" fontWeight="bold" fontFamily="sans-serif">R</text>
                  <text x="60" y="550" fill="#64748b" fontSize="12" fontFamily="monospace">MONAI SEGMENTATION TARGET</text>
                </svg>

              ) : modality === 'prescription' ? (
                
                /* 4. Realistic Digitized Prescription Specimen */
                <div style={{ width: '85%', height: '85%', background: '#f8fafc', color: '#0f172a', padding: '24px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                  {/* Clinic Header */}
                  <div style={{ borderBottom: '2px solid #0284c7', paddingBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '14px', color: '#0284c7' }}>CITY HEALTH MEDICAL CENTER</div>
                      <div style={{ fontSize: '10px', color: '#64748b' }}>Dr. Siddharth Sharma, MD • Registration: MCI-84920</div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', textAlign: 'right' }}>
                      Date: 18-AUG-2026<br/>
                      Patient: S. Sharma (Age: 32 / M)
                    </div>
                  </div>

                  {/* Rx Symbol */}
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#0284c7', margin: '8px 0 4px 0' }}>℞</div>

                  {/* Prescription Lines */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, padding: '4px 8px' }}>
                    <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '6px 10px', borderRadius: '6px', borderLeft: '3px solid #06b6d4' }}>
                      <div style={{ fontWeight: 700, fontSize: '13px' }}>1. Amoxicillin 500mg Capsules</div>
                      <div style={{ fontSize: '11px', color: '#475569' }}>1 Cap TDS (Three times daily) x 5 days — [After Meals]</div>
                    </div>

                    <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '6px 10px', borderRadius: '6px', borderLeft: '3px solid #06b6d4' }}>
                      <div style={{ fontWeight: 700, fontSize: '13px' }}>2. Paracetamol 650mg Tablets</div>
                      <div style={{ fontSize: '11px', color: '#475569' }}>1 Tab SOS (As needed for fever &gt; 100°F or body ache)</div>
                    </div>

                    <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '6px 10px', borderRadius: '6px', borderLeft: '3px solid #06b6d4' }}>
                      <div style={{ fontWeight: 700, fontSize: '13px' }}>3. Cetirizine 10mg Tablets</div>
                      <div style={{ fontSize: '11px', color: '#475569' }}>1 Tab OD at Bedtime x 3 days</div>
                    </div>
                  </div>

                  {/* Doctor Signature Stamp */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '8px', fontSize: '10px', color: '#64748b' }}>
                    <span>Digitized via TrOCR Transformer Pipeline</span>
                    <span style={{ fontStyle: 'italic', fontWeight: 600, color: '#0f172a' }}>Verified Signature: S. Sharma, MD</span>
                  </div>
                </div>

              ) : (
                
                /* 5. Realistic Metabolic Lab Report Specimen */
                <div style={{ width: '88%', height: '88%', background: '#ffffff', color: '#0f172a', padding: '20px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                  <div style={{ borderBottom: '2px solid #10b981', paddingBottom: '8px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '13px', color: '#10b981' }}>METABOLIC PATHOLOGY PANEL</div>
                      <div style={{ fontSize: '10px', color: '#64748b' }}>NABL Accredited Clinical Bio-Analysis</div>
                    </div>
                    <div style={{ fontSize: '10px', color: '#64748b', textAlign: 'right' }}>
                      Sample ID: #LAB-91820<br/>Status: Completed
                    </div>
                  </div>

                  <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse', flex: 1 }}>
                    <thead>
                      <tr style={{ background: '#f1f5f9', textAlign: 'left' }}>
                        <th style={{ padding: '4px 6px' }}>Test Parameter</th>
                        <th style={{ padding: '4px 6px' }}>Patient Value</th>
                        <th style={{ padding: '4px 6px' }}>Reference Range</th>
                        <th style={{ padding: '4px 6px' }}>Flag</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '6px' }}>Hemoglobin</td>
                        <td style={{ padding: '6px', fontWeight: 600 }}>13.8 g/dL</td>
                        <td style={{ padding: '6px', color: '#64748b' }}>12.0 - 16.0 g/dL</td>
                        <td style={{ padding: '6px', color: '#10b981', fontWeight: 700 }}>NORMAL</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #e2e8f0', background: 'rgba(245, 158, 11, 0.08)' }}>
                        <td style={{ padding: '6px' }}>Fasting Blood Glucose</td>
                        <td style={{ padding: '6px', fontWeight: 700, color: '#d97706' }}>104 mg/dL</td>
                        <td style={{ padding: '6px', color: '#64748b' }}>70 - 99 mg/dL</td>
                        <td style={{ padding: '6px', color: '#d97706', fontWeight: 700 }}>ELEVATED</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #e2e8f0', background: 'rgba(245, 158, 11, 0.08)' }}>
                        <td style={{ padding: '6px' }}>Total Cholesterol</td>
                        <td style={{ padding: '6px', fontWeight: 700, color: '#d97706' }}>215 mg/dL</td>
                        <td style={{ padding: '6px', color: '#64748b' }}>&lt; 200 mg/dL</td>
                        <td style={{ padding: '6px', color: '#d97706', fontWeight: 700 }}>BORDERLINE</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px' }}>Serum Creatinine</td>
                        <td style={{ padding: '6px', fontWeight: 600 }}>0.95 mg/dL</td>
                        <td style={{ padding: '6px', color: '#64748b' }}>0.7 - 1.2 mg/dL</td>
                        <td style={{ padding: '6px', color: '#10b981', fontWeight: 700 }}>NORMAL</td>
                      </tr>
                    </tbody>
                  </table>

                  <div style={{ fontSize: '9px', color: '#64748b', borderTop: '1px solid #e2e8f0', paddingTop: '6px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Automatic OCR extraction verified against LOINC standard terminology</span>
                    <span>Confidence: 98.4%</span>
                  </div>
                </div>
              )}

              {/* Dynamic Coordinate Bounding Boxes */}
              {showOverlays && !loading && scanResult?.visual_bounding_boxes?.map((box: any, i: number) => {
                const isSelected = selectedBoxIndex === i;
                return (
                  <div
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setSelectedBoxIndex(isSelected ? null : i); }}
                    style={{
                      position: 'absolute',
                      left: `${box.box.x}%`,
                      top: `${box.box.y}%`,
                      width: `${box.box.width}%`,
                      height: `${box.box.height}%`,
                      border: `${isSelected ? '3px' : '2px'} dashed ${box.color || '#ef4444'}`,
                      backgroundColor: `${box.color || '#ef4444'}${isSelected ? '35' : '15'}`,
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '4px',
                      left: '4px',
                      background: box.color || '#ef4444',
                      color: '#ffffff',
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.6)',
                      pointerEvents: 'none'
                    }}>
                      {box.label} ({Math.round(box.confidence * 100)}%)
                    </div>
                  </div>
                );
              })}

              {/* Loading Shimmer */}
              {loading && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(3, 7, 18, 0.85)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                  fontSize: '13px',
                  fontWeight: 600,
                  gap: '10px'
                }}>
                  <div style={{ width: '32px', height: '32px', border: '3px solid #38bdf8', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                  <div>Running FractureNet YOLOv8 Model & Generating Grad-CAM...</div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
              <button
                onClick={() => handleAnalyzeScan(modality)}
                disabled={loading}
                style={{
                  flex: 1,
                  padding: '11px',
                  borderRadius: '8px',
                  backgroundColor: '#0284c7',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '13px',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? 'Processing Visualizer...' : '⚡ Re-Run Detection Engine'}
              </button>

              {uploadedImagePreview && (
                <button
                  onClick={() => {
                    setUploadedImagePreview(null);
                    setUploadedFileName(null);
                    setSelectedBoxIndex(null);
                    handleAnalyzeScan(modality);
                  }}
                  style={{
                    padding: '11px 16px',
                    borderRadius: '8px',
                    backgroundColor: '#1e293b',
                    color: '#cbd5e1',
                    fontWeight: 600,
                    fontSize: '13px',
                    border: '1px solid #334155',
                    cursor: 'pointer'
                  }}
                >
                  Reset to Reference
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Clinical Interpretation & Findings */}
          <div style={{ background: '#0e1422', border: '1px solid #1e293b', borderRadius: '16px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.05em' }}>Interpretation Summary</span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#38bdf8' }}>{scanResult?.urgency_badge}</span>
              </div>
              <h3 style={{ margin: 0, fontSize: '17px', color: '#f8fafc', fontWeight: 700, lineHeight: '1.4' }}>
                {scanResult?.ai_diagnosis_summary || 'Analyzing Document...'}
              </h3>
            </div>

            {/* Plain English Translation */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid #1e293b', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', marginBottom: '6px' }}>
                Patient-Friendly Explanation
              </div>
              <p style={{ margin: 0, fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>
                {scanResult?.plain_english_explanation || 'Processing plain-language summary...'}
              </p>
            </div>

            {/* Clinical Observations */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>
                Extracted Clinical Observations ({scanResult?.clinical_findings?.length || 0})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {scanResult?.clinical_findings?.map((f: string, idx: number) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: '#e2e8f0', background: 'rgba(255,255,255,0.02)', padding: '8px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ color: '#10b981', fontWeight: 700 }}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Doctor Questions */}
            {scanResult?.suggested_questions_for_doctor?.length > 0 && (
              <div style={{ borderTop: '1px solid #1e293b', paddingTop: '12px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Recommended Questions for Your Doctor
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {scanResult.suggested_questions_for_doctor.map((q: string, idx: number) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#94a3b8' }}>
                      <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>?</span>
                      <span>{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ fontSize: '11px', color: '#64748b', borderTop: '1px solid #1e293b', paddingTop: '10px' }}>
              ℹ️ Visualizer demonstration output. Not a substitute for formal diagnostic radiologist review.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
