'use client';

import React from 'react';
import { Upload, AlertTriangle } from 'lucide-react';
import { useMedicalScan, ModalityType } from './useMedicalScan';
import ScanViewer from './ScanViewer';
import ScanResults from './ScanResults';
import { useLanguage } from '@/context/LanguageContext';

export default function MedicalScanPanel() {
  const scanState = useMedicalScan();
  const { t, translateText } = useLanguage();

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Navigation & Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 800, margin: 0, color: '#0f172a', letterSpacing: '-0.02em' }}>
            {t('scan_title', 'Medical Imaging & Scan AI')}
          </h1>
          <p style={{ color: '#64748b', fontSize: '13px', margin: '4px 0 0 0' }}>
            {t('scan_subtitle', 'YOLOv8 Bone Fracture Detection • Grad-CAM Heatmaps • MONAI Chest Radiography • TrOCR Digitization')}
          </p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ 
            padding: '6px 14px', 
            borderRadius: '9999px', 
            background: '#ecfdf5', 
            border: '1px solid #a7f3d0', 
            color: '#059669', 
            fontSize: '11px', 
            fontWeight: 800
          }}>
            {t('scan_status_ready', '● FractureNet YOLOv8 Ready')}
          </span>
        </div>
      </div>

      {/* Top Control Bar: Modality Tabs + Upload Action */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '12px', 
        background: '#ffffff', 
        border: '1px solid #e2e8f0', 
        padding: '12px 18px', 
        borderRadius: '16px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
      }}>
        
        {/* Modality Tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { id: 'bone_fracture', labelKey: 'scan_tab_bone', defaultLabel: '🦴 Bone Fracture X-Ray (FractureNet)' },
            { id: 'chest_xray', labelKey: 'scan_tab_chest', defaultLabel: '🫁 Chest Radiograph (MONAI)' },
            { id: 'prescription', labelKey: 'scan_tab_prescription', defaultLabel: '📄 Prescription OCR (TrOCR)' },
            { id: 'lab_report', labelKey: 'scan_tab_lab', defaultLabel: '🧪 Metabolic Lab Panel' }
          ].map(item => {
            const label = t(item.labelKey, item.defaultLabel);
            return (
              <button
                key={item.id}
                onClick={() => {
                  scanState.setModality(item.id as ModalityType);
                  scanState.setUploadedImagePreview(null);
                  scanState.setUploadedFileName(null);
                  scanState.setSelectedBoxIndex(null);
                  scanState.handleAnalyzeScan(item.id as ModalityType);
                }}
                disabled={scanState.loading}
                style={{
                  padding: '10px 16px',
                  borderRadius: '10px',
                  backgroundColor: scanState.modality === item.id ? '#db2777' : '#f8fafc',
                  color: scanState.modality === item.id ? '#ffffff' : '#64748b',
                  border: '1px solid ' + (scanState.modality === item.id ? '#be185d' : '#e2e8f0'),
                  cursor: scanState.loading ? 'not-allowed' : 'pointer',
                  fontWeight: scanState.modality === item.id ? 800 : 600,
                  fontSize: '12px',
                  transition: 'all 0.15s ease'
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Upload Button */}
        <div>
          <input
            type="file"
            ref={scanState.fileInputRef}
            onChange={scanState.handleFileUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <button
            onClick={() => scanState.fileInputRef.current?.click()}
            style={{
              padding: '10px 20px',
              borderRadius: '10px',
              backgroundColor: '#10b981',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
            }}
          >
            <Upload size={14} />
            <span>{t('scan_upload_btn', 'Upload Scan Image')}</span>
          </button>
        </div>
      </div>

      {/* Error Alert */}
      {scanState.errorMessage && (
        <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444', padding: '14px 18px', borderRadius: '14px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertTriangle size={18} />
          {scanState.errorMessage}
        </div>
      )}

      {/* Main 2-Column Responsive Workspace */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '22px' }}>
        <ScanViewer state={scanState} />
        <ScanResults state={scanState} />
      </div>
    </div>
  );
}
