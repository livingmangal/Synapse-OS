import React from 'react';
import { ActiveTab, Persona } from '../types';

interface AssistantHeaderProps {
  persona: Persona;
  activeTab: ActiveTab;
  waConnected: boolean;
  isFullscreen: boolean;
  onTabChange: (tab: ActiveTab) => void;
  onToggleFullscreen: () => void;
  onNewChat: () => void;
  onClose: () => void;
}

export default function AssistantHeader({
  persona,
  activeTab,
  waConnected,
  isFullscreen,
  onTabChange,
  onToggleFullscreen,
  onNewChat,
  onClose
}: AssistantHeaderProps) {
  const getPersonaLabel = () => {
    switch (persona) {
      case 'triage': return '🩺 Triage Specialist';
      case 'nutrition': return '🥗 Metabolic Nutrition';
      default: return '🏥 Clinical Copilot';
    }
  };

  return (
    <div className="sanjeevani-header">
      <div className="sanjeevani-header-inner">
        {/* Logo / Brand */}
        <div className="sanjeevani-header-left">
          <div className="sanjeevani-header-logo">
            <div className="sanjeevani-header-logo-ring" />
            <div className="sanjeevani-header-logo-dot" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
              Sanjeevani AI
            </span>
            <span style={{ fontSize: '11px', color: '#059669', fontWeight: 600 }}>
              {getPersonaLabel()}
            </span>
          </div>
        </div>

        {/* Header Actions Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          
          {/* WhatsApp Bridge Button */}
          <button
            onClick={() => onTabChange(activeTab === 'whatsapp' ? 'chat' : 'whatsapp')}
            className={`sanjeevani-icon-btn ${activeTab === 'whatsapp' ? 'active' : ''}`}
            title="WhatsApp Integration Bridge"
            style={{ position: 'relative' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            {waConnected && (
              <span style={{ position: 'absolute', top: '2px', right: '2px', width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            )}
          </button>

          {/* History Drawer Toggle Button */}
          <button 
            onClick={() => onTabChange(activeTab === 'history' ? 'chat' : 'history')}
            className={`sanjeevani-icon-btn ${activeTab === 'history' ? 'active' : ''}`}
            title="Chat History Sessions"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </button>

          {/* New Chat Button */}
          <button 
            onClick={onNewChat}
            className="sanjeevani-icon-btn"
            title="Start New Chat"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>

          {/* Settings Button */}
          <button
            onClick={() => onTabChange(activeTab === 'settings' ? 'chat' : 'settings')}
            className={`sanjeevani-icon-btn ${activeTab === 'settings' ? 'active' : ''}`}
            title="AI Settings & Personas"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Fullscreen Expand / Minimize Toggle Button */}
          <button
            onClick={onToggleFullscreen}
            className={`sanjeevani-icon-btn ${isFullscreen ? 'active' : ''}`}
            title={isFullscreen ? 'Exit Full Screen (Esc)' : 'Expand to Full Screen'}
            aria-label={isFullscreen ? 'Exit Full Screen' : 'Expand to Full Screen'}
          >
            {isFullscreen ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            )}
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="sanjeevani-icon-btn"
            aria-label="Close Assistant"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
