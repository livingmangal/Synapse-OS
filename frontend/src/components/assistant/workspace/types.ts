import { MockHealthProfile } from '@/data/mockHealthProfiles';
import { Persona, Message, ChatSession, ModelChoice, SupportedLanguage } from '../types';

export interface WorkspaceStateProps {
  activeProfileId: string;
  onSelectProfile: (profileId: string) => void;
  assistantPersona: Persona;
  onPersonaChange: (p: Persona) => void;
  selectedModel: ModelChoice;
  setSelectedModel: (m: ModelChoice) => void;
  selectedLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  messages: Message[];
  loading: boolean;
  copiedId: string | null;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  input: string;
  setInput: (val: string) => void;
  isListening: boolean;
  callActive: boolean;
  onSend: (text?: string) => void;
  onToggleVoice: () => void;
  onCopy: (id: string, text: string) => void;
  onNewChat: () => void;
  onClose: () => void;
  onToggleFullscreen: () => void;
  sessions: ChatSession[];
  currentSessionId: string;
  onSelectSession: (s: ChatSession) => void;
  onDeleteSession: (id: string, e: React.MouseEvent) => void;
  // Voice Mode Props
  isVoiceMode?: boolean;
  voiceState?: import('../types').VoiceState;
  liveTranscript?: string;
  aiSpeechText?: string;
  isMuted?: boolean;
  toggleMute?: () => void;
  exitVoiceMode?: () => void;

  // Settings & WhatsApp Props
  geminiApiKey?: string;
  setGeminiApiKey?: (k: string) => void;
  groqApiKey?: string;
  setGroqApiKey?: (k: string) => void;
  showKeyText?: boolean;
  setShowKeyText?: (s: boolean) => void;
  vapiPublicKey?: string;
  setVapiPublicKey?: (s: string) => void;
  vapiAssistantId?: string;
  setVapiAssistantId?: (s: string) => void;
  backendUrl?: string;
  setBackendUrl?: (s: string) => void;
  saveCredentials?: (e: React.FormEvent) => void;
  waPhoneNumber?: string;
  setWaPhoneNumber?: (s: string) => void;
  waConnected?: boolean;
  waMetaToken?: string;
  setWaMetaToken?: (s: string) => void;
  waWebhookUrl?: string;
  setWaWebhookUrl?: (s: string) => void;
  waAutoSyncReports?: boolean;
  setWaAutoSyncReports?: (s: boolean) => void;
  waDailyReminders?: boolean;
  setWaDailyReminders?: (s: boolean) => void;
  handleSaveWhatsApp?: (e: React.FormEvent) => void;
  handleSimulateWhatsAppMessage?: () => void;
  setMessages?: React.Dispatch<React.SetStateAction<Message[]>>;
}

export function getPatientPhotoUrl(profileId: string): string {
  if (profileId.includes('mausam')) return '/images/mausam_kar.jpg';
  if (profileId.includes('rachit')) return '/images/rachit_tiwari.jpg';
  if (profileId.includes('mangal')) return '/images/mangal_singh.jpg';
  if (profileId.includes('surabhi') || profileId.includes('surbhi')) return '/images/surabhi.jpg';
  if (profileId.includes('shaikh')) return '/images/shaikh_warsi.jpg';
  if (profileId.includes('jiya')) return '/images/jiya_jaiswal.jpg';
  return '/images/mausam_kar.jpg';
}
