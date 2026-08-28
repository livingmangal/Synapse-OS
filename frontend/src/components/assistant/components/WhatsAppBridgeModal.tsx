import React from 'react';

interface WhatsAppBridgeModalProps {
  waPhoneNumber: string;
  setWaPhoneNumber: (val: string) => void;
  waConnected: boolean;
  waMetaToken: string;
  setWaMetaToken: (val: string) => void;
  waWebhookUrl: string;
  setWaWebhookUrl: (val: string) => void;
  waAutoSyncReports: boolean;
  setWaAutoSyncReports: (val: boolean) => void;
  waDailyReminders: boolean;
  setWaDailyReminders: (val: boolean) => void;
  onSaveWhatsApp: (e: React.FormEvent) => void;
  onSimulateInbound: () => void;
}

export default function WhatsAppBridgeModal({
  waPhoneNumber,
  setWaPhoneNumber,
  waConnected,
  waMetaToken,
  setWaMetaToken,
  waWebhookUrl,
  setWaWebhookUrl,
  waAutoSyncReports,
  setWaAutoSyncReports,
  waDailyReminders,
  setWaDailyReminders,
  onSaveWhatsApp,
  onSimulateInbound
}: WhatsAppBridgeModalProps) {
  return (
    <div 
      data-lenis-prevent="true"
      className="synapseos-custom-scroll"
      onWheel={(e) => e.stopPropagation()}
      style={{ flex: 1, padding: '18px', overflowY: 'auto', background: 'rgba(255, 255, 255, 0.98)', display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>📱</span>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>WhatsApp Multi-Channel Bridge</h3>
          </div>
          <span style={{ fontSize: '10.5px', fontWeight: 600, padding: '2px 8px', borderRadius: '10px', background: waConnected ? '#dcfce7' : '#f1f5f9', color: waConnected ? '#15803d' : '#64748b' }}>
            {waConnected ? '● WhatsApp Connected' : '○ Offline'}
          </span>
        </div>
        <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>
          Connect your WhatsApp to snap prescription photos, receive vital alerts, and consult SynapseOS AI on the go.
        </p>
      </div>

      {/* QR Code & Direct Chat Banner */}
      <div style={{ padding: '14px', borderRadius: '16px', background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)', border: '1px solid #a7f3d0', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: '#ffffff', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px', flexShrink: 0 }}>
          {/* Simulated QR Code SVG */}
          <svg viewBox="0 0 24 24" width="54" height="54" fill="#065f46">
            <path d="M2 2h8v8H2zM4 4v4h4V4zm10-2h8v8h-8zm2 2v4h4V4zM2 14h8v8H2zm2 2v4h4v-4zm14-2h4v2h-4zm-4 0h2v4h-2zm2 4h4v4h-4zm-2 2h2v2h-2zm6-2h2v2h-2zm-8-4h2v2h-2z"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#065f46' }}>Scan or Click to Chat</div>
          <div style={{ fontSize: '11px', color: '#047857', marginTop: '2px', lineHeight: 1.4 }}>
            Start chatting with <b>SynapseOS Health Bot</b> on WhatsApp Web or mobile app.
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%20SynapseOS%2C%20start%20my%20clinical%20triage"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              marginTop: '6px',
              fontSize: '11px',
              fontWeight: 700,
              color: '#059669',
              textDecoration: 'underline'
            }}
          >
            Open in WhatsApp ↗
          </a>
        </div>
      </div>

      {/* Form Config */}
      <form onSubmit={onSaveWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '4px' }}>
            Your WhatsApp Phone Number
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={waPhoneNumber}
            onChange={(e) => setWaPhoneNumber(e.target.value)}
            style={{
              width: '100%',
              padding: '9px 12px',
              borderRadius: '10px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              fontSize: '12.5px',
              color: '#0f172a',
              outline: 'none'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '4px' }}>
            Meta Cloud / Twilio Access Token (Optional)
          </label>
          <input
            type="password"
            placeholder="EAAG..."
            value={waMetaToken}
            onChange={(e) => setWaMetaToken(e.target.value)}
            style={{
              width: '100%',
              padding: '9px 12px',
              borderRadius: '10px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              fontSize: '12.5px',
              color: '#0f172a',
              outline: 'none'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '4px' }}>
            Incoming Webhook Endpoint
          </label>
          <input
            type="text"
            value={waWebhookUrl}
            onChange={(e) => setWaWebhookUrl(e.target.value)}
            style={{
              width: '100%',
              padding: '9px 12px',
              borderRadius: '10px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              fontSize: '11.5px',
              color: '#64748b',
              outline: 'none'
            }}
          />
        </div>

        {/* Feature Toggles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '10px 12px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11.5px', color: '#334155', cursor: 'pointer' }}>
            <span>Auto-parse prescription images</span>
            <input type="checkbox" checked={waAutoSyncReports} onChange={(e) => setWaAutoSyncReports(e.target.checked)} style={{ accentColor: '#10b981' }} />
          </label>
          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11.5px', color: '#334155', cursor: 'pointer' }}>
            <span>Send daily hydration & medication reminders</span>
            <input type="checkbox" checked={waDailyReminders} onChange={(e) => setWaDailyReminders(e.target.checked)} style={{ accentColor: '#10b981' }} />
          </label>
        </div>

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
          Save WhatsApp Configuration
        </button>
      </form>

      {/* Interactive WhatsApp Simulation */}
      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
          🧪 Interactive WhatsApp Simulation:
        </div>
        <button
          type="button"
          onClick={onSimulateInbound}
          style={{
            width: '100%',
            padding: '9px 12px',
            borderRadius: '10px',
            background: '#ecfdf5',
            color: '#065f46',
            border: '1px solid #a7f3d0',
            fontSize: '11.5px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <span>📥</span> Simulate Inbound WhatsApp Prescription
        </button>
      </div>
    </div>
  );
}
