import React, { RefObject } from 'react';
import { Message } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import {
  TriageVisualWidget,
  NutritionVisualWidget,
  WhatsAppVisualWidget,
  RecordsVisualWidget,
  SwarmVisualWidget,
  VitalsVisualWidget,
  ScanVisualWidget,
  OutbreakVisualWidget,
  EHRVisualWidget,
  VaccinationVisualWidget,
  RuralSMSVisualWidget,
  NeuralTraceWidget
} from './VisualWidgets';

interface ChatStreamProps {
  messages: Message[];
  loading: boolean;
  copiedId: string | null;
  messagesEndRef: RefObject<HTMLDivElement | null>;
  onCopy: (id: string, text: string) => void;
  onSendChip: (query: string) => void;
}

export default function ChatStream({
  messages,
  loading,
  copiedId,
  messagesEndRef,
  onCopy,
  onSendChip
}: ChatStreamProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {messages.map((m) => (
        <div
          key={m.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: m.sender === 'user' ? 'flex-end' : 'flex-start',
            gap: '6px'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: m.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '94%'
            }}
          >
            {m.sender === 'assistant' && (
              <img 
                src="/synapseos-icon.svg" 
                alt="Sanjeevni AI" 
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '7px',
                  objectFit: 'contain',
                  flexShrink: 0,
                  marginTop: '2px',
                  boxShadow: '0 2px 6px rgba(2, 132, 199, 0.15)'
                }}
              />
            )}

            {m.sender === 'whatsapp' && (
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#25D366',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                💬
              </div>
            )}

            <div
              style={{
                padding: '13px 16px',
                borderRadius: '20px',
                borderTopRightRadius: m.sender === 'user' ? '4px' : '20px',
                borderTopLeftRadius: m.sender === 'assistant' || m.sender === 'whatsapp' ? '4px' : '20px',
                background: m.sender === 'user' ? '#f0fdf4' : m.sender === 'whatsapp' ? '#f0fdf4' : '#ffffff',
                border: m.sender === 'user' ? '1px solid #bbf7d0' : m.sender === 'whatsapp' ? '1px solid #86efac' : '1px solid #e2e8f0',
                color: '#0f172a',
                fontSize: '13px',
                lineHeight: 1.55,
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.03)',
                maxWidth: '100%'
              }}
            >
              {/* Rich Markdown Text */}
              <MarkdownRenderer content={m.text} />

              {/* Dynamic Visual Widgets */}
              {m.visualType === 'triage' && <TriageVisualWidget visualData={m.visualData} />}
              {m.visualType === 'nutrition' && <NutritionVisualWidget visualData={m.visualData} />}
              {m.visualType === 'whatsapp' && <WhatsAppVisualWidget visualData={m.visualData} />}
              {m.visualType === 'records' && <RecordsVisualWidget visualData={m.visualData} />}
              {m.visualType === 'swarm' && <SwarmVisualWidget visualData={m.visualData} />}
              {m.visualType === 'vitals' && <VitalsVisualWidget visualData={m.visualData} />}
              {m.visualType === 'scan' && <ScanVisualWidget visualData={m.visualData} />}
              {m.visualType === 'outbreak' && <OutbreakVisualWidget visualData={m.visualData} />}
              {m.visualType === 'ehr' && <EHRVisualWidget visualData={m.visualData} />}
              {m.visualType === 'vaccination' && <VaccinationVisualWidget visualData={m.visualData} />}
              {m.visualType === 'rural_sms' && <RuralSMSVisualWidget visualData={m.visualData} />}

              {/* Neural Sub-Agent Trace */}
              <NeuralTraceWidget trace={m.trace} />

              {/* Action Bar inside Assistant bubble */}
              {(m.sender === 'assistant' || m.sender === 'whatsapp') && (
                <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f8fafc', paddingTop: '5px' }}>
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>{m.timestamp}</span>
                  <button
                    onClick={() => onCopy(m.id, m.text)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: copiedId === m.id ? '#059669' : '#94a3b8',
                      fontSize: '10.5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px'
                    }}
                  >
                    {copiedId === m.id ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              )}
            </div>

            {m.sender === 'user' && (
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#e2e8f0',
                color: '#334155',
                fontSize: '12px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                👤
              </div>
            )}
          </div>

          {/* Suggested Follow-up Chips */}
          {m.followUps && m.followUps.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginLeft: '38px', marginTop: '2px' }}>
              {m.followUps.map((fText, fIdx) => (
                <button
                  key={fIdx}
                  onClick={() => onSendChip(fText)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    color: '#065f46',
                    fontSize: '11px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                >
                  ↳ {fText}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Animated Typing Indicator */}
      {loading && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
          <img 
            src="/synapseos-icon.svg" 
            alt="Sanjeevni AI" 
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '7px',
              objectFit: 'contain',
              flexShrink: 0,
              boxShadow: '0 2px 6px rgba(2, 132, 199, 0.15)'
            }}
          />
          <div style={{
            padding: '12px 16px',
            borderRadius: '18px',
            borderTopLeftRadius: '4px',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', animation: 'typingDot 1.4s infinite ease-in-out', animationDelay: '0s' }} />
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', animation: 'typingDot 1.4s infinite ease-in-out', animationDelay: '0.2s' }} />
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', animation: 'typingDot 1.4s infinite ease-in-out', animationDelay: '0.4s' }} />
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
