"use client";

import { useState, useRef } from "react";
import { hashFile, generateRecordId } from "@/lib/crypto";
import { uploadFile } from "@/lib/ipfs";
import { registerRecord, getSigner } from "@/lib/contract";

const STEPS = [
  { key: "hash", label: "Hashing file (SHA-256)" },
  { key: "upload", label: "Uploading to IPFS" },
  { key: "register", label: "Registering on-chain" },
  { key: "done", label: "Record registered!" },
];

export default function UploadRecord({ walletAddress, walletMode = "burner", onRecordCreated }) {
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  function getStepStatus(index) {
    if (currentStep < 0) return "pending";
    if (error && index === currentStep) return "error";
    if (index < currentStep) return "done";
    if (index === currentStep) return "active";
    return "pending";
  }

  function getStepIcon(status) {
    if (status === "done") return "✓";
    if (status === "error") return "✕";
    if (status === "active") return "⟳";
    return "○";
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) setFile(dropped);
  }

  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  }

  async function handleUpload() {
    if (!file) return;
    setError(null);
    setResult(null);

    try {
      // Step 0: Hash
      setCurrentStep(0);
      const fileHash = await hashFile(file);

      // Step 1: IPFS upload
      setCurrentStep(1);
      const { cid, simulated } = await uploadFile(file);

      // Step 2: On-chain registration
      setCurrentStep(2);
      const signer = await getSigner(walletMode);
      const address = walletAddress || (await signer.getAddress());
      const recordId = await generateRecordId(file.name, address);
      await registerRecord(recordId, fileHash, cid, signer);

      // Step 3: Done
      setCurrentStep(3);
      const resultData = { recordId, fileHash, cid, simulated, owner: address };
      setResult(resultData);
      if (onRecordCreated) onRecordCreated(resultData);
    } catch (err) {
      console.error("Upload failed:", err);
      setError(err.message || "Unknown error");
    }
  }

  function handleReset() {
    setFile(null);
    setCurrentStep(-1);
    setError(null);
    setResult(null);
  }

  return (
    <div className="flex flex-col gap-2" id="upload-record-panel">
      {/* Drop zone */}
      {!result && (
        <div
          className={`drop-zone ${dragOver ? "drag-over" : ""}`}
          id="file-drop-zone"
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="file-input"
          />
          <div className="drop-zone-icon">📄</div>
          <div className="drop-zone-text">
            {file ? (
              <>
                <strong>{file.name}</strong>
                <br />
                {(file.size / 1024).toFixed(1)} KB — Click or drop to change
              </>
            ) : (
              <>
                <strong>Drop a medical report here</strong>
                <br />
                or click to browse • PDF, JPG, PNG, DICOM, etc.
              </>
            )}
          </div>
        </div>
      )}

      {/* Progress steps */}
      {currentStep >= 0 && (
        <div className="steps" id="upload-steps">
          {STEPS.map((step, i) => {
            const status = getStepStatus(i);
            return (
              <div key={step.key} className={`step ${status}`}>
                <div className="step-icon">{getStepIcon(status)}</div>
                <div className="step-text">{step.label}</div>
              </div>
            );
          })}
        </div>
      )}

      {/* Error */}
      {error && (
        <div
          className="glass-card-static"
          style={{
            background: "rgba(248,113,113,0.08)",
            border: "1px solid rgba(248,113,113,0.3)",
          }}
          id="upload-error"
        >
          <p style={{ color: "var(--red)", fontWeight: 600, marginBottom: 4 }}>
            ✕ Upload Failed
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
            {error}
          </p>
        </div>
      )}

      {/* Result card */}
      {result && (
        <div className="glass-card-static animate-fadeSlideUp" id="upload-result">
          <h4 style={{ color: "var(--green)", marginBottom: 16 }}>
            ✓ Record Registered Successfully
          </h4>
          <div className="detail-row">
            <span className="detail-label">Record ID</span>
            <span className="detail-value">{result.recordId}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">File Hash</span>
            <span className="detail-value">{result.fileHash}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">IPFS CID</span>
            <span className="detail-value">
              {result.cid}
              {result.simulated && (
                <span className="badge badge-warning" style={{ marginLeft: 8 }}>
                  Simulated
                </span>
              )}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Owner</span>
            <span className="detail-value">{result.owner}</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-1" style={{ marginTop: 8 }}>
        {!result && (
          <button
            className="btn btn-primary btn-lg w-full"
            onClick={handleUpload}
            disabled={!file || (currentStep >= 0 && currentStep < 3)}
            id="upload-btn"
          >
            {currentStep >= 0 && currentStep < 3 ? (
              <>
                <span className="spinner" /> Processing…
              </>
            ) : (
              <>🔒 Hash & Register Record</>
            )}
          </button>
        )}
        {(result || error) && (
          <button
            className="btn btn-secondary btn-lg w-full"
            onClick={handleReset}
            id="reset-btn"
          >
            ↻ Upload Another Record
          </button>
        )}
      </div>
    </div>
  );
}
