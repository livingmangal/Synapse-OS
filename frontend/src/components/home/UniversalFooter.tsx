import React from 'react';

export function UniversalFooter() {
  return (
    <footer
      className="sanjeevani-universal-footer relative w-full overflow-hidden"
      style={{
        backgroundColor: '#EDE7DF',
        minHeight: '780px',
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
          padding: '4.5rem 2rem 14rem 2rem',
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

            <div style={{ marginBottom: '2rem' }}>
              <a
                href="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '16px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                  transition: 'transform 0.15s ease',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 170 170" fill="currentColor">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.7-7.79-12.01-14.24-5.64-8.47-10.1-18.43-13.38-29.87-3.28-11.44-4.92-22.38-4.92-32.81 0-14.97 3.82-27.32 11.46-37.04 7.64-9.73 17.15-14.73 28.53-15.01 4.8 0 10.15 1.25 16.06 3.76 5.91 2.51 9.77 3.84 11.58 3.99 1.45-.15 5.48-1.52 12.09-4.11 6.61-2.59 12.05-3.74 16.32-3.46 12.78.69 22.82 5.15 30.12 13.39-11.05 6.72-16.44 15.93-16.18 27.63.26 9.38 3.91 17.27 10.95 23.66 4.3 3.92 9.36 6.77 15.18 8.55-2.28 6.66-4.93 13.07-7.96 19.23zM119.22 33.39c0-6.72 2.45-13.05 7.35-18 4.9-4.95 10.87-7.78 17.91-8.49.12 1.01.18 1.93.18 2.76 0 6.64-2.58 13.06-7.74 18.25-5.16 5.19-11.3 8.09-18.42 8.7-.24-.9-.38-1.72-.38-2.45z" />
                </svg>
                <span>Download for macOS</span>
              </a>
            </div>

            <div style={{ fontSize: '0.8rem', color: '#6e6760' }}>
              <p style={{ margin: '0 0 0.35rem 0' }}>© 2026 Sanjeevani OS - All rights reserved</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span>Built with 💙 by</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: '#111' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#000',
                      color: '#fff',
                      fontSize: '9px',
                      fontWeight: 700,
                    }}
                  >
                    S
                  </span>
                  <span>Sanjeevani Team</span>
                </div>
              </div>
            </div>
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
                <a href="/projects" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Features
                </a>
              </li>
              <li>
                <a href="/about-us" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="/projects" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Updates
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
                <a href="/projects" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Roadmap
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
              <li>
                <a href="/orchestrator-agent" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Customer portal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: More products */}
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111', margin: '0 0 1.25rem 0', letterSpacing: '-0.01em' }}>
              More products
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <li>
                <a href="/projects/orchestrator-agent" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Orchestrator Agent
                </a>
              </li>
              <li>
                <a href="/projects/medical-scan-agent" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Medical Scan AI
                </a>
              </li>
              <li>
                <a href="/projects/symptom-triage-agent" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  Symptom Triage Agent
                </a>
              </li>
              <li>
                <a href="/vibrant" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  3D Body Explorer
                </a>
              </li>
              <li>
                <a href="/projects" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  LiveKit Voice Hub
                </a>
              </li>
              <li>
                <a href="/projects" style={{ color: '#4a443d', textDecoration: 'none', fontWeight: 500 }}>
                  FHIR Health Vault
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
