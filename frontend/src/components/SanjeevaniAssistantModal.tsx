'use client';

import React, { useState, useRef, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export default function SanjeevaniAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string; trace?: any[] }>>([
    {
      sender: 'assistant',
      text: 'Namaste! I am **Sanjeevani**, your multi-agent clinical copilot. Ask me about symptoms, scan reports, drug interactions, or government health schemes.'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: textToSend }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/orchestrate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          channel: 'web_assistant'
        })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(prev => [
          ...prev,
          {
            sender: 'assistant',
            text: data.final_response || 'Assessment completed.',
            trace: data.trace || []
          }
        ]);
      } else {
        throw new Error('Backend offline');
      }
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: `⚠️ **Could not connect to FastAPI backend at :8000.**\n\nEnsure backend is running: \`python -m uvicorn backend.app.main:app --port 8000\``
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const toggleMic = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser. Please use Chrome/Edge or type your query.');
      return;
    }

    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRec();
    recognition.lang = 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    if (!isListening) {
      setIsListening(true);
      recognition.start();
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        handleSend(transcript);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
    } else {
      setIsListening(false);
    }
  };

  return (
    <>
      {/* Floating Sanjeevani Toggle Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 20px',
          borderRadius: '50px',
          background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
          color: '#ffffff',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(2, 132, 199, 0.4)',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '14px',
          letterSpacing: '0.5px'
        }}
      >
        <span style={{ fontSize: '18px' }}>✨</span>
        <span>{isOpen ? 'Close Assistant' : 'Sanjeevani Assistant Mode'}</span>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }}></span>
      </button>

      {/* Floating Assistant Drawer / Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '24px',
            width: '420px',
            maxWidth: 'calc(100vw - 48px)',
            height: '620px',
            maxHeight: 'calc(100vh - 120px)',
            zIndex: 9999998,
            background: 'rgba(15, 23, 42, 0.96)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          {/* Header */}
          <div style={{ padding: '16px 20px', background: 'rgba(30, 41, 59, 0.8)', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff' }}>
                S
              </div>
              <div>
                <div style={{ color: '#f8fafc', fontWeight: 'bold', fontSize: '15px' }}>Sanjeevani Copilot</div>
                <div style={{ color: '#38bdf8', fontSize: '11px' }}>Multi-Agent Swarm • Online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '18px', cursor: 'pointer' }}
            >
              ✕
            </button>
          </div>

          {/* Quick Trigger Chips */}
          <div style={{ padding: '10px 16px', display: 'flex', gap: '6px', overflowX: 'auto', background: 'rgba(15, 23, 42, 0.5)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              '💊 Can I take Aspirin with Warfarin?',
              '🫁 Analyze Chest X-Ray scan',
              '🇮🇳 Check PM-JAY Scheme Eligibility',
              '❤️ Simulate 3D Digital Twin'
            ].map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q.replace(/^[^\s]+ /, ''))}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '5px 10px',
                  borderRadius: '12px',
                  background: 'rgba(51, 65, 85, 0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#cbd5e1',
                  fontSize: '11px',
                  cursor: 'pointer'
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Message History */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: m.sender === 'user' ? '#0284c7' : 'rgba(30, 41, 59, 0.9)',
                  color: '#f8fafc',
                  padding: '12px 16px',
                  borderRadius: m.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  border: m.sender === 'user' ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  fontSize: '13.5px',
                  lineHeight: '1.5'
                }}
              >
                <div style={{ whiteSpace: 'pre-wrap' }}>{m.text}</div>

                {/* Sub-Agent Execution Trace Pills */}
                {m.trace && m.trace.length > 0 && (
                  <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#94a3b8', marginBottom: '6px' }}>
                      Agent Neural Trace ({m.trace.length} sub-agents):
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {m.trace.map((step: any, idx: number) => (
                        <div key={idx} style={{ fontSize: '11px', color: '#38bdf8', background: 'rgba(2, 132, 199, 0.15)', padding: '3px 8px', borderRadius: '6px' }}>
                          ⚡ <b>{step.agent_name}:</b> {step.action} ({step.duration_ms}ms)
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: 'flex-start', background: 'rgba(30, 41, 59, 0.9)', padding: '10px 14px', borderRadius: '16px', color: '#38bdf8', fontSize: '12px' }}>
                ⚡ Swarm coordinating (Triage + RxNav + AI Council)...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div style={{ padding: '12px 16px', background: 'rgba(30, 41, 59, 0.9)', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              onClick={toggleMic}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: isListening ? '#ef4444' : '#334155',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px'
              }}
              title="Voice Input (Whisper STT)"
            >
              {isListening ? '🛑' : '🎙️'}
            </button>
            <input
              type="text"
              placeholder={isListening ? 'Listening to voice...' : 'Type symptoms, medicines, or scans...'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '20px',
                background: '#0f172a',
                border: '1px solid #334155',
                color: '#f8fafc',
                fontSize: '13px',
                outline: 'none'
              }}
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              style={{
                padding: '10px 16px',
                borderRadius: '20px',
                background: '#0284c7',
                border: 'none',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
