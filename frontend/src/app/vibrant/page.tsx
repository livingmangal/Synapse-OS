'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function VibrantPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(console.error);
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(console.error);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Immediately dismiss any global loaders/splashes
    const splash = document.getElementById('video-splash');
    if (splash) {
      splash.style.display = 'none';
      splash.classList.add('hide-splash');
    }
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.style.display = 'none';
    }
    const trans = document.querySelector('.transition');
    if (trans instanceof HTMLElement) {
      trans.style.display = 'none';
      trans.style.opacity = '0';
    }
    document.body.classList.remove('video-splash-active');
    document.documentElement.classList.remove('overflow-hidden');

    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', backgroundColor: '#eef2f8', overflow: 'hidden', zIndex: 999999, boxSizing: 'border-box' }}>
      {/* Suppress all global site splash screens, loaders, transitions, and mouse followers on 3D Model page */}
      <style>{`
        #video-splash,
        #page-loader,
        .animated-splash-page,
        body > div > header,
        body > header,
        .header.wrapper,
        .header__logo,
        .transition,
        #mouse {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        body, html {
          cursor: auto !important;
          overflow: hidden !important;
        }
      `}</style>

      {/* Top Floating Glass Navigation Bar */}
      <nav
        id="vibrant-top-nav"
        style={{
          position: 'fixed',
          top: '24px',
          left: '92px',
          right: '28px',
          height: '44px',
          zIndex: 2147483647,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pointerEvents: 'none',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', pointerEvents: 'auto', height: '44px' }}>
          <Link
            href="/"
            data-no-swup="true"
            id="vibrant-back-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              height: '44px',
              padding: '0 20px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              color: '#0f172a',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 14px 40px rgba(0, 0, 0, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.88)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)';
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Sanjeevani OS</span>
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', pointerEvents: 'auto', height: '44px' }}>
          <Link
            href="/projects"
            data-no-swup="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              height: '44px',
              padding: '0 20px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              color: '#0f172a',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 14px 40px rgba(0, 0, 0, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.88)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)';
            }}
          >
            All Agents
          </Link>

          <button
            onClick={toggleFullscreen}
            aria-label="Toggle Fullscreen"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              color: '#0f172a',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)';
              e.currentTarget.style.boxShadow = '0 14px 40px rgba(0, 0, 0, 0.16)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.88)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)';
            }}
          >
            {isFullscreen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Embedded High-Performance 3D Experience */}
      <iframe
        id="sanjeevani-3d-frame"
        src="/vibrant/index.html"
        title="Sanjeevani 3D Interactive Body Explorer"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
          display: 'block',
          backgroundColor: 'transparent',
        }}
        allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; microphone"
      />
    </div>
  );
}
