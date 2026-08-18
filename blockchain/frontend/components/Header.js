"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ walletAddress, onConnect, connected }) {
  const pathname = usePathname();

  return (
    <header className="header" id="main-header">
      <div className="header-inner">
        <Link href="/" className="header-logo" id="header-logo">
          <div className="header-logo-icon">⛓</div>
          <span>MedChain</span>
        </Link>

        <nav className="header-nav" id="header-nav">
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
            id="nav-home"
          >
            Home
          </Link>
          <Link
            href="/records"
            className={`nav-link ${pathname === "/records" ? "active" : ""}`}
            id="nav-records"
          >
            Records
          </Link>

          <div className="wallet-badge" id="wallet-badge">
            <div
              className={`wallet-dot ${connected ? "" : "disconnected"}`}
            />
            <span>
              {connected && walletAddress
                ? `${walletAddress.slice(0, 6)}…${walletAddress.slice(-4)}`
                : "Not connected"}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
