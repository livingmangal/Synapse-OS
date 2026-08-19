import React from 'react';

export function AgenticStackDiagramSection() {
  return (
    <div className="mod-scroll__terms follow__wrap bg-dark-agentic">
      {/* Left Column: Light Aqua Blue Rounded Container Card */}
      <div className="livekit-hero-content">
        <div className="livekit-aqua-container">
          <div className="livekit-kicker">
            <span className="livekit-kicker-dot" />
            DEVELOPER PLATFORM
          </div>

          <h2 className="livekit-title">
            The <span className="accent-cyan">complete</span> stack for
            <br />
            Clinical AI
          </h2>

          <div className="livekit-feature-list">
            {/* Item 1: Framework */}
            <div className="livekit-feature-item" data-pillar="clinical">
              <div className="livekit-feature-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span>Open source multi-agent framework to build and test clinical workflows</span>
            </div>

            {/* Item 2: Inference Gateway */}
            <div className="livekit-feature-item" data-pillar="clinical">
              <div className="livekit-feature-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <span>Inference gateway to access OCR, Diagnostic LLM, and STT models</span>
            </div>

            {/* Item 3: Cloud & Privacy */}
            <div className="livekit-feature-item" data-pillar="private">
              <div className="livekit-feature-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
                </svg>
              </div>
              <span>Polygon zkPoS testnet and IPFS encrypted health record vault</span>
            </div>

            {/* Item 4: Telephony & Channels */}
            <div className="livekit-feature-item" data-pillar="clinical">
              <div className="livekit-feature-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span>WhatsApp, Telegram, SIP telephony, and real-time WebRTC audio streams</span>
            </div>

            {/* Item 5: Observability & Forecasting */}
            <div className="livekit-feature-item" data-pillar="predictive">
              <div className="livekit-feature-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <span>Full-stack spatio-temporal GNN disease mapping and epidemic forecasts</span>
            </div>
          </div>

          <a href="#agents" className="livekit-cta-btn">
            <span>Explore the Sanjeevani Platform</span>
            <span className="livekit-cta-arrow">→</span>
          </a>
        </div>
      </div>

      {/* Right Column: LiveKit-Style Isometric Agentic Network Diagram */}
      <div className="agentic-terms-diagram">
        <div className="isometric-stage">
          {/* 1. Background Isometric Mesh Grid */}
          <img src="/images/home/hero-grid.svg" className="isometric-grid-bg" alt="Isometric Grid" />

          {/* 2. Smooth SVG Animated Circuit Lines & Laser Shimmer */}
          <svg className="isometric-circuit-svg" viewBox="0 0 1580 1095" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="laser-cyan-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="40%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="70%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="90%" stopColor="#10b981" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
              <filter id="laser-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Wire 1: User / Inputs -> Sanjeevani Cloud */}
            <path d="M600,328 L994,329" className="circuit-wire-base" />
            <path
              d="M600,328 L994,329"
              stroke="url(#laser-cyan-pulse)"
              className="circuit-wire-pulse circuit-pulse-beam"
              filter="url(#laser-glow)"
            />
            <circle r="3" fill="#22d3ee" filter="url(#laser-glow)">
              <animateMotion dur="3s" repeatCount="indefinite" path="M600,328 L994,329" />
            </circle>

            {/* Wire 2: Sanjeevani Cloud -> Patient Output */}
            <path d="M994,321 L600,322" className="circuit-wire-base" />
            <path
              d="M994,321 L600,322"
              stroke="url(#laser-cyan-pulse)"
              className="circuit-wire-pulse circuit-pulse-beam"
              style={{ animationDelay: '1.5s' }}
              filter="url(#laser-glow)"
            />
            <circle r="3" fill="#10b981" filter="url(#laser-glow)">
              <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M994,321 L600,322" />
            </circle>

            {/* Wire 3: Cloud -> STT / OCR Gateway */}
            <path
              d="M1020,350 L1020,477 Q1020,485 1012,485 L773,485 Q765,485 765,493 L765,520"
              className="circuit-wire-base circuit-clinical"
            />
            <path
              d="M1020,350 L1020,477 Q1020,485 1012,485 L773,485 Q765,485 765,493 L765,520"
              stroke="url(#laser-cyan-pulse)"
              className="circuit-wire-pulse circuit-pulse-beam"
              style={{ animationDelay: '0.5s' }}
              filter="url(#laser-glow)"
            />
            <circle r="3" fill="#22d3ee" filter="url(#laser-glow)">
              <animateMotion
                dur="3.5s"
                begin="0.5s"
                repeatCount="indefinite"
                path="M1020,350 L1020,477 Q1020,485 1012,485 L773,485 Q765,485 765,493 L765,520"
              />
            </circle>

            {/* Wire 4: STT / OCR -> Triage Turn Detection */}
            <path
              d="M760,550 L760,629.5 Q760,630 760.5,630 L760.5,630 Q761,630 761,630.5 L761,690"
              className="circuit-wire-base circuit-clinical"
            />
            <path
              d="M760,550 L760,629.5 Q760,630 760.5,630 L760.5,630 Q761,630 761,630.5 L761,690"
              stroke="url(#laser-cyan-pulse)"
              className="circuit-wire-pulse circuit-pulse-beam"
              style={{ animationDelay: '1.2s' }}
              filter="url(#laser-glow)"
            />
            <circle r="3" fill="#22d3ee" filter="url(#laser-glow)">
              <animateMotion
                dur="3s"
                begin="1.2s"
                repeatCount="indefinite"
                path="M760,550 L760,629.5 Q760,630 760.5,630 L760.5,630 Q761,630 761,630.5 L761,690"
              />
            </circle>

            {/* Wire 5: LLM Swarm -> Medical Business Logic */}
            <path d="M765,685 L940,686" className="circuit-wire-base circuit-clinical" />
            <path
              d="M765,685 L940,686"
              stroke="url(#laser-cyan-pulse)"
              className="circuit-wire-pulse circuit-pulse-beam"
              style={{ animationDelay: '1.8s' }}
              filter="url(#laser-glow)"
            />
            <circle r="3" fill="#34d399" filter="url(#laser-glow)">
              <animateMotion dur="2.5s" begin="1.8s" repeatCount="indefinite" path="M765,685 L940,686" />
            </circle>

            {/* Wire 6: Business Logic -> Decentralized Ledger Server */}
            <path
              d="M1020,700 L1020.94,817 Q1021,825 1013,825 L950,825"
              className="circuit-wire-base circuit-private"
            />
            <path
              d="M1020,700 L1020.94,817 Q1021,825 1013,825 L950,825"
              stroke="url(#laser-cyan-pulse)"
              className="circuit-wire-pulse circuit-pulse-beam"
              style={{ animationDelay: '2.2s' }}
              filter="url(#laser-glow)"
            />
            <circle r="3" fill="#38bdf8" filter="url(#laser-glow)">
              <animateMotion
                dur="3s"
                begin="2.2s"
                repeatCount="indefinite"
                path="M1020,700 L1020.94,817 Q1021,825 1013,825 L950,825"
              />
            </circle>

            {/* Wire 7: Business Logic -> Clinical TTS */}
            <path
              d="M1025,625 L1025,608 Q1025,600 1025.16,592 L1026,550"
              className="circuit-wire-base"
            />
            <path
              d="M1025,625 L1025,608 Q1025,600 1025.16,592 L1026,550"
              stroke="url(#laser-cyan-pulse)"
              className="circuit-wire-pulse circuit-pulse-beam"
              style={{ animationDelay: '2.5s' }}
              filter="url(#laser-glow)"
            />

            {/* Wire 8: TTS -> Cloud Gateway */}
            <path d="M1030,550 L1028,350" className="circuit-wire-base" />
            <path
              d="M1030,550 L1028,350"
              stroke="url(#laser-cyan-pulse)"
              className="circuit-wire-pulse circuit-pulse-beam"
              style={{ animationDelay: '2.8s' }}
              filter="url(#laser-glow)"
            />
            <circle r="3" fill="#22d3ee" filter="url(#laser-glow)">
              <animateMotion dur="2.5s" begin="2.8s" repeatCount="indefinite" path="M1030,550 L1028,350" />
            </circle>
          </svg>

          {/* 3. Agents Framework Cluster Enclave (Glass Box) */}
          <div className="framework-enclave-box node-clinical">
            <div className="framework-enclave-header">
              <a href="#agents" className="framework-enclave-title">
                <span>Sanjeevani Agents Swarm</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>

          {/* 4. User Patient Node */}
          <div
            className="iso-tile"
            style={{ top: '297px', left: 'calc(50% - 89px)', width: '48px', height: '48px' }}
            title="Patient / User Ingestion"
          >
            <div className="iso-tile-brackets">
              <span className="iso-bracket iso-bracket-tl" />
              <span className="iso-bracket iso-bracket-tr" />
              <span className="iso-bracket iso-bracket-br" />
              <span className="iso-bracket iso-bracket-bl" />
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f8fafc"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <div className="iso-tile-tooltip">Patient Ingestion</div>
          </div>

          {/* 5. I/O Multimodal Ingestion Stack */}
          <div
            className="iso-tile-stack"
            style={{ top: '289px', left: 'calc(50% + 17px)', width: '48px', height: '48px' }}
          >
            <div className="iso-tile-badge">I/O</div>
            {/* Stack Item 1: Mic */}
            <div className="iso-tile-stack-item focused" title="Microphone">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            </div>
            {/* Stack Item 2: Prescription Camera */}
            <div className="iso-tile-stack-item on-deck" title="RX Camera">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.8">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            {/* Stack Item 3: Medical Scans */}
            <div className="iso-tile-stack-item exit" title="Scans">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10v10H7z" />
                <path d="M12 7v10M7 12h10" />
              </svg>
            </div>
            {/* Stack Item 4: Telehealth SIP */}
            <div className="iso-tile-stack-item exit2" title="Telehealth">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
          </div>

          {/* 6. Client SDKs Stack */}
          <div
            className="iso-tile-stack"
            style={{ top: '290px', left: 'calc(50% + 118px)', width: '48px', height: '48px' }}
          >
            <div className="iso-tile-badge">SDKs</div>
            <div className="iso-tile-stack-item focused" title="Swift iOS">
              <img src="/logos/square/swift.svg" width="22" height="22" alt="Swift" />
            </div>
            <div className="iso-tile-stack-item on-deck" title="Flutter">
              <img src="/logos/square/flutter.svg" width="22" height="22" alt="Flutter" />
            </div>
            <div className="iso-tile-stack-item exit" title="React Native">
              <img src="/logos/square/react-native.svg" width="22" height="22" alt="React" />
            </div>
            <div className="iso-tile-stack-item exit2" title="Python">
              <img src="/logos/square/python.svg" width="22" height="22" alt="Python" />
            </div>
          </div>

          {/* 7. Protocol Chips */}
          <div
            className="iso-tile"
            style={{ top: '314px', left: 'calc(50% + 180px)', padding: '0.35rem 0.8rem', height: 'auto' }}
          >
            <span style={{ fontFamily: 'var(--f-mono, monospace)', fontSize: '0.65rem', color: '#22d3ee' }}>
              WebRTC 32ms
            </span>
          </div>
          <div
            className="iso-tile"
            style={{ top: '735px', left: 'calc(50% + 320px)', padding: '0.35rem 0.8rem', height: 'auto' }}
          >
            <span style={{ fontFamily: 'var(--f-mono, monospace)', fontSize: '0.65rem', color: '#cbd5e1' }}>
              HTTP / gRPC Stream
            </span>
          </div>

          {/* 8. Clinical Entity Extraction & Normalizer Pill */}
          <div
            className="iso-tile node-clinical"
            style={{ top: '470px', left: 'calc(50% + 160px)', padding: '0.4rem 0.9rem', height: 'auto', gap: '0.5rem' }}
          >
            <div className="iso-waveform-pulse">
              <span className="iso-wave-bar" />
              <span className="iso-wave-bar" />
              <span className="iso-wave-bar" />
              <span className="iso-wave-bar" />
              <span className="iso-wave-bar" />
            </div>
            <span style={{ fontFamily: 'var(--f-mono, monospace)', fontSize: '0.68rem', color: '#e2e8f0' }}>
              Clinical Normalizer
            </span>
          </div>

          {/* 9. Semantic Turn Detection & Triage Router Pill */}
          <div
            className="iso-tile node-clinical"
            style={{ top: '600px', left: 'calc(50% + 30px)', padding: '0.4rem 0.9rem', height: 'auto', gap: '0.5rem' }}
          >
            <svg className="iso-radar-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
            </svg>
            <span style={{ fontFamily: 'var(--f-mono, monospace)', fontSize: '0.68rem', color: '#e2e8f0' }}>
              Triage Router &amp; Turn Detection
            </span>
          </div>

          {/* 10. STT / Multimodal OCR Stack */}
          <div
            className="iso-tile-stack node-clinical"
            style={{ top: '520px', left: 'calc(50% + 100px)', width: '48px', height: '48px' }}
          >
            <div className="iso-tile-badge">STT / OCR</div>
            <div className="iso-tile-stack-item focused" title="Deepgram">
              <img src="/logos/square/deepgram.svg" width="24" height="24" alt="Deepgram" />
            </div>
            <div className="iso-tile-stack-item on-deck" title="OpenAI Whisper">
              <img src="/logos/square/open-ai.svg" width="24" height="24" alt="OpenAI" />
            </div>
            <div className="iso-tile-stack-item exit" title="Groq">
              <img src="/logos/square/groq.svg" width="24" height="24" alt="Groq" />
            </div>
            <div className="iso-tile-stack-item exit2" title="Google Vision">
              <img src="/logos/square/google.svg" width="24" height="24" alt="Google" />
            </div>
          </div>

          {/* 11. Diagnostic LLM Swarm Stack */}
          <div
            className="iso-tile-stack node-clinical"
            style={{ top: '660px', left: 'calc(50% + 100px)', width: '48px', height: '48px' }}
          >
            <div className="iso-tile-badge">LLM Swarm</div>
            <div className="iso-tile-stack-item focused" title="OpenAI GPT-4o">
              <img src="/logos/square/open-ai.svg" width="24" height="24" alt="OpenAI" />
            </div>
            <div className="iso-tile-stack-item on-deck" title="Google Gemini">
              <img src="/logos/square/google.svg" width="24" height="24" alt="Google" />
            </div>
            <div className="iso-tile-stack-item exit" title="Cerebras Llama">
              <img src="/logos/square/cerebras.svg" width="24" height="24" alt="Cerebras" />
            </div>
            <div className="iso-tile-stack-item exit2" title="Perplexity">
              <img src="/logos/square/perplexity.svg" width="24" height="24" alt="Perplexity" />
            </div>
          </div>

          {/* 12. Medical Custom Business Logic Tile (SVG Chip) */}
          <div
            className="iso-tile node-clinical"
            style={{
              top: '600px',
              left: 'calc(50% + 300px)',
              width: '149px',
              height: '115px',
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
            }}
          >
            <img
              src="/images/home/tile-business-logic.svg"
              alt="Sanjeevani Business Logic"
              style={{ width: '149px', height: '115px', filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.25))' }}
            />
          </div>

          {/* 13. Clinical TTS Stack */}
          <div
            className="iso-tile-stack node-clinical"
            style={{ top: '520px', left: 'calc(50% + 365px)', width: '48px', height: '48px' }}
          >
            <div className="iso-tile-badge">TTS</div>
            <div className="iso-tile-stack-item focused" title="Cartesia">
              <img src="/logos/square/cartesia.svg" width="24" height="24" alt="Cartesia" />
            </div>
            <div className="iso-tile-stack-item on-deck" title="ElevenLabs">
              <img src="/logos/square/elevenlabs.svg" width="24" height="24" alt="ElevenLabs" />
            </div>
            <div className="iso-tile-stack-item exit" title="Deepgram">
              <img src="/logos/square/deepgram.svg" width="24" height="24" alt="Deepgram" />
            </div>
            <div className="iso-tile-stack-item exit2" title="Groq">
              <img src="/logos/square/groq.svg" width="24" height="24" alt="Groq" />
            </div>
          </div>

          {/* 14. Decentralized Server / Polygon Ledger Node */}
          <div
            className="iso-tile node-private node-predictive"
            style={{ top: '792px', left: 'calc(50% + 258px)', width: '50px', height: '50px' }}
            title="Polygon Ledger & IPFS Vault"
          >
            <div className="iso-tile-brackets">
              <span className="iso-bracket iso-bracket-tl" />
              <span className="iso-bracket iso-bracket-tr" />
              <span className="iso-bracket iso-bracket-br" />
              <span className="iso-bracket iso-bracket-bl" />
            </div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8">
              <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
              <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
              <line x1="6" x2="6.01" y1="6" y2="6" />
              <line x1="6" x2="6.01" y1="18" y2="18" />
            </svg>
            <div className="iso-tile-tooltip">Polygon PoS &amp; IPFS</div>
          </div>

          {/* 15. Sanjeevani Cloud & World Telemetry Node */}
          <div className="cloud-telemetry-node node-predictive node-private">
            <div className="telemetry-map-layer" />
            <div className="cloud-server-pill">
              <span className="cloud-server-pill-dot" />
              <span>Media Stream Engine</span>
            </div>
            <div className="cloud-server-pill">
              <span
                className="cloud-server-pill-dot"
                style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }}
              />
              <span>Agent Swarm Orchestrator</span>
            </div>
            <div className="iso-tile-badge" style={{ top: '-2px', left: '10px' }}>
              Sanjeevani Cloud
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
