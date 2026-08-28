'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  HeartPulse, 
  Search, 
  Download, 
  Bell, 
  Sparkles, 
  BarChart3, 
  Activity, 
  Building2,
  Layers,
  Globe,
  Watch,
  Smartphone,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check
} from 'lucide-react';
import { PatientInfo } from './types';
import LanguageSelector from '@/components/ui/LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';

interface TopNavProps {
  activeTab: 'overview' | 'swarm' | 'analytics' | 'hospital' | 'scan' | 'records' | 'sync' | 'rural';
  onTabChange: (tab: 'overview' | 'swarm' | 'analytics' | 'hospital' | 'scan' | 'records' | 'sync' | 'rural') => void;
  patient: PatientInfo;
  onOpenExportModal: () => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
}

export default function OrchestratorTopNav({
  activeTab,
  onTabChange,
  patient,
  onOpenExportModal,
  searchQuery = '',
  onSearchChange
}: TopNavProps) {
  const { t } = useLanguage();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  const WhoIcon = ({ size }: { size?: number | string }) => (
    <img src="/who.svg" alt="WHO Logo" style={{ width: size || 13, height: size || 13, objectFit: 'contain' }} />
  );

  const tabs = [
    { id: 'swarm', label: t('tab_swarm', 'Swarm Intelligence'), icon: Sparkles },
    { id: 'overview', label: t('tab_overview', 'My Condition'), icon: Layers },
    { id: 'rural', label: t('tab_rural_health', 'Rural AI Healthcare'), icon: Smartphone },
    { id: 'analytics', label: t('tab_analytics', 'Visual Analytics'), icon: BarChart3 },
    { id: 'hospital', label: t('tab_hospital', 'WHO Surveillance & Map'), icon: WhoIcon },
    { id: 'scan', label: t('tab_scan', 'Medical Scan AI'), icon: Search },
    { id: 'records', label: t('tab_records', 'ABHA & Records'), icon: Building2 },
    { id: 'sync', label: t('tab_health_sync', 'Google & Apple Health'), icon: Watch }
  ];

  const checkScroll = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollBy = (amount: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
      background: '#ffffff',
      borderBottom: '1px solid #bae6fd',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 20px -4px rgba(2, 132, 199, 0.08)',
      width: '100%',
      boxSizing: 'border-box',
      overflow: 'visible',
      fontFamily: '"Times New Roman", Times, serif'
    }}>

      {/* Center Navigation Pills Outer Frame (Shrinkable & Centered) */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#f0f9ff',
        padding: '3px 4px',
        borderRadius: '9999px',
        border: '1px solid #bae6fd',
        gap: '3px',
        flex: '1 1 auto',
        minWidth: 0,
        marginRight: '12px',
        boxShadow: 'inset 0 1px 3px rgba(2, 132, 199, 0.06)',
        position: 'relative'
      }}>
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={() => scrollBy(-150)}
            title="Scroll left"
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #bae6fd',
              color: '#0284c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: '0 1px 3px rgba(2,132,199,0.15)'
            }}
          >
            <ChevronLeft size={12} />
          </button>
        )}

        {/* Scrollable Pills Track (Hidden Scrollbars) */}
        <div
          ref={trackRef}
          onScroll={checkScroll}
          onWheel={(e) => {
            if (trackRef.current && e.deltaY) {
              e.stopPropagation();
              trackRef.current.scrollLeft += e.deltaY * 0.8;
            }
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            flex: '1 1 auto',
            minWidth: 0
          }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id as any)}
                className="orch-nav-pill"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '5px 11px',
                  borderRadius: '9999px',
                  border: isActive ? '1px solid #0284c7' : '1px solid transparent',
                  fontSize: '11px',
                  whiteSpace: 'nowrap',
                  fontWeight: isActive ? 800 : 700,
                  background: isActive 
                    ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' 
                    : 'transparent',
                  color: isActive ? '#ffffff' : '#0f172a',
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 3px 10px rgba(2, 132, 199, 0.35)' : 'none',
                  transition: 'all 0.15s ease',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = '#0284c7';
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(2, 132, 199, 0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#0f172a';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <Icon size={12} color={isActive ? '#ffffff' : '#0284c7'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            onClick={() => scrollBy(150)}
            title="Scroll right"
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #bae6fd',
              color: '#0284c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: '0 1px 3px rgba(2,132,199,0.15)'
            }}
          >
            <ChevronRight size={12} />
          </button>
        )}

        {/* Arrow Dropdown Menu Button for Quick Selection */}
        <div ref={moreMenuRef} style={{ position: 'relative', flexShrink: 0 }}>
          <button
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            title="View all sections"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              padding: '4px 8px',
              borderRadius: '9999px',
              background: isMoreOpen ? '#e0f2fe' : '#ffffff',
              border: '1px solid #bae6fd',
              color: '#0284c7',
              fontSize: '10.5px',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(2, 132, 199, 0.1)',
              transition: 'all 0.15s ease'
            }}
          >
            <ChevronDown 
              size={12} 
              style={{ 
                transform: isMoreOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s ease'
              }} 
            />
          </button>

          {/* Floating Dropdown Menu */}
          {isMoreOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              width: '230px',
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #bae6fd',
              boxShadow: '0 12px 32px rgba(2, 132, 199, 0.18), 0 4px 12px rgba(0,0,0,0.06)',
              zIndex: 9999,
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}>
              <div style={{
                padding: '6px 10px',
                fontSize: '9.5px',
                fontWeight: 800,
                color: '#64748b',
                textTransform: 'uppercase',
                borderBottom: '1px solid #f1f5f9'
              }}>
                Orchestrator Workspaces
              </div>
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <div
                    key={tab.id}
                    onClick={() => {
                      onTabChange(tab.id as any);
                      setIsMoreOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      background: isActive ? '#f0f9ff' : 'transparent',
                      border: isActive ? '1px solid #bae6fd' : '1px solid transparent',
                      color: isActive ? '#0284c7' : '#0f172a',
                      fontSize: '11px',
                      fontWeight: isActive ? 800 : 600,
                      transition: 'all 0.1s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.background = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Icon size={13} color={isActive ? '#0284c7' : '#64748b'} />
                      <span>{tab.label}</span>
                    </div>
                    {isActive && <Check size={13} color="#0284c7" />}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Right Controls & Patient Avatar (ALWAYS FULLY VISIBLE) */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px', 
        flexShrink: 0,
        marginLeft: 'auto'
      }}>
        {/* Language Selector */}
        <div style={{ flexShrink: 0 }}>
          <LanguageSelector variant="nav" />
        </div>

        {/* Quick Export Hub Trigger */}
        <button
          onClick={onOpenExportModal}
          title="Export HL7 FHIR Bundle / Download Clinical PDF"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '5px 11px',
            height: '32px',
            background: '#ffffff',
            border: '1px solid #bae6fd',
            borderRadius: '9999px',
            fontSize: '11px',
            fontWeight: 800,
            color: '#0f172a',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            boxShadow: '0 2px 6px rgba(2, 132, 199, 0.08)',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f0f9ff';
            e.currentTarget.style.borderColor = '#0284c7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.borderColor = '#bae6fd';
          }}
        >
          <Download size={12} color="#0284c7" />
          <span style={{ whiteSpace: 'nowrap' }}>{t('btn_export_hub', 'Export Hub')}</span>
        </button>

        {/* Notification Bell */}
        <div style={{
          width: '32px',
          minWidth: '32px',
          height: '32px',
          minHeight: '32px',
          borderRadius: '50%',
          background: '#f0f9ff',
          border: '1px solid #bae6fd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0284c7',
          cursor: 'pointer',
          position: 'relative',
          flexShrink: 0,
          boxSizing: 'border-box'
        }}>
          <Bell size={14} />
          <span style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#ef4444'
          }} />
        </div>

        {/* Patient Profile Widget (ALWAYS 100% VISIBLE) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          paddingLeft: '8px',
          borderLeft: '1px solid #e2e8f0',
          flexShrink: 0
        }}>
          {patient.avatarUrl ? (
            <img
              src={patient.avatarUrl}
              alt={patient.name}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #bae6fd',
                flexShrink: 0
              }}
            />
          ) : (
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 900,
                border: '2px solid #bae6fd',
                flexShrink: 0
              }}
            >
              {patient.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'AB'}
            </div>
          )}
          <div style={{ whiteSpace: 'nowrap' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
              {patient.name}
            </div>
            <div style={{ fontSize: '9px', color: '#64748b', lineHeight: 1.2 }}>
              ABHA: <span style={{ fontWeight: 800, color: '#0284c7' }}>{patient.abhaId}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
