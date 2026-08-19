"use client";

import { useState, useEffect } from "react";
import { getSigner, isContractReady, getDeployedNetwork } from "@/lib/contract";

export default function WalletConnect({ onWalletChange }) {
  const [address, setAddress] = useState(null);
  const [mode, setMode] = useState("burner"); // "burner" | "metamask"
  const [contractOk, setContractOk] = useState(false);
  const [networkName, setNetworkName] = useState("localhost");
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    isContractReady().then(setContractOk).catch(() => setContractOk(false));
    getDeployedNetwork().then(setNetworkName).catch(() => setNetworkName("localhost"));
  }, []);

  useEffect(() => {
    connectBurner();
  }, []);

  async function connectBurner() {
    setConnecting(true);
    setError(null);
    try {
      const net = await getDeployedNetwork();
      setNetworkName(net);
      const signer = await getSigner("burner");
      const addr = await signer.getAddress();
      setAddress(addr);
      setMode("burner");
      if (onWalletChange) onWalletChange(addr, true, "burner");
    } catch (err) {
      if (networkName !== "sepolia") {
        setError("Cannot connect to local Hardhat node. Is it running?");
      }
      if (onWalletChange) onWalletChange(null, false, "burner");
    } finally {
      setConnecting(false);
    }
  }

  async function connectMetaMask() {
    setConnecting(true);
    setError(null);
    try {
      // Step 1: Force switch to Sepolia FIRST if needed
      if (networkName === "sepolia" && window.ethereum) {
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        if (chainId !== "0xaa36a7") {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0xaa36a7" }],
            });
          } catch (switchErr) {
            if (switchErr.code === 4902) {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                  chainId: "0xaa36a7",
                  chainName: "Sepolia Test Network",
                  nativeCurrency: { name: "Sepolia ETH", symbol: "ETH", decimals: 18 },
                  rpcUrls: ["https://ethereum-sepolia-rpc.publicnode.com"],
                  blockExplorerUrls: ["https://sepolia.etherscan.io"],
                }],
              });
            } else {
              throw new Error("Please switch MetaMask to the Sepolia network and try again.");
            }
          }
        }
      }

      // Step 2: Now get the signer (on the correct network)
      const signer = await getSigner("metamask");
      const addr = await signer.getAddress();
      setAddress(addr);
      setMode("metamask");
      if (onWalletChange) onWalletChange(addr, true, "metamask");
    } catch (err) {
      setError(err.message || "MetaMask connection failed");
      if (onWalletChange) onWalletChange(null, false, "metamask");
    } finally {
      setConnecting(false);
    }
  }

  const [hasMetaMask, setHasMetaMask] = useState(false);

  useEffect(() => {
    setHasMetaMask(typeof window !== "undefined" && typeof window.ethereum !== "undefined");
  }, []);

  const isSepolia = networkName === "sepolia";

  return (
    <div className="glass-card-static" id="wallet-connect-panel" style={{ padding: 16 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className={`wallet-dot ${address ? "" : "disconnected"}`} />
          <div>
            <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-primary)" }}>
              {address ? (
                <>
                  {address.slice(0, 6)}…{address.slice(-4)}
                </>
              ) : (
                "Not Connected"
              )}
            </div>
            <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
              {mode === "burner" ? "Hardhat Burner" : "MetaMask"} • Network:{" "}
              <strong style={{ color: isSepolia ? "var(--cyan)" : "var(--text-primary)" }}>
                {isSepolia ? "Sepolia Testnet" : "Localhost"}
              </strong>{" "}
              • {contractOk ? "✅ Contract Ready" : "⚠ Checking Contract"}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 6 }}>
          <button
            className={`btn btn-sm ${mode === "burner" && address ? "btn-primary" : "btn-secondary"}`}
            onClick={connectBurner}
            disabled={connecting}
            id="connect-burner-btn"
          >
            ⛓ Burner
          </button>
          {hasMetaMask && (
            <button
              className={`btn btn-sm ${mode === "metamask" && address ? "btn-primary" : "btn-secondary"}`}
              onClick={connectMetaMask}
              disabled={connecting}
              id="connect-metamask-btn"
            >
              🦊 MetaMask
            </button>
          )}
        </div>
      </div>

      {error && (
        <div
          className="mt-1"
          style={{ fontSize: "0.8rem", color: "var(--amber)" }}
          id="wallet-error"
        >
          ⚠ {error}
        </div>
      )}

      {isSepolia && mode === "burner" && (
        <div
          className="mt-1"
          style={{ fontSize: "0.8rem", color: "var(--cyan)" }}
          id="sepolia-info"
        >
          ℹ Contract is live on Sepolia testnet (`0x241a...83F4`). Click <strong>🦊 MetaMask</strong> to submit transactions with Sepolia test ETH.
        </div>
      )}
    </div>
  );
}
