"use client";

import Header from "@/components/Header";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header connected={false} />

      <main>
        {/* Hero */}
        <section className="hero" id="hero-section">
          <div className="page-container">
            <div className="hero-badge">
              <span>⛓</span> Built on Ethereum + IPFS
            </div>

            <h1>
              Medical Records,{" "}
              <span className="gradient-text">Verified On-Chain</span>
            </h1>

            <p className="hero-subtitle">
              Upload medical reports to IPFS, anchor their cryptographic hash
              on the blockchain, and verify integrity anytime.
              Zero tampering. Full transparency.
            </p>

            <div className="hero-actions">
              <Link href="/records" className="btn btn-primary btn-lg" id="cta-records">
                🔒 Open Records Dashboard
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener"
                className="btn btn-secondary btn-lg"
                id="cta-github"
              >
                ↗ View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="page-container" id="features-section">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three pillars of decentralized medical record integrity</p>
          </div>

          <div className="features-grid">
            <div className="glass-card feature-card" id="feature-immutable">
              <div className="feature-icon cyan">⛓</div>
              <div className="feature-title">Immutable Records</div>
              <div className="feature-desc">
                Every report's SHA-256 hash is stored on-chain. Once registered,
                no one — not even the uploader — can alter the record without
                detection.
              </div>
            </div>

            <div className="glass-card feature-card" id="feature-ipfs">
              <div className="feature-icon purple">📦</div>
              <div className="feature-title">IPFS Storage</div>
              <div className="feature-desc">
                Files are pinned to IPFS via Pinata, giving every report a
                unique content-addressed identifier (CID). No central server,
                no single point of failure.
              </div>
            </div>

            <div className="glass-card feature-card" id="feature-access">
              <div className="feature-icon teal">🔐</div>
              <div className="feature-title">Granular Access Control</div>
              <div className="feature-desc">
                Record owners grant or revoke access to specific Ethereum
                addresses. On-chain allowlist — transparent and auditable.
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="page-container" style={{ paddingBottom: 80 }} id="arch-section">
          <div className="section-header">
            <h2>Architecture</h2>
            <p>Simple, auditable, zero-backend</p>
          </div>

          <div className="glass-card-static" style={{ padding: 32 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 24,
                textAlign: "center",
              }}
            >
              {[
                { icon: "🌐", label: "Browser", desc: "Hash + Upload + Verify" },
                { icon: "→", label: "", desc: "" },
                { icon: "📦", label: "IPFS (Pinata)", desc: "File Storage" },
                { icon: "→", label: "", desc: "" },
                { icon: "⛓", label: "Smart Contract", desc: "Hash + CID + ACL" },
              ].map((item, i) =>
                item.label ? (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <div style={{ fontSize: "2rem" }}>{item.icon}</div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{item.label}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.desc}</div>
                  </div>
                ) : (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "var(--text-muted)" }}>
                    →
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Scope disclaimer */}
        <section className="page-container" style={{ paddingBottom: 80 }} id="scope-section">
          <div className="glass-card-static" style={{
            background: "rgba(255, 179, 71, 0.05)",
            border: "1px solid rgba(255, 179, 71, 0.2)",
            padding: 32,
          }}>
            <h3 style={{ color: "var(--amber)", marginBottom: 12 }}>
              ⚠ Hackathon Scope
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 12 }}>
              This is a proof-of-concept demo. The following are deliberately out of scope:
            </p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, paddingLeft: 20 }}>
              <li><strong>No client-side encryption</strong> — files are hashed for integrity, not encrypted before pinning</li>
              <li><strong>No KMS / provider identity</strong> — access is a simple Ethereum address allowlist</li>
              <li><strong>No multi-node network</strong> — single local chain, not a permissioned consortium</li>
              <li><strong>No HIPAA/GDPR compliance</strong> — out of scope for demo</li>
            </ul>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: 12 }}>
              Production design addresses all of the above. See the full spec document.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
