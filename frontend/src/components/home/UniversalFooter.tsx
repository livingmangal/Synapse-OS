import React from 'react';

export function UniversalFooter() {
  return (
    <footer
      className="sanjeevani-universal-footer relative w-full overflow-hidden"
      style={{
        backgroundColor: '#EDE7DF',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        borderTop: '1px solid #dfd7cc',
      }}
    >
      {/* 1. Integrated Panoramic Landscape Canvas spanning the entire footer container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <img
          src="/images/footer-landscape.jpg"
          alt="Sanjeevani Landscape"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center bottom',
            display: 'block',
          }}
        />

        {/* Soft atmospheric mist overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, #EDE7DF 0%, rgba(237, 231, 223, 0.94) 28%, rgba(237, 231, 223, 0.55) 48%, rgba(237, 231, 223, 0.1) 68%, transparent 100%)',
          }}
        />

        {/* Soft bottom haze behind typography */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '160px',
            background:
              'linear-gradient(to top, rgba(237, 231, 223, 0.65) 0%, rgba(237, 231, 223, 0.15) 60%, transparent 100%)',
          }}
        />
      </div>

      {/* 2. Top Content Grid layered directly on top of the landscape in ONE clean row */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '4.5rem 2rem clamp(6rem, 14vw, 15rem) 2rem',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2.2fr 1fr 1fr 1.3fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Column 1: Brand Information & CTA */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '14px',
                  backgroundColor: '#000',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.15rem', color: '#111', letterSpacing: '-0.02em' }}>
                Sanjeevani
              </span>
            </div>

            <h2
              style={{
                fontSize: '1.85rem',
                fontWeight: 700,
                color: '#111',
                lineHeight: 1.25,
                margin: '0 0 0.75rem 0',
                letterSpacing: '-0.02em',
              }}
            >
              Your smart AI Health Platform
            </h2>

            <p style={{ fontSize: '0.925rem', color: '#524b44', lineHeight: 1.6, maxWidth: '420px', margin: '0 0 1.75rem 0' }}>
              Sanjeevani brings multi-agent triage, medical vision, real-time vitals, and clinical intelligence into
              one beautiful, live ecosystem beside your original clinical workflow.
            </p>

          </div>

          {/* Column 2: Menu */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', margin: '0 0 1.25rem 0', letterSpacing: '-0.01em' }}>
              Menu
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <li>
                <a href="/" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Home
                </a>
              </li>

              <li>
                <a href="/about-us" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', margin: '0 0 1.25rem 0', letterSpacing: '-0.01em' }}>
              Navigation
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <li>
                <a href="mailto:hello@sanjeevani-os.com" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/legal-notice" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Legal notice
                </a>
              </li>
              <li>
                <a href="/cookie-policy" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform Features */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', margin: '0 0 1.25rem 0', letterSpacing: '-0.01em' }}>
              Platform Features
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <li>
                <a href="/orchestrator-agent?tab=swarm" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Multi-Agent Swarm
                </a>
              </li>
              <li>
                <a href="/orchestrator-agent?tab=scan" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Medical Scan AI
                </a>
              </li>
              <li>
                <a href="/orchestrator-agent" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Symptom Triage Agent
                </a>
              </li>
              <li>
                <a href="/vibrant" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  3D Body Explorer
                </a>
              </li>
              <li>
                <a href="/orchestrator-agent?tab=records" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  ABHA &amp; Blockchain
                </a>
              </li>
              <li>
                <a href="/orchestrator-agent?tab=hospital" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  WHO Disease Radar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Soaring Bird Accent in the Valley */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '55%',
          transform: 'translate(-50%, -50%) rotate(-8deg)',
          zIndex: 5,
          pointerEvents: 'none',
          opacity: 0.85,
        }}
      >
        <svg width="44" height="32" viewBox="0 0 54 38" fill="none">
          <path d="M0 14C12 8 20 2 27 18C34 2 42 8 54 14C45 15 36 12 27 26C18 12 9 15 0 14Z" fill="#2d2822" />
        </svg>
      </div>

      {/* 4. Monumental Full-Width Watermark Typography */}
      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          left: 0,
          right: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 10,
          padding: '0 0.5rem',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            fontSize: 'clamp(4.5rem, 16.2vw, 24rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.84,
            color: 'rgba(255, 255, 255, 0.96)',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            width: '100%',
            textShadow: '0 4px 28px rgba(0,0,0,0.16)',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            display: 'block',
          }}
        >
          Sanjeevani
        </span>
      </div>
    </footer>
  );
}
