import { useState, useRef, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export type ModalityType = 'bone_fracture' | 'chest_xray' | 'prescription' | 'lab_report';

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
    handleAnalyzeScan,
    handleFileUpload,
    handleDrop
  };
}
