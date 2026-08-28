import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content = '' }: MarkdownRendererProps) {
  const text = typeof content === 'string' ? content : String(content || '');
  const lines = text.split('\n');

  const elements: React.ReactNode[] = [];
  let currentTableRows: string[][] = [];
  let isInsideTable = false;

  const flushTable = (key: number) => {
    if (currentTableRows.length === 0) return null;
    const headerRow = currentTableRows[0];
    const dataRows = currentTableRows.slice(1);

    const tableEl = (
      <div key={`tbl-${key}`} style={{
        overflowX: 'auto',
        margin: '10px 0',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        background: '#ffffff'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '1.5px solid #cbd5e1' }}>
              {headerRow.map((col, cIdx) => (
                <th key={cIdx} style={{ padding: '8px 12px', fontWeight: 800, color: '#0f172a' }}>
                  {formatInlineText(col.trim())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, rIdx) => (
              <tr key={rIdx} style={{
                borderBottom: rIdx === dataRows.length - 1 ? 'none' : '1px solid #f1f5f9',
                background: rIdx % 2 === 0 ? '#ffffff' : '#fcfdfd'
              }}>
                {row.map((cell, cIdx) => (
                  <td key={cIdx} style={{ padding: '7px 12px', color: '#334155' }}>
                    {formatInlineText(cell.trim())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    currentTableRows = [];
    isInsideTable = false;
    return tableEl;
  };

  let idx = 0;
  while (idx < lines.length) {
    const line = lines[idx];
    const trimmed = line.trim();

    // 1. Table Row Detection (| Col 1 | Col 2 |)
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const isDivider = trimmed.replace(/[\|\-\:\s]/g, '').length === 0;
      if (!isDivider) {
        const cells = trimmed.slice(1, -1).split('|');
        currentTableRows.push(cells);
      }
      isInsideTable = true;
      idx++;
      continue;
    } else if (isInsideTable) {
      const flushed = flushTable(idx);
      if (flushed) elements.push(flushed);
    }

    if (!trimmed) {
      elements.push(<div key={`sp-${idx}`} style={{ height: '4px' }} />);
      idx++;
      continue;
    }

    // 2. Heading 1 (# Heading)
    if (trimmed.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${idx}`} style={{ fontSize: '16px', fontWeight: 900, color: '#0f172a', margin: '8px 0 4px', letterSpacing: '-0.2px' }}>
          {formatInlineText(trimmed.replace(/^#\s+/, ''))}
        </h1>
      );
      idx++;
      continue;
    }

    // 3. Heading 2 (## Heading)
    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${idx}`} style={{ fontSize: '14.5px', fontWeight: 800, color: '#0f172a', margin: '7px 0 3px', letterSpacing: '-0.1px' }}>
          {formatInlineText(trimmed.replace(/^##\s+/, ''))}
        </h2>
      );
      idx++;
      continue;
    }

    // 4. Heading 3 (### Heading)
    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${idx}`} style={{
          fontSize: '13.5px',
          fontWeight: 800,
          color: '#0369a1',
          margin: '6px 0 3px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          {formatInlineText(trimmed.replace(/^###\s+/, ''))}
        </h3>
      );
      idx++;
      continue;
    }

    // 5. Heading 4 (#### Heading)
    if (trimmed.startsWith('#### ')) {
      elements.push(
        <h4 key={`h4-${idx}`} style={{ fontSize: '12.5px', fontWeight: 800, color: '#475569', margin: '5px 0 2px' }}>
          {formatInlineText(trimmed.replace(/^####\s+/, ''))}
        </h4>
      );
      idx++;
      continue;
    }

    // 6. Blockquote (> Text)
    if (trimmed.startsWith('> ')) {
      elements.push(
        <div key={`bq-${idx}`} style={{
          borderLeft: '3px solid #0284c7',
          paddingLeft: '10px',
          margin: '6px 0',
          color: '#475569',
          fontSize: '12.5px',
          fontStyle: 'italic',
          background: '#f8fafc',
          padding: '6px 10px',
          borderRadius: '0 6px 6px 0'
        }}>
          {formatInlineText(trimmed.replace(/^>\s+/, ''))}
        </div>
      );
      idx++;
      continue;
    }

    // 7. Bullet List Item (• or - or * )
    const isBullet = trimmed.startsWith('•') || trimmed.startsWith('- ') || trimmed.startsWith('* ');
    const numberMatch = trimmed.match(/^(\d+)\.\s+/);

    if (isBullet) {
      const cleanText = trimmed.replace(/^[•\-\*]\s*/, '');
      elements.push(
        <div key={`li-${idx}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', paddingLeft: '2px', margin: '2px 0' }}>
          <span style={{ color: '#0284c7', fontSize: '13px', lineHeight: '19px', userSelect: 'none' }}>•</span>
          <div style={{ flex: 1, fontSize: '13px', color: '#1e293b', lineHeight: 1.55 }}>
            {formatInlineText(cleanText)}
          </div>
        </div>
      );
      idx++;
      continue;
    }

    if (numberMatch) {
      const cleanText = trimmed.replace(/^\d+\.\s*/, '');
      elements.push(
        <div key={`num-${idx}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', paddingLeft: '2px', margin: '2px 0' }}>
          <span style={{ 
            minWidth: '18px', 
            height: '18px', 
            borderRadius: '50%', 
            background: '#f0f9ff', 
            color: '#0284c7', 
            fontSize: '10.5px', 
            fontWeight: 800, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexShrink: 0,
            marginTop: '2px',
            border: '1px solid #bae6fd'
          }}>
            {numberMatch[1]}
          </span>
          <div style={{ flex: 1, fontSize: '13px', color: '#1e293b', lineHeight: 1.55 }}>
            {formatInlineText(cleanText)}
          </div>
        </div>
      );
      idx++;
      continue;
    }

    // Regular Paragraph
    elements.push(
      <div key={`p-${idx}`} style={{ fontSize: '13px', color: '#1e293b', lineHeight: 1.55 }}>
        {formatInlineText(trimmed)}
      </div>
    );
    idx++;
  }

  // If table remains at the end
  if (isInsideTable) {
    const flushed = flushTable(lines.length);
    if (flushed) elements.push(flushed);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {elements}
    </div>
  );
}

// Helper to format inline bold, inline code, tags
function formatInlineText(raw: string): React.ReactNode {
  // Split by bold (**bold**), code (`code`), or highlight
  const parts = raw.split(/(\*\*.*?\*\*|`.*?`)/g);
  return parts.map((part, pIdx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={pIdx} style={{ fontWeight: 700, color: '#0f172a' }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={pIdx} style={{
          background: '#f1f5f9',
          color: '#0369a1',
          padding: '1px 5px',
          borderRadius: '4px',
          fontSize: '11.5px',
          fontFamily: 'monospace',
          border: '1px solid #e2e8f0'
        }}>
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

