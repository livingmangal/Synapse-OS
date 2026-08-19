export type Persona = 'copilot' | 'triage' | 'nutrition';
export type ActiveTab = 'chat' | 'history' | 'settings' | 'whatsapp';
export type ModelChoice = 'gemini-1.5-flash' | 'gemini-1.5-pro' | 'gemini-2.0-flash';
export type VoiceState = 'connecting' | 'listening' | 'thinking' | 'speaking' | 'muted';
export type SupportedLanguage = 'en' | 'hi' | 'bn' | 'ta' | 'te' | 'mr';

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  native: string;
  speechCode: string;
  flag: string;
}

export interface TraceItem {
  agent_name: string;
  action: string;
  duration_ms: number;
}

export interface Message {
  id: string;
  sender: 'user' | 'assistant' | 'system' | 'whatsapp';
  text: string;
  timestamp: string;
  channel?: 'web' | 'whatsapp' | 'voice';
  visualType?: 'triage' | 'nutrition' | 'records' | 'whatsapp' | 'general';
  visualData?: any;
  followUps?: string[];
  trace?: TraceItem[];
}

export interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  persona: Persona;
  messages: Message[];
}
