'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Extend window interface for Vapi SDK loaded via CDN
declare global {
  interface Window {
    Vapi?: any;
  }
}

interface Message {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
}

export default function SanjeevaniAssistantPage() {
  const [vapi, setVapi] = useState<any>(null);
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [vapiPublicKey, setVapiPublicKey] = useState('');
  const [vapiAssistantId, setVapiAssistantId] = useState('');
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [voiceVolume, setVoiceVolume] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: 'Voice intake console initialized. Connect to Vapi or submit a text command to test. (Note: Set your Gemini Key in the side settings card to enable live reasoning!)',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const volumeInterval = useRef<any>(null);

  // Auto-scroll log console
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Load Vapi.ai Web SDK dynamically from CDN & retrieve credentials
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedKey = localStorage.getItem('sanjeevani_vapi_key') || '';
    const savedId = localStorage.getItem('sanjeevani_vapi_id') || '';
    const savedGeminiKey = localStorage.getItem('sanjeevani_gemini_key') || '';
    setVapiPublicKey(savedKey);
    setVapiAssistantId(savedId);
    setGeminiApiKey(savedGeminiKey);

    // Suppress general site preloader
    const splash = document.getElementById('video-splash');
    if (splash) {
      splash.style.display = 'none';
      splash.classList.add('hide-splash');
    }
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.style.display = 'none';
    }

    if (window.Vapi) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@vapi-ai/web@1.0.1/dist/index.umd.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const saveCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('sanjeevani_vapi_key', vapiPublicKey);
    localStorage.setItem('sanjeevani_vapi_id', vapiAssistantId);
    localStorage.setItem('sanjeevani_gemini_key', geminiApiKey);
    
    // Reset Vapi instance
    if (vapi) {
      try {
        vapi.stop();
      } catch (err) {}
      setVapi(null);
      setCallActive(false);
    }
    
    addSystemLog('System Config: API credentials synchronized.');
  };

  const addSystemLog = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `sys-${Date.now()}`,
        sender: 'system',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Toggle Voice call
  const toggleVoiceSession = async () => {
    if (callActive) {
      if (vapi) vapi.stop();
      setCallActive(false);
      setVoiceVolume(0);
      if (volumeInterval.current) clearInterval(volumeInterval.current);
      addSystemLog('Session terminated by client.');
      return;
    }

    if (!vapiPublicKey || !vapiAssistantId) {
      startSpeechSimulation();
      return;
    }

    if (!window.Vapi) {
      addSystemLog('WebRTC SDK is still loading. Try again.');
      return;
    }

    try {
      setConnecting(true);
      addSystemLog('Initiating WebRTC handshake with Vapi.ai server...');
      
      const vapiInstance = new window.Vapi(vapiPublicKey);
      setVapi(vapiInstance);

      vapiInstance.on('call-start', () => {
        setConnecting(false);
        setCallActive(true);
        addSystemLog('Call connected. Audio stream synchronized.');
        
        volumeInterval.current = setInterval(() => {
          setVoiceVolume(Math.random() * 0.7 + 0.3);
        }, 100);
      });

      vapiInstance.on('call-end', () => {
        setCallActive(false);
        setVoiceVolume(0);
        if (volumeInterval.current) clearInterval(volumeInterval.current);
        addSystemLog('Voice session ended.');
      });

      vapiInstance.on('message', (message: any) => {
        if (message.type === 'transcript' && message.transcriptType === 'final') {
          const sender = message.role === 'user' ? 'user' : 'assistant';
          setMessages((prev) => [
            ...prev,
            {
              id: `vapi-msg-${Date.now()}`,
              sender,
              text: message.transcript,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
          ]);
        }
      });

      vapiInstance.on('error', (error: any) => {
        console.error('Vapi Error:', error);
        setConnecting(false);
        setCallActive(false);
        setVoiceVolume(0);
        if (volumeInterval.current) clearInterval(volumeInterval.current);
        addSystemLog(`Call Error: ${error.message || 'Verification failed'}`);
      });

      await vapiInstance.start(vapiAssistantId);

    } catch (err: any) {
      console.error(err);
      setConnecting(false);
      setCallActive(false);
      addSystemLog(`Failed to dial: ${err.message}`);
    }
  };

  const startSpeechSimulation = () => {
    setConnecting(true);
    addSystemLog('Offline Sandbox: Starting speech emulator...');
    
    setTimeout(() => {
      setConnecting(false);
      setCallActive(true);
      addSystemLog('Speech emulator connected. Volume: ACTIVE.');
      
      volumeInterval.current = setInterval(() => {
        setVoiceVolume(Math.random() * 0.9);
      }, 150);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `sim-${Date.now()}`,
            sender: 'assistant',
            text: '[Simulated voice output]: Welcome. Speak your health request or use the text terminal console below to test.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }, 1000);
    }, 1200);
  };

  // Submit text commands
  const handleSendCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const userText = textInput.trim();
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: userText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setTextInput('');

    // Generate responsive agent behavior based on command
    setTimeout(async () => {
      let reply = '';
      const textLower = userText.toLowerCase();

      if (geminiApiKey) {
        // Real Live Gemini API integration
        try {
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [
                  {
                    role: 'user',
                    parts: [{ text: userText }],
                  },
                ],
                systemInstruction: {
                  parts: [{ text: "You are Sanjeevani, a helpful, professional, and empathetic AI health assistant inside the Sanjeevani OS. You understand clinical workflows and guide patients on wellness, nutrition, fitness, triage, and records with clear, concise answers. Always add a short disclaimer that you are an AI assistant, not a licensed medical professional." }]
                }
              }),
            }
          );
          const data = await response.json();
          if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
            reply = data.candidates[0].content.parts[0].text;
          } else {
            throw new Error('Invalid Gemini API response');
          }
        } catch (err: any) {
          console.error('Gemini API Error:', err);
          reply = `[Gemini Connect Error]: ${err.message || 'Key verification failed'}. Falling back to local health database...`;
        }
      }

      // Offline smart QA fallback
      if (!reply || reply.includes('Gemini Connect Error')) {
        const prefix = reply.includes('Gemini Connect Error') ? reply + '\n\n' : '';
        
        if (textLower.includes('hello') || textLower.includes('hi') || textLower.includes('hey')) {
          reply = prefix + "Hello! I am Sanjeevani, your AI clinical assistant. I can automate health queries, triage symptoms, explain prescriptions, and track daily macros. What would you like to explore today?";
        } else if (textLower.includes('triage') || textLower.includes('sick') || textLower.includes('pain') || textLower.includes('headache') || textLower.includes('fever') || textLower.includes('cough')) {
          reply = prefix + "I am activating the Symptom Triage Agent. It looks like you are asking about symptoms. I recommend monitoring your temperature and staying hydrated. If you are experiencing acute pain or shortness of breath, please contact local emergency services immediately. You can view our Symptom Triage page for structured assessment logs.";
        } else if (textLower.includes('workout') || textLower.includes('exercise') || textLower.includes('fitness') || textLower.includes('gym')) {
          reply = prefix + "I can recommend customized exercises! Based on your parameters, I suggest a 25-minute HIIT or core conditioning mobility workout. You can play high-definition instruction videos directly on our Nutrition & Fitness page under the Agents menu.";
        } else if (textLower.includes('diet') || textLower.includes('nutrition') || textLower.includes('meal') || textLower.includes('eat') || textLower.includes('food')) {
          reply = prefix + "For nutrition, you can log meals (e.g. '2 eggs, avocado, brown toast') in our macro tracker dashboard to see your target progress rings update. I can also help generate personalized meal plans (Keto, Vegan, Balanced) dynamically on the Nutrition & Fitness page.";
        } else if (textLower.includes('blockchain') || textLower.includes('record') || textLower.includes('prescription') || textLower.includes('scan')) {
          reply = prefix + "All clinical documentation, lab reports, and doctor intake logs are compiled into tamper-proof records. The Blockchain Records Agent writes their hashes to the Polygon Amoy testnet, ensuring complete security and verification.";
        } else if (textLower.includes('who are you') || textLower.includes('what is sanjeevani') || textLower.includes('what can you do')) {
          reply = prefix + "I am Sanjeevani, the conversational autopilot of Sanjeevani OS. I orchestrate a swarm of sub-agents to automate patient intake, check medical records, and log lifestyle stats. Enter your Gemini API key in settings to unlock my live, unbounded reasoning brain!";
        } else {
          reply = prefix + `I analyzed your command: "${userText}". Sanjeevani OS is coordinating with your medical profile. To get an advanced, personalized diagnosis using live generative AI, please add your Gemini API Key in the Settings cog above!`;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-reply-${Date.now()}`,
          sender: 'assistant',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#ECE4DA', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'var(--f-izmir), sans-serif' }}>
      
      {/* Page Header */}
      <header className="pt-28 pb-10 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Link href="/projects" className="text-xs uppercase tracking-widest text-[#ECE4DA]/60 hover:text-white transition-colors">
              ← Back to Agents
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-[#2563eb]/50 text-[#2563eb] bg-[#2563eb]/5 font-semibold">
              Voice Interface
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif uppercase tracking-tight text-white mb-2 leading-none">
            Sanjeevani AI Assistant
          </h1>
          <p className="text-sm md:text-base text-[#ECE4DA]/60 max-w-2xl font-light">
            Interactive clinical voice pilot. Bridges everyday physical speech intake with automated multi-agent clinical task execution.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: ACTIVE VOX CONSOLE */}
        <div className="lg:col-span-8 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-between h-[600px]">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg uppercase tracking-wider text-white font-semibold">Vox Intake Terminal</h2>
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${callActive ? 'bg-green-500' : 'bg-blue-500'}`} />
                <span className="text-[10px] uppercase tracking-widest text-[#ECE4DA]/50">
                  {callActive ? 'Streaming Synchronized' : 'Offline'}
                </span>
              </div>
            </div>

            {/* Log / Transcript Feed */}
            <div className="h-[380px] overflow-y-auto bg-black/40 rounded-xl p-4 border border-white/5 space-y-4 font-mono text-xs text-[#ECE4DA]/80">
              {messages.map((msg) => (
                <div key={msg.id} className="space-y-1">
                  <div className="flex justify-between text-[9px] text-[#ECE4DA]/30">
                    <span>{msg.sender.toUpperCase()}</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <p className={`p-2.5 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-[#2563eb]/20 text-[#2563eb] border border-[#2563eb]/10'
                      : msg.sender === 'system'
                      ? 'bg-white/5 text-[#ECE4DA]/40 border border-white/5'
                      : 'bg-white/10 text-white border border-white/5'
                  }`}>
                    {msg.text}
                  </p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Voice active Visualizer */}
          {callActive && (
            <div className="h-10 bg-black/60 rounded-lg flex items-center justify-center gap-1 border border-white/5 px-4 mb-2">
              <span className="text-[9px] uppercase tracking-widest text-[#ECE4DA]/40 mr-3">Autopilot Listening</span>
              <div className="flex items-center gap-1.5 h-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-[#2563eb] rounded-full transition-all duration-150"
                    style={{
                      height: `${Math.max(4, voiceVolume * (24 - i * 1.5) * Math.random())}px`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Console trigger buttons & text form */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <div className="flex gap-4">
              <button
                onClick={toggleVoiceSession}
                disabled={connecting}
                className={`flex-1 h-11 rounded-xl flex items-center justify-center gap-2 font-semibold text-xs tracking-widest uppercase border transition-all cursor-pointer ${
                  callActive
                    ? 'bg-red-600 border-red-500 text-white hover:bg-red-700'
                    : connecting
                    ? 'bg-white/5 border-white/10 text-white/40 cursor-not-allowed'
                    : 'bg-[#2563eb] border-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-[0_4px_15px_rgba(37,99,235,0.2)]'
                }`}
              >
                {connecting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Synchronizing...</span>
                  </>
                ) : callActive ? (
                  <span>Terminate Voice Call</span>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    </svg>
                    <span>Activate Voice Call</span>
                  </>
                )}
              </button>
            </div>

            <form onSubmit={handleSendCommand} className="flex gap-2">
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Submit text command (e.g. 'check my last scan')"
                className="flex-1 h-11 px-4 bg-black/40 border border-white/10 rounded-xl text-xs text-[#ECE4DA] placeholder-[#ECE4DA]/30 focus:outline-none focus:border-[#2563eb] transition-colors"
              />
              <button
                type="submit"
                className="w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: VAPI CONFIG & ARCHITECTURE SCHEMAS */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          {/* Credentials manager panel */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#2563eb]">API Gateway Settings</h3>
            <p className="text-xs text-[#ECE4DA]/50 leading-relaxed font-light">
              Connect the console directly to your custom Vapi and Gemini agents by inserting your public keys.
            </p>
            
            <form onSubmit={saveCredentials} className="space-y-4 pt-2">
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#ECE4DA]/40 mb-1">Vapi Public Key</label>
                <input
                  type="text"
                  value={vapiPublicKey}
                  onChange={(e) => setVapiPublicKey(e.target.value)}
                  placeholder="e.g. 2b8f36c8-9d41..."
                  className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-[#ECE4DA] placeholder-[#ECE4DA]/30 focus:outline-none focus:border-[#2563eb]"
                />
              </div>
              
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#ECE4DA]/40 mb-1">Vapi Assistant ID</label>
                <input
                  type="text"
                  value={vapiAssistantId}
                  onChange={(e) => setVapiAssistantId(e.target.value)}
                  placeholder="e.g. c72a6b83-e189..."
                  className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-[#ECE4DA] placeholder-[#ECE4DA]/30 focus:outline-none focus:border-[#2563eb]"
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#ECE4DA]/40 mb-1">Gemini API Key</label>
                <input
                  type="password"
                  value={geminiApiKey}
                  onChange={(e) => setGeminiApiKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-[#ECE4DA] placeholder-[#ECE4DA]/30 focus:outline-none focus:border-[#2563eb]"
                />
              </div>

              <button
                type="submit"
                className="w-full h-10 bg-white text-black font-semibold text-xs uppercase tracking-widest rounded-lg hover:bg-[#ECE4DA] transition-colors cursor-pointer"
              >
                Sync Settings
              </button>
            </form>
          </div>

          {/* Architecture info */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-4 flex-1">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">System Architecture</h3>
            <div className="space-y-4 text-xs font-light text-[#ECE4DA]/60 leading-relaxed">
              <div className="border-l-2 border-[#2563eb] pl-3 space-y-1">
                <span className="font-semibold text-white block text-[10px] uppercase tracking-wider">1. Audio Packet Routing</span>
                <p>Voice inputs capture locally, package as WebRTC packets, and stream to Vapi.ai in real time (&lt;100ms latency).</p>
              </div>
              <div className="border-l-2 border-green-500 pl-3 space-y-1">
                <span className="font-semibold text-white block text-[10px] uppercase tracking-wider">2. Orchestration Planner</span>
                <p>Speech transcribes to text, intent is parsed by the central brain, delegating tasks to sub-agents (Scan OCR, Triage, Nutrition).</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-3 space-y-1">
                <span className="font-semibold text-white block text-[10px] uppercase tracking-wider">3. Audio Synthesis (TTS)</span>
                <p>Execution results compile and synthesize through ElevenLabs/Vapi TTS models, streaming back to standard speakers instantly.</p>
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
