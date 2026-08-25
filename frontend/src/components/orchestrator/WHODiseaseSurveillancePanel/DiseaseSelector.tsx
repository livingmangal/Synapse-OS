import React from 'react';
import { Globe } from 'lucide-react';
import { DiseaseProfile } from './types';

interface DiseaseSelectorProps {
  diseases: DiseaseProfile[];
  selectedDiseaseId: string;
  onSelectDisease: (id: string) => void;
}

export default function DiseaseSelector({ diseases, selectedDiseaseId, onSelectDisease }: DiseaseSelectorProps) {
  return (
    <div style={{
      backgroundImage: 'url(/assets/images/who_panel_bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
      padding: '24px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      {/* Top Header Row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        borderBottom: '1px solid #f1f5f9',
        paddingBottom: '18px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: '#ffffff', // changed to white in case the WHO logo has colors
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            <img src="/who.svg" alt="WHO Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
          </div>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
              WHO Global Disease & Pathogen Surveillance Dashboard
            </h1>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>
              World Health Organization (WHO) & ICMR Live Epidemiological Feed • Real-Time Synchronized
            </span>
          </div>
        </div>

        {/* Global Summary Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: '#f8fafc',
          padding: '8px 16px',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Surveillance Telemetry</div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#ec4899' }}>194 Member States Active</div>
          </div>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
        </div>
      </div>

      {/* Disease Selection Section */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Step 1: Select Monitored Condition
            </span>
            <h2 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0' }}>
              WHO Top Priority Diseases & Pathogens
            </h2>
          </div>
          <span style={{ fontSize: '11.5px', color: '#64748b' }}>
            Click on any condition to load live global records & maps
          </span>
        </div>

        {/* Disease Selection Horizontal Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px'
        }}>
          {diseases.map((d) => {
            const isSelected = d.id === selectedDiseaseId;
            const Icon = d.icon;

            return (
              <div
                key={d.id}
                onClick={() => onSelectDisease(d.id)}
                style={{
                  padding: '14px 16px',
                  borderRadius: '14px',
                  border: isSelected ? '2px solid #ec4899' : '1px solid #e2e8f0',
                  background: isSelected ? '#fdf2f8' : '#f8fafc',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 14px rgba(236, 72, 153,0.12)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: isSelected ? '#ec4899' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#ec4899',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                  }}>
                    <Icon size={16} />
                  </div>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '6px',
                    background: isSelected ? '#ec4899' : '#e2e8f0',
                    color: isSelected ? '#ffffff' : '#475569'
                  }}>
                    WHO #{d.rank}
                  </span>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '13px',
                    fontWeight: 800,
                    color: isSelected ? '#be185d' : '#1e293b',
                    margin: '0 0 2px 0',
                    lineHeight: 1.3
                  }}>
                    {d.shortName}
                  </h3>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>
                    {d.annualDeaths}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
