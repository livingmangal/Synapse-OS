import React, { RefObject } from 'react';
import { Persona } from '../types';

interface ChatInputBarProps {
  input: string;
  setInput: (val: string) => void;
  loading: boolean;
  isListening: boolean;
  callActive: boolean;
  assistantPersona: Persona;
  inputRef: RefObject<HTMLInputElement | null>;
  onSend: () => void;
  onToggleVoice: () => void;
}

export default function ChatInputBar({
  input,
  setInput,
  loading,
  isListening,
  callActive,
  assistantPersona,
  inputRef,
  onSend,
  onToggleVoice
}: ChatInputBarProps) {
  const getPlaceholder = () => {
    switch (assistantPersona) {
      case 'triage':
        return 'Describe symptoms (e.g. fever, headache)...';
      case 'nutrition':
        return 'Ask for macro plan, calorie target, meal blueprint...';
      default:
        return 'Ask me anything...';
    }
  };

  return (
    <div className="synapseos-input-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSend();
        }}
        className="synapseos-input-bar"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={getPlaceholder()}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="synapseos-input-elem"
        />

        {input.trim() && (
          <button
            type="submit"
            disabled={loading}
            className="synapseos-send-action"
            title="Send Query"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        )}

        <button
          type="button"
          onClick={onToggleVoice}
          className={`synapseos-mic-action ${callActive || isListening ? 'listening' : ''}`}
          title={callActive || isListening ? "Stop voice listening" : "Start Voice Assistant"}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="22"></line>
          </svg>
        </button>
      </form>
    </div>
  );
}
