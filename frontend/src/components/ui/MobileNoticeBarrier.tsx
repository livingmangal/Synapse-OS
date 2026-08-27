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
    <aside className="sanjeevani-editorial-barrier" data-lenis-prevent="true">
      <div className="sanjeevani-editorial-card">
        
        {/* Top Monogram & Meta */}
        <div className="sanjeevani-editorial-header">
          <div className="sanjeevani-editorial-brand">
            <span className="sanjeevani-editorial-dot" />
            <span className="sanjeevani-editorial-title">SANJEEVANI OS</span>
          </div>
          <span className="sanjeevani-editorial-code">SYS / 01</span>
        </div>

        {/* Section Indicator */}
        <div className="sanjeevani-editorial-tag">
          [ ARCHITECTURE NOTICE ]
        </div>

        {/* Serif Headline */}
        <h1 className="sanjeevani-editorial-heading">
          Designed for <em>Desktop</em> &amp; Large Displays.
        </h1>

        {/* Narrative Copy */}
        <p className="sanjeevani-editorial-body">
          Sanjeevani OS utilizes continuous GSAP pinning, real-time multi-agent orchestration, and WebGL biomechanics engineered for wide computer displays.
        </p>

        {/* Specs Architectural List */}
        <div className="sanjeevani-editorial-specs">
          <div className="sanjeevani-editorial-spec-row">
            <span className="spec-index">(01)</span>
            <span className="spec-label">Scroll Motion Engine</span>
            <span className="spec-val">GSAP Horizontal</span>
          </div>
          <div className="sanjeevani-editorial-spec-row">
            <span className="spec-index">(02)</span>
            <span className="spec-label">Clinical Intelligence</span>
            <span className="spec-val">Multi-Agent Swarm</span>
          </div>
          <div className="sanjeevani-editorial-spec-row">
            <span className="spec-index">(03)</span>
            <span className="spec-label">Mobile Adaptation</span>
            <span className="spec-val">In Development</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="sanjeevani-editorial-actions">
          <button 
            type="button"
            onClick={handleCopyLink}
            className="sanjeevani-editorial-btn-primary"
          >
            {copied ? 'URL Copied to Clipboard' : 'Copy Desktop Link'}
          </button>
        </div>

        {/* Hackathon & Team Credits Footer */}
        <footer className="sanjeevani-editorial-footer">
          <div className="sanjeevani-editorial-credits">
            Made with pride by <strong>Team ACDC</strong>
          </div>
          <div className="sanjeevani-editorial-event">
            Smart VIT Hackathon
          </div>
        </footer>

      </div>
    </aside>
  );
}
