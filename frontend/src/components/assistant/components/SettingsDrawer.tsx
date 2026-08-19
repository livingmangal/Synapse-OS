import React from 'react';
import { ModelChoice, Persona, SupportedLanguage, LanguageOption } from '../types';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', native: 'English', speechCode: 'en-US', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', speechCode: 'hi-IN', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', speechCode: 'bn-IN', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', speechCode: 'ta-IN', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', speechCode: 'te-IN', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', speechCode: 'mr-IN', flag: '🇮🇳' }
];

interface SettingsDrawerProps {
  assistantPersona: Persona;
  onPersonaChange: (p: Persona) => void;
  selectedModel: ModelChoice;
  setSelectedModel: (m: ModelChoice) => void;
  selectedLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  geminiApiKey: string;
  setGeminiApiKey: (key: string) => void;
  showKeyText: boolean;
  setShowKeyText: (val: boolean) => void;
  vapiPublicKey: string;
  setVapiPublicKey: (key: string) => void;
  vapiAssistantId: string;
  setVapiAssistantId: (id: string) => void;
  backendUrl: string;
  setBackendUrl: (url: string) => void;
  onSaveCredentials: (e: React.FormEvent) => void;
  onClearHistory: () => void;
}

export default function SettingsDrawer({
  assistantPersona,
  onPersonaChange,
  selectedModel,
  setSelectedModel,
  selectedLanguage,
  onLanguageChange,
  geminiApiKey,
  setGeminiApiKey,
  showKeyText,
  setShowKeyText,
  vapiPublicKey,
  setVapiPublicKey,
  vapiAssistantId,
  setVapiAssistantId,
  backendUrl,
  setBackendUrl,
  onSaveCredentials,
  onClearHistory
}: SettingsDrawerProps) {
  return (
    <div 
      data-lenis-prevent="true"
      className="sanjeevani-custom-scroll"
      onWheel={(e) => e.stopPropagation()}
      style={{ flex: 1, padding: '18px', overflowY: 'auto', background: 'rgba(255, 255, 255, 0.98)', display: 'flex', flexDirection: 'column', gap: '18px' }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px' }}>⚙️</span>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>AI Copilot Configuration</h3>
          </div>
          <span style={{ fontSize: '10.5px', fontWeight: 600, padding: '2px 8px', borderRadius: '10px', background: '#dcfce7', color: '#15803d' }}>
            🔒 Encrypted
          </span>
        </div>
        <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>
          Configure multilingual language, Google Gemini API, and voice models below.
        </p>
      </div>

      <form onSubmit={onSaveCredentials} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* 1. AGENT SPECIALIZATION */}
        <div style={{ padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
            1. Agent Persona
          </label>
          <div style={{ display: 'flex', gap: '6px' }}>
            {[
              { id: 'copilot', label: '🏥 Copilot' },
              { id: 'triage', label: '🩺 Triage' },
              { id: 'nutrition', label: '🥗 Nutrition' }
            ].map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => onPersonaChange(p.id as Persona)}
                style={{
                  flex: 1,
                  padding: '7px 4px',
                  borderRadius: '10px',
                  border: assistantPersona === p.id ? '1.5px solid #10b981' : '1px solid #cbd5e1',
                  background: assistantPersona === p.id ? '#ffffff' : '#f1f5f9',
                  color: assistantPersona === p.id ? '#065f46' : '#64748b',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. MULTILINGUAL MODEL & LANGUAGE SELECTION */}
        <div style={{ padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              2. Multilingual Output & Voice
            </label>
            <span style={{ fontSize: '10px', color: '#059669', fontWeight: 700 }}>
              {SUPPORTED_LANGUAGES.find(l => l.code === selectedLanguage)?.native || 'English'}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {SUPPORTED_LANGUAGES.map(lang => (
              <button
                key={lang.code}
                type="button"
                onClick={() => onLanguageChange(lang.code)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 10px',
                  borderRadius: '10px',
                  border: selectedLanguage === lang.code ? '1.5px solid #10b981' : '1px solid #e2e8f0',
                  background: selectedLanguage === lang.code ? '#ffffff' : 'transparent',
                  color: selectedLanguage === lang.code ? '#065f46' : '#334155',
                  cursor: 'pointer',
                  boxShadow: selectedLanguage === lang.code ? '0 2px 6px rgba(16, 185, 129, 0.15)' : 'none',
                  transition: 'all 0.15s'
                }}
              >
                <span style={{ fontSize: '14px' }}>{lang.flag}</span>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: selectedLanguage === lang.code ? 700 : 600, lineHeight: 1.2 }}>
                    {lang.native}
                  </div>
                  <div style={{ fontSize: '9.5px', color: '#64748b' }}>
                    {lang.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 3. REASONING ENGINE MODEL */}
        <div style={{ padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
            3. Gemini Reasoning Model
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {[
              { id: 'gemini-1.5-flash', name: '⚡ Gemini 1.5 Flash', badge: 'Fastest Response • Recommended' },
              { id: 'gemini-1.5-pro', name: '🧠 Gemini 1.5 Pro', badge: 'Deep Clinical Diagnostics' },
              { id: 'gemini-2.0-flash', name: '🚀 Gemini 2.0 Flash', badge: 'Next-Gen Multimodal' }
            ].map(m => (
              <div
                key={m.id}
                onClick={() => setSelectedModel(m.id as ModelChoice)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 10px',
                  borderRadius: '10px',
                  border: selectedModel === m.id ? '1.5px solid #10b981' : '1px solid #e2e8f0',
                  background: selectedModel === m.id ? '#ffffff' : 'transparent',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#0f172a' }}>{m.name}</div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>{m.badge}</div>
                </div>
                <input 
                  type="radio" 
                  checked={selectedModel === m.id} 
                  onChange={() => setSelectedModel(m.id as ModelChoice)}
                  style={{ accentColor: '#10b981' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 4. GOOGLE GEMINI API KEY SETUP */}
        <div style={{ padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              4. Google Gemini API Key
            </label>
            <span style={{ fontSize: '10.5px', color: geminiApiKey ? '#15803d' : '#d97706', fontWeight: 600 }}>
              {geminiApiKey ? '● Configured' : '○ Not Configured'}
            </span>
          </div>
          
          <div style={{ position: 'relative', marginTop: '6px' }}>
            <input
              type={showKeyText ? "text" : "password"}
              placeholder="AIzaSy..."
              value={geminiApiKey}
              onChange={(e) => setGeminiApiKey(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 40px 9px 12px',
                borderRadius: '10px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                fontSize: '12px',
                color: '#0f172a',
                outline: 'none'
              }}
            />
            <button
              type="button"
              onClick={() => setShowKeyText(!showKeyText)}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                fontSize: '12px',
                color: '#64748b',
                cursor: 'pointer'
              }}
            >
              {showKeyText ? '🙈' : '👁️'}
            </button>
          </div>

          <div style={{ marginTop: '8px', padding: '8px 10px', borderRadius: '8px', background: '#ecfdf5', border: '1px solid #a7f3d0', fontSize: '11px', color: '#047857', lineHeight: 1.4 }}>
            📖 Get a free key at <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: 600, color: '#065f46' }}>aistudio.google.com/apikey</a>.
          </div>
        </div>

        {/* 5. VAPI VOICE WEBRTC SETUP */}
        <div style={{ padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              5. Vapi Voice Credentials
            </label>
            <span style={{ fontSize: '10.5px', color: vapiPublicKey && vapiAssistantId ? '#15803d' : '#64748b', fontWeight: 600 }}>
              {vapiPublicKey && vapiAssistantId ? '● Live' : '○ Web Speech'}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' }}>
            <input
              type="text"
              placeholder="Vapi Public Key (vapi_pub_...)"
              value={vapiPublicKey}
              onChange={(e) => setVapiPublicKey(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                fontSize: '11.5px',
                color: '#0f172a',
                outline: 'none'
              }}
            />
            <input
              type="text"
              placeholder="Vapi Assistant ID (asst_...)"
              value={vapiAssistantId}
              onChange={(e) => setVapiAssistantId(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                fontSize: '11.5px',
                color: '#0f172a',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* 6. BACKEND URL */}
        <div style={{ padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
            6. FastAPI Swarm URL
          </label>
          <input
            type="text"
            placeholder="http://127.0.0.1:8000"
            value={backendUrl}
            onChange={(e) => setBackendUrl(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 10px',
              borderRadius: '8px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              fontSize: '11.5px',
              color: '#0f172a',
              outline: 'none'
            }}
          />
        </div>

        {/* SAVE BUTTON */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '11px',
            borderRadius: '12px',
            background: '#059669',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '13px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)'
          }}
        >
          Save & Apply Settings
        </button>
      </form>

      <div style={{ paddingTop: '10px', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
        <button
          onClick={onClearHistory}
          style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '11.5px', fontWeight: 600, cursor: 'pointer' }}
        >
          Clear Current Conversation
        </button>
      </div>
    </div>
  );
}
