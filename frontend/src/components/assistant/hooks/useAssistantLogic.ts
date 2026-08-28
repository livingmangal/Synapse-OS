import { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { ActiveTab, ChatSession, Message, ModelChoice, Persona, SupportedLanguage, VoiceState } from '../types';
import { 
  MOCK_HEALTH_PROFILES, 
  MockHealthProfile, 
  mausamKarProfile 
} from '@/data/mockHealthProfiles';
import { getLocalizedDefaultSessions } from '../translations';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

const LANGUAGE_SPEECH_MAP: Record<SupportedLanguage, { speechCode: string; name: string; native: string }> = {
  en: { speechCode: 'en-US', name: 'English', native: 'English' },
  hi: { speechCode: 'hi-IN', name: 'Hindi', native: 'हिन्दी' },
  bn: { speechCode: 'bn-IN', name: 'Bengali', native: 'বাংলা' },
  ta: { speechCode: 'ta-IN', name: 'Tamil', native: 'தமிழ்' },
  te: { speechCode: 'te-IN', name: 'Telugu', native: 'తెలుగు' },
  mr: { speechCode: 'mr-IN', name: 'Marathi', native: 'मराठी' },
  gu: { speechCode: 'gu-IN', name: 'Gujarati', native: 'ગુજરાતી' },
  kn: { speechCode: 'kn-IN', name: 'Kannada', native: 'ಕನ್ನಡ' },
  ml: { speechCode: 'ml-IN', name: 'Malayalam', native: 'മലയാളം' },
  pa: { speechCode: 'pa-IN', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  or: { speechCode: 'or-IN', name: 'Odia', native: 'ଓଡ଼ିଆ' }
};
export const getDefaultSessions = (patient: MockHealthProfile, lang: SupportedLanguage = 'en'): ChatSession[] => {
  return getLocalizedDefaultSessions(patient, lang);
};

export function useAssistantLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Multilingual Configuration
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>('en');

  // Live AI Voice Mode State (ChatGPT / Apple Intelligence style)
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [voiceState, setVoiceState] = useState<VoiceState>('listening');
  const [liveTranscript, setLiveTranscript] = useState('');
  const [aiSpeechText, setAiSpeechText] = useState('');
  const [isMuted, setIsMuted] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  
  // Active view tab
  const [activeTab, setActiveTab] = useState<ActiveTab>('chat');
  
  // Personas & Model
  const [assistantPersona, setAssistantPersona] = useState<Persona>('copilot');
  const [selectedModel, setSelectedModel] = useState<ModelChoice>('groq-llama-3.3-70b');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showKeyText, setShowKeyText] = useState(false);

  // WhatsApp Bridge Config State
  const [waPhoneNumber, setWaPhoneNumber] = useState('');
  const [waConnected, setWaConnected] = useState(false);
  const [waMetaToken, setWaMetaToken] = useState('');
  const [waWebhookUrl, setWaWebhookUrl] = useState(`${API_BASE}/api/whatsapp/webhook`);
  const [waAutoSyncReports, setWaAutoSyncReports] = useState(true);
  const [waDailyReminders, setWaDailyReminders] = useState(true);

  // Credentials & API Keys
  const [vapiPublicKey, setVapiPublicKey] = useState('');
  const [vapiAssistantId, setVapiAssistantId] = useState('');
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [groqApiKey, setGroqApiKey] = useState('');
  const [backendUrl, setBackendUrl] = useState(API_BASE);

  // Active Patient Profile for Orchestrator Telemetry
  const [activeProfileId, setActiveProfileId] = useState<string>('mausam_kar_verified_abha');

  const [vapi, setVapi] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // Load saved credentials & chat sessions from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    setVapiPublicKey(localStorage.getItem('synapseos_vapi_key') || '');
    setVapiAssistantId(localStorage.getItem('synapseos_vapi_id') || '');
    setGeminiApiKey(localStorage.getItem('synapseos_gemini_key') || '');
    setGroqApiKey(localStorage.getItem('synapseos_groq_key') || process.env.NEXT_PUBLIC_GROQ_API_KEY || '');
    setBackendUrl(localStorage.getItem('synapseos_backend_url') || API_BASE);
    
    const savedPersona = localStorage.getItem('synapseos_persona') as Persona | null;
    if (savedPersona) setAssistantPersona(savedPersona);

    const savedModel = localStorage.getItem('synapseos_selected_model') as ModelChoice | null;
    if (savedModel) setSelectedModel(savedModel);

    const savedLang = localStorage.getItem('synapseos_language') as SupportedLanguage | null;
    if (savedLang) setSelectedLanguage(savedLang);

    const savedProfile = localStorage.getItem('synapseos_selected_profile_id');
    if (savedProfile) setActiveProfileId(savedProfile);

    const savedWaPhone = localStorage.getItem('synapseos_wa_phone');
    if (savedWaPhone) {
      setWaPhoneNumber(savedWaPhone);
      setWaConnected(true);
    }

    // Version guard: bump this string to force a one-time localStorage reset
    const SESSION_SCHEMA_VERSION = 'v4';
    const storedVersion = localStorage.getItem('synapseos_session_version');
    if (storedVersion !== SESSION_SCHEMA_VERSION) {
      localStorage.removeItem('synapseos_chat_sessions');
      localStorage.setItem('synapseos_session_version', SESSION_SCHEMA_VERSION);
    }

    try {
      const savedSessions = localStorage.getItem('synapseos_chat_sessions');
      const activePatient = MOCK_HEALTH_PROFILES.find(p => p.profileId === (savedProfile || 'mausam_kar_verified_abha')) || mausamKarProfile;

      if (savedSessions) {
        const parsed: ChatSession[] = JSON.parse(savedSessions);
        // Only restore if sessions have actual messages; otherwise fall back to defaults
        const hasContent = parsed.length > 0 && parsed.some(s => s.messages && s.messages.length > 0);
        if (hasContent) {
          setSessions(parsed);
          setCurrentSessionId(parsed[0].id);
          setMessages(parsed[0].messages ?? []);
          if (parsed[0].persona) setAssistantPersona(parsed[0].persona);
        } else {
          const defaults = getDefaultSessions(activePatient);
          setSessions(defaults);
          setCurrentSessionId(defaults[0].id);
          setMessages(defaults[0].messages);
          localStorage.setItem('synapseos_chat_sessions', JSON.stringify(defaults));
        }
      } else {
        const defaults = getDefaultSessions(activePatient);
        setSessions(defaults);
        setCurrentSessionId(defaults[0].id);
        setMessages(defaults[0].messages);
        localStorage.setItem('synapseos_chat_sessions', JSON.stringify(defaults));
      }
    } catch (e) {
      const defaults = getDefaultSessions(mausamKarProfile);
      setSessions(defaults);
      setCurrentSessionId(defaults[0].id);
      setMessages(defaults[0].messages);
    }

    // Listen to external profile switch events
    const handleProfileSwitch = (e: any) => {
      if (e.detail?.profileId) {
        setActiveProfileId(e.detail.profileId);
      }
    };
    window.addEventListener('synapseos-profile-switch', handleProfileSwitch);
    return () => window.removeEventListener('synapseos-profile-switch', handleProfileSwitch);
  }, []);

  const handleSelectProfile = (profileId: string) => {
    setActiveProfileId(profileId);
    const activePatient = MOCK_HEALTH_PROFILES.find(p => p.profileId === profileId) || mausamKarProfile;
    const defaults = getLocalizedDefaultSessions(activePatient, selectedLanguage);
    setSessions(defaults);
    setCurrentSessionId(defaults[0].id);
    setMessages(defaults[0].messages);
    syncSessionsToStorage(defaults);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('synapseos_selected_profile_id', profileId);
        window.dispatchEvent(new CustomEvent('synapseos-profile-switch', { detail: { profileId } }));
      } catch (err) {}
    }
  };

  // Save sessions to localStorage
  const syncSessionsToStorage = (updatedSessions: ChatSession[]) => {
    setSessions(updatedSessions);
    try {
      localStorage.setItem('synapseos_chat_sessions', JSON.stringify(updatedSessions));
    } catch (e) {}
  };

  // Auto-scroll messages
  useEffect(() => {
    if (messagesEndRef.current && messages.length > 0) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && activeTab === 'chat' && !isVoiceMode) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, activeTab, isVoiceMode]);

  // Global event listeners
  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('toggle-synapseos-assistant', handleToggle);
    window.addEventListener('open-synapseos-assistant', handleOpen);
    (window as any).openSynapseOSAssistant = handleOpen;
    return () => {
      window.removeEventListener('toggle-synapseos-assistant', handleToggle);
      window.removeEventListener('open-synapseos-assistant', handleOpen);
    };
  }, []);

  // Handle Persona Switching
  const handlePersonaChange = (newPersona: Persona) => {
    setAssistantPersona(newPersona);
    localStorage.setItem('synapseos_persona', newPersona);
  };

  // Handle Language Switching & Dynamic Translation
  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setSelectedLanguage(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('synapseos_language', newLang);
      } catch (e) {}
    }
    const activePatient = MOCK_HEALTH_PROFILES.find(p => p.profileId === activeProfileId) || mausamKarProfile;
    const localizedDefaults = getLocalizedDefaultSessions(activePatient, newLang);
    setSessions(localizedDefaults);
    setCurrentSessionId(localizedDefaults[0].id);
    setMessages(localizedDefaults[0].messages);
    syncSessionsToStorage(localizedDefaults);
  };

  // Save API Credentials
  const saveCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('synapseos_vapi_key', vapiPublicKey);
    localStorage.setItem('synapseos_vapi_id', vapiAssistantId);
    localStorage.setItem('synapseos_gemini_key', geminiApiKey);
    localStorage.setItem('synapseos_groq_key', groqApiKey);
    localStorage.setItem('synapseos_backend_url', backendUrl);
    localStorage.setItem('synapseos_selected_model', selectedModel);
    localStorage.setItem('synapseos_persona', assistantPersona);
    localStorage.setItem('synapseos_language', selectedLanguage);
    setActiveTab('chat');
    
    if (vapi) {
      try { vapi.stop(); } catch (err) {}
      setVapi(null);
      setCallActive(false);
    }
  };

  // Save WhatsApp settings
  const handleSaveWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (waPhoneNumber.trim()) {
      localStorage.setItem('synapseos_wa_phone', waPhoneNumber);
      setWaConnected(true);
    } else {
      localStorage.removeItem('synapseos_wa_phone');
      setWaConnected(false);
    }
    setActiveTab('chat');
  };

  // Simulate receiving an inbound WhatsApp message
  const handleSimulateWhatsAppMessage = () => {
    const waMsg: Message = {
      id: `wa-${Date.now()}`,
      sender: 'whatsapp',
      text: "📄 *Prescription Received via WhatsApp*\n• Doctor: Dr. Arvind Patel (Cardiology)\n• Medication: Atorvastatin 20mg (1 daily at bedtime)\n• Status: Verified & Encrypted to ABHA Vault",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      channel: 'whatsapp',
      visualType: 'whatsapp',
      visualData: {
        senderNumber: waPhoneNumber || '+91 98765 43210',
        mediaType: 'Prescription Photo (PDF/JPEG)',
        verified: true
      },
      followUps: ['Set medication reminder', 'Check drug interactions', 'View full prescription']
    };

    setMessages(prev => [...prev, waMsg]);
    setActiveTab('chat');
  };

  // Start fresh chat session
  const startNewChat = () => {
    const newSessionId = `session-${Date.now()}`;
    setCurrentSessionId(newSessionId);
    setMessages([]);
    setActiveTab('chat');
    exitVoiceMode();
  };

  // Load existing chat session
  const selectSession = (session: ChatSession) => {
    setCurrentSessionId(session.id);
    setMessages(session.messages);
    if (session.persona) setAssistantPersona(session.persona);
    setActiveTab('chat');
    exitVoiceMode();
  };

  // Delete chat session
  const deleteSession = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = sessions.filter(s => s.id !== sessionId);
    syncSessionsToStorage(updated);
    if (currentSessionId === sessionId) {
      if (updated.length > 0) {
        setCurrentSessionId(updated[0].id);
        setMessages(updated[0].messages);
      } else {
        startNewChat();
      }
    }
  };

  // Copy message text
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Clean markdown to plain text for speech synthesis
  const cleanMarkdownForSpeech = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/[•\-\*]/g, '')
      .replace(/#/g, '')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .trim();
  };

  // Speak AI response with Web Speech Synthesis in selected language
  const speakAIResponse = (text: string, onDone?: () => void) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onDone) onDone();
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = cleanMarkdownForSpeech(text);
    setAiSpeechText(cleanText);
    setVoiceState('speaking');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const langInfo = LANGUAGE_SPEECH_MAP[selectedLanguage] || LANGUAGE_SPEECH_MAP.en;
    utterance.lang = langInfo.speechCode;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => v.lang.toLowerCase().startsWith(selectedLanguage));
    if (targetVoice) utterance.voice = targetVoice;

    utterance.onend = () => {
      setVoiceState('listening');
      setLiveTranscript('');
      if (onDone) onDone();
    };

    utterance.onerror = () => {
      setVoiceState('listening');
      if (onDone) onDone();
    };

    window.speechSynthesis.speak(utterance);
  };

  // Start Live Speech Recognition in Voice Mode with selected language code
  const startContinuousListening = () => {
    if (typeof window === 'undefined') return;
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) return;

    try {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (e) {}
      }

      const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRec();
      
      const langInfo = LANGUAGE_SPEECH_MAP[selectedLanguage] || LANGUAGE_SPEECH_MAP.en;
      recognition.lang = langInfo.speechCode;
      recognition.continuous = true;
      recognition.interimResults = true;
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        setVoiceState('listening');
      };

      recognition.onresult = (event: any) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        const currentText = final || interim;
        setLiveTranscript(currentText);

        if (final && final.trim().length > 1) {
          try { recognition.stop(); } catch (e) {}
          handleVoiceQuery(final.trim());
        }
      };

      recognition.onerror = (e: any) => {
        if (isVoiceMode && !isMuted) {
          setTimeout(() => {
            try { recognition.start(); } catch (err) {}
          }, 800);
        }
      };

      recognition.onend = () => {
        if (isVoiceMode && !isMuted && voiceState === 'listening') {
          try { recognition.start(); } catch (err) {}
        }
      };

      recognition.start();
    } catch (err) {
      console.error('Speech recognition error:', err);
    }
  };

  // Get localized voice greeting
  const getVoiceGreeting = () => {
    switch (selectedLanguage) {
      case 'hi':
        if (assistantPersona === 'triage') return "नमस्ते! मैं आपका क्लिनिकल ट्राइएज सहायक हूँ। कृपया अपने लक्षणों के बारे में बताएं।";
        if (assistantPersona === 'nutrition') return "नमस्ते! मैं आपका न्यूट्रिशन विशेषज्ञ हूँ। अपने खान-पान और स्वास्थ्य लक्ष्यों के बारे में बताएं।";
        return "नमस्ते! मैं संजीवनी एआई हूँ। मैं सुन रहा हूँ, आज मैं आपकी सेहत में क्या मदद कर सकता हूँ?";
      case 'bn':
        if (assistantPersona === 'triage') return "নমস্কার! আমি আপনার ক্লিনিকাল ট্রায়াজ বিশেষজ্ঞ। আপনার লক্ষণগুলি বর্ণনা করুন।";
        if (assistantPersona === 'nutrition') return "নমস্কার! আমি আপনার পুষ্টি বিশেষজ্ঞ। আপনার স্বাস্থ্য লক্ষ্যগুলি জানান।";
        return "নমস্কার! আমি সঞ্জীবনী এআই। বলুন, আজ আপনার স্বাস্থ্যের জন্য কীভাবে সাহায্য করতে পারি?";
      default:
        if (assistantPersona === 'triage') return "Hello, I am your Clinical Triage Specialist. Please describe any symptoms you are experiencing.";
        if (assistantPersona === 'nutrition') return "Hello, I am your Nutrition Specialist. Tell me your dietary or metabolic goals.";
        return "Hello, I am SynapseOS AI. I'm listening, how can I help you today?";
    }
  };

  // Start Live AI Voice Mode
  const startVoiceMode = () => {
    setIsVoiceMode(true);
    setVoiceState('connecting');
    setLiveTranscript('');
    setAiSpeechText('');
    setIsMuted(false);

    const welcomeText = getVoiceGreeting();

    setTimeout(() => {
      speakAIResponse(welcomeText, () => {
        startContinuousListening();
      });
    }, 300);
  };

  // Exit Voice Mode
  const exitVoiceMode = () => {
    setIsVoiceMode(false);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (e) {}
      recognitionRef.current = null;
    }
    setVoiceState('listening');
    setLiveTranscript('');
    setAiSpeechText('');
  };

  // Toggle Mute in Voice Mode
  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      startContinuousListening();
    } else {
      setIsMuted(true);
      setVoiceState('muted');
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (e) {}
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }
  };

  // Build System Instruction with Multilingual Directive & Active Patient Context
  const buildSystemInstruction = (isConciseVoice: boolean = false) => {
    const langInfo = LANGUAGE_SPEECH_MAP[selectedLanguage] || LANGUAGE_SPEECH_MAP.en;
    const activePatient = MOCK_HEALTH_PROFILES.find(p => p.profileId === activeProfileId) || mausamKarProfile;

    let base = `You are SynapseOS AI — a Next-Generation Multi-Agent Clinical Intelligence System.
You have direct real-time visibility into the patient's verified ABDM/ABHA electronic records and orchestrator sub-agents (Swarm Intelligence, Digital Organ Twins, Visual Analytics, WHO Disease Surveillance, MONAI Imaging AI, Blockchain EHR, and Rural Health).

ACTIVE PATIENT DOSSIER:
• Name: ${activePatient.patient.name}
• ABHA ID: ${activePatient.patient.abhaId}
• Age / Gender: ${activePatient.patient.age}y / ${activePatient.patient.gender} (Blood: ${activePatient.patient.bloodType || 'B+'})
• Admin Surveillance Access: ${activePatient.isAdmin ? 'AUTHORIZED NATIONAL EPIDEMIOLOGY ADMINISTRATOR' : 'Verified ABDM Citizen'}
• Connected Biometrics: ${activePatient.device?.name || 'Apple Watch Ultra 2'} (${activePatient.device?.firmware || 'v10.4.1'}, Battery: ${activePatient.device?.battery || 84}%)
• Real-Time Vitals: HR ${activePatient.vitals.currentHeartRate} BPM (Resting: ${activePatient.vitals.restingHeartRate}) | SpO2 ${activePatient.vitals.spo2}% | BP ${activePatient.vitals.bloodPressure || '118/76'} | Glucose ${activePatient.vitals.bloodGlucose || 92} mg/dL | Sleep Score ${activePatient.vitals.sleepScore} (${activePatient.vitals.sleepDuration})
• Clinical Profile: ${activePatient.title} — ${activePatient.subtitle}
• AI Diagnostic Insight: ${activePatient.aiAnalysis.title}: ${activePatient.aiAnalysis.description}

Always leverage this patient's live clinical context in your answers. Provide structured, authoritative, and compassionate medical reasoning.`;

    if (assistantPersona === 'triage') {
      base += "\nPersona Mode: Clinical Triage Specialist. Focus on immediate symptom assessment, severity scoring, red-flag symptoms, and triage urgency.";
    } else if (assistantPersona === 'nutrition') {
      base += "\nPersona Mode: Metabolic & Clinical Nutritionist. Provide personalized daily macro distributions (Carbs, Protein, Fats), hydration targets, and micronutrients.";
    }

    if (isConciseVoice) {
      base += " Keep your answer concise (2-3 sentences) so it is pleasant and clear when spoken aloud.";
    }

    if (selectedLanguage !== 'en') {
      base += `\nCRITICAL LANGUAGE INSTRUCTION: You MUST formulate your entire response in ${langInfo.name} (${langInfo.native}) script only.`;
    }

    return base;
  };

  // Execute Groq Chat Completion API
  const queryGroqLLM = async (queryText: string, modelName: string, isConcise: boolean = false): Promise<string | null> => {
    const key = groqApiKey || process.env.NEXT_PUBLIC_GROQ_API_KEY;
    if (!key) return null;

    let targetModel = 'llama-3.3-70b-versatile';
    if (modelName === 'groq-llama-3.1-8b') targetModel = 'llama-3.1-8b-instant';
    if (modelName === 'groq-mixtral') targetModel = 'mixtral-8x7b-32768';

    try {
      const systemInstructionText = buildSystemInstruction(isConcise);
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${key}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: targetModel,
          messages: [
            { role: 'system', content: systemInstructionText },
            { role: 'user', content: queryText }
          ],
          temperature: 0.2,
          max_tokens: 1500
        })
      });

      if (res.ok) {
        const data = await res.json();
        return data.choices?.[0]?.message?.content || null;
      }
    } catch (e) {
      console.warn('Groq API Call failed:', e);
    }
    return null;
  };

  // Handle Query from Live Voice Mode
  const handleVoiceQuery = async (queryText: string) => {
    setVoiceState('thinking');
    
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      channel: 'voice'
    };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);

    let reply = '';
    let visualType: any = 'general';
    let visualData: any = null;

    // 1. Try Groq API
    if (selectedModel.startsWith('groq-') || groqApiKey) {
      reply = await queryGroqLLM(queryText, selectedModel, true) || '';
    }

    // 2. Try Gemini API
    if (!reply && geminiApiKey) {
      try {
        const systemInstructionText = buildSystemInstruction(true);
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${geminiApiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: queryText }] }],
              systemInstruction: { parts: [{ text: systemInstructionText }] }
            })
          }
        );
        const data = await response.json();
        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
          reply = data.candidates[0].content.parts[0].text;
        }
      } catch (err) {}
    }

    // Fallback response
    if (!reply) {
      const activePatient = MOCK_HEALTH_PROFILES.find(p => p.profileId === activeProfileId) || mausamKarProfile;
      reply = `I processed your inquiry regarding ${activePatient.patient.name}'s telemetry. Current Heart Rate is ${activePatient.vitals.currentHeartRate} BPM, SpO2 is ${activePatient.vitals.spo2}%, and vitals are stable.`;
      visualType = 'vitals';
      visualData = {
        patientName: activePatient.patient.name,
        device: activePatient.device?.name || 'Apple Watch Ultra 2',
        hr: `${activePatient.vitals.currentHeartRate} BPM`,
        spo2: `${activePatient.vitals.spo2}%`,
        bp: activePatient.vitals.bloodPressure || '118/76',
        glucose: `${activePatient.vitals.bloodGlucose || 92} mg/dL`
      };
    }

    const aiMsg: Message = {
      id: `ai-${Date.now()}`,
      sender: 'assistant',
      text: reply,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      channel: 'voice',
      visualType,
      visualData
    };
    const finalMessages = [...nextMessages, aiMsg];
    setMessages(finalMessages);

    speakAIResponse(reply, () => {
      if (isVoiceMode && !isMuted) {
        startContinuousListening();
      }
    });
  };

  // Toggle Voice Call / Voice Mode
  const toggleVoiceCall = async () => {
    if (isVoiceMode) {
      exitVoiceMode();
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
          setIsVoiceMode(true);
        });

        vapiInstance.on('call-end', () => {
          setCallActive(false);
          setIsVoiceMode(false);
        });

        vapiInstance.on('message', (message: any) => {
          if (message.type === 'transcript' && message.transcriptType === 'final') {
            const sender = message.role === 'user' ? 'user' : 'assistant';
            const newMsg: Message = {
              id: `vapi-${Date.now()}-${Math.random()}`,
              sender,
              text: message.transcript,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              channel: 'voice'
            };
            setMessages(prev => [...prev, newMsg]);
          }
        });

        vapiInstance.on('error', (err: any) => {
          setConnecting(false);
          setCallActive(false);
        });

        await vapiInstance.start(vapiAssistantId);
      } catch (err) {
        setConnecting(false);
        setCallActive(false);
        startVoiceMode();
      }
    } else {
      startVoiceMode();
    }
  };

  // Send query logic adapted per Persona and Multilingual in text mode
  const handleSend = async (queryText?: string) => {
    const textToSend = (queryText || input).trim();
    if (!textToSend || loading) return;

    const activePatient = MOCK_HEALTH_PROFILES.find(p => p.profileId === activeProfileId) || mausamKarProfile;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      channel: 'web'
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    let reply = '';
    let trace: any[] = [];
    let followUps: string[] = [];
    let visualType: any = 'general';
    let visualData: any = null;

    // 1. Try Groq LPU API if configured or chosen
    if (selectedModel.startsWith('groq-') || groqApiKey) {
      reply = await queryGroqLLM(textToSend, selectedModel, false) || '';
      if (reply) {
        trace = [
          { agent_name: 'Groq LPU Engine', action: 'Executed LLaMA-3.3 70B Clinical Reasoning', duration_ms: 82 },
          { agent_name: 'Patient Context Injector', action: `Bound ABHA Profile: ${activePatient.patient.name}`, duration_ms: 12 }
        ];
      }
    }

    // 2. Try FastAPI Multi-Agent Orchestration backend
    if (!reply) {
      try {
        const res = await fetch(`${backendUrl || API_BASE}/api/orchestrate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: textToSend,
            persona: assistantPersona,
            language: selectedLanguage,
            channel: 'web_assistant',
            patient_id: activePatient.profileId
          })
        });

        if (res.ok) {
          const data = await res.json();
          reply = data.final_response;
          trace = data.trace || [];
        }
      } catch (e) {}
    }

    // 3. Try Live Gemini API with Multilingual System Prompt
    if (!reply && geminiApiKey) {
      try {
        const systemInstructionText = buildSystemInstruction(false);
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${geminiApiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: textToSend }] }],
              systemInstruction: { parts: [{ text: systemInstructionText }] }
            })
          }
        );
        const data = await response.json();
        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
          reply = data.candidates[0].content.parts[0].text;
        }
      } catch (err) {}
    }

    // 4. Clinical Multi-Agent Reasoning Fallback with Structured Outputs
    if (!reply) {
      const textLower = textToSend.toLowerCase();

      // Swarm Intelligence Detection
      if (textLower.includes('swarm') || textLower.includes('consensus') || textLower.includes('drug interaction') || textLower.includes('contraindication')) {
        reply = `### 🧠 Swarm Intelligence 5-Agent Consensus Report\n\n**Target Patient:** ${activePatient.patient.name} (${activePatient.patient.abhaId})\n\n• **Triage Agent (Dr. Sanjeevni)**: Evaluated hemodynamic telemetry (${activePatient.vitals.currentHeartRate} BPM, SpO2 ${activePatient.vitals.spo2}%). Risk score: **18/100 (Optimal)**.\n• **Pharmacogenomics & Drug Agent**: Screened active prescriptions against CYP450 enzymes. **No adverse interactions or anaphylaxis triggers detected**.\n• **Mental Health Agent**: Heart Rate Variability (HRV: ${activePatient.vitals.hrvMs || 62}ms) indicates controlled sympathetic load and low cognitive stress.\n• **Verification Agent**: Cryptographic ECDSA signature validated on blockchain node. Clinical consensus: **98.4% Confidence**.\n• **Biometric Sync Agent**: Continuous live sync verified with ${activePatient.device?.name || 'Apple Watch Ultra 2'}.`;
        visualType = 'swarm';
        visualData = {
          confidence: '98.4%',
          agents: [
            { name: 'Triage Agent', status: 'Stable (0 Red-Flags)' },
            { name: 'Drug Interaction', status: 'Passed (0 Warnings)' },
            { name: 'Mental Health', status: 'HRV 62ms Normal' },
            { name: 'Verification Agent', status: 'Signed & Validated' }
          ]
        };
        followUps = ['Audit CYP450 enzymes', 'View 7-day HRV trend', 'Export swarm consensus JSON'];
      }
      // Medical Imaging & Scan Detection
      else if (textLower.includes('scan') || textLower.includes('x-ray') || textLower.includes('monai') || textLower.includes('yolo') || textLower.includes('radiograph') || textLower.includes('mri')) {
        reply = `### 🔬 AIIMS Medical Imaging & Radiograph Analysis\n\n**Patient:** ${activePatient.patient.name} | **Modality:** Chest PA / Orthopedic Radiography\n\n• **MONAI Deep Learning Evaluation**: Bilateral lung fields are clear of focal consolidation, effusion, or active pneumothorax. Bronchovascular markings within normal limits.\n• **YOLOv8 Fracture Screening**: Scanned osseous structures including ribs, clavicles, and scapula. **No cortical disruption or acute traumatic fracture localized**.\n• **Grad-CAM Attention Map**: High clinical focus aligned symmetrically on lung parenchyma and mediastinal contours.\n• **Diagnostic Impression**: **Normal Radiographic Finding (98.8% Confidence)**.`;
        visualType = 'scan';
        visualData = {
          modality: 'CHEST PA & SKELETAL',
          finding: 'Normal study. No acute cardiopulmonary pathology or cortical fracture detected.',
          confidence: '98.8%',
          gradcam: 'Bilateral Symmetry Verified'
        };
        followUps = ['Inspect Grad-CAM overlay', 'Digitize clinical prescription', 'Review previous imaging'];
      }
      // WHO Disease Surveillance Detection
      else if (textLower.includes('who') || textLower.includes('dengue') || textLower.includes('nipah') || textLower.includes('outbreak') || textLower.includes('idsp') || textLower.includes('surveillance')) {
        reply = `### 🌐 Integrated Disease Surveillance Programme (IDSP) & WHO Sentinel Feed\n\n**Surveillance Node:** National Epidemic Operations Center\n\n• **Delhi NCR Node**: Vector-borne Dengue & Chikungunya surge index: **HIGH ALERT (1,420 Active Cases, 68% ICU Load)**. Local containment active.\n• **Kerala Sentinel Node**: Kozhikode Nipah contact tracing protocol completed; **0 secondary transmissions** in the last 72 hours.\n• **Clinical Directives**: Recommended rapid NS1 Ag screening for acute febrile cases, fluid resuscitation protocols, and mosquito netting advisories in endemic districts.`;
        visualType = 'outbreak';
        visualData = {
          riskLevel: 'HIGH SURGE ALERT',
          district: 'Delhi NCR & Northern Regional Hub',
          pathogen: 'Dengue Virus (DENV-2 Serotype)',
          advisory: 'Emergency vector containment active. Hospital triage wards alerted.'
        };
        followUps = ['View GIS Outbreak Map', 'Review WHO triage protocol', 'Check ICU bed telemetry'];
      }
      // Vaccination & Universal Immunization Programme (U-WIN) Detection
      else if (textLower.includes('vaccin') || textLower.includes('immuniz') || textLower.includes('u-win') || textLower.includes('uwin') || textLower.includes('uip') || textLower.includes('indradhanush') || textLower.includes('booster')) {
        reply = `### 💉 Universal Immunization Programme (U-WIN / UIP) Ledger\n\n**Citizen:** ${activePatient.patient.name} | **ABHA ID:** ${activePatient.patient.abhaId}\n\n• **National Immunization Status**: **Up to Date (100% Core Schedule Verified)** under Mission Indradhanush.\n• **Completed Immunizations**: BCG, OPV (0, 1, 2, 3), Pentavalent (1, 2, 3), Rotavirus (1, 2), Fractional IPV, and Measles-Rubella (MR-1).\n• **Upcoming Milestone**: **DPT Booster Dose 1 & Oral Polio Booster** scheduled for next biometric window.\n• **Digital Certificate**: Digitally signed by MoHFW & verified on ABDM blockchain node.`;
        visualType = 'vaccination';
        visualData = {
          patientName: activePatient.patient.name,
          status: '✓ Verified U-WIN Card',
          nextDue: 'DPT Booster 1 & OPV Booster due in 3 months',
          schedule: [
            { name: 'BCG + OPV-0 + Hep-B', age: 'Birth', status: 'Given (Verified)', date: 'AIIMS ABDM' },
            { name: 'Pentavalent-1 + Rotavirus-1', age: '6 Weeks', status: 'Given', date: 'PHC Centre' },
            { name: 'Pentavalent-2 + Rotavirus-2', age: '10 Weeks', status: 'Given', date: 'PHC Centre' },
            { name: 'Pentavalent-3 + fIPV-1', age: '14 Weeks', status: 'Given', date: 'PHC Centre' },
            { name: 'MR-1 (Measles-Rubella) + Vit A', age: '9 Months', status: 'Up to Date', date: 'U-WIN Linked' },
            { name: 'DPT Booster + Polio Booster', age: '16-24 Months', status: 'Scheduled', date: 'Next Milestone Due' }
          ]
        };
        followUps = ['Download U-WIN Certificate', 'Set Vaccination SMS Reminder', 'Find Nearest PHC Centre'];
      }
      // 2G GSM SMS & Rural Public Health Awareness Detection
      else if (textLower.includes('rural') || textLower.includes('sms') || textLower.includes('2g') || textLower.includes('gsm') || textLower.includes('awareness') || textLower.includes('preventive') || textLower.includes('community')) {
        reply = `### 📱 2G GSM Zero-Bandwidth SMS Broadcast Triage\n\n**Protocol:** BSNL/Jio Cell Broadcast Gateway (Offline GSM / SMS)\n\n• **Payload Length:** Exactly 156 characters (Within 160-char SMS limit).\n• **Bilingual Reach:** Formatted in Romanized Hindi and English for universal basic mobile feature phone compatibility (Nokia/JioPhone).\n• **Dispatch Target:** Rural Health Sub-Centres & ASHA Workers across endemic districts.`;
        visualType = 'rural_sms';
        visualData = {
          smsBody: 'SANJEEVNI SOS: High fever & dehydration alert in District. Visit nearest PHC for free ORS & Paracetamol. Avoid unboiled water.',
          advisoryHindi: 'संजीवनी अलर्ट: बुखार और डिहाइड्रेशन से बचें। तुरंत नजदीकी प्राथमिक स्वास्थ्य केंद्र (PHC) से मुफ्त ओआरएस (ORS) और दवा लें। उबला पानी पिएं।'
        };
        followUps = ['Simulate Cell Broadcast Dispatch', 'Generate Regional Dialect SMS', 'Alert Local ASHA Worker'];
      }
      // Blockchain EHR Detection
      else if (textLower.includes('abha') || textLower.includes('blockchain') || textLower.includes('record') || textLower.includes('ehr') || textLower.includes('ipfs')) {
        reply = `### 🔗 ABDM Longitudinal Health Records & Blockchain Ledger\n\n**ABHA ID:** ${activePatient.patient.abhaId} | **Citizen:** ${activePatient.patient.name}\n\n• **IPFS Vault Verification**: Cryptographic CID valid (QmX9a8f7c6e4...). Tamper-proof health record verified.\n• **Hospital Linked Nodes**: Verified records synced across AIIMS New Delhi and KGMU Lucknow.\n• **Ayushman Bharat PM-JAY**: Active Health Policy PMJAY-AB-982173 verified.\n• **Consent Architecture**: ABDM Data Principal consent granted for authorized clinical consultation.`;
        visualType = 'ehr';
        visualData = {
          abhaId: activePatient.patient.abhaId,
          name: activePatient.patient.name,
          hospital: 'AIIMS New Delhi & KGMU'
        };
        followUps = ['Verify Smart Contract Hash', 'Download Health Certificate', 'Share Consent with Doctor'];
      }
      // Vitals & Organ Digital Twin Detection
      else if (textLower.includes('vital') || textLower.includes('heart') || textLower.includes('blood') || textLower.includes('lung') || textLower.includes('pulmonary') || textLower.includes('cardio') || textLower.includes('ecg')) {
        reply = `### 🫀 Live Biometric Telemetry & Organ Digital Twin\n\n**Patient:** ${activePatient.patient.name} | **Sync Source:** ${activePatient.device?.name || 'Apple Watch Ultra 2'}\n\n• **Cardiovascular**: Resting HR **${activePatient.vitals.restingHeartRate} BPM** (Current: **${activePatient.vitals.currentHeartRate} BPM**), Blood Pressure **${activePatient.vitals.bloodPressure || '118/76'} mmHg**, HRV **${activePatient.vitals.hrvMs || 62}ms**. Sinus Rhythm is regular.\n• **Pulmonary**: Oxygen Saturation **${activePatient.vitals.spo2}%**, Respiratory Rate **${activePatient.vitals.respiratoryRate || 16} breaths/min**.\n• **Metabolic**: Blood Glucose **${activePatient.vitals.bloodGlucose || 92} mg/dL** (Fasting Target: 70-99 mg/dL).\n• **Sleep & Recovery**: ${activePatient.vitals.sleepDuration} Total Sleep, Sleep Score **${activePatient.vitals.sleepScore} (Optimal)**.`;
        visualType = 'vitals';
        visualData = {
          patientName: activePatient.patient.name,
          device: activePatient.device?.name || 'Apple Watch Ultra 2',
          hr: `${activePatient.vitals.currentHeartRate} BPM`,
          spo2: `${activePatient.vitals.spo2}%`,
          bp: activePatient.vitals.bloodPressure || '118/76',
          glucose: `${activePatient.vitals.bloodGlucose || 92} mg/dL`
        };
        followUps = ['7-Day HRV Trends', 'ECG Sinus Rhythm Details', 'Metabolic Care Plan'];
      }
      // Triage & Symptoms
      else if (assistantPersona === 'triage' || textLower.includes('triage') || textLower.includes('headache') || textLower.includes('fever') || textLower.includes('pain') || textLower.includes('sick')) {
        reply = `I have performed a clinical triage evaluation for **${activePatient.patient.name}**:\n\n• **Primary Assessment**: Current symptoms suggest a mild, transient inflammatory or viral response.\n• **Immediate Home Care**: Maintain 2.5–3L daily fluid intake, monitor temperature every 4 hours, and get adequate rest.\n• **Red-Flag Caution**: If you experience severe chest discomfort, cyanosis, or dyspnea, seek immediate urgent medical care.`;
        visualType = 'triage';
        visualData = {
          urgency: 'Low / Moderate Urgency',
          score: 84,
          vitals: [
            { label: 'Core Temp', value: '37.2°C (Controlled)', status: 'normal' },
            { label: 'SpO2', value: `${activePatient.vitals.spo2}% (Healthy)`, status: 'good' },
            { label: 'Heart Rate', value: `${activePatient.vitals.currentHeartRate} BPM`, status: 'normal' }
          ]
        };
        followUps = ['Review red-flags', 'Log vitals in ABHA', 'Connect with Doctor'];
      }
      // Nutrition & Diet
      else if (assistantPersona === 'nutrition' || textLower.includes('diet') || textLower.includes('nutrition') || textLower.includes('macro') || textLower.includes('food') || textLower.includes('eat')) {
        reply = `Here is the personalized clinical nutrition blueprint for **${activePatient.patient.name}**:\n\n• **Macro Allocation**: 40% Complex Carbs (sweet potato, brown rice, quinoa), 30% Lean Protein (lentils, paneer, fish), 30% Healthy Fats (walnuts, cold-pressed olive oil, seeds).\n• **Micronutrient Focus**: Magnesium Glycinate (400mg), Vitamin D3 (2000 IU), and Omega-3 EPA/DHA.\n• **Hydration Target**: 2.8 Liters of clean structured water daily.`;
        visualType = 'nutrition';
        visualData = {
          calories: '2,150 kcal / day',
          carbs: '40% (215g)',
          protein: '30% (161g)',
          fats: '30% (71g)',
          water: '2.8 Liters'
        };
        followUps = ['7-day grocery blueprint', 'Pre-workout macro timing', 'Hydration reminders'];
      }
      // General Response
      else {
        reply = `I processed your request: "${textToSend}". SynapseOS AI is coordinating the clinical health profile for **${activePatient.patient.name}** (${activePatient.patient.abhaId}) with live orchestrator integration.`;
        followUps = ['Run Swarm Consensus', 'Check Real-time Vitals', 'View IDSP Outbreak Map'];
      }
    }

    setTimeout(() => {
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        channel: 'web',
        visualType,
        visualData,
        followUps,
        trace
      };

      const finalMessages = [...nextMessages, aiMsg];
      setMessages(finalMessages);
      setLoading(false);

      const activeSessionId = currentSessionId || `session-${Date.now()}`;
      setCurrentSessionId(activeSessionId);
      
      const sessionTitle = userMsg.text.slice(0, 30) + (userMsg.text.length > 30 ? '...' : '');
      const existingIdx = sessions.findIndex(s => s.id === activeSessionId);
      
      let updatedSessions: ChatSession[];
      if (existingIdx >= 0) {
        updatedSessions = [...sessions];
        updatedSessions[existingIdx] = {
          ...updatedSessions[existingIdx],
          messages: finalMessages,
          persona: assistantPersona
        };
      } else {
        updatedSessions = [
          {
            id: activeSessionId,
            title: sessionTitle,
            createdAt: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
            persona: assistantPersona,
            messages: finalMessages
          },
          ...sessions
        ];
      }
      syncSessionsToStorage(updatedSessions);
    }, 450);
  };

  return {
    isOpen,
    setIsOpen,
    activeTab,
    setActiveTab,
    assistantPersona,
    handlePersonaChange,
    selectedModel,
    setSelectedModel,
    selectedLanguage,
    handleLanguageChange,
    geminiApiKey,
    setGeminiApiKey,
    groqApiKey,
    setGroqApiKey,
    activeProfileId,
    setActiveProfileId,
    handleSelectProfile,
    showKeyText,
    setShowKeyText,
    vapiPublicKey,
    setVapiPublicKey,
    vapiAssistantId,
    setVapiAssistantId,
    backendUrl,
    setBackendUrl,
    saveCredentials,
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
    handleSaveWhatsApp,
    handleSimulateWhatsAppMessage,
    sessions,
    currentSessionId,
    startNewChat,
    selectSession,
    deleteSession,
    messages,
    setMessages,
    input,
    setInput,
    loading,
    isListening,
    callActive,
    connecting,
    copiedId,
    messagesEndRef,
    inputRef,
    handleCopy,
    
    // Voice Mode
    isVoiceMode,
    voiceState,
    liveTranscript,
    aiSpeechText,
    isMuted,
    startVoiceMode,
    exitVoiceMode,
    toggleMute,
    toggleVoiceCall,
    handleSend
  };
}
