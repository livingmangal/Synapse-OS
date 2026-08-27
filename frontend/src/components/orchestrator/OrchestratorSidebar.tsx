'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Layers, 
  Activity, 
  Scan, 
  FileText, 
  AlertOctagon, 
  Sun, 
  Zap, 
  Globe,
  Watch
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface OrchestratorSidebarProps {
  onOpenSOS?: () => void;
  activeTab?: string;
  onTabChange?: (tab: 'overview' | 'swarm' | 'analytics' | 'hospital' | 'scan' | 'records' | 'sync') => void;
}

export default function OrchestratorSidebar({ 
  onOpenSOS,
  activeTab = 'overview',
  onTabChange
}: OrchestratorSidebarProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const primaryNavItems = [
    { labelKey: 'tab_swarm', fallback: 'Swarm Intelligence', tab: 'swarm', icon: Zap, isTab: true },
    { labelKey: 'tab_overview', fallback: 'My Condition', tab: 'overview', icon: Layers, isTab: true },
    { labelKey: 'tab_analytics', fallback: 'Visual Analytics', tab: 'analytics', icon: Activity, isTab: true },
    { labelKey: 'tab_hospital', fallback: 'WHO Surveillance & Map', tab: 'hospital', icon: Globe, isTab: true },
    { labelKey: 'tab_scan', fallback: 'Medical Scan AI', tab: 'scan', icon: Scan, isTab: true },
    { labelKey: 'tab_records', fallback: 'ABHA & Records', tab: 'records', icon: FileText, isTab: true },
    { labelKey: 'tab_health_sync', fallback: 'Google & Apple Health', tab: 'sync', icon: Watch, isTab: true },
    { labelKey: 'brand_title', fallback: 'Sanjeevani OS Home', href: '/', icon: Home }
  ];

  return (
    <aside 
      className="orch-sidebar-fixed"
      style={{
        width: '76px',
        height: '100vh',
        background: '#ffffff',
        borderRight: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 0',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 999,
        boxShadow: '2px 0 12px rgba(0,0,0,0.03)'
      }}
    >
      {/* Brand Icon */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
        <Link 
          href="/" 
          title="Sanjeevani OS - Home"
          style={{ textDecoration: 'none' }}
        >
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '16px',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            overflow: 'hidden',
            padding: '4px'
          }}>
            <img 
              src="/AIIMS_New_Delhi.png" 
              alt="AIIMS New Delhi" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
        </Link>

        {/* Navigation Items */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', alignItems: 'center' }}>
          {primaryNavItems.map((item, idx) => {
            const Icon = item.icon;
            const isTabActive = item.isTab && activeTab === item.tab;
            const isRouteActive = !item.isTab && pathname === item.href;
            const isActive = isTabActive || isRouteActive;
            const titleLabel = t(item.labelKey, item.fallback);

            if (item.isTab && onTabChange) {
              return (
                <button
                  key={idx}
                  onClick={() => onTabChange(item.tab as any)}
                  title={titleLabel}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isActive ? '#e0f2fe' : 'transparent',
                    color: isActive ? '#0284c7' : '#334155',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? 'inset 0 0 0 1.5px #bae6fd' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = '#f0f9ff';
                      e.currentTarget.style.color = '#0284c7';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#334155';
                    }
                  }}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      left: '0px',
                      width: '4px',
                      height: '22px',
                      background: '#0284c7',
                      borderRadius: '0 4px 4px 0'
                    }} />
                  )}
                </button>
              );
            }

            return (
              <Link
                key={idx}
                href={item.href || '/'}
                title={titleLabel}
                data-no-swup="true"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isActive ? '#e0f2fe' : 'transparent',
                  color: isActive ? '#0284c7' : '#334155',
                  textDecoration: 'none',
                  position: 'relative',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? 'inset 0 0 0 1.5px #bae6fd' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#f0f9ff';
                    e.currentTarget.style.color = '#0284c7';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#334155';
                  }
                }}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Emergency SOS & Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', width: '100%' }}>
        {onOpenSOS && (
          <button
            onClick={onOpenSOS}
            title={t('btn_emergency_sos', 'Emergency SOS (112)')}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: '#fef2f2',
              border: '1.5px solid #fecaca',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.15)',
              transition: 'all 0.2s ease'
            }}
          >
            <AlertOctagon size={22} />
          </button>
        )}

        <div
          title="Clinical Day Mode"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Sun size={18} />
        </div>
      </div>
    </aside>
  );
}
