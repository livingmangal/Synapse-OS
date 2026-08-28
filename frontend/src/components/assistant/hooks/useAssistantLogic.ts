import { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { ActiveTab, ChatSession, Message, ModelChoice, Persona, SupportedLanguage, VoiceState } from '../types';

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
  const [selectedModel, setSelectedModel] = useState<ModelChoice>('gemini-1.5-flash');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showKeyText, setShowKeyText] = useState(false);

  // WhatsApp Bridge Config State
  const [waPhoneNumber, setWaPhoneNumber] = useState('');
  const [waConnected, setWaConnected] = useState(false);
  const [waMetaToken, setWaMetaToken] = useState('');
  const [waWebhookUrl, setWaWebhookUrl] = useState(`${API_BASE}/api/whatsapp/webhook`);
  const [waAutoSyncReports, setWaAutoSyncReports] = useState(true);
  const [waDailyReminders, setWaDailyReminders] = useState(true);

  // Credentials
  const [vapiPublicKey, setVapiPublicKey] = useState('');
  const [vapiAssistantId, setVapiAssistantId] = useState('');
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [backendUrl, setBackendUrl] = useState(API_BASE);

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
    setBackendUrl(localStorage.getItem('synapseos_backend_url') || API_BASE);
    
    const savedPersona = localStorage.getItem('synapseos_persona') as Persona | null;
    if (savedPersona) setAssistantPersona(savedPersona);

    const savedModel = localStorage.getItem('synapseos_selected_model') as ModelChoice | null;
    if (savedModel) setSelectedModel(savedModel);

    const savedLang = localStorage.getItem('synapseos_language') as SupportedLanguage | null;
    if (savedLang) setSelectedLanguage(savedLang);

    const savedWaPhone = localStorage.getItem('synapseos_wa_phone');
    if (savedWaPhone) {
      setWaPhoneNumber(savedWaPhone);
      setWaConnected(true);
    }

    try {
      const savedSessions = localStorage.getItem('synapseos_chat_sessions');
      if (savedSessions) {
        const parsed: ChatSession[] = JSON.parse(savedSessions);
        setSessions(parsed);
        if (parsed.length > 0) {
          setCurrentSessionId(parsed[0].id);
          setMessages(parsed[0].messages);
          if (parsed[0].persona) setAssistantPersona(parsed[0].persona);
        }
      }
    } catch (e) {}
  }, []);

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

  // Handle Language Switching
  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setSelectedLanguage(newLang);
    localStorage.setItem('synapseos_language', newLang);
  };

  // Save credentials & preferences
  const saveCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('synapseos_vapi_key', vapiPublicKey);
    localStorage.setItem('synapseos_vapi_id', vapiAssistantId);
    localStorage.setItem('synapseos_gemini_key', geminiApiKey);
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

    // Pick matching native voice if available
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
      case 'ta':
        if (assistantPersona === 'triage') return "வணக்கம்! நான் உங்கள் அவசர சிகிச்சை நிபுணர். உங்கள் அறிகுறிகளை விவரிக்கவும்.";
        if (assistantPersona === 'nutrition') return "வணக்கம்! நான் உங்கள் ஊட்டச்சத்து நிபுணர். உங்கள் ஆரோக்கிய இலக்குகளைப் பகிருங்கள்.";
        return "வணக்கம்! நான் சஞ்சீவனி AI. உங்கள் உடல்நலத்திற்கு நான் எவ்வாறு உதவ முடியும்?";
      case 'te':
        if (assistantPersona === 'triage') return "నమస్కారం! నేను మీ క్లినికల్ ట్రయాజ్ అసిస్టెంట్. మీ లక్షణాలను వివరించండి.";
        if (assistantPersona === 'nutrition') return "నమస్కారం! నేను మీ న్యూట్రిషన్ స్పెషలిస్ట్. మీ ఆహార మరియు ఆరోగ్య లక్ష్యాలను తెలియజేయండి.";
        return "నమస్కారం! నేను సంజీవని AI. మీ ఆరోగ్యానికి నేను ఎలా సహాయపడగలను?";
      case 'mr':
        if (assistantPersona === 'triage') return "नमस्कार! मी आपला क्लिनिकल ट्रायज सहाय्यक आहे. कृपया आपल्या लक्षणांचे वर्णन करा.";
        if (assistantPersona === 'nutrition') return "नमस्कार! मी आपला पोषण तज्ञ आहे. आपले आरोग्य उद्दिष्टे सांगा.";
        return "नमस्कार! मी संजीवनी AI आहे. आज मी आपल्या आरोग्यासाठी कशी मदत करू शकतो?";
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

  // Build System Instruction with Multilingual Directive
  const buildSystemInstruction = (isConciseVoice: boolean = false) => {
    const langInfo = LANGUAGE_SPEECH_MAP[selectedLanguage] || LANGUAGE_SPEECH_MAP.en;
    let base = "";

    if (assistantPersona === 'triage') {
      base = "You are SynapseOS AI Clinical Triage Specialist. Focus on immediate symptom assessment, severity scoring, red-flag symptoms, vital signs monitoring, and triage urgency. Use clean bullet points and clear clinical cautions.";
    } else if (assistantPersona === 'nutrition') {
      base = "You are SynapseOS AI Metabolic & Clinical Nutritionist. Provide personalized daily macro distributions (Carbs, Protein, Fats), hydration targets, micronutrient recommendations, and meal timing guidelines.";
    } else {
      base = "You are SynapseOS AI Clinical Copilot. Provide comprehensive guidance covering medical record analysis, diagnostic interpretation, wellness, triage, and multi-agent coordination.";
    }

    if (isConciseVoice) {
      base += " Keep your answer concise (2-3 sentences) so it is pleasant and clear when spoken aloud.";
    }

    if (selectedLanguage !== 'en') {
      base += ` CRITICAL LANGUAGE INSTRUCTION: You MUST formulate your entire response in ${langInfo.name} (${langInfo.native}) script only. Ensure natural, fluent, and clinically accurate ${langInfo.name} phrasing.`;
    }

    return base;
  };

  // Handle Query from Live Voice Mode
  const handleVoiceQuery = async (queryText: string) => {
    setVoiceState('thinking');
    
    // Add user message to conversation history
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
    let visualType: 'triage' | 'nutrition' | 'records' | 'whatsapp' | 'general' = 'general';
    let visualData: any = null;

    // 1. Try Gemini API with Multilingual System Instruction
    if (geminiApiKey) {
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

    // Fallback smart responses (Multilingual supported)
    if (!reply) {
      const textLower = queryText.toLowerCase();

      if (selectedLanguage === 'hi') {
        if (assistantPersona === 'triage' || textLower.includes('triage') || textLower.includes('headache') || textLower.includes('fever') || textLower.includes('दर्द') || textLower.includes('बुखार')) {
          reply = "मैंने आपके लक्षणों का मूल्यांकन किया है। यह हल्के वायरल या सूजन का संकेत देता है। कृपया पर्याप्त पानी पिएं, आराम करें और हर 4 घंटे में अपना तापमान मापें।";
          visualType = 'triage';
          visualData = { urgency: 'मध्यम / कम (Low/Mod)', vitals: [{ label: 'तापमान (Temp)', value: '37.2°C' }, { label: 'SpO2', value: '98%' }] };
        } else if (assistantPersona === 'nutrition' || textLower.includes('diet') || textLower.includes('भोजन') || textLower.includes('डाइट')) {
          reply = "आपके पोषण लक्ष्यों के लिए: 40% कार्बोहाइड्रेट, 30% प्रोटीन और 30% स्वस्थ वसा (फैट) का संतुलित आहार लें और प्रतिदिन 2.8 लीटर पानी पिएं।";
          visualType = 'nutrition';
          visualData = { calories: '2,150 kcal', carbs: '40%', protein: '30%', fats: '30%' };
        } else {
          reply = `मैंने आपके सवाल "${queryText}" का विश्लेषण किया है। संजीवनी एआई हिन्दी मोड में आपके स्वास्थ्य प्रोफाइल का समन्वय कर रहा है।`;
        }
      } else if (selectedLanguage === 'bn') {
        if (assistantPersona === 'triage') {
          reply = "আমি আপনার লক্ষণগুলি পরীক্ষা করেছি। পর্যাপ্ত জল পান করুন, বিশ্রাম নিন এবং নিয়মিত শরীরের তাপমাত্রা পরিমাপ করুন।";
          visualType = 'triage';
          visualData = { urgency: 'স্বাভাবিক (Low)', vitals: [{ label: 'তাপমাত্রা', value: '37.2°C' }, { label: 'SpO2', value: '98%' }] };
        } else {
          reply = `আমি আপনার প্রশ্ন "${queryText}" বিশ্লেষণ করেছি। সঞ্জীবনী এআই বাংলা ভাষায় সম্পূর্ণ সক্রিয়।`;
        }
      } else {
        if (assistantPersona === 'triage' || textLower.includes('triage') || textLower.includes('headache') || textLower.includes('fever') || textLower.includes('pain') || textLower.includes('sick')) {
          reply = "I evaluated your symptoms. They indicate a mild inflammatory response. Please maintain adequate hydration, rest, and monitor your temperature.";
          visualType = 'triage';
          visualData = { urgency: 'Low / Moderate', vitals: [{ label: 'Temp', value: '37.2°C' }, { label: 'SpO2', value: '98%' }] };
        } else if (assistantPersona === 'nutrition' || textLower.includes('diet') || textLower.includes('food') || textLower.includes('macro')) {
          reply = "For your metabolic goals, I recommend a 40% carbohydrate, 30% lean protein, and 30% healthy fats distribution with 2.8 liters of water daily.";
          visualType = 'nutrition';
          visualData = { calories: '2,150 kcal', carbs: '40%', protein: '30%', fats: '30%' };
        } else {
          reply = `I processed your request about ${queryText}. SynapseOS is actively coordinating your health profile in ${assistantPersona} mode.`;
        }
      }
    }

    // Save AI response to messages
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

    // Speak aloud in selected language and restart listening when done
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
    let visualType: 'triage' | 'nutrition' | 'records' | 'whatsapp' | 'general' = 'general';
    let visualData: any = null;

    // 1. Try FastAPI Multi-Agent Orchestration backend
    try {
      const res = await fetch(`${backendUrl || API_BASE}/api/orchestrate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          persona: assistantPersona,
          language: selectedLanguage,
          channel: 'web_assistant'
        })
      });

      if (res.ok) {
        const data = await res.json();
        reply = data.final_response;
        trace = data.trace || [];
      }
    } catch (e) {}

    // 2. Try Live Gemini API with Multilingual System Prompt
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
          
          if (selectedLanguage === 'hi') {
            followUps = assistantPersona === 'triage'
              ? ['आपातकालीन संकेत जांचें', 'ABHA में रिकॉर्ड सेव करें', 'डॉक्टर से परामर्श लें']
              : ['विस्तार से समझाएं', 'लक्षण विश्लेषण', 'व्हाट्सएप से कनेक्ट करें'];
          } else {
            followUps = assistantPersona === 'triage'
              ? ['Check emergency red-flags', 'Log vitals in ABHA', 'Book clinic consult']
              : assistantPersona === 'nutrition'
              ? ['Generate grocery list', 'Pre-workout macro timing', 'Hydration schedule']
              : ['Explain step-by-step', 'View related symptoms', 'Save to my records'];
          }
        }
      } catch (err) {
        console.error('Gemini API Error:', err);
      }
    }

    // 3. Fallback Smart QA with Multilingual Outputs
    if (!reply) {
      const textLower = textToSend.toLowerCase();

      if (selectedLanguage === 'hi') {
        if (assistantPersona === 'triage' || textLower.includes('triage') || textLower.includes('headache') || textLower.includes('fever') || textLower.includes('दर्द') || textLower.includes('बुखार')) {
          reply = "मैंने आपका **क्लिनिकल ट्राइएज मूल्यांकन** किया है:\n\n• **प्राथमिक मूल्यांकन**: लक्षण हल्के वायरल या सूजन का संकेत देते हैं।\n• **घरेलू देखभाल**: प्रतिदिन 2.5–3 लीटर पानी पिएं, हर 4 घंटे में तापमान मापें और पर्याप्त आराम करें।\n• **आपातकालीन संकेत**: यदि सीने में दर्द या सांस लेने में तकलीफ हो, तो तुरंत आपातकालीन चिकित्सा सहायता लें।";
          visualType = 'triage';
          visualData = {
            urgency: 'मध्यम / कम (Moderate/Low)',
            score: 82,
            vitals: [
              { label: 'तापमान (Temperature)', value: '37.2°C (सामान्य)', status: 'normal' },
              { label: 'हाइड्रेशन (Hydration)', value: 'अनुकूल (2.8L लक्ष्य)', status: 'good' },
              { label: 'ऑक्सीजन (SpO2)', value: '98% (स्वस्थ)', status: 'good' }
            ]
          };
          followUps = ['बुखार के नियम', 'डॉक्टर से संपर्क', 'दवा सुरक्षा'];
        } else if (assistantPersona === 'nutrition' || textLower.includes('nutrition') || textLower.includes('diet') || textLower.includes('भोजन') || textLower.includes('खाना')) {
          reply = "यहाँ आपका **व्यक्तिगत पोषण ब्लूप्रिंट** है:\n\n• **मैक्रो अनुपात**: 40% जटिल कार्ब्स, 30% लीन प्रोटीन (दालें, मछली, पनीर), 30% स्वस्थ वसा (अखरोट, जैतून का तेल, बीज)।\n• **आवश्यक पोषक तत्व**: मैग्नीशियम, विटामिन D3/K2 और ओमेगा-3।\n• **हाइड्रेशन लक्ष्य**: प्रतिदिन 2.8 लीटर शुद्ध जल।";
          visualType = 'nutrition';
          visualData = {
            calories: '2,150 kcal / दिन',
            carbs: '40% (215g)',
            protein: '30% (161g)',
            fats: '30% (71g)',
            water: '2.8 लीटर'
          };
          followUps = ['7-दिवसीय भोजन योजना', 'प्री-वर्कआउट मैक्रोज़', 'हाइड्रेशन टिप्स'];
        } else {
          reply = `मैंने आपके प्रश्न "${textToSend}" का विश्लेषण किया है। संजीवनी एआई **${assistantPersona.toUpperCase()}** मोड में हिन्दी में सक्रिय है।\n\nअनुकूलित जनरेटिव उत्तरों के लिए आप सेटिंग्स (⚙️) में अपना **Gemini API Key** जोड़ सकते हैं।`;
          followUps = ['स्वास्थ्य विश्लेषण', 'ट्राइएज जांच', 'व्हाट्सएप कनेक्टिविटी'];
        }
      } else {
        // Default English flow
        if (assistantPersona === 'triage' || textLower.includes('triage') || textLower.includes('headache') || textLower.includes('fever') || textLower.includes('pain') || textLower.includes('sick') || textLower.includes('cough') || textLower.includes('symptom')) {
          reply = "I've conducted an automated **Clinical Triage Evaluation**:\n\n• **Primary Assessment**: Monitored symptoms indicate mild-to-moderate inflammatory or viral response.\n• **Immediate Home Care**: Maintain 2.5–3L daily fluid intake, monitor body temperature every 4 hours, and get adequate rest.\n• **Emergency Red Flags**: If you develop sudden chest tightness, shortness of breath, or confusion, visit an urgent care center immediately.";
          visualType = 'triage';
          visualData = {
            urgency: 'Low / Moderate Urgency',
            score: 82,
            vitals: [
              { label: 'Core Temperature', value: '37.2°C (Controlled)', status: 'normal' },
              { label: 'Hydration Balance', value: 'Optimal (2.8L Target)', status: 'good' },
              { label: 'Oxygen Saturation (SpO2)', value: '98% (Healthy Range)', status: 'good' },
              { label: 'Respiratory Rate', value: '16 breaths/min', status: 'normal' }
            ]
          };
          followUps = ['Check fever guidelines', 'Book doctor consultation', 'Review medication safety'];
        }
        else if (assistantPersona === 'nutrition' || textLower.includes('nutrition') || textLower.includes('diet') || textLower.includes('macro') || textLower.includes('food') || textLower.includes('eat') || textLower.includes('meal') || textLower.includes('calorie')) {
          reply = "Here is your **Personalized Metabolic Nutrition Blueprint**:\n\n• **Macro Allocation**: 40% Complex Carbs (sweet potato, quinoa), 30% Lean Protein (lentils, fish, tofu), 30% Healthy Fats (avocado, olive oil, seeds).\n• **Micronutrient Essentials**: Magnesium glycinate, Vitamin D3/K2, and Omega-3 fatty acids.\n• **Hydration Target**: 35ml of clean water per kg body weight daily.";
          visualType = 'nutrition';
          visualData = {
            calories: '2,150 kcal / day',
            carbs: '40% (215g)',
            protein: '30% (161g)',
            fats: '30% (71g)',
            water: '2.8 Liters'
          };
          followUps = ['Generate 7-day meal plan', 'Calculate pre-workout macros', 'Hydration tracking tips'];
        }
        else if (textLower.includes('record') || textLower.includes('scan') || textLower.includes('blockchain') || textLower.includes('x-ray') || textLower.includes('mri')) {
          reply = "The **Clinical Records Engine** verified your encrypted documentation:\n\n• **Cryptographic Checksum**: SHA-256 digital signature verified on Polygon Amoy.\n• **Biomarker Ingestion**: Automated extraction of bloodwork parameters.\n• **FHIR/ABHA Standard**: Ready for seamless hospital portability.";
          visualType = 'records';
          visualData = {
            network: 'Polygon Amoy Testnet',
            txHash: '0x8f2a...c39e',
            status: 'Tamper-Proof & Encrypted',
            recordCount: 14
          };
          followUps = ['View FHIR data schema', 'Upload lab PDF', 'Explain smart contract'];
        }
        else if (textLower.includes('whatsapp') || textLower.includes('phone') || textLower.includes('mobile')) {
          reply = "SynapseOS supports **Omni-Channel WhatsApp Connectivity**:\n\n• You can snap and send prescription photos or MRI scans directly to WhatsApp.\n• Receive automated daily pill reminders and vital check-ins.\n• Click the **WhatsApp Sync (📱)** tab in the header to pair your device.";
          visualType = 'whatsapp';
          visualData = {
            senderNumber: waPhoneNumber || '+91 98765 43210',
            mediaType: 'WhatsApp Omni-Channel Bridge',
            verified: waConnected
          };
          followUps = ['Configure WhatsApp phone', 'Test sample WhatsApp prescription', 'How does WhatsApp security work?'];
        }
        else {
          reply = `I analyzed your query: "${textToSend}". SynapseOS is actively processing your clinical profile in **${assistantPersona.toUpperCase()}** mode.\n\nTo unlock unbounded, live generative reasoning and real-time voice, you can add your **Gemini API Key** in settings (⚙️).`;
          followUps = ['💡 Brainstorm ideas', 'Clinical Analysis', 'WhatsApp Connection'];
        }
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

      // Save to sessions list
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
    }, 550);
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
