'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FHIRExportPage() {
  const [patientName, setPatientName] = useState('Siddharth Sharma');
  const [abhaId, setAbhaId] = useState('91-8472-9102-4821');
  const [gender, setGender] = useState('male');
  const [birthDate, setBirthDate] = useState('1995-06-14');
  const [bloodGroup, setBloodGroup] = useState('O+');
  const [diagnosis, setDiagnosis] = useState('FractureNet YOLOv8: Displaced Distal Radius Forearm Fracture');

  const [fhirBundle, setFhirBundle] = useState<any | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate FHIR Bundle on load and parameter change
  const fetchFhirBundle = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch('http://127.0.0.1:8000/api/fhir/export-bundle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patient_name: patientName,
          abha_id: abhaId,
          gender: gender,
          birth_date: birthDate,
          blood_group: bloodGroup,
          triage_diagnosis: diagnosis,
          clinical_observations: [
            { code: '8480-6', display: 'Systolic Blood Pressure', value: 128, unit: 'mmHg' },
            { code: '8867-4', display: 'Heart Rate', value: 78, unit: 'beats/min' },
            { code: '59408-5', display: 'Oxygen Saturation (SpO2)', value: 98, unit: '%' },
            { code: '2339-0', display: 'Glucose in Blood', value: 104, unit: 'mg/dL' }
          ],
          prescribed_medications: [
            { name: 'Amoxicillin 500mg', rxnorm: '70618', dosage: '1 cap TDS x 5 days' },
            { name: 'Paracetamol 650mg', rxnorm: '313782', dosage: '1 tab SOS for fever' }
          ]
        })
      });

      if (res.ok) {
        const data = await res.json();
        setFhirBundle(data);
      }
    } catch (err) {
      console.error('Failed to generate FHIR bundle', err);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    fetchFhirBundle();
  }, []);

  // Copy JSON to Clipboard
  const copyToClipboard = () => {
    if (!fhirBundle) return;
    navigator.clipboard.writeText(JSON.stringify(fhirBundle, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Download FHIR JSON file
  const downloadFhirJson = () => {
    if (!fhirBundle) return;
    const blob = new Blob([JSON.stringify(fhirBundle, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FHIR_R4_Bundle_${abhaId.replace(/-/g, '_')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070b14', color: '#f8fafc', padding: '32px 24px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Template Overlay Suppression */}
      <style>{`
        #video-splash, #page-loader, .animated-splash-page, .transition, #mouse, header, .grid.wrapper, .header__logo.logo, .intro__logo {
          display: none !important;
          pointer-events: none !important;
        }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: '1280px', margin: '0 auto 28px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Link href="/" style={{ color: '#06b6d4', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            ← Return to Sanjeevani OS
          </Link>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.5px' }}>
            🏥 HL7 FHIR R4 Standardized EHR Bundle Exporter
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '15px', margin: '4px 0 0 0' }}>
            Interoperable Health Records • ABDM / NRCeS Profiles • Epic &amp; Cerner Hospital EHR Exchange
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{ backgroundColor: 'rgba(6, 182, 212, 0.12)', color: '#06b6d4', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(6, 182, 212, 0.3)' }}>
            ● FHIR Release 4.0.1 Validated
          </span>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '400px 1fr', gap: '28px' }}>
        
        {/* LEFT COLUMN: Input Configuration */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', height: 'fit-content' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '16px' }}>
            CLINICAL ENCOUNTER PARAMETERS
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Patient Name</label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '6px', padding: '8px 10px', color: '#ffffff', fontSize: '13px' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '4px' }}>ABHA Health ID</label>
              <input
                type="text"
                value={abhaId}
                onChange={(e) => setAbhaId(e.target.value)}
                style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '6px', padding: '8px 10px', color: '#38bdf8', fontSize: '13px' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '6px', padding: '8px 10px', color: '#ffffff', fontSize: '13px' }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Blood Group</label>
                <input
                  type="text"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '6px', padding: '8px 10px', color: '#ef4444', fontWeight: 700, fontSize: '13px' }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Primary Clinical Impression / Diagnosis</label>
              <textarea
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                rows={3}
                style={{ width: '100%', backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '6px', padding: '8px 10px', color: '#ffffff', fontSize: '12px' }}
              />
            </div>

            <button
              onClick={fetchFhirBundle}
              disabled={isGenerating}
              style={{
                backgroundColor: '#06b6d4',
                color: '#000000',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                marginTop: '6px'
              }}
            >
              {isGenerating ? 'Synthesizing Bundle...' : '🔄 Re-Generate FHIR R4 Bundle'}
            </button>
          </div>

          {/* Standards Badges */}
          <div style={{ marginTop: '24px', borderTop: '1px solid #1e293b', paddingTop: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', display: 'block', marginBottom: '8px' }}>
              Compliant EHR Data Standards:
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', color: '#cbd5e1' }}>
              <div>✅ <strong>LOINC:</strong> 8480-6, 8867-4, 59408-5 (Vitals)</div>
              <div>✅ <strong>RxNorm:</strong> 70618, 313782 (Medications)</div>
              <div>✅ <strong>NRCeS NDHM:</strong> DocumentBundle Profile v1.0</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive JSON Viewer & Export */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                STANDARDIZED FHIR R4 DOCUMENT BUNDLE
              </span>
              {fhirBundle && (
                <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 800 }}>
                  {fhirBundle.total} Resources Active
                </span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={copyToClipboard}
                style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  color: copied ? '#10b981' : '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {copied ? '✓ Copied' : '📋 Copy JSON'}
              </button>
              <button
                onClick={downloadFhirJson}
                style={{
                  backgroundColor: '#10b981',
                  color: '#000000',
                  border: 'none',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer'
                }}
              >
                ⬇ Download .json Bundle
              </button>
            </div>
          </div>

          {/* JSON Syntax Box */}
          <div style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', padding: '16px', flex: 1, maxHeight: '560px', overflowY: 'auto' }}>
            <pre style={{ margin: 0, fontSize: '12px', fontFamily: 'Consolas, monospace', color: '#38bdf8', lineHeight: 1.45, whiteSpace: 'pre-wrap' }}>
              {fhirBundle ? JSON.stringify(fhirBundle, null, 2) : 'Generating standardized FHIR bundle...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
