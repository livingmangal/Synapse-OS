'use client';

import React, { useState, useEffect } from 'react';

export default function MobileNoticeBarrier() {
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const mobileWidth = window.innerWidth <= 860;
      setIsMobile(mobileWidth);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!isMobile) {
    return null;
  }

  return (
    <aside className="synapseos-editorial-barrier" data-lenis-prevent="true">
      <div className="synapseos-editorial-card">
        
        {/* Top Monogram & Meta */}
        <div className="synapseos-editorial-header">
          <div className="synapseos-editorial-brand">
            <span className="synapseos-editorial-dot" />
            <span className="synapseos-editorial-title">SYNAPSEOS OS</span>
          </div>
          <span className="synapseos-editorial-code">SYS / 01</span>
        </div>

        {/* Section Indicator */}
        <div className="synapseos-editorial-tag">
          [ ARCHITECTURE NOTICE ]
        </div>

        {/* Serif Headline */}
        <h1 className="synapseos-editorial-heading">
          Designed for <em>Desktop</em> &amp; Large Displays.
        </h1>

        {/* Narrative Copy */}
        <p className="synapseos-editorial-body">
          SynapseOS utilizes continuous GSAP pinning, real-time multi-agent orchestration, and WebGL biomechanics engineered for wide computer displays.
        </p>

        {/* Specs Architectural List */}
        <div className="synapseos-editorial-specs">
          <div className="synapseos-editorial-spec-row">
            <span className="spec-index">(01)</span>
            <span className="spec-label">Scroll Motion Engine</span>
            <span className="spec-val">GSAP Horizontal</span>
          </div>
          <div className="synapseos-editorial-spec-row">
            <span className="spec-index">(02)</span>
            <span className="spec-label">Clinical Intelligence</span>
            <span className="spec-val">Multi-Agent Swarm</span>
          </div>
          <div className="synapseos-editorial-spec-row">
            <span className="spec-index">(03)</span>
            <span className="spec-label">Mobile Adaptation</span>
            <span className="spec-val">In Development</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="synapseos-editorial-actions">
          <button 
            type="button"
            onClick={handleCopyLink}
            className="synapseos-editorial-btn-primary"
          >
            {copied ? 'URL Copied to Clipboard' : 'Copy Desktop Link'}
          </button>
        </div>

        {/* Hackathon & Team Credits Footer */}
        <footer className="synapseos-editorial-footer">
          <div className="synapseos-editorial-credits">
            Made with pride by <strong>Team ACDC</strong>
          </div>
          <div className="synapseos-editorial-event">
            Smart VIT Hackathon
          </div>
        </footer>

      </div>
    </aside>
  );
}
