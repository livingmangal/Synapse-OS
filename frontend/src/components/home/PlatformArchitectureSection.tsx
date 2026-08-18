import React from 'react';

export function PlatformArchitectureSection() {
  return (
    <div
      className="mod-scroll__text bg-white platform-architecture-section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Elegant Ambient Background Video Merged Seamlessly with Background */}
      <div className="platform-bg-video-wrap" aria-hidden="true">
        <video
          className="platform-bg-video"
          src="/videos/platform_ambient_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="platform-bg-video-overlay" />
      </div>

      <div className="wrapper" style={{ position: 'relative', zIndex: 2 }}>
        <div className="mod-scroll__text__section mod-scroll__section t-parrafo-l f-edit">
          (02) / Platform Architecture
        </div>

        <div className="mod-scroll__text__wrap-text">
          <div className="mod-scroll__text__title t-supertitulo f-regular">
            <div className="mod-scroll__text__title__line line t-title-ls t-upper col-12 align-left t-left">
              Dual modes for
            </div>
            <div className="mod-scroll__text__title__line line t-title-ls t-upper col-12 align-left t-left">
              a shared memory
            </div>
            <div className="mod-scroll__text__title__line line t-title-ls t-upper col-12 align-left t-left">
              and continuous
            </div>
            <div className="mod-scroll__text__title__line line t-title-ls t-upper col-12 align-left t-left">
              clinical care
            </div>
          </div>

          <div className="mod-scroll__text__text f-izmir t-parrafo">
            <p className="mod-scroll__text__lead">
              Use the standard clinician dashboard for routine health tracking, or switch to the voice-driven
              Sanjeevani Assistant for interactive triage.
            </p>
            <p className="mod-scroll__text__sub">
              Both interfaces are synchronized across the same unified vector memory—meaning an intake consultation
              started on WhatsApp is seamlessly continued on the hospital workstation with zero loss of clinical
              context.
            </p>

            <div className="platform-features-grid">
              <div className="platform-feature-item">
                <span className="platform-feature-item__icon">●</span>
                <span className="platform-feature-item__text">Omnichannel Memory Sync</span>
              </div>
              <div className="platform-feature-item">
                <span className="platform-feature-item__icon">●</span>
                <span className="platform-feature-item__text">Voice &amp; Terminal Continuity</span>
              </div>
              <div className="platform-feature-item">
                <span className="platform-feature-item__icon">●</span>
                <span className="platform-feature-item__text">Zero Context Degradation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
