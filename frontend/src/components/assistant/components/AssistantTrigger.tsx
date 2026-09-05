import React from 'react';

interface AssistantTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function AssistantTrigger({ isOpen, onToggle }: AssistantTriggerProps) {
  return (
    <button
      onClick={onToggle}
      className="synapseos-trigger-pill synapseos-root"
      aria-label={isOpen ? "Close SynapseOS AI" : "Open SynapseOS AI"}
      title="SynapseOS AI Copilot"
    >
      <div style={{ position: 'relative', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {isOpen ? (
          <svg style={{ width: '20px', height: '20px', color: '#0f172a' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <>
            <svg style={{ width: '24px', height: '24px', color: '#059669' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span style={{ position: 'absolute', top: '-3px', right: '-3px', width: '10px', height: '10px', backgroundColor: '#10b981', borderRadius: '50%', border: '2px solid #ffffff' }} />
          </>
        )}
      </div>
    </button>
  );
}
