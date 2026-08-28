import React from 'react';
import { ActiveTab, Persona, SupportedLanguage } from '../types';
import { MOCK_HEALTH_PROFILES, MockHealthProfile, mausamKarProfile } from '@/data/mockHealthProfiles';
import { getTranslation } from '../translations';

interface AssistantHeaderProps {
  persona: Persona;
  activeTab: ActiveTab;
  waConnected: boolean;
  isFullscreen: boolean;
  activeProfileId?: string;
  selectedModel?: string;
  onTabChange: (tab: ActiveTab) => void;
  onToggleFullscreen: () => void;
  onNewChat: () => void;
  onClose: () => void;
  selectedLanguage?: SupportedLanguage;
}

export default function AssistantHeader({
  persona,
  activeTab,
  waConnected,
  isFullscreen,
  activeProfileId = 'mausam_kar_verified_abha',
  selectedModel = 'groq-llama-3.3-70b',
  onTabChange,
  onToggleFullscreen,
  onNewChat,
  onClose,
  selectedLanguage = 'en'
}: AssistantHeaderProps) {
  const currentProfile = MOCK_HEALTH_PROFILES.find(p => p.profileId === activeProfileId) || mausamKarProfile;
  const t = getTranslation(selectedLanguage);

  return (
    <div className="synapseos-header">
      <div className="synapseos-header-inner" style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
        {/* Left: Sanjeevni Logo & Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          <img 
            src="/synapseos-icon.svg" 
            alt="Sanjeevni AI" 
            style={{ width: '28px', height: '28px', borderRadius: '7px', objectFit: 'contain', flexShrink: 0 }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: '14px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.2px' }}>
              {t.brandTitle}
            </span>
            <span style={{
              fontSize: '9.5px',
              fontWeight: 800,
              padding: '1px 5px',
              borderRadius: '4px',
              background: '#f0fdf4',
              color: '#15803d',
              border: '1px solid #bbf7d0'
            }}>
              {t.clinicalAiBadge}
            </span>
          </div>
        </div>

        {/* Header Actions Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
          {/* New Chat Button */}
          <button 
            onClick={onNewChat}
            className="synapseos-icon-btn"
            title={t.newChat}
            style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>

          {/* History Toggle Button */}
          <button 
            onClick={() => onTabChange(activeTab === 'history' ? 'chat' : 'history')}
            className={`synapseos-icon-btn ${activeTab === 'history' ? 'active' : ''}`}
            title="Chat History Sessions"
            style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </button>

          {/* Settings Button */}
          <button
            onClick={() => onTabChange(activeTab === 'settings' ? 'chat' : 'settings')}
            className={`synapseos-icon-btn ${activeTab === 'settings' ? 'active' : ''}`}
            title="AI Settings"
            style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Fullscreen Toggle Button */}
          <button
            onClick={onToggleFullscreen}
            className={`synapseos-icon-btn ${isFullscreen ? 'active' : ''}`}
            title={isFullscreen ? 'Exit Full Screen' : 'Expand to Full Screen'}
            aria-label={isFullscreen ? 'Exit Full Screen' : 'Expand to Full Screen'}
            style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="synapseos-icon-btn"
            aria-label="Close Assistant"
            style={{ width: '28px', height: '28px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
