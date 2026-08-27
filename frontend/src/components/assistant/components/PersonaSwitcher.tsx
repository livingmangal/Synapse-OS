import React from 'react';
import { Persona } from '../types';

interface PersonaSwitcherProps {
  assistantPersona: Persona;
  onPersonaChange: (persona: Persona) => void;
}

export default function PersonaSwitcher({ assistantPersona, onPersonaChange }: PersonaSwitcherProps) {
  const personas: Array<{ id: Persona; label: string; icon: string; title: string }> = [
    { id: 'copilot', label: 'Clinical Copilot', icon: '🏥', title: 'General healthcare & multi-agent assistance' },
    { id: 'triage', label: 'Triage Specialist', icon: '🩺', title: 'Emergency triage & symptom assessment' },
    { id: 'nutrition', label: 'Metabolic & Nutrition', icon: '🥗', title: 'Macronutrients, diet & wellness planning' }
  ];

  return (
    <div className="sanjeevani-persona-bar">
      <div className="sanjeevani-persona-inner">
        {personas.map(p => {
          const isActive = assistantPersona === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onPersonaChange(p.id)}
              title={p.title}
              className={`sanjeevani-persona-btn ${isActive ? 'active' : ''}`}
            >
              <span className="sanjeevani-persona-icon">{p.icon}</span>
              <span className="sanjeevani-persona-label">{p.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
