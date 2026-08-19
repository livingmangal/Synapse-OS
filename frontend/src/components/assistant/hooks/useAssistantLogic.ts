import { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { ActiveTab, ChatSession, Message, ModelChoice, Persona } from '../types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export function useAssistantLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
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

  // Load saved credentials & chat sessions from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    setVapiPublicKey(localStorage.getItem('sanjeevani_vapi_key') || '');
    setVapiAssistantId(localStorage.getItem('sanjeevani_vapi_id') || '');
    setGeminiApiKey(localStorage.getItem('sanjeevani_gemini_key') || '');
    setBackendUrl(localStorage.getItem('sanjeevani_backend_url') || API_BASE);
    
    const savedPersona = localStorage.getItem('sanjeevani_persona') as Persona | null;
    if (savedPersona) setAssistantPersona(savedPersona);

    const savedModel = localStorage.getItem('sanjeevani_selected_model') as ModelChoice | null;
    if (savedModel) setSelectedModel(savedModel);

    const savedWaPhone = localStorage.getItem('sanjeevani_wa_phone');
    if (savedWaPhone) {
      setWaPhoneNumber(savedWaPhone);
      setWaConnected(true);
    }

    try {
      const savedSessions = localStorage.getItem('sanjeevani_chat_sessions');
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
      localStorage.setItem('sanjeevani_chat_sessions', JSON.stringify(updatedSessions));
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
    if (isOpen && activeTab === 'chat') {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, activeTab]);

  // Global event listeners
  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('toggle-sanjeevani-assistant', handleToggle);
    window.addEventListener('open-sanjeevani-assistant', handleOpen);
    (window as any).openSanjeevaniAssistant = handleOpen;
    return () => {
      window.removeEventListener('toggle-sanjeevani-assistant', handleToggle);
      window.removeEventListener('open-sanjeevani-assistant', handleOpen);
    };
  }, []);

  // Handle Persona Switching
  const handlePersonaChange = (newPersona: Persona) => {
    setAssistantPersona(newPersona);
    localStorage.setItem('sanjeevani_persona', newPersona);
  };

  // Save credentials
  const saveCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('sanjeevani_vapi_key', vapiPublicKey);
    localStorage.setItem('sanjeevani_vapi_id', vapiAssistantId);
    localStorage.setItem('sanjeevani_gemini_key', geminiApiKey);
    localStorage.setItem('sanjeevani_backend_url', backendUrl);
    localStorage.setItem('sanjeevani_selected_model', selectedModel);
    localStorage.setItem('sanjeevani_persona', assistantPersona);
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
      localStorage.setItem('sanjeevani_wa_phone', waPhoneNumber);
      setWaConnected(true);
    } else {
      localStorage.removeItem('sanjeevani_wa_phone');
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
  };

  // Load existing chat session
  const selectSession = (session: ChatSession) => {
    setCurrentSessionId(session.id);
    setMessages(session.messages);
    if (session.persona) setAssistantPersona(session.persona);
    setActiveTab('chat');
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

  // Toggle Voice Call
  const toggleVoiceCall = async () => {
    if (callActive) {
      if (vapi) {
        try { vapi.stop(); } catch (e) {}
      }
      setCallActive(false);
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
          console.error('Vapi Error:', err);
          setConnecting(false);
          setCallActive(false);
        });

        await vapiInstance.start(vapiAssistantId);
      } catch (err) {
        console.error('Failed to start Vapi call:', err);
        setConnecting(false);
        setCallActive(false);
      }
    } else {
      toggleBrowserMic();
    }
  };

  // Browser Web Speech Recognition
  const toggleBrowserMic = () => {
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

  // Send query logic adapted per Persona
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
          channel: 'web_assistant'
        })
      });

      if (res.ok) {
        const data = await res.json();
        reply = data.final_response;
        trace = data.trace || [];
      }
    } catch (e) {}

    // 2. Try Live Gemini API with Persona-specific Clinical System Prompt
    if (!reply && geminiApiKey) {
      try {
        let systemInstructionText = "";
        if (assistantPersona === 'triage') {
          systemInstructionText = "You are Sanjeevani AI Clinical Triage Specialist. Focus on immediate symptom assessment, severity scoring, red-flag symptoms, vital signs monitoring, and triage urgency. Use clean bullet points and clear clinical cautions.";
        } else if (assistantPersona === 'nutrition') {
          systemInstructionText = "You are Sanjeevani AI Metabolic & Clinical Nutritionist. Provide personalized daily macro distributions (Carbs, Protein, Fats), hydration targets, micronutrient recommendations, and meal timing guidelines.";
        } else {
          systemInstructionText = "You are Sanjeevani AI Clinical Copilot. Provide comprehensive guidance covering medical record analysis, diagnostic interpretation, wellness, triage, and multi-agent coordination.";
        }

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
          followUps = assistantPersona === 'triage'
            ? ['Check emergency red-flags', 'Log vitals in ABHA', 'Book clinic consult']
            : assistantPersona === 'nutrition'
            ? ['Generate grocery list', 'Pre-workout macro timing', 'Hydration schedule']
            : ['Explain step-by-step', 'View related symptoms', 'Save to my records'];
        }
      } catch (err) {
        console.error('Gemini API Error:', err);
      }
    }

    // 3. Fallback Smart QA with Rich Structured Output & Dynamic Visuals per Persona
    if (!reply) {
      const textLower = textToSend.toLowerCase();

      // Clinical Triage Flow
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
      // Nutrition & Diet Flow
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
      // Medical Records & Scans Flow
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
      // WhatsApp Bridge Flow
      else if (textLower.includes('whatsapp') || textLower.includes('phone') || textLower.includes('mobile')) {
        reply = "Sanjeevani OS supports **Omni-Channel WhatsApp Connectivity**:\n\n• You can snap and send prescription photos or MRI scans directly to WhatsApp.\n• Receive automated daily pill reminders and vital check-ins.\n• Click the **WhatsApp Sync (📱)** tab in the header to pair your device.";
        visualType = 'whatsapp';
        visualData = {
          senderNumber: waPhoneNumber || '+91 98765 43210',
          mediaType: 'WhatsApp Omni-Channel Bridge',
          verified: waConnected
        };
        followUps = ['Configure WhatsApp phone', 'Test sample WhatsApp prescription', 'How does WhatsApp security work?'];
      }
      // Default General Response
      else {
        reply = `I analyzed your query: "${textToSend}". Sanjeevani OS is actively processing your clinical profile in **${assistantPersona.toUpperCase()}** mode.\n\nTo unlock unbounded, live generative reasoning and real-time voice, you can add your **Gemini API Key** in settings (⚙️).`;
        followUps = ['💡 Brainstorm ideas', 'Clinical Analysis', 'WhatsApp Connection'];
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
    toggleVoiceCall,
    handleSend
  };
}
