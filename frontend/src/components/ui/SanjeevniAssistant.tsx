'use client';

import React, { useState, useEffect, useRef } from 'react';

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
  timestamp: Date;
}

export default function SanjeevaniAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [vapi, setVapi] = useState<any>(null);
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: 'Hello! I am Sanjeevani, your AI health assistant. You can speak to me or type any health/fitness query. (Tip: Configure your Gemini Key in settings to enable full reasoning!)',
      timestamp: new Date(),
    },
  ]);
  const [textInput, setTextInput] = useState('');
  const [vapiPublicKey, setVapiPublicKey] = useState('');
  const [vapiAssistantId, setVapiAssistantId] = useState('');
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [voiceVolume, setVoiceVolume] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const volumeInterval = useRef<any>(null);

  // Auto-scroll chat history
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Load Vapi.ai Web SDK dynamically from CDN
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load credentials from localStorage
    const savedKey = localStorage.getItem('sanjeevani_vapi_key') || '';
    const savedId = localStorage.getItem('sanjeevani_vapi_id') || '';
    const savedGeminiKey = localStorage.getItem('sanjeevani_gemini_key') || '';
    setVapiPublicKey(savedKey);
    setVapiAssistantId(savedId);
    setGeminiApiKey(savedGeminiKey);

    if (window.Vapi) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@vapi-ai/web@1.0.1/dist/index.umd.min.js';
    script.async = true;
    script.onload = () => {
      console.log('Sanjeevani OS: Vapi.ai SDK loaded successfully from CDN.');
    };
    script.onerror = (err) => {
      console.error('Sanjeevani OS: Failed to load Vapi.ai SDK.', err);
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Sync credentials to localStorage
  const saveCredentials = () => {
    localStorage.setItem('sanjeevani_vapi_key', vapiPublicKey);
    localStorage.setItem('sanjeevani_vapi_id', vapiAssistantId);
    localStorage.setItem('sanjeevani_gemini_key', geminiApiKey);
    setShowSettings(false);
    
    // Re-initialize Vapi instance
    if (vapi) {
      try {
        vapi.stop();
      } catch (e) {}
      setVapi(null);
      setCallActive(false);
    }
    
    addSystemMessage('Settings synced successfully.');
  };

  const addSystemMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `sys-${Date.now()}`,
        sender: 'system',
        text,
        timestamp: new Date(),
      },
    ]);
  };

  // Toggle Voice Call Connection
  const toggleVoiceCall = async () => {
    if (callActive) {
      if (vapi) {
        vapi.stop();
      }
      setCallActive(false);
      setVoiceVolume(0);
      if (volumeInterval.current) clearInterval(volumeInterval.current);
      addSystemMessage('Voice session ended.');
      return;
    }

    if (!vapiPublicKey || !vapiAssistantId) {
      startSimulatorMode();
      return;
    }

    if (!window.Vapi) {
      addSystemMessage('Voice SDK still loading. Please try again.');
      return;
    }

    try {
      setConnecting(true);
      addSystemMessage('Connecting to Vapi voice server...');
      
      const vapiInstance = new window.Vapi(vapiPublicKey);
      setVapi(vapiInstance);

      vapiInstance.on('call-start', () => {
        setConnecting(false);
        setCallActive(true);
        addSystemMessage('Voice active. Start speaking.');
        
        volumeInterval.current = setInterval(() => {
          setVoiceVolume(Math.random() * 0.7 + 0.3);
        }, 100);
      });

      vapiInstance.on('call-end', () => {
        setCallActive(false);
        setVoiceVolume(0);
        if (volumeInterval.current) clearInterval(volumeInterval.current);
        addSystemMessage('Voice disconnected.');
      });

      vapiInstance.on('message', (message: any) => {
        if (message.type === 'transcript' && message.transcriptType === 'final') {
          const sender = message.role === 'user' ? 'user' : 'assistant';
          setMessages((prev) => [
            ...prev,
            {
              id: `vapi-msg-${Date.now()}-${Math.random()}`,
              sender,
              text: message.transcript,
              timestamp: new Date(),
            },
          ]);
        }
      });

      vapiInstance.on('error', (error: any) => {
        console.error('Vapi Call Error:', error);
        setConnecting(false);
        setCallActive(false);
        setVoiceVolume(0);
        if (volumeInterval.current) clearInterval(volumeInterval.current);
        addSystemMessage(`Voice Error: ${error.message || 'Connection failed'}`);
      });

      await vapiInstance.start(vapiAssistantId);

    } catch (err: any) {
      console.error('Failed to start Vapi call:', err);
      setConnecting(false);
      setCallActive(false);
      addSystemMessage(`Connection Failed: ${err.message || 'Please check keys.'}`);
    }
  };

  const startSimulatorMode = () => {
    setConnecting(true);
    addSystemMessage('Starting offline sandbox emulator...');
    
    setTimeout(() => {
      setConnecting(false);
      setCallActive(true);
      addSystemMessage('Simulated voice active. Speak/type commands below.');
      
      volumeInterval.current = setInterval(() => {
        setVoiceVolume(Math.random() * 0.8);
      }, 150);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `sim-${Date.now()}`,
            sender: 'assistant',
            text: '[Simulated Voice]: Welcome to Sanjeevani local sandbox. Since no Vapi keys are set, I am running locally. Ask me about recipes, workouts, or symptoms.',
            timestamp: new Date(),
          },
        ]);
      }, 800);
    }, 1000);
  };

  // Process Text Command Input
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
        timestamp: new Date(),
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
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Microphone Activation Button - Blue and Static */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.6)] border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
        aria-label="Ask Sanjeevani AI Assistant"
      >
        <span className="absolute inset-0 rounded-full bg-[#2563eb] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      </button>

      {/* Floating Chat & Voice Console Panel */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-[9999] w-[92vw] sm:w-[420px] h-[550px] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden transition-all duration-300"
          style={{
            background: 'rgba(18, 18, 18, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            color: '#ECE4DA',
            fontFamily: 'var(--f-izmir), sans-serif'
          }}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-2 w-2">
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-35 ${callActive ? 'bg-green-400' : 'bg-blue-500'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${callActive ? 'bg-green-500' : 'bg-blue-500'}`}></span>
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold font-sans">
                {callActive ? 'Sanjeevani Live' : connecting ? 'Connecting...' : 'Sanjeevani AI'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="text-[#ECE4DA]/60 hover:text-white transition-colors cursor-pointer"
                title="Sanjeevani Settings"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1-1 1.73l-.43-.25a2 2 0 0 1-2 0l-.15.08a2 2 0 0 0-2.73-.73l-.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#ECE4DA]/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Assistant Console"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Settings Sub-Panel */}
          {showSettings ? (
            <div className="flex-1 flex flex-col p-5 bg-[#1a1a1a] overflow-y-auto">
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-[#2563eb]">Sanjeevani Settings</h3>
              <div className="space-y-4 flex-1">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#ECE4DA]/60 mb-1">Vapi Public Key</label>
                  <input
                    type="text"
                    value={vapiPublicKey}
                    onChange={(e) => setVapiPublicKey(e.target.value)}
                    placeholder="e.g. 1a2b3c4d-5e6f..."
                    className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-[#ECE4DA] placeholder-[#ECE4DA]/30 focus:outline-none focus:border-[#2563eb]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#ECE4DA]/60 mb-1">Vapi Assistant ID</label>
                  <input
                    type="text"
                    value={vapiAssistantId}
                    onChange={(e) => setVapiAssistantId(e.target.value)}
                    placeholder="e.g. a1b2c3d4-e5f6..."
                    className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-[#ECE4DA] placeholder-[#ECE4DA]/30 focus:outline-none focus:border-[#2563eb]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#ECE4DA]/60 mb-1">Gemini API Key</label>
                  <input
                    type="password"
                    value={geminiApiKey}
                    onChange={(e) => setGeminiApiKey(e.target.value)}
                    placeholder="AIzaSy..."
                    className="w-full px-3 py-2 bg-black/60 border border-white/10 rounded-lg text-xs text-[#ECE4DA] placeholder-[#ECE4DA]/30 focus:outline-none focus:border-[#2563eb]"
                  />
                </div>
                <p className="text-[10px] text-[#ECE4DA]/40 leading-relaxed">
                  Keys are saved locally in your browser. Leave Vapi credentials blank to run the voice session in developer sandbox mode.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 py-2 text-xs border border-white/20 rounded-lg hover:bg-white/5 transition-colors uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={saveCredentials}
                  className="flex-1 py-2 text-xs bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg transition-colors uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Save Settings
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Chat Messages Log */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === 'user'
                        ? 'justify-end'
                        : msg.sender === 'system'
                        ? 'justify-center'
                        : 'justify-start'
                    }`}
                  >
                    {msg.sender === 'system' ? (
                      <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-[#ECE4DA]/50 border border-white/5 text-center max-w-[85%] font-sans font-light">
                        {msg.text}
                      </div>
                    ) : (
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#2563eb] text-white rounded-br-none shadow-[0_4px_15px_rgba(37,99,235,0.2)]'
                            : 'bg-white/10 text-[#ECE4DA] rounded-bl-none border border-white/5'
                        }`}
                      >
                        {msg.text}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Voice Visualizer Waves Area */}
              {callActive && (
                <div className="h-14 bg-black/30 border-t border-white/5 flex items-center justify-center gap-1 px-4">
                  <div className="text-[10px] tracking-wider uppercase text-green-400 mr-2 font-semibold">Voice Streaming</div>
                  <div className="flex items-center gap-1 h-6">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-[#2563eb] rounded-full transition-all duration-150"
                        style={{
                          height: callActive ? `${Math.max(6, voiceVolume * (30 - i * 2) * Math.random())}px` : '4px',
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Console Input Options Footer */}
              <div className="p-4 bg-black/30 border-t border-white/10 space-y-3">
                <div className="flex gap-2">
                  {/* Push-to-Talk Mic Dialer */}
                  <button
                    onClick={toggleVoiceCall}
                    disabled={connecting}
                    className={`h-10 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-semibold text-xs tracking-wider uppercase flex-1 border cursor-pointer ${
                      callActive
                        ? 'bg-red-600 hover:bg-red-700 text-white border-red-500'
                        : connecting
                        ? 'bg-white/10 text-white/50 border-white/10 cursor-not-allowed'
                        : 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white border-[#2563eb]'
                    }`}
                  >
                    {connecting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Linking...</span>
                      </>
                    ) : callActive ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <rect x="3" y="11" width="18" height="2" rx="1" />
                        </svg>
                        <span>Disconnect</span>
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        </svg>
                        <span>Voice Intake</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Text Command Form */}
                <form onSubmit={handleSendCommand} className="flex gap-2">
                  <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Type command (e.g. 'triage chest pain')"
                    className="flex-1 h-10 px-3.5 bg-white/5 border border-white/10 rounded-xl text-xs text-[#ECE4DA] placeholder-[#ECE4DA]/40 focus:outline-none focus:border-[#2563eb] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-10 h-10 bg-white/15 hover:bg-white/25 rounded-xl flex items-center justify-center border border-white/5 text-[#ECE4DA] transition-colors cursor-pointer"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
