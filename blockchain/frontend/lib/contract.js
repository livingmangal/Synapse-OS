/**
 * Contract interaction helpers — connects to the MedicalRecords contract
 * using ethers.js v6.
 *
 * Automatically detects whether the contract is deployed on local Hardhat or Sepolia testnet.
 */
import { ethers } from "ethers";

// Public RPC endpoints for Sepolia testnet fallback
const SEPOLIA_RPC_URLS = [
  "https://ethereum-sepolia-rpc.publicnode.com",
  "https://rpc.sepolia.org",
  "https://rpc2.sepolia.org",
];

const HARDHAT_RPC = "http://127.0.0.1:8545";

// Hardhat's default first account private key (test-only)
const HARDHAT_ACCOUNT_0_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

let deployedData = null;

async function loadDeployedData() {
  if (deployedData) return deployedData;
  try {
    const mod = await import("./deployedContract.json");
    deployedData = mod.default || mod;
    return deployedData;
  } catch {
    console.warn("deployedContract.json not found. Run the deploy script first.");
    return null;
  }
}

export async function getABI() {
  const data = await loadDeployedData();
  return data?.abi || [];
}

export async function getContractAddress() {
  const data = await loadDeployedData();
  return data?.address || null;
}

export async function getDeployedNetwork() {
  const data = await loadDeployedData();
  return data?.network || "localhost";
}

/**
 * Get an appropriate Provider for read queries based on where the contract is deployed.
 */
export async function getProvider() {
  const network = await getDeployedNetwork();

  // If deployed on Sepolia
  if (network === "sepolia") {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const bp = new ethers.BrowserProvider(window.ethereum);
        return bp;
      } catch (e) {
        console.warn("MetaMask provider failed, falling back to public Sepolia RPC", e);
      }
    }
    // Fallback to public Sepolia JsonRpcProvider
    return new ethers.JsonRpcProvider(SEPOLIA_RPC_URLS[0]);
  }

  // Localhost network
  return new ethers.JsonRpcProvider(HARDHAT_RPC);
}

/**
 * Get a browser wallet provider (MetaMask).
 */
export function getBrowserProvider() {
  if (typeof window !== "undefined" && window.ethereum) {
    return new ethers.BrowserProvider(window.ethereum);
  }
  return null;
}

/**
 * Get a signer for transactions.
 * @param {"metamask" | "burner"} mode
 */
export async function getSigner(mode = "burner") {
  if (mode === "metamask") {
    if (typeof window === "undefined" || !window.ethereum) {
      throw new Error("MetaMask not found in browser.");
    }

    // Request account access
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Auto-switch to Sepolia if the contract is deployed there
    const network = await getDeployedNetwork();
    if (network === "sepolia") {
      const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
      if (currentChainId !== "0xaa36a7") {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0xaa36a7" }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            // Sepolia not added to MetaMask yet — add it
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0xaa36a7",
                  chainName: "Sepolia Test Network",
                  nativeCurrency: { name: "Sepolia ETH", symbol: "ETH", decimals: 18 },
                  rpcUrls: ["https://ethereum-sepolia-rpc.publicnode.com"],
                  blockExplorerUrls: ["https://sepolia.etherscan.io"],
                },
              ],
            });
          } else {
            throw new Error(
              "Please switch MetaMask to the Sepolia network manually and try again."
            );
          }
        }
      }
    }

    // Create a FRESH provider after network switch
    const freshProvider = new ethers.BrowserProvider(window.ethereum);
    return await freshProvider.getSigner();
  }

  // Burner wallet (Hardhat account #0)
  const network = await getDeployedNetwork();
  if (network === "sepolia") {
    // If user has MetaMask connected, prefer MetaMask
    const bp = getBrowserProvider();
    if (bp) {
      try {
        const accounts = await bp.send("eth_accounts", []);
        if (accounts && accounts.length > 0) {
          return await bp.getSigner();
        }
      } catch {}
    }
  }

  const provider = await getProvider();
  return new ethers.Wallet(HARDHAT_ACCOUNT_0_KEY, provider);
}

/**
 * Get an ethers.Contract instance attached to a Signer or Provider.
 */
export async function getContract(signerOrProvider) {
  const address = await getContractAddress();
  const abi = await getABI();
  if (!address || abi.length === 0) {
    throw new Error("Contract not deployed. Run the deploy script first.");
  }

  let runner = signerOrProvider;
  if (!runner) {
    runner = await getProvider();
  }

  return new ethers.Contract(address, abi, runner);
}

/**
 * Check if the contract is deployed and reachable on the network.
 */
export async function isContractReady() {
  try {
    const address = await getContractAddress();
    if (!address) return false;
    const provider = await getProvider();
    const code = await provider.getCode(address);
    return code !== "0x";
  } catch {
    return false;
  }
}

// ── Convenience wrappers ────────────────────────────────────────────

export async function registerRecord(recordId, fileHash, cid, signer) {
  const contract = await getContract(signer);
  const tx = await contract.registerRecord(recordId, fileHash, cid);
  const receipt = await tx.wait();
  return receipt;
}

export async function grantAccess(recordId, grantee, signer) {
  const contract = await getContract(signer);
  const tx = await contract.grantAccess(recordId, grantee);
  return await tx.wait();
}

export async function revokeAccess(recordId, grantee, signer) {
  const contract = await getContract(signer);
  const tx = await contract.revokeAccess(recordId, grantee);
  return await tx.wait();
}

export async function hasAccess(recordId, grantee, signerOrProvider) {
  try {
    const contract = await getContract(signerOrProvider);
    return await contract.hasAccess(recordId, grantee);
  } catch (err) {
    // If custom signer failed with 0x decoding error, retry with read-only provider
    const readOnlyContract = await getContract(await getProvider());
    return await readOnlyContract.hasAccess(recordId, grantee);
  }
}

export async function getRecord(recordId, signerOrProvider) {
  let contract;
  try {
    contract = await getContract(signerOrProvider);
    const record = await contract.records(recordId);
    return {
      owner: record.owner,
      fileHash: record.fileHash,
      cid: record.cid,
      timestamp: Number(record.timestamp),
    };
  } catch (err) {
    // Fallback: If signer failed (e.g. 0x decoding due to wrong network provider), retry with default provider
    const fallbackProvider = await getProvider();
    contract = await getContract(fallbackProvider);
    const record = await contract.records(recordId);
    return {
      owner: record.owner,
      fileHash: record.fileHash,
      cid: record.cid,
      timestamp: Number(record.timestamp),
    };
  }
}
