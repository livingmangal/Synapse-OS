'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MockHealthProfile } from '@/data/mockHealthProfiles';
import { getPatientPhotoUrl } from './types';
import { SupportedLanguage } from '../types';
import { SUPPORTED_LANGUAGES } from '../components/SettingsDrawer';
import { getTranslation } from '../translations';
import { 
  ChevronDown, 
  Plus, 
  Phone, 
  Settings, 
  Minimize2, 
  X, 
  Upload, 
  Check,
  Globe,
  Mic,
  MessageCircle
} from 'lucide-react';

interface WorkspaceHeaderProps {
  currentProfile: MockHealthProfile;
  allProfiles: MockHealthProfile[];
  onSelectProfile: (id: string) => void;
  onUploadJsonClick: () => void;
  onNewChat: () => void;
  onOpenWhatsApp: () => void;
  onOpenSettings: () => void;
  onToggleFullscreen: () => void;
  onClose: () => void;
  selectedLanguage?: SupportedLanguage;
  onLanguageChange?: (lang: SupportedLanguage) => void;
  callActive?: boolean;
  isListening?: boolean;
  onToggleVoice?: () => void;
  waConnected?: boolean;
}

export default function WorkspaceHeader({
  currentProfile,
  allProfiles,
  onSelectProfile,
  onUploadJsonClick,
  onNewChat,
  onOpenWhatsApp,
  onOpenSettings,
  onToggleFullscreen,
  onClose,
  selectedLanguage = 'en',
  onLanguageChange = () => {},
  callActive = false,
  isListening = false,
  onToggleVoice = () => {},
  waConnected = false
}: WorkspaceHeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const patientDropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const t = getTranslation(selectedLanguage);
  const patientName = currentProfile?.patient?.name || 'Patient';
  const patientAbha = currentProfile?.patient?.abhaId || 'ABDM-VERIFIED';
  const isMausam = currentProfile?.profileId === 'mausam_kar_verified_abha';

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === selectedLanguage) || SUPPORTED_LANGUAGES[0];

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (patientDropdownRef.current && !patientDropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <header style={{
      height: '60px',
      background: '#ffffff',
      borderBottom: '1.5px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      flexShrink: 0,
      zIndex: 50,
      position: 'relative',
      boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
    }}>
      {/* Left: SynapseOS Brand Identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img 
          src="/synapseos-icon.svg" 
          alt="SynapseOS Logo" 
          style={{ width: '28px', height: '28px', borderRadius: '7px', objectFit: 'contain' }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14.5px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.2px' }}>
            {t.brandTitle}
          </span>
          <span style={{
            fontSize: '9.5px',
            fontWeight: 800,
            padding: '2px 6px',
            borderRadius: '5px',
            background: '#f0fdf4',
            color: '#15803d',
            border: '1px solid #bbf7d0'
          }}>
            {t.clinicalAiBadge}
          </span>
        </div>
      </div>

      {/* Center: Patient Selector Dropdown */}
      <div ref={patientDropdownRef} style={{ position: 'relative' }}>
        <button
          onClick={() => {
            setDropdownOpen(prev => !prev);
            setLangDropdownOpen(false);
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px 4px 6px',
            borderRadius: '20px',
            background: '#ffffff',
            border: '1.2px solid #e2e8f0',
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#0284c7';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(2,132,199,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
          }}
        >
          <img 
            src={getPatientPhotoUrl(currentProfile?.profileId || '')} 
            alt={patientName}
            style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>{patientName}</span>
            <span style={{ fontSize: '10px', color: '#64748b' }}>•</span>
            <span style={{ fontSize: '10.5px', color: '#0284c7', fontWeight: 700 }}>{patientAbha}</span>
          </div>
          <ChevronDown size={13} color="#64748b" />
        </button>

        {dropdownOpen && (
          <div style={{
            position: 'absolute',
            top: '48px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '320px',
            background: '#ffffff',
            borderRadius: '12px',
            border: '1.2px solid #cbd5e1',
            boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
            zIndex: 1000,
            padding: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', padding: '4px 6px', letterSpacing: '0.04em' }}>
              SWITCH PATIENT CONTEXT
            </div>

            {allProfiles.map(p => {
              const isSelected = p.profileId === currentProfile.profileId;
              return (
                <div
                  key={p.profileId}
                  onClick={() => {
                    onSelectProfile(p.profileId);
                    setDropdownOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 8px',
                    borderRadius: '6px',
                    background: isSelected ? '#f0f9ff' : '#ffffff',
                    border: isSelected ? '1px solid #bae6fd' : '1px solid transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img 
                      src={getPatientPhotoUrl(p.profileId)} 
                      alt={p.patient.name} 
                      style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>{p.patient.name}</div>
                      <div style={{ fontSize: '9.5px', color: '#64748b' }}>{p.patient.abhaId}</div>
                    </div>
                  </div>
                  {isSelected && <Check size={13} color="#0284c7" />}
                </div>
              );
            })}

            <div style={{ borderTop: '1px solid #e2e8f0', marginTop: '2px', paddingTop: '4px' }}>
              <button
                onClick={() => {
                  onUploadJsonClick();
                  setDropdownOpen(false);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '6px',
                  borderRadius: '6px',
                  background: '#f8fafc',
                  border: '1px dashed #0284c7',
                  color: '#0284c7',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Upload size={13} />
                <span>{t.uploadJson}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right: Actions, Language Switcher & Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

        {/* ── Multilingual Language Switcher Dropdown ── */}
        <div ref={langDropdownRef} style={{ position: 'relative' }}>
          <button
            onClick={() => {
              setLangDropdownOpen(prev => !prev);
              setDropdownOpen(false);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 10px',
              borderRadius: '8px',
              background: '#f0fdf4',
              border: '1.2px solid #86efac',
              color: '#166534',
              fontSize: '11.5px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            title="Switch Language / भाषा बदलें"
          >
            <span>{currentLangObj.flag}</span>
            <span>{currentLangObj.native}</span>
            <ChevronDown size={12} color="#166534" />
          </button>

          {langDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: '44px',
              right: '0',
              width: '280px',
              background: '#ffffff',
              borderRadius: '12px',
              border: '1.2px solid #cbd5e1',
              boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
              zIndex: 1000,
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              maxHeight: '380px',
              overflowY: 'auto'
            }}>
              <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', padding: '4px 6px', letterSpacing: '0.04em' }}>
                🌐 SELECT LANGUAGE / भाषा चुनें (11 INDIC LANGUAGES)
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                {SUPPORTED_LANGUAGES.map((lang) => {
                  const isSelected = lang.code === selectedLanguage;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 8px',
                        borderRadius: '6px',
                        background: isSelected ? '#ecfdf5' : '#f8fafc',
                        border: isSelected ? '1.2px solid #10b981' : '1px solid #e2e8f0',
                        color: isSelected ? '#047857' : '#1e293b',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <span style={{ fontSize: '13px' }}>{lang.flag}</span>
                      <div style={{ overflow: 'hidden' }}>
                        <div style={{ fontSize: '11px', fontWeight: 800, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                          {lang.native}
                        </div>
                        <div style={{ fontSize: '9px', color: '#64748b' }}>
                          {lang.name}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* ── New Chat Button ── */}
        <button
          onClick={onNewChat}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '6px 12px',
            borderRadius: '8px',
            background: '#0284c7',
            color: '#ffffff',
            border: 'none',
            fontSize: '11.5px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title="Start a new chat consultation"
        >
          <Plus size={13} />
          <span>{t.newChat}</span>
        </button>

        {/* ── Live AI Voice Call Button ── */}
        <button
          onClick={onToggleVoice}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            background: callActive || isListening ? '#fee2e2' : '#f0fdf4',
            border: callActive || isListening ? '1.5px solid #ef4444' : '1px solid #86efac',
            color: callActive || isListening ? '#dc2626' : '#15803d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title={callActive || isListening ? "End Voice Call" : "Start Live AI Voice Consultation"}
        >
          {callActive || isListening ? <Mic size={15} color="#dc2626" /> : <Phone size={14} />}
        </button>

        {/* ── WhatsApp Bridge Button ── */}
        <button
          onClick={onOpenWhatsApp}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            background: waConnected ? '#dcfce7' : '#f1f5f9',
            border: waConnected ? '1px solid #86efac' : '1px solid #cbd5e1',
            color: waConnected ? '#15803d' : '#334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title="WhatsApp Multi-Channel Bridge"
        >
          <MessageCircle size={15} />
        </button>

        {/* ── AI Engine Settings Button ── */}
        <button
          onClick={onOpenSettings}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            background: '#f1f5f9',
            border: '1px solid #cbd5e1',
            color: '#334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title="AI Engine & Model Settings"
        >
          <Settings size={14} />
        </button>

        {/* ── Minimize / Exit Fullscreen ── */}
        <button
          onClick={onToggleFullscreen}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            background: '#f1f5f9',
            border: '1px solid #cbd5e1',
            color: '#334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title="Minimize to Floating Window (Esc)"
        >
          <Minimize2 size={14} />
        </button>

        {/* ── Close Button ── */}
        <button
          onClick={onClose}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            background: '#fee2e2',
            border: '1px solid #fecaca',
            color: '#dc2626',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          title="Close Assistant"
        >
          <X size={15} />
        </button>
      </div>
    </header>
  );
}

