import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'orchestrator-agent',
    slug: 'orchestrator-agent',
    title: 'Sanjeevani Orchestrator',
    subtitle: 'The Central Brain of the Health Platform',
    tagline: 'Understands intent, plans multi-step tasks, and delegates',
    location: 'Core Infrastructure',
    status: 'Available',
    statusText: 'Core Service · Active',
    units: '1 Master Agent',
    specs: [
      { label: 'Framework', value: 'LangGraph & CrewAI' },
      { label: 'LLM Brain', value: 'Groq API (Llama 3.1)' },
      { label: 'Memory', value: 'ChromaDB + Supabase' },
      { label: 'Channels', value: 'Voice, Web, WhatsApp, Telegram' },
      { label: 'Role', value: 'Multi-agent coordination' },
      { label: 'Features', value: 'Session management, Context bridging' },
    ],
    heroImage: '/uploads/2026/02/la-solana-hero.webp',
    thumbnailImage: '/uploads/2026/02/la-solana-thumb.webp',
    galleryImages: [
      '/uploads/2026/02/la-solana-1.webp',
      '/uploads/2026/02/la-solana-2.webp',
      '/uploads/2026/02/la-solana-3.webp',
      '/uploads/2026/02/la-solana-4.webp',
      '/uploads/2026/02/la-solana-5.webp',
    ],
    description:
      'The Orchestrator Agent (Sanjeevani) is the central brain of the platform. It normalizes every channel\'s message format, understands user intent, plans complex multi-step tasks, and delegates them to the appropriate specialized agents without losing context.',
    chapters: [
      {
        number: '01',
        subtitle: 'The Workflow',
        title: 'Seamless Delegation',
        description:
          'When a user asks to "check my last scan and log today\'s meals", the Orchestrator plans this as a sequence across the Medical Scan and Nutrition agents.',
        images: ['/uploads/2026/02/la-solana-env-1.webp', '/uploads/2026/02/la-solana-env-2.webp'],
        features: ['Intent Classification', 'Task Planning', 'Result Merging'],
      },
      {
        number: '02',
        subtitle: 'Omnichannel Memory',
        title: 'Continuous Context',
        description:
          'Because all agents share the same vector store and relational DB, a task started on WhatsApp can be seamlessly picked up in the web dashboard or by voice.',
        images: ['/uploads/2026/02/la-solana-arch-1.webp'],
        features: ['Shared Vector DB', 'Event Bus integration', 'Multi-device tracking'],
      },
    ],
  },
  {
    id: 'medical-scan-agent',
    slug: 'medical-scan-agent',
    title: 'Medical Scan Agent',
    subtitle: 'Clinical Intelligence for Documents and Scans',
    tagline: 'Translates complex reports into plain language',
    location: 'Clinical Cluster',
    status: 'Available',
    statusText: 'Clinical Service · Active',
    units: 'Vision & OCR Module',
    specs: [
      { label: 'Vision Model', value: 'LLaVA / Gemini Vision' },
      { label: 'OCR Model', value: 'Microsoft TrOCR' },
      { label: 'Input', value: 'Handwritten prescriptions, X-rays, MRIs' },
      { label: 'Output', value: 'Plain language summaries & Structured data' },
      { label: 'Integration', value: 'Writes directly to Blockchain Records' },
    ],
    heroImage: '/uploads/2026/02/plaza-espana-hero.webp',
    thumbnailImage: '/uploads/2026/02/plaza-espana-thumb.webp',
    galleryImages: [
      '/uploads/2026/02/plaza-espana-1.webp',
      '/uploads/2026/02/plaza-espana-2.webp',
      '/uploads/2026/02/plaza-espana-3.webp',
    ],
    description:
      'The Medical Scan Agent uses advanced Vision LLMs and OCR to read handwritten prescriptions, lab reports, and X-ray/MRI images, summarizing them in plain language for the patient and storing structured data for other agents.',
    chapters: [
      {
        number: '01',
        subtitle: 'The Processing',
        title: 'Instant Extraction',
        description:
          'Upload a photo of a blood test, and the agent parses the PDF, flags out-of-range values, and explains them simply without medical jargon.',
        features: ['Handwritten OCR', 'Medical terminology parsing', 'Anomaly flagging'],
      },
      {
        number: '02',
        subtitle: 'Integration',
        title: 'Connected to the Swarm',
        description:
          'Once a scan is processed, it publishes an event. The Blockchain Records agent can then hash this record, and the 3D Visualization agent can highlight the affected organs.',
        features: ['Event-driven architecture', 'Blockchain hashing', 'Visual syncing'],
      },
    ],
  },
  {
    id: 'symptom-triage-agent',
    slug: 'symptom-triage-agent',
    title: 'Symptom Triage Agent',
    subtitle: 'Structured Q&A and Emergency Routing',
    tagline: 'Intelligent triage before you see a doctor',
    location: 'Clinical Cluster',
    status: 'Upcoming',
    statusText: 'Beta Service · In Testing',
    specs: [
      { label: 'Core Tech', value: 'Hybrid Decision Tree + LLM' },
      { label: 'Action', value: 'Routes to ER, GP, or Home Care' },
      { label: 'Context', value: 'Reads user medical history' },
      { label: 'Council Mode', value: 'Supports dual-agent verification' },
    ],
    heroImage: '/uploads/2026/02/pexegueiro-hero.webp',
    thumbnailImage: '/uploads/2026/02/pexegueiro-thumb.webp',
    galleryImages: [
      '/uploads/2026/02/pexegueiro-1.webp',
      '/uploads/2026/02/pexegueiro-2.webp',
    ],
    description:
      'The Symptom Triage Agent engages the user in a structured Q&A when they report feeling unwell. It cross-references their history and current symptoms to suggest whether they need immediate emergency care, a GP visit, or simple rest.',
    chapters: [
      {
        number: '01',
        subtitle: 'Safety First',
        title: 'Council Mode Verification',
        description:
          'For serious symptoms, the query is silently run through two independently-prompted agents (e.g., a cautious persona and a guideline-based persona) to ensure a safe, balanced recommendation.',
        features: ['Multi-agent debate', 'Emergency escalation', 'Explainable AI outputs'],
      },
    ],
  },
  {
    id: 'blockchain-records-agent',
    slug: 'blockchain-records-agent',
    title: 'Blockchain Records Agent',
    subtitle: 'Tamper-proof Health Verification',
    tagline: 'Your data, verified on-chain',
    location: 'Trust Cluster',
    status: 'Sold Out',
    statusText: 'WIP · Architecture Phase',
    specs: [
      { label: 'Network', value: 'Polygon Amoy Testnet' },
      { label: 'Storage', value: 'IPFS via web3.storage' },
      { label: 'Smart Contracts', value: 'OpenZeppelin ERC-721' },
    ],
    heroImage: '/uploads/2026/02/icaria-hero.webp',
    thumbnailImage: '/uploads/2026/02/icaria-thumb.webp',
    galleryImages: ['/uploads/2026/02/icaria-1.webp'],
    description:
      'Writes and reads tamper-proof health records. When an agent creates a new record or processes a prescription, this agent hashes the data to the Polygon blockchain, ensuring it cannot be secretly altered.',
    chapters: [],
  },
  {
    id: 'outbreak-predictive-agent',
    slug: 'outbreak-predictive-agent',
    title: 'Outbreak Predictive Agent',
    subtitle: 'Public Health Forecasting',
    tagline: 'Live heatmaps and risk scoring',
    location: 'Public Health Cluster',
    status: 'Sold Out',
    statusText: 'WIP · Data Ingestion',
    specs: [
      { label: 'Data Source', value: 'WHO GHO API & disease.sh' },
      { label: 'Model', value: 'Time-series forecasting (ARIMA/TimeGPT)' },
      { label: 'Output', value: 'Geo-heatmaps and alerts' },
    ],
    heroImage: '/uploads/2026/02/montrove-hero.webp',
    thumbnailImage: '/uploads/2026/02/montrove-thumb.webp',
    galleryImages: ['/uploads/2026/02/montrove-1.webp'],
    description:
      'Performs time-series forecasting on public health data to generate regional heatmaps and localized outbreak risk scores, proactively alerting the Orchestrator if a user is in a high-risk zone.',
    chapters: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (p) =>
      p.slug.toLowerCase() === slug.toLowerCase() ||
      p.id.toLowerCase() === slug.toLowerCase() ||
      p.slug.replace('-', '').toLowerCase() === slug.replace('-', '').toLowerCase()
  );
}
