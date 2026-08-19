import React from 'react';
import { ModelChoice, Persona } from '../types';

interface SettingsDrawerProps {
  assistantPersona: Persona;
  onPersonaChange: (p: Persona) => void;
  selectedModel: ModelChoice;
  setSelectedModel: (m: ModelChoice) => void;
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
          Configure your Google Gemini API key or Vapi WebRTC credentials below.
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
              { id: 'copilot', label: '🏥 General Copilot' },
              { id: 'triage', label: '🩺 Clinical Triage' },
              { id: 'nutrition', label: '🥗 Nutritionist' }
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

        {/* 2. REASONING ENGINE MODEL */}
        <div style={{ padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
            2. Gemini Reasoning Model
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

        {/* 3. GOOGLE GEMINI API KEY SETUP */}
        <div style={{ padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              3. Google Gemini API Key
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

        {/* 4. VAPI VOICE WEBRTC SETUP */}
        <div style={{ padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              4. Vapi Voice Credentials
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

        {/* 5. BACKEND URL */}
        <div style={{ padding: '12px', borderRadius: '14px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
            5. FastAPI Swarm URL
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
