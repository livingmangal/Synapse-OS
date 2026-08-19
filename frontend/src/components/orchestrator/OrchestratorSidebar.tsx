'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Layers, 
  Activity, 
  Scan, 
  Box, 
  FileText, 
  AlertOctagon, 
  Sun, 
  Stethoscope, 
  FlaskConical, 
  Pill, 
  Syringe, 
  History,
  Zap,
  Globe
} from 'lucide-react';

interface OrchestratorSidebarProps {
  onOpenSOS?: () => void;
  activeTab?: string;
  onTabChange?: (tab: 'overview' | 'swarm' | 'analytics' | 'hospital' | 'scan' | 'records') => void;
}

export default function OrchestratorSidebar({ 
  onOpenSOS,
  activeTab = 'overview',
  onTabChange
}: OrchestratorSidebarProps) {
  const pathname = usePathname();

  const primaryNavItems = [
    { label: 'Agent Swarm DAG', tab: 'swarm', icon: Zap, isTab: true },
    { label: 'Digital Twin & Condition', tab: 'overview', icon: Layers, isTab: true },
    { label: 'Clinical Analytics Hub', tab: 'analytics', icon: Activity, isTab: true },
    { label: 'WHO Global Surveillance', tab: 'hospital', icon: Globe, isTab: true },
    { label: 'Medical Scan AI (YOLOv8)', tab: 'scan', icon: Scan, isTab: true },
    { label: 'ABHA & On-Chain Records', tab: 'records', icon: FileText, isTab: true },
    { label: 'Sanjeevani OS Home', href: '/', icon: Home }
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

            if (item.isTab && onTabChange) {
              return (
                <button
                  key={idx}
                  onClick={() => onTabChange(item.tab as any)}
                  title={item.label}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isActive ? '#fdf2f8' : 'transparent',
                    color: isActive ? '#db2777' : '#64748b',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? 'inset 0 0 0 1.5px #fbcfe8' : 'none'
                  }}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      left: '0px',
                      width: '4px',
                      height: '22px',
                      background: '#db2777',
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
                title={item.label}
                data-no-swup="true"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isActive ? '#fdf2f8' : 'transparent',
                  color: isActive ? '#db2777' : '#64748b',
                  textDecoration: 'none',
                  position: 'relative',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? 'inset 0 0 0 1.5px #fbcfe8' : 'none'
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
            title="1-Click Emergency SOS Dispatch (112 / 108)"
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
