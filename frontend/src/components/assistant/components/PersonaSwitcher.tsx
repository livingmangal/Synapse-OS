import React from 'react';
import { Persona, SupportedLanguage } from '../types';
import { getTranslation } from '../translations';

interface PersonaSwitcherProps {
  assistantPersona: Persona;
  onPersonaChange: (persona: Persona) => void;
  selectedLanguage?: SupportedLanguage;
}

export default function PersonaSwitcher({ 
  assistantPersona, 
  onPersonaChange,
  selectedLanguage = 'en'
}: PersonaSwitcherProps) {
  const t = getTranslation(selectedLanguage);
  const personas: Array<{ id: Persona; label: string; icon: string; title: string }> = [
    { id: 'copilot', label: t.personas.copilot.label, icon: '🏥', title: t.personas.copilot.full },
    { id: 'triage', label: t.personas.triage.label, icon: '🩺', title: t.personas.triage.full },
    { id: 'nutrition', label: t.personas.nutrition.label, icon: '🥗', title: t.personas.nutrition.full }
  ];

  return (
    <div className="synapseos-persona-bar">
      <div className="synapseos-persona-inner">
        {personas.map(p => {
          const isActive = assistantPersona === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onPersonaChange(p.id)}
              title={p.title}
              className={`synapseos-persona-btn ${isActive ? 'active' : ''}`}
            >
              <span className="synapseos-persona-icon">{p.icon}</span>
              <span className="synapseos-persona-label">{p.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
