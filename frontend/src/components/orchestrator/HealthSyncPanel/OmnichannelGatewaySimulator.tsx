'use client';

import React, { useState } from 'react';
import { Smartphone, Send, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  type?: 'whatsapp' | 'sms';
}

const REGIONAL_SCRIPTS = [
  { code: 'en', name: 'English', sample: '1 I have high fever and headache' },
  { code: 'hi', name: 'हिन्दी (Hindi)', sample: '1 मुझे 3 दिन से तेज बुखार और सिरदर्द है' },
  { code: 'bn', name: 'বাংলা (Bengali)', sample: '1 আমার তীব্র জ্বর ও গা ব্যথা করছে' },
  { code: 'ta', name: 'தமிழ் (Tamil)', sample: '1 எனக்கு கடுமையான காய்ச்சல் மற்றும் தலைவலி உள்ளது' },
  { code: 'te', name: 'తెలుగు (Telugu)', sample: '1 నాకు తీవ్రమైన జ్వరం మరియు తలనొప్పి ఉంది' },
  { code: 'mr', name: 'मराठी (Marathi)', sample: '1 मला तीव्र ताप आणि डोकेदुखी आहे' }
];

// Rich WhatsApp message formatter that parses *bold*, _italics_, ~strike~, code, and bullet points
function renderWhatsAppFormattedText(text: string, translateTextFn?: (t: string) => string) {
  if (!text) return null;
  const lines = text.split('\n');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lineIdx} style={{ height: '6px' }} />;
        }

        // Split line by bold (*text*), italic (_text_), strike (~text~)
        const tokens = line.split(/(\*[^*\n]+\*|_[^_\n]+_|~[^~\n]+~)/g);

        return (
          <div key={lineIdx} style={{ lineHeight: '1.45' }}>
            {tokens.map((token, tokenIdx) => {
              if (token.startsWith('*') && token.endsWith('*') && token.length > 2) {
                const inner = token.slice(1, -1);
                const translated = translateTextFn ? translateTextFn(inner) : inner;
                return (
                  <strong key={tokenIdx} style={{ fontWeight: 800, color: '#0f172a' }}>
                    {translated}
                  </strong>
                );
              }
              if (token.startsWith('_') && token.endsWith('_') && token.length > 2) {
                const inner = token.slice(1, -1);
                const translated = translateTextFn ? translateTextFn(inner) : inner;
                return (
                  <em key={tokenIdx} style={{ fontStyle: 'italic', color: '#475569' }}>
                    {translated}
                  </em>
                );
              }
              if (token.startsWith('~') && token.endsWith('~') && token.length > 2) {
                const inner = token.slice(1, -1);
                const translated = translateTextFn ? translateTextFn(inner) : inner;
                return (
                  <span key={tokenIdx} style={{ textDecoration: 'line-through', color: '#94a3b8' }}>
                    {translated}
                  </span>
                );
              }
              const translatedToken = translateTextFn ? translateTextFn(token) : token;
              return <span key={tokenIdx}>{translatedToken}</span>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function OmnichannelGatewaySimulator() {
  const { t, translateText } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<string>('en');
  
  // WhatsApp chat state
  const [waInput, setWaInput] = useState<string>('7 6 weeks');
  const [waMessages, setWaMessages] = useState<ChatMessage[]>([
    {
      id: 'wa1',
      sender: 'bot',
      text: "🌿 *SANJEEVNI-OS / SYNAPSEOS — Rural & Public Health AI* 🌿\n\nWelcome! Reply with a number:\n1️⃣ *Symptom Triage*\n2️⃣ *Drug Safety*\n7️⃣ *UIP Vaccine Schedule*\n8️⃣ *District Outbreak Alerts*\n9️⃣ *Rural Preventive Health*\n🚨 *SOS* for Emergency",
      timestamp: 'Just now',
      type: 'whatsapp'
    }
  ]);
  const [waLoading, setWaLoading] = useState<boolean>(false);

  // SMS chat state
  const [smsInput, setSmsInput] = useState<string>('8 Delhi');
  const [smsMessages, setSmsMessages] = useState<ChatMessage[]>([
    {
      id: 'sms1',
      sender: 'bot',
      text: "SANJEEVNI-OS HEALTH SMS: Reply 1 <symptoms>, 2 <meds>, 7 <age> for Vaccine, 8 <district> for Outbreaks, 9 for ORS Tips, SOS for 112/108.",
      timestamp: '12:00 PM',
      type: 'sms'
    }
  ]);
  const [smsLoading, setSmsLoading] = useState<boolean>(false);

  // Send WhatsApp message to backend
  const handleSendWhatsApp = async (customMsg?: string) => {
    const text = customMsg || waInput;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: 'wa_' + Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'whatsapp'
    };

    setWaMessages(prev => [...prev, userMsg]);
    setWaInput('');
    setWaLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/whatsapp/simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sender_phone: '+919876543210' })
      });

      if (res.ok) {
        const orchRes = await fetch(`${API_BASE}/api/orchestrate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, channel: 'whatsapp' })
        });
        const data = await orchRes.json();

        setWaMessages(prev => [
          ...prev,
          {
            id: 'wa_bot_' + Date.now(),
            sender: 'bot',
            text: data.final_response || "Thank you for consulting Sanjeevni-OS.",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'whatsapp'
          }
        ]);
      }
    } catch {
      setWaMessages(prev => [
        ...prev,
        {
          id: 'wa_bot_' + Date.now(),
          sender: 'bot',
          text: "💉 *UNIVERSAL IMMUNIZATION PROGRAMME (UIP)*\n\n• *Next Due:* Pentavalent-1, Rotavirus-1, fIPV-1, PCV-1\n• *Status:* Due at 6 Weeks (1.5 Months)\n• *Facility:* Available FREE at nearest Anganwadi & Primary Health Centre (PHC).\n\n_🌿 Powered by Sanjeevni-OS Swarm_",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'whatsapp'
        }
      ]);
    } finally {
      setWaLoading(false);
    }
  };

  // Send SMS message to backend
  const handleSendSMS = async (customMsg?: string) => {
    const text = customMsg || smsInput;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: 'sms_' + Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'sms'
    };

    setSmsMessages(prev => [...prev, userMsg]);
    setSmsInput('');
    setSmsLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/sms/simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sender: '+919876543210' })
      });

      if (res.ok) {
        const data = await res.json();
        setSmsMessages(prev => [
          ...prev,
          {
            id: 'sms_bot_' + Date.now(),
            sender: 'bot',
            text: data.reply_text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'sms'
          }
        ]);
      }
    } catch {
      setSmsMessages(prev => [
        ...prev,
        {
          id: 'sms_bot_' + Date.now(),
          sender: 'bot',
          text: "OUTBREAK ALERT (Delhi NCR): Dengue & Chikungunya - High Surge (+28.4% this week). Clean coolers on Sunday Dry Day. Use repellent. Helpline: 011-22307145.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'sms'
        }
      ]);
    } finally {
      setSmsLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      fontFamily: '"Times New Roman", Times, serif'
    }}>
      
      {/* 1. Language / Script Selector Bar */}
      <div style={{
        background: '#f8fafc',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Globe size={16} color="#0284c7" />
          <span style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>
            {t('multilingual_script_title', 'Multilingual Script Auto-Detection:')}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {REGIONAL_SCRIPTS.map(s => (
            <button
              key={s.code}
              onClick={() => {
                setSelectedLang(s.code);
                setWaInput(s.sample);
                setSmsInput(s.sample);
              }}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                background: selectedLang === s.code ? '#e0f2fe' : '#ffffff',
                color: selectedLang === s.code ? '#0284c7' : '#334155',
                border: selectedLang === s.code ? '1.5px solid #7dd3fc' : '1px solid #e2e8f0',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Preset Command Shortcuts */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[
          { icon: '💉', label: translateText('7 (Vaccination 6 Weeks)'), cmd: '7 6 weeks' },
          { icon: '🚨', label: translateText('8 (Delhi Outbreak Alert)'), cmd: '8 Delhi' },
          { icon: '🌿', label: translateText('9 (ORS & Diarrhea Guide)'), cmd: '9' },
          { icon: '💊', label: translateText('2 (Paracetamol + Aspirin)'), cmd: '2 Paracetamol and Aspirin' },
          { icon: '🚨', label: translateText('SOS Emergency Broadcast'), cmd: 'SOS' }
        ].map((c, i) => (
          <button
            key={i}
            onClick={() => {
              setWaInput(c.cmd);
              setSmsInput(c.cmd);
              handleSendWhatsApp(c.cmd);
              handleSendSMS(c.cmd);
            }}
            style={{
              padding: '6px 14px',
              borderRadius: '10px',
              background: '#fdf2f8',
              border: '1px solid #fbcfe8',
              color: '#db2777',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      {/* 3. Dual Channel Simulator Frame */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        
        {/* WhatsApp Mobile View */}
        <div style={{
          background: '#f8fafc',
          borderRadius: '20px',
          border: '1.5px solid #bae6fd',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '500px',
          boxShadow: '0 4px 16px rgba(2, 132, 199, 0.08)'
        }}>
          {/* WA Top Bar */}
          <div style={{ background: '#0284c7', padding: '12px 18px', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', fontWeight: 900, fontSize: '13px' }}>
                🌿
              </div>
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 800 }}>
                  {t('wa_bot_title', 'Sanjeevni-OS WhatsApp Bot')}
                </div>
                <div style={{ fontSize: '10.5px', color: '#e0f2fe' }}>
                  {t('wa_gateway_online', 'OpenWA Gateway • Online')}
                </div>
              </div>
            </div>
            <span style={{ fontSize: '11px', color: '#ffffff', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '8px' }}>
              {t('wa_channel_badge', 'WhatsApp Channel')}
            </span>
          </div>

          {/* WA Message Thread */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', background: '#f1f5f9' }}>
            {waMessages.map(m => (
              <div
                key={m.id}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: m.sender === 'user' ? '#e0f2fe' : '#ffffff',
                  border: m.sender === 'user' ? '1px solid #bae6fd' : '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  fontSize: '13px',
                  color: '#0f172a',
                  lineHeight: 1.5,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  whiteSpace: 'pre-line'
                }}
              >
                {renderWhatsAppFormattedText(m.text, translateText)}
                <div style={{ fontSize: '10px', color: '#64748b', textAlign: 'right', marginTop: '4px' }}>
                  {m.timestamp === 'Just now' ? translateText('Just now') : m.timestamp} {m.sender === 'user' ? '✓✓' : ''}
                </div>
              </div>
            ))}
            {waLoading && (
              <div style={{ alignSelf: 'flex-start', background: '#ffffff', borderRadius: '10px', padding: '8px 14px', fontSize: '12px', color: '#64748b', border: '1px solid #e2e8f0' }}>
                {translateText('Typing clinical directive...')}
              </div>
            )}
          </div>

          {/* WA Input Footer */}
          <div style={{ background: '#ffffff', padding: '10px 14px', display: 'flex', gap: '8px', alignItems: 'center', borderTop: '1px solid #e2e8f0' }}>
            <input
              type="text"
              value={waInput}
              onChange={e => setWaInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSendWhatsApp()}
              placeholder={t('type_query_wa', 'Type query or command (1-9)...')}
              style={{ flex: 1, padding: '9px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '13px', outline: 'none', background: '#f8fafc' }}
            />
            <button
              onClick={() => handleSendWhatsApp()}
              style={{ padding: '9px 16px', borderRadius: '10px', background: '#0284c7', color: '#ffffff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, fontSize: '12px' }}
            >
              <Send size={13} /> {t('send_btn', 'Send')}
            </button>
          </div>
        </div>

        {/* 2G Feature Phone SMS View */}
        <div style={{
          background: '#0f172a',
          borderRadius: '20px',
          border: '1.5px solid #334155',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '500px',
          boxShadow: '0 4px 16px rgba(15, 23, 42, 0.15)'
        }}>
          {/* SMS Top Bar */}
          <div style={{ background: '#1e293b', padding: '12px 18px', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #334155' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Smartphone size={16} color="#38bdf8" />
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 800 }}>
                  {t('sms_bot_title', '2G Feature Phone SMS (160 Chars)')}
                </div>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>
                  {t('sms_protocol_sub', 'GSM 7-Bit Clean Protocol • Offline Fallback')}
                </div>
              </div>
            </div>
            <span style={{ fontSize: '10px', color: '#38bdf8', border: '1px solid #0284c7', padding: '2px 6px', borderRadius: '4px' }}>
              {t('no_internet_badge', 'No Internet Required')}
            </span>
          </div>

          {/* SMS Thread */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', background: '#090d16' }}>
            {smsMessages.map(m => (
              <div
                key={m.id}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: m.sender === 'user' ? '#0369a1' : '#1e293b',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '12.5px',
                  color: m.sender === 'user' ? '#ffffff' : '#e2e8f0',
                  lineHeight: 1.45,
                  fontFamily: 'monospace',
                  border: m.sender === 'user' ? '1px solid #0284c7' : '1px solid #334155'
                }}
              >
                {translateText(m.text)}
                <div style={{ fontSize: '9px', color: '#94a3b8', textAlign: 'right', marginTop: '4px' }}>
                  {m.timestamp} • {m.text.length} {translateText('Chars')} ({Math.ceil(m.text.length / 160)} {translateText('SMS Part')})
                </div>
              </div>
            ))}
            {smsLoading && (
              <div style={{ alignSelf: 'flex-start', background: '#1e293b', padding: '6px 12px', borderRadius: '8px', fontSize: '11px', color: '#38bdf8', fontFamily: 'monospace' }}>
                {translateText('Relaying via GSM SMS Gateway...')}
              </div>
            )}
          </div>

          {/* SMS Input Footer */}
          <div style={{ background: '#1e293b', padding: '10px 14px', display: 'flex', gap: '8px', alignItems: 'center', borderTop: '1px solid #334155' }}>
            <input
              type="text"
              value={smsInput}
              onChange={e => setSmsInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSendSMS()}
              placeholder={t('type_query_sms', 'Type SMS query (e.g. 7, 8, 9, SOS)...')}
              style={{ flex: 1, padding: '9px 14px', borderRadius: '10px', border: '1px solid #475569', background: '#0f172a', color: '#ffffff', fontSize: '12.5px', outline: 'none', fontFamily: 'monospace' }}
            />
            <button
              onClick={() => handleSendSMS()}
              style={{ padding: '9px 16px', borderRadius: '10px', background: '#0284c7', color: '#ffffff', border: 'none', cursor: 'pointer', fontWeight: 800, fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <Send size={13} /> {t('send_btn', 'Send')}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
