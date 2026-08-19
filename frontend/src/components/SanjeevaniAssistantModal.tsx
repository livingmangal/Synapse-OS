'use client';

import React from 'react';
import './assistant/assistant.css';
import {
  useAssistantLogic,
  AssistantTrigger,
  AssistantHeader,
  PersonaSwitcher,
  OrbWelcome,
  ChatStream,
  ChatInputBar,
  WhatsAppBridgeModal,
  ChatHistoryDrawer,
  SettingsDrawer
} from './assistant';

export default function SanjeevaniAssistantModal() {
  const {
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
    copiedId,
    messagesEndRef,
    inputRef,
    handleCopy,
    toggleVoiceCall,
    handleSend
  } = useAssistantLogic();

  return (
    <>
      {/* Floating Bottom-Right Trigger Button */}
      <AssistantTrigger
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />

      {/* Main Assistant Modal Window */}
      {isOpen && (
        <div className="sanjeevani-modal-window sanjeevani-root" data-lenis-prevent="true">
          
          {/* Header Bar */}
          <AssistantHeader
            persona={assistantPersona}
            activeTab={activeTab}
            waConnected={waConnected}
            onTabChange={setActiveTab}
            onNewChat={startNewChat}
            onClose={() => setIsOpen(false)}
          />

          {/* Persona Switcher Bar */}
          <PersonaSwitcher
            assistantPersona={assistantPersona}
            onPersonaChange={handlePersonaChange}
          />

          {/* View Tab 1: WhatsApp Multi-Channel Bridge */}
          {activeTab === 'whatsapp' ? (
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
                className="sanjeevani-custom-scroll"
                onWheel={(e) => e.stopPropagation()}
                style={{ flex: 1, overflowY: 'auto', padding: '16px 18px', display: 'flex', flexDirection: 'column' }}
              >
                {messages.length === 0 ? (
                  <OrbWelcome
                    assistantPersona={assistantPersona}
                    onSendChip={handleSend}
                    onToggleVoice={toggleVoiceCall}
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
                onToggleVoice={toggleVoiceCall}
              />
            </>
          )}
        </div>
      )}
    </>
  );
}
