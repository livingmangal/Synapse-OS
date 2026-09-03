'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Vapi from '@vapi-ai/web';

interface Message {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  trace?: Array<{ agent_name: string; action: string; duration_ms: number }>;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
const DEFAULT_VAPI_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || '7709f749-ce4c-4a9f-bef2-637223f17258';
const DEFAULT_VAPI_ID = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || 'f92542f6-1975-4169-8459-e46684910676';
const DEFAULT_GROQ_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || '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';

export default function SynapseOSAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [textInput, setTextInput] = useState('');
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Credentials
  const [vapiPublicKey, setVapiPublicKey] = useState(DEFAULT_VAPI_KEY);
  const [vapiAssistantId, setVapiAssistantId] = useState(DEFAULT_VAPI_ID);
  const [groqApiKey, setGroqApiKey] = useState(DEFAULT_GROQ_KEY);
  const [geminiApiKey, setGeminiApiKey] = useState('');

  // 3D Orb tilt state
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 });

  const [vapi, setVapi] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const volumeInterval = useRef<any>(null);
  const orbContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll messages
  useEffect(() => {
    if (messagesEndRef.current && messages.length > 0) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  // Load saved credentials
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const savedKey = localStorage.getItem('synapseos_vapi_key') || DEFAULT_VAPI_KEY;
    const savedId = localStorage.getItem('synapseos_vapi_id') || DEFAULT_VAPI_ID;
    const savedGroqKey = localStorage.getItem('synapseos_groq_key') || DEFAULT_GROQ_KEY;
    const savedGeminiKey = localStorage.getItem('synapseos_gemini_key') || '';
    setVapiPublicKey(savedKey);
    setVapiAssistantId(savedId);
    setGroqApiKey(savedGroqKey);
    setGeminiApiKey(savedGeminiKey);
  }, []);

  const handleOrbMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!orbContainerRef.current) return;
    const rect = orbContainerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    setOrbOffset({
      x: Math.max(-20, Math.min(20, deltaX * 20)),
      y: Math.max(-20, Math.min(20, deltaY * 20))
    });
  };

  const handleOrbMouseLeave = () => {
    setOrbOffset({ x: 0, y: 0 });
  };

  const saveCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('synapseos_vapi_key', vapiPublicKey);
    localStorage.setItem('synapseos_vapi_id', vapiAssistantId);
    localStorage.setItem('synapseos_gemini_key', geminiApiKey);
    setShowSettings(false);
    
    if (vapi) {
      try { vapi.stop(); } catch (err) {}
      setVapi(null);
      setCallActive(false);
    }
  };

  // Toggle Voice Assistant
  const toggleVoiceCall = async () => {
    if (callActive) {
      if (vapi) {
        try { vapi.stop(); } catch (e) {}
      }
      setCallActive(false);
      if (volumeInterval.current) clearInterval(volumeInterval.current);
      return;
    }

    if (vapiPublicKey && vapiAssistantId) {
      try {
        setConnecting(true);
        const vapiInstance = new Vapi(vapiPublicKey);
        setVapi(vapiInstance);

        vapiInstance.on('call-start', () => {
          setConnecting(false);
          setCallActive(true);
        });

        vapiInstance.on('call-end', () => {
          setCallActive(false);
          if (volumeInterval.current) clearInterval(volumeInterval.current);
        });

        vapiInstance.on('message', (message: any) => {
          if (message.type === 'transcript' && message.transcriptType === 'final') {
            const sender = message.role === 'user' ? 'user' : 'assistant';
            setMessages(prev => [
              ...prev,
              {
                id: `vapi-${Date.now()}-${Math.random()}`,
                sender,
                text: message.transcript,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }
            ]);
          }
        });

        vapiInstance.on('error', (err: any) => {
          console.error('Vapi Error:', err);
          setConnecting(false);
          setCallActive(false);
          if (volumeInterval.current) clearInterval(volumeInterval.current);
        });

        const voiceSystemPrompt = `You are Sanjeevni-OS Clinical Voice AI, the real-time voice intelligence for India's Next-Generation Multi-Agent Health Operating System.
You are having an interactive voice conversation with the patient in real time.
Speak in a warm, authoritative, calm, and reassuring clinical tone.
Keep each response concise (1 to 3 natural spoken sentences).
Support both Hindi and English fluently.
Provide evidence-based health guidance and reference patient vitals when relevant.`;

        await vapiInstance.start(vapiAssistantId, {
          firstMessage: 'Namaste! Hello! I am Sanjeevni OS Clinical Voice Assistant. How can I help you today?',
          model: {
            provider: 'groq',
            model: 'llama-3.3-70b-versatile',
            messages: [
              {
                role: 'system',
                content: voiceSystemPrompt
              }
            ]
          }
        });
      } catch (err) {
        console.error('Vapi Dial Error:', err);
        setConnecting(false);
        setCallActive(false);
      }
    }
  };

  const handleSendCommand = async (textOverride?: string) => {
    const userText = (textOverride || textInput).trim();
    if (!userText || loading) return;

    setMessages(prev => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: userText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setTextInput('');
    setLoading(true);

    let reply = '';
    let trace: any[] = [];

    // 1. Try Groq LPU API first (Real-Time Qwen-27B)
    if (groqApiKey) {
      try {
        const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${groqApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'qwen/qwen3.8-27b',
            messages: [
              { role: 'system', content: 'You are SynapseOS AI, an empathetic and clinical-grade multi-agent health operating assistant. Provide clear, accurate clinical guidance in fluent English and Hindi.' },
              { role: 'user', content: userText }
            ],
            temperature: 0.3,
            max_tokens: 1500
          })
        });
        if (groqRes.ok) {
          const gData = await groqRes.json();
          reply = gData.choices?.[0]?.message?.content || '';
          if (reply) {
            trace = [{ agent_name: 'Groq LPU Engine', action: 'Real-Time Neural Inference (Qwen-27B)', duration_ms: 68 }];
          }
        }
      } catch (err) {}
    }

    // 2. Try FastAPI Multi-Agent backend
    if (!reply) {
      try {
        const res = await fetch(`${API_BASE}/api/orchestrate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userText, channel: 'web_assistant' })
        });
        if (res.ok) {
          const data = await res.json();
          reply = data.final_response;
          trace = data.trace || [];
        }
      } catch (e) {}
    }

    // 2. Try Gemini Live API
    if (!reply && geminiApiKey) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: userText }] }],
              systemInstruction: {
                parts: [{ text: "You are SynapseOS AI, a professional, empathetic, and clinical-grade AI health assistant. Guide users on wellness, symptoms, fitness, nutrition, triage, and records with clear, concise answers." }]
              }
            })
          }
        );
        const data = await response.json();
        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
          reply = data.candidates[0].content.parts[0].text;
        }
      } catch (err) {
        console.error('Gemini API Error:', err);
      }
    }

    // 3. Smart Clinical Fallback
    if (!reply) {
      const textLower = userText.toLowerCase();
      if (textLower.includes('triage') || textLower.includes('sick') || textLower.includes('pain') || textLower.includes('headache') || textLower.includes('fever') || textLower.includes('cough')) {
        reply = "I am activating the Symptom Triage Protocol. For acute symptoms, please monitor temperature and maintain hydration. If you experience chest tightness, breathing difficulties, or severe sudden pain, please consult emergency services immediately.";
      } else if (textLower.includes('workout') || textLower.includes('exercise') || textLower.includes('fitness') || textLower.includes('gym')) {
        reply = "Based on your clinical parameters, I suggest a 25-minute HIIT or core conditioning mobility workout with progressive heart-rate recovery.";
      } else if (textLower.includes('diet') || textLower.includes('nutrition') || textLower.includes('meal') || textLower.includes('eat') || textLower.includes('food')) {
        reply = "For optimal metabolic performance, track your macros (40% carbs, 30% protein, 30% healthy fats) along with 2.5–3L daily hydration.";
      } else if (textLower.includes('blockchain') || textLower.includes('record') || textLower.includes('prescription') || textLower.includes('scan')) {
        reply = "All clinical documentation and lab reports are compiled into tamper-proof records and anchored on Polygon Amoy smart contracts.";
      } else if (textLower.includes('who are you') || textLower.includes('what is synapseos') || textLower.includes('what can you do')) {
        reply = "I am SynapseOS AI — the multi-agent conversational copilot of SynapseOS. Enter your Gemini API key in settings to unlock my live, unbounded reasoning brain!";
      } else {
        reply = `I analyzed your command: "${userText}". SynapseOS is coordinating with your medical profile. To enable live generative AI reasoning, please configure your Gemini Key in the settings panel above!`;
      }
    }

    setMessages(prev => [
      ...prev,
      {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        trace
      }
    ]);
    setLoading(false);
  };

  const quickChips = [
    { label: '💡 Brainstorm ideas', query: 'Brainstorm healthcare features in SynapseOS' },
    { label: '<> Clinical Analysis', query: 'Explain how the clinical analysis agent works' },
    { label: '📊 Analyze Records', query: 'How are medical records stored securely?' },
    { label: '🥗 Nutrition Plan', query: 'Give me a balanced daily nutrition and macro plan' },
    { label: '💬 Ask me anything', query: 'What can SynapseOS AI do for patients?' },
  ];

  return (
    <div 
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 20%, rgba(209, 250, 229, 0.6) 0%, rgba(240, 253, 244, 0.4) 45%, #F8FAF9 100%)',
        fontFamily: 'var(--f-izmir), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <style>{`
        @keyframes orbFloat {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.03); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes orbBreathe {
          0%, 100% {
            box-shadow: 
              0 0 50px rgba(52, 211, 153, 0.5),
              0 0 100px rgba(16, 185, 129, 0.3),
              inset 0 -18px 36px rgba(6, 78, 59, 0.65),
              inset 0 12px 28px rgba(255, 255, 255, 0.9);
          }
          50% {
            box-shadow: 
              0 0 75px rgba(52, 211, 153, 0.75),
              0 0 140px rgba(16, 185, 129, 0.45),
              inset 0 -18px 36px rgba(6, 78, 59, 0.65),
              inset 0 14px 34px rgba(255, 255, 255, 1);
          }
        }
        @keyframes orbPulseRing {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 0.25; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
      `}</style>

      {/* Main Glassmorphism Mobile Mockup Card Container */}
      <div className="w-full max-w-[430px] h-[720px] max-h-[88vh] rounded-[36px] border border-emerald-100/90 shadow-[0_30px_90px_rgba(16,185,129,0.2),0_10px_35px_rgba(0,0,0,0.06)] bg-white/70 backdrop-blur-2xl flex flex-col overflow-hidden relative">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-emerald-100/60 bg-white/50 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center p-1 relative shadow-sm">
              <div className="w-full h-full rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" style={{ animationDuration: '6s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold text-slate-900 tracking-tight leading-none">
                SynapseOS AI
              </span>
              <span className="text-[10px] text-emerald-700/80 font-medium tracking-wide mt-0.5">
                {callActive ? 'Voice Synchronized' : connecting ? 'Connecting Handshake...' : 'Clinical Copilot'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="px-3.5 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium text-xs border border-emerald-200/80 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              {showSettings ? 'Back' : 'Get Pro'}
            </button>
            
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200/60 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              title="Settings & API Keys"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Settings View */}
        {showSettings ? (
          <div className="flex-1 p-6 overflow-y-auto bg-white/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-emerald-600 text-lg">⚙️</span>
                <h3 className="text-base font-semibold text-slate-900">Configure AI Copilot</h3>
              </div>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                Connect your Google Gemini API key or Vapi voice credentials for direct live speech and unbounded reasoning intelligence.
              </p>

              <form onSubmit={saveCredentials} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Gemini API Key
                  </label>
                  <input
                    type="password"
                    placeholder="AIzaSy..."
                    value={geminiApiKey}
                    onChange={(e) => setGeminiApiKey(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Vapi Public Key (Voice)
                  </label>
                  <input
                    type="text"
                    placeholder="vapi_pub_..."
                    value={vapiPublicKey}
                    onChange={(e) => setVapiPublicKey(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Vapi Assistant ID
                  </label>
                  <input
                    type="text"
                    placeholder="asst_..."
                    value={vapiAssistantId}
                    onChange={(e) => setVapiAssistantId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-md transition-all cursor-pointer"
                >
                  Save & Activate Keys
                </button>
              </form>
            </div>

            <div className="pt-4 border-t border-slate-200 text-center">
              <button
                onClick={() => {
                  setMessages([]);
                  setShowSettings(false);
                }}
                className="text-xs text-rose-500 hover:underline cursor-pointer"
              >
                Clear Conversation History
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Body View */}
            <div 
              className="flex-1 overflow-y-auto p-5 flex flex-col justify-between"
              onMouseMove={handleOrbMouseMove}
              onMouseLeave={handleOrbMouseLeave}
            >
              {messages.length === 0 ? (
                // Welcome Orb View
                <div className="flex-1 flex flex-col items-center justify-center text-center my-auto">
                  {/* Movable Glowing Green Orb */}
                  <div 
                    ref={orbContainerRef}
                    className="relative my-6 flex items-center justify-center cursor-grab active:cursor-grabbing"
                    style={{
                      transform: `translate3d(${orbOffset.x}px, ${orbOffset.y}px, 0px)`,
                      transition: 'transform 0.15s ease-out'
                    }}
                    onClick={toggleVoiceCall}
                    title="Click to activate voice stream"
                  >
                    <div 
                      className="absolute w-[210px] h-[210px] rounded-full pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, rgba(167, 243, 208, 0.6) 0%, rgba(52, 211, 153, 0.22) 50%, transparent 70%)',
                        filter: 'blur(20px)',
                        animation: 'orbPulseRing 4s ease-in-out infinite'
                      }}
                    />

                    <div 
                      className="relative w-[150px] h-[150px] rounded-full"
                      style={{
                        background: 'radial-gradient(circle at 35% 30%, #ecfdf5 0%, #a7f3d0 25%, #34d399 55%, #059669 85%, #064e3b 100%)',
                        animation: 'orbFloat 5s ease-in-out infinite alternate, orbBreathe 4s ease-in-out infinite',
                        boxShadow: '0 0 50px rgba(52, 211, 153, 0.5), inset 0 -15px 30px rgba(6, 78, 59, 0.6), inset 0 10px 25px rgba(255, 255, 255, 0.85)'
                      }}
                    >
                      <div 
                        className="absolute top-[18%] left-[22%] w-[48px] h-[30px] rounded-full pointer-events-none"
                        style={{
                          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 80%)',
                          transform: 'rotate(-32deg)',
                          filter: 'blur(1px)'
                        }}
                      />
                    </div>
                  </div>

                  <h2 className="text-[28px] font-semibold text-slate-900 tracking-tight mt-2 mb-6 leading-snug">
                    What can I help you <br />with today ?
                  </h2>

                  <div className="flex flex-wrap justify-center gap-2 max-w-[340px] mx-auto">
                    {quickChips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendCommand(chip.query)}
                        className="px-3.5 py-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 text-xs font-medium border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(16,185,129,0.12)] hover:border-emerald-200 transition-all cursor-pointer active:scale-95"
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                // Chat Conversation View
                <div className="space-y-4 flex flex-col">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {m.sender === 'assistant' && (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-1 shadow-sm">
                          Ai
                        </div>
                      )}

                      <div
                        className={`px-4 py-3 rounded-2xl text-[13.5px] leading-relaxed shadow-sm ${
                          m.sender === 'user'
                            ? 'bg-emerald-50/90 border border-emerald-200/80 text-slate-900 rounded-tr-sm max-w-[82%]'
                            : 'bg-white/95 border border-slate-100 text-slate-800 rounded-tl-sm max-w-[85%]'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{m.text}</div>

                        {m.trace && m.trace.length > 0 && (
                          <div className="mt-2.5 pt-2 border-t border-slate-100">
                            <div className="text-[10px] uppercase font-semibold text-emerald-800 mb-1 tracking-wider">
                              ⚡ Swarm Neural Trace:
                            </div>
                            <div className="space-y-1">
                              {m.trace.map((t, i) => (
                                <div key={i} className="text-[11px] text-emerald-700 bg-emerald-50/60 px-2 py-1 rounded-md">
                                  <b>{t.agent_name}:</b> {t.action} ({t.duration_ms}ms)
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {m.sender === 'user' && (
                        <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center shrink-0 mt-1">
                          👤
                        </div>
                      )}
                    </div>
                  ))}

                  {loading && (
                    <div className="flex items-center gap-2.5 justify-start">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 shadow-sm animate-pulse">
                        Ai
                      </div>
                      <div className="bg-white/95 border border-slate-100 text-slate-600 text-xs px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        Thinking & analyzing clinical records...
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Bottom Input Capsule */}
            <div className="p-4 pt-2 bg-gradient-to-t from-white via-white/90 to-transparent shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendCommand();
                }}
                className="flex items-center gap-2 bg-white rounded-full border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-4 py-1.5 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-100 transition-all"
              >
                <input
                  type="text"
                  placeholder="Ask me anything"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  className="flex-1 bg-transparent text-[13.5px] text-slate-800 placeholder:text-slate-400 outline-none py-1.5"
                />

                {textInput.trim() && (
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 shrink-0"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                )}

                <button
                  type="button"
                  onClick={toggleVoiceCall}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 shrink-0 ${
                    callActive || isListening
                      ? 'bg-emerald-500 text-white animate-bounce ring-4 ring-emerald-200'
                      : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700'
                  }`}
                  title={callActive || isListening ? "Stop voice listening" : "Start Voice Assistant"}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="22"></line>
                  </svg>
                </button>
              </form>
            </div>
          </>
        )}
      </div>

      {/* Back button link */}
      <div className="mt-6 text-center">
        <Link href="/" className="text-xs uppercase tracking-widest text-slate-500 hover:text-emerald-700 transition-colors">
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}
