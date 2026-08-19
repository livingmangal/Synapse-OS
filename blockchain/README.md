# MedChain — Decentralized Medical Records

**Hackathon Demo** • Blockchain-verified medical record integrity using Ethereum + IPFS.

## 🏗 Architecture

```
Browser → SHA-256 hash → Upload to IPFS (Pinata) → Register on-chain
Verify  → Fetch from IPFS → Re-hash → Compare with on-chain hash → ✅/❌
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm

### 1. Start the local blockchain

```bash
cd contracts
npm install
npx hardhat node
```

This starts a local Ethereum node on `http://127.0.0.1:8545` with 20 pre-funded accounts.

### 2. Deploy the smart contract

In a **new terminal**:

```bash
cd contracts
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
```

This deploys `MedicalRecords.sol` and writes the ABI + address to `frontend/lib/deployedContract.json`.

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. (Optional) Configure Pinata

Copy `.env.local.example` to `.env.local` and add your Pinata JWT:

```bash
cp .env.local.example .env.local
# Edit .env.local and add your Pinata JWT
```

Without a Pinata JWT, the app uses a **simulated IPFS** (localStorage) — still fully functional for demos.

---

## 📁 Project Structure

```
blockchain_feature/
├── contracts/                    # Hardhat project
│   ├── contracts/MedicalRecords.sol
│   ├── scripts/deploy.js
│   ├── test/MedicalRecords.test.js
│   └── hardhat.config.js
├── frontend/                     # Next.js app
│   ├── app/
│   │   ├── page.js              # Landing page
│   │   └── records/page.js      # Records dashboard
│   ├── components/              # React components
│   ├── lib/                     # Utilities (crypto, IPFS, contract)
│   └── styles/globals.css       # Design system
└── README.md
```

## 🧪 Run Tests

```bash
cd contracts
npx hardhat test
```

## ⚠ Hackathon Scope (Deliberate Cuts)

- **No encryption** — files hashed for integrity, not encrypted before pinning
- **No KMS / provider identity** — access = Ethereum address allowlist
- **No multi-node network** — single local/testnet chain
- **No HIPAA/GDPR** — demo with synthetic data only

Production spec addresses all of the above.

## 🌐 Public Demo (Free)

1. Get free Sepolia RPC (Alchemy/Infura)
2. Get free Sepolia ETH (faucet)
3. `npx hardhat run scripts/deploy.js --network sepolia`
4. Deploy frontend to Vercel free tier
