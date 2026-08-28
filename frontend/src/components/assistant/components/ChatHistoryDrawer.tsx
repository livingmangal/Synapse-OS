import React from 'react';
import { ChatSession } from '../types';

interface ChatHistoryDrawerProps {
  sessions: ChatSession[];
  currentSessionId: string;
  onSelectSession: (session: ChatSession) => void;
  onDeleteSession: (sessionId: string, e: React.MouseEvent) => void;
  onNewChat: () => void;
  onReturnToChat: () => void;
}

export default function ChatHistoryDrawer({
  sessions,
  currentSessionId,
  onSelectSession,
  onDeleteSession,
  onNewChat,
  onReturnToChat
}: ChatHistoryDrawerProps) {
  return (
    <div 
      data-lenis-prevent="true"
      className="synapseos-custom-scroll"
      onWheel={(e) => e.stopPropagation()}
      style={{ flex: 1, padding: '18px', overflowY: 'auto', background: 'rgba(255, 255, 255, 0.98)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px' }}>💬</span>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Chat History</h3>
          </div>
          <button
            onClick={onNewChat}
            style={{
              padding: '5px 12px',
              borderRadius: '50px',
              background: '#ecfdf5',
              color: '#065f46',
              fontWeight: 600,
              fontSize: '11px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>+</span> New Chat
          </button>
        </div>

        {sessions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94a3b8' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🌱</div>
            <div style={{ fontSize: '13px', fontWeight: 500 }}>No previous chat history</div>
            <div style={{ fontSize: '11.5px', marginTop: '4px' }}>Start a conversation to see your session history here.</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {sessions.map((sess) => (
              <div
                key={sess.id}
                onClick={() => onSelectSession(sess)}
                style={{
                  padding: '11px 13px',
                  borderRadius: '14px',
                  background: currentSessionId === sess.id ? '#f0fdf4' : '#ffffff',
                  border: currentSessionId === sess.id ? '1.5px solid #10b981' : '1px solid #e2e8f0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ overflow: 'hidden', marginRight: '10px' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {sess.title || 'Clinical Conversation'}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#64748b', marginTop: '2px' }}>
                    {sess.createdAt} • {sess.persona || 'copilot'} • {sess.messages.length} msgs
                  </div>
                </div>

                <button
                  onClick={(e) => onDeleteSession(sess.id, e)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title="Delete Session"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ paddingTop: '14px', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
        <button
          onClick={onReturnToChat}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '12px',
            background: '#f1f5f9',
            color: '#334155',
            fontSize: '12px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Return to Chat
        </button>
      </div>
    </div>
  );
}
