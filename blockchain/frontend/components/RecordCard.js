"use client";

export default function RecordCard({ record }) {
  if (!record) return null;

  return (
    <div className="glass-card animate-fadeSlideUp" id={`record-${record.recordId?.slice(0, 10)}`}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <h4 style={{ fontSize: "1rem", fontWeight: 600 }}>
          Medical Record
        </h4>
        {record.simulated && (
          <span className="badge badge-warning">Simulated IPFS</span>
        )}
      </div>

      <div className="detail-row">
        <span className="detail-label">Record ID</span>
        <span className="detail-value">{record.recordId}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">File Hash</span>
        <span className="detail-value">{record.fileHash}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">IPFS CID</span>
        <span className="detail-value">{record.cid}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Owner</span>
        <span className="detail-value">{record.owner}</span>
      </div>
    </div>
  );
}
