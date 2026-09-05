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
      {isOpen ? (
        /* X close icon when modal is open */
        <svg
          style={{ width: '20px', height: '20px', color: '#0f172a', flexShrink: 0 }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : (
        /* SynapseOS actual brand icon when closed */
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/synapseos-icon.svg"
            alt="SynapseOS"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          {/* Live green dot indicator */}
          <span
            style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '11px',
              height: '11px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              border: '2.5px solid #ffffff',
              boxShadow: '0 0 6px rgba(16,185,129,0.6)',
            }}
          />
        </div>
      )}
    </button>
  );
}
