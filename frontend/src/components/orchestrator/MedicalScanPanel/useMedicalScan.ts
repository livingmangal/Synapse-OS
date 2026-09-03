import { useState, useRef, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export type ModalityType = 'bone_fracture' | 'chest_xray' | 'prescription' | 'lab_report';
export type OCRStep = 'idle' | 'uploading' | 'preparing' | 'reading' | 'checking' | 'complete' | 'error';

export interface MedicationItem {
  name: string | null;
  raw_name: string | null;
  strength: string | null;
  dosage: string | null;
  frequency: string | null;
  duration: string | null;
  route: string | null;
  timing: string | null;
  instructions: string | null;
  confidence: number;
  is_uncertain: boolean;
  uncertainty_reason: string | null;
  alternatives?: string[];
  is_user_corrected?: boolean;
}

export interface StructuredPrescription {
  success: boolean;
  document_type: string;
  patient: {
    name: string | null;
    age: string | null;
    gender: string | null;
  };
  doctor: {
    name: string | null;
    registration_number: string | null;
    specialization: string | null;
  };
  prescription_date: string | null;
  medications: MedicationItem[];
  diagnosis: string | null;
  tests: string[];
  additional_instructions: string | null;
  raw_text: string | null;
  uncertain_text: string[];
  overall_confidence: number;
  requires_human_verification: boolean;
  total_pages?: number;
  pages?: any[];
}

const DEFAULT_PRESCRIPTION_SPECIMEN: StructuredPrescription = {
  success: true,
  document_type: "medical_prescription",
  patient: {
    name: "Siddharth Sharma",
    age: "34",
    gender: "Male"
  },
  doctor: {
    name: "Dr. Rajesh K. Varma, MD",
    registration_number: "MCI-84920",
    specialization: "Internal Medicine"
  },
  prescription_date: "18-AUG-2026",
  medications: [
    {
      name: "Amoxicillin",
      raw_name: "Amoxicillin 500mg",
      strength: "500 mg",
      dosage: "1 capsule",
      frequency: "1-0-1",
      duration: "5 days",
      route: "Oral",
      timing: "after food",
      instructions: "Complete full antibiotic course",
      confidence: 0.96,
      is_uncertain: false,
      uncertainty_reason: null
    },
    {
      name: "Paracetamol",
      raw_name: "Paracetamol 650mg",
      strength: "650 mg",
      dosage: "1 tablet",
      frequency: "SOS",
      duration: "3 days",
      route: "Oral",
      timing: "as needed for fever",
      instructions: "Take when temperature > 100°F",
      confidence: 0.94,
      is_uncertain: false,
      uncertainty_reason: null
    },
    {
      name: "Cetirizine",
      raw_name: "Cetirizine 10mg",
      strength: "10 mg",
      dosage: "1 tablet",
      frequency: "0-0-1",
      duration: "3 days",
      route: "Oral",
      timing: "at bedtime",
      instructions: "May cause drowsiness",
      confidence: 0.91,
      is_uncertain: false,
      uncertainty_reason: null
    }
  ],
  diagnosis: "Seasonal Upper Respiratory Tract Infection",
  tests: ["Complete Blood Count (CBC) if fever persists > 48h"],
  additional_instructions: "Drink plenty of warm fluids, steam inhalation twice daily.",
  raw_text: "Dr. Rajesh K. Varma, MD (MCI-84920)\nPt: Siddharth Sharma, 34M\n1. Tab Amoxicillin 500mg 1-0-1 x 5d\n2. Tab Paracetamol 650mg SOS\n3. Tab Cetirizine 10mg 0-0-1 x 3d HS",
  uncertain_text: [],
  overall_confidence: 0.94,
  requires_human_verification: false
};

export function useMedicalScan() {
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

  // Prescription OCR dedicated states
  const [ocrStep, setOcrStep] = useState<OCRStep>('idle');
  const [structuredPrescription, setStructuredPrescription] = useState<StructuredPrescription | null>(null);
  const [isVerifiedByUser, setIsVerifiedByUser] = useState(false);
  const [rawTextOpen, setRawTextOpen] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAnalyzeScan = async (selectedModality?: ModalityType, customFileName?: string, customBase64?: string) => {
    const mod = selectedModality || modality;
    const base64Data = customBase64 || uploadedImagePreview;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    setLoading(true);
    setErrorMessage(null);

    // Dedicated Prescription OCR Route when prescription mode with upload
    if (mod === 'prescription') {
      if (base64Data) {
        setOcrStep('uploading');
        try {
          // Progress simulation stages for clear UX feedback
          const timer1 = setTimeout(() => setOcrStep('preparing'), 400);
          const timer2 = setTimeout(() => setOcrStep('reading'), 1000);
          const timer3 = setTimeout(() => setOcrStep('checking'), 2400);

          const res = await fetch(`${API_BASE}/api/prescription/ocr`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              image_base64: base64Data,
              enable_second_pass: false
            }),
            signal: abortControllerRef.current.signal
          });

          clearTimeout(timer1);
          clearTimeout(timer2);
          clearTimeout(timer3);

          const json = await res.json();
          if (res.ok && json.success) {
            const data: StructuredPrescription = json.data;
            setStructuredPrescription(data);
            setIsVerifiedByUser(false);
            setOcrStep('complete');

            // Format scanResult for viewer compatibility
            const findings: string[] = [];
            data.medications.forEach(m => {
              const nameStr = m.name || m.raw_name || 'Uncertain Medication';
              let desc = `Medication: ${nameStr}`;
              if (m.strength) desc += ` ${m.strength}`;
              if (m.dosage) desc += ` (${m.dosage})`;
              if (m.frequency) desc += ` [${m.frequency}]`;
              if (m.is_uncertain) desc += ` — ⚠ Verification Required`;
              findings.push(desc);
            });

            setScanResult({
              filename: customFileName || uploadedFileName || 'uploaded_prescription.jpg',
              modality: 'prescription',
              ai_diagnosis_summary: data.requires_human_verification
                ? 'Prescription OCR: Uncertain Fields Detected (Review Required)'
                : 'Prescription OCR: Structured Extraction Complete',
              urgency_badge: data.requires_human_verification ? '🟡 Verification Required' : '🟢 Follow Doctor\'s Instructions',
              clinical_findings: findings.length > 0 ? findings : ['No clear medications detected.'],
              plain_english_explanation: 'Prescription document scanned visually. Please verify all medication details, strengths, and dosages against the physical prescription.',
              visual_bounding_boxes: [],
              has_gradcam_support: false,
              is_synthetic_demonstration: false,
              structured_prescription: data
            });
          } else {
            setOcrStep('error');
            const err = json.error?.message || 'Unable to read this prescription. Please upload a clearer image.';
            setErrorMessage(err);
          }
        } catch (err: any) {
          if (err.name !== 'AbortError') {
            setOcrStep('error');
            setErrorMessage(`Prescription OCR Service connection failed (${API_BASE}). Ensure the backend is active.`);
          }
        } finally {
          setLoading(false);
        }
        return;
      } else {
        // Specimen mode for prescription
        setStructuredPrescription(DEFAULT_PRESCRIPTION_SPECIMEN);
        setOcrStep('complete');
        setIsVerifiedByUser(false);
      }
    }

    // General Scans (Bone Fracture, Chest X-Ray, Lab Report)
    try {
      const res = await fetch(`${API_BASE}/api/scans/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image_type: mod,
          filename: customFileName || uploadedFileName || `${mod}_scan.jpg`,
          image_base64: base64Data || null
        }),
        signal: abortControllerRef.current.signal
      });

      if (res.ok) {
        const data = await res.json();
        setScanResult(data);
        if (data.structured_prescription) {
          setStructuredPrescription(data.structured_prescription);
        }
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

  // Medication Mutation Handlers for User Verification / Editing
  const updateMedication = (index: number, field: keyof MedicationItem, value: any) => {
    if (!structuredPrescription) return;
    const updated = [...structuredPrescription.medications];
    if (updated[index]) {
      updated[index] = {
        ...updated[index],
        [field]: value,
        is_user_corrected: true
      };
      if (field === 'name' && value && value.trim().length > 0) {
        updated[index].is_uncertain = false;
        updated[index].uncertainty_reason = null;
      }
      setStructuredPrescription({
        ...structuredPrescription,
        medications: updated
      });
    }
  };

  const addMedication = () => {
    if (!structuredPrescription) return;
    const newMed: MedicationItem = {
      name: '',
      raw_name: '',
      strength: '',
      dosage: '',
      frequency: '',
      duration: '',
      route: 'Oral',
      timing: '',
      instructions: '',
      confidence: 1.0,
      is_uncertain: false,
      uncertainty_reason: null,
      is_user_corrected: true
    };
    setStructuredPrescription({
      ...structuredPrescription,
      medications: [...structuredPrescription.medications, newMed]
    });
  };

  const deleteMedication = (index: number) => {
    if (!structuredPrescription) return;
    const updated = structuredPrescription.medications.filter((_, i) => i !== index);
    setStructuredPrescription({
      ...structuredPrescription,
      medications: updated
    });
  };

  const updatePatientInfo = (field: 'name' | 'age' | 'gender', value: string) => {
    if (!structuredPrescription) return;
    setStructuredPrescription({
      ...structuredPrescription,
      patient: {
        ...structuredPrescription.patient,
        [field]: value
      }
    });
  };

  const updateDoctorInfo = (field: 'name' | 'registration_number' | 'specialization', value: string) => {
    if (!structuredPrescription) return;
    setStructuredPrescription({
      ...structuredPrescription,
      doctor: {
        ...structuredPrescription.doctor,
        [field]: value
      }
    });
  };

  const confirmVerification = () => {
    if (!structuredPrescription) return;
    setIsVerifiedByUser(true);
    setStructuredPrescription({
      ...structuredPrescription,
      requires_human_verification: false
    });
  };

  useEffect(() => {
    handleAnalyzeScan('bone_fracture');
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return {
    modality, setModality,
    loading,
    scanResult,
    uploadedImagePreview, setUploadedImagePreview,
    uploadedFileName, setUploadedFileName,
    errorMessage,
    isDragging, setIsDragging,
    showOverlays, setShowOverlays,
    showGradCam, setShowGradCam,
    contrastMode, setContrastMode,
    selectedBoxIndex, setSelectedBoxIndex,
    fileInputRef,
    // Prescription OCR specific returns
    ocrStep, setOcrStep,
    structuredPrescription, setStructuredPrescription,
    isVerifiedByUser,
    rawTextOpen, setRawTextOpen,
    updateMedication,
    addMedication,
    deleteMedication,
    updatePatientInfo,
    updateDoctorInfo,
    confirmVerification,
    handleAnalyzeScan,
    handleFileUpload,
    handleDrop
  };
}
