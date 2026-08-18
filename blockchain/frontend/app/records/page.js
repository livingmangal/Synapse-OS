"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import WalletConnect from "@/components/WalletConnect";
import UploadRecord from "@/components/UploadRecord";
import VerifyRecord from "@/components/VerifyRecord";
import AccessControl from "@/components/AccessControl";
import RecordCard from "@/components/RecordCard";

const TABS = [
  { key: "upload", label: "📤 Upload", desc: "Register a new record" },
  { key: "verify", label: "🔍 Verify", desc: "Check record integrity" },
  { key: "access", label: "🔐 Access", desc: "Manage permissions" },
];

export default function RecordsPage() {
  const [activeTab, setActiveTab] = useState("upload");
  const [walletAddress, setWalletAddress] = useState(null);
  const [walletMode, setWalletMode] = useState("burner");
  const [connected, setConnected] = useState(false);
  const [recentRecords, setRecentRecords] = useState([]);

  const handleWalletChange = useCallback((addr, isConnected, mode = "burner") => {
    setWalletAddress(addr);
    setConnected(isConnected);
    setWalletMode(mode);
  }, []);

  const handleRecordCreated = useCallback((record) => {
    setRecentRecords((prev) => [record, ...prev]);
  }, []);

  return (
    <>
      <Header
        walletAddress={walletAddress}
        connected={connected}
      />

      <main className="page-container records-page" id="records-page">
        {/* Page header */}
        <div className="records-header">
          <div>
            <h1 style={{ fontSize: "1.75rem", marginBottom: 4 }}>
              Records Dashboard
            </h1>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              Upload, verify, and manage access to medical records
            </p>
          </div>
        </div>

        {/* Wallet connection */}
        <WalletConnect onWalletChange={handleWalletChange} />

        {/* Tabs */}
        <div className="tabs mt-3" id="records-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
              id={`tab-${tab.key}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="records-content" key={activeTab}>
          <div className="glass-card-static" style={{ marginBottom: 24 }}>
            {activeTab === "upload" && (
              <UploadRecord
                walletAddress={walletAddress}
                walletMode={walletMode}
                onRecordCreated={handleRecordCreated}
              />
            )}
            {activeTab === "verify" && <VerifyRecord walletMode={walletMode} />}
            {activeTab === "access" && <AccessControl walletMode={walletMode} />}
          </div>
        </div>

        {/* Recent records */}
        {recentRecords.length > 0 && (
          <div className="mt-3" id="recent-records">
            <h3 style={{ marginBottom: 16 }}>Recent Records</h3>
            <div className="flex flex-col gap-2">
              {recentRecords.map((record, i) => (
                <RecordCard key={i} record={record} />
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
