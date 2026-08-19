'use client';

import React, { useState, useEffect } from 'react';

export default function VibrantPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);

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

    // Suppress global site loaders
    const splash = document.getElementById('video-splash');
    if (splash) {
      splash.style.display = 'none';
      splash.classList.add('hide-splash');
    }
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.style.display = 'none';
    }
    document.body.classList.remove('video-splash-active');
    document.documentElement.classList.remove('overflow-hidden');

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh', backgroundColor: '#fdfbf7', overflow: 'hidden', zIndex: 999999, boxSizing: 'border-box' }}>
      <style>{`
        #video-splash, #page-loader, .animated-splash-page, .transition, #mouse, header, .header, #wrap-modals, .logo, .sanjeevani-trigger-pill, .sanjeevani-modal-window {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }

        .vibrant-light-btn {
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          height: 42px !important;
          padding: 0 20px !important;
          border-radius: 9999px !important;
          background-color: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          color: #1e293b !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06) !important;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
          cursor: pointer !important;
          outline: none !important;
        }

        .vibrant-light-btn:hover {
          background-color: #ffffff !important;
          color: #0f172a !important;
          border-color: rgba(0, 0, 0, 0.15) !important;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1) !important;
          transform: translateY(-1px) !important;
        }

        .vibrant-light-btn:active {
          transform: scale(0.96) !important;
        }

        .vibrant-round-btn {
          width: 42px !important;
          height: 42px !important;
          padding: 0 !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background-color: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          color: #1e293b !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06) !important;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
          cursor: pointer !important;
          outline: none !important;
        }

        .vibrant-round-btn:hover {
          background-color: #ffffff !important;
          color: #0f172a !important;
          border-color: rgba(0, 0, 0, 0.15) !important;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1) !important;
          transform: translateY(-1px) !important;
        }

        .vibrant-round-btn:active {
          transform: scale(0.96) !important;
        }
      `}</style>

      {/* Floating Top Navigation (Positioned smoothly next to the built-in round back button) */}
      <nav style={{
        position: 'absolute',
        top: '20px',
        left: '78px',
        right: '24px',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pointerEvents: 'none'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', pointerEvents: 'auto' }}>
          <a
            href="/"
            data-no-swup="true"
            className="vibrant-light-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Home</span>
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', pointerEvents: 'auto' }}>
          <button
            onClick={toggleFullscreen}
            className="vibrant-round-btn"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 14 10 14 10 20"></polyline>
                <polyline points="20 10 14 10 14 4"></polyline>
                <line x1="14" y1="10" x2="21" y2="3"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Pure Interactive 3D Anatomy Canvas */}
      <iframe
        id="sanjeevani-3d-frame"
        src="/vibrant/index.html?v=5"
        title="Sanjeevani 3D Digital Health Twin"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
          display: 'block'
        }}
        allow="accelerometer; autoplay; camera; encrypted-media; gyroscope; microphone"
      />
    </div>
  );
}
