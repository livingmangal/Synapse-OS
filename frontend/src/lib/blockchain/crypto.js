/**
 * SHA-256 hashing via Web Crypto API.
 * All operations are client-side — no secrets leave the browser.
 */

/**
 * Hash a File using SHA-256 and return the 0x-prefixed hex digest.
 * @param {File} file
 * @returns {Promise<string>} e.g. "0xabc123..."
 */
export async function hashFile(file) {
  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  return (
    "0x" +
    Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
  );
}

/**
 * Hash an ArrayBuffer using SHA-256.
 * @param {ArrayBuffer} buffer
 * @returns {Promise<string>}
 */
export async function hashBuffer(buffer) {
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  return (
    "0x" +
    Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
  );
}

/**
 * Generate a unique record ID from file metadata.
 * Uses keccak256-style hashing (but we stick with SHA-256 for simplicity
 * and derive a bytes32 from filename + owner + timestamp).
 * @param {string} fileName
 * @param {string} ownerAddress
 * @returns {Promise<string>} bytes32 hex string
 */
export async function generateRecordId(fileName, ownerAddress) {
  const raw = `${fileName}:${ownerAddress}:${Date.now()}:${Math.random()}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(raw);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return (
    "0x" +
    Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
  );
}
