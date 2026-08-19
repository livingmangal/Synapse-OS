import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.split('\n');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} style={{ height: '4px' }} />;

        // Check if line is a bullet or numbered list item
        const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('* ');
        const numberMatch = trimmed.match(/^(\d+)\.\s+/);

        let cleanText = trimmed;
        if (isBullet) {
          cleanText = cleanText.replace(/^[•\-\*]\s*/, '');
        } else if (numberMatch) {
          cleanText = cleanText.replace(/^\d+\.\s*/, '');
        }

        // Parse **bold** parts in cleanText
        const parts = cleanText.split(/(\*\*.*?\*\*)/g);
        const formattedParts = parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={pIdx} style={{ fontWeight: 600, color: '#0f172a' }}>{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        if (isBullet) {
          return (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', paddingLeft: '2px' }}>
              <span style={{ color: '#10b981', fontSize: '14px', lineHeight: '20px', userSelect: 'none' }}>•</span>
              <div style={{ flex: 1, fontSize: '13px', color: '#1e293b', lineHeight: 1.55 }}>{formattedParts}</div>
            </div>
          );
        }

        if (numberMatch) {
          return (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', paddingLeft: '2px' }}>
              <span style={{ 
                minWidth: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                background: '#ecfdf5', 
                color: '#059669', 
                fontSize: '11px', 
                fontWeight: 700, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '1px'
              }}>
                {numberMatch[1]}
              </span>
              <div style={{ flex: 1, fontSize: '13px', color: '#1e293b', lineHeight: 1.55 }}>{formattedParts}</div>
            </div>
          );
        }

        return <div key={idx} style={{ fontSize: '13px', color: '#1e293b', lineHeight: 1.55 }}>{formattedParts}</div>;
      })}
    </div>
  );
}
