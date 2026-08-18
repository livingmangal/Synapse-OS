"use client";

import { useState } from "react";
import {
  grantAccess,
  revokeAccess,
  hasAccess as checkAccess,
  getSigner,
} from "@/lib/contract";

export default function AccessControl({ walletMode = "burner" }) {
  const [recordId, setRecordId] = useState("");
  const [granteeAddr, setGranteeAddr] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleGrant() {
    await doAction("grant");
  }

  async function handleRevoke() {
    await doAction("revoke");
  }

  async function handleCheck() {
    await doAction("check");
  }

  async function doAction(action) {
    if (!recordId.trim() || !granteeAddr.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      if (action === "grant") {
        const signer = await getSigner(walletMode);
        await grantAccess(recordId.trim(), granteeAddr.trim(), signer);
        setResult({ action: "grant", success: true });
      } else if (action === "revoke") {
        const signer = await getSigner(walletMode);
        await revokeAccess(recordId.trim(), granteeAddr.trim(), signer);
        setResult({ action: "revoke", success: true });
      } else if (action === "check") {
        const has = await checkAccess(recordId.trim(), granteeAddr.trim());
        setResult({ action: "check", hasAccess: has });
      }
    } catch (err) {
      console.error(`${action} failed:`, err);
      setError(err.message || `${action} failed`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2" id="access-control-panel">
      <div className="input-group">
        <label className="input-label" htmlFor="access-record-id">
          Record ID
        </label>
        <input
          id="access-record-id"
          className="input input-mono"
          type="text"
          placeholder="0x..."
          value={recordId}
          onChange={(e) => setRecordId(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="input-group">
        <label className="input-label" htmlFor="grantee-address">
          Grantee Address
        </label>
        <input
          id="grantee-address"
          className="input input-mono"
          type="text"
          placeholder="0x..."
          value={granteeAddr}
          onChange={(e) => setGranteeAddr(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="flex gap-1" style={{ marginTop: 8 }}>
        <button
          className="btn btn-primary"
          onClick={handleGrant}
          disabled={!recordId.trim() || !granteeAddr.trim() || loading}
          id="grant-btn"
          style={{ flex: 1 }}
        >
          {loading ? <span className="spinner" /> : "🔓"} Grant
        </button>
        <button
          className="btn btn-danger"
          onClick={handleRevoke}
          disabled={!recordId.trim() || !granteeAddr.trim() || loading}
          id="revoke-btn"
          style={{ flex: 1 }}
        >
          {loading ? <span className="spinner" /> : "🔒"} Revoke
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleCheck}
          disabled={!recordId.trim() || !granteeAddr.trim() || loading}
          id="check-btn"
          style={{ flex: 1 }}
        >
          {loading ? <span className="spinner" /> : "🔍"} Check
        </button>
      </div>

      {/* Error */}
      {error && (
        <div
          className="glass-card-static animate-fadeSlideUp"
          style={{
            background: "rgba(248,113,113,0.08)",
            border: "1px solid rgba(248,113,113,0.3)",
          }}
          id="access-error"
        >
          <p style={{ color: "var(--red)", fontWeight: 600 }}>✕ Error</p>
          <p className="mt-1" style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
            {error}
          </p>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="glass-card-static animate-fadeSlideUp" id="access-result">
          {result.action === "grant" && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="badge badge-success">✓ Access Granted</span>
              <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                Transaction confirmed on-chain
              </span>
            </div>
          )}
          {result.action === "revoke" && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="badge badge-error">✓ Access Revoked</span>
              <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                Transaction confirmed on-chain
              </span>
            </div>
          )}
          {result.action === "check" && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                className={`badge ${
                  result.hasAccess ? "badge-success" : "badge-error"
                }`}
              >
                {result.hasAccess ? "✓ Has Access" : "✕ No Access"}
              </span>
              <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                {result.hasAccess
                  ? "This address can access the record"
                  : "This address does NOT have access"}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Info box */}
      <div
        className="glass-card-static mt-2"
        style={{
          background: "rgba(0, 212, 255, 0.03)",
          border: "1px solid rgba(0, 212, 255, 0.15)",
          fontSize: "0.8rem",
          color: "var(--text-secondary)",
        }}
      >
        <p style={{ marginBottom: 4, fontWeight: 600, color: "var(--cyan)" }}>
          ℹ How Access Control Works
        </p>
        <p>
          Only the record owner can grant or revoke access. Access is stored
          on-chain as a simple allowlist mapping. The owner always has implicit
          access to their own records.
        </p>
      </div>
    </div>
  );
}
