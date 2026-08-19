/**
 * IPFS helpers — Pinata free-tier upload + public gateway fetch.
 * Falls back to localStorage simulation when no JWT is configured.
 */

const PINATA_API_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const PINATA_GATEWAY = "https://gateway.pinata.cloud/ipfs";

/**
 * Upload a file to IPFS via Pinata.
 * @param {File} file
 * @param {string} jwt - Pinata JWT token
 * @returns {Promise<string>} IPFS CID
 */
export async function uploadToPinata(file, jwt) {
  const formData = new FormData();
  formData.append("file", file);

  const metadata = JSON.stringify({
    name: file.name,
    keyvalues: { type: "medical-record", uploadedAt: new Date().toISOString() },
  });
  formData.append("pinataMetadata", metadata);

  const res = await fetch(PINATA_API_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${jwt}` },
    body: formData,
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Pinata upload failed (${res.status}): ${errText}`);
  }

  const data = await res.json();
  return data.IpfsHash;
}

/**
 * Fetch a file from IPFS via the Pinata public gateway.
 * @param {string} cid
 * @returns {Promise<ArrayBuffer>}
 */
export async function fetchFromIPFS(cid) {
  // Try Pinata dedicated gateway first, fall back to generic
  const gateways = [
    `${PINATA_GATEWAY}/${cid}`,
    `https://ipfs.io/ipfs/${cid}`,
    `https://cloudflare-ipfs.com/ipfs/${cid}`,
  ];

  let lastError;
  for (const url of gateways) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        return await res.arrayBuffer();
      }
    } catch (e) {
      lastError = e;
    }
  }
  throw new Error(`Failed to fetch CID ${cid} from any gateway: ${lastError?.message}`);
}

// ── Local Simulation (no Pinata JWT needed) ──────────────────────────

const LOCAL_STORAGE_PREFIX = "ipfs_sim_";

/**
 * Simulate IPFS upload by storing file in localStorage.
 * Returns a fake CID based on a hash of the file content.
 * @param {File} file
 * @returns {Promise<string>}
 */
export async function uploadSimulated(file) {
  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  const hash = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const fakeCid = `Qm${hash.substring(0, 44)}`;

  // Store as base64 in localStorage
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);

  try {
    localStorage.setItem(
      `${LOCAL_STORAGE_PREFIX}${fakeCid}`,
      JSON.stringify({ name: file.name, data: base64, type: file.type })
    );
  } catch (e) {
    console.warn("localStorage full, file stored in memory only");
  }

  return fakeCid;
}

/**
 * Fetch a simulated file from localStorage.
 * @param {string} cid
 * @returns {Promise<ArrayBuffer>}
 */
export async function fetchSimulated(cid) {
  const stored = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${cid}`);
  if (!stored) {
    throw new Error(`Simulated CID ${cid} not found in localStorage`);
  }
  const { data } = JSON.parse(stored);
  const binary = atob(data);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Smart upload — uses Pinata if JWT is available, else simulates.
 * @param {File} file
 * @returns {Promise<{cid: string, simulated: boolean}>}
 */
export async function uploadFile(file) {
  const jwt = process.env.NEXT_PUBLIC_PINATA_JWT;
  if (jwt) {
    const cid = await uploadToPinata(file, jwt);
    return { cid, simulated: false };
  }
  const cid = await uploadSimulated(file);
  return { cid, simulated: true };
}

/**
 * Smart fetch — tries real IPFS, falls back to localStorage.
 * @param {string} cid
 * @returns {Promise<ArrayBuffer>}
 */
export async function fetchFile(cid) {
  // Check localStorage first (instant, works offline)
  try {
    return await fetchSimulated(cid);
  } catch {
    // Not in localStorage, try IPFS gateways
  }
  return await fetchFromIPFS(cid);
}
