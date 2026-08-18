"use client";

import { useState } from "react";
import { hashBuffer } from "@/lib/crypto";
import { fetchFile } from "@/lib/ipfs";
import { getRecord, getSigner } from "@/lib/contract";

export default function VerifyRecord({ walletMode = "burner" }) {
  const [recordId, setRecordId] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [result, setResult] = useState(null); // { match, record, recomputedHash }
  const [error, setError] = useState(null);

  async function handleVerify() {
    if (!recordId.trim()) return;
    setVerifying(true);
    setResult(null);
    setError(null);

    try {
      // 1. Get record from chain (automatically uses proper network provider)
      const record = await getRecord(recordId.trim());
      if (
        !record ||
        record.owner === "0x0000000000000000000000000000000000000000" ||
        !record.cid
      ) {
        throw new Error("Record not found on-chain for this ID.");
      }

      // 2. Fetch file from IPFS
      const fileBuffer = await fetchFile(record.cid);

      // 3. Re-hash the fetched file
      const recomputedHash = await hashBuffer(fileBuffer);

      // 4. Compare
      const match =
        recomputedHash.toLowerCase() === record.fileHash.toLowerCase();

      setResult({
        match,
        record,
        recomputedHash,
        fileSize: fileBuffer.byteLength,
      });
    } catch (err) {
      console.error("Verify failed:", err);
      setError(err.message || "Verification failed");
    } finally {
      setVerifying(false);
    }
  }

  return (
    <div className="flex flex-col gap-2" id="verify-record-panel">
      {/* Input */}
      <div className="input-group">
        <label className="input-label" htmlFor="verify-record-id">
          Record ID (bytes32)
        </label>
        <input
          id="verify-record-id"
          className="input input-mono"
          type="text"
          placeholder="0x..."
          value={recordId}
          onChange={(e) => setRecordId(e.target.value)}
          disabled={verifying}
        />
      </div>

      <button
        className="btn btn-primary btn-lg w-full"
        onClick={handleVerify}
        disabled={!recordId.trim() || verifying}
        id="verify-btn"
      >
        {verifying ? (
          <>
            <span className="spinner" /> Verifying…
          </>
        ) : (
          <>🔍 Verify Record Integrity</>
        )}
      </button>

      {/* Error */}
      {error && (
        <div
          className="glass-card-static animate-fadeSlideUp"
          style={{
            background: "rgba(248,113,113,0.08)",
            border: "1px solid rgba(248,113,113,0.3)",
          }}
          id="verify-error"
        >
          <p style={{ color: "var(--red)", fontWeight: 600 }}>
            ✕ Verification Error
          </p>
          <p
            className="mt-1"
            style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}
          >
            {error}
          </p>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="animate-fadeSlideUp" id="verify-result">
          <div
            className={`verify-result ${result.match ? "success" : "failure"}`}
          >
            <div className="verify-icon">
              {result.match ? "✅" : "❌"}
            </div>
            <div className="verify-title">
              {result.match
                ? "Integrity Verified"
                : "Integrity Check Failed"}
            </div>
            <div className="verify-subtitle">
              {result.match
                ? "The file on IPFS matches the hash stored on-chain. This record has not been tampered with."
                : "WARNING: The re-computed hash does NOT match the on-chain hash. The file may have been altered."}
            </div>
          </div>

          <div className="glass-card-static mt-2">
            <div className="detail-row">
              <span className="detail-label">Owner</span>
              <span className="detail-value">{result.record.owner}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">On-Chain Hash</span>
              <span className="detail-value">{result.record.fileHash}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Recomputed Hash</span>
              <span className="detail-value">{result.recomputedHash}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">CID</span>
              <span className="detail-value">{result.record.cid}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Registered</span>
              <span className="detail-value">
                {result.record.timestamp
                  ? new Date(result.record.timestamp * 1000).toLocaleString()
                  : "—"}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-label">File Size</span>
              <span className="detail-value">
                {(result.fileSize / 1024).toFixed(1)} KB
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
