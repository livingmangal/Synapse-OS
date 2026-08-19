import React from 'react';
import { Persona } from '../types';

interface PersonaSwitcherProps {
  assistantPersona: Persona;
  onPersonaChange: (persona: Persona) => void;
}

export default function PersonaSwitcher({ assistantPersona, onPersonaChange }: PersonaSwitcherProps) {
  const personas: Array<{ id: Persona; label: string }> = [
    { id: 'copilot', label: '🏥 Copilot' },
    { id: 'triage', label: '🩺 Triage' },
    { id: 'nutrition', label: '🥗 Nutrition' }
  ];

  return (
    <div style={{ display: 'flex', padding: '6px 14px', background: 'rgba(241, 245, 249, 0.7)', borderBottom: '1px solid rgba(16, 185, 129, 0.08)', gap: '6px' }}>
      {personas.map(p => (
        <button
          key={p.id}
          type="button"
          onClick={() => onPersonaChange(p.id)}
          style={{
            flex: 1,
            padding: '4px 6px',
            borderRadius: '20px',
            border: assistantPersona === p.id ? '1px solid #10b981' : '1px solid transparent',
            background: assistantPersona === p.id ? '#ffffff' : 'transparent',
            color: assistantPersona === p.id ? '#065f46' : '#64748b',
            fontSize: '11px',
            fontWeight: assistantPersona === p.id ? 700 : 500,
            cursor: 'pointer',
            boxShadow: assistantPersona === p.id ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
            transition: 'all 0.15s'
          }}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}
