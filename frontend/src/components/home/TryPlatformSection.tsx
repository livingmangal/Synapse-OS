'use client';

import React from 'react';

export function TryPlatformSection() {
  return (
    <section
      className="try-platform-section wrapper bg-beige c-black relative w-full overflow-hidden"
      id="try-platform"
      style={{
        paddingTop: '4rem',
        paddingBottom: '5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      {/* Top Section Header with exact Website Typography */}
      <div className="mod-title__intro t-center" style={{ marginBottom: '0.75rem' }}>
        <span className="mod-title__anchor" id="" />
        <div className="f-edit t-titulo" style={{ fontSize: '1.15rem', color: '#d84b16' }}>
          (Clinical Proof &amp; Testimonials)
        </div>
      </div>

      <div
        className="f-regular t-titulo-xxl t-title-ls t-upper t-center"
        style={{
          fontSize: 'clamp(2rem, 3.6vw, 3.25rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '0.75rem',
        }}
      >
        TRY THE PLATFORM
      </div>

      <div
        className="mod-content__wrap-text t-center"
        style={{ maxWidth: '660px', margin: '0.5rem auto 2.75rem auto' }}
      >
        <div
          className="mod-content__text f-izmir t-parrafo"
          style={{ color: '#524b44', fontSize: '0.925rem', lineHeight: 1.55 }}
        >
          <p style={{ margin: 0 }}>
            See how leading clinicians, hospitals, and emergency specialists deploy SynapseOS
            multi-agent intelligence to streamline triage, diagnostic imaging, and decentralized care.
          </p>
        </div>
      </div>

      {/* Full Screen 2x5 Grid Layout Container */}
      <div
        style={{
          maxWidth: '1480px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          className="try-platform-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, minmax(220px, 1fr))',
            gap: '14px',
            width: '100%',
          }}
        >
          {/* ================= ROW 1 ================= */}

          {/* 1. BRAND HERO CARD (Terracotta Solid Block) */}
          <div
            style={{
              backgroundColor: '#d84b16',
              borderRadius: '20px',
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '360px',
              boxShadow: '0 8px 24px rgba(216, 75, 22, 0.22)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
          >
            {/* Top Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '7px',
                  backgroundColor: '#ffffff',
                  color: '#d84b16',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '13px',
                }}
              >
                +
              </div>
              <span
                className="f-regular t-upper"
                style={{
                  fontSize: '1.25rem',
                  letterSpacing: '0.04em',
                  color: '#ffffff',
                  lineHeight: 1,
                }}
              >
                synapseos.
              </span>
            </div>

            {/* Giant Rotated / Stacked Bold Typography */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginTop: 'auto',
              }}
            >
              <div
                className="f-regular t-title-ls t-upper"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  fontSize: 'clamp(2.2rem, 2.8vw, 3rem)',
                  lineHeight: 0.9,
                  color: '#ffffff',
                  textAlign: 'left',
                  userSelect: 'none',
                }}
              >
                Real
                <br />
                feedback.
              </div>
            </div>
          </div>

          {/* 2. MEDIA CARD 1 (Surgery Team Image) */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '360px',
              backgroundColor: '#ded7ce',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}
          >
            <img
              src="/images/med-img-1.jpg"
              alt="Clinical Surgery Team"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)',
              }}
            />
            <div
              className="f-edit"
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '14px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                padding: '4px 10px',
                borderRadius: '10px',
                fontSize: '0.725rem',
                color: '#ffffff',
              }}
            >
              Trauma OT 04
            </div>
          </div>

          {/* 3. CLINICAL FEEDBACK CARD 1 (White Card - Amelia) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              color: '#111827',
              borderRadius: '20px',
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '360px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}
          >
            <h3
              className="f-regular t-upper"
              style={{
                fontSize: '1.3rem',
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                margin: '0 0 0.2rem 0',
                color: '#111111',
              }}
            >
              Amelia
            </h3>
            <div
              className="f-edit t-parrafo"
              style={{
                color: '#1e293b',
                marginBottom: '1rem',
                fontWeight: 600,
                fontSize: '0.825rem',
              }}
            >
              (Chief Neurologist)
            </div>

            <div
              className="f-izmir t-parrafo"
              style={{
                color: '#475569',
                lineHeight: 1.5,
                fontSize: '0.825rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <p style={{ margin: 0 }}>
                These multi-agent triage workflows should be a mandatory standard for every trauma
                emergency wing.
              </p>
              <p style={{ margin: 0 }}>
                The scan OCR parsed multi-slice CT findings with zero hallucinations in 3.4 seconds.
                It cuts diagnostic latency down by more than 60% during critical golden hour cases.
              </p>
            </div>
          </div>

          {/* 4. MEDIA CARD 2 (Clinical Device / Telehealth) */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '360px',
              backgroundColor: '#ded7ce',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}
          >
            <img
              src="/images/med-img-7.jpg"
              alt="Physician Mobile Triage"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)',
              }}
            />
            <div
              className="f-edit"
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '14px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                padding: '4px 10px',
                borderRadius: '10px',
                fontSize: '0.725rem',
                color: '#ffffff',
              }}
            >
              Live Telemetry
            </div>
          </div>

          {/* 5. CLINICAL FEEDBACK CARD 2 (White Card - Ham) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              color: '#111827',
              borderRadius: '20px',
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '360px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}
          >
            <h3
              className="f-regular t-upper"
              style={{
                fontSize: '1.3rem',
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                margin: '0 0 0.25rem 0',
                color: '#111111',
              }}
            >
              Hamza
            </h3>
            <div
              className="f-edit t-parrafo"
              style={{
                color: '#1e293b',
                marginBottom: '1rem',
                fontWeight: 600,
                fontSize: '0.825rem',
              }}
            >
              (Lead Intensivist &amp; ER)
            </div>

            <div
              className="f-izmir t-parrafo"
              style={{
                color: '#475569',
                lineHeight: 1.5,
                fontSize: '0.825rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <p style={{ margin: 0 }}>
                I used to spend 45 minutes per shift reconciling intake vitals and telemetry from
                disparate EHR systems. SynapseOS aggregates multimodal streams instantaneously.
              </p>
              <p style={{ margin: 0 }}>
                The verifiable ledger ensures every triage decision and diagnostic prescription is
                cryptographically audited on Polygon with zero patient privacy leaks ;)
              </p>
            </div>
          </div>

          {/* ================= ROW 2 (ALTERNATING STAGGERED PATTERN) ================= */}

          {/* 6. MEDIA CARD 3 (Row 2, Col 1) */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '360px',
              backgroundColor: '#ded7ce',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}
          >
            <img
              src="/images/med-img-4.jpg"
              alt="Clinical Procedure & Vaccine Delivery"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)',
              }}
            />
          </div>

          {/* 7. CLINICAL FEEDBACK CARD 3 (Row 2, Col 2 - Dior) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              color: '#111827',
              borderRadius: '20px',
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '360px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}
          >
            <h3
              className="f-regular t-upper"
              style={{
                fontSize: '1.3rem',
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                margin: '0 0 0.25rem 0',
                color: '#111111',
              }}
            >
              Diora
            </h3>
            <div
              className="f-edit t-parrafo"
              style={{
                color: '#1e293b',
                marginBottom: '1rem',
                fontWeight: 600,
                fontSize: '0.825rem',
              }}
            >
              (Pediatric Pulmonology)
            </div>

            <div
              className="f-izmir t-parrafo"
              style={{
                color: '#475569',
                lineHeight: 1.5,
                fontSize: '0.825rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <p style={{ margin: 0 }}>
                The conversational triage assistant conducts multi-lingual symptom intake with
                empathetic, high-accuracy clinical rigor that our hospital hadn't seen in four years.
              </p>
              <p style={{ margin: 0 }}>
                Parents feel heard, and pediatricians receive structured FHIR summaries the second
                the patient enters triage.
              </p>
            </div>
          </div>

          {/* 8. MEDIA CARD 4 (Row 2, Col 3 - Operating Theater & Social Tag) */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '360px',
              backgroundColor: '#ded7ce',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}
          >
            <img
              src="/images/med-img-5.jpg"
              alt="Advanced Surgical Theater"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 45%)',
              }}
            />
            {/* Instagram / Clinical Badge */}
            <div
              className="f-edit"
              style={{
                position: 'absolute',
                bottom: '14px',
                left: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.725rem',
                letterSpacing: '0.02em',
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>@synapseos_clinical</span>
            </div>
          </div>

          {/* 9. CLINICAL FEEDBACK CARD 4 (Row 2, Col 4 - Sylo) */}
          <div
            style={{
              backgroundColor: '#ffffff',
              color: '#111827',
              borderRadius: '20px',
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '360px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.04)',
            }}
          >
            <h3
              className="f-regular t-upper"
              style={{
                fontSize: '1.3rem',
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                margin: '0 0 0.25rem 0',
                color: '#111111',
              }}
            >
              Sylo
            </h3>
            <div
              className="f-edit t-parrafo"
              style={{
                color: '#1e293b',
                marginBottom: '1rem',
                fontWeight: 600,
                fontSize: '0.825rem',
              }}
            >
              (Director, Telehealth Network)
            </div>

            <div
              className="f-izmir t-parrafo"
              style={{
                color: '#475569',
                lineHeight: 1.5,
                fontSize: '0.825rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <p style={{ margin: 0 }}>
                Our clinicians absolutely love SynapseOS! As soon as an intake begins on WhatsApp
                or SIP telephony, the Orchestrator delegates tasks seamlessly to scan and triage
                agents.
              </p>
              <p style={{ margin: 0 }}>
                They're clearly one of our favorite tools. I love knowing we give clinicians a
                system that genuinely boosts diagnostic wellbeing. Definitely a staple in our
                network!
              </p>
            </div>
          </div>

          {/* 10. MEDIA CARD 5 (Row 2, Col 5) */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '360px',
              backgroundColor: '#ded7ce',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
            }}
          >
            <img
              src="/images/med-img-3.jpg"
              alt="Senior Physician with Stethoscope"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Global CSS for responsiveness */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 1280px) {
              .try-platform-grid {
                grid-template-columns: repeat(3, 1fr) !important;
              }
            }
            @media (max-width: 820px) {
              .try-platform-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (max-width: 540px) {
              .try-platform-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `,
        }}
      />
    </section>
  );
}
