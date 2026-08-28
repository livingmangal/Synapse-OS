'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import './assistant/assistant.css';
import {
  useAssistantLogic,
  AssistantTrigger,
  AssistantHeader,
  PersonaSwitcher,
  OrbWelcome,
  ChatStream,
  ChatInputBar,
  VoiceModeOverlay,
  WhatsAppBridgeModal,
  ChatHistoryDrawer,
  SettingsDrawer
} from './assistant';

export default function SynapseOSAssistantModal() {
  const pathname = usePathname();

  const {
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
    copiedId,
    messagesEndRef,
    inputRef,
    handleCopy,
    
    // Voice Mode State & Handlers
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
  } = useAssistantLogic();

  const [isFullscreen, setIsFullscreen] = React.useState(false);

  // Exit fullscreen on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Hide assistant trigger on 3D Model / Vibrant page so it does not interfere
  if (pathname === '/vibrant' || pathname?.startsWith('/vibrant')) {
    return null;
  }

  return (
    <>
      {/* Floating Bottom-Right Trigger Button */}
      <AssistantTrigger
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />

      {/* Main Assistant Modal Window */}
      {isOpen && (
        <div className={`synapseos-modal-window synapseos-root ${isFullscreen ? 'synapseos-modal-fullscreen' : ''}`} data-lenis-prevent="true">
          
          {/* Header Bar */}
          <AssistantHeader
            persona={assistantPersona}
            activeTab={activeTab}
            waConnected={waConnected}
            isFullscreen={isFullscreen}
            onTabChange={setActiveTab}
            onToggleFullscreen={() => setIsFullscreen(prev => !prev)}
            onNewChat={startNewChat}
            onClose={() => setIsOpen(false)}
          />

          <div className="synapseos-modal-inner">
            {/* Persona Switcher Bar */}
            <PersonaSwitcher
              assistantPersona={assistantPersona}
              onPersonaChange={handlePersonaChange}
            />

          {/* Live AI Voice Mode Overlay (ChatGPT style central orb & voice dialogue) */}
          {isVoiceMode ? (
            <VoiceModeOverlay
              persona={assistantPersona}
              voiceState={voiceState}
              transcript={liveTranscript}
              aiResponseText={aiSpeechText}
              isMuted={isMuted}
              onToggleMute={toggleMute}
              onExitVoice={exitVoiceMode}
            />
          ) : activeTab === 'whatsapp' ? (
            /* View Tab 1: WhatsApp Multi-Channel Bridge */
            <WhatsAppBridgeModal
              waPhoneNumber={waPhoneNumber}
              setWaPhoneNumber={setWaPhoneNumber}
              waConnected={waConnected}
              waMetaToken={waMetaToken}
              setWaMetaToken={setWaMetaToken}
              waWebhookUrl={waWebhookUrl}
              setWaWebhookUrl={setWaWebhookUrl}
              waAutoSyncReports={waAutoSyncReports}
              setWaAutoSyncReports={setWaAutoSyncReports}
              waDailyReminders={waDailyReminders}
              setWaDailyReminders={setWaDailyReminders}
              onSaveWhatsApp={handleSaveWhatsApp}
              onSimulateInbound={handleSimulateWhatsAppMessage}
            />
          ) : activeTab === 'history' ? (
            /* View Tab 2: Chat History Sessions Drawer */
            <ChatHistoryDrawer
              sessions={sessions}
              currentSessionId={currentSessionId}
              onSelectSession={selectSession}
              onDeleteSession={deleteSession}
              onNewChat={startNewChat}
              onReturnToChat={() => setActiveTab('chat')}
            />
          ) : activeTab === 'settings' ? (
            /* View Tab 3: Model & API Settings Drawer */
            <SettingsDrawer
              assistantPersona={assistantPersona}
              onPersonaChange={handlePersonaChange}
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              selectedLanguage={selectedLanguage}
              onLanguageChange={handleLanguageChange}
              geminiApiKey={geminiApiKey}
              setGeminiApiKey={setGeminiApiKey}
              showKeyText={showKeyText}
              setShowKeyText={setShowKeyText}
              vapiPublicKey={vapiPublicKey}
              setVapiPublicKey={setVapiPublicKey}
              vapiAssistantId={vapiAssistantId}
              setVapiAssistantId={setVapiAssistantId}
              backendUrl={backendUrl}
              setBackendUrl={setBackendUrl}
              onSaveCredentials={saveCredentials}
              onClearHistory={() => {
                setMessages([]);
                setActiveTab('chat');
              }}
            />
          ) : (
            /* View Tab 4: Active Chat & Welcome Stream */
            <>
              <div 
                data-lenis-prevent="true"
                className="synapseos-custom-scroll"
                onWheel={(e) => e.stopPropagation()}
                style={{ flex: 1, overflowY: 'auto', padding: '16px 18px', display: 'flex', flexDirection: 'column' }}
              >
                {messages.length === 0 ? (
                  <OrbWelcome
                    assistantPersona={assistantPersona}
                    onSendChip={handleSend}
                    onToggleVoice={startVoiceMode}
                  />
                ) : (
                  <ChatStream
                    messages={messages}
                    loading={loading}
                    copiedId={copiedId}
                    messagesEndRef={messagesEndRef}
                    onCopy={handleCopy}
                    onSendChip={handleSend}
                  />
                )}
              </div>

              {/* Bottom Capsule Input Bar */}
              <ChatInputBar
                input={input}
                setInput={setInput}
                loading={loading}
                isListening={isListening}
                callActive={callActive}
                assistantPersona={assistantPersona}
                inputRef={inputRef}
                onSend={handleSend}
                onToggleVoice={startVoiceMode}
              />
            </>
          )}
          </div>
        </div>
      )}
    </>
  );
}
