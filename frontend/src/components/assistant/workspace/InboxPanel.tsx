import React, { useState } from 'react';
import { ChatSession, SupportedLanguage } from '../types';
import { Search, MessageSquare, Trash2, Plus } from 'lucide-react';
import { getTranslation } from '../translations';

interface InboxPanelProps {
  sessions: ChatSession[];
  currentSessionId: string;
  onSelectSession: (s: ChatSession) => void;
  onDeleteSession: (id: string, e: React.MouseEvent) => void;
  onNewChat?: () => void;
  selectedLanguage?: SupportedLanguage;
}

export default function InboxPanel({
  sessions,
  currentSessionId,
  onSelectSession,
  onDeleteSession,
  onNewChat,
  selectedLanguage = 'en'
}: InboxPanelProps) {
  const [chatSearch, setChatSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'triage' | 'swarm' | 'who'>('all');
  const t = getTranslation(selectedLanguage);

  const filteredSessions = sessions.filter(s => {
    const titleLower = s.title.toLowerCase();
    const matchesSearch = titleLower.includes(chatSearch.toLowerCase());
    if (!matchesSearch) return false;

    if (activeFilter === 'all') return true;
    if (activeFilter === 'triage') return titleLower.includes('triage') || titleLower.includes('ट्राइएज') || titleLower.includes('symptom') || titleLower.includes('fever') || s.persona === 'triage';
    if (activeFilter === 'swarm') return titleLower.includes('swarm') || titleLower.includes('स्वार्म') || titleLower.includes('সোয়ার্ম') || titleLower.includes('consensus');
    if (activeFilter === 'who') return titleLower.includes('who') || titleLower.includes('डब्ल्यूएचओ') || titleLower.includes('outbreak') || titleLower.includes('surveillance') || titleLower.includes('নিगरानी');
    return true;
  });

  return (
    <section 
      className="synapseos-fullscreen-inbox"
      style={{
        width: '260px',
        minWidth: '260px',
        maxWidth: '260px',
        flexShrink: 0,
        background: '#ffffff',
        borderRight: '1.2px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Top Bar with New Chat Button */}
      {onNewChat && (
        <div style={{ padding: '10px 12px 6px', borderBottom: '1px solid #f1f5f9' }}>
          <button
            onClick={onNewChat}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '8px 12px',
              borderRadius: '8px',
              background: '#0f172a',
              color: '#ffffff',
              border: 'none',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.15)',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0284c7';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0f172a';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Plus size={14} />
            <span>{t.newConsultation}</span>
          </button>
        </div>
      )}

      {/* Category Filter Pills */}
      <div style={{
        padding: '10px 12px',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <div style={{
          display: 'flex',
          background: '#f1f5f9',
          padding: '2.5px',
          borderRadius: '7px',
          gap: '2px'
        }}>
          {[
            { id: 'all', label: t.inboxTabs.all },
            { id: 'triage', label: t.inboxTabs.triage },
            { id: 'swarm', label: t.inboxTabs.swarm },
            { id: 'who', label: t.inboxTabs.surveillance }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              style={{
                flex: 1,
                padding: '4px 0',
                borderRadius: '5px',
                background: activeFilter === tab.id ? '#0f172a' : 'transparent',
                color: activeFilter === tab.id ? '#ffffff' : '#64748b',
                border: 'none',
                fontSize: '10.5px',
                fontWeight: activeFilter === tab.id ? 700 : 600,
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.15s ease',
                boxShadow: activeFilter === tab.id ? '0 1px 3px rgba(0,0,0,0.12)' : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <div style={{ padding: '8px 12px', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: '#f8fafc',
          borderRadius: '6px',
          padding: '5px 8px',
          border: '1px solid #e2e8f0'
        }}>
          <Search size={12} color="#94a3b8" />
          <input
            type="text"
            placeholder={t.searchInquiries}
            value={chatSearch}
            onChange={(e) => setChatSearch(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '11.5px',
              color: '#0f172a',
              width: '100%'
            }}
          />
        </div>
      </div>

      {/* Chat Sessions History List */}
      <div 
        data-lenis-prevent="true"
        className="synapseos-custom-scroll"
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '8px 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        {filteredSessions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '30px 10px', color: '#94a3b8', fontSize: '11.5px' }}>
            {t.noInquiries}
          </div>
        ) : (
          filteredSessions.map((s) => {
            const isCur = s.id === currentSessionId;
            return (
              <div
                key={s.id}
                onClick={() => onSelectSession(s)}
                style={{
                  padding: '8px 10px',
                  borderRadius: '6px',
                  background: isCur ? '#f0f9ff' : '#ffffff',
                  border: isCur ? '1.2px solid #0284c7' : '1px solid #e2e8f0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden' }}>
                  <MessageSquare size={12} color={isCur ? '#0284c7' : '#94a3b8'} />
                  <div style={{ fontSize: '11.5px', fontWeight: isCur ? 800 : 500, color: isCur ? '#0284c7' : '#334155', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {s.title}
                  </div>
                </div>
                <button
                  onClick={(e) => onDeleteSession(s.id, e)}
                  style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '2px' }}
                  title="Delete Session"
                >
                  <Trash2 size={11} />
                </button>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
